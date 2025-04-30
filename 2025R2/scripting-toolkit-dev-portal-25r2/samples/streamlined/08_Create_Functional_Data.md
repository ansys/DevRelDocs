# Create Functional Data
Populate a functional attribute with data fitted using the Python `numpy` library.

## Import libraries and define a polynomial fit function
This example populates a functional attribute for *Ultimate Tensile Strength vs Temperature* in one table from a
polynomial fit of the individual attributes in another table.


```python
from datetime import datetime
import numpy as np
from GRANTA_MIScriptingToolkit import granta as mpy

def My4degPolyFitFunc(x, a, b, c, d, e):
    return a*np.power(x, 4) + b*np.power(x, 3) + c*np.power(x, 2) + d*x + e
```

## Specify database and table
The source data will come from the *Tensile Statistical Data* table.


```python
mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)

db = mi.get_db(db_key="MI_Training")
db.unit_system ="Metric"
db.absolute_temperatures = True

table = db.get_table("Tensile Statistical Data")
```

## Export test data
Find *High Alloy Steel* > *AMS 6520* > *Plate* records in which both the *Ultimate Tensile Strength* and *Test
Temperature* attributes are populated.


```python
records = table.get_records_from_path(
    starting_node=None,
    tree_path=["High Alloy Steel", "AMS 6520", "Plate"],
)
```

Extract the attribute values from the returned records into x and y values.


```python
table.bulk_fetch(records, attributes=["Test Temperature", "Ultimate Tensile Strength"])
populated_records = [
    r for r in records
    if not r.attributes["Test Temperature"].is_empty()
    and not r.attributes["Ultimate Tensile Strength"].is_empty()
]

x_values = [r.attributes["Test Temperature"].value for r in populated_records]
y_values = [r.attributes["Ultimate Tensile Strength"].value for r in populated_records]
```

## Fit the test data
Fit a fourth-order polynomial to your x and y data.


```python
coeffs = np.polyfit(x_values, y_values, 4)
```

Generate x and y values for the fitted equation, using the function you defined at the start.


```python
x_fit = np.linspace(np.amin(x_values), np.amax(x_values), 20)
y_fit = My4degPolyFitFunc(x_fit, *coeffs)
```

## Create a record to store the data in 
The resulting functional data will be written into the *Metals* subset of the *Design Data* table,
using the same unit system.


```python
design_data = db.get_table("Design Data")
design_data.subsets.clear()
design_data.subsets.add("Metals")
```

Create a new record to store your functional data.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 8:{now}"
record = design_data.create_record(record_name)
record.color = mpy.RecordColor.Green
```

Access the (empty) functional attribute, and view its column headers.


```python
func = record.attributes["Tens. Ult. Stress (L-dir) with Temp."]
func.column_headers
```



*Previous cell output:*
```output
['Y min (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
 'Y max (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
 'Temperature [K]',
 'Time [hr]',
 'Other []',
 'Data Type Lab []',
 'Estimated point?']
```


## Populate the functional attribute
Add the test data to the functional attribute point-by-point, then view the attribute data. Column headers can be
omitted if they aren't required to represent the data.


```python
for x, y in zip(x_values, y_values):
    point = {"Temperature": x, "y": y, "Data Type Lab": "Test Data"}
    func.add_point(point)
func.value
```



*Previous cell output:*
```output
[['Y min (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
  'Y max (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
  'Temperature [K]',
  'Time [hr]',
  'Other []',
  'Data Type Lab []',
  'Estimated point?'],
 [1263.0048828125,
  1263.0048828125,
  810.9284057617188,
  None,
  None,
  'Test Data',
  False],
 [2399.146240234375,
  2399.146240234375,
  194.2612762451172,
  None,
  None,
  'Test Data',
  False],
 [2078.31, 2078.31, 422.0389938964844, None, None, 'Test Data', False],
 [1848.140014648438,
  1848.140014648438,
  588.7060546875,
  None,
  None,
  'Test Data',
  False],
 [1734.37646484375,
  1734.37646484375,
  699.8172607421875,
  None,
  None,
  'Test Data',
  False],
 [2189.89, 2189.89, 294.2613938964844, None, None, 'Test Data', False]]
