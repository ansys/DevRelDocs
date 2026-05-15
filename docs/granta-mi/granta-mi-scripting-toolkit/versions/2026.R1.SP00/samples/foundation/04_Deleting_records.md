# Deleting records (DeleteOrWithdrawIfLatestRecordVersion)

Let's start by creating a new record (Note: added receive_timeout to the MISession)


```python
from datetime import datetime

import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", auto_logon=True, receive_timeout=5000)

now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Foundation Layer Example 4:{now}"
table_name = "Tensile Test Data"
subset_name = table_name
db_key = "MI_Training"

import_service = session.data_import_service
browse_service = session.browse_service

test_table_ref = gdl.TableReference(name=table_name, db_key=db_key)
partial_table_ref = gdl.PartialTableReference(table_name=table_name)
subset_ref = gdl.SubsetReference(
    db_key=db_key,
    partial_table_reference=partial_table_ref,
    name=subset_name,
)
table_root_ref = browse_service.get_root_node(gdl.GetRootNode(table=test_table_ref)).root_node.record_reference

import_record = gdl.ImportRecord(
    record_name=record_name,
    import_attribute_values=None,
    is_folder=False,
    existing_record=table_root_ref,
    subset_references=[subset_ref],
)

import_request = gdl.SetRecordAttributesRequest(import_records=[import_record])
imported_records = import_service.set_record_attributes(import_request).records_imported
imported_record_ref = imported_records[0].record_reference
print(f'Imported record "{imported_records[0].long_name}" to table "{table_name}"')
```
*Previous cell output:*
```output
Imported record "Scripting Toolkit Foundation Layer Example 4:Wed Jan  7 19:30:39 2026" to table "Tensile Test Data"
```
Now let's delete it!


```python
delete_record = gdl.DeleteOrWithdrawRecord(record_reference=imported_record_ref)
records_to_delete = [delete_record]

delete_records_request = gdl.DeleteOrWithdrawIfLatestRecordVersionRequest(delete_or_withdraw_records=records_to_delete)
delete_records_response = import_service.delete_or_withdraw_if_latest_record_version(delete_records_request)
print(f"Record {imported_records[0].long_name} was deleted")
```
*Previous cell output:*
```output
Record Scripting Toolkit Foundation Layer Example 4:Wed Jan  7 19:30:39 2026 was deleted
```