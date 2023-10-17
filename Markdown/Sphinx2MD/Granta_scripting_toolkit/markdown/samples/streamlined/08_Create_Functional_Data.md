# Create Functional Data
Populate a functional attribute with data fitted using the Python `numpy` library.

## Import libraries and define a polynomial fit function
This example populates a functional attribute for *Ultimate Tensile Strength vs Temperature* in one table from a polynomial fit of the individual attributes in another table.


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
mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)

db = mi.get_db(db_key='MI_Training')
db.set_unit_system('Metric', absolute_temperatures=True)

table = db.get_table('Tensile Statistical Data')
```

## Export test data
Find *High Alloy Steel* > *AMS 6520* > *Plate* records in which both the *Ultimate Tensile Strength* and *Test Temperature* attributes are populated.


```python
records = table.get_records_from_path(None, ["High Alloy Steel", "AMS 6520", "Plate"])
```

Extract the attribute values from the returned records into x and y values.


```python
table.bulk_fetch(records, attributes=['Test Temperature', 'Ultimate Tensile Strength'])
populated_records = [
    r for r in records
    if not r.attributes['Test Temperature'].is_empty()
    and not r.attributes['Ultimate Tensile Strength'].is_empty()
]
```


```python
x_values = [r.attributes['Test Temperature'].value for r in populated_records]
y_values = [r.attributes['Ultimate Tensile Strength'].value for r in populated_records]
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
The resulting functional data will be written into the *Design Data* table, using the same unit system.


```python
designdata = db.get_table('Design Data')
```

Create a new record to store your functional data.


```python
now = datetime.now().strftime("%c")
recordName = 'STK Example 8:{}'.format(now)
record = designdata.create_record(recordName, subsets={'Metals'})
record.color = mpy.RecordColor.Green
```

Access the (empty) functional attribute, and view its column headers.


```python
func = record.attributes['Tens. Ult. Stress (L-dir) with Temp.']
func.column_headers
```




    ['Y min (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
     'Y max (Tens. Ult. Stress (L-dir) with Temp. [MPa])',
     'Temperature [K]',
     'Time [hr]',
     'Other []',
     'Data Type Lab []',
     'Estimated point?']



## Populate the functional attribute
Add the test data to the functional attribute point-by-point, then view the attribute data. Column headers can be
omitted if they aren't required to represent the data.


```python
for x, y in zip(x_values, y_values):
    func.add_point({'Temperature': x, 'y': y, 'Data Type Lab': 'Test Data'})
func.value
```




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



Then add the fitted data to the functional attribute point-by-point, and view the attribute data with series number as an extra column.


```python
for x, y in zip(x_fit, y_fit):
    func.add_point({'Temperature': x, 'y': y, 'Data Type Lab': 'Fitted Data'})
func.data_with_series_number
```




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
     [2392.17967676625,
      2392.17967676625,
      194.2612762451172,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2333.081679240431,
      2333.081679240431,
      226.71744095651727,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2274.740663568389,
      2274.740663568389,
      259.17360566791734,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2219.0030335134534,
      2219.0030335134534,
      291.62977037931745,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2167.220212523072,
      2167.220212523072,
      324.0859350907175,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2120.248643728816,
      2120.248643728816,
      356.5420998021176,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2078.4497899463777,
      2078.4497899463777,
      388.9982645135177,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2041.69013367557,
      2041.69013367557,
      421.4544292249178,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [2009.3411771003273,
      2009.3411771003273,
      453.91059393631787,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1980.2794420887044,
      1980.2794420887044,
      486.366758647718,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1952.8864701928783,
      1952.8864701928783,
      518.822923359118,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1925.0488226491473,
      1925.0488226491473,
      551.2790880705181,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1894.1580803779302,
      1894.1580803779302,
      583.7352527819182,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1857.1108439837672,
      1857.1108439837672,
      616.1914174933183,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1810.3087337553209,
      1810.3087337553209,
      648.6475822047184,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1749.6583896653751,
      1749.6583896653751,
      681.1037469161184,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1670.5714713708285,
      1670.5714713708285,
      713.5599116275185,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1567.9646582127118,
      1567.9646582127118,
      746.0160763389187,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1436.2596492161715,
      1436.2596492161715,
      778.4722410503188,
      None,
      None,
      'Fitted Data',
      False,
      2],
     [1269.3831630904715,
      1269.3831630904715,
      810.9284057617188,
      None,
      None,
      'Fitted Data',
      False,
      2]]



Adjust the series linestyles (`series_linestyles` is a dictionary, indexed with integers).


```python
func.series_linestyles[1] = 'Markers'
func.series_linestyles[2] = 'Lines'
func.series_linestyles
```




    {1: 'Markers', 2: 'Lines'}



## Write your changes to MI
Set the attributes you've modified to update, and write the new record to the server.


```python
record.set_attributes([func])
mi.update([record])
```




    [<Record long name: STK Example 8:Fri Sep  1 15:50:25 2023>]


