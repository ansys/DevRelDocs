# Table

<a id="table"></a>

<a id="ansys.grantami.core.mi_tree_classes.Table"></a>

### *class* Table

Represents an MI table, and provides access to records (particularly searching on record properties),
exporters and attribute definitions.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Database.get_table()`](database.md#ansys.grantami.core.mi_tree_classes.Database.get_table) or [`Database.get_table_by_guid()`](database.md#ansys.grantami.core.mi_tree_classes.Database.get_table_by_guid) to access an instance of this class.

<a id="ansys.grantami.core.mi_tree_classes.Table.add_subsets"></a>

#### add_subsets(values)

Adds single or multiple subsets to the list of subsets currently applied to the [`Table`](#ansys.grantami.core.mi_tree_classes.Table) object.

* **Parameters:**
  **values** ([*set*](https://docs.python.org/3/library/stdtypes.html#set) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *] or* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *] or* [*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – Subset name(s) to add.

### Notes

Makes a Service Layer call if the available subsets have not already been fetched.

<a id="ansys.grantami.core.mi_tree_classes.Table.all_records"></a>

#### all_records(include_folders=False, include_generics=True, filter_by_subset=True, subset_name=None)

Returns a flattened list of all records in the table and populates each [`Record.children`](record.md#ansys.grantami.core.mi_record_classes.Record.children) property.

If `filter_by_subset` is True then the operation will only return records that are in the subset given in
`subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is False then records will be returned from all subsets.

* **Parameters:**
  * **include_folders** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to include folders in the results.
  * **include_generics** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to include generics in the results.
  * **filter_by_subset** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to filter records by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering. If not specified, uses the currently applied subset.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
      is not provided.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.bulk_fetch"></a>

#### bulk_fetch(records, attributes=None, batch_size=100, parallelize=False, max_num_threads=6, include_binary_data=False)

Populate attribute and pseudo-attribute values for multiple records in a single operation.

