# Data validation using Scripting Toolkit

This notebook shows a best-practice approach to data validation in Granta MI by defining a set of simple data
validation as individual Python functions.

Note: The examples shown here do not cover all the possible ways in which data stored in Granta MI could be validated,
but show a framework which could be extended to perform regular checking of data in a Granta MI deployment.

The approach described in this notebook can be split into three phases:

1. Define the validation rules
2. Validate the data
3. Output the results

## 1. Define the validation rules

Before we define the rules, import the Scripting Toolkit so we can use Python type hints.


```python
from GRANTA_MIScriptingToolkit import granta as mpy
```

### check_attribute_is_populated

Next, define the first data validation rule. This rule will check that an attribute is populated.


```python
def check_attribute_is_populated(record: mpy.Record, attribute_name: str) -> tuple[bool, str | None]:
    attribute = record.attributes[attribute_name]
    if attribute.is_empty(): 
        return False, f'Attribute "{attribute_name}" is not populated for record "{record.name}"'
    return True, None
```

All validation rules will have a similar structure, in that they are a function with the same parameters:

* ``record``: a Scripting Toolkit ``Record`` object.
* ``attribute_name``: the name of the attribute to be validated.

The functions also all return a ``tuple`` containing the result as a boolean value (``True`` is a successful check,
and ``False`` is a failure), and an optional message as a ``str``. The message describes the failure, and so is
omitted if the check passed.

### check_attribute_is_positive

Now define a second validation rule, which checks that the attribute is positive.


```python
def check_attribute_is_positive(record: mpy.Record, attribute_name: str) -> tuple[bool, str | None]:
    attribute = record.attributes[attribute_name]
    is_positive = attribute.value > 0
    if not is_positive:
        return False, f'Attribute "{attribute_name}" is not positive for record "{record.name}"'
    return True, None
```

This check will fail with an unhandled exception if ``attribute.value`` is non-numeric or empty. The case where the
attribute value is empty will be handled by only running this check if the ``check_attribute_is_populated`` check was
successful. The case where the attribute value is non-numeric should be avoided at runtime by ensuring this check is
only applied to numeric attributes.

### check_attribute_is_monotonically_increasing

Finally, define a more complex validation rule that checks that the data in series functional attribute is
monotonically increasing for each individual series.


```python
def check_attribute_is_monotonically_increasing(record: mpy.Record, attribute_name: str) -> tuple[bool, str | None]:
    attribute = record.attributes[attribute_name]
    
    # Initialize values for the previous datapoint and series
    previous_y = previous_x = -float("inf")
    current_series = 0

    # Iterate over each row in the database, splitting the data by series
    for row in attribute.data_with_series_number[1:]:
        y = row[0]  # First value is always the y attribute
        x = row[2]  # Third value is always the x parameter
        series = row[-1]  # The final value is the series number

        # If the series has changed, then update the series value
        if series != current_series:
            current_series = series

        # If the series hasn't changed, then check values
        elif y <= previous_y or x <= previous_x:
            return (
                False,
                f'Attribute "{attribute_name}", series {series} is not monotonically increasing for record '
                f'"{record.name}"'
            )
    
        # Update the previous values
        previous_y = y
        previous_x = x
    return True, None
```

Again, the case where the attribute is not a series functional attribute or is empty is unhandled.

### Define test cases

Finally, we now create a dictionary to describe the test cases, formed by mapping each attribute to the sequence of
validation rules to be applied to that attribute.

For example, for text attributes the check only ensures that they are populated, but numeric attributes are checked to
ensure that the value is both populated and then that the value is positive. Note that validation rules will be
checked in order.


```python
test_cases = {
    "Common Name": [check_attribute_is_populated],
    "Thickness": [check_attribute_is_populated],
    "Statistical Basis": [check_attribute_is_populated],
    "Density": [check_attribute_is_populated, check_attribute_is_positive],
    "Thermal Conductivity": [check_attribute_is_populated, check_attribute_is_positive],
    "Yield Strength, L": [check_attribute_is_populated, check_attribute_is_positive],
    "Tensile Stress/Strain, L": [check_attribute_is_populated, check_attribute_is_monotonically_increasing],
}
```

Note that because the function names are not followed by ``()``, the functions are not invoked. This dictionary only
contains *references* to the validation functions, it does not include the *results*.

## 2. Validate the data

After defining our validation rules, we can run them against the database.

First, connect to Granta MI and fetch the records to validate. This example uses the ``table.all_records()`` method
and then filters out example records and unreleased v1 records. Alternatively, any approach could be used that
produces a list of records, for example searching for a last modified date, or using a Record List.


```python
mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Design Data")

# Exclude example records
records = [r for r in table.all_records() if "Example" not in r.name]

# Exclude unreleased v1 records
mi.bulk_fetch_release_states(records)
records = [r for r in records if not (r.release_state == "Unreleased" and r.version_number == 1)]
records
```



*Previous cell output:*
```output
[<Record long name: 250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis>,
 <Record long name: Aluminum alloys, 7075-T6, Sheet>,
 <Record long name: Titanium alloys, Ti-6Al-4V>,
 <Record long name: Nickel alloys, Inconel 718, Forging>]
```


Next, use the keys of the ``test_cases`` dictionary defined in the previous section to bulk fetch the data required
for these checks.


```python
attribute_names = list(test_cases.keys())
table.bulk_fetch(records=records, attributes=attribute_names)
```

Finally, run each validation rule in sequence against each record, and store the result in a pandas DataFrame. The
results are run in such a way that if a check against a specific record/attribute combination fails, each subsequent
check will be skipped.


