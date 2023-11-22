# Import Functional Data
Import CSV data into a functional attribute and update the parameters and header units.

## Import required libraries
Connect to MI and specify a table.


```python
from datetime import datetime
import csv
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
tab = db.get_table('Design Data')
```

## Create a new record to store your data
Define names for a new record, and an attribute on that record.


```python
now = datetime.now().strftime("%c")
recordName = 'STK Example 7:{}'.format(now)
funcAttributeName = 'Tensile Stress/Strain, L'
```

Create the new **Record** object.


```python
rec = tab.create_record(recordName, subsets={'Design Data'})
rec
```




    <Record long name: STK Example 7:Fri Sep  1 15:50:05 2023>



Get the unpopulated functional attribute for the new record, so we can populate it.


```python
func = rec.attributes[funcAttributeName]
func
```




    <FloatFunctionalSeriesValue name: Tensile Stress/Strain, L, with 0 points>



## Import test data
The tensile test data to import is stored in `example.csv`.
Read in each row of the CSV data, and add the data to the functional attribute point-by-point.


```python
with open('example.csv') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',')
    for row in reader:
        func.add_point({'y': float(row['Tensile Stress [ksi]']),
                        'Strain': float(row['Strain [%]']),
                        'Temperature': float(row['Temperature [Celsius]']),
                        'Stress/Strain Curve Type': str(row['Curve Type']),
                        'Estimated?': bool(row['Estimated?'])})
```

Access the `func.value` property to see the underlying data structure of the attribute represented as a list of lists.
`func.data` shows all parameters supported by the attribute. Parameters that were not populated during the import have
been set to **None**.


