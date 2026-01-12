# Database

<a id="database"></a>

<a id="ansys.grantami.core.mi_tree_classes.Database"></a>

### *class* Database

Represents an MI database, and provides access to its tables, unit systems, and record link groups.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use [`Session.get_db()`](session.md#ansys.grantami.core.mi.Session.get_db)
to access an instance of this class.

<a id="ansys.grantami.core.mi_tree_classes.Database.dimensionally_equivalent_units"></a>

#### dimensionally_equivalent_units(unit)

Returns all units which are dimensionally equivalent to the specified unit, with conversion factor and offset.

* **Parameters:**
  **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The unit to find equivalent units for.
* **Returns:**
  Dictionary mapping unit symbols to their conversion factors and offsets.
* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [float](https://docs.python.org/3/library/functions.html#float)]]

### Notes

Makes a single call to the Service Layer and caches the results.

### Examples

```pycon
>>> db.dimensionally_equivalent_units(unit='kg')  
{'g': {'factor': 1000.0, 'offset': 0.0}}
```

<a id="ansys.grantami.core.mi_tree_classes.Database.get_record_by_id"></a>

#### get_record_by_id(hguid=None, vguid=None, history_identity=None, version_number=None)

Returns the [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object with the following (sets of) references in priority order.

1. `vguid` (record version GUID): Uniquely identifies specific version of record.
2. `history_identity` (record history identity): Uniquely identifies record only, and optionally
   `version_number` (record version number).
3. `hguid` (record history GUID): Uniquely identifies record only.

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

* **Parameters:**
  * **hguid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record history GUID: uniquely identifies record.
  * **vguid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record version GUID: uniquely identifies record version.
  * **history_identity** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Record history identity.
  * **version_number** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Record version number.
* **Returns:**
  Record object with the specified ID.
* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Database.get_records_by_ids"></a>

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object for each identifier provided.

Each element in the `record_identifiers` parameter should be a dictionary with one or more of the
following (sets of) references in priority order:

1. `vguid` (record version GUID): Uniquely identifies specific version of record.
2. `history_identity` (record history identity): Uniquely identifies record only, and optionally
   `version_number` (record version number).
3. `hguid` (record history GUID): Uniquely identifies record only.

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

The returned list of records will have the same number of elements as the provided list of identifiers.
If no record corresponds to that identifier then the corresponding item in the returned list will be [`None`](https://docs.python.org/3/library/constants.html#None).

* **Parameters:**
  **record_identifiers** (*Sequence* *[*[*dict*](https://docs.python.org/3/library/stdtypes.html#dict) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *|* [*int*](https://docs.python.org/3/library/functions.html#int) *]* *]*) – Sequence of dictionaries containing record identifiers.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) | [`None`](https://docs.python.org/3/library/constants.html#None)]

### Notes

Makes multiple Service Layer calls depending on number of identifiers provided.

<a id="ansys.grantami.core.mi_tree_classes.Database.get_table"></a>

#### get_table(name)

Returns the [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) object with the specified name.

Case-insensitive.

* **Parameters:**
  **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the table.
* **Return type:**
  [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)
* **Raises:**
  [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If no table with the specified name exists in the database.

<a id="ansys.grantami.core.mi_tree_classes.Database.get_table_by_guid"></a>

#### get_table_by_guid(guid)

Returns the [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) object with the specified GUID.

Case-insensitive.

* **Parameters:**
  **guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – GUID of the table.
* **Return type:**
  [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)
* **Raises:**
  [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If no table with the specified GUID exists in the database.

<a id="ansys.grantami.core.mi_tree_classes.Database.refetch_unit_systems"></a>

#### refetch_unit_systems()

Fetches the unit systems associated with the database.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Database.refresh_tables"></a>

#### refresh_tables()

Performs a Foundation API [`BrowseService.get_tables()`](../foundation_api.md#ansys.grantami.backend.soap.BrowseService.BrowseService.get_tables) request and creates a new list of tables.

Also updates the attributes in each table.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_name"></a>

#### search_for_records_by_name(name)

Performs a search on record name across the database.

Returns only the [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects whose short or long names are an exact match for `name`.
Case-insensitive. This method searches in the currently active subsets for each table, and will raise
an exception if a table has more than one active subset.

* **Parameters:**
  **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name to search for.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]

### Notes

Makes a Service Layer call for each table in the database.

#### SEE ALSO
[`Table.search_for_records_by_name()`](table.md#ansys.grantami.core.mi_tree_classes.Table.search_for_records_by_name)
: Searches within a single table.

<a id="ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_text"></a>

#### search_for_records_by_text(text)

Performs a simple text search across the database for the string provided.

Returns a list of matching [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects. This method does not apply any subset filtering.

* **Parameters:**
  **text** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Text to search for.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]

### Notes

Makes a Service Layer call for each table in the database.

#### SEE ALSO
[`Table.search_for_records_by_text()`](table.md#ansys.grantami.core.mi_tree_classes.Table.search_for_records_by_text)
: Searches within a single table.

<a id="ansys.grantami.core.mi_tree_classes.Database.search_for_records_where"></a>

#### search_for_records_where(list_of_criteria, silent=True)

Performs a search using criteria within tables across the database.

Use [`Table.search_for_records_where()`](table.md#ansys.grantami.core.mi_tree_classes.Table.search_for_records_where) to narrow your search to a single table.

Criteria searches can be performed at the database level only if the provided `list_of_criteria` is not
table specific, i.e. all criterion apply to pseudo-attributes.

If any criterion is specific to an attribute, then the criterion is table specific and the search will be
performed on the table.

* **Parameters:**
  * **list_of_criteria** (list[[`SearchCriterion`](supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion)]) – List of search criteria.
  * **silent** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *default: True*) – Whether to ignore errors caused by non-existent attributes.
* **Returns:**
  A list of Record objects that match the provided criteria.
* **Return type:**
  list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the `list_of_criteria` comprise criteria in multiple tables.
  * [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If the search criteria include an attribute that does not exist in the database and `silent` is
        [`False`](https://docs.python.org/3/library/constants.html#False).

### Notes

Makes a Service Layer call for each table in the database.

Tabular column criteria are aggregated by column name when processed server-side, effectively restricting
results to records where a single row must meet all criteria on the same column.

To perform a search with multiple tabular column criteria defined on the same column, and obtain results
where the criteria can be met by individual different rows, perform individual searches for each criterion
and compute the intersection of the resulting lists of records.

<a id="ansys.grantami.core.mi_tree_classes.Database.absolute_temperatures"></a>

#### *property* absolute_temperatures *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the [`Database`](#ansys.grantami.core.mi_tree_classes.Database) uses absolute temperature units (Kelvin/Rankine) or not (Celsius/Fahrenheit).

Default value is [`False`](https://docs.python.org/3/library/constants.html#False).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_tree_classes.Database.currency"></a>

#### *property* currency *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Database currency code.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Database.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Database key.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Database.guid"></a>

#### *property* guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

GUID of the database.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Database.mi"></a>

#### *property* mi *: [Session](session.md#ansys.grantami.core.mi.Session)*

Granta MI Session used to create or access the [`Database`](#ansys.grantami.core.mi_tree_classes.Database) object.

Used for any Service Layer calls made by the [`Database`](#ansys.grantami.core.mi_tree_classes.Database).

* **Returns:**
  The session object.
* **Return type:**
  [`Session`](session.md#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi_tree_classes.Database.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the database.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Database.parameters"></a>

#### *property* parameters *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [DatabaseParameter](supporting.md#ansys.grantami.core.mi_attribute_classes.DatabaseParameter)]*

Parameters associated with the database, indexed by name.

* **Return type:**
  dict[str, [`DatabaseParameter`](supporting.md#ansys.grantami.core.mi_attribute_classes.DatabaseParameter)]

<a id="ansys.grantami.core.mi_tree_classes.Database.record_link_groups"></a>

#### *property* record_link_groups *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[LinkGroupDetails](supporting.md#ansys.grantami.core.mi_meta_classes.LinkGroupDetails)]*

All record link groups in the database.

* **Return type:**
  list[[`LinkGroupDetails`](supporting.md#ansys.grantami.core.mi_meta_classes.LinkGroupDetails)]

<a id="ansys.grantami.core.mi_tree_classes.Database.tables"></a>

#### *property* tables *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[Table](table.md#ansys.grantami.core.mi_tree_classes.Table)]*

Tables associated with the database.

* **Return type:**
  list[[`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)]

<a id="ansys.grantami.core.mi_tree_classes.Database.tables_by_guid"></a>

#### *property* tables_by_guid *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Table](table.md#ansys.grantami.core.mi_tree_classes.Table)]*

Tables in the database, as dictionary keyed by GUID.

* **Return type:**
  dict[str, [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)]

<a id="ansys.grantami.core.mi_tree_classes.Database.tables_by_name"></a>

#### *property* tables_by_name *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Table](table.md#ansys.grantami.core.mi_tree_classes.Table)]*

Tables in the database, as dictionary keyed by name.

* **Return type:**
  dict[str, [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)]

<a id="ansys.grantami.core.mi_tree_classes.Database.unit_system"></a>

#### *property* unit_system *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Currently selected unit system (default is [`DATABASE_UNIT_SYSTEM`](constants.md#ansys.grantami.core.mi_constants.DATABASE_UNIT_SYSTEM)).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_tree_classes.Database.unit_systems_available"></a>

#### *property* unit_systems_available *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Names of unit systems associated with the database.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_tree_classes.Database.version_guid"></a>

#### *property* version_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Version GUID of the database.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
