# Deleting records (DeleteOrWithdrawIfLatestRecordVersion)

Let's start by creating a new record (Note: added receiveTimeout to the MISession)


```python
from datetime import datetime

import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", autoLogon=True, receiveTimeout=5000)

now = datetime.now().strftime("%c")
record_name = f"Scripting toolkit foundation layer example 04:{now}"
table_name = "Tensile Test Data"
subset_name = table_name
db_key = "MI_Training"

import_service = session.dataImportService
browse_service = session.browseService

test_table_ref = gdl.TableReference(name=table_name, DBKey=db_key)
partial_table_ref = gdl.PartialTableReference(tableName=table_name)
subset_ref = gdl.SubsetReference(
    DBKey=db_key,
    partialTableReference=partial_table_ref,
    name=subset_name,
)
table_root_ref = browse_service.GetRootNode(gdl.GetRootNode(table=test_table_ref)).rootNode.recordReference

import_record = gdl.ImportRecord(
    recordName=record_name,
    importAttributeValues=None,
    isFolder=False,
    existingRecord=table_root_ref,
    subsetReferences=[subset_ref],
)

import_request = gdl.SetRecordAttributesRequest(importRecords=[import_record])
imported_records = import_service.SetRecordAttributes(import_request).recordsImported
imported_record_ref = imported_records[0].recordReference
print(f'Imported record "{imported_records[0].longName}" to table "{table_name}"')
```
*Previous cell output:*
```output
Imported record "Scripting toolkit foundation layer example 04:Wed Apr  9 10:47:50 2025" to table "Tensile Test Data"
```
Now let's delete it!


```python
delete_record = gdl.DeleteOrWithdrawRecord(recordReference=imported_record_ref)
records_to_delete = [delete_record]

delete_records_request = gdl.DeleteOrWithdrawIfLatestRecordVersionRequest(deleteOrWithdrawRecords=records_to_delete)
delete_records_response = import_service.DeleteOrWithdrawIfLatestRecordVersion(delete_records_request)
print(f"Record {imported_records[0].longName} was deleted")
```
*Previous cell output:*
```output
Record Scripting toolkit foundation layer example 04:Wed Apr  9 10:47:50 2025 was deleted
```