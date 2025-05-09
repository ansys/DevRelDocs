# Add Point and Range data
Work with point and range attribute types, including multi-valued points and open-ended ranges.

## Connect to MI
Get a database and table.


```python
from datetime import datetime
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)

db = mi.get_db(db_key="MI_Training")
db.unit_system = "Metric"
db.absolute_temperatures = False

tab = db.get_table("Composite Design Data")
```

## Create a new record and path
Define a path in the table from a starting folder (in this case the top level folder) using `path_from()`.
If the path does not exist, the required folders will be created.
Create a new **Record** object at the end of the path.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 12:{now}"
folder = tab.path_from(None, tree_path=["Epoxy / Glass", "3M, S-Glass Unitape S2/SP381", "[0]"])
record = tab.create_record(name=record_name, parent=folder)
record, folder
```



*Previous cell output:*
```output
(<Record long name: Scripting Toolkit Example 12:Thu May  8 23:36:51 2025>,
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
Assign a list of numeric values to the `points` property.

If multiple values are assigned, you must also assign a list of dictionaries containing the parameter values to the
`parameters` property. (The two lists must be the same length.)
Here, a single parameter called *Basis* is used to discriminate between the two point values.


```python
test_temperature.value = 23
test_temperature.unit = "°C"

modulus.value = [8, 7.5]
modulus.unit = "GPa"
modulus.parameters = [{"Basis": "Mean"}, {"Basis": "A-basis"}]
```

### Range attributes
Access the `value` property directly and assign either a dictionary or tuple for high and low values.
Omitting either the 'low' or 'high' value creates an open-ended range.


```python
resin_content.value = {"low": 28, "high": 30}
resin_content.unit = 'wt%'

fiber_volume.value = (None, 62.0)
fiber_volume.unit = "%"
```

The high and low values can separately be flagged as either inclusive (≤ and ≥) or exclusive
(< and >). Ranges default to inclusive.


```python
fiber_volume.high_value_is_inclusive = False
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
    f"{point} {modulus.unit} ({modulus.parameters[idx]['Basis']})"
    for idx, point in enumerate(modulus.value)
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
    low_value = range_value.value["low"]
    if low_value is not None:
        low_inequality = "≤" if range_value.low_value_is_inclusive else "<"
    else:
        low_inequality = ""
    low_range = f"{low_value} {low_inequality}" if low_value else ""

    high_value = range_value.value["high"]
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