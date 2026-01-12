# Functional data and importing data

Export tensile stress-strain data from the MI_Training database, and fit a curve to the exported data. Create a new
record using parameter values extracted from the fitted curve, and upload this record to the database.

This example demonstrates:

- Browsing for records
- Extracting functional data from a Granta MI database
- Importing a new record to a Granta MI database

## Create a Granta MI Session

Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.


```python
from datetime import datetime
import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)
```

## Browse for records

Browse for a record located within the Tensile Statistical Data table in the MI_Training database.

Set the folder path for the record to browse to as: High Alloy Steel / AMS 6520 / Plate / Room Temperature °F.


```python
db_key = "MI_Training"
table = "Tensile Statistical Data"
folder_path = ["High Alloy Steel", "AMS 6520", "Plate", "Room Temperature °F"]
```

Get the root node of the table of interest.


```python
table_reference = gdl.TableReference(db_key=db_key, name=table)
tree_record = session.browse_service.get_root_node(gdl.GetRootNode(table_reference)).root_node
```

Find the record of interest, *AMS 6520, Plate, Room Temperature °F*.


```python
for folder in folder_path:
    tree_records = session.browse_service.get_child_nodes(
        gdl.GetChildNodes(parent=tree_record.record_reference)
    ).tree_records
    tree_record = next((r for r in tree_records if r.short_name == folder), None)
    if tree_record:
        print(f"Found treeRecord: {tree_record.short_name}")
    else:
        raise ValueError(f"Unable to find folder: {folder}")
```
*Previous cell output:*
```output
Found treeRecord: High Alloy Steel
Found treeRecord: AMS 6520
Found treeRecord: Plate
Found treeRecord: Room Temperature °F
```
## Exporting data

Export *Tensile Response (11 axis)* data from the record of interest.


```python
attribute = "Tensile Response (11 axis)"

partial_table_ref = gdl.PartialTableReference(table_name=table)
attribute_reference = gdl.AttributeReference(
    name=attribute,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
request = gdl.GetRecordAttributesByRefRequest(
    record_references=[tree_record.record_reference],
    attribute_references=[attribute_reference],
)

data = session.data_export_service.get_record_attributes_by_ref(request).record_data[0]
```

Check the data type of the *Tensile Response (11 axis)* attribute is FLOAT_FUNCTIONAL_SERIES.


```python
value = data.attribute_values[0]
print(f"Attribute Name: {value.attribute_name}, Type {value.data_type}")
```
*Previous cell output:*
```output
Attribute Name: Tensile Response (11 axis), Type FLOAT_FUNCTIONAL_SERIES
```
Extract the data from each curve into a list.


```python
graph = value.float_functional_series_data_value.graph
series = graph.series

curves = []

for curve in series:
    points = curve.xy_points.xy_points
    x = [point.parameter_value.numeric_value for point in points]
    y = [point.y for point in points]
    curves.append([x, y])

print(curves)
```
*Previous cell output:*
```output
[[[0.0, 0.884463, 0.889755, 0.890251, 0.890748, 0.891246, 0.922673, 0.937986, 0.96068, 0.986228, 1.00829, 1.02755, 1.0414, 1.05956, 1.07409, 1.08701, 1.11642, 1.14737, 1.17464, 1.20351, 1.23038], [0.0, 1731.86, 1733.01, 1733.87, 1734.72, 1735.58, 1786.9, 1809.62, 1840.22, 1870.26, 1892.73, 1910.05, 1921.33, 1934.84, 1944.71, 1952.89, 1969.64, 1984.99, 1996.96, 2008.33, 2017.92]]]
```
Plot the curves using the matplotlib package.


```python
import matplotlib.pyplot as plt

x_label = f"{graph.x_axis_parameter.name} ({graph.x_axis_parameter.unit.unit_symbol})"
y_label = "Tensile stress 10^6 (Pa)"

fig = plt.figure()
ax = fig.add_subplot(111)
ax.set_xlabel(x_label)
ax.set_ylabel(y_label)
ax.set_title("Tensile Response (11 axis)")

for curve in curves:
    ax.plot(curve[0], curve[1])
```


    
![png](05_Functional_data_and_importing_data_files/05_Functional_data_and_importing_data_15_0.png)
    


