# Table

<a id="table-level"></a>

<a id="table"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table"></a>

### *class* Table

Represents an MI table, and provides access to records (particularly searching on record properties),
exporters and attribute definitions.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.unit_system"></a>

#### *property* unit_system

Unit system currently in use.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.set_display_unit"></a>

#### set_display_unit(attribute, unit_symbol)

Sets the display unit for ‘’POIN’’ and ‘’RNGE’’ attributes (this is not used for import or FEA exporters).

#### NOTE
Units that include a currency can only be set with the abstract `currency` unit. This will cause the
attribute to be returned with the Database Currency. For example instead of `USD/kg` use
`currency/kg`.

* **Parameters:**
  * **attribute** – Union[str, AttributeDefinitionPoint, AttributeDefinitionRange] (str must be the attribute
    name)
  * **unit_symbol** – str
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.reset_display_unit"></a>

#### reset_display_unit(attribute)

Resets the display unit for a `POIN` or `RNGE` attribute back to the unit system default.

* **Parameters:**
  **attribute** – Union[str, AttributeDefinitionPoint, AttributeDefinitionRange] (str must be the attribute
  name)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.min_max_type"></a>

#### *property* min_max_type

How table-wide minimum and maximum values of point (`POIN`), integer (`INPT`), range (`RNGE`) and
date-time (`DTTM`) attributes in the table are calculated:

* `None`: Does not calculate values (can improve performance when loading tables)
* `Approximate` (default): Uses a fast, approximate algorithm
* `Exact`: Takes account of current subset and permissions (can be slow on large tables)

Setting this property clears cache extrema information for all attributes in the table.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refresh_subsets"></a>

#### refresh_subsets()

Fetches the list of subsets which can be applied to this table. Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets_available"></a>

#### *property* subsets_available

Subsets which can be applied to this table.

