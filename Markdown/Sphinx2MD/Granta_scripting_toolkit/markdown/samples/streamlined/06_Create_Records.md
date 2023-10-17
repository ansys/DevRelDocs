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




    [<Record long name: STK Example 6:Fri Sep  1 15:49:49 2023 - 0>,
     <Record long name: STK Example 6:Fri Sep  1 15:49:49 2023 - 1>,
     <Record long name: STK Example 6:Fri Sep  1 15:49:49 2023 - 2>,
     <Record long name: STK Example 6:Fri Sep  1 15:49:49 2023 - 3>,
     <Record long name: STK Example 6:Fri Sep  1 15:49:49 2023 - 4>]



## Write your changes to MI 
The new records are created on the server when update() is called.


```python
recs = mi.update(new_records)

print("New records:")
for rec in recs:
    print(rec.viewer_url)
```

    New records:
    http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=b01b4df2-9ee5-404e-86a0-a1e89e204c47
    http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=c7f28b14-7813-408b-9526-a6441c7983f4
    http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=0ef70b09-72a3-473c-91cb-bc965483864d
    http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=926fd234-6d6c-4b59-9a1b-e011c411665f
    http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=4588f6d3-43b0-4dc3-996f-4460a8ed35e8
    

## Delete the records
``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search, ``Table.all_records()``, ``Record.children``, etc.).
If the table is version-controlled, the records are withdrawn instead.
Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn when the
method is called.


```python
mi.bulk_delete_or_withdraw_records(recs)
```
