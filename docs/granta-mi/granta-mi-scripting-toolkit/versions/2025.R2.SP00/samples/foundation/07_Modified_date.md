# lastModifier and last modifiedDate pseudo-attributes

Modify a record


```python
import GRANTA_MIScriptingToolkit as gdl
import datetime

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", autoLogon=True, receiveTimeout=5000)
db_key = "MI_Training"
table_name = "Tensile Test Data"

import_service = session.dataImportService
browse_service = session.browseService
export_service = session.dataExportService

partial_table_ref = gdl.PartialTableReference(tableName=table_name)

modfied_record_guid = "4269f1bc-df6b-4a6d-870c-ef931728f37b"
modified_record_ref = gdl.RecordReference(DBKey=db_key, recordGUID=modfied_record_guid)

attribute_project_notes = "Project Notes"
attribute_val = f"Project was updated: {datetime.datetime.now()}"
attribute_ref = gdl.AttributeReference(
    name=attribute_project_notes,
    DBKey=db_key,
    partialTableReference=partial_table_ref,
)
import_attribute_val = gdl.ImportAttributeValue(
    longTextDataValue=gdl.LongTextDataType(value=attribute_val),
    attributeReference=attribute_ref,
)
update_record = gdl.ImportRecord(
    recordName=None,
    importRecordMode="Update",
    importAttributeValues=[import_attribute_val],
    existingRecord=modified_record_ref,
)

update_request = gdl.SetRecordAttributesRequest(importRecords=[update_record])
updated_records = import_service.SetRecordAttributes(update_request).recordsImported
updated_record_ref = updated_records[0].recordReference
updated_record_name = updated_records[0].longName
print(f'Updated record "{updated_record_name}"')
```
*Previous cell output:*
```output
Updated record "MTS-615723"
```
Now let's retrieve the record creator, createdDate, lastModifier and modifiedDate


```python
pseudo_creator = gdl.AttributeReference(
    pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.creator,
    DBKey=db_key,
    partialTableReference=partial_table_ref,
)
pseudo_created_date = gdl.AttributeReference(
    pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.createdDate,
    DBKey=db_key,
    partialTableReference=partial_table_ref,
)
pseudo_last_modifier = gdl.AttributeReference(
    pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.lastModifier,
    DBKey=db_key,
    partialTableReference=partial_table_ref,
)
pseudo_modified_date = gdl.AttributeReference(
    pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.modifiedDate,
    DBKey=db_key,
    partialTableReference=partial_table_ref,
)
attribute_refs = [pseudo_creator, pseudo_created_date, pseudo_last_modifier, pseudo_modified_date]

export_request = gdl.GetRecordAttributesByRefRequest(
    recordReferences=[modified_record_ref],
    attributeReferences=attribute_refs,
)

exported_data = export_service.GetRecordAttributesByRef(export_request).recordData
for record in exported_data:
    creator = [a.shortTextDataType.value for a in record.attributeValues if a.attributeName == "[creator]"][0]
    created_date = [a.dateTimeDataType.value for a in record.attributeValues if a.attributeName == "[createdDate]"][0]
    modifier = [a.shortTextDataType.value for a in record.attributeValues if a.attributeName == "[lastModifier]"][0]
    modified_date = [a.dateTimeDataType.value for a in record.attributeValues if a.attributeName == "[modifiedDate]"][0]
    print(f'"{creator}" imported the record on {created_date}')
    print(f'The record was last modified on {modified_date} by "{modifier}"')
```
*Previous cell output:*
```output
"Ansys Granta 1" imported the record on 2023-09-20T12:11:05.873
The record was last modified on 2025-05-12T16:21:14.687 by "ANSYS\mi-sw-admin"
```