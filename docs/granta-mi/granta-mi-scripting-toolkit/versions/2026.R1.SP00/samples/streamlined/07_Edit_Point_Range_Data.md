# Point and Range data
Work with point and range data, including multi-valued points and open-ended ranges.

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

## Create a new record and path
Define a path in the table from a starting folder (in this case the top level folder) using `path_from()`.
If the path does not exist, the required folders will be created.
Create a new **Record** object at the end of the path.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 7:{now}"
folder = table.path_from(None, tree_path=["Epoxy / Glass", "3M, S-Glass Unitape S2/SP381", "[0]"])
record = table.create_record(name=record_name, parent=folder)
record, folder
```



*Previous cell output:*
```output
(<Record long name: Scripting Toolkit Example 7:Wed Jan  7 19:25:19 2026>,
 <Record long name: 3M, S-Glass Unitape S2/SP381, [0]>)
```


## Edit the record's attributes
Access some empty point and range attributes.


```python
test_temperature = record.attributes["Test temperature"]
modulus = record.attributes["0° tension modulus - measured"]
resin_content = record.attributes["Resin content"]
fiber_volume = record.attributes["Fiber volume"]
```

### Point attributes
Schema Administrators can set whether point attributes accept multiple values or a single value. In Scripting
Toolkit, these attribute values are represented via ``AttributePointMulti`` or ``AttributePointSingle``.

Single-valued attributes must be set to a single float or integer value.


```python
test_temperature.value = 23
test_temperature.unit = "°C"
```

To define a value with parameters, set the ``.value`` property to a tuple of ``ParameterizedPointValue``.


```python
modulus.unit = "GPa"
modulus.value = (
    mpy.ParameterizedPointValue(
        value=8.0,
        parameters=(mpy.PointParameterValue("Basis", "Mean"),)
    ),
    mpy.ParameterizedPointValue(
        value=7.5,
        parameters=(mpy.PointParameterValue("Basis", "A-basis"),)
    )
)
```

### Range attributes
Access the `value` property directly and assign a ``Range`` instance.
Omitting either the 'low' or 'high' value creates an open-ended range.


```python
resin_content.value = mpy.Range(low=28.0, high=30.0)
resin_content.unit = "wt%"
```

The high and low values can separately be flagged as either inclusive (≤ and ≥) or exclusive
(< and >). Ranges default to inclusive.


```python
fiber_volume.value = mpy.Range(
    low=None,
    high=62.0,
    high_value_is_inclusive=False,
)
fiber_volume.unit = "%"
print(fiber_volume.high_value_is_inclusive)
```
*Previous cell output:*
```output
False
```
## Write your changes to MI
First, specify the attributes on the record which you want to update on the server. Then write the changes to MI.
The list of updated **Record** objects is returned.


```python
record.set_attributes([resin_content, test_temperature, fiber_volume, modulus])
record = mi.update([record])[0]
```

## Output the record's attributes
Access the attribute values via the same properties you used to assign them.


```python
test_temperature = record.attributes["Test temperature"]
print(f"Test temperature: {test_temperature.value} {test_temperature.unit}")

modulus = record.attributes["0° tension modulus - measured"]
print("0° tension modulus: ", end="")
formatted_points = [
    f"{point.value} {modulus.unit} ({point.parameters_by_name['Basis']})"
    for point in modulus.value
]
print(", ".join(formatted_points))
```
*Previous cell output:*
```output
Test temperature: 23.0 °C
0° tension modulus: 7.5 GPa (A-basis), 8.0 GPa (Mean)
```
Define a function to format ranges as strings with the appropriate inclusive or exclusive inequality
symbols.


```python
def format_range(range_value):
    low_value = range_value.value.low
    if low_value is not None:
        low_inequality = "≤" if range_value.low_value_is_inclusive else "<"
    else:
        low_inequality = ""
    low_range = f"{low_value} {low_inequality}" if low_value else ""

    high_value = range_value.value.high
    if high_value is not None:
        high_inequality = "≤" if range_value.high_value_is_inclusive else "<"
    else:
        high_inequality = ""
    high_range = f"{high_inequality} {high_value}" if high_value else ""

    unit_symbol = range_value.unit
    return f"{low_range} x {high_range} {unit_symbol}".strip()


resin_content = record.attributes["Resin content"]
print(format_range(resin_content))

fiber_volume = record.attributes["Fiber volume"]
print(format_range(fiber_volume))
```
*Previous cell output:*
```output
28.0 ≤ x ≤ 30.0 wt%
x < 62.0 %
```