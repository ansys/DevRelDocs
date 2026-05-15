# Record

<a id="record"></a>

<a id="id1"></a>

<a id="ansys.grantami.core.mi_record_classes.Record"></a>

### *class* Record

Represents a Granta MI record.

May represent an existing Granta MI record, or a record which is staged for import.

Stores and provides access to record attributes, pseudo-attributes, links and children. Provides methods for adding,
editing and deleting records, and importing and exporting record data.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Long name for new records.
  * **table** ([`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)) – Table object.
  * **parent** ([`Record`](#ansys.grantami.core.mi_record_classes.Record) or [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table), optional) – Parent record or table object.
  * **short_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Short (tree) name for new records.
  * **attributes** (dict[str, [`AttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)], optional) – Dictionary of attribute values.
  * **subsets** ([*set*](https://docs.python.org/3/library/stdtypes.html#set) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – Subsets the record belongs to.
  * **folder** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether the record is ‘Folder’ type.
  * **record_color** ([`RecordColor`](constants.md#ansys.grantami.core.mi_constants.RecordColor), optional) – Color of the record.
  * **release_record** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Release state of the record; [`True`](https://docs.python.org/3/library/constants.html#True) to release next version.

#### WARNING
Do not create [`Record`](#ansys.grantami.core.mi_record_classes.Record) instances for records which are already in the database. Use the appropriate
[`Session`](session.md#ansys.grantami.core.mi.Session), [`Database`](database.md#ansys.grantami.core.mi_tree_classes.Database), [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table), or [`Record`](#ansys.grantami.core.mi_record_classes.Record) methods and properties to access existing
records.

### Notes

[`Record`](#ansys.grantami.core.mi_record_classes.Record) objects may be created to represent records that do not currently exist in the database.

A name and parent table must be specified. `name` will become the record’s long name. The record short name
(or tree name) can be set via the argument `short_name`, or via the [`Record.short_name`](#ansys.grantami.core.mi_record_classes.Record.short_name) property following
object creation. If a record is pushed to Granta MI without a specifying short name, the short name will default to
the record name.

Records created this way will not exist in the specified database until the changes have been pushed to Granta MI
(see [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update)).

<a id="ansys.grantami.core.mi_record_classes.Record.clear_attributes"></a>

#### clear_attributes(attributes)

Flags attribute values to be deleted when [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) is next called.

Does not delete the local value of flagged attributes, only the data on Granta MI. Supersedes previous
[`set_attributes()`](#ansys.grantami.core.mi_record_classes.Record.set_attributes) calls.

* **Parameters:**
  **attributes** (*Iterable* *[*[*AttributeValue*](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) *]*) – Attributes to clear on the record.

<a id="ansys.grantami.core.mi_record_classes.Record.copy_to"></a>

#### copy_to(destination, record_name=None, release=False)

Creates a copy of the record at the provided location.

Returns a record object that represents the newly created record. The resulting record is added to the
same subsets as the original record, and contains identical attribute values.

* **Parameters:**
  * **destination** ([`Record`](#ansys.grantami.core.mi_record_classes.Record) or [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)) – Location in the tree where to create the copy.
  * **record_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record name for the created record. By default, the copied record is created with the same name as the
    original record. If the destination already contains a record with an identical name, use this parameter to
    override the name.
  * **release** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to release the created record. The argument has no effect for records in tables that are not
    version-controlled.
* **Return type:**
  [Record](#ansys.grantami.core.mi_record_classes.Record)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

#### WARNING
Data validation rules, such as attribute value uniqueness, might prevent record copying.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.decache_attributes"></a>

#### decache_attributes()

Removes all attribute values from the [`Record`](#ansys.grantami.core.mi_record_classes.Record).

<a id="ansys.grantami.core.mi_record_classes.Record.decache_links"></a>

#### decache_links()

Removes all links from the [`Record`](#ansys.grantami.core.mi_record_classes.Record).

<a id="ansys.grantami.core.mi_record_classes.Record.delete_or_withdraw_record_on_server"></a>

#### delete_or_withdraw_record_on_server(withdrawal_notes=None)

Deletes the record from the server, or withdraws it from a version-controlled table.

* **Parameters:**
  **withdrawal_notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Withdrawal revision notes.
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.find_parent"></a>

#### find_parent()

Finds and sets the parent record or table.

* **Raises:**
  * [**PermissionError**](https://docs.python.org/3/library/exceptions.html#PermissionError) – If parent record cannot be accessed due to access control.
  * [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the parent has not already been fetched.

This operation performs no subset filtering because, by definition, the parent record must belong to all subsets
that this record belongs to.

<a id="ansys.grantami.core.mi_record_classes.Record.get_associated_records"></a>

#### get_associated_records(target_table, link_direction='Both', attribute_path=None)

Gets records `target_table` linked to the current [`Record`](#ansys.grantami.core.mi_record_classes.Record) object via tabular data association chains.

This can be filtered by link direction and to a specific path.

If `attribute_path` is provided, then only records from that exact path will be returned. Note that the
specified tabular attributes will be the ‘source’ of the tabular link, and there may be tables in the chain
with no attributes.

This operation performs no subset filtering.

* **Parameters:**
  * **target_table** ([`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)) – The table from which to retrieve associated records.
  * **link_direction** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *default: "Both"*) – Which direction to follow links in: `Both` (default), `Forward`, `Reverse`.
  * **attribute_path** (list[[`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)], optional) – Path of tabular attributes to follow. If [`None`](https://docs.python.org/3/library/constants.html#None), all paths are followed.
* **Return type:**
  list[[`Record`](#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.get_attributes"></a>

#### get_attributes(names=None, types=None, include_attributes=True, include_meta_attributes=False, include_pseudo_attributes=False, empty=None)

Retrieve a list of attributes from the `record.attributes` dictionary.

You can narrow the results by specifying the attribute names or data types, or the required attribute categories
(attribute, meta-attribute, or pseudo-attribute).

If the `record.attributes` dictionary is empty when `get_attributes` is called, it will be populated before
retrieving any attributes.

This operation performs no subset filtering, so all tabular rows will be included in the response regardless of
the subset membership of the linked records.

#### Versionchanged
Changed in version 4.2: Argument `include_metas` was renamed to `include_meta_attributes`.

#### Versionchanged
Changed in version 4.2: Argument `include_pseudos` was renamed to `include_pseudo_attributes`.

* **Parameters:**
  * **names** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – Attribute names.
  * **types** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – Attribute data types; allowed values are: `DISC`, `DTTM`, `FILE`, `FUNC`, `HLNK`, `INPT`,
    `LOGI`, `LTXT`, `PICT`, `POIN`, `RNGE`, `STXT`, `TABL`.
  * **include_attributes** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Whether to retrieve attributes that are not meta-attributes or pseudo-attributes.
  * **include_meta_attributes** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to retrieve meta-attributes.
  * **include_pseudo_attributes** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to retrieve pseudo-attributes.
  * **empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to filter by whether an attribute is populated or not. If [`None`](https://docs.python.org/3/library/constants.html#None), both populated and empty
    attributes are returned.
* **Return type:**
  list[[`PseudoAttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue) or [`AttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)]

### Examples

The code below returns all point or functional series attributes or meta-attributes named Density or
Stress-Strain:

```python
r.get_attributes(names=['Density', 'Stress-Strain'], types=['POIN', 'FUNC'], include_meta_attributes=True)
```

<a id="ansys.grantami.core.mi_record_classes.Record.get_available_exporters"></a>

#### get_available_exporters(package=None, model=None, applicability_tag=None)

Returns exporters available for this record filtered by package, model, and applicability tag value.

* **Parameters:**
  * **package** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of target FEA analysis package, for example ‘NX 10.0’ or ‘CATIA V5’.
  * **model** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Material model type, for example ‘Isotropic’ or ‘Linear, temperature-independent,
    isotropic, thermal, plastic’.
  * **applicability_tag** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Tag that identifies the MI applications an exporter is intended to be used with,
    for example, ‘MIMaterialsGateway’ or ‘MIViewer’.
* **Return type:**
  list[[`Exporter`](supporting.md#ansys.grantami.core.mi_exporters.Exporter)]

### Notes

Makes a Service Layer call on first request for each applicability tag.

<a id="ansys.grantami.core.mi_record_classes.Record.get_descendants"></a>

#### get_descendants(include_folders=False, include_generics=True, filter_by_subset=True, subset_name=None)

Returns a flattened list of all descendants of a record.

Populates the [`children`](#ansys.grantami.core.mi_record_classes.Record.children) property of each [`Record`](#ansys.grantami.core.mi_record_classes.Record) object traversed in the process.

If `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) then the operation will only return records that are in the subset given
in `subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is [`False`](https://docs.python.org/3/library/constants.html#False) then records will be returned from all subsets.

* **Parameters:**
  * **include_folders** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to include folders in the list of descendants.
  * **include_generics** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Whether to include generic records in the list of descendants.
  * **filter_by_subset** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Whether to filter by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering.
* **Return type:**
  list[[`Record`](#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
        is not provided.
  * [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.move_to"></a>

#### move_to(new_parent)

Moves the record and all its descendants to a new parent.

The provided new parent must be a [`Record`](#ansys.grantami.core.mi_record_classes.Record) of type [`RecordType.Folder`](constants.md#ansys.grantami.core.mi_constants.RecordType.Folder) or
[`RecordType.Generic`](constants.md#ansys.grantami.core.mi_constants.RecordType.Generic), or a [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) to move the record at the root of the table.

* **Parameters:**
  **new_parent** ([`Record`](#ansys.grantami.core.mi_record_classes.Record) or [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table))

### Notes

Some cached properties are cleared after the record has been moved, as they would be out-of-date:

* pseudo-attribute properties
* [`Record.path`](#ansys.grantami.core.mi_record_classes.Record.path)
* [`Record.parent`](#ansys.grantami.core.mi_record_classes.Record.parent)

They will be dynamically retrieved from the server on property access, or can be manually refreshed via the
following methods:

* [`Record.refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes)
* [`Record.refresh_path()`](#ansys.grantami.core.mi_record_classes.Record.refresh_path)
* [`Record.find_parent()`](#ansys.grantami.core.mi_record_classes.Record.find_parent)
* [`Record.refresh_properties()`](#ansys.grantami.core.mi_record_classes.Record.refresh_properties)

[`Record.children`](#ansys.grantami.core.mi_record_classes.Record.children) is not cleared, because children are moved with the parent. Their internal state might
be outdated, and if necessary can be updated via the methods listed above.

`children` properties of the source and target parent are not cleared or updated. This is by design, to
prevent unnecessary updates in scripts performing a large number of record move operations.

To update the list of children of a table (after moving a child record from it or to it), use the method
[`Table.refetch_children()`](table.md#ansys.grantami.core.mi_tree_classes.Table.refetch_children).

To update the list of children of a record (after moving a child record from it or to it), use the method
[`Record.refetch_children()`](#ansys.grantami.core.mi_record_classes.Record.refetch_children).

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refetch_children"></a>

#### refetch_children(filter_by_subset=True, subset_name=None)

Refreshes the list of children belonging to the record.

If `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) then the operation will only return records that are in the subset given in
`subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is [`False`](https://docs.python.org/3/library/constants.html#False) then records will be returned from all subsets.

* **Parameters:**
  * **filter_by_subset** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Whether to filter by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering.
* **Raises:**
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
        is not provided.
  * [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes"></a>

#### refetch_pseudo_attributes()

Fetches pseudo-attribute data for this record, and updates subsets for the record if not set.

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refetch_record_release_state"></a>

#### refetch_record_release_state()

Fetches the record’s release state from the server.

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refetch_record_versions"></a>

#### refetch_record_versions()

Refetches version information and all visible versions of the record for this user.

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refresh_attributes"></a>

#### refresh_attributes()

Updates the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object if they have changed on the server.

Can also be used to populate attributes.

Always includes binary data in the response. Use the [`bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) method if URL data
representation is required.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refresh_path"></a>

#### refresh_path()

Re-calculates the record path within the current table.

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

This operation performs no subset filtering because, by definition, the parent record must belong to all subsets
that this record belongs to.

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.refresh_properties"></a>

#### refresh_properties()

Refreshes the Foundation API [`ansys.grantami.backend.soap.TreeRecord`](../foundation_api.md#module-ansys.grantami.backend.soap.TreeRecord) object associated with the
[`Record`](#ansys.grantami.core.mi_record_classes.Record), if it has one.

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_record_classes.Record.set_attributes"></a>

#### set_attributes(attributes)

Flags attribute values to update on the server when [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) is next called.

If attribute values are not supplied to this method, changes to those attributes will not be transferred to
Granta MI.

* **Parameters:**
  **attributes** (*Iterable* *[*[*AttributeValue*](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) *]*) – Attributes to set on the record.

#### SEE ALSO
[`clear_attributes()`](#ansys.grantami.core.mi_record_classes.Record.clear_attributes)
: Flags attribute values to be deleted when [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) is next called.

<a id="ansys.grantami.core.mi_record_classes.Record.set_links"></a>

#### set_links(link_name, records)

Adds the specified records to the named record link group and flags those links for update.

Links that are not set through this method will not be updated on the server.

* **Parameters:**
  * **link_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Link group name to be updated.
  * **records** (Iterable[[`Record`](#ansys.grantami.core.mi_record_classes.Record)]) – Records to add to the link group.

<a id="ansys.grantami.core.mi_record_classes.Record.all_versions"></a>

#### *property* all_versions *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Record](#ansys.grantami.core.mi_record_classes.Record)]*

Returns all versions or the record as dictionary of [`Record`](#ansys.grantami.core.mi_record_classes.Record) objects.

The dictionary is indexed by the version number in the form ‘v#’, for example ‘v1’ or ‘v2’. In a version
controlled table there is an entry for each version of the record in Granta MI. In a non-version controlled
table there is a single entry with the key ‘v0’.

* **Return type:**
  dict[str, [`Record`](#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the [`refetch_record_versions()`](#ansys.grantami.core.mi_record_classes.Record.refetch_record_versions) method has not already been called on
this record.

<a id="ansys.grantami.core.mi_record_classes.Record.attributes"></a>

#### *property* attributes *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeValue](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)]*

Attributes associated with the record, indexed by attribute name.

* **Return type:**
  dict[str, [`AttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)]

#### SEE ALSO
[`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch)
: Fetch attributes for multiple records in a single call.

### Notes

Makes a Service Layer call if the `record.attributes` dictionary is empty when accessed.

<a id="ansys.grantami.core.mi_record_classes.Record.children"></a>

#### *property* children *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[Record](#ansys.grantami.core.mi_record_classes.Record)]*

Records that are direct children of the current record.

Records returned by this property may have been cached from previous calls to [`Record.get_descendants()`](#ansys.grantami.core.mi_record_classes.Record.get_descendants),
[`Record.refetch_children()`](#ansys.grantami.core.mi_record_classes.Record.refetch_children) or [`Table.all_records()`](table.md#ansys.grantami.core.mi_tree_classes.Table.all_records), which all apply subset filtering. If the
[`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) subset configuration has since been updated, refresh the list of children via one of the methods
listed.

If there is no cached list of children, children are dynamically fetched on property access via
[`refetch_children()`](#ansys.grantami.core.mi_record_classes.Record.refetch_children). The default subset filtering behavior is applied.

* **Return type:**
  list[[`Record`](#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when dynamically retrieving children records.
  * [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if there is no cached list of children.

<a id="ansys.grantami.core.mi_record_classes.Record.color"></a>

#### *property* color *: [RecordColor](constants.md#ansys.grantami.core.mi_constants.RecordColor)*

Color of the record when displayed in MI Viewer and other Granta MI applications.

If the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object represents an existing record:

* The `color` property will initially return the exported color of the record. It will be fetched if it has
  not already been exported.
* If `color` is modified, the [`Record`](#ansys.grantami.core.mi_record_classes.Record) color will be set to the specified value.
* If `color` is set to [`None`](https://docs.python.org/3/library/constants.html#None), the [`Record`](#ansys.grantami.core.mi_record_classes.Record) color will be reset to the exported value.

If the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object represents a new record:

* The `color` property will initially return the value specified in the [`Record`](#ansys.grantami.core.mi_record_classes.Record) constructor. If not
  set, it will default to the value `InheritFromParent`.
* If `color` is modified, the [`Record`](#ansys.grantami.core.mi_record_classes.Record) color will be set to the specified value.
* If `color` is set to [`None`](https://docs.python.org/3/library/constants.html#None), the [`Record`](#ansys.grantami.core.mi_record_classes.Record) color will be set to the value `InheritFromParent`.

* **Return type:**
  [`RecordColor`](constants.md#ansys.grantami.core.mi_constants.RecordColor)

### Notes

Makes a Service Layer call if the record exists on the server and the color has not already been fetched.

If a [`Record`](#ansys.grantami.core.mi_record_classes.Record) is imported with `color` set to [`None`](https://docs.python.org/3/library/constants.html#None), the record will inherit the color of the
parent record.

<a id="ansys.grantami.core.mi_record_classes.Record.created_by"></a>

#### *property* created_by *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

User who created the record.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.created_on"></a>

#### *property* created_on *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Datetime of the record creation.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.data_revision_history"></a>

#### *property* data_revision_history *: Dict[[str](https://docs.python.org/3/library/stdtypes.html#str), [DataRevisionHistory](supporting.md#ansys.grantami.core.mi_meta_classes.DataRevisionHistory)]*

Data revision history for all attributes, indexed by attribute name.

* **Return type:**
  dict[str, [`DataRevisionHistory`](supporting.md#ansys.grantami.core.mi_meta_classes.DataRevisionHistory)]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the data revision history has not already been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Database key for the database the record belongs to.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_record_classes.Record.exists_on_server"></a>

#### *property* exists_on_server *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the record exists on the server ([`True`](https://docs.python.org/3/library/constants.html#True)) or has been created in memory ([`False`](https://docs.python.org/3/library/constants.html#False)).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_record_classes.Record.flag_for_release"></a>

#### *property* flag_for_release *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the record will be made available to users when it is next updated.

* [`True`](https://docs.python.org/3/library/constants.html#True) (default): If changes were made to the [`Record`](#ansys.grantami.core.mi_record_classes.Record), a new version will be created and then
  immediately released. If changes were not made to the [`Record`](#ansys.grantami.core.mi_record_classes.Record), the existing version will be released.
* [`False`](https://docs.python.org/3/library/constants.html#False): If changes were made to the [`Record`](#ansys.grantami.core.mi_record_classes.Record), a new, unreleased version will be created. The
  record will not be released.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool) or None

### Notes

If you do not have the correct permissions to change release states, setting this property will not have the
documented effect. See the Service Layer documentation for more details.

<a id="ansys.grantami.core.mi_record_classes.Record.history_guid"></a>

#### *property* history_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Record history GUID.

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) for records that do not exist on the server.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

Records in unversioned tables can be uniquely identified by their record history GUID.

For records in versioned tables, the record history guid refers to the latest version of the record the user has
access to.

<a id="ansys.grantami.core.mi_record_classes.Record.history_identity"></a>

#### *property* history_identity *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Record history identity.

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) for records that do not exist on the server.
* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None

### Notes

Do not use, use [`history_guid`](#ansys.grantami.core.mi_record_classes.Record.history_guid) instead.

<a id="ansys.grantami.core.mi_record_classes.Record.is_folder"></a>

#### *property* is_folder *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the record is a [`RecordType.Folder`](constants.md#ansys.grantami.core.mi_constants.RecordType.Folder) type.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_record_classes.Record.is_writable"></a>

#### *property* is_writable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the current user has write permissions on the record.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.last_modified_by"></a>

#### *property* last_modified_by *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

User who last modified the record.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.last_modified_on"></a>

#### *property* last_modified_on *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Datetime of the last modification.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.links"></a>

#### *property* links *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Set](https://docs.python.org/3/library/typing.html#typing.Set)[[Record](#ansys.grantami.core.mi_record_classes.Record)]]*

Link groups for this [`Record`](#ansys.grantami.core.mi_record_classes.Record) object, and the records they link to.

Smart links may be viewed but not edited through the `links` property.

This operation performs no subset filtering.

* **Return type:**
  dict[str, set[[`Record`](#ansys.grantami.core.mi_record_classes.Record)]]

<a id="ansys.grantami.core.mi_record_classes.Record.mi"></a>

#### *property* mi *: [Session](session.md#ansys.grantami.core.mi.Session)*

Session used to create or access the record.

Used for any Service Layer calls made by the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object.

* **Return type:**
  [`Session`](session.md#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi_record_classes.Record.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Long name of record.

If the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object represents an existing record:

* The property will initially return the exported name of the record. It will be fetched if it has not already
  been exported.
* If the property is modified, the [`Record`](#ansys.grantami.core.mi_record_classes.Record) name will be set to the specified value.
* If the property is set to [`None`](https://docs.python.org/3/library/constants.html#None), the [`Record`](#ansys.grantami.core.mi_record_classes.Record) name will be reset to the exported value.

If the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object represents a new record:

* The property will initially return the value specified in the [`Record`](#ansys.grantami.core.mi_record_classes.Record) constructor.
* If the property is modified, the [`Record`](#ansys.grantami.core.mi_record_classes.Record) name will be set to the specified value.
* If the property is set to [`None`](https://docs.python.org/3/library/constants.html#None), the [`Record`](#ansys.grantami.core.mi_record_classes.Record) name will be set to [`None`](https://docs.python.org/3/library/constants.html#None).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

If a [`Record`](#ansys.grantami.core.mi_record_classes.Record) is imported with `name` set to [`None`](https://docs.python.org/3/library/constants.html#None), a `ValueError` is raised.

<a id="ansys.grantami.core.mi_record_classes.Record.parent"></a>

#### *property* parent *: [Record](#ansys.grantami.core.mi_record_classes.Record) | [Table](table.md#ansys.grantami.core.mi_tree_classes.Table)*

Parent record or table of this record.

* **Return type:**
  [`Record`](#ansys.grantami.core.mi_record_classes.Record), [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table), or [`None`](https://docs.python.org/3/library/constants.html#None)
* **Raises:**
  * [**PermissionError**](https://docs.python.org/3/library/exceptions.html#PermissionError) – If parent record cannot be accessed due to access control.
  * [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the parent has not already been fetched.

<a id="ansys.grantami.core.mi_record_classes.Record.parent_record_history_identity"></a>

#### *property* parent_record_history_identity *: [int](https://docs.python.org/3/library/functions.html#int)*

History identity of the parent record.

If the record is at the root of the table, returns the history identity of the table root node.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.parent_record_name"></a>

#### *property* parent_record_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the parent record.

If the record is at the root of the table, returns the name of the table.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.parent_record_short_name"></a>

#### *property* parent_record_short_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Short name of the parent record.

If the record is at the root of the table, returns the name of the table.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.path"></a>

#### *property* path *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Browse tree path for the record as a list of folder short names.

* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

### Notes

Makes a Service Layer call if the path has not already been fetched.

<a id="ansys.grantami.core.mi_record_classes.Record.record_guid"></a>

#### *property* record_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Record version GUID.

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) for records that do not exist on the server.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

Records in unversioned and versioned tables can be uniquely identified by their record version GUID.

For records in versioned tables, the record version guid refers to a specific version of a record.

<a id="ansys.grantami.core.mi_record_classes.Record.record_history"></a>

#### *property* record_history *: [RecordVersionHistory](supporting.md#ansys.grantami.core.mi_meta_classes.RecordVersionHistory)*

Details about the record history.

Includes user, datetime, and notes associated with events of the record’s life cycle.

* **Return type:**
  [`RecordVersionHistory`](supporting.md#ansys.grantami.core.mi_meta_classes.RecordVersionHistory)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the [`refetch_record_release_state()`](#ansys.grantami.core.mi_record_classes.Record.refetch_record_release_state) method has not already been called on
this record.

<a id="ansys.grantami.core.mi_record_classes.Record.release_state"></a>

#### *property* release_state *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Release state of the record.

Allowed values are `Released`, `Superseded`, `Withdrawn`, `Unreleased`, `Unversioned` or `Unknown`.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the [`refetch_record_release_state()`](#ansys.grantami.core.mi_record_classes.Record.refetch_record_release_state) method has not already been called on
this record.

<a id="ansys.grantami.core.mi_record_classes.Record.released_on"></a>

#### *property* released_on *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Datetime of the record release.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.short_name"></a>

#### *property* short_name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Short (tree) name of the record.

If the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object represents an existing record:

* The `short_name` property will initially return the exported short name of the record. It will be fetched if
  it has not already been exported.
* If `short_name` is modified, the [`Record`](#ansys.grantami.core.mi_record_classes.Record) short name will be set to the specified value.
* If `short_name` is set to [`None`](https://docs.python.org/3/library/constants.html#None), the [`Record`](#ansys.grantami.core.mi_record_classes.Record) short name will be reset to the exported value.

If the [`Record`](#ansys.grantami.core.mi_record_classes.Record) object represents a new record:

* The `short_name` property will initially return the value specified in the [`Record`](#ansys.grantami.core.mi_record_classes.Record) constructor.
* If `short_name` is modified, the [`Record`](#ansys.grantami.core.mi_record_classes.Record) short name will be set to the specified value.
* If `short_name` is set to [`None`](https://docs.python.org/3/library/constants.html#None), the [`Record`](#ansys.grantami.core.mi_record_classes.Record) short name will be set to [`None`](https://docs.python.org/3/library/constants.html#None).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str), optional

### Notes

Makes a Service Layer call if the record exists on the server and the short name has not already been fetched.

If a [`Record`](#ansys.grantami.core.mi_record_classes.Record) is imported with `short_name` set to [`None`](https://docs.python.org/3/library/constants.html#None), the short name will default to the
record name.

<a id="ansys.grantami.core.mi_record_classes.Record.subsets"></a>

#### *property* subsets *: [Set](https://docs.python.org/3/library/typing.html#typing.Set)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Subsets that the record belongs to.

* **Return type:**
  [set](https://docs.python.org/3/library/stdtypes.html#set)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

### Notes

Makes a Service Layer call if the record exists on the server and the subsets have not already been fetched.

<a id="ansys.grantami.core.mi_record_classes.Record.table"></a>

#### *property* table *: [Table](table.md#ansys.grantami.core.mi_tree_classes.Table)*

Parent table the record belongs to.

* **Return type:**
  [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)

<a id="ansys.grantami.core.mi_record_classes.Record.table_name"></a>

#### *property* table_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of parent table.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_record_classes.Record.type"></a>

#### *property* type *: [RecordType](constants.md#ansys.grantami.core.mi_constants.RecordType)*

Record type.

On record creation via the MI Scripting Toolkit, the record type can only be set to [`RecordType.Folder`](constants.md#ansys.grantami.core.mi_constants.RecordType.Folder)
or [`RecordType.Record`](constants.md#ansys.grantami.core.mi_constants.RecordType.Record). The type of an existing record cannot be set via this property.

Adding children to a record, or populating attributes on a folder both result in the type updating to
[`RecordType.Generic`](constants.md#ansys.grantami.core.mi_constants.RecordType.Generic) during the update.

* **Return type:**
  [RecordType](constants.md#ansys.grantami.core.mi_constants.RecordType)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the record exists on the server and an attempt is made to change its type. If this property is set to
      [`RecordType.Generic`](constants.md#ansys.grantami.core.mi_constants.RecordType.Generic).

<a id="ansys.grantami.core.mi_record_classes.Record.version_number"></a>

#### *property* version_number *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Record version number.

This is set to None if the record is in a non version-controlled table.

Read-only property. This property is populated from a pseudo-attribute value and can be refreshed via
[`refetch_pseudo_attributes()`](#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.

### Notes

Makes a Service Layer call if the pseudo-attributes have not yet been fetched for this record.

<a id="ansys.grantami.core.mi_record_classes.Record.viewer_url"></a>

#### *property* viewer_url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The MI Viewer URL for the record.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the record has not been pushed to the server.
