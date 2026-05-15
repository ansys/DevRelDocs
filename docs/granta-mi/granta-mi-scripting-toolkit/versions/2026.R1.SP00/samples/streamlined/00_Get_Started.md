# Get Started
Load MI Scripting Toolkit, connect to your MI Session, and select a database and table.

## Connect to MI
Import the `granta` libraries and connect to Granta MI via the Service Layer using Windows authentication,
replacing `my.server.name` with the name of your Granta MI server.


```python
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
```

## Select a database
All the sample scripts use the *MI Training* database.


```python
my_db = mi.get_db(db_key="MI_Training")
```

Set a unit system, and choose whether to use absolute or relative temperatures (Kelvin/Rankine or Celsius/Fahrenheit).


```python
my_db.unit_system = "UK Imperial"
my_db.absolute_temperatures = False
```

## Select a table
Select *MaterialUniverse* and print its number of attributes.


```python
my_table = my_db.get_table("MaterialUniverse")
print(f"Table {my_table.name} has {len(my_table.attributes)} attributes defined")
```
*Previous cell output:*
```output
Table MaterialUniverse has 424 attributes defined
```
Print the definition of an attribute within your table.


```python
print(f"The definition of the Density attribute in {my_table.name} is {my_table.attributes['Density']}")
```
*Previous cell output:*
```output
The definition of the Density attribute in MaterialUniverse is <Attribute Definition, name: Density, type: RNGE, unit: lb/in^3>
```
## Find a record
Search for a record by name (only exact matches for short or long name will be returned), and print information to
help you locate and view it in MI applications.


```python
print("Finding Aluminum, 7075, wrought, T73...")
my_record = my_table.search_for_records_by_name("Aluminum, 7075, wrought, T73")[0]
```
*Previous cell output:*
```output
Finding Aluminum, 7075, wrought, T73...
```

```python
print("Found this record:")
my_record
```
*Previous cell output:*
```output
Found this record:
```


*Previous cell output:*
```output
<Record long name: Aluminum, 7075, wrought, T73>
```



```python
print("in database/table:")
f"{my_record.db_key}/{my_record.table_name}"
```
*Previous cell output:*
```output
in database/table:
```


*Previous cell output:*
```output
'MI_Training/MaterialUniverse'
```



```python
print("at this point in the tree:")
" => ".join(my_record.path)
```
*Previous cell output:*
```output
at this point in the tree:
```


*Previous cell output:*
```output
'Metals and alloys => Non-ferrous => Aluminum => Wrought => 7000 series (Zn-alloyed) => 7075'
```



```python
print("with data like this:")
my_table.bulk_fetch([my_record], attributes=["Mg (magnesium)"])
my_record.attributes["Mg (magnesium)"]
```
*Previous cell output:*
```output
with data like this:
```


*Previous cell output:*
```output
<RangeValue name: Mg (magnesium), value: Range(low=2.5, high=2.5, low_value_is_inclusive=True, high_value_is_inclusive=True), unit: %>
```



```python
print("and you can see it in MI Viewer here:")
my_record.viewer_url
```
*Previous cell output:*
```output
and you can see it in MI Viewer here:
```


*Previous cell output:*
```output
'http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=7682acfe-46ca-4adf-94f7-6fa678debed1'
```

