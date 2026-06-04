# Importing and exporting tabular data

View tabular data information, and export the values from a record. Create a new record containing tabular data, and
import this into a Granta MI database.

This example demonstrates:

- Get tabular data attribute information from a Granta MI database
- Export tabular data from a record
- Import a new record and contains tabular data
- Update tabular data for a record in a database

## Create a Granta MI Session

Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.


```python
from datetime import datetime
import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)
```

## Get tabular data attribute information

Search for the record "Shore A75, flame retarded" in the "MI_Training" database.


```python
db_key = "MI_Training"
table_name = "MaterialUniverse"
record_name = "Shore A75, flame retarded"

req = gdl.RecordNameSearchRequest(
    case_sensitive_names=False,
    search_short_names=True,
    record_name=record_name,
)
req.table = gdl.TableReference(db_key=db_key, name=table_name)
resp = session.search_service.record_name_search(req)
record = resp.search_results[0]
```

Use the browse service to get the column headers for the tabular data attribute "Specifications".


```python
attribute_name = "Restricted substances that may be associated with this material"

a = gdl.AttributeReference(
    name=attribute_name,
    partial_table_reference=gdl.PartialTableReference(table_name=table_name),
    db_key=db_key,
)

resp = session.browse_service.get_attribute_details(gdl.GetAttributeDetailsRequest([a]))
for col in resp.attribute_details[0].tabular.columns:
    print(col.name)
```
*Previous cell output:*
```output
Substance name
CAS number
Amount
Substance rating
Legislation name
Legislation rating
Effective date
Category
Function
Comments
```
## Export tabular data

Perform a data export request to get column data for the tabular data attribute.


```python
data_export_request = gdl.GetRecordAttributesByRefRequest(
    record_references=[record.record_reference],
    attribute_references=[a],
)

data_export_response = session.data_export_service.get_record_attributes_by_ref(data_export_request)
record_data = data_export_response.record_data

tabular_value = None
for rec in record_data:
    for attr in rec.attribute_values:
        if attr.attribute_name == attribute_name:
            tabular_value = attr.tabular_data_value
            print("Table found.")
if tabular_value is None:
    raise TypeError("No tables found! Check your record.")
```
*Previous cell output:*
```output
Table found.
```
Print the data exported from the Granta MI database for this record. Note that attribute values, row cells, and list
items all have a dataType attribute to help you pick the right data member to inspect.


```python
i = 1
for row in tabular_value.tabular_data_rows:
    if len(row.cells[0].list_data_value.items) > 0:
        print(f"Row {i}:")
        print(f"\t{row.cells[0].list_data_value.items[0].short_text_data_value.value}")
        print(f"\t{row.cells[1].list_data_value.items[0].short_text_data_value.value}")
        print(f"\t{row.cells[2].range_data_value.low}-{row.cells[2].range_data_value.high}")
        print(f"\t{row.cells[3].discrete_data_value.discrete_values[0].value}")
        print(f"\t{row.cells[4].short_text_data_value.value}")
        i = i + 1
```
*Previous cell output:*
```output
Row 1:
	Bis (2-ethyl(hexyl)phthalate) (DEHP)
	117-81-7
	0.0-50.0
	To be phased-out
	
Row 2:
	Dibutyl phthalate
	84-74-2
	0.0-50.0
	To be phased-out
	
Row 3:
	Alkanes, C10-13, chloro;  (Short chain chlorinated paraffins )
	85535-84-8
	0.0-50.0
	High risk of phase-out
```
## Import tabular data

Search the database for a parent record under which you can create a new record.


```python
db_key = "MI_Training"
table_name = "Training Exercise for Import"
record_name = "Metal"

req = gdl.RecordNameSearchRequest(
    case_sensitive_names=False,
    search_short_names=True,
    record_name=record_name,
)
req.table = gdl.TableReference(db_key=db_key, name=table_name)
resp = session.search_service.record_name_search(req)
destination = resp.search_results[0]
```

Create an empty data structure, and populate it with tabular data values.


