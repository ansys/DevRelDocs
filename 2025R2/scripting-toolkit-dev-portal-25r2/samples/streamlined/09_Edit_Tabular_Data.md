# Edit Tabular Data
Edit and compare tabular data using the Python `numpy` library.

In this example, there is some existing tensile data for a material (AMS 6520, Plate, 1000°F).
Some of that data is of particular interest and we want to separate it from the old data and
put it in a record of its own.

## Connect to MI
Specify a database and table.


```python
from datetime import datetime
import numpy as np
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)

db = mi.get_db(db_key="MI_Training")
table = db.get_table("Tensile Statistical Data")
```

## Locate existing data
Find the record and attribute that contains the original data.


```python
record = table.search_for_records_by_name("AMS 6520, Plate, 1000°F")[0]
samples = record.attributes["Tensile test data used in this rollup"]
```

Select some samples of interest.


```python
focus_samples = ["MTS-615731", "MTS-615741", "MTS-615771"]
```

Get their **Record** objects from the tabular attribute containing the tensile test data.


```python
focus_recs = [samples.linked_records[s][0] for s in focus_samples]
```

Get their row indices in the tabular data structure.


```python
focus_rows = [samples["Linking Value (Specimen ID)"].index(samp) for samp in focus_samples]
```

## Extract and analyse the data
Extract the sample data, and establish how different these particular samples are from the remainder of the set.


```python
focus_youngs = [samples["Young's Modulus (11-axis)", i] for i in focus_rows]
rmain_youngs = [samples["Young's Modulus (11-axis)", i] for i in range(6) if i not in focus_rows]

rmain_mean = np.mean(rmain_youngs)
focus_mean = np.mean(focus_youngs)
rmain_mean, focus_mean
```



*Previous cell output:*
```output
(np.float64(142.74677022298178), np.float64(146.3169097900391))
```



```python
percentage_diff = 100*abs(rmain_mean-focus_mean)/(0.5*(rmain_mean+focus_mean))
print(f"Percentage difference between the two means is: {percentage_diff} %")
```
*Previous cell output:*
```output
Percentage difference between the two means is: 2.470140535743884 %
```
## Create a new record and tabular attribute
Create a new record for your data of interest.


```python
now = datetime.now().strftime("%c")
recordName = f"Scripting Toolkit Example 9:{now}"
new_rec = table.create_record(recordName, parent=record.parent, subsets={"Statistical Test Data"})
```

Select the tabular attribute to write to.


```python
new_samples = new_rec.attributes["Tensile test data used in this rollup"]
new_samples
```



*Previous cell output:*
```output
<TabularValue name: Tensile test data used in this rollup (not loaded)>
```


Link the samples to the new tabular datum.


```python
for focus_sample in focus_samples:
    new_samples.add_row(linking_value=focus_sample)
new_samples
```



*Previous cell output:*
```output
<TabularValue name: Tensile test data used in this rollup, shape: 9 x 3>
```


Set the new tabular attribute to update, and write the new record to MI.


```python
new_rec.set_attributes([new_samples])
new_rec = mi.update([new_rec])[0]
```

## Link to the original record
The original record is linked to the records you just linked to the tabular data. Link the new record to the original,
too.

(Records must exist on the server to be linked together, which means the record must be pushed to the server before it
can be linked to other records.)


```python
new_rec.set_links("Tensile Test Data", set(focus_recs))
new_rec.links
```



*Previous cell output:*
```output
{'Tensile Test Data': {<Record long name: MTS-615731>,
  <Record long name: MTS-615741>,
  <Record long name: MTS-615771>}}
```


## Update the new record's links on the server
Like changes to data, changes to links also need to be pushed to the server. Unlike attributes, links do not need to
be flagged for update (there is no equivalent to `set_attributes()` for links).


```python
mi.update_links([new_rec])
```



*Previous cell output:*
```output
[<Record long name: Scripting Toolkit Example 9:Wed Apr  9 10:43:08 2025>]
```

