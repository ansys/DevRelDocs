# Modifying record link groups

Create a record link between two records in a Granta MI database.

This example demonstrates:

- Retrieve a list of record groups within a Granta MI database
- Import a new record
- Create a link between the new record and another record

## Create a Granta MI session
Import the GRANTA_MIScriptingToolkit package, and create a connection to a Granta MI server.


```python
from datetime import datetime

import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", autoLogon=True)
```

##  Create a link between a current record and a new record
Find the record link groups that can be created within MaterialUniverse.


```python
dbkey = "MI_Training"
tableName = "MaterialUniverse"

req = gdl.GetRecordLinkGroups(DBKey=dbkey)

grlg_resp = session.browseService.GetRecordLinkGroups(req)

groups = {}
for r in grlg_resp.recordLinkGroups:
    if r.fromTable.name == tableName:
        print(f"{r.name}: id={r.reference.recordLinkGroupIdentity}")
        groups[r.name] = r
```
*Previous cell output:*
```output
Training Exercise: id=116
```
Import a new record into the "Training Exercise for Import" table, with the current time as the record name. This will
be the target record to create a link to later.


```python
grn_req = gdl.GetRootNode(table=groups["Training Exercise"].toTable)
grn_resp = session.browseService.GetRootNode(grn_req)

now = datetime.now().strftime("%c")
linkedRecordName = f"Scripting toolkit foundation layer example 09:{now}"

ir = gdl.ImportRecord(
    recordName=linkedRecordName,
    existingRecord=grn_resp.rootNode.recordReference,
)
req = gdl.SetRecordAttributesRequest(importRecords=[ir], importErrorMode=gdl.GRANTA_Constants.ImportErrorMode.Fault)
resp = session.dataImportService.SetRecordAttributes(req)
target = resp.recordsImported[0]
```

Set "PMMA (cast sheet)" in MaterialUniverse as the source record to create a link from.


```python
req = gdl.RecordNameSearchRequest(
    caseSensitiveNames=False,
    recordName="PMMA (cast sheet)",
    populateGUIDs=True,
    searchShortNames=True,
    searchFullNames=True,
)
req.table = gdl.TableReference(DBKey=dbkey, name=tableName)
resp = session.searchService.RecordNameSearch(req)
sourceResult = resp.searchResults[0]
source = sourceResult.recordReference
```

Use the ModifyRecordLinks operation to create a link called "Training Exercise" from "PMMA (cast sheet)" to the new
imported record.


```python
destinationRec = gdl.NotatedTargetRecord(
    record=target.recordReference,
    notes="This will work",
)
mySourceRec = gdl.NotatedTargetedSourceRecord(
    sourceRecord=source,
    targetRecords=[destinationRec],
)
linkThisRecord = gdl.LinkRecords(sourceRecords=[mySourceRec])
recordLinksMod = gdl.RecordLinkModifications(linkRecords=[linkThisRecord])

req = gdl.ModifyRecordLinksRequest(
    recordLinkGroupReference=groups["Training Exercise"].reference,
    recordLinkModifications=recordLinksMod,
    importErrorMode=gdl.GRANTA_Constants.ImportErrorMode.Fault,
)
mrlresp = session.dataImportService.ModifyRecordLinks(req)
```

Print the record names and GUIDs for the newly-linked records. You can also check this new link in MI Viewer, by
viewing the link on the "PMMA (cast sheet)" datasheet.


```python
print(f"Created {len(mrlresp.recordLinkChanges.linked)} link(s)")

change = mrlresp.recordLinkChanges.linked[0]
source_guid = change.record.recordReference.recordGUID
source_name = sourceResult.shortName
target_guid = change.targetRecords[0].recordReference.recordGUID
target_name = ir.recordName
print(f"{source_guid} ({source_name}) -> {target_guid} ({target_name})")
```
*Previous cell output:*
```output
Created 1 link(s)
000016f6-000e-4fff-8fff-dd92ffff0000 (Cast sheet) -> c15ee8ea-7e3c-4888-b9c8-610d37e50721 (Scripting toolkit foundation layer example 09:Wed Apr  9 10:49:51 2025)
```