# Edit Pseudo-attributes
View the pseudo-attributes (properties) of a record, and edit a record's color.

## Connect to MI
Specify a database and table.


```python
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
tab = db.get_table('Training Exercise for Import')
```

## Find a record and view its pseudo-attributes
Search for a record (use the first result returned).


```python
recs = tab.search_for_records_by_name('Ti')
record = recs[0]
record
```




    <Record long name: Ti (Titanium)>



Examine the pseudo-attributes on the record.


```python
for name, pa in record.pseudo_attributes.items():
    print('{} = {}'.format(name, str(pa.value)))
```

    recordType = Record
    recordHistoryIdentity = 121491
    recordColor = White
    recordVersionNumber = None
    tableName = Training Exercise for Import
    writable = True
    parentShortName = Metal
    parentName = Metal
    parentRecordHistoryIdentity = 121213
    shortName = Ti
    modifiedDate = 2023-09-01 19:06:36.060000
    createdDate = 2018-06-07 16:30:28.740000
    releasedDate = 2023-09-01 19:06:36.060000
    lastModifier = ANSYS\agrigg
    creator = Ansys Granta 1
    subsets = {'Materials'}
    name = Ti (Titanium)
    

## Change the record color
Pseudo-attribute values can only be changed via the properties on the **Record** class.


```python
record.color = mpy.RecordColor.White
record.color
```




    RecordColor.White



Write your changes to MI (pseudo-attributes do not need to be flagged for update using `set_attribute()`).


```python
mi.update([record])
```




    [<Record long name: Ti (Titanium)>]


