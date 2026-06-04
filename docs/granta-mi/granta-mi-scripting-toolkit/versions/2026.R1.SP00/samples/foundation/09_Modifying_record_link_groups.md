# Modifying record link groups

Create a record link between two records in a Granta MI database.

This example demonstrates:

- Retrieve a list of record groups within a Granta MI database
- Import a new record
- Create a link between the new record and another record

## Create a Granta MI session
Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.


```python
from datetime import datetime

import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)
```

##  Create a link between a current record and a new record
Find the record link groups that can be created within MaterialUniverse.


```python
db_key = "MI_Training"
table_name = "MaterialUniverse"

req = gdl.GetRecordLinkGroups(db_key=db_key)

grlg_resp = session.browse_service.get_record_link_groups(req)

groups = {}
for rlg in grlg_resp.record_link_groups:
    if rlg.from_table.name == table_name:
        print(f"{rlg.name}: id={rlg.reference.record_link_group_identity}")
        groups[rlg.name] = rlg
```
*Previous cell output:*
```output
Training Exercise: id=116
```
Import a new record into the "Training Exercise for Import" table, with the current time as the record name. This will
be the target record to create a link to later.


```python
grn_req = gdl.GetRootNode(table=groups["Training Exercise"].to_table)
grn_resp = session.browse_service.get_root_node(grn_req)

now = datetime.now().strftime("%c")
linked_record_name = f"Scripting Toolkit Foundation Layer Example 9:{now}"

ir = gdl.ImportRecord(
    record_name=linked_record_name,
    existing_record=grn_resp.root_node.record_reference,
)
req = gdl.SetRecordAttributesRequest(import_records=[ir], import_error_mode=gdl.GRANTA_Constants.ImportErrorMode.Fault)
resp = session.data_import_service.set_record_attributes(req)
target = resp.records_imported[0]
```

Set "PMMA (cast sheet)" in MaterialUniverse as the source record to create a link from.


```python
req = gdl.RecordNameSearchRequest(
    case_sensitive_names=False,
    record_name="PMMA (cast sheet)",
    populate_guids=True,
    search_short_names=True,
    search_full_names=True,
    table=gdl.TableReference(db_key=db_key, name=table_name)
)
resp = session.search_service.record_name_search(req)
source_result = resp.search_results[0]
source = source_result.record_reference
```

Use the ModifyRecordLinks operation to create a link called "Training Exercise" from "PMMA (cast sheet)" to the new
imported record.


```python
destination_record = gdl.NotatedTargetRecord(
    record=target.record_reference,
    notes="This will work",
)
source_record = gdl.NotatedTargetedSourceRecord(
    source_record=source,
    target_records=[destination_record],
)
link_records = gdl.LinkRecords(source_records=[source_record])
record_link_modifications = gdl.RecordLinkModifications(link_records=[link_records])

req = gdl.ModifyRecordLinksRequest(
    record_link_group_reference=groups["Training Exercise"].reference,
    record_link_modifications=record_link_modifications,
    import_error_mode=gdl.GRANTA_Constants.ImportErrorMode.Fault,
)
mrlresp = session.data_import_service.modify_record_links(req)
```

Print the record names and GUIDs for the newly-linked records. You can also check this new link in MI Viewer, by
viewing the link on the "PMMA (cast sheet)" datasheet.


```python
print(f"Created {len(mrlresp.record_link_changes.linked)} link(s)")

change = mrlresp.record_link_changes.linked[0]
source_guid = change.record.record_reference.record_guid
source_name = source_result.short_name
target_guid = change.target_records[0].record_reference.record_guid
target_name = ir.record_name
print(f"{source_guid} ({source_name}) -> {target_guid} ({target_name})")
```
*Previous cell output:*
```output
Created 1 link(s)
000016f6-000e-4fff-8fff-dd92ffff0000 (Cast sheet) -> 3481aff1-d5a8-4451-9e55-8557eed407fa (Scripting Toolkit Foundation Layer Example 9:Wed Jan  7 19:32:44 2026)
```