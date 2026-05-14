# ResolveReferences

Let's see if we can modify a record...


```python
import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", autoLogon=True, receiveTimeout=5000)
db_key = "MI_Training"
table_name = "Tensile Test Data"

browse_service = session.browseService

modfied_record_guid = "4269f1bc-df6b-4a6d-870c-ef931728f37b"
modified_record_ref = gdl.RecordReference(DBKey=db_key, recordGUID=modfied_record_guid)

resolve_refs_request = gdl.ResolveReferencesRequest(entities=[modified_record_ref])

can_modify_int = browse_service.ResolveReferences(resolve_refs_request).entityResolutions[0].canWrite
if can_modify_int == 0:
    print("Yes, we can edit this record.")
else:
    print("No, we don't have permission to edit this record.")
```
*Previous cell output:*
```output
Yes, we can edit this record.
```