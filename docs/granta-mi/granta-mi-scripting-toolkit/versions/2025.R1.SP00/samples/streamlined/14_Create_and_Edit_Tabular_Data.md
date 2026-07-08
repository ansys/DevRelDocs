# Create and Edit Tabular Data
Create a new tabular attribute, add, delete and swap rows, and edit the units.

## Create a new record
Connect to MI and specify a database and table.


```python
from datetime import datetime
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
tab = db.get_table('Tensile Test Data')
```

Create a new record.


```python
now = datetime.now().strftime("%c")
recordName = 'STK Example 14:{}'.format(now)
rec = tab.create_record(recordName, subsets={'In Progress'})
```

## Access a Tabular attribute
Access the (empty) Tabular attribute *Workflow history*.


```python
hist = rec.attributes['Workflow history']
hist
```



*Previous cell output:*
```output
<TabularValue name: Workflow history (not loaded)>
```


Inspect the tabular datum. Using the method `show()` shows the table in ASCII format.


```python
hist.show()
```
*Previous cell output:*
```output
             User              |              Date              |            Comments            |      Linking Value (None)     
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
```
Look at the `__repr__` of the attribute. There are currently no rows in the table.


```python
hist
```



*Previous cell output:*
```output
<TabularValue name: Workflow history, shape: 4 x 0>
```


Tabular attributes can be loaded with the `load()` method (there is no data to load in this example):


```python
hist.load()
```

## Add rows and data

Add three (empty) rows to the Tabular object, and view the table in an ACSII-style format.


```python
hist.add_row()
hist.add_row()
hist.add_row()
hist.show()
```
*Previous cell output:*
```output
             User              |              Date              |            Comments            |      Linking Value (None)     
---------------------------------------------------------------------------------------------------------------------------------
             None              |              None              |              None              |  '<linking value not chosen>' 
             None              |              None              |              None              |  '<linking value not chosen>' 
             None              |              None              |              None              |  '<linking value not chosen>' 
---------------------------------------------------------------------------------------------------------------------------------
```
Data is added by accessing the `tabular` property. The column name should be provided as a string followed by the index of the row. 
Start by populating the first row:


```python
hist['User', 0] = 'Your username'
hist['Date', 0] = '2019-01-01'  # dates should always be provided in the format YYY-MM-DD
hist['Comments', 0] = 'This is an example comment'
hist.value[:][0]
```



*Previous cell output:*
```output
['Your username',
 '2019-01-01',
 'This is an example comment',
 '<linking value not chosen>']
```


Populate the second row:


```python
hist['User', 1] = 'Another username'
hist['Date', 1] = '2019-01-02'
hist['Comments', 1] = 'This is another example comment'
hist.value[:][1]
```



*Previous cell output:*
```output
['Another username',
 '2019-01-02',
 'This is another example comment',
 '<linking value not chosen>']
```


Then populate the third row. The data is stored locally, so the linking values are displayed as `<linking value not chosen>`.


```python
hist['User', 2] = 'Another username'
hist['Date', 2] = '2019-01-02'
hist['Comments', 2] = 'This is another example comment'
hist.value[:][2]
```



*Previous cell output:*
```output
['Another username',
 '2019-01-02',
 'This is another example comment',
 '<linking value not chosen>']
```



```python
hist.show()
hist.value
```
*Previous cell output:*
```output
             User              |              Date              |            Comments            |      Linking Value (None)     
---------------------------------------------------------------------------------------------------------------------------------
       'Your username'         |          '2019-01-01'          |  'This is an example comment'  |  '<linking value not chosen>' 
      'Another username'       |          '2019-01-02'          | 'This is another example c...' |  '<linking value not chosen>' 
      'Another username'       |          '2019-01-02'          | 'This is another example c...' |  '<linking value not chosen>' 
---------------------------------------------------------------------------------------------------------------------------------
```


*Previous cell output:*
```output
[['Your username',
  '2019-01-01',
  'This is an example comment',
  '<linking value not chosen>'],
 ['Another username',
  '2019-01-02',
  'This is another example comment',
  '<linking value not chosen>'],
 ['Another username',
  '2019-01-02',
  'This is another example comment',
  '<linking value not chosen>']]
```


## Edit the table
Rows can be moved using the `swap_rows()` method.


```python
hist.value[:][:2]
```



*Previous cell output:*
```output
[['Your username',
  '2019-01-01',
  'This is an example comment',
  '<linking value not chosen>'],
 ['Another username',
  '2019-01-02',
  'This is another example comment',
  '<linking value not chosen>']]
```



```python
hist.swap_rows(0, 1)
```


```python
hist.value[:][:2]
```



*Previous cell output:*
```output
[['Another username',
  '2019-01-02',
  'This is another example comment',
  '<linking value not chosen>'],
 ['Your username',
  '2019-01-01',
  'This is an example comment',
  '<linking value not chosen>']]
```


Rows can also be deleted; for example, one of the two duplicate rows in this table.


```python
hist.delete_row(0)
```

## Access the units
Each **Tabular** object is associated with a **TabularUnits** object which stores the units for the Tabular data. View (and edit) these units through the `tabular.units` property.


```python
hist.units
```



*Previous cell output:*
```output
<Tabular Units, shape: 2 x 3>
```


Access the complete set of units for the tabular datum


```python
hist.units.data
```



*Previous cell output:*
```output
[['', '', '', None], ['', '', '', None]]
```


## Write your changes to MI
Set your new attribute to update, and write the changes to the server.


```python
rec.set_attributes([hist])
rec = mi.update([rec])[0]
```

## Notes about Tabular data:
 * Point-type values in Tabular cannot have parameters, and are always lists.
 * Any changes to linked data will be ignored on import.
