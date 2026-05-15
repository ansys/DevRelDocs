# Create and Delete Records in Bulk
Create records and delete (or withdraw) them in bulk.

## Specify a table


```python
from datetime import datetime
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
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
record_names = [f"Scripting Toolkit Example 5:{now} - {i}" for i in range(5)]
new_records = [table.create_record(n, parent=parent, subsets={"All files"}) for n in record_names]
new_records
```



*Previous cell output:*
```output
[<Record long name: Scripting Toolkit Example 5:Wed Jan  7 19:24:16 2026 - 0>,
 <Record long name: Scripting Toolkit Example 5:Wed Jan  7 19:24:16 2026 - 1>,
 <Record long name: Scripting Toolkit Example 5:Wed Jan  7 19:24:16 2026 - 2>,
 <Record long name: Scripting Toolkit Example 5:Wed Jan  7 19:24:16 2026 - 3>,
 <Record long name: Scripting Toolkit Example 5:Wed Jan  7 19:24:16 2026 - 4>]
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
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=8717b0ba-8696-4fda-991c-03bdc0f76781
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=33fbdbda-78ed-4862-98ec-2e7014f3fdcc
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=75557043-71d1-4cb3-9fd5-e575e952753a
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=107a6da1-5702-4161-bd25-c94a70b0e10c
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=1e07c4c4-ccb3-4e5d-9a58-f870acb30518
```
## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search,
``Table.all_records()``, ``Record.children``, etc.). If the table is version-controlled, the records are withdrawn
instead. Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn
when the method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
