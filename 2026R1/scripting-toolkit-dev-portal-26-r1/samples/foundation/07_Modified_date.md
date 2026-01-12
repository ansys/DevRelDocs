# lastModifier and last modifiedDate pseudo-attributes

Modify a record


```python
from datetime import datetime

import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", auto_logon=True, receive_timeout=5000)
db_key = "MI_Training"
table_name = "Tensile Test Data"

import_service = session.data_import_service
browse_service = session.browse_service
export_service = session.data_export_service

partial_table_ref = gdl.PartialTableReference(table_name=table_name)

modified_record_guid = "4269f1bc-df6b-4a6d-870c-ef931728f37b"
modified_record_ref = gdl.RecordReference(db_key=db_key, record_guid=modified_record_guid)

attribute_project_notes = "Project Notes"
attribute_val = f"Project was updated: {datetime.now()}"
attribute_ref = gdl.AttributeReference(
    name=attribute_project_notes,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
import_attribute_val = gdl.ImportAttributeValue(
    long_text_data_value=gdl.LongTextDataType(value=attribute_val),
    attribute_reference=attribute_ref,
)
update_record = gdl.ImportRecord(
    record_name=None,
    import_record_mode="Update",
    import_attribute_values=[import_attribute_val],
    existing_record=modified_record_ref,
)

update_request = gdl.SetRecordAttributesRequest(import_records=[update_record])
updated_records = import_service.set_record_attributes(update_request).records_imported
updated_record_ref = updated_records[0].record_reference
updated_record_name = updated_records[0].long_name
print(f'Updated record "{updated_record_name}"')
```
*Previous cell output:*
```output
Updated record "MTS-615723"
```
Now let's retrieve the record creator, createdDate, lastModifier and modifiedDate


```python
pseudo_creator = gdl.AttributeReference(
    pseudo_attribute=gdl.AttributeReference.MIPseudoAttributeReference.creator,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
pseudo_created_date = gdl.AttributeReference(
    pseudo_attribute=gdl.AttributeReference.MIPseudoAttributeReference.createdDate,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
pseudo_last_modifier = gdl.AttributeReference(
    pseudo_attribute=gdl.AttributeReference.MIPseudoAttributeReference.lastModifier,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
pseudo_modified_date = gdl.AttributeReference(
    pseudo_attribute=gdl.AttributeReference.MIPseudoAttributeReference.modifiedDate,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
attribute_refs = [
    pseudo_creator,
    pseudo_created_date,
    pseudo_last_modifier,
    pseudo_modified_date,
]

export_request = gdl.GetRecordAttributesByRefRequest(
    record_references=[modified_record_ref],
    attribute_references=attribute_refs,
)

exported_data = export_service.get_record_attributes_by_ref(export_request).record_data
for record in exported_data:
    creator = [a.short_text_data_value.value for a in record.attribute_values if a.attribute_name == "[creator]"][0]
    created_date = [a.date_time_data_value.value for a in record.attribute_values if a.attribute_name == "[createdDate]"][0]
    modifier = [a.short_text_data_value.value for a in record.attribute_values if a.attribute_name == "[lastModifier]"][0]
    modified_date = [a.date_time_data_value.value for a in record.attribute_values if a.attribute_name == "[modifiedDate]"][0]
    print(f'"{creator}" imported the record on {created_date}')
    print(f'The record was last modified on {modified_date} by "{modifier}"')
```
*Previous cell output:*
```output
"Ansys Granta 1" imported the record on 2023-09-20T12:11:05.873
The record was last modified on 2026-01-07T19:32:11.27 by "ANSYS\mi-sw-admin"
```