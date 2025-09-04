# Record

<a id="record"></a>

<a id="id1"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record"></a>

### *class* Record

Stores and provides access to record attributes, pseudo-attributes, links and children. Provides methods for adding,
editing and deleting records, and importing/exporting record data.

New [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects may be created to represent records that do not currently exist in the database:

* A name and parent table must be specified. `name` will become the record’s long name. The record short name
  (or tree name) can be set via the argument `short_name`, or via the [`Record.short_name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name) property following
  object creation. If a record is pushed to MI without a specifying short name, the short name will default to the
  record name.
* Records created this way will not exist in the host database until the changes have been
  pushed to MI (see [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update)).

#### NOTE
Do not create new instances of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects for records which are already in the database.
Existing records will have Foundation API classes associated with them, from which the Streamlined API will
automatically generate and return [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects as required.

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.__init__"></a>

#### \_\_init_\_(name, table, parent=None, short_name=None, attributes=None, subsets=None, folder=None, record_color=None, release_record=True)

* **Parameters:**
  * **name** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) (Long name for new records)
  * **table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **parent** – [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **short_name** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) (Short (tree) name for new records)
  * **attributes** – Dict[[`str`](https://docs.python.org/3/library/stdtypes.html#str), [`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]
  * **subsets** – Set[[`str`](https://docs.python.org/3/library/stdtypes.html#str)] (Subsets the record belongs to)
  * **folder** – [`bool`](https://docs.python.org/3/library/functions.html#bool) (Whether the record is ‘Folder’ type)
  * **record_color** – [`RecordColor`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) (Color of the record)
  * **release_record** – [`bool`](https://docs.python.org/3/library/functions.html#bool) (Release state of the record; `True` to release next version)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.name"></a>

#### *property* name

Long name of record.

If the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object represents an existing record:

* The property will initially return the exported name of the record. It will be
  fetched if it has not already been exported.
* If the property is modified, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) name will be set to the specified
  value.
* If the property is set to `None`, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) name will be reset to the
  exported value.

If the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object represents a new record:

* The property will initially return the value specified in the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) constructor.
* If the property is modified, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) name will be set to the specified
  value.
* If the property is set to `None`, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) name will be set to `None`.

#### NOTE
If a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) is imported with `name` set to `None`, a `ValueError` will be
raised.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.mi"></a>

#### *property* mi

MI Session that was used to create or access the record.
Used for any Service Layer calls made by the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object.

* **Returns:**
  [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.table"></a>

#### *property* table

Parent [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) the record belongs to.

* **Returns:**
  [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.table_name"></a>

#### *property* table_name

Name of parent table.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.db_key"></a>

#### *property* db_key

Database key for the database the record belongs to.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.subsets"></a>

#### *property* subsets

Subsets that the record belongs to.

* **Returns:**
  Set[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.flag_for_release"></a>

#### *property* flag_for_release

Whether the record will be made available to users when it is next updated.

* `True` (default): If changes were made to the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), a new version will be
  created, otherwise the unreleased version of the record will be released when the server is updated.
* `False`: If changes were made to the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), a new, unreleased version
  will be created when the server is updated.

#### NOTE
If you do not have the correct permissions to change release states, setting this property
will not have the documented effect. Please see the Service Layer documentation for more details.

* **Returns:**
  bool or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color"></a>

#### *property* color

Color of the record when displayed in MI Viewer and other Granta MI applications.

If the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object represents an existing record:

* The `color` property will initially return the exported color of the record. It will be
  fetched if it has not already been exported.
* If `color` is modified, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) color will be set to the specified value.
* If `color` is set to `None`, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) color will be reset to the
  exported value.

If the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object represents a new record:

* The `color` property will initially return the value specified in the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
  constructor. If not set, it will default to the value InheritFromParent.
* If `color` is modified, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) color will be set to the specified value.
* If `color` is set to `None`, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) color will be set to the value
  InheritFromParent.

#### NOTE
If a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) is imported with `color` set to `None`, the record will
inherit the color of the parent record.