Populates data values for all named [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) and [`PseudoAttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition) objects in
the specified [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects. Attribute values for requested `attributes` are added to
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) dictionary whether the attribute is populated or not.

Meta-attributes can be included in a bulk operation by providing the meta-attribute [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)
in `attributes`. [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) of meta-attributes can be obtained from the parent attribute
[`AttributeDefinition.meta_attributes`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition.meta_attributes).

Attribute values will not be created for attributes not included in the export via the attributes argument and
trying to access them might raise a [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError).

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`.

* **Parameters:**
  * **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to fetch data for.
  * **attributes** (list[[`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) or [`PseudoAttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition) or str], optional) – List of attributes to fetch. Set to [`None`](https://docs.python.org/3/library/constants.html#None) to export all record data.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to parallelize the fetch operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.
  * **include_binary_data** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to include binary data in the fetch.
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

### Notes

Makes Service Layer calls to fetch attribute data in batches.

Providing a list of attributes by name or by [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) will not fetch any meta-attributes
associated with those attributes. If the meta-attributes are not explicitly requested, then the resulting
[`AttributeValue.meta_attributes`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.meta_attributes) dictionary will contain empty meta-attribute values.

If `include_binary_data` is set to [`False`](https://docs.python.org/3/library/constants.html#False) (default), the export will not fetch the binary data
for the requested File and Picture attributes and tabular columns. Instead, the export will export URLs
(see [`BinaryType.url`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.url) for more information about using the URL to access the data). URLs should be used
for large files and pictures, or if the binary data itself is not required. However, as no data is fetched,
accessing the `binary_data` property and `save()` method will raise a `ValueError`.

On-demand access to attribute values without using [`Table.bulk_fetch()`](#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) always fetches binary data.

To summarize how the file and picture data can be accessed:

* `include_binary_data = False` (default): The [`BinaryType.url`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data = True`: The [`BinaryType.binary_data`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.save) methods are both available to access and save
  the binary data. The [`BinaryType.url`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.url) property is empty and returns [`None`](https://docs.python.org/3/library/constants.html#None).

This operation performs no subset filtering, so all tabular rows will be included in the response
regardless of the subset membership of the linked records.

#### WARNING
`parallelize` should not be set to [`True`](https://docs.python.org/3/library/constants.html#True) when using long-running sessions authenticated via OIDC. See
[OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

If `include_binary_data` is set to [`False`](https://docs.python.org/3/library/constants.html#False):

* [`BinaryType.binary_data`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.binary_data) and [`BinaryType.save()`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.save) raise a `ValueError`.
* Calling [`AttributeTabular.enable_destructive_editing()`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing) on a tabular attribute value with unexported
  binary data emits a [`UserWarning`](https://docs.python.org/3/library/exceptions.html#UserWarning).
* Proceeding to make destructive changes on a tabular attribute which unexported binary data raises a
  [`UnexportedBinaryDataError`](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) on re-import.
* Modifying the [`LocalFileValue.file_name`](tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.file_name) or [`LocalFileValue.description`](tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.description) properties for a cell
  with unexported binary without adding new binary data raises a `ValueError` on re-import.

### Examples

The following code snippet shows how to include meta-attributes and pseudo-attributes in a `bulk_fetch`
request:

```python
table = db.get_table("MaterialUniverse")
attribute_names = ["Density", "Price", "Young's modulus"]
print("Fetch three attributes by name")
table.bulk_fetch(records, attributes=attribute_names)

attribute_definitions = [table.attributes[name] for name in attribute_names]
print("Fetch three attributes by AttributeDefinition")
table.bulk_fetch(records, attributes=attribute_definitions)

attr_and_meta_definitions = attribute_definitions + [meta_attr
                                                     for attr in attribute_definitions
                                                     for meta_attr in attr.meta_attributes.values()]
print("Fetch three attributes and their meta-attributes")
table.bulk_fetch(records, attributes=attr_and_meta_definitions)

attr_meta_and_pseudo_definitions = attr_and_meta_definitions + mpy.RecordProperties.all()
print("Fetch three attributes, their meta-attributes, and all pseudo-attributes")
table.bulk_fetch(records, attributes=attr_meta_and_pseudo_definitions)
```

<a id="ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_all_record_versions"></a>

#### bulk_fetch_all_record_versions(records, batch_size=100, parallelize=False, max_num_threads=6)

Fetches all record versions for all provided records.

Populates the [`Record.all_versions`](record.md#ansys.grantami.core.mi_record_classes.Record.all_versions), [`Record.release_state`](record.md#ansys.grantami.core.mi_record_classes.Record.release_state), and [`Record.record_history`](record.md#ansys.grantami.core.mi_record_classes.Record.record_history)
properties of the specified [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects.

* **Parameters:**
  * **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to fetch versions for.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to parallelize the fetch operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.

#### WARNING
`parallelize` should not be set to [`True`](https://docs.python.org/3/library/constants.html#True) when using long-running sessions authenticated via OIDC. See
[OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

#### SEE ALSO
[`Session.bulk_fetch_release_states()`](session.md#ansys.grantami.core.mi.Session.bulk_fetch_release_states)
: Fetches [`Record.release_state`](record.md#ansys.grantami.core.mi_record_classes.Record.release_state) only.

### Notes

Makes Service Layer calls to fetch record versions in batches.

This operation performs multiple requests per batch. As a result, the batch size should be considered a relative
scale factor to control performance vs load on the Granta MI server, and is not an exact statement of the
number of records included in each request.

<a id="ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_associated_records"></a>

#### bulk_fetch_associated_records(records, target_table, link_direction='Both', attribute_path=None, batch_size=100, parallelize=False, max_num_threads=6)

Fetches records associated with the specified [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects from a target [`Table`](#ansys.grantami.core.mi_tree_classes.Table).

Returns a list of dictionaries containing the source record and associated records for each [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)
provided.

You may specify `link_direction` to only follow tabular links in the specified direction, or provide a list of
[`AttributeDefinitionTabular`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular) objects in `attribute_path` to follow only those tabular links.

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`.

* **Parameters:**
  * **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of source records.
  * **target_table** ([`Table`](#ansys.grantami.core.mi_tree_classes.Table)) – Target table to fetch associated records from.
  * **link_direction** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *default: "Both"*) – Direction of links to follow: `Both`, `Forward`, or `Reverse`.
  * **attribute_path** (list[[`AttributeDefinitionTabular`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular)], optional) – List of tabular attributes to follow.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to parallelize the fetch operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.
* **Return type:**
  list[dict[str, [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) | list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]]]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

#### WARNING
`parallelize` should not be set to [`True`](https://docs.python.org/3/library/constants.html#True) when using long-running sessions authenticated via OIDC. See
[OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

### Notes

Makes Service Layer calls to fetch associated records in batches.

<a id="ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_data_revision_history"></a>

#### bulk_fetch_data_revision_history(records, batch_size=100, parallelize=False, max_num_threads=6)

Fetches the data revision history for all attributes of the provided records.

Populates the [`Record.data_revision_history`](record.md#ansys.grantami.core.mi_record_classes.Record.data_revision_history) property.

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`.

* **Parameters:**
  * **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to fetch data revision history for.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to parallelize the fetch operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

#### WARNING
`parallelize` should not be set to [`True`](https://docs.python.org/3/library/constants.html#True) when using long-running sessions authenticated via OIDC. See
[OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

### Notes

Makes Service Layer calls to fetch data revision history in batches.

<a id="ansys.grantami.core.mi_tree_classes.Table.bulk_link_fetch"></a>

#### bulk_link_fetch(records, link_groups=None, batch_size=100, parallelize=False, max_num_threads=6, filter_subsets=True)

Fetches and populates record link groups for the specified [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects.

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`.

* **Parameters:**
  * **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to fetch links for.
  * **link_groups** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – List of link group names to fetch. Set to [`None`](https://docs.python.org/3/library/constants.html#None) to fetch all.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to parallelize the fetch operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.
  * **filter_subsets** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to filter by subsets. If [`True`](https://docs.python.org/3/library/constants.html#True), only linked records in the default subset of their table are
    returned. If [`False`](https://docs.python.org/3/library/constants.html#False), linked records are returned from all subsets.
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

#### WARNING
`parallelize` should not be set to [`True`](https://docs.python.org/3/library/constants.html#True) when using long-running sessions authenticated via OIDC. See
[OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

### Notes

Makes Service Layer calls to fetch links in batches.

<a id="ansys.grantami.core.mi_tree_classes.Table.create_empty_attribute_value"></a>

#### create_empty_attribute_value(definition)

Create an empty [`AttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) instance for an attribute.

This can subsequently be assigned to a record for import.

* **Parameters:**
  **definition** ([`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)) – Attribute definition object.
* **Return type:**
  [`AttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)

<a id="ansys.grantami.core.mi_tree_classes.Table.create_record"></a>

#### create_record(name, parent=None, short_name=None, attributes=None, folder=False, subsets=None, release_record=False, color=RecordColor.InheritFromParent)

Creates a new [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object in the [`Table`](#ansys.grantami.core.mi_tree_classes.Table).

The record will not exist in Granta MI or be assignable as a parent until it is pushed to the server.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Long name of the record.
  * **parent** ([`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) or [`Table`](#ansys.grantami.core.mi_tree_classes.Table), optional) – Parent record or table.
  * **short_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Short name of the record.
  * **attributes** (dict[str, [`AttributeValue`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)], optional) – Dictionary of attribute values.
  * **folder** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – If true, the record will be created as a folder.
  * **subsets** ([*set*](https://docs.python.org/3/library/stdtypes.html#set) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – List of subsets the record will belong to. If not specified, record will be added to the currently active
    subset(s) on the table.
  * **release_record** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether the record will be released when pushed to the server.
  * **color** ([`RecordColor`](constants.md#ansys.grantami.core.mi_constants.RecordColor), default: RecordColor.InheritFromParent) – Record color. If not specified, inherits from parent.
* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)

<a id="ansys.grantami.core.mi_tree_classes.Table.get_attribute_definition"></a>

#### get_attribute_definition(name=None, identity=None)

Returns the [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) object specified by `name` or the identifier `identity`.

Meta-attributes are also returned if the identifier is provided.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) object.
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Attribute identifier.
* **Return type:**
  [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) or list[[`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)]

<a id="ansys.grantami.core.mi_tree_classes.Table.get_available_exporters"></a>

#### get_available_exporters(package=None, model=None, applicability_tag=None)

Returns exporters available on the table filtered by package, model, and applicability tag value.

* **Parameters:**
  * **package** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – The target FEA analysis package. For example: ‘NX 10.0’, ‘CATIA V5’.
  * **model** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – The material model type. For example, ‘Isotropic’, ‘Linear, temperature-independent,
    isotropic, thermal, plastic’.
  * **applicability_tag** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – A tag that identifies the applications for which an exporter is intended to be used.
    For example, ‘MIMaterialsGateway’, ‘MIViewer’.
* **Return type:**
  list[[`Exporter`](supporting.md#ansys.grantami.core.mi_exporters.Exporter)]

### Notes

Makes a Service Layer call on first request for each applicability tag.

<a id="ansys.grantami.core.mi_tree_classes.Table.get_record_by_id"></a>

#### get_record_by_id(history_identity=None, hguid=None, vguid=None, version_number=None)

Returns the [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object with the following (sets of) references in priority order.

1. `vguid` (record version GUID): Uniquely identifies specific version of record.
2. `history_identity` (record history identity): Uniquely identifies record only, and optionally
   `version_number` (record version number).
3. `hguid` (record history GUID): Uniquely identifies record only.

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

This method can return records outside the currently selected subset.

* **Parameters:**
  * **history_identity** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Record history identity.
  * **hguid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record history GUID: uniquely identifies record.
  * **vguid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record version GUID: uniquely identifies record version.
  * **version_number** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Record version number.
* **Returns:**
  Record object or [`None`](https://docs.python.org/3/library/constants.html#None) if not found.
* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) or [`None`](https://docs.python.org/3/library/constants.html#None)

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.get_record_by_lookup_value"></a>

#### get_record_by_lookup_value(attribute_name, lookup_value)

Returns a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object specified by attribute name and an exact match for a short text string.

Provided that:

* The `lookup_value` matches exactly one record in the table.
* The record is in the default subset of the table.

* **Parameters:**
  * **attribute_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the attribute to search.
  * **lookup_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Short text string value to match.
* **Returns:**
  Record object or [`None`](https://docs.python.org/3/library/constants.html#None) if not found.
* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) or [`None`](https://docs.python.org/3/library/constants.html#None)

### Notes

Makes a Service Layer call.

In Granta MI 2025 R2 and later, if multiple matches are detected, no results are returned. In earlier Granta MI
versions, an exception is raised.

<a id="ansys.grantami.core.mi_tree_classes.Table.get_records_by_ids"></a>

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object for each identifier provided.

The returned list of records will have the same number of elements as the provided list of identifiers.
If no record corresponds to that identifier in this table then the corresponding item in the returned list
will be [`None`](https://docs.python.org/3/library/constants.html#None).

Each element in the `record_identifiers` parameter should be a dictionary with one or more of the
following (sets of) references in priority order:

1. `vguid` (record version GUID): Uniquely identifies specific version of record.
2. `history_identity` (record history identity): Uniquely identifies record only, and optionally
   `version_number` (record version number).
3. `hguid` (record history GUID): Uniquely identifies record only.

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

This method can return records outside the currently selected subset.

* **Parameters:**
  **record_identifiers** (*Sequence* *[*[*dict*](https://docs.python.org/3/library/stdtypes.html#dict) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *|* [*int*](https://docs.python.org/3/library/functions.html#int) *]* *]*) – Sequence of dictionaries containing record identifiers.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) | [`None`](https://docs.python.org/3/library/constants.html#None)]

### Notes

Makes multiple Service Layer calls depending on number of identifiers provided.

<a id="ansys.grantami.core.mi_tree_classes.Table.get_records_from_path"></a>

#### get_records_from_path(starting_node, tree_path, use_short_names=False)

Return all records at the end of the provided path from a specified node.

* The starting node identifies the node immediately above the path. To start the path at the top of the tree,
  set `starting_node` to [`None`](https://docs.python.org/3/library/constants.html#None). To start the path under any other node in the tree,
  specify a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) as the `starting_node`.
* Specify the path as a list of record names e.g. `['Polymers', 'Plastics', 'Thermoplastics', ...]`.
* You can include “wildcards” in the path by setting a node to [`None`](https://docs.python.org/3/library/constants.html#None) e.g.
  `['Thermoplastics', :obj:`None`, 'Unfilled', ...]`.
* By default, the strings specified in the path list are assumed to be record full names; to specify the path
  using record short names instead, set `use_short_names` to True.

* **Parameters:**
  * **starting_node** ([`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) or [`None`](https://docs.python.org/3/library/constants.html#None)) – Any Record in the table tree. To start the path at the root node of the table tree, set to [`None`](https://docs.python.org/3/library/constants.html#None).
  * **tree_path** (list[str or [`None`](https://docs.python.org/3/library/constants.html#None)]) – A list of strings specifying the names of the records in the path. May include [`None`](https://docs.python.org/3/library/constants.html#None) as a wildcard.
  * **use_short_names** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether the strings in the path are the record short names.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If the starting node has not been pushed to the server.

### Notes

Makes multiple Service Layer calls.

### Examples

Example 1:

`recs = table.get_records_from_path(None, ['Record 1', None, 'Record 2'])`

will return all records that are children of a record named Record 2, that also have Record 1 as a
great-grandparent. The grandparent is set as a wildcard, and so any is allowed.

Example 2:

`recs = table.get_records_from_path(None, ['Record 1', 'Record 3', None])`

will return all records that are grandchildren of records named Record 3 that also have a great-grandparent
called Record 1.

Both of these examples have assumed that Record 1 is a top-level record (and have a starting node as a table
object to reflect this), but the method does not require this. The starting node can be any record object in
the tree.

<a id="ansys.grantami.core.mi_tree_classes.Table.path_from"></a>

#### path_from(starting_node, tree_path, color=RecordColor.InheritFromParent)

Ensures that all the folders in a specified path are available, and creates any that do not already exist.

In the case of a version-controlled table, folders are created in an unreleased state.

* **Parameters:**
  * **starting_node** ([`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) or [`None`](https://docs.python.org/3/library/constants.html#None)) – Identifies the node under which the new path will start. Set to [`None`](https://docs.python.org/3/library/constants.html#None) to start the path at the root
    of the table. Set to an existing record/folder to create the path from the specified node.
  * **tree_path** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – The names of the folders in the path, e.g. `['Polymers', 'Plastics', 'Thermoplastics', ...]`.
    Folders in the path will be created if they don’t already exist. Existing records on the path will be
    converted to generic records.
  * **color** ([`RecordColor`](constants.md#ansys.grantami.core.mi_constants.RecordColor), default: RecordColor.InheritFromParent) – Sets the color of all folders and records in the path.
* **Returns:**
  The Record object representing the last folder in the path.
* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more start nodes has not been pushed to the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.paths_from"></a>

#### paths_from(paths)

Create multiple paths between specified start and end nodes in the table tree.

See description of [`path_from()`](#ansys.grantami.core.mi_tree_classes.Table.path_from) for further details.

* **Parameters:**
  **paths** (list[dict[str, [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) | [`None`](https://docs.python.org/3/library/constants.html#None) | [`RecordColor`](constants.md#ansys.grantami.core.mi_constants.RecordColor) | list[str]]]) – List of path specifications.
* **Return type:**
  list[tuple[dict, [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more start nodes has not been pushed to the server.

### Examples

Paths are specified as a list of dictionaries with the following structure:

```python
{'starting_node': Optional[Record],
'tree_path': ['list', 'of', 'folders'],
'color': 'color for all new nodes to be assigned'}
```

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.refetch_children"></a>

#### refetch_children(filter_by_subset=True, subset_name=None)

Refreshes the list of direct children belonging to the table.

If `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) then the operation will only return records that are in the subset given
in `subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is [`False`](https://docs.python.org/3/library/constants.html#False) then records will be returned from all subsets.

* **Parameters:**
  * **filter_by_subset** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to filter records by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering.
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
      is not provided.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.refresh_attributes"></a>

#### refresh_attributes()

Performs a Foundation API [`BrowseService.get_attribute_details()`](../foundation_api.md#ansys.grantami.backend.soap.BrowseService.BrowseService.get_attribute_details) request and creates a new set of
attributes.

This method only updates the details of existing attributes. To update the list of available attributes, use
[`Database.refresh_tables()`](database.md#ansys.grantami.core.mi_tree_classes.Database.refresh_tables).

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.refresh_subsets"></a>

#### refresh_subsets()

Fetches the list of subsets which can be applied to this table.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.remove_subsets"></a>

#### remove_subsets(values)

Removes single or multiple subsets from the list of subsets currently associated with the [`Table`](#ansys.grantami.core.mi_tree_classes.Table) object.

* **Parameters:**
  **values** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *] or* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *] or* [*set*](https://docs.python.org/3/library/stdtypes.html#set) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – Subset name(s) to remove.

<a id="ansys.grantami.core.mi_tree_classes.Table.reset_display_unit"></a>

#### reset_display_unit(attribute)

Resets the display unit for a `POIN` or `RNGE` attribute back to the unit system default.

* **Parameters:**
  **attribute** (str or [`AttributeDefinitionPoint`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint) or [`AttributeDefinitionRange`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange)) – Attribute name or attribute definition object.

<a id="ansys.grantami.core.mi_tree_classes.Table.search_for_records_by_name"></a>

#### search_for_records_by_name(name, filter_by_subset=True, subset_name=None)

Performs a search on record name within the table.

Returns only the [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects whose short or long names are an exact match for `name`.

If `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) then the search will only return records that are in the subset given
in `subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is [`False`](https://docs.python.org/3/library/constants.html#False) then records will be returned from all subsets.

This method is case-insensitive.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name to search for.
  * **filter_by_subset** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to filter records by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
      is not provided.

### Notes

Use [`Database.search_for_records_by_name()`](database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_name) to search across the whole database.

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.search_for_records_by_text"></a>

#### search_for_records_by_text(text, filter_by_subset=True, subset_name=None)

Performs a simple text search within the table for the specified string.

Returns a list of matching [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects.

If `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) then the search will only return records that are in the subset given in
`subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is [`False`](https://docs.python.org/3/library/constants.html#False) then records will be returned from all subsets.

* **Parameters:**
  * **text** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Text string to search for.
  * **filter_by_subset** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to filter records by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
      is not provided.

#### SEE ALSO
[`Database.search_for_records_by_text()`](database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_text)
: Searches for records across the whole database.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.search_for_records_where"></a>

#### search_for_records_where(list_of_criteria, silent=False, filter_by_subset=True, subset_name=None)

Performs a search using criteria within the table.

Use [`Database.search_for_records_where()`](database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_where) to search across the whole database.

The provided `list_of_criteria` must only comprise criteria defined against attributes in this table or
criteria defined against pseudo-attributes. If it includes any criteria defined against attributes of another
table, a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) is raised.

If `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) then the search will only return records that are in the subset given in
`subset_name`, if no value is provided then the subset specified on the table will be used.

If `filter_by_subset` is [`False`](https://docs.python.org/3/library/constants.html#False) then records will be returned from all subsets.

* **Parameters:**
  * **list_of_criteria** (list[[`SearchCriterion`](supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion)]) – List of search criteria to apply.
  * **silent** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: False*) – Whether to ignore errors caused by non-existent attributes.
  * **filter_by_subset** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to filter records by subset.
  * **subset_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of the subset to use for filtering.
* **Returns:**
  A list of Record objects that match the provided criteria.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the table when `filter_by_subset` is [`True`](https://docs.python.org/3/library/constants.html#True) and `subset_name`
        is not provided.
  * [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If the search criteria include an attribute that does not exist in the table and `silent` is [`False`](https://docs.python.org/3/library/constants.html#False).

### Notes

Makes a Service Layer call.

Tabular column criteria are aggregated by column name when processed server-side, effectively restricting
results to records where a single row must meet all criteria on the same column.

To perform a search with multiple tabular column criteria defined on the same column, and obtain results
where the criteria can be met by individual different rows, perform individual searches for each criterion
and compute the intersection of the resulting lists of records.

<a id="ansys.grantami.core.mi_tree_classes.Table.set_display_unit"></a>

#### set_display_unit(attribute, unit_symbol)

Sets the display unit for `POIN` and `RNGE` attributes (not used for import or FEA exporters).

* **Parameters:**
  * **attribute** (str or [`AttributeDefinitionPoint`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint) or [`AttributeDefinitionRange`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange)) – Attribute name or attribute definition object.
  * **unit_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Unit symbol to set as the display unit.

### Notes

Units that include a currency can only be set with the abstract `currency` unit. This will cause the
attribute to be returned with the Database Currency. For example instead of `USD/kg` use  `currency/kg`.

<a id="ansys.grantami.core.mi_tree_classes.Table.attributes"></a>

#### *property* attributes *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)]*

All attributes included in the table schema, indexed by name.

Meta-attributes are accessible through the `meta_attributes` property of their parent attribute.

* **Return type:**
  dict[str, [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)]

### Notes

Makes a Service Layer call if the layouts have not already been fetched.

<a id="ansys.grantami.core.mi_tree_classes.Table.children"></a>

#### *property* children *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record)]*

Return the children of the Table node.

Analogous to [`Record.children`](record.md#ansys.grantami.core.mi_record_classes.Record.children), this returns all the records one level from the Table root.

Records returned by this property may have been cached from previous calls to [`Table.refetch_children()`](#ansys.grantami.core.mi_tree_classes.Table.refetch_children) or
[`Table.all_records()`](#ansys.grantami.core.mi_tree_classes.Table.all_records), which apply subset filtering. If the [`Table`](#ansys.grantami.core.mi_tree_classes.Table) subset configuration has
since been updated, refresh the list of children via one of the methods listed.

If there is no cached list of children, children are dynamically fetched on property access via
[`refetch_children()`](#ansys.grantami.core.mi_tree_classes.Table.refetch_children). The default subset filtering behavior is applied.

* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If more than one subset is applied to the [`Table`](#ansys.grantami.core.mi_tree_classes.Table).

### Notes

Makes a Service Layer call if the children have not already been fetched.

<a id="ansys.grantami.core.mi_tree_classes.Table.database"></a>

#### *property* database *: [Database](database.md#ansys.grantami.core.mi_tree_classes.Database)*

[`Database`](database.md#ansys.grantami.core.mi_tree_classes.Database) in which the [`Table`](#ansys.grantami.core.mi_tree_classes.Table) is defined.

* **Returns:**
  Database object.
* **Return type:**
  [`Database`](database.md#ansys.grantami.core.mi_tree_classes.Database)

<a id="ansys.grantami.core.mi_tree_classes.Table.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Parent database key.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Table.default_layout"></a>

#### *property* default_layout *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Name of default layout for this [`Table`](#ansys.grantami.core.mi_tree_classes.Table).

* **Return type:**
  str or [`None`](https://docs.python.org/3/library/constants.html#None)

### Notes

Makes a Service Layer call if the layouts have not already been fetched.

<a id="ansys.grantami.core.mi_tree_classes.Table.default_subset"></a>

#### *property* default_subset *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The default subset for this [`Table`](#ansys.grantami.core.mi_tree_classes.Table).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_tree_classes.Table.guid"></a>

#### *property* guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

GUID of the table.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Table.layouts"></a>

#### *property* layouts *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [TableLayout](supporting.md#ansys.grantami.core.mi_meta_classes.TableLayout)]*

Fetch and view the layouts available in this table.

* **Return type:**
  dict[str, [`TableLayout`](supporting.md#ansys.grantami.core.mi_meta_classes.TableLayout)]

### Notes

Makes a Service Layer call if the layouts have not already been fetched.

<a id="ansys.grantami.core.mi_tree_classes.Table.mi"></a>

#### *property* mi *: [Session](session.md#ansys.grantami.core.mi.Session)*

MI Session that was used to create or access the [`Table`](#ansys.grantami.core.mi_tree_classes.Table) object.

Used for any Service Layer calls made by the [`Table`](#ansys.grantami.core.mi_tree_classes.Table).

* **Returns:**
  Session object.
* **Return type:**
  [`Session`](session.md#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi_tree_classes.Table.min_max_type"></a>

#### *property* min_max_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

How table-wide minimum and maximum values of point, integer, range, and date-time attributes are calculated.

* [`None`](https://docs.python.org/3/library/constants.html#None): Does not calculate values (can improve performance when loading tables)
* `Approximate` (default): Uses a fast, approximate algorithm
* `Exact`: Takes account of current subset and permissions (can be slow on large tables)

Setting this property refetches cache extrema information for all attributes in the table.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Table.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the table.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Table.subsets"></a>

#### *property* subsets *: [Set](https://docs.python.org/3/library/typing.html#typing.Set)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Subsets that are currently applied to the [`Table`](#ansys.grantami.core.mi_tree_classes.Table) object.

Used for record creation, searching, and record fetching.

* **Return type:**
  [set](https://docs.python.org/3/library/stdtypes.html#set)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

#### WARNING
If using any Table method which returns a list of records, such as a search method or
[`Table.all_records()`](#ansys.grantami.core.mi_tree_classes.Table.all_records), you must ensure that only one subset is currently applied to the table.
Otherwise, a `ValueError` will be raised by that method.

<a id="ansys.grantami.core.mi_tree_classes.Table.subsets_available"></a>

#### *property* subsets_available *: [Set](https://docs.python.org/3/library/typing.html#typing.Set)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Subsets which can be applied to this table.

* **Return type:**
  [set](https://docs.python.org/3/library/stdtypes.html#set)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

### Notes

Makes a Service Layer call if the subsets have not already been fetched.

<a id="ansys.grantami.core.mi_tree_classes.Table.unit_system"></a>

#### *property* unit_system *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Unit system currently in use.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
