# Importing and exporting tabular data

View tabular data information, and export the values from a record. Create a new record containing tabular data, and
import this into a Granta MI database.

This example demonstrates:

- Get tabular data attribute information from a Granta MI database
- Export tabular data from a record
- Import a new record and contains tabular data
- Update tabular data for a record in a database

## Create a Granta MI Session

Import the GRANTA_MIScriptingToolkit package, and create a connection to a Granta MI server.


```python
from datetime import datetime
import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", autoLogon=True)
```

## Get tabular data attribute information

Search for the record "Shore A75, flame retarded" in the "MI_Training" database.


```python
dbKey = "MI_Training"
tableName = "MaterialUniverse"
recordName = "Shore A75, flame retarded"

req = gdl.RecordNameSearchRequest(
    caseSensitiveNames=False,
    searchShortNames=True,
    recordName=recordName,
)
req.table = gdl.TableReference(DBKey=dbKey, name=tableName)
resp = session.searchService.RecordNameSearch(req)
record = resp.searchResults[0]
```

Use the browse service to get the column headers for the tabular data attribute "Specifications".


```python
attribName = "Restricted substances that may be associated with this material"

a = gdl.AttributeReference(
    name=attribName,
    partialTableReference=gdl.PartialTableReference(tableName=tableName),
    DBKey=dbKey,
)

resp = session.browseService.GetAttributeDetails(gdl.GetAttributeDetailsRequest([a]))
for col in resp.attributeDetails[0].tabular.columns:
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
dataExportRequest = gdl.GetRecordAttributesByRefRequest(
    recordReferences=[record.recordReference],
    attributeReferences=[a],
)

dataExportResponse = session.dataExportService.GetRecordAttributesByRef(dataExportRequest)
myRecordData = dataExportResponse.recordData

for rec in myRecordData:
    for attr in rec.attributeValues:
        if attr.attributeName == attribName:
            if not attr.dataType == "TABL":
                raise TypeError("No tables found! Check your record.")
            myTable = attr.tabularDataType
            print("Table found.")
```
*Previous cell output:*
```output
Table found.
```
Print the data exported from the Granta MI database for this record. Note that attribute values, row cells, and list
items all have a dataType attribute to help you pick the right data member to inspect.


```python
i = 1
for row in myTable.tabularDataRows:
    if len(row.cells[0].listDataValue.items) > 0:
        print(f"Row {i}:")
        print(f"\t{row.cells[0].listDataValue.items[0].shortTextDataValue.value}")
        print(f"\t{row.cells[1].listDataValue.items[0].shortTextDataValue.value}")
        print(f"\t{row.cells[2].rangeDataValue.low}-{row.cells[2].rangeDataValue.high}")
        print(f"\t{row.cells[3].discreteDataValue.discreteValues[0].value}")
        print(f"\t{row.cells[4].shortTextDataValue.value}")
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
dbKey = "MI_Training"
tableName = "Training Exercise for Import"
recordName = "Metal"

req = gdl.RecordNameSearchRequest(
    caseSensitiveNames=False,
    searchShortNames=True,
    recordName=recordName,
)
req.table = gdl.TableReference(DBKey=dbKey, name=tableName)
resp = session.searchService.RecordNameSearch(req)
destination = resp.searchResults[0]
```

Create an empty data structure, and populate it with tabular data values.


```python
newTable = gdl.TabularDataType()
newTable.AddColumn("Order")
newTable.AddColumn("Notes")

newRow = newTable.CreateRow()
newInt = gdl.IntegerDataType(value=1)
newRow.cells[0].data = newInt

newText = gdl.LongTextDataType(value="Some notes about a material")
newRow.cells[1].data = newText

print(f"Created a table with cell data {newInt.value} and {newText.value}")
```
*Previous cell output:*
```output
Created a table with cell data 1 and Some notes about a material
```
Create a new import attribute, "Characterization of this material", that contains these tabular data values.


```python
attribName = "Characterization of this material"

a = gdl.AttributeReference(
    name=attribName,
    partialTableReference=gdl.PartialTableReference(tableName=tableName),
    DBKey=dbKey,
)

importAtribute = gdl.ImportAttributeValue(attributeReference=a)
importAtribute.tabularDataValue = newTable
```

Create a new import record.


```python
now = datetime.now().strftime("%c")
recName = f"Scripting toolkit foundation layer example 06:{now}"

importRecord = gdl.ImportRecord(
    recordName=recName,
    existingRecord=destination.recordReference,
    importAttributeValues=[importAtribute],
)
print(recName)
```
*Previous cell output:*
```output
Scripting toolkit foundation layer example 06:Thu May  8 23:40:57 2025
```
Import the record to a Granta MI database.


```python
setRecordAttributesRequest = gdl.SetRecordAttributesRequest(importRecords=[importRecord])
response = session.dataImportService.SetRecordAttributes(setRecordAttributesRequest)
recordsImported = response.recordsImported

print(f"{len(recordsImported)} records imported")
```
*Previous cell output:*
```output
1 records imported
```
## Update the record

Retrieve the row ID of the data that you want to update.


```python
dataExportRequest = gdl.GetRecordAttributesByRefRequest(
    recordReferences=[response.recordsImported[0].recordReference],
    attributeReferences=[a],
)
dataExportResponse = session.dataExportService.GetRecordAttributesByRef(dataExportRequest)
myRecordData = dataExportResponse.recordData[0]
attribute = myRecordData.attributeValues[0].tabularDataType

aid = attribute.tabularDataRows[0].Id

print(f"This row's ID is {aid}")
```
*Previous cell output:*
```output
This row's ID is 94427
```
Create a table containing the values you want to update. You only need to specify the columns that contain updated
data values.


```python
updatedValue = gdl.IntegerDataType(value=newInt.value * 1000)
print(f"Updated previous value to {updatedValue.value}")

tableUpdates = gdl.TabularDataType()
tableUpdates.AddColumn("Order")

changetype = gdl.TabularDataType.ChangeType.Update

rowChange = tableUpdates.CreateUpdateRow(changetype, aid)
rowChange.cells[0].data = updatedValue
```
*Previous cell output:*
```output
Updated previous value to 1000
```
Import the updated data into Granta MI using SetRecordAttributes.


```python
attribute = gdl.ImportAttributeValue(attributeReference=a)
attribute.tabularDataValue = tableUpdates

updateRecord = gdl.ImportRecord(
    importRecordMode="Update",
    existingRecord=recordsImported[0].recordReference,
    importAttributeValues=[attribute],
)

setRecordAttributesRequest = gdl.SetRecordAttributesRequest(importRecords=[updateRecord])
response = session.dataImportService.SetRecordAttributes(setRecordAttributesRequest)

print(
    f"Use MI Viewer to view {recName} and check that the Order "
    f"in 'Characterization of this material' is {updatedValue.value}"
)
```
*Previous cell output:*
```output
Use MI Viewer to view Scripting toolkit foundation layer example 06:Thu May  8 23:40:57 2025 and check that the Order in 'Characterization of this material' is 1000
```