```


Then add the fitted data to the functional attribute point-by-point, and view the attribute data with series number as
an extra column.


```python
for x, y in zip(x_fit, y_fit):
    point = {"Temperature": x, "y": y, "Data Type Lab": "Fitted Data"}
    func.add_point(point)
func.data_with_series_number
```



*Previous cell output:*
```output
[['Y min (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
  'Y max (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
  'Temperature [K]',
  'Time [hr]',
  'Other []',
  'Data Type Lab []',
  'Estimated point?',
  'Series number'],
 [1263.0048828125,
  1263.0048828125,
  810.9284057617188,
  None,
  None,
  'Test Data',
  False,
  1],
 [2399.146240234375,
  2399.146240234375,
  194.2612762451172,
  None,
  None,
  'Test Data',
  False,
  1],
 [2078.31, 2078.31, 422.0389938964844, None, None, 'Test Data', False, 1],
 [1848.140014648438,
  1848.140014648438,
  588.7060546875,
  None,
  None,
  'Test Data',
  False,
  1],
 [1734.37646484375,
  1734.37646484375,
  699.8172607421875,
  None,
  None,
  'Test Data',
  False,
  1],
 [2189.89, 2189.89, 294.2613938964844, None, None, 'Test Data', False, 1],
 [np.float64(2392.1796767662518),
  np.float64(2392.1796767662518),
  np.float64(194.2612762451172),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2333.081679240432),
  np.float64(2333.081679240432),
  np.float64(226.71744095651727),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2274.74066356839),
  np.float64(2274.74066356839),
  np.float64(259.17360566791734),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2219.0030335134543),
  np.float64(2219.0030335134543),
  np.float64(291.62977037931745),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2167.2202125230733),
  np.float64(2167.2202125230733),
  np.float64(324.0859350907175),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2120.248643728818),
  np.float64(2120.248643728818),
  np.float64(356.5420998021176),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2078.4497899463804),
  np.float64(2078.4497899463804),
  np.float64(388.9982645135177),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2041.6901336755727),
  np.float64(2041.6901336755727),
  np.float64(421.4544292249178),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(2009.3411771003305),
  np.float64(2009.3411771003305),
  np.float64(453.91059393631787),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1980.2794420887074),
  np.float64(1980.2794420887074),
  np.float64(486.366758647718),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1952.8864701928812),
  np.float64(1952.8864701928812),
  np.float64(518.822923359118),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1925.0488226491502),
  np.float64(1925.0488226491502),
  np.float64(551.2790880705181),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1894.1580803779325),
  np.float64(1894.1580803779325),
  np.float64(583.7352527819182),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1857.1108439837685),
  np.float64(1857.1108439837685),
  np.float64(616.1914174933183),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1810.3087337553218),
  np.float64(1810.3087337553218),
  np.float64(648.6475822047184),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1749.6583896653735),
  np.float64(1749.6583896653735),
  np.float64(681.1037469161184),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1670.571471370828),
  np.float64(1670.571471370828),
  np.float64(713.5599116275185),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1567.9646582127116),
  np.float64(1567.9646582127116),
  np.float64(746.0160763389187),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1436.2596492161715),
  np.float64(1436.2596492161715),
  np.float64(778.4722410503188),
  None,
  None,
  'Fitted Data',
  False,
  2],
 [np.float64(1269.3831630904717),
  np.float64(1269.3831630904717),
  np.float64(810.9284057617188),
  None,
  None,
  'Fitted Data',
  False,
  2]]
```


Adjust the series linestyles (`series_linestyles` is a dictionary, indexed with integers).


```python
func.series_linestyles[1] = "Markers"
func.series_linestyles[2] = "Lines"
func.series_linestyles
```



*Previous cell output:*
```output
{1: 'Markers', 2: 'Lines'}
```


## Write your changes to MI
Set the attributes you've modified to update, and write the new record to the server.


```python
record.set_attributes([func])
mi.update([record])
```



*Previous cell output:*
```output
[<Record long name: Scripting Toolkit Example 8:Thu Apr 24 22:52:00 2025>]
```

