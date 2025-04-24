# Create and Delete Records in Bulk
Create records and delete (or withdraw) them in bulk.

## Specify a table


```python
from datetime import datetime
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)
table = mi.get_db(db_key="MI_Training").get_table("Files for Training")
```

## Create records
Decide which folder the new records will be added to (you can use the table itself as a parent for a 'top-level'
record).


```python
parent = table.search_for_records_by_name("Other")[0]
```

Create five new **Record** objects.


```python
now = datetime.now().strftime("%c")
recordNames = [f"Scripting Toolkit Example 6:{now} - {i}" for i in range(5)]
new_records = [table.create_record(n, parent=parent, subsets={"All files"}) for n in recordNames]
new_records
```



*Previous cell output:*
```output
[<Record long name: Scripting Toolkit Example 6:Thu Apr 24 22:50:59 2025 - 0>,
 <Record long name: Scripting Toolkit Example 6:Thu Apr 24 22:50:59 2025 - 1>,
 <Record long name: Scripting Toolkit Example 6:Thu Apr 24 22:50:59 2025 - 2>,
 <Record long name: Scripting Toolkit Example 6:Thu Apr 24 22:50:59 2025 - 3>,
 <Record long name: Scripting Toolkit Example 6:Thu Apr 24 22:50:59 2025 - 4>]
```


## Write your changes to MI 
The new records are created on the server when update() is called.


```python
recs = mi.update(new_records)

print("New records:")
for rec in recs:
    print(rec.viewer_url)
```
*Previous cell output:*
```output
New records:
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=a5d09746-e913-461e-95ed-c1e99dd47417
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=568f97ec-7a71-4930-bc4f-d93a88f5628c
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=90302b6b-cdff-4dbe-b02e-eeb0fcfd5757
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=439e3fb4-e63e-46da-b2df-956f90321c4c
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=5d991280-8654-4c2a-9326-d9a6ac01458e
```
## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search,
``Table.all_records()``, ``Record.children``, etc.). If the table is version-controlled, the records are withdrawn
instead. Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn
when the method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
