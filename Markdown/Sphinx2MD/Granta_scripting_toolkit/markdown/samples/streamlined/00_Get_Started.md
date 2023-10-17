# Get Started 
Load MI Scripting Toolkit, connect to your MI Session, and select a database and table.

## Connect to MI
Import the `granta` libraries and connect to Granta MI via the Service Layer using Windows authentication,
replacing `my.server.name` with the name of your Granta MI server.


```python
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)
```

## Select a database
All the sample scripts use the *MI Training* database.


```python
my_db = mi.get_db(db_key="MI_Training")
```

Set a unit system, and choose whether to use absolute or relative temperatures (Kelvin/Rankine or Celsius/Fahrenheit).


```python
my_db.set_unit_system('UK Imperial', absolute_temperatures=False)
```

## Select a table
Select *MaterialUniverse* and print its number of attributes. 


```python
my_table = my_db.get_table("MaterialUniverse")
print("Table {0} has {1} attributes defined".format(my_table.name, len(my_table.attributes)))
```

    Table MaterialUniverse has 424 attributes defined
    

Print the definition of an attribute within your table.


```python
print("The definition of the Density attribute in {0} is {1}".format(my_table.name, my_table.attributes["Density"]))
```

    The definition of the Density attribute in MaterialUniverse is <Attribute Definition, name: Density, type: RNGE, unit: lb/in^3>
    

## Find a record
Search for a record by name (only exact matches for short or long name will be returned), and print information to help you locate and view it in MI applications.


```python
print("Finding Aluminum, 7075, wrought, T73...")
my_record = my_table.search_for_records_by_name("Aluminum, 7075, wrought, T73")[0]
```

    Finding Aluminum, 7075, wrought, T73...
    


```python
print("Found this record:")
my_record
```

    Found this record:
    




    <Record long name: Aluminum, 7075, wrought, T73>




```python
print("in database/table:")
my_record.db_key+"/"+my_record.table_name
```

    in database/table:
    




    'MI_Training/MaterialUniverse'




```python
print("at this point in the tree:")
"=>".join(my_record.path)
```

    at this point in the tree:
    




    'Metals and alloys=>Non-ferrous=>Aluminum=>Wrought=>7000 series (Zn-alloyed)=>7075'




```python
print("with data like this:")
my_table.bulk_fetch([my_record], attributes=['Mg (magnesium)'])
my_record.attributes['Mg (magnesium)']
```

    with data like this:
    




    <RangeValue name: Mg (magnesium), value: {'low': 2.5, 'high': 2.5}, high_value_is_inclusive: True, low_value_is_inclusive: True, unit: %>




```python
print("and you can see it in MI Viewer here:")
my_record.viewer_url
```

    and you can see it in MI Viewer here:
    




    'http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=7682acfe-46ca-4adf-94f7-6fa678debed1'


