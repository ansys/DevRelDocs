# Inspecting record link groups 
Find which record link groups are in a specified database, and find which records are contained in a specified record link group.

This example demonstrates:

- Retrieving a list of record link groups from a database

- Retrieve a list of records within a specified record link group

## Create a Granta MI session
Import the GRANTA_MIScriptingToolkit package, and create a connection to a Granta MI server.


```python
import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession('http://my.server.name/mi_servicelayer', autoLogon=True)

print("Session created")                                                               
```

    Session created
    

## Retrieve record link groups from a given database
You can use GetRecordLinkGroups to retrieve information about all the link groups in a given database.
Find the record link groups and the group IDs for groups in the MI_Training database.


```python
dbKey = "MI_Training"
tableName = "Metals Pedigree"

req = gdl.GetRecordLinkGroups(DBKey=dbKey)
grlg_resp = session.browseService.GetRecordLinkGroups(req)

groups = {} # Will be populated as RLG name -> RLG object
for i, r in enumerate(grlg_resp.recordLinkGroups):
    if i < 20: # Print first 20 group names
        print("{0}: id={1}".format(r.name, r.reference.recordLinkGroupIdentity))
    if r.fromTable.name == tableName:
        groups[r.name] = r
```

    Training Exercise: id=116
    Tensile Statistical Data: id=106
    Design Data: id=105
    Tensile Test Data: id=104
    Metals Pedigree: id=102
    Specification Values: id=127
    Tensile Statistical Data: id=103
    Fatigue Test Data: id=125
    Fatigue Statistical Data: id=126
    Test Data: id=128
    AM builds using this batch: id=123
    Tensile Test Data: id=101
    Tensile test data: id=8
    Material batch: id=124
    Tensile tests from this build: id=10
    Machine learning: Build parameters: id=11
    MaterialUniverse: id=115
    Smart Link to MaterialUniverse: id=3
    

## List the records within a record link group
Search for records containing "ICS-46634". Subsequent steps will use only these search results.


```python
def TextSearch(session, text, dbKey):
    """
    Simple wrapper around textsearch
    """
    search = session.searchService
    s = gdl.SimpleTextSearch()
    s.DBKey = dbKey
    s.searchValue = text
    s.populateGUIDs = True
    resp = search.SimpleTextSearch(s)
    return resp

results = TextSearch(session, "ICS-46634", dbKey)
```

Collate the record references from the search results. Use GetLinkedRecords to specify the record link group "Tensile Test Data".


```python
recs = [r.recordReference for r in results.searchResults]

name = "Tensile Test Data"
g = groups[name]

req = gdl.GetLinkedRecordsRequest(recordLinkGroups=[g.reference],
                                  recordReferences=recs)

glr_resp = session.browseService.GetLinkedRecords(req)
```

Collate and list the number of results from the record link group.


```python
links = [] # list of ordered pairs of refs
for sr in glr_resp.sourceRecords:
    for rlg in sr.recordLinkGroups.recordLinkGroups:
        for tr in rlg.linkedRecords:
            links.append((sr.record, tr.recordReference))
print("{0} links found from {1} source records".format(len(links), len(recs)))
```

    9 links found from 1 source records
    

Use other functions in the MI Scripting Toolkit to retrieve the names of the test data records within the record link group.


```python
# Prepare to use GetTreeRecords to find record names corresponding to record references
idsToFetch = set([pair[0].identity for pair in links])      # source records
idsToFetch.update([pair[1].identity for pair in links])     # also add target records

# create ref objects for all source/target records
recordRefs = [gdl.RecordReference(DBKey=dbKey, identity=recId) for recId in idsToFetch]

# use GetTreeRecords to find record names
req = gdl.GetTreeRecordsRequest(records=recordRefs)
resp = session.browseService.GetTreeRecords(req)
nameLookup = {tr.recordReference.identity:tr.shortName for tr in resp.treeRecords}

# Get and print record names
linkPairs = []
for r in links:
    linkPairs.append((nameLookup[r[0].identity], nameLookup[r[1].identity]))
    
print("Records linked by '{0}':".format(name))
for pair in linkPairs:
    print("{0:<30}-> {1}".format(pair[0], pair[1]))
```

    Records linked by 'Tensile Test Data':
    Batch 921                     -> MTS-615722
    Batch 921                     -> MTS-615721
    Batch 921                     -> MTS-615723
    Batch 921                     -> MTS-615724
    Batch 921                     -> MTS-615725
    Batch 921                     -> MTS-615726
    Batch 921                     -> MTS-615734
    Batch 921                     -> MTS-615735
    Batch 921                     -> MTS-615736
    
