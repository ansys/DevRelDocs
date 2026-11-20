# Pseudo-attributes

Work with pseudo-attributes values (also known as record properties) and how to modify the value of an editable
pseudo-attribute.

## Connect to MI
Specify a database and table.


```python
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Training Exercise for Import")
```

## Find a record and view its pseudo-attributes
Search for a record (use the first result returned).


```python
records = table.search_for_records_by_name("Ti")
record = records[0]
record
```



*Previous cell output:*
```output
<Record long name: Ti (Titanium)>
```


Examine the pseudo-attributes on the record.


```python
print("{:30.30} = {}".format("name", record.name))
print("{:30.30} = {}".format("short_name", record.short_name))
print("{:30.30} = {}".format("subsets", record.subsets))
print("{:30.30} = {}".format("type", record.type))
print("{:30.30} = {}".format("color", record.color))
print("{:30.30} = {}".format("history_identity", record.history_identity))
print("{:30.30} = {}".format("version_number", record.version_number))
print("{:30.30} = {}".format("table_name", record.table_name))
print("{:30.30} = {}".format("is_writable", record.is_writable))
print("{:30.30} = {}".format("parent_record_short_name", record.parent_record_short_name))
print("{:30.30} = {}".format("parent_record_name", record.parent_record_name))
print("{:30.30} = {}".format("parent_record_history_identity", record.parent_record_history_identity))
print("{:30.30} = {}".format("released_on", record.released_on))
print("{:30.30} = {}".format("last_modified_on", record.last_modified_on))
print("{:30.30} = {}".format("created_on", record.created_on))
print("{:30.30} = {}".format("last_modified_by", record.last_modified_by))
print("{:30.30} = {}".format("created_by", record.created_by))
```
*Previous cell output:*
```output
name                           = Ti (Titanium)
short_name                     = Ti
subsets                        = {'Materials'}
type                           = Record
color                          = Red
history_identity               = 121491
version_number                 = None
table_name                     = Training Exercise for Import
is_writable                    = True
parent_record_short_name       = Metal
parent_record_name             = Metal
parent_record_history_identity = 121213
released_on                    = 2023-09-20 12:11:05.873000+00:00
last_modified_on               = 2023-09-20 12:11:05.873000+00:00
created_on                     = 2023-09-20 12:11:05.873000+00:00
last_modified_by               = Ansys Granta 1
created_by                     = Ansys Granta 1
```
If a pseudo-attribute value is accessed on a record, and it has not yet been retrieved from the server, all
pseudo-attributes for the record are dynamically retrieved from the server. To prevent dynamic retrieval of all
pseudo-attributes, use ``Table.bulk_fetch`` to retrieve their values prior to accessing the property on the record.
``RecordProperties`` defines all available pseudo-attribute definitions that can be used in a bulk export.

## Edit pseudo-attribute values.
Only a few pseudo-attributes can be edited:

* ``Record.name``
* ``Record.short_name``
* ``Record.color``
* ``Record.subsets``

To edit the value of a pseudo-attribute, modify the property on the ``Record`` object directly.
For example, change the ``color`` of the record to white.


```python
record.color = mpy.RecordColor.White
record.color
```



*Previous cell output:*
```output
RecordColor.White
```


Write your changes to MI (pseudo-attributes do not need to be flagged for update using `set_attribute()`).


```python
record = mi.update([record])[0]
record
```



*Previous cell output:*
```output
<Record long name: Ti (Titanium)>
```

