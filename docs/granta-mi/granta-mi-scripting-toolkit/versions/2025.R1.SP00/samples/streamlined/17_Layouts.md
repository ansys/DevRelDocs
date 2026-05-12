# Layouts

This notebook shows how to access layouts through the Streamlined API.

## Connect to Granta MI


```python
from GRANTA_MIScriptingToolkit import granta as mpy
mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
```

## Access a layout and inspect its properties

The `Table.layouts` property contains a **dict** of all layouts in the table, indexed by the layout name. Show the
first two elements in this dictionary.


```python
table = db.get_table('MaterialUniverse')
list(table.layouts.items())[:2]
```



*Previous cell output:*
```output
[('Polymers', <TableLayout: Polymers; categories: 23>),
 ('Metals', <TableLayout: Metals; categories: 18>)]
```


Each layout contains a list of categories. Select a particular **Layout** object and view the first two categories
within the layout.


```python
polymers_layout = table.layouts['Polymers']
polymers_layout.categories[:2]
```



*Previous cell output:*
```output
['General properties', 'Composition overview']
```


The `attributes_by_category` property contains a **dict** of attributes indexed by their category. Display the
attributes in the first two categories.


```python
list(polymers_layout.attributes_by_category.items())[:2]
```



*Previous cell output:*
```output
[('General properties',
  ['Designation', 'Tradenames', 'Density', 'Price', 'Material form']),
 ('Composition overview',
  ['Composition (summary)',
   'Polymer class',
   'Polymer type',
   'Polymer type full name',
   '% filler (by weight)',
   'Filler type',
   'Additive'])]
```

