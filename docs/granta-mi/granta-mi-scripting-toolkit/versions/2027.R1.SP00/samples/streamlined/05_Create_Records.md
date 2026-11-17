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
[<Record long name: Scripting Toolkit Example 5:Thu Oct 15 21:43:11 2026 - 0>,
 <Record long name: Scripting Toolkit Example 5:Thu Oct 15 21:43:11 2026 - 1>,
 <Record long name: Scripting Toolkit Example 5:Thu Oct 15 21:43:11 2026 - 2>,
 <Record long name: Scripting Toolkit Example 5:Thu Oct 15 21:43:11 2026 - 3>,
 <Record long name: Scripting Toolkit Example 5:Thu Oct 15 21:43:11 2026 - 4>]
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
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=b40d3254-07c9-4450-bab3-45c69266ae68
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=6808b50c-d1b8-4dde-a960-6d0e36104802
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=3a67214c-60f4-46f0-aebf-9d9192fddbd0
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=49c85ab6-f9c6-4f7d-a452-514fdfa4925f
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=d1f08ec3-bd46-4955-8585-dec44cceecfc
```
## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search,
``Table.all_records()``, ``Record.children``, etc.). If the table is version-controlled, the records are withdrawn
instead. Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn
when the method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