Fit a Ramberg-Osgood function to the data.


```python
import matplotlib.pyplot as plt
from scipy.optimize import leastsq
import numpy as np

def ramberg_osgood(p, stress):
    return (stress / p[0]) * (1.0 + p[1] * (stress / p[2]) ** (p[3] - 1))

def error_function(p, stress, strain):
    return ramberg_osgood(p, stress) - strain

strain = 0.01 * np.array(curves[0][0])
stress = np.array(curves[0][1])

p0 = (2.0e5, 0.0, 1.0, 24.0)

plsq = leastsq(error_function, p0[:], args=(stress, strain))

fig = plt.figure()
ax = fig.add_subplot(111)
ax.set_xlabel(x_label)
ax.set_ylabel(y_label)

ax.plot(ramberg_osgood(plsq[0], stress), stress, label="Fit")
ax.plot(strain, stress, marker="o", linestyle=" ", label="Data")

ax.set_title("Ramberg-Osgood fit")
_ = ax.legend()
```


    
![png](05_Functional_data_and_importing_data_files/05_Functional_data_and_importing_data_17_0.png)
    


## Importing data

Create a new record using the attribute values for Young's modulus obtained from the fitted curve, and import this
record into the database.

Identify the folder to upload the new record to. Browse the record tree to get the record reference for that folder.


```python
import_db_key = "MI_Training"
import_table_name = "Tensile Statistical Data"
import_folders = ["High Alloy Steel", "AMS 6520"]
now = datetime.now().strftime("%c")
import_record_name = f"Scripting Toolkit Foundation Layer Example 5:{now}"

import_table_reference = gdl.TableReference(db_key=import_db_key, name=import_table_name)
tree_record = session.browse_service.get_root_node(gdl.GetRootNode(table=import_table_reference)).root_node

for folder in import_folders:
    tree_records = session.browse_service.get_child_nodes(
        gdl.GetChildNodes(parent=tree_record.record_reference)
    ).tree_records
    tree_record = next((r for r in tree_records if r.short_name == folder), None)
    if tree_record:
        print(f"Found treeRecord folder: {tree_record.short_name}")
    else:
        raise ValueError(f"Unable to find import folder: {folder}")
```
*Previous cell output:*
```output
Found treeRecord folder: High Alloy Steel
Found treeRecord folder: AMS 6520
```
Define the record attribute to include in the new record.


```python
modulus_attribute_reference = gdl.AttributeReference(
    name="Young's Modulus (11-axis)",
    db_key=import_db_key,
    partial_table_reference=gdl.PartialTableReference(table_name=import_table_name),
)
```

Set values and units for the attributes of the new record.


```python
fitted_e_value = plsq[0][0]
modulus_value = gdl.PointValueWithParameters(value=fitted_e_value)
modulus_point_value = gdl.PointDataType(unit_symbol="psi", points=[modulus_value])
import_modulus_value = gdl.ImportAttributeValue(
    attribute_reference=modulus_attribute_reference,
    point_data_value=modulus_point_value,
)
```

Create a reference to the subset that the new record will be added to.


```python
subset_reference = gdl.SubsetReference(
    name="Statistical Test Data",
    db_key=import_db_key,
    partial_table_reference=gdl.PartialTableReference(table_name=import_table_name),
)
```

Import the record to the Granta MI database.


```python
import_record = gdl.ImportRecord(
    record_name=import_record_name,
    existing_record=tree_record.record_reference,
    subset_references=[subset_reference],
    import_attribute_values=[import_modulus_value],
)

set_record_attributes_request = gdl.SetRecordAttributesRequest(import_records=[import_record])
set_record_attributes_response = session.data_import_service.set_record_attributes(set_record_attributes_request)

for record in set_record_attributes_response.records_imported:
    print(f"Imported record {record.short_name} to Granta MI database")
```
*Previous cell output:*
```output
Imported record Scripting Toolkit Foundation Layer Example 5:Wed Jan  7 19:31:10 2026 to Granta MI database
```