```python
integer_value = gdl.IntegerDataType(value=1)
integer_cell = gdl.TabularDataImportCell(column_name="Order", integer_data_value=integer_value)

text_value = gdl.LongTextDataType(value="Some notes about a material")
text_cell = gdl.TabularDataImportCell(column_name="Notes", long_text_data_value=text_value)

new_row = gdl.TabularDataImportRow(cells=[integer_cell, text_cell])

tabular_update = gdl.TabularDataImportType(import_rows=[new_row])

print(f"Created a table with cell data {integer_value.value} and {text_value.value}")
```
*Previous cell output:*
```output
Created a table with cell data 1 and Some notes about a material
```
Create a new import attribute, "Characterization of this material", that contains these tabular data values.


```python
attribute_name = "Characterization of this material"

a = gdl.AttributeReference(
    name=attribute_name,
    partial_table_reference=gdl.PartialTableReference(table_name=table_name),
    db_key=db_key,
)

import_attribute_value = gdl.ImportAttributeValue(attribute_reference=a)
import_attribute_value.tabular_data_value = tabular_update
```

Create a new import record.


```python
now = datetime.now().strftime("%c")
new_record_name = f"Scripting Toolkit Foundation Layer Example 6:{now}"

import_record = gdl.ImportRecord(
    record_name=new_record_name,
    existing_record=destination.record_reference,
    import_attribute_values=[import_attribute_value],
)
print(new_record_name)
```
*Previous cell output:*
```output
Scripting Toolkit Foundation Layer Example 6:Wed Jan  7 19:31:40 2026
```
Import the record to a Granta MI database.


```python
set_record_attributes_request = gdl.SetRecordAttributesRequest(import_records=[import_record])
response = session.data_import_service.set_record_attributes(set_record_attributes_request)
records_imported = response.records_imported

print(f"{len(records_imported)} records imported")
```
*Previous cell output:*
```output
1 records imported
```
## Update the record

Retrieve the row ID of the data that you want to update.


```python
data_export_request = gdl.GetRecordAttributesByRefRequest(
    record_references=[response.records_imported[0].record_reference],
    attribute_references=[a],
)
data_export_response = session.data_export_service.get_record_attributes_by_ref(data_export_request)
my_record_data = data_export_response.record_data[0]
attribute = my_record_data.attribute_values[0].tabular_data_value

aid = attribute.tabular_data_rows[0].id_

print(f"This row's ID is {aid}")
```
*Previous cell output:*
```output
This row's ID is 94427
```
Create a table containing the values you want to update. You only need to specify the columns that contain updated
data values.


```python
updated_value = gdl.IntegerDataType(value=integer_value.value * 1000)
update_cell = gdl.TabularDataImportCell(column_name="Order", integer_data_value=updated_value)
print(f"Updated previous value to {updated_value.value}")

change_type = "Update"
row_change = gdl.TabularDataUpdateRow(cells=[update_cell], id_=aid, update_type=change_type)
table_updates = gdl.TabularDataImportType(update_rows=[row_change])
```
*Previous cell output:*
```output
Updated previous value to 1000
```
Import the updated data into Granta MI using SetRecordAttributes.


```python
attribute = gdl.ImportAttributeValue(attribute_reference=a)
attribute.tabular_data_value = table_updates

update_record = gdl.ImportRecord(
    import_record_mode="Update",
    existing_record=records_imported[0].record_reference,
    import_attribute_values=[attribute],
)

set_record_attributes_request = gdl.SetRecordAttributesRequest(import_records=[update_record])
response = session.data_import_service.set_record_attributes(set_record_attributes_request)

print(
    f"Use MI Viewer to view '{new_record_name}' and check that the Order "
    f"in 'Characterization of this material' is {updated_value.value}"
)
```
*Previous cell output:*
```output
Use MI Viewer to view 'Scripting Toolkit Foundation Layer Example 6:Wed Jan  7 19:31:40 2026' and check that the Order in 'Characterization of this material' is 1000
```