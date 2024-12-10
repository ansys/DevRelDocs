# Modifying record link groups

Create a record link between two records in a Granta MI database.

This example demonstrates:

- Retrieve a list of record groups within a Granta MI database
- Import a new record
- Create a link between the new record and another record

## Prerequisites
Import required Python packages, and define two custom functions. The functions will:

1. Format the current time (used to set the record name)
2. Perform a record name search


```python
import datetime

def NowString():
    return datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")

def FindRecord(gdlSession, dbKey, tableName, recordName):
    """ 
    Finds a record by name
    :returns: :py:mod:`SearchResult <GRANTA_MIScriptingToolkit.SearchResult>`
    """
    req = gdl.RecordNameSearchRequest(caseSensitiveNames=False, recordName=recordName, populateGUIDs=True, searchShortNames=True, searchFullNames=True)
    req.table = gdl.TableReference(DBKey=dbKey, name=tableName)
    resp = gdlSession.searchService.RecordNameSearch(req)
    return resp.searchResults[0]
```

## Create a Granta MI session
Import the GRANTA_MIScriptingToolkit package, and create a connection to a Granta MI server.


```python
import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession('http://my.server.name/mi_servicelayer', autoLogon=True)
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
        print("{0}: id={1}".format(r.name, r.reference.recordLinkGroupIdentity))
        groups[r.name] = r
```
*Previous cell output:*
```output
Training Exercise: id=116
```
Import a new record into the "Training Exercise for Import" table, with the current time as the record name. This will be the target record to create a link to later.


```python
grn_req = gdl.GetRootNode(table=groups[u'Training Exercise'].toTable)
grn_resp = session.browseService.GetRootNode(grn_req)

ir = gdl.ImportRecord(recordName=NowString(),
                      existingRecord=grn_resp.rootNode.recordReference)
req = gdl.SetRecordAttributesRequest(importRecords=[ir], importErrorMode=gdl.GRANTA_Constants.ImportErrorMode.Fault)
resp = session.dataImportService.SetRecordAttributes(req)
target = resp.recordsImported[0]
```

Set "PMMA (cast sheet)" in MaterialUniverse as the source record to create a link from.


```python
sourceResult = FindRecord(session, dbkey, "MaterialUniverse", "PMMA (cast sheet)")
source = sourceResult.recordReference
```

Use the ModifyRecordLinks operation to create a link called "Training Exercise" from "PMMA (cast sheet)" to the new imported record.


```python
destinationRec = gdl.NotatedTargetRecord(record=target.recordReference, notes="This will work")
mySourceRec = gdl.NotatedTargetedSourceRecord(sourceRecord=source,
                                              targetRecords=[destinationRec])
linkThisRecord = gdl.LinkRecords(sourceRecords=[mySourceRec])
recordLinksMod = gdl.RecordLinkModifications(linkRecords=[linkThisRecord])

req = gdl.ModifyRecordLinksRequest(recordLinkGroupReference=groups[u'Training Exercise'].reference,
                                   recordLinkModifications=recordLinksMod,
                                   importErrorMode=gdl.GRANTA_Constants.ImportErrorMode.Fault)
mrlresp = session.dataImportService.ModifyRecordLinks(req)
```

Print the record names and GUIDs for the newly-linked records. You can also check this new link in MI Viewer, by viewing the link on the "PMMA (cast sheet)" datasheet.


```python
print("Created {0} link(s)".format(len(mrlresp.recordLinkChanges.linked)))

change = mrlresp.recordLinkChanges.linked[0]
print("{0} ({1}) -> {2} ({3})".format(change.record.recordReference.recordGUID,
                                      sourceResult.shortName,
                                      change.targetRecords[0].recordReference.recordGUID,
                                      ir.recordName))
```
*Previous cell output:*
```output
Created 1 link(s)
000016f6-000e-4fff-8fff-dd92ffff0000 (Cast sheet) -> d7c5f5d9-4169-4877-81f7-f9b56f5ba94b (30/10/2024 16:13:15)
```