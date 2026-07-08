# Inspecting record link groups
Find which record link groups are in a specified database, and find which records are contained in a specified record
link group.

This example demonstrates:

- Retrieving a list of record link groups from a database

- Retrieve a list of records within a specified record link group

## Create a Granta MI session
Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.


```python
import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)

print("Session created")
```
*Previous cell output:*
```output
Session created
```
## Retrieve record link groups from a given database
You can use get_record_link_groups to retrieve information about all the link groups in a given database.
Find the record link groups and the group IDs for groups in the MI_Training database.


```python
db_key = "MI_Training"
table_name = "Metals Pedigree"

req = gdl.GetRecordLinkGroups(db_key=db_key)
grlg_resp = session.browse_service.get_record_link_groups(req)

groups = {}  # Will be populated as RLG name -> RLG object
for idx, rlg in enumerate(grlg_resp.record_link_groups):
    if idx < 5:  # Print first 5 group names
        print(f"{rlg.name}: id={rlg.reference.record_link_group_identity}")
    if rlg.from_table.name == table_name:
        groups[rlg.name] = rlg
```
*Previous cell output:*
```output
Training Exercise: id=116
Tensile Statistical Data: id=106
Design Data: id=105
Tensile Test Data: id=104
Metals Pedigree: id=102
```
## List the records within a record link group
Search for records containing "ICS-46634". Subsequent steps will use only these search results.


```python
def text_search(session: gdl.GRANTA_MISession, text: str, db_key: str):
    """
    Simple wrapper around textsearch
    """
    search = session.search_service
    s = gdl.SimpleTextSearch(
        db_key=db_key,
        search_value=text,
        populate_guids=True,
    )
    resp = search.simple_text_search(s)
    return resp


results = text_search(session, "ICS-46634", db_key)
```

Collate the record references from the search results. Use GetLinkedRecords to specify the record link group "Tensile
Test Data".


```python
records = [r.record_reference for r in results.search_results]

name = "Tensile Test Data"
rlg = groups[name]

req = gdl.GetLinkedRecordsRequest(
    record_link_groups=[rlg.reference],
    record_references=records,
)

glr_resp = session.browse_service.get_linked_records(req)
```

Collate and list the number of results from the record link group.


```python
links = []  # list of ordered pairs of refs
for sr in glr_resp.source_records:
    for rlg in sr.record_link_groups.record_link_groups:
        for tr in rlg.linked_records:
            links.append((sr.record, tr.record_reference))
print(f"{len(links)} links found from {len(records)} source records")
```
*Previous cell output:*
```output
9 links found from 1 source records
```
Use other functions in the MI Scripting Toolkit to retrieve the names of the test data records within the record link
group.


```python
# Prepare to use GetTreeRecords to find record names corresponding to record references
ids_to_fetch = set([pair[0].identity for pair in links])  # source records
ids_to_fetch.update([pair[1].identity for pair in links])  # also add target records

# create ref objects for all source/target records
record_references = [gdl.RecordReference(db_key=db_key, identity=recId) for recId in ids_to_fetch]

# use GetTreeRecords to find record names
req = gdl.GetTreeRecordsRequest(records=record_references)
resp = session.browse_service.get_tree_records(req)
name_lookup = {tr.record_reference.identity: tr.short_name for tr in resp.tree_records}

# Get and print record names
link_pairs = []
for r in links:
    link_pairs.append((name_lookup[r[0].identity], name_lookup[r[1].identity]))

print(f"Records linked by '{name}':")
for pair in link_pairs:
    print(f"{pair[0]:<30}-> {pair[1]}")
```
*Previous cell output:*
```output
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
```