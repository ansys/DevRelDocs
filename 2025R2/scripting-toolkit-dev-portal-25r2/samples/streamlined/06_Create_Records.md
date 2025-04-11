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
[<Record long name: Scripting Toolkit Example 6:Wed Apr  9 10:41:34 2025 - 0>,
 <Record long name: Scripting Toolkit Example 6:Wed Apr  9 10:41:34 2025 - 1>,
 <Record long name: Scripting Toolkit Example 6:Wed Apr  9 10:41:34 2025 - 2>,
 <Record long name: Scripting Toolkit Example 6:Wed Apr  9 10:41:34 2025 - 3>,
 <Record long name: Scripting Toolkit Example 6:Wed Apr  9 10:41:34 2025 - 4>]
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
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=988141cb-d8e2-40cf-84e5-981b9eeb2caa
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=32457131-2131-4010-bbb3-ecd09d04a305
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=0a681486-1d44-4e53-8531-623106fa3398
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=fdc06c10-6d95-43a9-b613-65daf9453ed7
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=20c11e64-7ffd-43a3-927f-f7ecaf069456
```
## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search,
``Table.all_records()``, ``Record.children``, etc.). If the table is version-controlled, the records are withdrawn
instead. Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn
when the method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
