# Performance optimization

<a id="performance-optimization"></a>

<a id="introduction"></a>

## Introduction

The Streamlined API abstracts away the complexity of the Foundation API, making it quicker to write scripts to interact
with Granta MI without having to know the full details of the underlying API. However, all abstractions require a
trade-off, and in this case the simpler interface results reduced control over the individual requests that are sent to
the Granta MI server. In some circumstances, this can cause slower performance than using the lower level API.

To address this, use bulk operation methods to optimize performance with the Streamlined API. These methods all improve
performance through one or both of the following techniques:

* Reducing the amount of data requested from the server
* Batching requests, such that the same data is requested in fewer requests

The optimizations shown in this guide are not significant when working with small amounts of data, and the ease of use
provided by the Streamlined API makes it a very powerful tool in these scenarios. However, as the amount of data
increases to hundreds or thousands of records and attribute values, the time saved by using these more efficient methods
becomes significant.

<a id="object-caches"></a>

## Object caches

<a id="accessing-a-database-and-table"></a>

### Accessing a database and table

The first steps in any MI Scripting Toolkit script are to connect to Granta MI and fetch a database and table. The three objects,
and the fastest ways of acquiring them, are as follows:

1. [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session): [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) is the fastest way to create a session.
2. [`Database`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database): [`Session.get_db()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.get_db) is the fastest way to fetch a database.
3. [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table): [`Database.get_table()`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) is the fastest way to fetch a table.

However, [`Session.get_db()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.get_db) and [`Database.get_table()`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) fetch *all* databases and *all* tables (for the
selected database) loaded on the server, cache the results, and then return the requested database or table. Because the
results are cached, those calls to Granta MI are not repeated when the objects are accessed again. As a result, it
is not necessary to pass references to database and tables between functions, as long as the session itself is shared.
This results in cleaner code which is still performant.

The code below shows which calls result in a request being sent to Granta MI:

```python
# The following two lines result in calls to Granta MI
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Design Data")

# The following two lines do not call Granta MI, since the results are cached
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Design Data")
```

<a id="filtering-records-based-on-the-record-tree"></a>

### Filtering records based on the record tree

There are many search methods in the Streamlined API that return records that match a user-defined attribute-based
criterion or text-based criterion. However, there are some record properties that are not searchable, for example
queries based on details of the tree structure of a table. In this case, use [`Table.all_records()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records) to fetch all
records in the table with the children of each record pre-cached. Then apply your own search filters to the record list
using standard Python operations:

```python
# One call to retrieve all records in the table
recs = table.all_records(include_folders=True, include_generics=True)

# The 'Record.children' property is cached, so this list comprehension is fast
filtered_recs = [r for r in recs if len(r.children) > 3]
```

This approach can be used to filter on the following [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) properties:

* [`name`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.name)
* [`short_name`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name)
* [`color`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color)
* [`type`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type)
* [`history_guid`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_guid)
* [`record_guid`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.record_guid)
* [`parent`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent)
* [`children`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children)

These properties are pre-populated on all [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects returned by the [`Table.all_records()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records) method.
Other properties will require additional calls to Granta MI unless the appropriate ‘bulk fetch’ methods are used before
the properties are accessed. See [Table bulk operations]() and [Session bulk operations]() for more information about
these methods.

<a id="creating-records"></a>

## Creating records

To create records:

1. Use [`Table.path_from()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from) or [`Table.paths_from()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from) to create the required tree structure if required.
2. Use [`Table.create_record()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record) to create record objects, and optionally add attribute values and links.
3. Import the records using [`Session.update()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update).

<a id="step-1-creating-a-tree-structure"></a>

### Step 1: Creating a tree structure

Although a tree structure can be created by adding each folder manually, this isn’t advisable because you have to
ensure:

* that parent folders exist before any child folders are created meaning tree structure levels must be created as
  separate requests.
* that folder names are unique before creation or the operation will fail.

