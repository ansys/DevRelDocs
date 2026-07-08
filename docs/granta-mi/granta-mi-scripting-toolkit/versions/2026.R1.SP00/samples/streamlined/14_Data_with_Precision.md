# Data with Precision

Import numeric data with explicitly-specified precision information by specifying the number of significant figures.

For example: the temperature during a test is measured using a thermocouple with an accuracy of 0.1 °C for
measurements below 100 °C.
Measures for multiple tests might be in the form: 90.6 °C, 90.0 °C, 89.9 °C. The trailing zeros in `90.0`
are significant.

Floating-point numbers in Python cannot provide exact decimal representation, so additional information is required to
specify the precision of a floating-point value before importing it into Granta MI. This example illustrates how
significant figures can be set when importing point and range attribute values, as well as how that information is
represented when exporting attribute values which have significant figures information.

## Connect to MI
Get a database and table.


```python
from datetime import datetime
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()

db = mi.get_db(db_key="MI_Training")
db.unit_system = "Metric"
db.absolute_temperatures = False

table = db.get_table("Composite Design Data")
```

## Create a new record
Create a new ``Record`` object.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 13:{now}"
record = table.create_record(name=record_name)
record
```



*Previous cell output:*
```output
<Record long name: Scripting Toolkit Example 13:Wed Jan  7 19:29:05 2026>
```


## Edit the record's attributes
### Values with precision
To add precision information to a floating-point value, use the ``ValueWithPrecision`` class. To simplify the import
of values with similar resolution but different exponents, specifying significant digits is done by
specifying a number of digits after the decimal point.


```python
temperature_value = mpy.ValueWithPrecision(value=90, number_of_digits=1)
print("Decimal representation:", temperature_value.as_decimal)
print("MI Significant figures:", temperature_value.significant_figures)
```
*Previous cell output:*
```output
Decimal representation: 90.0
MI Significant figures: 3
```
### Point attributes
To set significant figures on a single-valued point attribute, set the attribute ``.value`` property to an instance of
``ValueWithPrecision``.


```python
test_temperature = record.attributes["Test temperature"]
test_temperature.value = temperature_value
test_temperature.unit = "°C"
test_temperature.value.as_decimal
```



*Previous cell output:*
```output
Decimal('90.0')
```


To set significant figures on a multi-valued point attribute and assign parameter values, set the ``.value`` property
to a tuple of ``ParameterizedPointValue`` with ``ValueWithPrecision`` values.


```python
modulus = record.attributes["0° tension modulus - measured"]
modulus.unit = "GPa"
modulus.value = (
    mpy.ParameterizedPointValue(
        value=mpy.ValueWithPrecision(value=40.7, number_of_digits=2),
        parameters=(
            mpy.PointParameterValue("Basis", "Mean"),
        )
    ),
    mpy.ParameterizedPointValue(
        value=mpy.ValueWithPrecision(value=41.46, number_of_digits=2),
        parameters=(
            mpy.PointParameterValue("Basis", "A-basis"),
        )
    )
)
```

### Range attributes
Set the ``.value`` property to a ``Range`` object, providing high and low values with precision.


```python
resin_content = record.attributes["Resin content"]
fiber_volume = record.attributes["Fiber volume"]

resin_content.value = mpy.Range(mpy.ValueWithPrecision(28, 0),  mpy.ValueWithPrecision(30, 0))
resin_content.unit = "wt%"

fiber_volume.value = mpy.Range(
    low=None,
    high=mpy.ValueWithPrecision(62.0, 1),
    high_value_is_inclusive=False
)
fiber_volume.unit = "%"
```

## Write your changes to MI
First, specify the attributes on the record which you want to update on the server. Then write the changes to MI.
The list of updated ``Record`` objects is returned.


```python
record.set_attributes([resin_content, test_temperature, fiber_volume, modulus])
record = mi.update([record])[0]
```

## Output the record's attributes
Access the attribute values via the same properties you used to assign them. Significant figures information is
available via the ``.trailing_zero_information`` property.

The test temperature has been stored with 1 digit of precision. The trailing zero information includes the entered
value, the entered unit, as well as the number of significant figures stored with the value. The additional properties
``as_decimal`` and ``number_of_digits`` help convert the information back to a more accessible representations:


```python
test_temperature = record.attributes["Test temperature"]
print(f"Test temperature value: {test_temperature.value} {test_temperature.unit}")
print("Test temperature precision information:", test_temperature.trailing_zero_information)
print("Decimal representation:", test_temperature.trailing_zero_information.as_decimal)
print("Number of digits:", test_temperature.trailing_zero_information.number_of_digits)
```
*Previous cell output:*
```output
Test temperature value: 90.0 °C
Test temperature precision information: TrailingZeroInformation('90', '°C', 3)
Decimal representation: 90.0
Number of digits: 1
```

```python
modulus = record.attributes["0° tension modulus - measured"]
formatted_points = ", ".join([
    f"{point.as_decimal} {modulus.unit} ({modulus.value[idx].parameters_by_name['Basis']})"
    for idx, point in enumerate(modulus.trailing_zero_information)
])
print("0° tension modulus:", formatted_points)
```
*Previous cell output:*
```output
0° tension modulus: 40.70 GPa (Mean), 41.46 GPa (A-basis)
```
Define a function to format ranges as strings with the appropriate inclusive or exclusive inequality
symbols and at the stored precision.


```python
def format_range_with_significant_figures(range_value):
    low_value = range_value.value.low
    if range_value.low_value_trailing_zero_information:
        low_value = range_value.low_value_trailing_zero_information.as_decimal
    if low_value is not None:
        low_inequality = "≤" if range_value.low_value_is_inclusive else "<"
    else:
        low_inequality = ""
    low_range = f"{low_value} {low_inequality}" if low_value else ""

    high_value = range_value.value.high
    if range_value.high_value_trailing_zero_information:
        high_value = range_value.high_value_trailing_zero_information.as_decimal
    if high_value is not None:
        high_inequality = "≤" if range_value.high_value_is_inclusive else "<"
    else:
        high_inequality = ""
    high_range = f"{high_inequality} {high_value}" if high_value else ""

    unit_symbol = range_value.unit
    return f"{low_range} x {high_range} {unit_symbol}".strip()
```


```python
resin_content = record.attributes["Resin content"]
print(format_range_with_significant_figures(resin_content))
```
*Previous cell output:*
```output
28 ≤ x ≤ 30 wt%
```

```python
fiber_volume = record.attributes["Fiber volume"]
print(format_range_with_significant_figures(fiber_volume))
```
*Previous cell output:*
```output
x < 62.0 %
```