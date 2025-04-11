# Database

<a id="db-level"></a>

<a id="database"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database"></a>

### *class* Database

Represents an MI database, and provides access to its tables, unit systems, and record link groups.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.mi"></a>

#### *property* mi

MI Session that was used to create or access the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object. Used for any Service Layer calls made
by the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database).

* **Returns:**
  [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.parameters"></a>

#### *property* parameters

Parameters associated with the database, indexed by name.

* **Returns:**
  Dict[str, [`DatabaseParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.refetch_unit_systems"></a>

#### refetch_unit_systems()

Fetches the unit systems associated with the database. Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.dimensionally_equivalent_units"></a>

#### dimensionally_equivalent_units(unit)

Returns all units which are dimensionally equivalent to the specified unit, with conversion factor and offset.
Makes a single call to the Service Layer and caches the results.

* **Example:**
  `db.dimensionally_equivalent_units(unit='kg')` might return
  `{'g': {'factor': 1000.0, 'offset': 0.0}}`.
* **Parameters:**
  **unit** – str
* **Returns:**
  Dict[str, Dict[str, float]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_systems_available"></a>

#### *property* unit_systems_available

Names of unit systems associated with the database.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system"></a>

#### set_unit_system(unit_system, absolute_temperatures=False)

Sets the unit system for the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object. The default unit system is the same as for the database
itself.

#### WARNING
This method is deprecated. Use [`Database.unit_system`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) or [`Database.absolute_temperatures`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

* **Parameters:**
  * **unit_system** – str
  * **absolute_temperatures** – bool (Whether to use absolute temperature units or not)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures"></a>

#### *property* absolute_temperatures

Whether the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) uses absolute temperature units (Kelvin/Rankine) or not (Celsius/Fahrenheit).

Default value is `False`.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.currency"></a>

#### *property* currency

Database currency code.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system"></a>

#### *property* unit_system

Currently selected unit system (default is [`DATABASE_UNIT_SYSTEM`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM)).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_all_link_details_where"></a>

#### get_all_link_details_where(name, table_name=None, to_table_name=None, to_db_key=None, rlg_types=None)

Returns all the named Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail)
objects that match the specified criteria.

#### WARNING
This method is deprecated. Use [`Database.record_link_groups`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).

* **Parameters:**
  * **name** – str (Name of [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object)
  * **table_name** – Optional[str]
  * **to_table_name** – Optional[str]
  * **to_db_key** – Optional[str]
  * **rlg_types** – Optional[List[str]]
* **Returns:**
  list of Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) class

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_link_detail"></a>

#### get_link_detail(name, table_name=None, to_table_name=None, to_db_key=None, rlg_type=None)

Returns the named Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object.
Must resolve to exactly one record link group.

#### WARNING
This method is deprecated. Use [`Database.record_link_groups`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).

* **Parameters:**
  * **name** – str (Name of [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object)
  * **table_name** – str
  * **to_table_name** – str
  * **to_db_key** – str
  * **rlg_type** – str
* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) class

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.link_details"></a>

#### *property* link_details

Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects associated with the database.

#### WARNING
This method is deprecated. Use [`Database.record_link_groups`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).

* **Returns:**
  List[[`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups"></a>

#### *property* record_link_groups

All record link groups in the database.

* **Returns:**
  List[[`LinkGroupDetails`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.db_key"></a>

#### *property* db_key

Database key.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.name"></a>

#### *property* name

Name of the database.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.guid"></a>

#### *property* guid

GUID of the database.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.version_guid"></a>

#### *property* version_guid

Version GUID of the database.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.refresh_tables"></a>

#### refresh_tables()

Performs a Foundation API [`BrowseService.GetTables()`](../foundation/api.md#GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetTables) request and creates a new list of tables with the
response. Also updates the attributes in each table.

Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.tables"></a>

#### *property* tables

Tables associated with the database.

* **Returns:**
  List[[`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.tables_by_name"></a>

#### *property* tables_by_name

Tables in the database, as dictionary keyed by name.

* **Returns:**
  Dict[str, [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.tables_by_guid"></a>

#### *property* tables_by_guid

Tables in the database, as dictionary keyed by GUID.

* **Returns:**
  Dict[str, [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table"></a>

#### get_table(name, subsets=Ellipsis, unit_system=None, absolute_temperatures=None)

Returns the [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with the specified name. Case-insensitive.

If the `subsets` argument is not provided, the default subset is applied to the returned table. Set
`subsets` to an empty set to disable subset filtering.

If the `unit_system` argument is not provided, the currently active unit system is used.

If the `absolute_temperatures` argument is not provided, `absolute_temperatures` is set to `False`.

#### WARNING
The `subsets`, `unit_system`, and `absolute_temperatures` parameters are deprecated. To specify the
active subsets for the table, use [`Table.subsets`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets), [`Table.add_subsets()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.add_subsets), or
[`Table.remove_subsets()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.remove_subsets) on the returned table object. To specify the unit system or whether absolute
temperatures should be used, use [`Database.unit_system`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) or [`Database.absolute_temperatures`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

* **Parameters:**
  * **name** – str
  * **subsets** – Optional[Set[str]] (default value of `...`)
  * **unit_system** – Optional[str] (default value of `None`)
  * **absolute_temperatures** – Optional[bool] (default value of `None`)
* **Returns:**
  [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid"></a>

#### get_table_by_guid(guid, subsets=Ellipsis, unit_system=None, absolute_temperatures=None)

Returns the [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with the specified GUID. Case-insensitive.

If the `subsets` argument is not provided, the default subset is applied to the returned table. Set
`subsets` to an empty set to disable subset filtering.

If the `unit_system` argument is not provided, the currently active unit system is used.

If the `absolute_temperatures` argument is not provided, `absolute_temperatures` is set to `False`.

#### WARNING
The `subsets`, `unit_system`, and `absolute_temperatures` parameters are deprecated. To specify the
active subsets for the table, use [`Table.subsets`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets), [`Table.add_subsets()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.add_subsets), or
[`Table.remove_subsets()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.remove_subsets) on the returned table object. To specify the unit system or whether absolute
temperatures should be used, use [`Database.unit_system`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) or [`Database.absolute_temperatures`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

* **Parameters:**
  * **guid** – str
  * **subsets** – Set[str] (default value of `...`)
  * **unit_system** – str (default value of [`DATABASE_UNIT_SYSTEM`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM))
  * **absolute_temperatures** – bool (default value of `False`)
* **Returns:**
  [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name"></a>

#### search_for_records_by_name(name)

Performs a search on record name across the database. Returns only the [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects whose
short or long names are an exact match for `name`. Case-insensitive. This method searches in the
currently active subsets for each table, and will raise an exception if a table has more than one
active subset.

Makes a separate Service Layer call for each table in the database.

**Note:** Use [`Table.search_for_records_by_name()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_name) to narrow your search to a single table.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text"></a>

#### search_for_records_by_text(text)

Performs a simple text search across the database for the string provided. Returns a list of matching
[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. This method does not apply any subset filtering.

Makes a separate Service Layer call for each table in the database.

**Note:** Use [`Table.search_for_records_by_text()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_text) to narrow your search to a single table.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where"></a>

#### search_for_records_where(list_of_criteria, silent=True)

Performs a search using criteria within tables across the database.

Use [`Table.search_for_records_where()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) to narrow your search to a single table.

Criteria searches can be performed at the database level only if the provided `list_of_criteria` is not
table specific, i.e. all criterion apply to pseudo-attributes.
If any criterion is specific to an attribute, then the criterion is table specific and the search will be
performed on the table.
If the `list_of_criteria` comprise criteria in multiple tables, a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) is raised.

#### NOTE
Tabular column criteria are aggregated by column name when processed server-side, effectively restricting
results to records where a single row must meet all criteria on the same column.
To perform a search with multiple tabular column criteria defined on the same column, and obtain results
where the criteria can be met by individual different rows, perform individual searches for each criterion
and compute the intersection of the resulting lists of records.

If `silent` is True then errors caused by non-existent attributes will be ignored and no results
will be returned, otherwise the method will raise an exception.

* **Parameters:**
  * **list_of_criteria** – List[[`SearchCriterion`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)]
  * **silent** – bool
* **Returns:**
  a list of [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects that match the provided criteria.
* **Return type:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_records_by_ids"></a>

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object for each identifier provided. The returned list of records
will have the same number of elements as the provided list of identifiers. If no record corresponds
to that identifier then the corresponding item in the returned list will be `None`.

Each element in the `record_identifiers` parameter should be a dictionary with one or more of the
following (sets of) references in priority order:

1. `vguid` (Record GUID - uniquely identifies specific version of record)
2. `history_identity` (Record history identity - uniquely identifies record only), and optionally
   `version_number` (Record version number)
3. `hguid` (Record History GUID - uniquely identifies record only)

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

* **Parameters:**
  **record_identifiers** – Sequence[Dict[str, Union[str, int]]]
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_record_by_id"></a>

#### get_record_by_id(hguid=None, vguid=None, history_identity=None, version_number=None)

Returns the [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object with the following (sets of) references in priority order:

1. `vguid` (Record GUID - uniquely identifies specific version of record)
2. `history_identity` (Record history identity - uniquely identifies record only), and optionally
   `version_number` (Record version number)
3. `hguid` (Record History GUID - uniquely identifies record only)

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

* **Parameters:**
  * **hguid** – str (Record History GUID - uniquely identifies record)
  * **vguid** – str (Record GUID - uniquely identifies record version)
  * **history_identity** – int (Record history identity)
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
