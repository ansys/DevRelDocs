# Linked Tabular Data

Work with linked tabular data, including how to access linked data within linked rows.

In general, tabular attributes contain a combination of local and linked tabular columns. This example focuses on
linked tabular rows and columns only. [Example 11](./11_Edit_Local_Tabular_Data.ipynb) shows how to work with local
tabular data.

## Access an existing record
Connect to MI and specify a database and table.


```python
from datetime import datetime, date
from pathlib import Path

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Tensile Statistical Data")
```

Access an existing record by path.


```python
records = table.get_records_from_path(
    starting_node=None,
    tree_path=["Additive Manufacturing", "Titanium", "Ti-6Al-4V"],
)
record = next(r for r in records if r.name == "L13L12 - 9 Samples")
record
```



*Previous cell output:*
```output
<Record long name: L13L12 - 9 Samples>
```


## Access a linked tabular attribute

Access the tabular attribute *Tensile test data used in this rollup*.


```python
tabular_attribute = record.attributes["Tensile test data used in this rollup"]
tabular_attribute
```



*Previous cell output:*
```output
<TabularValue name: Tensile test data used in this rollup (not loaded)>
```


The tabular attribute `__repr__` shows that the tabular attribute is not loaded yet, and so additional information
about the number of rows and columns is not available.

Tabular data is loaded on-demand to improve performance, and reading or modifying the data will load the data
automatically. However, accessing the `__repr__` does not trigger the load operation. To load the data manually, use
the `.load()` method.

Once the attribute is loaded, the `__repr__` shows the number of rows and columns.


```python
tabular_attribute.load()
tabular_attribute
```



*Previous cell output:*
```output
<TabularValue name: Tensile test data used in this rollup, shape: 9 x 8>
```


The `.column_name`, `.column_types`, and `.linked_columns` properties list the tabular column names, types, and
whether the column is linked. Each of these properties contain 8 entries, which corresponds to the number of columns
in the tabular attribute, and the size printed in the tabular attribute `__repr__`.


```python
for column_name, column_type, is_linked in zip(
    tabular_attribute.columns, tabular_attribute.column_types, tabular_attribute.linked_columns
):
    print(f"{column_name}: {column_type} ({'Linked' if is_linked else 'Local'})")
```
*Previous cell output:*
```output
Specimen ID: STXT (Linked)
Date Test Performed: DTTM (Linked)
Strain rate is equivalent: LOGI (Linked)
Control mode: DISC (Linked)
Test Temperature: POIN (Linked)
Young's Modulus (11-axis): POIN (Linked)
0.02% Offset yield stress: POIN (Linked)
0.2% Offset yield stress: POIN (Linked)
```
The `.value` property contains an immutable representation of the current state of the tabular attribute
value.

This property is useful as a high-level summary of the data, but should not be used for processing. The `.rows`
property described in the next section provides a richer representation of the data.


```python
tabular_attribute.value
```



*Previous cell output:*
```output
((('L13L12AA1T',), (), (), (), (), (), (), ((126.73,),), 'L13L12AA1T'),
 (('L13L12AA3T',),
  (),
  (),
  (),
  (),
  (),
  (),
  ((126.06499999999998,),),
  'L13L12AA3T'),
 (('L13L12AA5T',), (), (), (), (), (), (), ((129.39,),), 'L13L12AA5T'),
 (('L13L12AA7T',), (), (), (), (), (), (), ((132.43,),), 'L13L12AA7T'),
 (('L13L12AA9T',), (), (), (), (), (), (), ((133.0,),), 'L13L12AA9T'),
 (('L13L12AA11T',), (), (), (), (), (), (), ((127.3,),), 'L13L12AA11T'),
 (('L13L12AA13T',), (), (), (), (), (), (), ((121.125,),), 'L13L12AA13T'),
 (('L13L12AA15T',), (), (), (), (), (), (), ((121.315,),), 'L13L12AA15T'),
 (('L13L12AA17T',), (), (), (), (), (), (), ((121.885,),), 'L13L12AA17T'))
```


The `.linking_table` and `.linking_attribute` properties contain the target table and target attribute. This is a
linked tabular attribute, so these properties return `Table` and `AttributeValue` objects respectively.


