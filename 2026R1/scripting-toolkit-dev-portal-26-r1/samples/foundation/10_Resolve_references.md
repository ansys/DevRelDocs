# ResolveReferences

Let's see if we can modify a record...


```python
import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", auto_logon=True, receive_timeout=5000)
db_key = "MI_Training"
table_name = "Tensile Test Data"

browse_service = session.browse_service

modified_record_guid = "4269f1bc-df6b-4a6d-870c-ef931728f37b"
modified_record_ref = gdl.RecordReference(db_key=db_key, record_guid=modified_record_guid)

resolve_refs_request = gdl.ResolveReferencesRequest(entities=[modified_record_ref])

can_modify_int = browse_service.resolve_references(resolve_refs_request).entity_resolutions[0].can_write
if can_modify_int == 0:
    print("Yes, we can edit this record.")
else:
    print("No, we don't have permission to edit this record.")
```
*Previous cell output:*
```output
Yes, we can edit this record.
```