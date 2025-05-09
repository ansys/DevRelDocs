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
[<Record long name: Scripting Toolkit Example 6:Thu May  8 23:33:46 2025 - 0>,
 <Record long name: Scripting Toolkit Example 6:Thu May  8 23:33:46 2025 - 1>,
 <Record long name: Scripting Toolkit Example 6:Thu May  8 23:33:46 2025 - 2>,
 <Record long name: Scripting Toolkit Example 6:Thu May  8 23:33:46 2025 - 3>,
 <Record long name: Scripting Toolkit Example 6:Thu May  8 23:33:46 2025 - 4>]
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
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=08dab5b4-668e-4aa2-8d1a-f3be569b99cb
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=a9432f8b-6708-4609-ad4e-8d6c21567543
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=2b670d8e-a9c1-44dc-947b-bca3ebde9ff2
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=0ed3c938-6bc4-4b3e-96ee-a28b113c1679
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=5130e5f2-9046-45d2-a35d-930d93baf36e
```
## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search,
``Table.all_records()``, ``Record.children``, etc.). If the table is version-controlled, the records are withdrawn
instead. Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn
when the method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