Using the dedicated method for creating a tree structure, [`Table.path_from()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from), overcomes these issues. All levels
of a hierarchy can be created in a single operation, and no exceptions or warnings are generated if a folder already
exists with the same name. The record color can also be specified, which is applied to all records or folders created by
the method. The method returns the last node specified in the path, allowing it to be provided as the `parent`
argument to the [`Table.create_record()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record) method.

Firstly, an example of creating a new folder structure. Create three new folders with the names “our”, “new”, and
“path”:

```python
folder = table.path_from(
   starting_node=None,
   tree_path=["our", "new", "path"],
   color=mpy.RecordColor.Fuchsia,
)
```

```pycon
>>> print(folder.name)
path

>>> print(folder.color)
Fuchsia

>>> print(folder.path)
['our', 'new']
```

Secondly, an example of creating a folder structure which overlaps the structure created previously. The “our” and “new”
records already exist, so they are not modified. A folder “route” is created as a child of the “new” folder:

```python
folder_2 = table.path_from(
    starting_node=None,
    tree_path=["our", "new", "route"],
    color=mpy.RecordColor.Silver,
)
```

```pycon
>>> print(folder_2.name)
route

>>> print(folder_2.color)
Silver

>>> print(folder_2.path)
['our', 'new']

>>> print(folder_2.parent.color)
Fuchsia
```

<a id="step-2-creating-and-populating-records"></a>

### Step 2: Creating and populating records

The [`Table.create_record()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record) method creates a new record object in Python only, and does not push that record to the
server. These records can therefore be modified, for example by adding attribute values:

```python
material_names = ["Material 1", "Material 2"]
records = []
for material_name in material_names:
    record = table.create_record(
        name=material_name,
        parent=folder,  # Response from table.path_from() in Step 1
    )
    attribute = record.attributes["Material name"]
    attribute.value = material_name
    record.set_attributes([attribute])
    records.append(record)
```

<a id="step-3-importing-records-and-data"></a>

### Step 3: Importing records and data

The [`Session.update()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) method is used to import changes to attribute values, and by default accepts multiple
records to update which are passed to Granta MI in an appropriately batched request:

```python
records = mi.update(records)
```

However, after importing records, the default behavior also re-exports the updated records to ensure the
[`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects reflect the latest state of the Granta MI server.

This behavior can be suppressed by calling [`Session.update()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) with `refresh_attributes=False`. Then either export
only the required attributes with [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) (see [Bulk fetching attributes]() section for more
information):

```python
records = mi.update(records, refresh_attributes=False)
table.bulk_fetch(records, attributes=["Material name"])
```