* **Returns:**
  [`RecordColor`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name"></a>

#### *property* short_name

Short (tree) name of the record.

If the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object represents an existing record:

* The `short_name` property will initially return the exported short name of the record.
  It will be fetched if it has not already been exported.
* If `short_name` is modified, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) short name will be set to the specified
  value.
* If `short_name` is set to `None`, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) short name will be reset to the
  exported value.

If the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object represents a new record:

* The `short_name` property will initially return the value specified in the
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) constructor.
* If `short_name` is modified, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) short name will be set to the specified
  value.
* If `short_name` is set to `None`, the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) short name will be set to
  `None`.

#### NOTE
If a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) is imported with `short_name` set to `None`, the short name
will default to the record name.

* **Returns:**
  str, optional

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent"></a>

#### *property* parent

Parent record or table of this record.

* **Raises:**
  [**PermissionError**](https://docs.python.org/3/library/exceptions.html#PermissionError) – if parent record cannot be accessed due to access control.
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object, or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.find_parent"></a>

#### find_parent()

Finds and sets the parent record or table.

Since the parent record is in all subsets that this record is in, this operation performs no subset filtering.
:raises PermissionError: if parent record cannot be accessed due to access control.
:return: None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_guid"></a>

#### *property* history_guid

Record History GUID, if it exists. Records can be uniquely identified by their Record History GUID, which
will return the latest version the user has access to.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.record_guid"></a>

#### *property* record_guid

Record GUID, if it exists. Each version of a record can be uniquely identified by its Record GUID.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_identity"></a>

#### *property* history_identity

Record history identity, if it exists.

* **Returns:**
  int or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes"></a>

#### set_attributes(attributes)

Flags attributes to update on the server when [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update)
is next called. If [`set_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes) is not called on modified attributes, changes
to those attributes will not be transferred to MI.

* **Parameters:**
  **attributes** – Iterable[AttributeValue]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.clear_attributes"></a>

#### clear_attributes(attributes)

Flags attributes to have their data value on the server deleted when [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update)
is next called. Does not delete the local value of flagged attributes, only the data on MI. Supersedes
previous [`set_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes) calls.

* **Parameters:**
  **attributes** – Iterable[AttributeValue]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.viewer_url"></a>

#### *property* viewer_url

The MI Viewer URL for the record.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.path"></a>

#### *property* path

Browse tree path for the record as a list of folder short names.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.pseudo_attributes"></a>

#### *property* pseudo_attributes

Pseudo-attributes associated with the record, indexed by name.

#### NOTE
Supported names are:

- `recordType`
- `recordHistoryIdentity`
- `recordColor`
- `recordVersionNumber`
- `tableName`
- `writable`
- `parentShortName`
- `parentName`
- `parentRecordHistoryIdentity`
- `shortName`
- `modifiedDate`
- `createdDate`
- `releasedDate`
- `lastModifier`
- `creator`
- `subsets`
- `name`

#### WARNING
This property is deprecated. Pseudo-attribute values are available as properties:

- [`Record.type`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type)
- [`Record.history_identity`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_identity)
- [`Record.color`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color)
- [`Record.version_number`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.version_number)
- [`Record.table_name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.table_name)
- [`Record.is_writable`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.is_writable)
- [`Record.parent_record_short_name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_short_name)
- [`Record.parent_record_name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_name)
- [`Record.parent_record_history_identity`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_history_identity)
- [`Record.short_name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name)
- [`Record.last_modified_on`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_on)
- [`Record.created_on`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_on)
- [`Record.released_on`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.released_on)
- [`Record.last_modified_by`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_by)
- [`Record.created_by`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_by)
- [`Record.subsets`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.subsets)
- [`Record.name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.name)

* **Returns:**
  Dict[str, [`PseudoAttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_path"></a>

#### refresh_path()

Re-calculates the record path within the current table.

Since all ancestor records are in all subsets that this record is in, this operation
performs no subset filtering.

Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.exists_on_server"></a>

#### *property* exists_on_server

Whether the record exists on the server (True) or has been created in memory (False).

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_properties"></a>

#### refresh_properties()

Refreshes the Foundation API [`GRANTA_MIScriptingToolkit.TreeRecord`](./../foundation/api.md#module-GRANTA_MIScriptingToolkit.TreeRecord) object associated with the
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), if it has one.
Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children"></a>

#### refetch_children(filter_by_subset=True, subset_name=None)

Refreshes the list of children belonging to the record. If `filter_by_subset` is True then the
operation will only return records that are in the subset given in `subset_name`, if no value is
provided then the subset specified on the table will be used. If `filter_by_subset` is False
then records will be returned from all subsets. Makes a Service Layer call.

* **Parameters:**
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  None

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table
has only one subset applied. If more than one subset is applied, this will raise a ValueError.

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_attributes"></a>

#### refresh_attributes()

Checks whether the record’s attributes have changed on the server, and updates the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object if
required. Can also be used to populate attributes. Makes a Service Layer call.

Always includes binary data in the response. Use the [`bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method if URL
data representation is required.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes"></a>

#### refetch_pseudo_attributes()

Fetches pseudo-attribute data for this record, and updates subsets for the record if not set.
Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos"></a>

#### refetch_pseudos()

Fetches pseudo-attribute data for this record, and updates subsets for the record if not set.
Makes a Service Layer call.

#### Deprecated
Deprecated since version 4.2: This method has been renamed to `refetch_pseudo_attributes`.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes"></a>

#### *property* attributes

Attributes associated with the record, indexed by attribute name.

* **Returns:**
  Dict[str,
  [`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_attributes"></a>

#### get_attributes(names=None, types=None, include_attributes=True, include_meta_attributes=False, include_pseudo_attributes=False, empty=None, \*\*kwargs)

Retrieve a list of attributes from the `record.attributes` dictionary. You can narrow the results by
specifying the attribute names or data types, or the required attribute categories (attribute,
meta-attribute, or pseudo-attribute).

If the `record.attributes` dictionary is empty when `get_attributes` is called, it will be
populated before retrieving any attributes.

This operation performs no subset filtering, so all tabular rows will be included in the response
regardless of the subset membership of the linked records.

* **Example:**
  `r.get_attributes(names=['Density', 'Stress-Strain'], types=['POIN', 'FUNC'], include_meta_attributes=True)`
  will return all point or functional series attributes or meta-attributes named Density or Stress-Strain
  from the record.
* **Parameters:**
  * **names** – List[str]
  * **types** – List[str] (Attribute data types; allowed values are: DISC, DTTM, FILE, FUNC, HLNK, INPT, LOGI,
    LTXT, PICT, POIN, RNGE, STXT, TABL)
  * **include_attributes** – bool (whether to retrieve attributes that are not meta-attributes or
    pseudo-attributes; `True` by default)
  * **include_meta_attributes** – bool (whether to retrieve meta-attributes; `False` by default)
  * **include_pseudo_attributes** – bool (whether to retrieve pseudo-attributes; `False` by default)
  * **empty** – bool (whether to check if the returned attributes are populated)

#### Versionchanged
Changed in version 4.2: Argument `include_metas` was renamed to `include_meta_attributes`. `include_metas` may still be used,
but is deprecated.

#### Versionchanged
Changed in version 4.2: Argument `include_pseudos` was renamed to `include_pseudo_attributes`. `include_pseudos` may still be
used, but is deprecated.

* **Returns:**
  List[Union[[`PseudoAttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue),
  [`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type"></a>

#### *property* type

Record type.

On record creation via the MI Scripting Toolkit, the record type can only be set to [`RecordType.Folder`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder)
or [`RecordType.Record`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Record). The type of an existing record cannot be set via this property.

Adding children to a record, or populating attributes on a folder both result in the type updating to
[`RecordType.Generic`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Generic) during the update.

* **Return type:**
  [RecordType](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children"></a>

#### all_children(include_folders=False, include_generics=True, filter_by_subset=True, subset_name=None)

Returns a flattened list of all descendants of a record and populates the [`children`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) property of
each [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object traversed in the process.

#### WARNING
This method is deprecated. Use [`get_descendants()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_descendants).

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_descendants"></a>

#### get_descendants(include_folders=False, include_generics=True, filter_by_subset=True, subset_name=None)

Returns a flattened list of all descendants of a record and populates the [`children`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) property of
each [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object traversed in the process.

If `filter_by_subset` is True then the operation will only return records that are in the subset given in
`subset_name`, if no value is provided then the subset specified on the table will be used.
If `filter_by_subset` is False then records will be returned from all subsets. Makes a Service Layer call.

* **Parameters:**
  * **include_folders** – bool
  * **include_generics** – bool
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### WARNING
If you set `filter_by_subset` to True, you must either provide a `subset_name` or ensure that the table
has only one subset applied. If more than one subset is applied, this will raise a ValueError.

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children"></a>

#### *property* children

Records that are direct children of the current record.

Records returned by this property may have been cached from previous calls to
[`Record.get_descendants()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_descendants) (previously [`Record.all_children()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children)), [`Record.refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children) or
[`Table.all_records()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records), which all apply subset filtering. If the [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) subset configuration has
since been updated, refresh the list of children via one of the methods listed.

If there is no cached list of children, children are dynamically fetched on property access via
[`refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children). The default subset filtering behavior is applied.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### WARNING
You must ensure that the table has only one subset applied. If more than one subset is
applied, this will raise a ValueError when dynamically retrieving children records.

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.links"></a>

#### *property* links

Link groups for this [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object, and the records they link to. Smart links may be viewed but not
edited through the `links` property.

This operation performs no subset filtering.

* **Returns:**
  Dict[str, Set[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_associated_records"></a>

#### get_associated_records(target_table, link_direction='Both', attribute_path=None)

Gets all records in a target table that are linked to the current [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object via tabular data
association chains. This can be filtered by link direction and to a specific path.

If `attribute_path` is provided, then only records from that exact path will be returned. Note that the
specified tabular attributes will be the ‘source’ of the tabular link, and there may be tables in the chain
with no attributes.

This operation performs no subset filtering.

* **Parameters:**
  * **target_table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **link_direction** – str (Which direction to follow links in: `Both` (default), `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)] (Path of tabular attributes to follow - if `None`,
    all paths are followed)
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_links"></a>

#### set_links(link_name, records)

Adds the specified records to the named record link group and flags those links for update. Links that are not
set through this method will not be updated on the server.

* **Parameters:**
  * **link_name** – str
  * **records** – Iterable[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.decache_attributes"></a>

#### decache_attributes()

Removes all attributes from the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), replacing the `attributes` property with an empty
dictionary.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.decache_links"></a>

#### decache_links()

Removes all links from the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), setting the `links` property to `None`.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.is_folder"></a>

#### *property* is_folder

Whether the record is a [`RecordType.Folder`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder) type.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.release_state"></a>

#### *property* release_state

Release state of the record. Allowed values are ‘Released’, ‘Superseded’, ‘Withdrawn’, ‘Unreleased’,
‘Unversioned’ or ‘Unknown’.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.record_history"></a>

#### *property* record_history

Details about the record history. Includes user, datetime, and notes associated with events of the record’s
life cycle.

* **Returns:**
  [`RecordVersionHistory`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_record_release_state"></a>

#### refetch_record_release_state()

Fetches the record’s release state from the server. Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_versions"></a>

#### *property* all_versions

Returns all versions or the record as dictionary of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects indexed by version number, and the
letter ‘v’, e.g. ‘v1’ or ‘v2’. In a version controlled table this can be many, and in a non-version-controlled
table there will only ever be one, with the key ‘v0’.

* **Returns:**
  Dict[str, [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_record_versions"></a>

#### refetch_record_versions()

Refetches version information and all visible versions of the record for this user.

* **Return None:**

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.delete_or_withdraw_record_on_server"></a>

#### delete_or_withdraw_record_on_server(withdrawal_notes=None)

Deletes the record from the server, or withdraws it from a version-controlled table. Makes a Service Layer call.

* **Parameters:**
  **withdrawal_notes** – Optional[str], withdrawal revision notes.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_available_exporters"></a>

#### get_available_exporters(package=None, model=None, applicability_tag=None)

Returns exporters available for this record filtered by package, model, and applicability tag value.

* **Parameters:**
  * **package** – str (Name of target FEA analysis package, for example ‘NX 10.0’ or ‘CATIA V5’)
  * **model** – str (Material model type, for example ‘Isotropic’ or ‘Linear, temperature-independent,
    isotropic, thermal, plastic’)
  * **applicability_tag** – str (Tag that identifies the MI applications an exporter is intended to be used with,
    for example, ‘MIMaterialsGateway’ or ‘MIViewer’)
* **Returns:**
  List[[`Exporter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history"></a>

#### *property* data_revision_history

Data revision history for all attributes, indexed by attribute name.

* **Returns:**
  Dict[str,
  [`DataRevisionHistory`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.move_to"></a>

#### move_to(new_parent)

Moves the record and all its descendants to a new parent.

The provided new parent must be a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) of type [`RecordType.Folder`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder) or
[`RecordType.Generic`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Generic), or a [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) to move the record at the root of the table.

Some cached properties are cleared after the record has been moved, as they would be out-of-date:

* [`Record.pseudo_attributes`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.pseudo_attributes) and pseudo-attribute properties
* [`Record.path`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.path)
* [`Record.parent`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent)

They will be dynamically retrieved from the server on property access, or can be manually refreshed via the
following methods:

* [`Record.refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes)
* [`Record.refresh_path()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_path)
* [`Record.find_parent()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.find_parent)
* [`Record.refresh_properties()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_properties)

[`Record.children`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) is not cleared, because children are moved with the parent. Their internal state might
be outdated, and if necessary can be updated via the methods listed above.

`children` properties of the source and target parent are not cleared or updated. This is by design, to
prevent unnecessary updates in scripts performing a large number of record move operations.
To update the list of children of a table (after moving a child record from it or to it), use the method
[`Table.refetch_children()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children).
To update the list of children of a record (after moving a child record from it or to it), use the method
[`Record.refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children).

* **Parameters:**
  **new_parent** – [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) | [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.copy_to"></a>

#### copy_to(destination, record_name=None, release=False)

Creates a copy of the record at the provided location.

Returns a record object that represents the newly created record. The resulting record is added to the
same subsets as the original record, and contains identical attribute values.

#### WARNING
Data validation rules, such as attribute value uniqueness, might prevent record copying.

* **Parameters:**
  * **destination** ([*Record*](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) *or* [*Table*](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)) – Location in the tree where to create the copy.
  * **record_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* *None*) – Record name for the created record. By default, the copied record is created with the same
    name as the original record. If the destination already contains a record with an identical name, use this
    parameter to override the name.
  * **release** ([*bool*](https://docs.python.org/3/library/functions.html#bool)) – Whether to release the created record, defaults to `False`. The argument has no effect for
    records in tables that are not version-controlled.
* **Return type:**
  [Record](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.version_number"></a>

#### *property* version_number

Record version number. This is set to None if the record is in a non version-controlled table.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) | None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.is_writable"></a>

#### *property* is_writable

Whether the current user has write permissions on the record.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_short_name"></a>

#### *property* parent_record_short_name

Short name of the parent record.

If the record is at the root of the table, returns the name of the table.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_name"></a>

#### *property* parent_record_name

Name of the parent record.

If the record is at the root of the table, returns the name of the table.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_history_identity"></a>

#### *property* parent_record_history_identity

History identity of the parent record.

If the record is at the root of the table, returns the history identity of the table root node.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_on"></a>

#### *property* last_modified_on

Datetime of the last modification.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_by"></a>

#### *property* last_modified_by

User who last modified the record.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_on"></a>

#### *property* created_on

Datetime of the record creation.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_by"></a>

#### *property* created_by

User who created the record.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.released_on"></a>

#### *property* released_on

Datetime of the record release.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudo_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudo_attributes).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)