```python
print(f"Target table: {tabular_attribute.linking_table}")
print(f"Target attribute: {tabular_attribute.linking_attribute}")
```
*Previous cell output:*
```output
Target table: <Table name: Tensile Test Data, subsets: {'Tensile Test Data'}>
Target attribute: <Attribute Definition, name: Specimen ID, type: STXT>
```
### Tabular rows

The `.rows` property lists all rows. There are 9 `TabularRow` objects shown, which corresponds with the size printed
by the tabular attribute `__repr__`.


```python
tabular_attribute.rows
```



*Previous cell output:*
```output
(<TabularRow linking_value="L13L12AA1T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA3T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA5T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA7T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA9T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA11T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA13T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA15T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA17T" (0 of 0 local cells populated)>)
```


Each individual tabular row `__repr__` contains the linking value and the row ID.


```python
for row in tabular_attribute.rows:
    print(row.linking_value)
```
*Previous cell output:*
```output
L13L12AA1T
L13L12AA3T
L13L12AA5T
L13L12AA7T
L13L12AA9T
L13L12AA11T
L13L12AA13T
L13L12AA15T
L13L12AA17T
```
The linked records themselves are available by accessing the `AttributeTabular.linked_records` property. This returns
a dictionary mapping the linking value to the list of resolved records in the target table. Each row has a single
linking value, but in general a linking value may match zero or more records. In this example, each linking value
matches one record.


```python
tabular_attribute.linked_records
```



*Previous cell output:*
```output
{'L13L12AA1T': [<Record long name: L13L12AA1T>],
 'L13L12AA3T': [<Record long name: L13L12AA3T>],
 'L13L12AA5T': [<Record long name: L13L12AA5T>],
 'L13L12AA7T': [<Record long name: L13L12AA7T>],
 'L13L12AA9T': [<Record long name: L13L12AA9T>],
 'L13L12AA11T': [<Record long name: L13L12AA11T>],
 'L13L12AA13T': [<Record long name: L13L12AA13T>],
 'L13L12AA15T': [<Record long name: L13L12AA15T>],
 'L13L12AA17T': [<Record long name: L13L12AA17T>]}
```


### Tabular cells

The cells are available as a tuple of cell values via the `.cells` property, or by their column name via the
`.cells_by_column` property.


```python
row = tabular_attribute.rows[0]

row.cells
```



*Previous cell output:*
```output
((ShortTextValue(value="L13L12AA1T"),),
 (),
 (),
 (),
 (),
 (),
 (),
 (PointValue(value=126.73, unit="MPa"),))
```



```python
row.cells_by_column
```



*Previous cell output:*
```output
mappingproxy({'Specimen ID': (ShortTextValue(value="L13L12AA1T"),),
              'Date Test Performed': (),
              'Strain rate is equivalent': (),
              'Control mode': (),
              'Test Temperature': (),
              "Young's Modulus (11-axis)": (),
              '0.02% Offset yield stress': (),
              '0.2% Offset yield stress': (PointValue(value=126.73, unit="MPa"),)})
```


Each cell in a linked tabular column is represented as a tuple of value objects. This is because each tabular row may
link to zero or more records, and the target attribute may or may not be populated for each record.

Tabular cell classes have similar interfaces to their attribute value counterparts. For example, all tabular cell
classes have a `.value` property, and picture and file tabular cell classes have a `.save()` method.

Linked tabular cell value objects differ from their local tabular cell value equivalents in that they are read-only.
Local tabular cell values are shown in the local tabular data example referenced in the introduction.

Short text cells have a `.value` property:


```python
row.cells_by_column["Specimen ID"][0].value
```



*Previous cell output:*
```output
'L13L12AA1T'
```


Attempting to modify the value of a linked tabular cell value raises an `AttributeError`:


```python
try:
    row.cells_by_column["Specimen ID"][0].value = "New specimen ID"
except AttributeError as e:
    print(f'Raised AttributeError: "{e}"')
```
*Previous cell output:*
```output
Raised AttributeError: "property 'value' of 'ShortTextValue' object has no setter"
```
Point cells have a `.value` and a `.unit` property:


```python
point_cell = row.cells_by_column["0.2% Offset yield stress"]
point_value = point_cell[0]

print(f"{point_value.value} {point_value.unit}")
```
*Previous cell output:*
```output
126.73 MPa
```
Empty linked cells are represented as an empty tuple.


