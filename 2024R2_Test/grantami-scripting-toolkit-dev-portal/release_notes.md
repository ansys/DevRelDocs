# What’s new in Version 4.0

Key features introduced or improved in MI Scripting Toolkit for Python 4.0.

<a id="what-s-new"></a>

## What’s new?

<a id="subsets"></a>

### Subsets

<a id="summary"></a>

#### Summary

* If your code does not use the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property and the default subset in your
  tables contain all records, you should see no behavior changes. *This is the most common
  scenario.*
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to the default subset, then you should
  disable this assignment from your code, since it now occurs automatically.
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a non-default subset, then you should
  clear the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property with `table_object.subsets.clear()` before setting the
  non-default subset.
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a set containing more than one subset and
  you perform any subsequent record fetching or search operations, these operations will raise a
  `ValueError`. They would previously not consider all applied subsets, and so would return
  incorrect results.

<a id="detailed-description-of-changes"></a>

#### Detailed description of changes

The [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property defines the applied subset or subsets for a particular table.
In previous releases, if the `subsets` argument was not provided to the [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) and
[`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid) methods, they returned a [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with an empty
subsets property, which meant that there was no active subset for that table. In this release,
calling those methods with an empty subsets argument now returns a Table object with the default
subset for that table activated. This causes the following changes in default behavior:

* Records are now added to the default subset automatically on import.
* All record fetching operations, table-specific searches and database criteria searches will only
  consider records in the default subset (see [Searching and browsing for records]() for more
  details).

A new property [`default_subset`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.default_subset) has been added to the `Table` class, which always
contains the default subset as defined in the schema. This can be used to reactivate the default
subset with the code:

```python
table.subsets.clear()
table.subsets.add(table.default_subset)
```

Adding additional subsets to the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property is allowed, but a [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
in this state can only be used for creating new records. Any attempt to perform a retrieval of
records, for example by searching or calling [`Table.all_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records), will result in a
`ValueError`.

The method [`Exporter.run_exporter()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.run_exporter) previously performed some record filtering in rare situations. The
behavior has been simplified and now subset filtering is never performed.

<a id="unchanged-operations"></a>

#### Unchanged operations

The subset filtering of [`LinkFetcher.fetch_linked_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.fetch_linked_records) is unchanged, and optionally
filters the results to include only records that are in the default subset of the target table. This
is controlled with the optional `filter_subsets` argument.

The following record fetching and data export operations are unchanged and do not perform any subset
filtering:

* [`Table.bulk_fetch()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) and [`Record`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) on-demand attribute value fetching
* [`Record`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) on-demand link fetching
* [`Record.find_parent()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.find_parent) and [`Record.refresh_path()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_path) record fetching

<a id="reverting-to-the-previous-behavior"></a>

#### Reverting to the previous behavior

The previous behavior can be retrieved by supplying `subsets={}` as an additional argument to
[`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table), or by calling `clear()` on the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property before
interacting with the [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object.

<a id="searching-and-browsing-for-records"></a>

### Searching and browsing for records

<a id="id1"></a>

#### Summary

* All searches except [`Database.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) now apply a subset filter when
  searching. If a table included in a search has multiple applied subsets, a `ValueError` is
  raised.
* The [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) `list_of_criteria` parameter must now only contain
  criteria based on pseudo-attributes and attribute definitions from the table being searched.
  Otherwise a `ValueError` is raised.
* The [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) `list_of_criteria` parameter must now only
  contain criteria based on pseudo-attributes and attribute definitions from at most one table
  within the database being searched. Otherwise a `ValueError` is raised.
* Getting records based on the Granta MI tree is generally now subject to subset filtering. If a
  table included in a record fetch operation has multiple applied subsets, a `ValueError` is
  raised.

<a id="id2"></a>

#### Detailed description of changes

The behavior of subsets related to searching and fetching records has been standardized:

* The following table-specific search and record fetching methods only consider records in the
  active subset (the subset defined in the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property) by default. If there
  is more than one active subset, a `ValueError` is raised. This behavior can be modified
  with the new `filter_by_subset` and `subset_name` arguments, see the API documentation for
  each method for details):
  * [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where)
  * [`Table.search_for_records_by_name()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_name)
  * [`Table.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_text)
  * [`Table.all_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records)
  * [`Record.all_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children)
  * [`Table.refetch_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children)
  * [`Record.refetch_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children)
* The following record fetching properties only consider records in the active subset. If there
  is more than one active subset, a `ValueError` is raised:
  * [`Table.children`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.children) (can be modified by calling [`Table.refetch_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children) first)
  * [`Record.children`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) (can be modified by calling [`Record.refetch_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children) first)
  * [`Table.get_records_from_path()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path)
* The following database-specific search methods search in the subset defined in the
  [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property. If this property contains multiple subsets, a `ValueError` is
  raised. This behavior cannot be overridden:
  * [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where)
  * [`Database.search_for_records_by_name()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name)
* The [`Database.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) search method does not apply any subset
  filtering.
* The [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) search method now only accepts a list of criteria that
  is a combination of pseudo-attributes and attributes from the table being searched over. If one or
  more criteria from a different table or database are provided, a `ValueError` is raised.
* The [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) search method now only accepts a list of criteria
  that is a combination of pseudo-attributes and attributes from at most one table. The following
  scenarios result in a `ValueError`:
  * If criteria from multiple tables are provided.
  * If one or more criteria from a different database are provided.

<a id="searching-with-pseudo-attribute-criteria"></a>

#### Searching with pseudo-attribute criteria

* Searching for pseudo-attributes in [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) and
  [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) searches no longer return duplicate search results.
* It is no longer required to manually add a `PartialTableReference` to the
  [`PseudoAttributeDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) to restrict searches to a single table. This is handled
  automatically: [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) will return results from all tables
  in the database, and [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) will return results from the
  relevant table only.

<a id="streamlined-api-enhancements-and-bug-fixes"></a>

## Streamlined API enhancements and bug fixes

<a id="enhancements"></a>

### Enhancements

* The documentation describing the [`Session.spawn_session()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.spawn_session) behavior has been clarified.
  Calling this method in a situation that would fail to return a foundation-layer session has been
  deprecated.
* The [`DATABASE_UNIT_SYSTEM`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM) constant is now documented. This constant is now the only valid
  way to refer to the unit system for a particular database. Other names, such as “database units”
  were deprecated in a previous release and are no longer valid.
* Added method [`Table.refetch_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children) to update the list of direct children of the table.
* Added property [`AttributeDefinition.history`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.history), describing the revision information of an
  attribute.
* Added new class [`RecordProperties`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties), providing a [`PseudoAttributeDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) for
  all supported pseudo-attributes.
* Improved the [`AttributeDefinition.search_criterion()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.search_criterion) and [`SearchCriterion`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)
  documentation to describe how to perform exact searches on discrete attributes.
* [`Record.links`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.links) smart links can include reverse direction links to the source table.
* Added property [`Record.data_revision_history`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history), which returns a
  [`DataRevisionHistory`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory) for each attribute of the record. It contains information about the
  attribute data and its revision history. Added [`Table.bulk_fetch_data_revision_history()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history) and
  [`DataRevisionHistoryFetcher`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher) to populate [`data_revision_history`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) in bulk.
* Added new properties on [`Record`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) for pseudo-attributes. [`Record.pseudo_attributes`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.pseudo_attributes)
  has been deprecated.
* The property [`Record.type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type) now uses the new enumeration [`RecordType`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType). String inputs
  have been deprecated.
* Datetime pseudo-attributes ([`Record.created_on`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_on), [`Record.last_modified_on`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_on)) now
  return timezone aware datetime objects.
* The [`parent`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent) property of records obtained via [`Record.all_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children),
  [`Record.children`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children), [`Table.all_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records), and [`Table.children`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.children) is now populated
  with the appropriate record from the hierarchy.
* Added method [`Record.move_to()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.move_to) to move existing records to a new location.
* Renamed [`Record.all_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children) to [`Record.get_descendants()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_descendants) to better match the
  behavior. [`Record.all_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children) is now deprecated and will be removed in a future release.
* Added property [`AttributeTabular.column_types`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.column_types), containing the tabular column types for all
  tabular columns containing data.

<a id="bug-fixes"></a>

### Bug fixes

* Non-Scripting Toolkit names such as `Dict` and `Enum` are no longer importable from
  `GRANTA_MIScriptingToolkit.granta`.
* Attempting to use [`Table.bulk_link_fetch()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) with a record link group that does not exist in
  the `Table` raises a `ValueError`.
* A record link group can now be completely cleared for a record by calling
  [`Record.set_links()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_links) with an empty iterable for the `records` argument.
* Setting [`Record.type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type) for an existing record now raises a `ValueError`.
  [`Record.type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type) can only be set when records are created.
* When `short_name` is not provided on Record instantiation, [`Record.short_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name) is no
  longer set to the `name` argument value. [`Record.short_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name) can now be None for new
  records, in which case the record tree name will default to the record name upon record creation
  on the server.
* The [`children`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) property of records obtained via [`Record.all_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children) and
  [`Table.all_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records) no longer includes all descendants, and now only includes direct
  children.
* Record types excluded via the arguments `include_folders` or `include_generics` on
  [`Record.all_children()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children) and [`Table.all_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records) are no longer incorrectly excluded in
  the [`children`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) property of resulting records.
* Unit systems now correctly affect tabular attributes:
  * [`AttributeDefinitionTabular.column_units`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_units) now returns column units in the active unit
    system.
  * Search criteria on tabular columns are now defined in the active unit system.
  * Units of rows added with [`AttributeTabular.add_row()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row) now default to the active unit
    system.
* Accessing a [`AttributeDefinitionTabular`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular) or [`AttributeTabular`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object linked to
  a hidden table no longer raises a `KeyError`.
* Attempting to call
  [`Exporter.get_parameters_required_for_export`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export)
  for an FEA exporter which contains functional meta-attributes no longer raises a `KeyError`.

<a id="examples"></a>

### Examples

Example notebooks are included in the MI Scripting Toolkit, this is
included as part of the Granta MI Enterprise package on the Ansys Customer Portal. Contact
your system administrator for more details.

<a id="foundation-api-enhancements-and-bug-fixes"></a>

## Foundation API enhancements and bug fixes

* [`TabularColumnDetail.databaseUnit`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.databaseUnit) is now correctly populated for linked columns.
* Added property [`TabularColumnDetail.identity`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.identity), providing the internal identity of the
  tabular column.

<a id="backwards-incompatible-api-changes"></a>

## Backwards incompatible API changes

<a id="streamlined-api"></a>

### Streamlined API

The changes described above in [Subsets]() and [Searching and browsing for records]() are breaking
changes to the streamlined API. In addition:

* [`Session.records_from_string()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string) now defaults to `use_strict_version=True`.
* `get_records_by_ids` and `get_record_by_id` methods on [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session), [`Database`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database),
  and [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) classes no longer accept the `identity` argument. Use `history_identity`
  instead.
* [`Table.paths_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from), [`Table.path_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from), and [`Table.get_records_from_path()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path) no
  longer support `str` and [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) inputs. Use `None` to use the table root as starting
  node. All three methods now raise a `ValueError` if the record specified as `starting_node`
  is not in the current table, and raise a `TypeError` if the argument value is not a
  [`Record`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or `None`.
* [`Record.color`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color) no longer supports `str` inputs. Only [`RecordColor`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) objects
  are supported.
* [`AttributeFunctional.add_point()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_point) and [`AttributeFunctional.add_range()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_range) methods now
  raise `KeyError` exceptions if a dictionary with incorrect keys is provided.
* [`File.load()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load), [`File.save()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save), [`Picture.load()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load), and [`Picture.save()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) no longer
  accept `file_name` as an argument. Provide the full path including the file name to the `path`
  argument. For file attributes, the name of the file is part of the attribute value and can be
  accessed via [`AttributeFile.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.file_name) or [`File.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name) to build a full path.
* `File.name` has been removed. Use [`File.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name).
* `Picture.name` has been removed.
* [`File`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) and [`Picture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) no longer accept `name` or `load` as arguments. Provide
  the full path to the file/picture (including the file name) to the keyword only argument `path`.
* [`File.description`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.description) now only supports `str` inputs.
* Attempting to import an empty [`AttributeTabular`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) is deprecated. Instead use
  [`Record.clear_attributes()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.clear_attributes) to delete the attribute value, or set
  [`AttributeValue.is_applicable`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_applicable) to `False` to mark the attribute as Not Applicable.

<a id="asyncjobs"></a>

### AsyncJobs

The AsyncJobQueue functionality has been moved to a new PyAnsys package called PyGranta JobQueue.

If you are using Granta MI 2024 R2 or later, you can use this package to import and export Excel
files and import text data into Granta MI. The package can be installed with
`pip install ansys-grantami-jobqueue`, and documentation can be accessed [here](https://jobqueue.grantami.docs.pyansys.com/). The differences
between the packages are minimal, and the PyGranta JobQueue API documentation includes a guide for
migrating code from Scripting Toolkit AsyncJobs to PyGranta JobQueue.

If you are using Granta MI 2024 R1 or earlier and require Job Queue functionality, you should
continue to use Scripting Toolkit v3.3.

<a id="known-issues"></a>

## Known issues

* If an attribute is exported with the [`Table.bulk_fetch`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch)
  method with `include_binary_data=False`, subsequent values returned by the
  `AttributePicture.mime_file_type` property will always return `image/png`, regardless of the
  actual image format. The header returned when accessing the URL is unaffected and should be used
  instead.
* In version-controlled tables, [`DataRevisionHistory`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory)
  objects have an ambiguous meaning. The `history.last_modified_date` for the following attribute
  types is updated when the release state of the parent record is modified:
  - Date
  - Hyperlink
  - Integer
  - Logical
  - Range
  - Short text

  The `history.last_modified_date` for the following attribute types is *not* updated when the
  release state of the parent record is modified:
  - Discrete
  - File
  - Functional
  - Long text
  - Picture
  - Point
  - Tabular