Alternatively, omit the [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) step entirely if the [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects are no longer required:

```python
mi.update(records, refresh_attributes=False)
```

<a id="table-bulk-operations"></a>

## Table bulk operations

The following bulk operations are implemented on the [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object and are used to group requests to to improve
script performance:

* [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch)
* [`Table.bulk_link_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch)
* [`Table.bulk_fetch_associated_records()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_associated_records)
* [`Table.bulk_fetch_data_revision_history()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history)

The `bulk_fetch` and `bulk_link_fetch` methods are described in more detail in the following subsections.

<a id="bulk-fetching-attributes"></a>

### Bulk fetching attributes

Accessing [`Record.attributes`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) causes the Streamlined API to check to see if the `attributes` property has been
populated yet. If not, it automatically populates it by exporting all the attributes for that record. This is
inefficient if only specific attributes are needed.

Instead, the [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method should be used to ensure only the required attributes are fetched. Also,
attributes can be requested for multiple records, which fetches the data in a smaller number of batched requests.

#### NOTE
The [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method does not return a value. Instead, the appropriate properties in the provided
records are updated in-place.

This example shows how to fetch a single attribute value for all records in a table. In this case, the table contains
1,000 records.

```pycon
>>> records = table.all_records()
>>> print(len(records))
1000
```

The first code example shows accessing the [`Record.attributes`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) property directly. This example contains the
fewest lines of code, but is the least efficient approach because all attributes are fetched for each record separately.

```python
density_values = [r.attributes["Density"].value for r in records]
```

To improve performance, use the [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method to fetch all attributes for all records in a smaller
number of requests before accessing the [`Record.attributes`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) dictionary. By default, [`Table.bulk_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch)
groups records into batches of 100, and requests all attributes for those records. Performance is improved, but unused
attributes are still being fetched:

```python
# 10 data export requests, each to export all attributes for 100 records, executed sequentially
table.bulk_fetch(records)

# This list comprehension does not make any data export requests
density_values = [r.attributes["Density"].value for r in records]
```

To improve performance further, only request the specific attributes we are interested in:

```python
# 10 data export requests, each to export 1 attribute for 100 records, executed sequentially
table.bulk_fetch(
    records,
    attributes=["Density"],
    parallelize=False,
)

# This list comprehension does not make any data export requests
density_values = [r.attributes["Density"].value for r in records]
```

Finally, further improvements can be made by parallelizing the export requests:

```python
# 10 data export requests, each to export 1 attribute for 100 records, executed up to 3 at a time
table.bulk_fetch(
    records,
    attributes=["Density"],
    parallelize=True,
    max_num_threads=3,
)

# This list comprehension does not make any data export requests
density_values = [r.attributes["Density"].value for r in records]
```

<a id="bulk-fetching-record-links"></a>

### Bulk fetching record links

Record link groups are accessed similarly to attributes. Accessing [`Record.links`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.links) causes the Streamlined API
to check if the `links` property has been populated yet. If not, it automatically exports all record link groups for
the record. This is inefficient if only specific record link groups are needed.

Instead, the [`Table.bulk_link_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) method should be used to ensure only the required record link groups are
fetched. Also, record link groups can be requested for multiple records, which fetches the data in a smaller number of
batched requests.

#### NOTE
The [`Table.bulk_link_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) method does not return a value. Instead, the appropriate properties in the
provided records are updated in-place.

This example shows how to fetch the links in a single record link group for all records in a table. In this case, the
table contains 1,000 records.

```pycon
>>> records = table.all_records()
>>> print(len(records))
1000
```

The first code example shows accessing the [`Record.links`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.links) property directly. This example contains
the fewest lines of code, but is the least efficient approach because all record link groups are fetched for each record
separately:

```python
linked_test_data_record_guids = set()
# 1000 link export requests, each to export all record link groups for 1 record, executed sequentially
for record in records:
    guids = {r.history_guid for r in record.links["Tensile Statistical Data"]}
    linked_test_data_record_guids |= guids
```

To improve performance, use the [`Table.bulk_link_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) method to fetch all record links for all records in a
smaller number of requests before accessing the [`Record.links`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.links) dictionary. By default,
[`Table.bulk_link_fetch()`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) groups records into batches of 100, and requests all record link groups for those
records. Performance is improved, but unused record link groups are still being fetched:

```python
# 10 link export requests, each to export all record link groups for 100 records, executed sequentially
table.bulk_link_fetch(records)

linked_test_data_record_guids = set()
# This loop does not make any link export requests
for record in records:
    guids = {r.history_guid for r in record.links["Tensile Statistical Data"]}
    linked_test_data_record_guids |= guids
```

To improve performance further, only request the required record link group:

```python
# 10 link export requests, each to export 1 record link group for 100 records, executed sequentially
table.bulk_link_fetch(
    records,
    link_groups=["Tensile Statistical Data"],
    parallelize=False,
)

linked_test_data_record_guids = set()
# This loop does not make any link export requests
for record in records:
    guids = {r.history_guid for r in record.links["Tensile Statistical Data"]}
    linked_test_data_record_guids |= guids
```

Finally, further improvements can be made by parallelizing the export requests:

```python
# 10 link export requests, each to export 1 record link group for 100 records, executed up to 3 at a time
table.bulk_link_fetch(
    records,
    link_groups=["Tensile Statistical Data"],
    parallelize=True,
    max_num_threads=3,
)

linked_test_data_record_guids = set()
# This loop does not make any link export requests
for record in records:
    guids = {r.history_guid for r in record.links["Tensile Statistical Data"]}
    linked_test_data_record_guids |= guids
```

<a id="session-bulk-operations"></a>

## Session bulk operations

The following bulk operations are implemented on the [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object and are used to group requests to to
improve script performance:

* [`Session.bulk_fetch_release_states()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states)
* [`Session.bulk_delete_or_withdraw_records()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records)

<a id="fetching-release-states"></a>

### Fetching release states

Accessing [`Record.release_state`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.release_state) causes the Streamlined API to check if the `release_state` property has been
populated yet. If not, it automatically exports the release state and release history for the record. This is
inefficient if the property is accessed for multiple records in a short space of time, for example within a loop or
comprehension.

Instead, the [`Session.bulk_fetch_release_states()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) method should be used to request the revision information for
multiple records in a smaller number of batched requests. Additionally, since the `bulk_fetch_release_states` method
is implemented on the [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object, release states can be fetched for records in multiple tables and
databases simultaneously.

This method can also be parallelized and batched by using the appropriate arguments, see the API guide for more details.

This example shows how to fetch the release states for all records in a table. In this case, the table contains 1,000
records.

```pycon
>>> records = table.all_records()
>>> print(len(records))
1000
```

The first example fetches the release states for records individually, with one request per record:

```python
# 1000 record version export requests, each to export record versions for 1 record, executed sequentially
release_states = {r.name: r.release_state for r in records}
```

To improve performance, fetch the release states in bulk first before accessing the [`Record.release_state`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.release_state)
property. By default, [`Session.bulk_fetch_release_states()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) groups records into batches of 100:

```python
# 10 record version export requests, each to export record versions for 100 records, executed sequentially
mi.bulk_fetch_release_states(records)

# This dictionary comprehension does not make any record version export requests
release_states = {r.name: r.release_state for r in records}
```

Finally, further improvements can be made by parallelizing the export requests:

```python
# 10 record version export requests, each to export record versions for 100 records, executed up to 3 at a time
mi.bulk_fetch_release_states(
    records,
    parallelize=True,
    max_num_threads=3,
)

# This dictionary comprehension does not make any record version export requests
release_states = {r.name: r.release_state for r in records}
```

<a id="deleting-records"></a>

### Deleting records

Calling [`Record.delete_or_withdraw_record_on_server()`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.delete_or_withdraw_record_on_server) causes the Streamlined API to immediately delete or
withdraw the record on the server. This is inefficient if multiple records are deleted or withdrawn in a short space of
time, for example within a loop or comprehension.

Instead, the [`Session.bulk_delete_or_withdraw_records()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records) method should be used to delete or withdraw multiple
records in smaller number of batched requests. Additionally, since the `bulk_delete_or_withdraw_records` method
is implemented on the [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object, records in multiple tables and databases can be deleted or withdrawn
simultaneously.

This method can also be parallelized and batched by using the appropriate arguments, see the API guide for more details.

#### NOTE
If the record is version controlled, the record is deleted or withdrawn depending on its revision status. A record
which is at least v1 released is be withdrawn. An unreleased record is deleted.

This example shows how to delete all records in a table. In this case, the table contains 1,000 records.

```pycon
>>> records = table.all_records()
>>> print(len(records))
1000
```

The first example deletes all records in a table individually, with one request per record:

```python
# 1000 record deletion requests, each to delete a single record, executed sequentially
for r in records:
    r.delete_or_withdraw_record_on_server()
```

To improve performance, delete all records in a smaller number of batched requests:

```python
# 10 record deletion requests, each to delete 100 records
mi.bulk_delete_or_withdraw_records(records)
```

Finally, further improvements can be made by parallelizing the record deletion requests:

```python
# 10 record version export requests, each to export record versions for 100 records, executed up to 3 at a time
mi.bulk_delete_or_withdraw_records(
    records,
    parallelize=True,
    max_num_threads=3,
)
```