```python
row.cells_by_column["Strain rate is equivalent"]
```



*Previous cell output:*
```output
()
```


## Add a linked row

The `.append_row()` method accepts an optional argument to specify a linking value. The cell below creates a row which
link to all records in the target table with the value `L14L12HIP1T` in the target attribute.


```python
tabular_attribute.append_row(linking_value="L14L12HIP1T")
```

The new row's `__repr__` shows the linking value.


```python
new_linked_row = tabular_attribute.rows[-1]
new_linked_row
```



*Previous cell output:*
```output
<TabularRow linking_value="L14L12HIP1T" (0 of 0 local cells populated)>
```


However, the row does not contain any linked data until the row is imported and the tabular attribute is refreshed.


```python
new_linked_row.cells_by_column
```



*Previous cell output:*
```output
mappingproxy({'Specimen ID': (),
              'Date Test Performed': (),
              'Strain rate is equivalent': (),
              'Control mode': (),
              'Test Temperature': (),
              "Young's Modulus (11-axis)": (),
              '0.02% Offset yield stress': (),
              '0.2% Offset yield stress': ()})
```


Write the changes to the server.


```python
record.set_attributes([tabular_attribute])
record = mi.update([record])[0]
```

Check the content of the tabular attribute after the update. The linked row now contains values in the populated
linked columns.


```python
tabular_attribute = record.attributes["Tensile test data used in this rollup"]
refreshed_linked_row = tabular_attribute.rows[-1]
refreshed_linked_row.cells_by_column
```



*Previous cell output:*
```output
mappingproxy({'Specimen ID': (ShortTextValue(value="L14L12HIP1T"),),
              'Date Test Performed': (),
              'Strain rate is equivalent': (),
              'Control mode': (),
              'Test Temperature': (),
              "Young's Modulus (11-axis)": (),
              '0.02% Offset yield stress': (),
              '0.2% Offset yield stress': (PointValue(value=121.315, unit="MPa"),)})
```


## Add a local row

The `.append_row()` `linking_value` argument is optional. The cell below creates a local row, which will not contain
any linked data.


```python
tabular_attribute.append_row()
```

The new row's `__repr__` shows the lack of linking value.


```python
new_local_row = tabular_attribute.rows[-1]
new_local_row
```



*Previous cell output:*
```output
<TabularRow linking_value=None (0 of 0 local cells populated)>
```


Write the changes to the server.


```python
record.set_attributes([tabular_attribute])
record = mi.update([record])[0]
```

Check the content of the tabular attribute after the update. This row is not linked and there are no local columns in
the tabular attribute, so all cells are empty.


```python
tabular_attribute = record.attributes["Tensile test data used in this rollup"]
refreshed_local_row = tabular_attribute.rows[-1]
refreshed_local_row.cells_by_column
```



*Previous cell output:*
```output
mappingproxy({'Specimen ID': (),
              'Date Test Performed': (),
              'Strain rate is equivalent': (),
              'Control mode': (),
              'Test Temperature': (),
              "Young's Modulus (11-axis)": (),
              '0.02% Offset yield stress': (),
              '0.2% Offset yield stress': ()})
```


## Delete rows

Delete rows by specifying the row index to delete.

Use the length of the `.rows` tuple to get the number of rows, and delete the last two.


```python
number_of_rows = len(tabular_attribute.rows)
tabular_attribute.delete_row(number_of_rows - 1)
tabular_attribute.delete_row(number_of_rows - 2)
tabular_attribute.rows
```



*Previous cell output:*
```output
(<TabularRow linking_value="L13L12AA1T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA3T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA5T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA7T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA9T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA11T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA13T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA15T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA17T" (0 of 0 local cells populated)>)
```


Write the changes to the server, and check the content of the tabular attribute after the update.


```python
record.set_attributes([tabular_attribute])
record = mi.update([record])[0]

tabular_attribute = record.attributes["Tensile test data used in this rollup"]
tabular_attribute.rows
```



*Previous cell output:*
```output
(<TabularRow linking_value="L13L12AA1T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA3T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA5T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA7T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA9T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA11T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA13T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA15T" (0 of 0 local cells populated)>,
 <TabularRow linking_value="L13L12AA17T" (0 of 0 local cells populated)>)
```

