# RecordLists and MI Scripting Toolkit

This example demonstrates how to use the Granta MI RecordLists library with the Scripting
Toolkit. The RecordLists library provides programmatic access to the Favorites
feature in Granta MI, which allows users to create and access lists of records stored on the
Granta MI server.

The example demonstrates two use scenarios:

1. Create a record list and add Streamlined API `Record` objects to it.
2. Fetch a record list and create Streamlined API `Record` objects from the contents.

These use cases are then repeated to show how similar steps are performed for version-controlled
records.

This example does not cover all aspects of the RecordLists package. Full API documentation
and additional examples are available [here](https://recordlists.grantami.docs.pyansys.com).

<div class="alert alert-info">

**Info:**

Running this notebook requires the `ansys-grantami-recordlists` package.
See the 'PyGranta Dependencies' section of the 'Example Notebooks'
documentation page for more details.
</div>

## Create a record list from Streamlined API `Record` objects

First create an MI Scripting Toolkit session.

### Create a list of Streamlined API `Record` objects


```python
from GRANTA_MIScriptingToolkit import granta as mpy

SERVICE_LAYER_URL = "http://my.server.name/mi_servicelayer"
mi = mpy.connect(SERVICE_LAYER_URL, autologon=True)
```

Search for all *MaterialUniverse* records with a density above a certain threshold. The
`Table.search_for_records_where` method returns a list of Streamlined API `Record` objects.


```python
db = mi.get_db(db_key="MI_Training")
db.unit_system = "SI (Consistent)"
material_universe = db.get_table("MaterialUniverse")

criterion = material_universe.attributes["Density"].search_criterion(greater_than=7000.0)
results = material_universe.search_for_records_where([criterion])
results
```



*Previous cell output:*
```output
[<Record long name: Low alloy steel, AISI 4130, air melted, quenched & tempered>,
 <Record long name: Tungsten carbide>,
 <Record long name: 250 maraging steel, maraged at 900F>,
 <Record long name: Low alloy steel, AISI 4130, air melted, normalized>]
```


### Create an 'ansys-grantami-recordlists' client
Use the `Connection` class to connect to create Record List client.


```python
from ansys.grantami.recordlists import Connection, RecordListItem

api_client = Connection(SERVICE_LAYER_URL).with_autologon().connect()
record_list = api_client.create_list(name="High density materials")
record_list
```



*Previous cell output:*
```output
<RecordList name: High density materials>
```


### Add Streamlined API Record objects to a Record List
A `RecordList` object is a collection of `RecordListItem` objects, where each `RecordListItem`
refers to a specific Granta MI record. Therefore, to add records to a RecordList, we must first
create a list of `RecordListItem` objects from Streamlined API Record objects.


```python
items = [
    RecordListItem(
        database_guid=record.table.database.guid,
        table_guid=record.table.guid,
        record_history_guid=record.history_guid,
    )
    for record in results
]
```

Now, use the `RecordList.add_items_to_list` method to add the `RecordListItem` objects to the
RecordList. This method returns all items now contained in the RecordList.


```python
record_list_items = api_client.add_items_to_list(record_list, items)
record_list_items
```



*Previous cell output:*
```output
[<RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='8cf5911d-b08c-4893-880a-838cccd5ea12')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='d0237d48-ddd2-4916-b24c-86ba51f25b52')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='1ca9e494-a011-4023-970c-d63c8a48c1a7')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='f425c026-2e6b-486a-a342-ee3ea79fdb0c')>]
```


## Get Streamlined API `Record` objects from a Record List

The method `RecordList.add_items_to_list` called above returned the list of `RecordListItem`
objects, and so the following cell is not strictly necessary. However, for completeness, the
following cell identifies a RecordList by name and gets the contents of the list.


```python
record_lists = api_client.get_all_lists()
record_list = [r for r in record_lists if r.name == "High density materials"][0]
record_list_items = api_client.get_list_items(record_list)
record_list_items
```



*Previous cell output:*
```output
[<RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='8cf5911d-b08c-4893-880a-838cccd5ea12')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='d0237d48-ddd2-4916-b24c-86ba51f25b52')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='1ca9e494-a011-4023-970c-d63c8a48c1a7')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='f425c026-2e6b-486a-a342-ee3ea79fdb0c')>]
```


Use the `Session.get_records_by_ids` method to instantiate multiple `Record` objects at once.

This method requires database keys, but the `RecordListItem` objects only contain database GUIDs.
To convert between the two:

1. Use the `Session.dbs_by_guid` dictionary to get the `Database` object given its GUID
2. Access the `Database.db_key` property to get the database key.

<div class="alert alert-warning">

**Warning:**

It is a valid Granta MI configuration to have multiple databases with the same GUID. In this
situation, `Session.dbs_by_guid` will raise a `KeyError`. In this case, use `Session.get_db()`
and provide additional arguments to identify a single database, for example the database name.
</div>


```python
identifiers = [
    {
        "db_key": mi.dbs_by_guid[item.database_guid].db_key,
        "hguid": item.record_history_guid,
    }
    for item in record_list_items
]
records = mi.get_records_by_ids(identifiers)
records
```



*Previous cell output:*
```output
[<Record long name: Low alloy steel, AISI 4130, air melted, normalized>,
 <Record long name: 250 maraging steel, maraged at 900F>,
 <Record long name: Low alloy steel, AISI 4130, air melted, quenched & tempered>,
 <Record long name: Tungsten carbide>]
```


## Version-controlled records
### Create a record list from version-controlled Streamlined API `Record` objects
Search for all *Design Data* records with a density above a certain threshold.


```python
design_data = db.get_table("Design Data")

criterion = design_data.attributes["Density"].search_criterion(greater_than=7000.0)
results = design_data.search_for_records_where([criterion])
```

Since the *Design Data* table is version-controlled, each `Record` object represents a particular
version of a Granta MI record. This can be seen by accessing the ``version_number``
property.


```python
for r in results:
    print(f"'{r.name}'", ", version: ",  r.version_number)
```
*Previous cell output:*
```output
'Nickel alloys, Inconel 718, Forging' , version:  1
'250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis' , version:  3
```
When creating a `RecordListItem` that represents a version-controlled record, the `record_version`
parameter is optional. If it is specified, the `RecordListItem` represents that specific version.
If it is omitted, the `RecordListItem` tracks the latest available version of that record.

In this example, provide the version number of the latest version.


```python
version_controlled_items = [
    RecordListItem(
        database_guid=record.table.database.guid,
        table_guid=record.table.guid,
        record_history_guid=record.history_guid,
        record_version=record.version_number,
    )
    for record in results
]
record_list_items = api_client.add_items_to_list(record_list, version_controlled_items)
record_list_items
```



*Previous cell output:*
```output
[<RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='8cf5911d-b08c-4893-880a-838cccd5ea12')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='d0237d48-ddd2-4916-b24c-86ba51f25b52')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='1ca9e494-a011-4023-970c-d63c8a48c1a7')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='f425c026-2e6b-486a-a342-ee3ea79fdb0c')>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='5b1df472-a92e-4317-b9a8-e1672335bc2e', record_version=3)>,
 <RecordListItem(database_guid='43a43640-4919-428a-bac9-16efbc4ce6ed', record_history_guid='ce294339-e59d-4be1-a96c-f9e92adb71ac', record_version=1)>]
```


## Get Streamlined API `Record` objects from a Record List with version-controlled items
As in the non-versioned example, use the `Session.get_records_by_ids` method to instantiate the
`Record` objects. In this case though, we provide both the `hguid` and `vguid` parameters for
each record:

* The `hguid` (or record history GUID) refers to all versions of a record, and generally resolves
to the latest available version that the user can access.
* The `vguid` (record version GUID or record GUID) refers to a specific version of a record.

If a `record_version` was provided when creating a `RecordListItem`, the
`RecordListItem.record_guid` property will be populated. If however, the `RecordListItem` was
created without a `record_version`, the `RecordListItem.record_guid` property will be empty. In
both cases the `record_history_guid` is populated.

Since the `Session.get_records_by_ids` prioritizes the `vguid` parameter over the `hguid`
parameter, we can provide both:

* If the `RecordListItem.record_guid` property exists, `Session.get_records_by_ids` will resolve
the specific version of the record.
* If the `RecordListItem.record_guid` property does not exist, `Session.get_records_by_ids` will
identify the latest available version for the user.

The following code therefore correctly identifies items specified both with and without a version.


```python
identifiers = [
    {
        "db_key": mi.dbs_by_guid[item.database_guid].db_key,
        "hguid": item.record_history_guid,
        "vguid": item.record_guid
    }
    for item in record_list_items
]
records = mi.get_records_by_ids(identifiers)
record_versions = [r.version_number for r in records]

for rec, ver in zip(records, record_versions):
    print(f"{rec.name}{' [v' + str(ver) + ']' if ver else ''} ({rec.table.name})")
```
*Previous cell output:*
```output
Low alloy steel, AISI 4130, air melted, normalized (MaterialUniverse)
250 maraging steel, maraged at 900F (MaterialUniverse)
Low alloy steel, AISI 4130, air melted, quenched & tempered (MaterialUniverse)
Tungsten carbide (MaterialUniverse)
250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis [v3] (Design Data)
Nickel alloys, Inconel 718, Forging [v1] (Design Data)
```

```python
api_client.delete_list(record_list)
```