* **Returns:**
  Set[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.default_subset"></a>

#### *property* default_subset

The default subset for this [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets"></a>

#### *property* subsets

Subsets that are currently applied to the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object. Used for record creation, searching,
and record fetching.

#### WARNING
If using any Table method which returns a list of records, such as a search method or
[`Table.all_records()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records), you must ensure that only one subset is currently applied to the
table. Otherwise a `ValueError` will be raised.

* **Returns:**
  Set[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.add_subsets"></a>

#### add_subsets(values)

Adds single or multiple subsets to the list of subsets currently applied to the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object.

* **Parameters:**
  **values** – Set[str], Tuple[str] or List[str]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.remove_subsets"></a>

#### remove_subsets(values)

Removes single or multiple subsets from the list of subsets currently associated with the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object.

* **Parameters:**
  **values** – Set[str], Tuple[str] or List[str]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records"></a>

#### all_records(include_folders=False, include_generics=True, filter_by_subset=True, subset_name=None)

Returns a flattened list of all records in the table and populates the `children` property
of each [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object. If `filter_by_subset` is True then the operation will only
return records that are in the subset given in `subset_name`, if no value is provided then
the subset specified on the table will be used. If `filter_by_subset` is False then records
will be returned from all subsets. Makes a Service Layer call.

* **Parameters:**
  * **include_folders** – bool
  * **include_generics** – bool
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### WARNING
If you set `filter_by_subset` to True, you must either provide a `subset_name` or
ensure that the table has only one subset applied. If more than one subset is applied,
this will raise a ValueError.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_text"></a>

#### search_for_records_by_text(text, filter_by_subset=True, subset_name=None)

Performs a simple text search within the table for the specified string. Returns a list of matching
[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. If `filter_by_subset` is True then the search will only return records that
are in the subset given in `subset_name`, if no value is provided then the subset specified on the
table will be used. If `filter_by_subset` is False then records will be returned from all subsets.
Makes a Service Layer call.

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table being
searched has only one subset applied. If more than one subset is applied, this will raise a ValueError.

#### NOTE
Use [`Database.search_for_records_by_text()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) to search across the whole database.

* **Parameters:**
  * **text** – str
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where"></a>

#### search_for_records_where(list_of_criteria, silent=False, filter_by_subset=True, subset_name=None)

Performs a search using criteria within the table.

Use [`Database.search_for_records_where()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) to search across the whole database.

The provided `list_of_criteria` must only comprise criteria defined against attributes in this table or
criteria defined against pseudo-attributes. If it includes any criteria defined against attributes of another
table, a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) is raised.

#### NOTE
Tabular column criteria are aggregated by column name when processed server-side, effectively restricting
results to records where a single row must meet all criteria on the same column.
To perform a search with multiple tabular column criteria defined on the same column, and obtain results
where the criteria can be met by individual different rows, perform individual searches for each criterion
and compute the intersection of the resulting lists of records.

If `silent` is True then errors caused by non-existent attributes will be ignored and no results
will be returned, otherwise the method will raise an exception.

If `filter_by_subset` is True then the search will only return records that
are in the subset given in `subset_name`, if no value is provided then the subset specified on the
table will be used. If `filter_by_subset` is False then records will be returned from all subsets.

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table being
searched has only one subset applied. If more than one subset is applied, this will raise a ValueError.

* **Parameters:**
  * **list_of_criteria** – List[[`SearchCriterion`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)]
  * **silent** – bool
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Return type:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  a list of [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects that match the provided criteria.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.name"></a>

#### *property* name

Name of the table.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.guid"></a>

#### *property* guid

GUID of the table.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.db_key"></a>

#### *property* db_key

Parent database key.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refresh_attributes"></a>

#### refresh_attributes()

Performs a Foundation API [`BrowseService.GetAttributeDetails()`](../foundation/api.md#GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetAttributeDetails) request and creates a new set
of attributes for the table from the results.

This method only updates the details of existing attributes. To update the list of available attributes, use
[`Database.refresh_tables()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.refresh_tables).

Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.layouts"></a>

#### *property* layouts

Fetch and view the layouts available in this table.

* **Returns:**
  Dict[str, [`TableLayout`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.default_layout"></a>

#### *property* default_layout

Name of default layout for this [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.attributes"></a>

#### *property* attributes

All attributes included in the table schema, indexed by name. Meta-attributes are accessible through the
`meta_attributes` property of their parent attribute.

* **Returns:**
  Dict[str, [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.mi"></a>

#### *property* mi

MI Session that was used to create or access the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object. Used for any Service Layer calls made by
the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

* **Returns:**
  [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.database"></a>

#### *property* database

[`Database`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) in which the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) is defined.

* **Returns:**
  [`Database`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_attribute_definition"></a>

#### get_attribute_definition(name=None, identity=None)

Returns the [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object specified by `name` or the identifier `identity`.
Meta-attributes are also returned if the identifier is provided.

* **Parameters:**
  * **name** – str (Name of the [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object)
  * **identity** – int (Attribute identifier)
* **Returns:**
  [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or List[[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_by_ids"></a>

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object for each identifier provided. The returned list of records
will have the same number of elements as the provided list of identifiers. If no record corresponds
to that identifier in this table then the corresponding item in the returned list will be `None`.

Each element in the `record_identifiers` parameter should be a dictionary with one or more of the
following (sets of) references in priority order:

1. `vguid` (Record GUID - uniquely identifies specific version of record)
2. `history_identity` (Record history identity - uniquely identifies record only), and optionally
   `version_number` (Record version number)
3. `hguid` (Record History GUID - uniquely identifies record only)

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

This method can return records outside the currently selected subset.

* **Parameters:**
  **record_identifiers** – Sequence[Dict[str, Union[str, int]]]
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_record_by_id"></a>

#### get_record_by_id(history_identity=None, hguid=None, vguid=None, version_number=None)

Returns the [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object with the following (sets of) references in priority order:

1. `vguid` (Record GUID - uniquely identifies specific version of record)
2. `history_identity` (Record history identity - uniquely identifies record only), and optionally
   `version_number` (Record version number)
3. `hguid` (Record History GUID - uniquely identifies record only)

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

This method can return records outside the currently selected subset.

* **Parameters:**
  * **history_identity** – int (Record history identity)
  * **hguid** – str (Record History GUID - uniquely identifies record)
  * **vguid** – str (Record GUID - uniquely identifies record version)
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_record_by_lookup_value"></a>

#### get_record_by_lookup_value(attribute_name, lookup_value)

Returns a [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object specified by attribute name and a exact match for a short text string
(lookup value), provided that:

* The `lookup_value` matches exactly one record in the table.
* The record is in the default subset of the table.

In Granta MI 2025 R2 and later, if multiple matches are detected, no results are returned. In earlier Granta MI
versions, an exception is raised.

* **Parameters:**
  * **attribute_name** – str
  * **lookup_value** – str
* **Returns:**
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.children"></a>

#### *property* children

Return the children of the Table node. Analogous to [`Record.children`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children), this returns all the records one
level from the Table root.

Records returned by this property may have been cached from previous calls to [`Table.refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children) or
[`Table.all_records()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records), which apply subset filtering. If the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) subset configuration has
since been updated, refresh the list of children via one of the methods listed.

If there is no cached list of children, children are dynamically fetched on property access via
[`refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children). The default subset filtering behavior is applied.

#### WARNING
You must ensure that the table has only one subset applied. If more than one subset is
applied, this will raise a ValueError when dynamically retrieving children records.

* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children"></a>

#### refetch_children(filter_by_subset=True, subset_name=None)

Refreshes the list of direct children belonging to the table. If `filter_by_subset` is True then the
operation will only return records that are in the subset given in `subset_name`, if no value is
provided then the subset specified on the table will be used. If `filter_by_subset` is False then
records will be returned from all subsets. Makes a Service Layer call.

* **Parameters:**
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  None

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table
has only one subset applied. If more than one subset is applied, this will raise a ValueError.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_name"></a>

#### search_for_records_by_name(name, filter_by_subset=True, subset_name=None)

Performs a search on record name within the table. Returns only the [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects whose
short or long names are an exact match for `name`. If `filter_by_subset` is True then the search
will only return records that are in the subset given in `subset_name`, if no value is provided then
the subset specified on the table will be used. If `filter_by_subset` is False then records will be
returned from all subsets. Makes a Service Layer call. This method is Case-insensitive.

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table being
searched has only one subset applied. If more than one subset is applied, this will raise a ValueError.

#### NOTE
Use [`Database.search_for_records_by_name()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name) to search across the whole database.

* **Parameters:**
  * **name** – str
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_empty_attribute_value"></a>

#### create_empty_attribute_value(definition)

Create an empty [`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) instance for an attribute from its
[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition).
This can subsequently be assigned to a record for import.

* **Parameters:**
  **definition** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
* **Returns:**
  [`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record"></a>

#### create_record(name, parent=None, short_name=None, attributes=None, folder=False, subsets=None, release_record=False, color=RecordColor.InheritFromParent)

Creates a new [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object in the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). The record will not exist
in MI, or be able to be assigned as a parent, until it is pushed to the server.

* **Parameters:**
  * **name** – str (Long name)
  * **parent** – [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **short_name** – str
  * **attributes** – Dict[str,
    [`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]
  * **folder** – bool (Whether the record will be Folder type)
  * **release_record** – bool (Whether the record will be released when it is next updated)
  * **subsets** – Set[str] (List of subsets the record will belong to)
  * **color** – Union[str, RecordColor] (Record color - Inherits from parent by default)
* **Returns:**
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from"></a>

#### paths_from(paths)

Create multiple paths between specified start and end nodes in the table tree.

Paths are specified as a list of dictionaries with the following structure:

```python
{'starting_node': Optional[Record],
'tree_path': ['list', 'of', 'folders'],
'end_node': '<end node string>',
'color': 'color for all new nodes to be assigned'}
```

See description of [`path_from()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from) for further details.

#### WARNING
The `end_node` key is deprecated and will be removed in a future release. To create records at the
end of tree paths, use [`Table.create_record()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record) for each element in this method’s return value.

* **Parameters:**
  **paths** – List[Dict[str, Union[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), str, None, List[str]]]]
* **Returns:**
  List[Tuple[dict, [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from"></a>

#### path_from(starting_node, tree_path, end_node=None, color=RecordColor.InheritFromParent)

Ensures that all the folders in a specified path are available, and creates any that do not already exist.

In the case of a version-controlled table, folders are created in an unreleased state.

#### WARNING
The `end_node` parameter is deprecated and will be removed in a future release. To create records at the
end of tree paths, use [`Table.create_record()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record) with the `parent` parameter set to this method’s return
value.

* **Parameters:**
  * **starting_node** – A [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or `None`. Identifies the node under which the new path will start.
    Set to `None` to start the path at the root of the table. Set to an existing
    record/folder to create the path from the specified node.
  * **tree_path** – List[str] The names of the folders in the path, e.g. `['Polymers', 'Plastics', 'Thermoplastics', ...]`.
    Folders in the path will be created if they don’t already exist. Existing records on the path will be
    converted to generic records.
  * **end_node** – str (Optional) The name of a new record that will be created below the last path node.
  * **color** – [`RecordColor`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) (Optional) Sets the color of all folders and records in the path.
* **Returns:**
  The [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object at the end of the path: the created record if `end_node` has been
  specified, otherwise the last folder in the path.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path"></a>

#### get_records_from_path(starting_node, tree_path, use_short_names=False)

Return all of the records that are found at the end of the path from a specified node.

* The starting node identifies the node immediately above the path. To start the path at the top of the tree,
  set `starting_node` to `None`. To start the path under any other node in the tree,
  specify a [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) as the `starting_node`.
* Specify the path as a list of record names e.g. `['Polymers', 'Plastics', 'Thermoplastics', ...]`.
* You can include “wildcards” in the path by setting a node to ‘None’ e.g.
  `['Thermoplastics', 'None', 'Unfilled', ...]`.
* By default, the strings specified in the path list are assumed to be record full names; to specify the path
  using record short names instead, set `use_short_names` to True.

Example 1:

> `recs = table.get_records_from_path(None, ['Record 1', None, 'Record 2'])`

will return all records that are children of a record named Record 2, that also have Record 1 as a
great-grandparent. The grandparent is set as a wildcard, and so any is allowed.

Example 2:

> `recs = table.get_records_from_path(None, ['Record 1', 'Record 3', None])`

will return all records that are grandchildren of records named Record 3 that also have a great-grandparent
called Record 1.

Both of these examples have assumed that Record 1 is a top-level record (and have a starting node as a table
object to reflect this), but the method does not require this. The starting node can be any record object in
the tree.

* **Parameters:**
  * **starting_node** – any [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) in the table tree. To start the path at the root node of the table
    tree, set to `None`.
  * **tree_path** – a list of strings specifying the names of the records in the path. May include ‘None’ as a
    wildcard.
  * **use_short_names** – a boolean that specifies whether the strings in the path are the record short names
* **Returns:**
  returns a list of records
* **Return type:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch"></a>

#### bulk_fetch(records, attributes=None, batch_size=100, parallelize=False, max_num_threads=6, include_binary_data=False)

Populates data values for all named [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) and [`PseudoAttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) objects in
the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Set `attributes` to  `None` to export all record data.
Attribute values for requested `attributes` are added to [`Record.attributes`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) dictionary whether the
attribute is populated or not.

Meta-attributes can be included in a bulk operation by providing the meta-attribute [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)
in `attributes`. [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) of meta-attributes can be obtained from the parent attribute
[`AttributeDefinition.meta_attributes`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.meta_attributes).

Attribute values will not be created for attributes not included in the export via the attributes argument and
trying to access them might raise a [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError).

If `include_binary_data` is set to False (default), the export will not fetch the binary data
representing the request File and Picture attributes and will instead export URLs (see the
[`BinaryType.url`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) documentation for more information on how to use the URL to access the data). This
setting is recommended for large files and pictures, or if the binary data itself is not required.

To summarize how the file and picture data can be accessed:

* `include_binary_data = False` (default): The [`BinaryType.url`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data = True`: The [`BinaryType.binary_data`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save) methods are both available to access and save
  the binary data. The [`BinaryType.url`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is empty and returns `None`.

This operation performs no subset filtering, so all tabular rows will be included in the response
regardless of the subset membership of the linked records.

#### WARNING
If `include_binary_data` is set to False, the `binary_data` property and `save()` method are
both still available for backwards compatibility. However, they will download the data from Granta MI on
demand for each attribute value. A warning will be generated each time this occurs, although the default
warning configuration in Python is to only display each warning once.

This behavior is likely to have a significant performance impact, and so it is recommended that if access to
the binary data is required without the HTTP GET request, you should specify `include_binary_data = True`.

This performance impact will also be evident during the re-import of File or Picture attributes, or
tabular attributes that contain File or Picture columns. It is strongly recommended to set
`include_binary_data = True` if any File or Picture data will be re-imported into Granta MI.

On-demand access to attribute values without using [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is unaffected.

#### NOTE
Providing a list of attributes by name or by [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) will not fetch any meta-attributes
associated with those attributes. If the meta-attributes are not explicitly requested, then the resulting
[`AttributeValue.meta_attributes`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.meta_attributes) dictionary will contain empty meta-attribute values.

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

* **Parameters:**
  * **attributes** – List[Union[[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition),
    [`PseudoAttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition), str]]
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelize** – bool (default False)
  * **max_num_threads** – int (default value of 6)
  * **include_binary_data** – bool (default value of False)

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`. `parallelise` may still be used, but is
deprecated.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch"></a>

#### bulk_link_fetch(records, link_groups=None, batch_size=100, parallelize=False, max_num_threads=6, filter_subsets=True)

Fetches and populates record link groups for the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
objects. Set `link_groups` to `None` to fetch all record link groups.

Set `filter_subsets` to `True` to return records that are in the
default subsets of the target table. Set it to `False` to search without
filtering by subset.

* **Parameters:**
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **link_groups** – List[str]
  * **batch_size** – int (default value of 100)
  * **parallelize** – bool (default False)
  * **max_num_threads** – int (default value of 6)
  * **filter_subsets** – bool (default value of `True`)

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`. `parallelise` may still be used, but is
deprecated.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_associated_records"></a>

#### bulk_fetch_associated_records(records, target_table, link_direction='Both', attribute_path=None, batch_size=100, parallelize=False, max_num_threads=6)

Fetches records associated with the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a target [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Returns a
list of dictionaries containing the source record and associated records for each [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) provided.

You may specify `link_direction` to only follow tabular links in the specified direction, or provide a list of
[`AttributeDefinitionTabular`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular) objects in `attribute_path` to follow only those tabular links.

* **Parameters:**
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **target_table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
  * **link_direction** – str (`Both` (default), `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinitionTabular`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular)]
  * **batch_size** – int (default value of 100)
  * **parallelize** – bool (default False)
  * **max_num_threads** – int (default value of 6)

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`. `parallelise` may still be used, but is
deprecated.

* **Returns:**
  List[Dict[str, Union[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history"></a>

#### bulk_fetch_data_revision_history(records, batch_size=100, parallelize=False, max_num_threads=6)

Fetches the data revision history for all attributes of the provided records and populates the
[`Record.data_revision_history`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) property.

* **Parameters:**
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelize** – bool (default False)
  * **max_num_threads** – int (default value of 6)

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`. `parallelise` may still be used, but is
deprecated.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_available_exporters"></a>

#### get_available_exporters(package=None, model=None, applicability_tag=None)

Returns exporters available on the table filtered by package, model, and applicability tag value.

* **Parameters:**
  * **package** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) The target FEA analysis package. For example: ‘NX 10.0’, ‘CATIA V5’.
  * **model** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) The material model type. For example, ‘Isotropic’, ‘Linear, temperature-independent,
    isotropic, thermal, plastic’.
  * **applicability_tag** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) A tag that identifies the applications for which an exporter is intended
    to be used. For example, ‘MIMaterialsGateway’, ‘MIViewer’.
* **Returns:**
  List[[`Exporter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter)]
