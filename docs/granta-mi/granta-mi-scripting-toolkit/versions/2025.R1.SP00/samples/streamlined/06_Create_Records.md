# Create and Delete Records in Bulk
Create records and delete (or withdraw) them in bulk.

## Specify a table


```python
from datetime import datetime
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
table = mi.get_db(db_key="MI_Training").get_table("Files for Training")
```

## Create records
Decide which folder the new records will be added to (you can use the table itself as a parent for a 'top-level' record).


```python
parent = table.search_for_records_by_name("Other")[0]
```

Create five new **Record** objects.


```python
now = datetime.now().strftime("%c")
recordNames = ['STK Example 6:{} - {}'.format(now, i) for i in range(5)]
new_records = [table.create_record(n, parent=parent, subsets={"All files"}) for n in recordNames]
new_records
```



*Previous cell output:*
```output
[<Record long name: STK Example 6:Wed Oct 30 16:04:50 2024 - 0>,
 <Record long name: STK Example 6:Wed Oct 30 16:04:50 2024 - 1>,
 <Record long name: STK Example 6:Wed Oct 30 16:04:50 2024 - 2>,
 <Record long name: STK Example 6:Wed Oct 30 16:04:50 2024 - 3>,
 <Record long name: STK Example 6:Wed Oct 30 16:04:50 2024 - 4>]
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
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=0b547c6b-64ae-4d18-87e5-2959f5e97a49
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=0952c6b1-4f37-45fd-b6a5-590097d91d79
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=2dfdfcda-6348-4558-b5e2-87959e05663b
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=34028202-d7d7-4c0b-9615-0357fa60cd96
http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=950e8ce8-bd04-4051-89e2-dc56b1c28733
```
## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search, ``Table.all_records()``, ``Record.children``, etc.).
If the table is version-controlled, the records are withdrawn instead.
Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn when the
method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