```python
func.value
```




    [['Y min (Tensile Stress/Strain, L [ksi])',
      'Y max (Tensile Stress/Strain, L [ksi])',
      'Strain [% strain]',
      'Temperature [K]',
      'Time [hr]',
      'Other []',
      'Stress/Strain Curve Type []',
      'Estimated point?'],
     [0.0, 0.0, 0.0, -73.0, None, None, 'Yield', True],
     [396.0, 396.0, 0.209, -73.0, None, None, 'Yield', True],
     [714.0, 714.0, 0.376, -73.0, None, None, 'Yield', True],
     [1031.0, 1031.0, 0.544, -73.0, None, None, 'Yield', True],
     [1269.0, 1269.0, 0.669, -73.0, None, None, 'Yield', True],
     [1427.0, 1427.0, 0.753, -73.0, None, None, 'Yield', True],
     [1507.0, 1507.0, 0.795, -73.0, None, None, 'Yield', True],
     [1570.0, 1570.0, 0.83, -73.0, None, None, 'Yield', True],
     [1633.0, 1633.0, 0.867, -73.0, None, None, 'Yield', True],
     [1681.0, 1681.0, 0.897, -73.0, None, None, 'Yield', True],
     [1721.0, 1721.0, 0.925, -73.0, None, None, 'Yield', True],
     [1752.0, 1752.0, 0.952, -73.0, None, None, 'Yield', True],
     [1784.0, 1784.0, 0.983, -73.0, None, None, 'Yield', True],
     [1808.0, 1808.0, 1.012, -73.0, None, None, 'Yield', True],
     [1824.0, 1824.0, 1.034, -73.0, None, None, 'Yield', True],
     [1840.0, 1840.0, 1.059, -73.0, None, None, 'Yield', True],
     [1855.0, 1855.0, 1.087, -73.0, None, None, 'Yield', True],
     [1871.0, 1871.0, 1.121, -73.0, None, None, 'Yield', True],
     [1887.0, 1887.0, 1.159, -73.0, None, None, 'Yield', True],
     [1903.0, 1903.0, 1.204, -73.0, None, None, 'Yield', True],
     [1919.0, 1919.0, 1.256, -73.0, None, None, 'Yield', True],
     [1935.0, 1935.0, 1.318, -73.0, None, None, 'Yield', True],
     [1951.0, 1951.0, 1.39, -73.0, None, None, 'Yield', True],
     [1958.0, 1958.0, 1.432, -73.0, None, None, 'Yield', True],
     [1966.0, 1966.0, 1.476, -73.0, None, None, 'Yield', True],
     [0.0, 0.0, 0.0, 27.0, None, None, 'Yield', True],
     [371.0, 371.0, 0.203, 27.0, None, None, 'Yield', True],
     [667.0, 667.0, 0.365, 27.0, None, None, 'Yield', True],
     [964.0, 964.0, 0.527, 27.0, None, None, 'Yield', True],
     [1186.0, 1186.0, 0.649, 27.0, None, None, 'Yield', True],
     [1334.0, 1334.0, 0.73, 27.0, None, None, 'Yield', True],
     [1408.0, 1408.0, 0.771, 27.0, None, None, 'Yield', True],
     [1468.0, 1468.0, 0.805, 27.0, None, None, 'Yield', True],
     [1527.0, 1527.0, 0.839, 27.0, None, None, 'Yield', True],
     [1571.0, 1571.0, 0.868, 27.0, None, None, 'Yield', True],
     [1608.0, 1608.0, 0.895, 27.0, None, None, 'Yield', True],
     [1638.0, 1638.0, 0.92, 27.0, None, None, 'Yield', True],
     [1668.0, 1668.0, 0.95, 27.0, None, None, 'Yield', True],
     [1690.0, 1690.0, 0.978, 27.0, None, None, 'Yield', True],
     [1705.0, 1705.0, 0.999, 27.0, None, None, 'Yield', True],
     [1720.0, 1720.0, 1.024, 27.0, None, None, 'Yield', True],
     [1734.0, 1734.0, 1.053, 27.0, None, None, 'Yield', True],
     [1749.0, 1749.0, 1.087, 27.0, None, None, 'Yield', True],
     [1764.0, 1764.0, 1.126, 27.0, None, None, 'Yield', True],
     [1779.0, 1779.0, 1.174, 27.0, None, None, 'Yield', True],
     [1794.0, 1794.0, 1.23, 27.0, None, None, 'Yield', True],
     [1808.0, 1808.0, 1.297, 27.0, None, None, 'Yield', True],
     [1823.0, 1823.0, 1.378, 27.0, None, None, 'Yield', True],
     [1831.0, 1831.0, 1.424, 27.0, None, None, 'Yield', True],
     [1838.0, 1838.0, 1.475, 27.0, None, None, 'Yield', True],
     [0.0, 0.0, 0.0, 149.0, None, None, 'Yield', True],
     [328.0, 328.0, 0.187, 149.0, None, None, 'Yield', True],
     [590.0, 590.0, 0.337, 149.0, None, None, 'Yield', True],
     [852.0, 852.0, 0.486, 149.0, None, None, 'Yield', True],
     [1048.0, 1048.0, 0.598, 149.0, None, None, 'Yield', True],
     [1179.0, 1179.0, 0.673, 149.0, None, None, 'Yield', True],
     [1245.0, 1245.0, 0.711, 149.0, None, None, 'Yield', True],
     [1297.0, 1297.0, 0.741, 149.0, None, None, 'Yield', True],
     [1349.0, 1349.0, 0.773, 149.0, None, None, 'Yield', True],
     [1389.0, 1389.0, 0.798, 149.0, None, None, 'Yield', True],
     [1421.0, 1421.0, 0.822, 149.0, None, None, 'Yield', True],
     [1448.0, 1448.0, 0.845, 149.0, None, None, 'Yield', True],
     [1474.0, 1474.0, 0.872, 149.0, None, None, 'Yield', True],
     [1493.0, 1493.0, 0.898, 149.0, None, None, 'Yield', True],
     [1507.0, 1507.0, 0.918, 149.0, None, None, 'Yield', True],
     [1520.0, 1520.0, 0.943, 149.0, None, None, 'Yield', True],
     [1533.0, 1533.0, 0.971, 149.0, None, None, 'Yield', True],
     [1546.0, 1546.0, 1.006, 149.0, None, None, 'Yield', True],
     [1559.0, 1559.0, 1.047, 149.0, None, None, 'Yield', True],
     [1572.0, 1572.0, 1.098, 149.0, None, None, 'Yield', True],
     [1585.0, 1585.0, 1.16, 149.0, None, None, 'Yield', True],
     [1598.0, 1598.0, 1.236, 149.0, None, None, 'Yield', True],
     [1611.0, 1611.0, 1.329, 149.0, None, None, 'Yield', True],
     [1618.0, 1618.0, 1.384, 149.0, None, None, 'Yield', True],
     [0.0, 0.0, 0.0, 316.0, None, None, 'Yield', True],
     [307.0, 307.0, 0.182, 316.0, None, None, 'Yield', True],
     [553.0, 553.0, 0.328, 316.0, None, None, 'Yield', True],
     [799.0, 799.0, 0.473, 316.0, None, None, 'Yield', True],
     [984.0, 984.0, 0.582, 316.0, None, None, 'Yield', True],
     [1107.0, 1107.0, 0.655, 316.0, None, None, 'Yield', True],
     [1168.0, 1168.0, 0.692, 316.0, None, None, 'Yield', True],
     [1217.0, 1217.0, 0.722, 316.0, None, None, 'Yield', True],
     [1266.0, 1266.0, 0.753, 316.0, None, None, 'Yield', True],
     [1303.0, 1303.0, 0.78, 316.0, None, None, 'Yield', True],
     [1334.0, 1334.0, 0.804, 316.0, None, None, 'Yield', True],
     [1359.0, 1359.0, 0.828, 316.0, None, None, 'Yield', True],
     [1383.0, 1383.0, 0.856, 316.0, None, None, 'Yield', True],
     [1402.0, 1402.0, 0.882, 316.0, None, None, 'Yield', True],
     [1414.0, 1414.0, 0.903, 316.0, None, None, 'Yield', True],
     [1426.0, 1426.0, 0.927, 316.0, None, None, 'Yield', True],
     [1439.0, 1439.0, 0.955, 316.0, None, None, 'Yield', True],
     [1451.0, 1451.0, 0.988, 316.0, None, None, 'Yield', True],
     [1463.0, 1463.0, 1.027, 316.0, None, None, 'Yield', True],
     [1475.0, 1475.0, 1.073, 316.0, None, None, 'Yield', True],
     [1488.0, 1488.0, 1.129, 316.0, None, None, 'Yield', True],
     [1500.0, 1500.0, 1.195, 316.0, None, None, 'Yield', True],
     [1512.0, 1512.0, 1.275, 316.0, None, None, 'Yield', True],
     [1519.0, 1519.0, 1.321, 316.0, None, None, 'Yield', True],
     [1525.0, 1525.0, 1.372, 316.0, None, None, 'Yield', True],
     [0.0, 0.0, 0.0, 427.0, None, None, 'Yield', True],
     [303.0, 303.0, 0.192, 427.0, None, None, 'Yield', True],
     [545.0, 545.0, 0.345, 427.0, None, None, 'Yield', True],
     [787.0, 787.0, 0.499, 427.0, None, None, 'Yield', True],
     [969.0, 969.0, 0.617, 427.0, None, None, 'Yield', True],
     [1090.0, 1090.0, 0.704, 427.0, None, None, 'Yield', True],
     [1151.0, 1151.0, 0.753, 427.0, None, None, 'Yield', True],
     [1199.0, 1199.0, 0.798, 427.0, None, None, 'Yield', True],
     [1247.0, 1247.0, 0.85, 427.0, None, None, 'Yield', True],
     [1284.0, 1284.0, 0.895, 427.0, None, None, 'Yield', True],
     [1314.0, 1314.0, 0.938, 427.0, None, None, 'Yield', True],
     [1338.0, 1338.0, 0.977, 427.0, None, None, 'Yield', True],
     [1362.0, 1362.0, 1.02, 427.0, None, None, 'Yield', True],
     [1381.0, 1381.0, 1.056, 427.0, None, None, 'Yield', True],
     [1393.0, 1393.0, 1.082, 427.0, None, None, 'Yield', True],
     [1405.0, 1405.0, 1.11, 427.0, None, None, 'Yield', True],
     [1417.0, 1417.0, 1.139, 427.0, None, None, 'Yield', True],
     [1429.0, 1429.0, 1.171, 427.0, None, None, 'Yield', True],
     [1441.0, 1441.0, 1.204, 427.0, None, None, 'Yield', True],
     [1453.0, 1453.0, 1.24, 427.0, None, None, 'Yield', True],
     [1465.0, 1465.0, 1.278, 427.0, None, None, 'Yield', True],
     [1478.0, 1478.0, 1.319, 427.0, None, None, 'Yield', True],
     [1490.0, 1490.0, 1.363, 427.0, None, None, 'Yield', True],
     [1496.0, 1496.0, 1.386, 427.0, None, None, 'Yield', True]]



The example data uses Celsius for temperature, but the database default is Kelvin.
Change the parameter unit before import to take account of this.


```python
func.parameters['Temperature'].unit = '°C'
```

After changing the units, it is good practice to update the header units in `func.data` so that the units displayed in
MI applications are correct.


```python
func.update_header_units()
```

## Write your changes to MI


```python
rec.set_attributes([func])
mi.update([rec])
```




    [<Record long name: STK Example 7:Fri Sep  1 15:50:05 2023>]