```python
import pandas as pd

results = []

# Iterate over all records and attributes
for record in records:
    for attribute_name, validation_rules in test_cases.items():

        # The first time we test this attribute, the previous result is None
        previous_result = None

        # Iterate over all validation rules for this attribute
        for rule in validation_rules:
            
            # These column values describe the check that will be performed.
            check_result = {
                "Record Name": record.name,
                "Record URL": record.viewer_url,
                "Attribute": attribute_name,
                "Check": rule.__name__,
            }

            # If the previous check in this sequence failed, then skip all
            # subsequent checks.
            if previous_result is False:
                check_result["Result"] = None
                check_result["Message"] = "Skipped"

            # If the previous check did not fail, then run the check and record
            # the results.
            else:
                result, message = rule(record=record, attribute_name=attribute_name)
                check_result["Result"] = result
                check_result["Message"] = message
                previous_result = result

            # Add the results to the list
            results.append(check_result)

df_results = pd.DataFrame(data=results)
```

## 3. Output the results

The results are stored in a DataFrame, so they can be easily displayed in the notebook. The code below uses the
``.value_counts()`` method applied to the **Result** column to show a summary of the results. Specify ``dropna=False``
to include ``None`` results, i.e. tests that were skipped.


```python
df_results.Result.value_counts(dropna=False)
```



*Previous cell output:*
```output
Result
True     29
False     9
None      6
Name: count, dtype: int64
```


Filter out the passed tests, leaving only the failed or skipped tests, and display the result.


```python
df_failures_skipped = df_results.loc[df_results.Result != True]
df_failures_skipped
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Record Name</th>
      <th>Record URL</th>
      <th>Attribute</th>
      <th>Check</th>
      <th>Result</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>11</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Common Name</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Common Name" is not populated for r...</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Statistical Basis</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Statistical Basis" is not populated...</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Thermal Conductivity</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Thermal Conductivity" is not popula...</td>
    </tr>
    <tr>
      <th>17</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Thermal Conductivity</td>
      <td>check_attribute_is_positive</td>
      <td>None</td>
      <td>Skipped</td>
    </tr>
    <tr>
      <th>18</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Yield Strength, L</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Yield Strength, L" is not populated...</td>
    </tr>
    <tr>
      <th>19</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Yield Strength, L</td>
      <td>check_attribute_is_positive</td>
      <td>None</td>
      <td>Skipped</td>
    </tr>
    <tr>
      <th>20</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Tensile Stress/Strain, L</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Tensile Stress/Strain, L" is not po...</td>
    </tr>
    <tr>
      <th>21</th>
      <td>Aluminum alloys, 7075-T6, Sheet</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Tensile Stress/Strain, L</td>
      <td>check_attribute_is_monotonically_increasing</td>
      <td>None</td>
      <td>Skipped</td>
    </tr>
    <tr>
      <th>24</th>
      <td>Titanium alloys, Ti-6Al-4V</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Statistical Basis</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Statistical Basis" is not populated...</td>
    </tr>
    <tr>
      <th>31</th>
      <td>Titanium alloys, Ti-6Al-4V</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Tensile Stress/Strain, L</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Tensile Stress/Strain, L" is not po...</td>
    </tr>
    <tr>
      <th>32</th>
      <td>Titanium alloys, Ti-6Al-4V</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Tensile Stress/Strain, L</td>
      <td>check_attribute_is_monotonically_increasing</td>
      <td>None</td>
      <td>Skipped</td>
    </tr>
    <tr>
      <th>38</th>
      <td>Nickel alloys, Inconel 718, Forging</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Thermal Conductivity</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Thermal Conductivity" is not popula...</td>
    </tr>
    <tr>
      <th>39</th>
      <td>Nickel alloys, Inconel 718, Forging</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Thermal Conductivity</td>
      <td>check_attribute_is_positive</td>
      <td>None</td>
      <td>Skipped</td>
    </tr>
    <tr>
      <th>42</th>
      <td>Nickel alloys, Inconel 718, Forging</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Tensile Stress/Strain, L</td>
      <td>check_attribute_is_populated</td>
      <td>False</td>
      <td>Attribute "Tensile Stress/Strain, L" is not po...</td>
    </tr>
    <tr>
      <th>43</th>
      <td>Nickel alloys, Inconel 718, Forging</td>
      <td>http://my.server.name/mi/datasheet.aspx?dbKey=...</td>
      <td>Tensile Stress/Strain, L</td>
      <td>check_attribute_is_monotonically_increasing</td>
      <td>None</td>
      <td>Skipped</td>
    </tr>
  </tbody>
</table>
</div>



Alternatively, write the complete set of results to Excel, making it easy to review and share the validation results
with other Granta MI data stakeholders.

First, ensure the output directory exists. This directory will already exist if a notebook
was run previously that saved a file to disk.


```python
from pathlib import Path
output_folder = Path("./output")
output_folder.mkdir(exist_ok=True)
```

Next, save the validation results.


```python
df_results.to_excel("output/13_validation_results.xlsx")
```

## Next steps

The data validation framework shown here illustrates a scalable and extensible approach to validating data in Granta
MI with the Scripting Toolkit. It shows only very basic data validation operations though, and could be extended in
the following ways:

* Additional text validation rules. For example, validating spelling and grammar in long text attributes.
* Additional numeric validation rules. For example, comparing attribute values to each other, or to some generally
  accepted value range.
* Additional functional validation rules. For example, checking that a functional attribute evaluated at room
  temperature is equal to a certain attribute.
* Automatically modifying the database to ensure consistency.
* Running the script automatically in batch mode. For more information see
  [Authentication](../../user_guide/authentication.rst).
* Tracking previous failures to provide a delta between multiple validation runs.
* Using a Python testing framework like [pytest](https://docs.pytest.org/en/stable/) to organize test cases
  and provide result reports.
