# Streamlined API Reference

The classes and functions that form the Streamlined API are grouped by database element, to help you find what you need:

<a id="session-level"></a>

## Session level

### Session

### *class* Session(service_layer_url, user_name=None, password=None, domain=None, autologon=None, timeout=300000, existing_session=None, oidc=False, auth_token=None, refresh_token=None, use_stored_token=False, store_password=False, max_retries=0)

Represents a Granta MI Session. Allows the MI Scripting Toolkit to make calls to the Service Layer, and provides
access to and search functions for available databases.

> #### \_\_init_\_(service_layer_url, user_name=None, password=None, domain=None, autologon=None, timeout=300000, existing_session=None, oidc=False, auth_token=None, refresh_token=None, use_stored_token=False, store_password=False, max_retries=0)

> * **Parameters:**
>   * **service_layer_url** – str
>   * **user_name** – str
>   * **password** – str
>   * **domain** – str
>   * **autologon** – bool
>   * **timeout** – int (Maximum time to wait for a response, in milliseconds)
>   * **existing_session** – Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class
>   * **oidc** – bool (Contact Ansys Technical Support for Granta MI OIDC configuration and setup documentation)
>   * **auth_token** – str
>   * **refresh_token** – str
>   * **use_stored_token** – bool
>   * **store_password** – bool (Default value False. Set to True when password is given and needs to be saved
>     for the session’s duration, for example when parallelisation is required.)
>   * **max_retries** – int (Default value 0. Maximum number of times to retry requests sent to the Service Layer.)
> * **Returns:**
>   None

#### update(records, update_attributes=True, update_links=False, refresh_attributes=True, include_binary_data_in_refresh=False, notes=None, release_notes=None)

Pushes any changes in the specified records (including adding newly-created records) to the server.
Returns a list of successfully imported [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. If refresh_attributes
set to True, the imported records’ attributes are exported after the update is complete.

If `include_binary_data_in_refresh` is set to False (default), the export will not fetch the binary data
representing the request File and Picture attributes and will instead export URLs (see the
[`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) documentation for more information on how to use the URL to access the data). This
setting is recommended for large files and pictures, or if the binary data itself is not required.

To summarize how the file and picture data can be accessed:

* `include_binary_data_in_refresh = False` (default): The [`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data_in_refresh = True`: The [`BinaryType.binary_data`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save) methods are all available to access and save
  the binary data. The [`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is empty and returns `None`.

#### WARNING
If `include_binary_data_in_refresh` is set to False, the `binary_data` property and `save()` method are
both still available for backwards compatibility. However, they will download the data from Granta MI on
demand for each attribute value. A warning will be generated each time this occurs, but may only occur once
due to the Python warning configuration settings.

This behavior is likely to have a significant performance impact, and so it is recommended that if access to
the binary data is required without a subsequent HTTP GET request, you should specify
`include_binary_data_in_refresh = True`.

On-demand access to attribute values without using [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is unaffected.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **update_attributes** – bool (default value of True)
  * **update_links** – bool (default value of False)
  * **refresh_attributes** – bool (default value of True)
  * **include_binary_data_in_refresh** – bool (default value of False)
  * **notes** – str (default value of None). Revision notes for the update. Applies to all records in the update.
  * **release_notes** – str (default value of None). Version release notes for the update. Applies to all records flagged for release in the update.
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### update_links(records)

Pushes any changes in the links of the specified records (including newly-created records) to the server.
Returns a list of successfully modified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. All source and target records must be exported
to/from the server before being linked.

* **Parameters:**
  **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### spawn_session()

Creates a new Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) object using the credentials
of the current [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session).

* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class

#### *property* viewer_base_url

MI Viewer URL associated with the Service Layer.

* **Returns:**
  str

#### can_connect()

Checks whether credentials have been provided to the server.

* **Returns:**
  bool

#### assert_can_run_parallelised()

Throws if a task cannot run in parallel mode with current session.

#### connect(spawn_new_connection=True)

Returns a Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) object using the current
[`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session)’s credentials.

* **Parameters:**
  **spawn_new_connection** – bool (default value True)
* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class

#### persist_oidc_token()

Stores a refresh token in the credential manager for your system for unattended later use. The `keyring`
package uses system-managed storage, and supports the following credential managers:

* Windows Credential Manager
* macOS Keychain
* Freedesktop Secret Service
* KDE4 and KDE5 KWallet

* **Returns:**
  None

#### refetch_dbs()

Fetches the list of databases from the server. Makes a Service Layer call.

* **Returns:**
  None

#### *property* dbs

List of databases on the server.

* **Returns:**
  List[[`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

#### *property* dbs_by_key

Dict of databases on the server, keyed by database key

* **Returns:**
  Dict[str, [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

#### *property* dbs_by_guid

Dict of databases on the server, keyed by database GUID

* **Returns:**
  Dict[str, [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

#### get_db(name=None, db_key=None, guid=None, version_guid=None)

Returns the database matching the specified criteria. Provide at least one of:

> * Database name: `name`
> * Database key: `db_key`
> * Database GUID: `guid`
> * Database Version GUID: `version_guid`

Raises a KeyError if multiple databases are found for the same criteria. Raises a KeyError if no databases are
found matching the provided criteria.

* **Parameters:**
  * **name** – str
  * **db_key** – str
  * **guid** – str
  * **version_guid** – str
* **Returns:**
  [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object

#### search_for_records_by_name(name)

Searches by record name over all databases
(uses [`Database.search_for_records_by_name()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name)).
Makes a Service Layer call for each table in each database.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### search_for_records_by_text(text)

Performs a simple text search over all databases
(uses [`Database.search_for_records_by_text()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text)).
Makes a Service Layer call for each table in each database.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### records_from_string(text, use_strict_version=False)

Generates [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a string in MI clipboard format
(version 12 or higher).

#### NOTE
Required string format is .tsv with column headers RecordHistoryGuid, RecordGuid, Table,
DatabaseKey and RecordFullName.

* **Parameters:**
  * **text** – str
  * **use_strict_version** – bool [Deprecated] - If True, return only the specified version of the record (if you
    do not have permission, the item will be ‘None’). If False, return the latest visible version of the record.
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### get_record_by_id(db_key, hguid=None, vguid=None, history_identity=None, identity=None, version_number=None)

Returns the record with the specified ID from the database specified by `db_key`. This
method resolves records with the following (sets of) references in priority order:

1. `vguid` (Record GUID - uniquely identifies specific version of record)
2. `history_identity` (Record history identity - uniquely identifies record only), and optionally
   `version_number` (Record version number)
3. `hguid` (Record History GUID - uniquely identifies record only)

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

* **Parameters:**
  * **db_key** – str
  * **hguid** – str (Record History GUID, uniquely identifies record)
  * **vguid** – str (Record GUID, uniquely identifies record version)
  * **history_identity** – int (Record history identity)
  * **identity** – int [Deprecated] (Record identifier)
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object for each identifier provided. The returned list of records
will have the same number of elements as the provided list of identifiers. If no record corresponds
to that identifier then the corresponding item in the returned list will be `None`.

Each element in the `record_identifiers` parameter should be a dictionary with the `db_key` entry.
Additionally, it must contain one or more of the following (sets of) references in priority order:

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
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### bulk_fetch_release_states(records, batch_size=100, parallelise=False, max_num_threads=6)

Fetches and populates the release states of the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
* **Returns:**
  None

#### bulk_delete_or_withdraw_records(records, batch_size=100, parallelise=False, max_num_threads=6, update_release_states=False, withdrawal_notes=None)

Deletes records from the server (or withdraws them, if in a version-controlled table). Record release states
can also be updated using this method.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
  * **update_release_states** – bool
  * **withdrawal_notes** – Optional[str]
* **Returns:**
  None

#### get_async_job_queue(queue_url=None, verify_ssl=True, ssl_ca_bundle=None)

Creates an [`AsyncJobQueue`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJobQueue) object from this [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session).

* **Parameters:**
  * **queue_url** – str (URL of the Job Queue if not the same as the Service Layer, extracted from `mi_session`
    otherwise)
  * **verify_ssl** – bool (Whether to verify SSL connections to the remote server; `True` by default)
  * **ssl_ca_bundle** – Union[str, pathlib.Path] (optional) (Path to custom CA bundle (.crt or .pem); use if your
    MI installation has a self-signed certificate which is not trusted by the *requests* module)
* **Returns:**
  [`AsyncJobQueue`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJobQueue) object

#### NOTE
On Linux platforms the queue URL must be the **Fully-Qualified Domain Name** (FQDN), if your
`mi_session` uses an unqualified URL you must provide the FQDN via the `queue_url` parameter. For example
`http://machinename/mi_servicelayer` is not valid, and must be replaced with
`http://machinename.domain/mi_servicelayer`.

#### WARNING
From version 3.2 onwards, AsyncJobQueue is distributed as a separate package that must be installed
alongside MI Scripting Toolkit if you require this functionality. See the MI Scripting Toolkit Installation
Guide for instructions.

### AttributeFetcher

### *class* AttributeFetcher(table, batch_size=100, attributes=None, records=None, max_parallel_threads=6, include_binary_data=False)

Bulk exporter for record data. Fetches data values for all named [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) and
[`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) objects from the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects and [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

Set `attributes` to  `None` to export all record data.

A class method executes the data export, allowing the [`AttributeFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher) to be edited post-creation.

#### \_\_init_\_(table, batch_size=100, attributes=None, records=None, max_parallel_threads=6, include_binary_data=False)

* **Parameters:**
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **batch_size** – int (default value of 100)
  * **attributes** – List[Union[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition), [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition), str]]
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
  * **include_binary_data** – bool (default value of False)
* **Returns:**
  None

#### *property* records

List of records to be fetched (exported).

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### *property* attribute_list

List of attributes for which data will be fetched (exported).

* **Returns:**
  List[Union[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition), [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition)]]

#### fetch_attribute_data(parallelise=False)

Fetch the attribute data for the provided records and attributes, and populate the corresponding
[`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) objects for each record.

* **Parameters:**
  **parallelise** – bool
* **Returns:**
  None

### AssociatedRecordFetcher

### *class* AssociatedRecordFetcher(table, records, target_table, link_direction='Both', attribute_path=None, batch_size=100)

Bulk fetcher for associated records. Fetches all [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects via association chains from the specified
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects in the target [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Provides means to choose the direction that association chains
are followed, and to specify a list of tabular attributes which are chained together.

A class method executes the fetch, allowing the [`AssociatedRecordFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher) to be edited post-creation.

#### \_\_init_\_(table, records, target_table, link_direction='Both', attribute_path=None, batch_size=100)

* **Parameters:**
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **target_table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
  * **link_direction** – str (`Both`, `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]
  * **batch_size** – int (default value of 100)
* **Returns:**
  None

#### fetch_associated_records(parallelise=False, max_parallel_threads=6)

Fetch the associated records in the specified [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) from the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Return a
list of dictionaries with `source_record` and `associated_records` fields for each provided
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record).

* **Parameters:**
  * **parallelise** – [`bool`](https://docs.python.org/3/library/functions.html#bool)
  * **max_parallel_threads** – [`int`](https://docs.python.org/3/library/functions.html#int) (default 6)
* **Returns:**
  List[Dict[str, Union[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]]]

### LinkFetcher

### *class* LinkFetcher(table, batch_size=100, records=None, link_groups=None, filter_subsets=True)

Bulk record link fetcher (exporter). Fetches and populates record link groups for the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
objects in the specified [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Set `link_groups` to `None` to fetch all record link groups.

Set `filter_subsets` to `True` to return records that are in the default subsets of the target table.
Set it to `False` to search with no filtering by subset.

#### \_\_init_\_(table, batch_size=100, records=None, link_groups=None, filter_subsets=True)

* **Parameters:**
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **link_groups** – List[str]
  * **filter_subsets** – bool (default value of True)
* **Returns:**
  None

#### *property* link_groups

List of link groups to export.

* **Returns:**
  List[str]

#### *property* records

List of records to fetch link groups for.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### fetch_linked_records(parallelise=False, max_parallel_threads=6)

Perform the bulk fetch (export). Batches Service Layer calls into efficient blocks, then populates
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object pseudo-attributes.

* **Parameters:**
  * **parallelise** – bool
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

### ReleaseStateFetcher

### *class* ReleaseStateFetcher(session, records, batch_size=100, max_parallel_threads=6)

Allows record release states to be fetched from the server in bulk.

The list of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects, batch size, and number of threads in parallel can be edited post-creation.

A class method fetches the release states and populates the relevant [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) properties.

#### \_\_init_\_(session, records, batch_size=100, max_parallel_threads=6)

* **Parameters:**
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

#### *property* records

List of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects to be processed.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### fetch_release_states(parallelise=False)

Fetches the release states of the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from the server, and populates their
relevant properties.

* **Parameters:**
  **parallelise** – bool (splits operation into multiple threads if set to `True`)
* **Returns:**
  None

### BulkRecordDeleterWithdrawer

### *class* BulkRecordDeleterWithdrawer(session, records, batch_size=100, max_parallel_threads=6, withdrawal_notes=None)

Allows for bulk deletion or withdrawal or records from the server. Records are withdrawn from
version-controlled tables, otherwise they are deleted.

The deletion/withdrawal is performed by a method on the class; as such, the list of
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects for deletion, batch size, and number of threads in parallel can be edited post-creation.

#### \_\_init_\_(session, records, batch_size=100, max_parallel_threads=6, withdrawal_notes=None)

* **Parameters:**
  * **session** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
  * **withdrawal_notes** – Optional[str]
* **Returns:**
  None

#### *property* records

List of records to be deleted or withdrawn.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### delete_or_withdraw(parallelise=False)

Performs the deletion (or withdrawal, if the records are in a version-controlled table).

* **Parameters:**
  **parallelise** – bool (splits operation into multiple threads if `True`)
* **Returns:**
  None

<a id="dbtable-level"></a>

## Database and Table level

### Database

### *class* Database(\_gdl_obj, \_mi)

Represents an MI database, and provides access to its tables, unit systems, and record link groups.

#### \_\_init_\_(\_gdl_obj, \_mi)

* **Parameters:**
  * **\_gdl_obj** – Foundation API [`GRANTA_MIScriptingToolkit.DatabaseDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.DatabaseDetail) class
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
* **Returns:**
  None

#### *property* mi

MI Session that was used to create or access the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object. Used for any Service Layer calls made by
the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database).

* **Returns:**
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

#### *property* parameters

Parameters associated with the database, indexed by name.

* **Returns:**
  Dict[str, [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)]

#### refetch_unit_systems()

Fetches the unit systems associated with the database. Makes a Service Layer call.

* **Returns:**
  None

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

#### *property* unit_systems_available

Names of unit systems associated with the database.

* **Returns:**
  List[str]

#### set_unit_system(unit_system, absolute_temperatures=False)

Sets the unit system for the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object. The default unit system is the same as for the database
itself.

* **Parameters:**
  * **unit_system** – str
  * **absolute_temperatures** – bool (Whether to use absolute temperature units or not)
* **Returns:**
  None

#### *property* absolute_temperatures

Whether the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) uses absolute temperature units (Kelvin/Rankine) or not (Celsius/Fahrenheit).

* **Returns:**
  bool

#### *property* unit_system

Currently selected unit system (default is ‘Database’).

* **Returns:**
  str

#### get_link_detail(name, table_name=None, to_table_name=None, to_db_key=None, rlg_type=None)

Returns the named Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object.
Must resolve to a single object.

* **Parameters:**
  * **name** – str (Name of [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object)
  * **table_name** – str
  * **to_table_name** – str
  * **to_db_key** – str
  * **rlg_type** – str
* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) class

#### *property* link_details

Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects associated with the database.

* **Returns:**
  List[[`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail)]

#### *property* record_link_groups

All record link groups in the database.

* **Returns:**
  List[[`LinkGroupDetails`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails)]

#### *property* db_key

Database key.

* **Returns:**
  str

#### *property* name

Name of the database.

* **Returns:**
  str

#### *property* guid

GUID of the database.

* **Returns:**
  str

#### *property* version_guid

Version GUID of the database.

* **Returns:**
  str

#### refresh_tables()

Updates the list of tables associated with the database. Makes a Service Layer call.

* **Returns:**
  None

#### *property* tables

Tables associated with the database.

* **Returns:**
  List[[`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

#### *property* tables_by_name

Tables in the database, as dictionary keyed by name.

* **Returns:**
  Dict[str, [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

#### *property* tables_by_guid

Tables in the database, as dictionary keyed by GUID.

* **Returns:**
  Dict[str, [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

#### get_table(name, subsets=None, unit_system='Database', absolute_temperatures=False)

Returns the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with the specified name. Case-insensitive.

* **Parameters:**
  * **name** – str
  * **subsets** – Set[str]
  * **unit_system** – str
  * **absolute_temperatures** – bool
* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

#### get_table_by_guid(guid, subsets=None, unit_system='Database', absolute_temperatures=False)

Returns the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with the specified GUID. Case-insensitive.

* **Parameters:**
  * **guid** – str
  * **subsets** – Set[str]
  * **unit_system** – str
  * **absolute_temperatures** – bool
* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

#### search_for_records_by_name(name)

Performs a search on record name across the database. Returns only the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects whose
short or long names are an exact match for `name`. Case-insensitive.

Makes a separate Service Layer call for each table in the database.

**Note:** Use [`Table.search_for_records_by_name()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_name) to narrow your search to a single table.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### search_for_records_by_text(text)

Performs a simple text search across the database for the string provided. Returns a list of matching
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.

Makes a separate Service Layer call for each table in the database.

**Note:** Use [`Table.search_for_records_by_text()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_text) to narrow your search to a single table.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### search_for_records_where(list_of_criteria, \*\*kwargs)

Performs a search against a single criterion or multiple criteria across the database. Returns a list of
matching [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.

**Note:** Use [`Table.search_for_records_where()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) to narrow your search to a single table.

* **Parameters:**
  * **list_of_criteria** – List[[`SearchCriterion`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)]
  * **kwargs** – Set `silent=True` to ignore errors due to attributes not existing
    (returns `[]` if `silent==True` and no attributes exist)
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object for each identifier provided. The returned list of records
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
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### get_record_by_id(hguid=None, vguid=None, history_identity=None, identity=None, version_number=None)

Returns the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object with the following (sets of) references in priority order:

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
  * **identity** – int [Deprecated] (Record identifier)
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

### Table

### *class* Table(\_gdl_obj, \_mi, unit_system='Database', absolute_temperatures=False)

Represents an MI table, and provides access to records (particularly searching on record properties),
exporters and attribute definitions.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

#### \_\_init_\_(\_gdl_obj, \_mi, unit_system='Database', absolute_temperatures=False)

* **Parameters:**
  * **\_gdl_obj** – Foundation API [`GRANTA_MIScriptingToolkit.TableDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.TableDetail) class
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **unit_system** – str (Unit system to use in this table, e.g. ‘UK Imperial’)
  * **absolute_temperatures** – bool (Whether to use absolute temperatures)
* **Returns:**
  None

#### *property* unit_system

Unit system currently in use.

* **Returns:**
  str

#### set_display_unit(attribute, unit_symbol)

Sets the display unit for a `POIN` or `RNGE` attribute. This only affects display, not import or
FEA exporters.

* **Parameters:**
  * **attribute** – Union[str, AttributeDefinitionPoint, AttributeDefinitionRange] (str must be the attribute
    name)
  * **unit_symbol** – str
* **Returns:**
  None

#### reset_display_unit(attribute)

Resets the display unit for a `POIN` or `RNGE` attribute back to the unit system default.

* **Parameters:**
  **attribute** – Union[str, AttributeDefinitionPoint, AttributeDefinitionRange] (str must be the attribute
  name)
* **Returns:**
  None

#### *property* min_max_type

How table-wide minimum and maximum values of point (`POIN`), integer (`INPT`), range (`RNGE`) and
date-time (`DTTM`) attributes in the table are calculated:

* `None`: Does not calculate values (can improve performance when loading tables)
* `Approximate` (default): Uses a fast, approximate algorithm
* `Exact`: Takes account of current subset and permissions (can be slow on large tables)

Setting this property refreshes all attributes in the table, and makes a Service Layer call.

* **Returns:**
  str

#### refresh_subsets()

Fetches the list of subsets which can be applied to this table. Makes a Service Layer call.

* **Returns:**
  None

#### *property* subsets_available

Subsets which can be applied to this table.

* **Returns:**
  Set[str]

#### *property* subsets

Subsets that are currently applied to the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object. Used for record creation and searching.

* **Returns:**
  Set[str]

#### add_subsets(values)

Adds single or multiple subsets to the list of subsets currently applied to the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object.

* **Parameters:**
  **values** – Set[str], Tuple[str] or List[str]
* **Returns:**
  None

#### remove_subsets(values)

Removes single or multiple subsets from the list of subsets currently associated with the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object.

* **Parameters:**
  **values** – Set[str], Tuple[str] or List[str]
* **Returns:**
  None

#### all_records(include_folders=False, include_generics=True)

Returns a flattened list of all records in the table and populates
the `children` property of each [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object.
Makes a Service Layer call.

* **Parameters:**
  * **include_folders** – bool
  * **include_generics** – bool
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### search_for_records_by_text(text)

Performs a simple text search within the table for the specified string. Returns a list of matching
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Makes a Service Layer call.

**Note:** Use [`Database.search_for_records_by_text()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) to search across the whole database.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### search_for_records_where(list_of_criteria, \*\*kwargs)

Performs a search against a single criterion or multiple criteria within the table. Returns a list of matching
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.

#### NOTE
Use [`Database.search_for_records_where()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) to search across the whole database.

* **Parameters:**
  * **list_of_criteria** – List[[`SearchCriterion`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)]
  * **kwargs** – Set `silent=True` to ignore errors due to attributes not existing (returns `[]` if
    `silent==True` and no attributes exist)
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### *property* name

Name of the table.

* **Returns:**
  str

#### *property* guid

GUID of the table.

* **Returns:**
  str

#### *property* db_key

Parent database key.

* **Returns:**
  str

#### refresh_attributes()

Performs a Foundation API [`BrowseService.GetAttributeDetails()`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetAttributeDetails) request and creates a new set
of attributes for the table from the results.
Makes a Service Layer call.

* **Returns:**
  None

#### *property* layouts

Fetch and view the layouts available in this table for Granta products.

* **Returns:**
  Dict[str, [`TableLayout`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout)]

#### *property* attributes

All attributes included in the table schema, indexed by name. Meta-attributes are accessible through the
`meta_attributes` property of their parent attribute.

* **Returns:**
  Dict[str, [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

#### *property* mi

MI Session that was used to create or access the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object. Used for any Service Layer calls made by
the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

* **Returns:**
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

#### *property* database

[`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) in which the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) is defined.

* **Returns:**
  [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object

#### get_attribute_definition(name=None, identity=None)

Returns the [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object specified by `name` or the identifier `identity`.
Meta-attributes are also returned if the identifier is provided.

* **Parameters:**
  * **name** – str (Name of the [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object)
  * **identity** – int (Attribute identifier)
* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or List[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object for each identifier provided. The returned list of records
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
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### get_record_by_id(history_identity=None, hguid=None, vguid=None, identity=None, version_number=None)

Returns the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object with the following (sets of) references in priority order:

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
  * **identity** – int [Deprecated] (Record identifier)
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

#### get_record_by_lookup_value(attribute_name, lookup_value)

Returns a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object specified by attribute name and a exact match for a short text string
(lookup value), provided that:

* The `lookup_value` matches exactly one record in the table.
* The record is in the default subset of the table.

* **Parameters:**
  * **attribute_name** – str
  * **lookup_value** – str
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

#### *property* children

Return the children of the Table node. Analogous to [`Record.children`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children), this returns all the records one
level from the Table root.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### search_for_records_by_name(name)

Performs a search on record name within the table. Returns only the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects whose
short or long names are an exact match for `name`. Case-insensitive.

#### NOTE
Use [`Database.search_for_records_by_name()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name) to search across the whole database.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### create_empty_attribute_value(definition)

Create an empty [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) instance for an attribute from its
[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition).
This can subsequently be assigned to a record for import.

* **Parameters:**
  **definition** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
* **Returns:**
  [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) object

#### create_record(name, parent=None, short_name=None, attributes=None, folder=False, subsets=None, release_record=False, color=RecordColor.InheritFromParent)

Creates a new [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object in the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). The record will not exist
in MI, or be able to be assigned as a parent, until it is pushed to the server.

* **Parameters:**
  * **name** – str (Long name)
  * **parent** – [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **short_name** – str
  * **attributes** – Dict[str,
    [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]
  * **folder** – bool (Whether the record will be Folder type)
  * **release_record** – bool (Whether the record will be released when it is next updated)
  * **subsets** – Set[str] (List of subsets the record will belong to)
  * **color** – Union[str, RecordColor] (Record color - Inherits from parent by default)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

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

* **Parameters:**
  **paths** – List[Dict[str, Union[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), str, None, List[str]]]]
* **Returns:**
  List[Tuple[dict, [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

#### path_from(starting_node, tree_path, end_node=None, color=RecordColor.InheritFromParent)

Ensures that all the folders in a specified path are available, and creates any that do not already exist.

* **Parameters:**
  * **starting_node** – A [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or `None`. Identifies the node under which the new path will start.
    Set to `None` to start the path at the root of the table. Set to an existing
    record/folder to create the path from the specified node.
  * **tree_path** – List[str] The names of the folders in the path, e.g. `['Polymers', 'Plastics', 'Thermoplastics', ...]`.
    Folders in the path will be created if they don’t already exist. Existing records on the path will be
    converted to generic records.
  * **end_node** – str (Optional) The name of a new record that will be created below the last path node.
  * **color** – Union[str, [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)] (Optional) Sets the color of all folders and records in the path.
* **Returns:**
  The [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object at the end of the path: the created record if `end_node` has been specified,
  otherwise the last folder in the path.

#### WARNING
Support for string literal `Root` and  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) objects as input to `starting_node` is
deprecated and will be removed in a future release. To create a path at the root of
the table, set `starting_node` to `None`.

#### get_records_from_path(starting_node, tree_path, use_short_names=False)

Return all of the records that are found at the end of the path from a specified node.

* The starting node identifies the node immediately above the path. To start the path at the top of the tree,
  set `starting_node` to `None`. To start the path under any other node in the tree,
  specify a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) as the `starting_node`.
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
  * **starting_node** – any [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) in the table tree. To start the path at the root node of the table
    tree, set to `None`.
  * **tree_path** – a list of strings specifying the names of the records in the path. May include ‘None’ as a
    wildcard.
  * **use_short_names** – a boolean that specifies whether the strings in the path are the record short names
* **Returns:**
  returns a list of records
* **Return type:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### WARNING
Support for string literal `Root` and  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) objects as input to `starting_node` is
deprecated and will be removed in a future release. To find records at a path starting at the root of the
table, set `starting_node` to `None`.

#### bulk_fetch(records, attributes=None, batch_size=100, parallelise=False, max_num_threads=6, include_binary_data=False)

Populates data values for all named [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) and [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) objects in
the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Set `attributes` to  `None` to export all record data.
Attribute values for requested `attributes` are added to [`Record.attributes`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) dictionary whether the
attribute is populated or not.
Attribute values will not be created for attributes not included in the export via the attributes argument and
trying to access them might raise a [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError).

Meta-attributes can be included in a bulk operation by providing the meta-attribute [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)
in `attributes`. [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) of meta-attributes can be obtained from the parent attribute
[`AttributeDefinition.meta_attributes`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.meta_attributes).

If `include_binary_data` is set to False (default), the export will not fetch the binary data
representing the request File and Picture attributes and will instead export URLs (see the
[`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) documentation for more information on how to use the URL to access the data). This
setting is recommended for large files and pictures, or if the binary data itself is not required.

To summarize how the file and picture data can be accessed:

* `include_binary_data = False` (default): The [`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data = True`: The [`BinaryType.binary_data`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save) methods are both available to access and save
  the binary data. The [`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is empty and returns `None`.

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

* **Parameters:**
  * **attributes** – List[Union[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition),
    [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition), str]]
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
  * **include_binary_data** – bool (default value of False)
* **Returns:**
  None

#### bulk_link_fetch(records, link_groups=None, batch_size=100, parallelise=False, max_num_threads=6, filter_subsets=True)

Fetches and populates record link groups for the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
objects. Set `link_groups` to `None` to fetch all record link groups.

Set `filter_subsets` to `True` to return records that are in the
default subsets of the target table. Set it to `False` to search without
filtering by subset.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **link_groups** – List[str]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
  * **filter_subsets** – bool (default value of `True`)
* **Returns:**
  None

#### bulk_fetch_associated_records(records, target_table, link_direction='Both', attribute_path=None, batch_size=100, parallelise=False, max_num_threads=6)

Fetches records associated with the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a target [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Returns a list
of dictionaries containing the source record and associated records for each [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) provided.

You may specify `link_direction` to only follow tabular links in the specified direction, or provide a list of
[`AttributeDefinitionTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular) objects in `attribute_path` to follow only those tabular links.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **target_table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
  * **link_direction** – str (`Both` (default), `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinitionTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
* **Returns:**
  List[Dict[str, Union[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]]]

#### get_available_exporters(package=None, model=None, applicability_tag=None)

Returns exporters available on the table filtered by package, model, and applicability tag value.

* **Parameters:**
  * **package** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) The target FEA analysis package. For example: ‘NX 10.0’, ‘CATIA V5’.
  * **model** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) The material model type. For example, ‘Isotropic’, ‘Linear, temperature-independent,
    isotropic, thermal, plastic’.
  * **applicability_tag** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) A tag that identifies the applications for which an exporter is intended
    to be used. For example, ‘MIMaterialsGateway’, ‘MIViewer’.
* **Returns:**
  List[[`Exporter`](#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter)]

### LinkGroupDetails

### *class* LinkGroupDetails(link_detail)

Provides access to the properties of a record link group.

#### \_\_init_\_(link_detail)

* **Parameters:**
  **link_detail** – Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) class
* **Returns:**
  None

#### *property* name

Name of the record link group.

* **Returns:**
  str

#### *property* table_to

Name of the table from which the link group originates.

* **Returns:**
  str

#### *property* table_from

Name of the table the link group comes from.

* **Returns:**
  str

#### *property* type

Whether the record link group is ‘static’, ‘cross-database’ or ‘dynamic’.

* **Returns:**
  str

#### *property* reverse_name

Name of the record link group in the return direction.

* **Returns:**
  str

### TableLayout

### *class* TableLayout(name, table)

Provides a JSON-format display of a Granta layout. You can access this through the `layout` property.

#### NOTE
Do not create new instances of this class manually.

#### \_\_init_\_(name, table)

* **Parameters:**
  * **name** – str
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* name

Layout name.

* **Returns:**
  str

#### *property* layout

JSON-formatted version of the layout.

* **Returns:**
  List[Dict[str, Union[str, List[str], Dict[str, Union[str, List[str]]]]]]

#### *property* categories

List of all the categories (headings) in the layout.

* **Returns:**
  List[str]

#### *property* attributes_by_category

Dictionary of attribute lists, indexed by the layout category they are in.

* **Returns:**
  Dict[str, List[str]]

#### *property* link_groups_by_category

Dictionary of link group lists, indexed by the layout category they are in.

* **Returns:**
  Dict[str, List[str]]

#### *property* meta_attributes_by_attribute

Dictionary of meta-attribute lists, indexed by parent attributes.

* **Returns:**
  Dict[str, List[str]]

#### meta_attributes_on(attribute_name)

Returns the list of meta-attributes corresponding to a given attribute in this layout.

* **Parameters:**
  **attribute_name** – str
* **Returns:**
  List[str]

### Exporter

### *class* Exporter(mi, exporter_key)

#### \_\_init_\_(mi, exporter_key)

Represents a Granta MI FEA exporter. FEA exporters are used to export record data from Granta MI into formats
supported by CAD and CAE packages.

* **Parameters:**
  * **mi** – Current [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **exporter_key** – str (Unique identifier for this exporter)
* **Returns:**
  None

#### *property* default_file_extension

Returns the default file extension as defined by the exporter configuration file.

* **Returns:**
  str

#### save(file_path, file_name=None, file_extension=None)

Saves the output of the last FEA export to the path provided using the default naming convention and file
extension for the exporter; specify a file_name or file_extension to override the defaults.

* **Parameters:**
  * **file_path** – str (File path of the form *C:\\Users\\Username\\*)
  * **file_name** – str (*Optional* - Output file name. Does not require a file extension.)
  * **file_extension** – str (*Optional* - Output file extension.)
* **Returns:**
  None

#### *property* default_file_name

Returns the default file name for the last performed export, as defined by the exporter configuration file.

* **Returns:**
  str

#### *property* default_encoding

Returns the default file encoding scheme as defined by the exporter configuration file.

#### NOTE
This is returned as a Python-compatible string (e.g. “cp1252”) rather than the .NET codepage “1252”.

* **Returns:**
  str

#### *property* default_bom

Returns the default byte-order mark as defined by the exporter configuration file. If no BOM is required by
default, this property is `None`.

* **Returns:**
  Union[str, None]

#### get_parameters_required_for_export(records)

Returns a dictionary of all the parameter definitions the Exporter requires to export the data from
the specified list of records, indexed by parameter name.

* **Parameters:**
  **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  Dict[str, [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)]

#### run_exporter(records, stop_before=None, parameter_defs=None, sig_figs=None)

Performs an FEA export on the specified list of records, returning the data representing the records as a string.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **stop_before** – Union[int, str] (Either refers to the index of the transform step (int) or its name (str))
  * **parameter_defs** – Dict[str, [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)]
  * **sig_figs** – int
* **Returns:**
  str (Contains data output by the exporter)

#### export_list_is_valid(records)

Verifies that a list of records is valid for export.

If the exporter was created from a table search, then this method verifies that all records come from this
table. Otherwise, the first record is used to determine which table the exporter belongs to.

* **Parameters:**
  **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  bool (Whether the specified list of records can be exported with this exporter)

<a id="record-level"></a>

## Record level

<a id="recorddatastructure"></a>

### RecordDataStructure

### *class* RecordDataStructure(name, table, short_name=None, color=None)

Provides access to all record properties and record-level methods that are not accessed via
Foundation API [`GRANTA_MIScriptingToolkit.RecordReference`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordReference) objects.

#### \_\_init_\_(name, table, short_name=None, color=None)

* **Parameters:**
  * **name** – str (Long name of record)
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **short_name** – str (Short name of record)
  * **color** – str (Color of the record)
* **Returns:**
  None

#### *property* name

Long name of record.

* **Returns:**
  str

#### *property* mi

MI Session that was used to create or access the record.
Used for any Service Layer calls made by the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object.

* **Returns:**
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

#### *property* table

Parent [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) the record belongs to.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

#### *property* table_name

Name of parent table.

* **Returns:**
  str

#### *property* db_key

Database key for the database the record belongs to.

* **Returns:**
  str

<a id="record"></a>

### Record

### *class* Record(name, table, parent=None, short_name=None, attributes=None, subsets=None, folder=None, record_color=RecordColor.InheritFromParent, release_record=True)

Extends the [`RecordDataStructure`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.RecordDataStructure) class. Stores and provides access to record attributes,
pseudo-attributes, links and children. Provides methods for adding, editing and deleting records,
and importing/exporting record data.

New [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects may be created to represent records that do not currently exist in the database:

* A name, parent table and session must be specified. `name` will become the record’s long name;
  an optional argument can be used to specify the short (tree) name.
* Records created this way will not exist in the host database until the changes have been
  pushed to MI (see [`Session.update()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.update)).

#### NOTE
Do not create new instances of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects for records which are already in the database.
Existing records will have Foundation API classes associated with them, from which the Streamlined API will
automatically generate and return [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects as required.

#### \_\_init_\_(name, table, parent=None, short_name=None, attributes=None, subsets=None, folder=None, record_color=RecordColor.InheritFromParent, release_record=True)

* **Parameters:**
  * **name** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) (Long name for new records)
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **parent** – [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **short_name** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) (Short (tree) name for new records)
  * **attributes** – Dict[[`str`](https://docs.python.org/3/library/stdtypes.html#str), [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]
  * **subsets** – Set[[`str`](https://docs.python.org/3/library/stdtypes.html#str)] (Subsets the record belongs to)
  * **folder** – [`bool`](https://docs.python.org/3/library/functions.html#bool) (Whether the record is ‘Folder’ type)
  * **record_color** – Union[[`str`](https://docs.python.org/3/library/stdtypes.html#str), [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)]
  * **release_record** – [`bool`](https://docs.python.org/3/library/functions.html#bool) (Release state of the record; `True` to release next version)
* **Returns:**
  None

#### *property* subsets

Subsets that the record belongs to.

* **Returns:**
  Set[str]

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

#### *property* color

Color of the record when displayed in MI Viewer and other Granta MI applications.

* **Returns:**
  [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)

#### *property* short_name

Short (tree) name of the record.

* **Returns:**
  str

#### *property* parent

Parent record or table of this record.

* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

#### find_parent()

Finds and sets the parent record or table.

If a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) has been created from a Foundation API [`GRANTA_MIScriptingToolkit.RecordReference`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordReference)
object (for example, an existing database record), its parent may not be defined. This function gets the
Foundation API [`GRANTA_MIScriptingToolkit.TreeRecord`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.TreeRecord) object (if it does not already exist) and uses
it to create and/or set a parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object. If the record is at the highest level, the parent is
set as the host [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object instead.

* **Returns:**
  None

#### *property* history_guid

Record History GUID, if it exists. Records can be uniquely identified by their Record History GUID, which
will return the latest version the user has access to.

* **Returns:**
  str or None

#### *property* record_guid

Record GUID, if it exists. Each version of a record can be uniquely identified by its Record GUID.

* **Returns:**
  str or None

#### *property* id

[Deprecated] Record identifier, if it exists.

* **Returns:**
  int or None

#### *property* history_identity

Record history identity, if it exists.

* **Returns:**
  int or None

#### set_attributes(attributes)

Flags attributes to update on the server when [`Session.update()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.update)
is next called. If [`set_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes) is not called on modified attributes, changes
to those attributes will not be transferred to MI.

* **Parameters:**
  **attributes** – Union[Iterable[AttributeValue]]
* **Returns:**
  None

#### clear_attributes(attributes)

Flags attributes to have their data value on the server deleted when [`Session.update()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.update)
is next called. Does not delete the local value of flagged attributes, only the data on MI. Supersedes
previous [`set_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes) calls.

* **Parameters:**
  **attributes** – Union[Iterable[AttributeValue]]
* **Returns:**
  None

#### *property* viewer_url

The MI Viewer URL for the record.

* **Returns:**
  str

#### *property* path

Browse tree path for the record as a list of folder short names.

* **Returns:**
  List[str]

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

* **Returns:**
  Dict[str, [`PseudoAttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue)]

#### refresh_path()

Re-calculates the record path within the current table. Makes a Service Layer call.

* **Returns:**
  None

#### *property* exists_on_server

Whether the record exists on the server (True) or has been created in memory (False).

* **Returns:**
  bool

#### refresh_properties()

Refreshes the Foundation API [`GRANTA_MIScriptingToolkit.TreeRecord`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.TreeRecord) object associated with the
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), if it has one.
Makes a Service Layer call.

* **Returns:**
  None

#### refetch_children()

Refreshes the list of children belonging to the record. Makes a Service Layer call.

* **Returns:**
  None

#### refresh_attributes()

Checks whether the record’s attributes have changed on the server, and updates the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object if
required. Can also be used to populate attributes. Makes a Service Layer call.

Always includes binary data in the response. Use the [`bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method if URL
data representation is required.

* **Returns:**
  None

#### refetch_pseudos()

Fetches pseudo-attribute data for this record, and updates subsets for the record if not set.
Makes a Service Layer call.

* **Returns:**
  None

#### *property* attributes

Attributes associated with the record, indexed by attribute name.

* **Returns:**
  Dict[str,
  [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]

#### get_attributes(names=None, types=None, include_attributes=True, include_metas=False, include_pseudos=False, empty=None)

Retrieve a list of attributes from the `record.attributes` dictionary. You can narrow the results by
specifying the attribute names or data types, or the required attribute categories (attribute,
meta-attribute, or pseudo-attribute).

If the `record.attributes` dictionary is empty when `get_attributes` is called, it will be
populated before retrieving any attributes.

* **Example:**
  `r.get_attributes(names=['Density', 'Stress-Strain'], types=['POIN', 'FUNC'], include_metas=True)`
  will return all point or functional series attributes or meta-attributes named Density or Stress-Strain
  from the record.
* **Parameters:**
  * **names** – List[str]
  * **types** – List[str] (Attribute data types; allowed values are: DISC, DTTM, FILE, FUNC, HLNK, INPT, LOGI,
    LTXT, PICT, POIN, RNGE, STXT, TABL)
  * **include_attributes** – bool (whether to retrieve attributes that are not meta-attributes or
    pseudo-attributes; `True` by default)
  * **include_metas** – bool (whether to retrieve meta-attributes; `False` by default)
  * **include_pseudos** – bool (whether to retrieve pseudo-attributes; `False` by default)
  * **empty** – bool (whether to check if the returned attributes are populated)
* **Returns:**
  List[Union[[`PseudoAttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue),
  [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]]

#### *property* type

Record type, one of `Folder`, `Generic`, or `Record`. Record type can only be set to `Folder` or
`Record` through the MI Scripting Toolkit. If it is set on an existing record, it will have no effect.

* **Returns:**
  str

#### all_children(include_folders=False, include_generics=True)

Returns a flattened list of all children of a record and populates
the `children` property of each [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object.
Makes a Service Layer call.

* **Parameters:**
  * **include_folders** – bool
  * **include_generics** – bool
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### *property* children

Children of the current record, one level below.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### *property* links

Link groups for this [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object, and the records they link to. Smart links may be viewed but not
edited through the `links` property.

* **Returns:**
  Dict[str, Set[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

#### get_associated_records(target_table, link_direction='Both', attribute_path=None)

Gets all records in a target table that are linked to the current [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object via tabular data
association chains. This can be filtered by link direction and to a specific path.

If `attribute_path` is provided, then only records from that exact path will be returned. Note that the
specified tabular attributes will be the ‘source’ of the tabular link, and there may be tables in the chain
with no attributes.

* **Parameters:**
  * **target_table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **link_direction** – str (Which direction to follow links in: `Both` (default), `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)] (Path of tabular attributes to follow - if `None`, all
    paths are followed)
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### set_links(link_name, records)

Adds the specified records to the named record link group and flags those links for update. Links that are not
set through this method will not be updated on the server.

* **Parameters:**
  * **link_name** – str
  * **records** – Iterable[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  None

#### decache_attributes()

Removes all attributes from the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), replacing the `attributes` property with an empty
dictionary.

* **Returns:**
  None

#### decache_links()

Removes all links from the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), setting the `links` property to `None`.

* **Returns:**
  None

#### *property* is_folder

Whether the record is a ‘Folder’ type.

* **Returns:**
  bool

#### *property* release_state

Release state of the record. Allowed values are ‘Released’, ‘Superseded’, ‘Withdrawn’, ‘Unreleased’,
‘Unversioned’ or ‘Unknown’.

* **Returns:**
  str

#### *property* record_history

Details about the record history. Includes user, datetime, and notes associated with events of the record’s
life cycle.

* **Returns:**
  [`RecordVersionHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory)

#### refetch_record_release_state()

Fetches the record’s release state from the server. Makes a Service Layer call.

* **Returns:**
  None

#### *property* all_versions

Returns all versions or the record as dictionary of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects indexed by version number, and the
letter ‘v’, e.g. ‘v1’ or ‘v2’. In a version controlled table this can be many, and in a non-version-controlled
table there will only ever be one, with the key ‘v0’.

* **Returns:**
  Dict[str, [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### refetch_record_versions()

Refetches version information and all visible versions of the record for this user.
Makes a Service Layer call.

* **Return None:**

#### delete_or_withdraw_record_on_server(withdrawal_notes=None)

Deletes the record from the server, or withdraws it from a version-controlled table. Makes a Service Layer call.

* **Parameters:**
  **withdrawal_notes** – Optional[str], withdrawal revision notes.
* **Returns:**
  None

#### get_available_exporters(package=None, model=None, applicability_tag=None)

Returns exporters available for this record filtered by package, model, and applicability tag value.

* **Parameters:**
  * **package** – str (Name of target FEA analysis package, for example ‘NX 10.0’ or ‘CATIA V5’)
  * **model** – str (Material model type, for example ‘Isotropic’ or ‘Linear, temperature-independent,
    isotropic, thermal, plastic’)
  * **applicability_tag** – str (Tag that identifies the MI applications an exporter is intended to be used with,
    for example, ‘MIMaterialsGateway’ or ‘MIViewer’)
* **Returns:**
  List[[`Exporter`](#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter)]

<a id="attribute-level"></a>

## Attribute level

There are two types of attribute object at the attribute level: [Attribute Definitions](#attribute-defs) and [Attribute Values](#attribute-vals).

<a id="attribute-defs"></a>

### Attribute Definitions

These classes describe how an attribute appears in the schema of a given table. There are ten types.

> * [AttributeDefinition](#attribute-def) - Base class, and parent of all AttributeDefinition classes; covers all attributes not covered by those below
> * [AttributeDefinitionDiscrete](#attribute-def-disc) - Child class covering discrete attributes
> * [AttributeDefinitionMultiValue](#attribute-def-multi) - Child class covering multi-valued attributes such as functional, or point
> * [AttributeDefinitionPoint](#attribute-def-point) - Child class covering point attributes
> * [AttributeDefinitionRange](#attribute-def-range) - Child class covering range attributes
> * [AttributeDefinitionInteger](#attribute-def-integer) - Child class covering integer attributes
> * [AttributeDefinitionDatetime](#attribute-def-datetime) - Child class covering datetime attributes
> * [AttributeDefinitionTabular](#attribute-def-tabl) - Child class covering tabular attributes
> * [AttributeDefinitionUnsupported](#attribute-def-unsup) - Child class covering unsupported attribute types (maths functional and discrete functional)
> * [PseudoAttributeDefinition](#pseudo-attribute-def) - Class for pseudo-attributes. Operates like [AttributeDefinition](#attribute-def) but is not a child of it.

<a id="attribute-def"></a>

#### AttributeDefinition

### *class* AttributeDefinition(table)

#### \_\_init_\_(table)

Base attribute definition class.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

Stores basic information about an attribute, such as data type or possible values. Contains information about
the attribute itself, and cannot be used to set attribute values. [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) wraps all
properties of the Foundation API [`GRANTA_MIScriptingToolkit.AttributeDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeDetail) object, including
properties that may not be populated for a given attribute. For example, `axis_name` will not always be
populated, but it will always be included because it is a property of
[`GRANTA_MIScriptingToolkit.AttributeDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeDetail).

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* table

Parent [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) the attribute belongs to.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

#### *property* id

Attribute identifier.

* **Returns:**
  int

#### *property* axis_name

Y-axis name (for functional data attributes only).

* **Returns:**
  str

#### *property* name

Attribute name.

* **Returns:**
  str

#### *property* order

Display order in MI Viewer.

* **Returns:**
  int

#### *property* is_meta

Whether the attribute is a meta-attribute or not.

* **Returns:**
  bool

#### *property* is_meta_for

Name of the parent attribute, if the attribute is a meta-attribute. Returns `None` if not a meta-attribute.

* **Returns:**
  str or None

#### *property* type

Attribute data type, as a four-character string. Possible attribute types are:

POIN = point,
<br/>
RNGE = range,
<br/>
FUNC = float functional,
<br/>
INPT = integer,
<br/>
LOGI = logical,
<br/>
DISC = discrete,
<br/>
STXT = short text,
<br/>
LTXT = long text,
<br/>
DTTM = date time,
<br/>
HLNK = hyperlink,
<br/>
PICT = picture,
<br/>
FILE = file,
<br/>
DSFN = discrete functional,
<br/>
MAFN = maths functional (equations and logic),
<br/>
TABL = tabular.
<br/>

DSFN and MAFN are not supported by the MI Scripting Toolkit, and appear as UNSUPPORTED DATA TYPE.

* **Returns:**
  str

#### *property* unit

Unit symbol.

* **Returns:**
  str

#### *property* meta_attributes

Meta-attributes associated with this attribute, indexed by name.

* **Returns:**
  Dict[str, [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

#### search_criterion(less_than=None, greater_than=None, contains=None, contains_any=None, contains_all=None, does_not_contain=None, exists=None, equal_to=None, between_dates=None, in_column=None)

Creates a search criterion for use with [`Table.search_for_records_where()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) or
[`Database.search_for_records_where()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where).
Operator priority is the same as the order of the arguments.

* **Parameters:**
  * **less_than** – float
  * **greater_than** – float
  * **contains** – Union[str, bool]
  * **contains_any** – List[str]
  * **contains_all** – List[str]
  * **does_not_contain** – str
  * **exists** – bool
  * **equal_to** – Union[int, str]
  * **between_dates** – Union[str, datetime.datetime] (Two dates in chronological order, str must be
    in YYYY-MM-DD format)
  * **in_column** – str (Name of tabular column to search)
* **Returns:**
  [`SearchCriterion`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion) object

<a id="attribute-def-disc"></a>

#### AttributeDefinitionDiscrete

### *class* AttributeDefinitionDiscrete(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for discrete attributes.

Provides a method to view the possible discrete values of an attribute.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* discrete_values

All possible discrete values of the attribute.

* **Returns:**
  List[str]

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="attribute-def-multi"></a>

#### AttributeDefinitionMultiValue

### *class* AttributeDefinitionMultiValue(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for functional and point data attributes.

Provides access to functional data parameters.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* parameters

Parameters associated with the attribute, indexed by name.

* **Returns:**
  Dict[str, [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)]

<a id="attribute-def-point"></a>

#### AttributeDefinitionPoint

### *class* AttributeDefinitionPoint(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinitionMultiValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue) class for point attributes.

Provides access to point-specific information and methods.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="attribute-def-range"></a>

#### AttributeDefinitionRange

### *class* AttributeDefinitionRange(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for range attributes.

Provides access to range-specific information and methods.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="attribute-def-integer"></a>

#### AttributeDefinitionInteger

### *class* AttributeDefinitionInteger(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for integer attributes.

Provides access to integer-specific information, such as minmax.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

<a id="attribute-def-datetime"></a>

#### AttributeDefinitionDatetime

### *class* AttributeDefinitionDatetime(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for date-time attributes.

Provides access to type-specific information, such as minmax.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Union[float, int, datetime.datetime]

<a id="attribute-def-tabl"></a>

#### AttributeDefinitionTabular

### *class* AttributeDefinitionTabular(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for tabular data attributes.

Provides access to tabular-specific information and methods, such as columns, linking attribute and
cross-table links.

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

#### *property* linking_attribute

Linking attribute, a short text-type attribute used to link rows in the tabular data attribute to records.
Returns `None` for purely local tabular data.

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or None

#### *property* linking_table

[`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object which the linking attribute belongs to. Returns `None` for purely local tabular data.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object or None

#### *property* column_types

Data type in each column.

* **Example:**
  `['STXT', 'POIN', 'DISC']`
* **Returns:**
  List[str]

#### *property* column_histories

The revision histories of each column, as an ordered list of [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) objects.

* **Returns:**
  List[[`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory)]

#### *property* column_units

Unit symbols for each column.

* **Returns:**
  List[str]

#### *property* discrete_values

All possible discrete values, for all columns with the discrete data type.

* **Returns:**
  List[List[str]]

#### *property* column_targets

Column meta-types. Possible column targets are:

`Local` - Contains local data
<br/>
`TargetAttribute` - Contains data from a linked attribute
<br/>
`TargetRecord` - Contains the records that the rows link to
<br/>
`TargetTabularColumn` - Contains data from a linked tabular column
<br/>
`Unavailable` - Data cannot be viewed, usually due to version control or permissions
<br/>
* **Returns:**
  List[str]

#### *property* columns

Column names (headers).

* **Returns:**
  List[str]

#### *property* columns_to_process

Columns to be included when populating an AttributeTabular object. Defaults to all
columns, which will fully populate the AttributeTabular object. Columns that aren’t processed contain the
value `<Ignored>`. Tabular attributes with `<Ignored>` columns can be imported back into Granta MI with no
loss of data (additional conditions exist for Picture and File columns, see Warning below).

Ignoring columns that aren’t required by the script can significantly improve performance for operations with
large amounts of tabular data.

#### NOTE
This property must be set on the AttributeDefinitionTabular object associated with the Table
object *before* data export for the setting to have an effect.

#### WARNING
If the intention is to export, modify, and update tabular data, and [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is
being used for the initial export of data, it is recommended to call [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) with
`include_binary_data = True`.

If [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is called with `include_binary_data = False`, Picture and File columns **must
not** be removed from the `columns_to_process` list or an exception will be raised when attempting to
re-import the tabular attribute.

It is possible to call [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) with `include_binary_data = False` as long as all Picture
and File columns are set to be processed, but this will have a performance impact. See the
[`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) documentation for more details.

* **Returns:**
  List[str]

#### *property* ignore_linked_records

Whether to ignore linked records when creating Record objects. Defaults to `False`.
Even when set to `True`, linking values are still available if populated.

Ignoring linked records if they aren’t required can significantly improve performance for operations with large
amounts of tabular data.

#### NOTE
This property must be set on the AttributeDefinitionTabular object associated with the Table
object *before* data export for the setting to have an effect.

* **Returns:**
  bool

<a id="attribute-def-unsup"></a>

#### AttributeDefinitionUnsupported

### *class* AttributeDefinitionUnsupported(table)

#### \_\_init_\_(table)

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for unsupported attribute types (maths
functional (equations and logic), discrete functional).

Provides access to the limited information available for unsupported attribute types (name, type and unit, if
present).

* **Parameters:**
  **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

<a id="pseudo-attribute-def"></a>

#### PseudoAttributeDefinition

### *class* PseudoAttributeDefinition(name)

#### \_\_init_\_(name)

Stores basic information about a pseudo-attribute.

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

* **Parameters:**
  **name** – str
* **Returns:**
  None

#### *property* id

Attribute identifier (this is always 0 for pseudo-attributes).

* **Returns:**
  int

#### *property* read_only

Whether the current user has the correct permissions to edit the attribute.

* **Returns:**
  bool

#### *property* unit

Unit symbol for the pseudo-attribute.

* **Returns:**
  str

#### *property* name

Name of the pseudo-attribute.

* **Returns:**
  str

#### *property* type

Data type of the pseudo-attribute (four-character string).

* **Returns:**
  str

<a id="attribute-vals"></a>

### Attribute Values

These classes are attribute objects that contain data. There is (at least) one for each type.

> * [AttributeValue](#attribute-val) - Base class for all attributes
> * [AttributeBinary](#attribute-val-bin) - Parent class for the binary attributes, [AttributePicture](#attribute-val-pic) and [AttributeFile](#attribute-val-file)
>   * [AttributePicture](#attribute-val-pic) - Attribute value class covering picture data
>   * [AttributeFile](#attribute-val-file) - Attribute value class covering file data
> * [AttributeDate](#attribute-val-dttm) - Attribute value class covering datetime data
> * [AttributeDiscrete](#attribute-val-disc) - Attribute value class covering discrete data
> * [AttributeFunctional](#attribute-val-func) - Attribute value class covering functional data. This is subclassed by [FunctionalSeries](#attribute-val-series) and [FunctionalGrid](#attribute-val-grid).
>   * [FunctionalSeries](#attribute-val-series) - Attribute value class covering float functional series data
>   * [FunctionalGrid](#attribute-val-grid) - Attribute value class covering float functional gridded data
> * [AttributeHyperlink](#attribute-val-hlnk) - Attribute value class covering hyperlink data
> * [AttributeInteger](#attribute-val-int) - Attribute value class covering integer data
> * [AttributeLogical](#attribute-val-logi) - Attribute value class covering logical data
> * [AttributePoint](#attribute-val-poin) - Attribute value class covering point with parameter data
> * [AttributeRange](#attribute-val-rnge) - Attribute value class covering range data
> * [AttributeTabular](#attribute-val-tabl) - Attribute value class covering tabular data
> * [AttributeShortText](#attribute-val-short-text) - Attribute value class covering short text data
> * [AttributeLongText](#attribute-val-long-text) - Attribute value class covering long text data
> * [AttributeUnsupported](#attribute-val-unsup) - Attribute value class covering unsupported data
> * [PseudoAttributeValue](#pseudo-attribute-val) - Pseudo-attribute value class covering all pseudo-attribute types

<a id="attribute-val"></a>

#### AttributeValue

### *class* AttributeValue(attr_def, \_gdl_av, \_mi, record, metas=None)

Stores and provides access to attribute data values.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure,
and empty instances are provided when needed.

The attributes in a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) are represented in the MI Scripting Toolkit by
[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) objects,
with an associated [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) object containing the attribute’s data.
[`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) is the base class, and each attribute type has a specialised class that inherits from it.

#### NOTE
The ‘Notes’ meta-attribute, common to all attributes, is not accessible through the MI Scripting Toolkit.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)]
    (Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) classes for each meta-attribute of this
    attribute)
* **Returns:**
  None

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

#### *property* record

[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) in which the attribute value is defined. Would be None
if the [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) has been created outside a Record context, e.g.
with [`Table.create_empty_attribute_value`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_empty_attribute_value).

* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

#### *property* definition

[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) associated with this [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue).

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object

#### *property* id

Attribute identifier.

* **Returns:**
  int

#### *property* is_meta

Whether the attribute is a meta-attribute.

* **Returns:**
  bool

#### *property* is_meta_for

Name of the parent attribute, if a meta-attribute. Returns `None` if not.

* **Returns:**
  str or None

#### *property* meta_attributes

Meta-attributes associated with this attribute. Does not make calls to the Service Layer.

* **Returns:**
  Dict[str, [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]

#### *property* name

Attribute name.

* **Returns:**
  str

#### *property* type

Attribute data type, as a four-character string. Possible attribute types are:

POIN = point,
<br/>
RNGE = range,
<br/>
FUNC = float functional,
<br/>
INPT = integer,
<br/>
LOGI = logical,
<br/>
DISC = discrete,
<br/>
STXT = short text,
<br/>
LTXT = long text,
<br/>
DTTM = date time,
<br/>
HLNK = hyperlink,
<br/>
PICT = picture,
<br/>
FILE = file,
<br/>
DSFN = discrete functional,
<br/>
MAFN = maths functional (equations and logic),
<br/>
TABL = tabular.
<br/>

DSFN and MAFN are not supported by the MI Scripting Toolkit, and appear as UNSUPPORTED DATA TYPE.

* **Returns:**
  str

#### *property* unit

Unit symbol.

* **Returns:**
  str

#### *property* is_applicable

Whether the attribute is applicable to the current record. Setting this to `False` will clear
any data values on the attribute.

* **Returns:**
  bool

<a id="attribute-val-bin"></a>

#### AttributeBinary

### *class* AttributeBinary(attr_def, \_gdl_av, \_mi, record, metas=None, path=None, content_type=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class to handle [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) objects
as attribute data values.

Provides access to [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object methods and properties.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None, path=None, content_type=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
  * **path** – str (Path to the file associated with the attribute)
  * **content_type** – str (MIME content/file type; see [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType))
* **Returns:**
  None

#### *property* url

URL of the hosted file. Returns `None` if not populated.

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return `None`.

* **Returns:**
  str or None

#### *property* mime_file_type

MIME (Multipurpose Internet Mail Extensions) file type, if populated.

Some commonly-used extensions are:

image/png - .png
<br/>
image/gif - .gif
<br/>
image/bmp - .bmp
<br/>
image/tiff - .tif, .tiff
<br/>
text/plain - .txt
<br/>
application/zip - .zip
<br/>
application/pdf - .pdf
<br/>
application/vnd.ms-excel - .xls
<br/>
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet - .xlsx
<br/>
application/vnd.ms-powerpoint - .ppt
<br/>
application/vnd.openxmlformats-officedocument.presentationml.presentation - .pptx
<br/>
application/msword - .doc
<br/>
application/vnd.openxmlformats-officedocument.wordprocessingml.document - .docx
<br/>
* **Returns:**
  str

#### is_empty()

Checks if the [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object is populated by checking if it contains any binary data.

* **Returns:**
  bool

#### *property* value

Returns the file as a bytes object, or None if unset.

* **Returns:**
  bytes or None.

<a id="attribute-val-pic"></a>

#### AttributePicture

### *class* AttributePicture(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeBinary`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary) class for handling [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) objects.

Provides access to [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) save/load methods.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### save(path, file_name='')

Wraps the [`Picture.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) method.

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path where the image should be saved.
    Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
    **[Deprecated]** Path to the folder where the image should be saved. Requires separate `file_name`.
  * **file_name** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – **[Deprecated]** Name of new image file, with extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To save a file to disk, provide `path` with a complete path to the file.

#### load(path, file_name='')

Wraps the [`Picture.load()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load) method (populates the [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) object with the specified image file).

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path to the image file to load.
    Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
    **[Deprecated]** Path to the folder containing the file to be imported.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** File name, with extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To load a file from disk, provide `path` with a complete path to the file.

<a id="attribute-val-file"></a>

#### AttributeFile

### *class* AttributeFile(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeBinary`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary) class to handle [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) objects.

Provides access to [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object save/load methods, file name, and description.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### save(path=None, file_name='')

Wraps the [`File.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save) method.

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path where the file should be saved.
    Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
    **[Deprecated]** Path to the folder where the file should be saved. Requires separate `file_name`.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** New file name, with extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To save a file to disk, provide `path` with a complete path to the file.

#### load(path=None, file_name='')

Wraps the [`File.load()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load) method (populates the [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object with the specified file).

* **Parameters:**
  * **path** – Union[str, pathlib.Path] (Path to the file to be imported.
    Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
    **[Deprecated]** Path to the folder containing the file to be imported. Requires separate `file_name`.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** File name, with extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To load a file from disk, provide `path` with a complete path to the file.

#### *property* file_name

Name of the file associated with the [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object. Displayed in MI applications.

* **Returns:**
  str

#### *property* description

Description of the file displayed in MI applications.

* **Returns:**
  str

<a id="attribute-val-dttm"></a>

#### AttributeDate

### *class* AttributeDate(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for date attributes.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* value_as_string

Return the value of the date attribute as a string.

* **Returns:**
  str

#### *property* value

Return the value of the date attribute as a [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) object.

* **Returns:**
  [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) object

<a id="attribute-val-disc"></a>

#### AttributeDiscrete

### *class* AttributeDiscrete(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for discrete attributes.

Provides access to the list of strings that store the attribute’s data values, and their display order.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* value

Discrete value(s) associated with this attribute.

* **Returns:**
  List[str] or str if not multivalued

#### *property* order

Display order of the discrete data values (strings) in MI Viewer. Order cannot be edited using the MI
Scripting Toolkit.

* **Returns:**
  List[int]

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

#### *property* possible_discrete_values

List of the attribute’s possible discrete data values.

* **Returns:**
  List[str]

<a id="attribute-val-func"></a>

#### AttributeFunctional

### *class* AttributeFunctional(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for functional data attributes.

Stores and provides access to a data structure, parameters (constraints), specified x-axis, and individual
columns and series within the functional data attribute. Series and Gridded data are stored identically in
[`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) objects. However, the two data types are imported into MI differently.

The [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object data structure is as follows:

```python
[[ 'y min', 'y max', 'constraint 1', 'constraint 2', 'Estimated point?'],
 [  0.0,      0.0,      'Test',         0.5,       ,      False,       ],
 [   . ,       . ,         .  ,          . ,       ,        .  ,       ],
 [   . ,       . ,         .  ,          . ,       ,        .  ,       ],
 [   . ,       . ,         .  ,          . ,       ,        .  ,       ]]
```

The allowed data types are `float` for x-y data, `float`, `str` or `None` for constraints, and `bool` for
flagging whether the data point is estimated or not.

The functional data type is used to store graphical data in Granta MI. In MI Viewer there are two ways to
view the data: *Series* and *Gridded*.

* Series data is grouped according to constraints or parameters placed on x-y data. The x-axis is a
  constraint that is specified on import. Each group (‘Series’) can have a different linestyle.
* Gridded data is similar to Series data, except that the x-axis is dynamically chosen within MI Viewer, and
  all data groups share one linestyle.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### update_header_units()

Updates the unit symbols in the header with the currently selected units.

* **Returns:**
  None

#### *property* unit

Unit symbol for the y-axis.

* **Returns:**
  str

#### clear()

Deletes all data stored in the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object.

* **Returns:**
  None

#### is_empty()

Checks whether any of the data values in the attribute are populated.

* **Returns:**
  bool

#### add_point(columns)

Adds a point value to the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object. Requires a dictionary with keys for the y-value,
each constraint, and whether the value is estimated (optional):

* Dictionary keys for the y-value can be either ‘y’, ‘Y’, the attribute name, or the attribute name prefixed
  with ‘Y ‘ and suffixed with the unit symbol in square brackets, i.e. formatted as in [`column_headers`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.column_headers).
* Constraint keys can be either the parameter name, or the parameter name with units.
* Constraints are optional and can either be omitted entirely or set to None.
* The key for whether the value is estimated must be ‘Estimated?’.

#### NOTE
The Estimated? flag can currently only be set for *Gridded* data, not *Series*.

* **Parameters:**
  **columns** – Dict[str, Union[str, float, bool, int]]
* **Returns:**
  None

#### add_range(columns)

Adds a range value to the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object. Requires a dictionary with keys for the two
y-values (ymin and ymax), each constraint, and whether the value is estimated (optional).

* Dictionary keys for the y-value can be either ‘ymin’, ‘ymax’, or the attribute name with units and
  ‘Y min’ or ‘Y max’ appended.
* Constraint keys can either be the parameter name, or the parameter name with units.
* Constraints are optional and can either be omitted entirely or set to None.
* The key for whether the value is estimated must be ‘Estimated?’.

#### NOTE
The Estimated? flag can currently only be set for *Gridded* data, not *Series*.

* **Parameters:**
  **columns** – dict
* **Returns:**
  None

#### *property* xaxis_parameter

[`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) for the current x-axis parameter of the functional data attribute.

* **Returns:**
  [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) object

#### *property* column_headers

Column headers with units.

* **Returns:**
  List[str]

#### *property* constraint_column_index

Mapping of columns to indices for functional data attributes.

* **Returns:**
  Dict[str, int]

#### data_by_column()

Sorts data into columns (lists of values indexed by column name). Changing a dictionary generated
using this method does not affect the underlying data, and data in the dictionary will not be
refreshed automatically if the underlying data changes.

* **Returns:**
  Dict[str, List[Any]]

#### *property* parameters

Parameters used by the functional data attribute, indexed by name.

* **Returns:**
  Dict[str, [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)]

<a id="attribute-val-series"></a>

#### FunctionalSeries

### *class* FunctionalSeries(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) class for Series functional data attributes.

Provides access to Series numbers and linestyles, and a method of generating a [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object from a
[`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object ([`generate_grid_version()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.generate_grid_version)).

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### generate_grid_version()

Creates a Gridded version of the [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object and returns a copy of it.

* **Returns:**
  [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object

#### *property* data_with_series_number

Series number for all data points, returned as an additional column with the data values.

* **Returns:**
  List[List[Union[str, float, bool, int]]]

#### *property* series_linestyles

Linestyles for each series (linestyle can be ‘Lines’, ‘Markers’, or ‘Both’).

* **Returns:**
  Dict[int, str]

#### *property* log_yaxis

Whether the Y axis is using a logarithmic scale.

* **Returns:**
  bool

<a id="attribute-val-grid"></a>

#### FunctionalGrid

### *class* FunctionalGrid(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) class for Gridded functional data attributes.

Provides access to linestyle and a method of generating a [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object from a
[`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object ([`generate_series_version()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.generate_series_version)).

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### generate_series_version()

Creates a Series version of the [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object and returns a copy of it.

* **Returns:**
  [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object

#### *property* linestyle

Linestyle for gridded functional data (gridded data can only have one linestyle:
‘Lines’, ‘Markers’, or ‘Both’).

* **Returns:**
  str

<a id="attribute-val-hlnk"></a>

#### AttributeHyperlink

### *class* AttributeHyperlink(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for hyperlink attributes.

Provides access to the `hyperlink_description` and `hyperlink_display` text properties.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* object

Hyperlink attribute object value.

* **Returns:**
  [`Hyperlink`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink)

#### *property* value

Returns the URL as a string, or `None` if unset.

* **Returns:**
  str or `None`.

#### *property* hyperlink_display

Indicates how the hyperlink should be opened when clicked on in MI applications. Takes one of the
following values:

- `New`: Open in a new window or tab.
- `Top`: Open in the current window or tab.
- `Content`: Open within the current MI application (for example, in a frame or dialog).

#### *property* hyperlink_description

Text which displays instead of the URL in MI applications.

* **Returns:**
  str

<a id="attribute-val-int"></a>

#### AttributeInteger

### *class* AttributeInteger(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for integer attributes.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)]
    (Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute
    of this attribute)
* **Returns:**
  None

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="attribute-val-logi"></a>

#### AttributeLogical

### *class* AttributeLogical(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for logical attributes.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)]
    (Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of
    this attribute)
* **Returns:**
  None

<a id="attribute-val-poin"></a>

#### AttributePoint

### *class* AttributePoint(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for point data attributes.

Provides access to lists of point values and their parameters. Points can be multi-valued and are represented
in the Streamlined API as lists of floats. They can have multiple parameters.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)]
    (Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute
    of this attribute)
* **Returns:**
  None

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

#### is_empty()

Checks whether the attribute value is populated. [`AttributePoint`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint) objects are empty if the length
of the list [`AttributePoint.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value) == 0.

* **Returns:**
  bool

#### *property* is_estimated

Whether the value has been estimated.

Defaults to False for new attribute values.

return: bool

#### *property* parameter_definitions

Parameter definitions for the parameters associated with the point attribute, indexed by name.

* **Returns:**
  Dict[str, [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)]

#### *property* parameters

Parameters associated with each point in [`AttributePoint.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value). Each point has a
dictionary, indexed by parameter name and containing the parameter value for that point.

* **Returns:**
  List[Dict[str, Union[float, str]]]

#### *property* value

Point values associated with this attribute.

* **Returns:**
  Union[List[float], float]

<a id="attribute-val-rnge"></a>

#### AttributeRange

### *class* AttributeRange(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for range data attributes.  Range attribute values are represented in
the MI Scripting Toolkit by dictionaries of the form `{'low': float, 'high': float}`, and should be entered
in this form when editing them.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* is_estimated

Whether the value has been estimated.

Defaults to False for new attribute values.

return: bool

#### *property* high_value_is_inclusive

Whether the high value is included in the range.

Defaults to True for new attribute values.

return: bool

#### *property* low_value_is_inclusive

Whether the low value is included in the range.

Defaults to True for new attribute values.

return: bool

<a id="attribute-val-tabl"></a>

#### AttributeTabular

### *class* AttributeTabular(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for tabular data attributes.

Provides access to tabular data and its properties, such as linking attribute and table, and methods for
adding, deleting or swapping rows.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* columns

List of columns in the tabular data.

* **Returns:**
  List[str]

#### *property* linked_columns

Whether each column is linked or not.

* **Returns:**
  List[bool]

#### *property* linking_table

[`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object which the linking attribute belongs to. Returns `None` for purely local tabular data.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object or None

#### *property* linking_attribute

Linking attribute, a short text-type attribute used to link rows in the tabular data attribute to records.
Returns `None` for purely local tabular data.

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or None

#### *property* value

Raw data for the attribute (list of data values per column).

* **Returns:**
  List[List[Union[str, list, [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture), [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File), [`Hyperlink`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink), float, int, tuple]]]

#### *property* units

[`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object associated with this [`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object.

* **Returns:**
  [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object

#### show()

Displays the data as an ascii-art style table.

* **Returns:**
  None

#### load()

Loads linked tabular data into the class.

* **Returns:**
  None

#### *property* linked_records

The records linked to each row, indexed by the linking value of each row at loading.

These links are calculated in Granta MI, and therefore cannot be edited by the user. The dictionary is
unaffected by local changes to the tabular data, and the data must be re-imported to reflect local changes.

* **Returns:**
  Dict[str, List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

#### *property* shape

Number of columns by number of rows.

* **Returns:**
  Tuple[int, int]

#### add_row(linking_value='<linking value not chosen>')

Inserts a new unpopulated row, and sets the linking value for that row if one is provided.

* **Parameters:**
  **linking_value** – str
* **Returns:**
  None

#### delete_row(index)

Removes the row at the specified index.

* **Example:**
  `delete_row(0)` deletes the first row.
* **Parameters:**
  **index** – int
* **Returns:**
  None

#### swap_rows(row1, row2)

Change the positions of two rows with indices `row1` and `row2`.

* **Example:**
  `my_data.swap_rows(0, 4)` swaps the first and fifth rows in the Tabular data structure `my_data`.
* **Parameters:**
  * **row1** – int
  * **row2** – int
* **Returns:**
  None

<a id="attribute-val-short-text"></a>

#### AttributeShortText

### *class* AttributeShortText(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for short text attributes.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="attribute-val-long-text"></a>

#### AttributeLongText

### *class* AttributeLongText(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for long text attributes.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

<a id="attribute-val-unsup"></a>

#### AttributeUnsupported

### *class* AttributeUnsupported(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for attributes with unsupported data types.

Note that unsupported attribute data will not yield any information regarding its value in that record. However,
some meta-data is still available through this class (such as the attribute’s name and data type).
An unsupported attribute value remains unpopulated, and these objects cannot be edited.

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

#### *property* object

Gets the underlying [`UnsupportedType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType) object representing the attribute value or the tabular cell. Does
not allow access to the data.

#### *property* is_applicable

Whether the attribute is applicable to the current record. Setting this to `False` will clear
any data values on the attribute.

* **Returns:**
  bool

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="pseudo-attribute-val"></a>

#### PseudoAttributeValue

### *class* PseudoAttributeValue(name, record)

Stores and provides access to pseudo-attribute data values.

#### \_\_init_\_(name, record)

* **Parameters:**
  * **name** – str
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
* **Returns:**
  None

#### *property* record

Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) described by the [`PseudoAttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue)

* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

#### *property* value

Current value of the pseudo-attribute. Cannot be modified. Modification of pseudo-attributes must be done
through the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object properties `color`, `short_name` and `name`.

* **Returns:**
  Union[List[str], str, int, bool, Set[str], [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime), [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)]

#### *property* id

Attribute identifier (this is always 0 for pseudo-attributes).

* **Returns:**
  int

#### is_empty()

Checks whether the pseudo-attribute value is populated or not.

* **Returns:**
  bool

#### *property* name

Name of the pseudo-attribute.

* **Returns:**
  str

#### *property* type

Data type of the pseudo-attribute value (four-character string).

* **Returns:**
  str

<a id="sub-attribute-level"></a>

## Sub-attribute level

Classes that are used by attribute objects but are not attributes themselves.

<a id="parameter-def"></a>

### ParameterDefinition

### *class* ParameterDefinition(\_gdl_param, \_mi, unit_conversions=None)

#### \_\_init_\_(\_gdl_param, \_mi, unit_conversions=None)

Streamlined API wrapper for the Foundation API [`GRANTA_MIScriptingToolkit.ParameterDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.ParameterDetail) class.
Provides access to parameter properties such as revision history, default and possible values, and units.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

* **Parameters:**
  * **\_gdl_param** – Foundation API [`GRANTA_MIScriptingToolkit.ParameterDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.ParameterDetail) class
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **unit_conversions** – Dict[str, str] (maps database units to the current unit system’s units)
* **Returns:**
  None

#### *property* value_for_exporters

Value on the [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) instance for use in any exporters the parameter is passed to. Can be set
by the user.

If this value is unset, the exporter will use the default value defined in Granta MI.

* **Returns:**
  Union[str, float]

#### *property* name

Parameter name.

* **Returns:**
  str

#### *property* parent_attribute

Name of the parent attribute.

* **Returns:**
  str

#### *property* parent_record

Long name of the parent record.

* **Returns:**
  str

#### *property* history

Revision history of the parameter, as an [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object.

* **Returns:**
  [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object

#### *property* default_value

Default value of the parameter (all parameters must have a default value).

* **Returns:**
  str or float

#### *property* history_of_default

Revision history of the parameter’s default value, as an [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object.

* **Returns:**
  [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object

#### *property* interpolation_type

The interpolation type for the parameter (‘None’, ‘Linear’, or ‘Cubic Spline’).

* **Returns:**
  str

#### *property* order

Order in which the parameter is stored in the attribute (column number). This is relevant for
some interpolation methods, and determines the display order in MI Viewer.

* **Returns:**
  int

#### *property* axis_scale_type

Axis scale type for the parameter (‘Linear’ or ‘Logarithmic’).

* **Returns:**
  str

#### *property* unit

Unit symbol for the parameter.

* **Returns:**
  str

#### reset_unit()

Resets the unit back to its original value (the unit in use when the parameter was initially exported).
Does not make a call to the Service Layer.

* **Returns:**
  None

#### *property* values

List of all possible values the parameter can take.

* **Returns:**
  List[Union[str, float]]

#### *property* values_histories

Revision histories of each possible value of a parameter, as a list of [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) objects.

* **Returns:**
  List[[`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory)]

#### *property* type

Parameter type (‘Unrestricted’ numeric, ‘Restricted’ numeric, or ‘Discrete’).

* **Returns:**
  str

#### *property* id

Parameter identifier.

* **Returns:**
  int

<a id="object-history"></a>

### ObjectHistory

### *class* ObjectHistory(\_gdl_revision_info)

Provides access to the revision history of an MI database element. Object histories are currently
supported via the following properties:

> - [`AttributeDefinitionTabular.column_histories`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_histories)
> - [`ParameterDefinition.history`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history)
> - [`ParameterDefinition.history_of_default`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history_of_default)
> - [`ParameterDefinition.values_histories`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.values_histories)

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

#### \_\_init_\_(\_gdl_revision_info)

* **Parameters:**
  **\_gdl_revision_info** – Foundation API [`GRANTA_MIScriptingToolkit.RevisionInfo`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RevisionInfo) class
* **Returns:**
  None

#### *property* last_modified_date

Date the database element was last modified.

* **Returns:**
  str

#### *property* date_created

Date the database element was created.

* **Returns:**
  str

#### *property* last_modified_by

The username of the last user to modify the database element.

* **Returns:**
  str

#### *property* created_by

The username of the user who created the database element.

* **Returns:**
  str

<a id="record-version-history"></a>

### RecordVersionHistory

### *class* RecordVersionHistory(record_version_state)

Provides access to the revision history of an MI Record.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

#### \_\_init_\_(record_version_state)

#### *property* created_at

Date and time the record version was created.

* **Returns:**
  datetime.datetime

#### *property* created_by

The username of the user who created the record version.

* **Returns:**
  str

#### *property* creation_notes

Notes associated with the creation of the record version.

* **Returns:**
  str

#### *property* last_modified_at

Date and time the record version was last modified.

* **Returns:**
  datetime.datetime

#### *property* last_modified_by

The username of the user who last modified the record version.

* **Returns:**
  str

#### *property* last_modification_notes

Notes associated with the last modification made to record version.

* **Returns:**
  str

#### *property* released_at

Date and time the record version was released.

* **Returns:**
  datetime.datetime

#### *property* released_by

The username of the user who released the record version.

* **Returns:**
  str

#### *property* release_notes

Notes associated with the release of the record version.

* **Returns:**
  str

#### *property* superseded_at

Date and time the record version was superseded.

* **Returns:**
  datetime.datetime

#### *property* superseded_by

The username of the user who superseded the record version.

* **Returns:**
  str

#### *property* supersession_notes

Notes associated with the last operation that superseded the record version.

* **Returns:**
  str

#### *property* withdrawn_at

Date and time the record version was withdrawn.

* **Returns:**
  datetime.datetime

#### *property* withdrawn_by

The username of the user who withdrew the record version.

* **Returns:**
  str

#### *property* withdrawal_notes

Notes associated with the withdrawal of the record version.

* **Returns:**
  str

<a id="search-crit"></a>

### SearchCriterion

### *class* SearchCriterion(attribute, operator, value=None, column_name=None)

Defines a single criterion for use in a search. The criterion can be as simple as the presence of the
specified attribute, or as complex as the data in a specified column of the tabular attribute being
greater than a specified value. The search will use the same units as the
[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition).

#### \_\_init_\_(attribute, operator, value=None, column_name=None)

* **Parameters:**
  * **attribute** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **operator** – str
  * **value** – Input type corresponding to your [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)
  * **column_name** – str
* **Returns:**
  None

#### *property* attribute

[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) for the attribute used in this search criterion.

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object

#### *property* operation

Operator used in this criterion, if provided.

* **Example:**
  ‘EXISTS’ or ‘CONTAINS’
* **Returns:**
  str

<a id="hyperlink-type"></a>

### Hyperlink

### *class* Hyperlink(url=None, hyperlink_display='New', hyperlink_description='')

Represents hyperlinks in MI. Can be used directly in tabular data, or within [`AttributeHyperlink`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink) objects for
standalone hyperlink attributes.

#### \_\_init_\_(url=None, hyperlink_display='New', hyperlink_description='')

* **Parameters:**
  * **url** – str
  * **hyperlink_display** – str (Hyperlink display mode: `New`, `Content`, `Top`)
  * **hyperlink_description** – str (Hyperlink description, displayed in MI applications)
* **Returns:**
  None

#### *property* hyperlink_display

Indicates how the hyperlink should be opened when clicked on in MI applications. Takes one of the
following values:

* `New`: Open in a new window or tab.
* `Top`: Open in the current window or tab.
* `Content`: Open within the current MI application (for example, in a frame or dialog).

* **Returns:**
  str

<a id="binary-type"></a>

### BinaryType

### *class* BinaryType

Stores and provides access to Pictures and Files, and associated metadata. Pictures and files can appear
in Granta MI as data (for example, in a tabular data column), or as an attribute value.

The [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object wraps files and images for inclusion in the corresponding MI Scripting Toolkit
classes.

#### \_\_init_\_()

* **Returns:**
  None

#### *property* value

Current value of the attribute; [`BinaryType.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.value) always returns the current instance of the class
and cannot be modified. In this case, the values are the file or picture, which can be accessed through
the `load` and `save` methods of the [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) or [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) classes.

* **Returns:**
  [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object

#### *property* url

URL of the hosted file. Returns `None` if not populated.

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return `None`.

* **Returns:**
  str or None

#### *property* mime_file_type

MIME (Multipurpose Internet Mail Extensions) file type, if populated.

Some commonly-used extensions are:

image/png - .png
<br/>
image/gif - .gif
<br/>
image/bmp - .bmp
<br/>
image/tiff - .tif, .tiff
<br/>
text/plain - .txt
<br/>
application/zip - .zip
<br/>
application/pdf - .pdf
<br/>
application/vnd.ms-excel - .xls
<br/>
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet - .xlsx
<br/>
application/vnd.ms-powerpoint - .ppt
<br/>
application/vnd.openxmlformats-officedocument.presentationml.presentation - .pptx
<br/>
application/msword - .doc
<br/>
application/vnd.openxmlformats-officedocument.wordprocessingml.document - .docx
<br/>
* **Returns:**
  str

#### is_empty()

Checks whether the [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object is populated by checking whether there is binary data in the object.

* **Returns:**
  bool

#### *property* binary_data

The binary data for the file. Binary data can be set with a bytes object or file buffer.

* **Returns:**
  bytes or None.

<a id="picture-type"></a>

### Picture

### *class* Picture(name='', path=None, load='')

Extended [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) class for Pictures in MI.

#### \_\_init_\_(name='', path=None, load='')

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** Picture name, used for locally saving and loading, when `path` is a path to
    a directory.
  * **path** (*Optional**[**Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]**]*) – Path to the image file to load. Takes the form
    `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
    **[Deprecated]** Path to a folder. Use with `name` to fully identify the file to load.
  * **load** ([*bool*](https://docs.python.org/3/library/functions.html#bool)) – **[Deprecated]** Whether to load the binary data from the provided path.
* **Returns:**
  None

#### WARNING
Parameters `name` and `load` have been deprecated and will be removed in a future release.
To load a picture from disk, provide `path` with a complete path to the file.

#### load(path, file_name='')

Populates the Picture object with the image located on `path`. Relative paths are permitted.

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path to the image file to load. Takes the form
    `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
    **[Deprecated]** Path to a folder. Use with `file_name` to fully identify the file to load.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** Image file name, with file extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To load a picture from disk, provide `path` with a complete path to the file.

#### save(path, file_name='')

Saves a Picture object to file location `path`. Relative paths are permitted.

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path where the image should be saved. Takes the form
    `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
    **[Deprecated]** Path to a folder. Use with `file_name` to fully describe the path at which to save the file.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** Image file name, with file extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To save a picture to disk, provide `path` with a complete path to the file.

#### *property* binary_data

The binary data for the file. Binary data can be set with a bytes object or file buffer.

* **Returns:**
  bytes or None.

<a id="file-type"></a>

### File

### *class* File(file_name='', path=None, load='')

Extended [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) class for Files in MI.

#### \_\_init_\_(file_name='', path=None, load='')

* **Parameters:**
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]**
  * **path** (*Optional**[**Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]**]*) – Path to the file to load. Takes the form
    `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
    **[Deprecated]** Path to the folder containing the file to be imported.
  * **load** ([*bool*](https://docs.python.org/3/library/functions.html#bool)) – **[Deprecated]** Whether to load the binary data from the provided path.
* **Returns:**
  None

#### WARNING
Parameters `file_name` and `load` have been deprecated and will be removed in a future release.
To load a file from disk, provide `path` with a complete path to the file.

#### save(path=None, file_name='')

Saves a File object to file location `path`. Relative paths are permitted.

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path where the file should be saved. Takes the form
    `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
    **[Deprecated]**: Path to the folder where the file should be saved.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** File name, with extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To save a file to disk, provide `path` with a complete path to the file.

#### load(path=None, file_name='')

Populates the File object with the file located by `path`. Relative paths are permitted.

* **Parameters:**
  * **path** (*Union**[*[*str*](https://docs.python.org/3/library/stdtypes.html#str)*,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)*]*) – Path to the file to load. Takes the form
    `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
    **[Deprecated]**: Path to the folder containing the file to be imported.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – **[Deprecated]** File name, with extension.
* **Returns:**
  None

#### WARNING
Parameter `file_name` has been deprecated and will be removed in a future release.
To load a file from disk, provide `path` with a complete path to the file.

#### *property* file_name

Name of the file.

* **Returns:**
  str

#### *property* description

File description.

Stored with the data value. If provided, the description replaces the file name for the attribute when
displayed on a datasheet in MI Viewer.

* **Returns:**
  str

<a id="unsupported-type"></a>

### UnsupportedType

### *class* UnsupportedType(\_gdl_av)

Represents a data type that is unsupported. No information about the value of the Attribute or the
Tabular Cell is available. However, the object’s data type is available through this class, along
with the underlying gdl object, which may contain more information. Properties of this object cannot
be edited.

#### \_\_init_\_(\_gdl_av)

<a id="tabl-units"></a>

### TabularUnits

### *class* TabularUnits(units, default_units)

Stores and provides access to the units for a parent [`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object, in the same tabular format as
the data.

Units can be set on a cell-by-cell basis. [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) is populated when the parent
[`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object is loaded.

Any changes made to the underlying [`AttributeTabular.value()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) property must also be made to the corresponding
[`TabularUnits.data()`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.data) and vice versa, or your changes will not import successfully and may be lost
([`AttributeTabular.add_row()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row) and [`AttributeTabular.delete_row()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row) make the necessary changes to both
objects, but you must duplicate other changes to `data` yourself).

#### \_\_init_\_(units, default_units)

* **Parameters:**
  * **units** – List[List[str]]
  * **default_units** – List[str]
* **Returns:**
  None

#### *property* database_units

The default units, as a list corresponding to each column.

* **Returns:**
  List[str]

#### *property* data

Data values (unit symbol strings) stored in the [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object.

* **Returns:**
  List[List[str]]

<a id="async-jobs"></a>

## Asynchronous Job Queue

These classes allow users to interact with the MI Asynchronous Job Queue, submitting Excel and Text importer jobs and monitoring their progress. This functionality relies on the external library requests.

<a id="async-job-queue"></a>

### AsyncJobQueue

### *class* AsyncJobQueue(mi_session, queue_url=None, verify_ssl=True, ssl_ca_bundle=None)

#### \_\_init_\_(mi_session, queue_url=None, verify_ssl=True, ssl_ca_bundle=None)

Represents an instance of the Async Job Queue manager. Allows management of the job queue and submission of
jobs.

* **Parameters:**
  * **mi_session** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **queue_url** – str (Job queue URL, if different from Service Layer URL; extracted from `mi_session` if not
    specified).
  * **verify_ssl** – bool (Whether to verify SSL connections to remote server, `True` by default)
  * **ssl_ca_bundle** – Union[str, pathlib.Path] (optional) (Path to custom CA bundle (.crt or .pem); use if your
    MI installation has a self-signed certificate which is not trusted by the *requests* module)

#### NOTE
On Linux platforms the queue URL must be the **Fully-Qualified Domain Name** (FQDN), if your
`mi_session` uses an unqualified URL you must provide the FQDN via the `queue_url` parameter. For example
`http://machinename/mi_servicelayer` is not valid, and must be replaced with
`http://machinename.domain/mi_servicelayer`.

#### *property* processing_configuration

Gets the current job queue configuration information from the server.

* **Returns:**
  dict

#### *property* is_admin_user

Checks whether the current user is a Job Queue admin (returns `True` if the user is an admin). Admin users
can promote jobs to the top of the queue and interact with other users’ jobs.

* **Returns:**
  bool

#### *property* can_write_job

Checks whether the current user can create new jobs (returns `True` if they can).

* **Returns:**
  bool

#### *property* num_jobs

Returns the number of jobs in the Job Queue, including completed and failed jobs.

* **Returns:**
  int

#### *property* jobs

Returns a list of all jobs visible on the server. Running or pending jobs are sorted according to
their position in the queue, completed or failed jobs are returned last.

* **Returns:**
  List[[`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob)]

#### jobs_where(name=None, type_=None, description=None, submitter_name=None, status=None)

Returns a list of jobs on the server matching a query. Running or queued jobs are sorted according to
their position in the queue, completed or failed jobs are returned last.

* **Parameters:**
  * **name** – str (Job name must contain)
  * **type** – str (`Excel`, `Text`)
  * **description** – str (Job description must contain)
  * **submitter_name** – str (Name of user who submitted the job must equal)
  * **status** – str (`Pending`, `Running`, `Succeeded`, `Failed`, `Cancelled`, `Corrupted`)
* **Returns:**
  List[[`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob)]

#### get_job_by_id(job_id)

Gets the job with unique identifier `job_id` from the server.

* **Parameters:**
  **job_id** – str
* **Returns:**
  [`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob) object

#### delete_jobs(jobs)

Deletes jobs from the server.

* **Parameters:**
  **jobs** – List[[`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob)]
* **Returns:**
  None

#### create_import_job_and_wait(job_request)

Creates an import job from an [`ImportJobRequest`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.ImportJobRequest) object. Uploads files and submits a job request
to the Job Queue. Blocks execution until the job has either completed or failed, then returns the finished
[`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob) object.

* **Parameters:**
  **job_request** – [`ImportJobRequest`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.ImportJobRequest) object
* **Returns:**
  [`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob) object

#### create_import_job(job_request)

Creates an import job from an [`ImportJobRequest`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.ImportJobRequest) object. Uploads files and submits a job request
to the Job Queue, then returns an in-progress [`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob) object for later use.

* **Parameters:**
  **job_request** – [`ImportJobRequest`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.ImportJobRequest) object
* **Returns:**
  [`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob) object

<a id="import-job-request"></a>

### ImportJobRequest

### *class* ImportJobRequest(name, description, scheduled_execution_date=None)

Abstract base class representing an import job request. Each subclass represents a specific import type and may
override some steps of the import process. They also add additional file types and properties as required.

#### *abstract* \_\_init_\_(name, description, scheduled_execution_date=None)

* **Parameters:**
  * **name** – str (Display name of the job)
  * **description** – str
  * **scheduled_execution_date** – datetime.datetime (Earliest date and time job should be executed)
* **Returns:**
  None

#### get_job_for_import()

Creates an AsyncJobs `JobRequest` object ready for import. Should be called after uploading
files to the service.

* **Returns:**
  AsyncJobs `JobRequest` object

#### *abstract* check_valid_for_import()

Verifies that the import job can run. Raises a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) with a specific error message if
not enough files have been provided for the import to successfully complete.

* **Returns:**
  None

<a id="excel-import-job-request"></a>

### ExcelImportJobRequest

### *class* ExcelImportJobRequest(name, description, scheduled_execution_date=None, data_files=None, template_files=None, combined_files=None, attachment_files=None)

Represents an Excel import job request. Supports either combined imports (with template and data in the same file),
or separate data and template imports.

#### \_\_init_\_(name, description, scheduled_execution_date=None, data_files=None, template_files=None, combined_files=None, attachment_files=None)

* **Parameters:**
  * **name** – str (Display name of the job)
  * **description** – str
  * **scheduled_execution_date** – datetime.datetime (Earliest date and time job should be executed)
  * **data_files** – List[Union[str, pathlib.Path, IO]] (Excel files containing data)
  * **template_files** – List[Union[str, pathlib.Path, IO]] (Excel template files)
  * **combined_files** – List[Union[str, pathlib.Path, IO]] (Excel files containing both template and data)
  * **attachment_files** – List[Union[str, pathlib.Path, IO]] (Any other files referenced in data or combined
    Excel files)

#### check_valid_for_import()

Verifies that the import job can run. Raises a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) with a specific error message if
not enough files have been provided for the import to successfully complete.

* **Returns:**
  None

<a id="text-import-job-request"></a>

### TextImportJobRequest

### *class* TextImportJobRequest(name, description, scheduled_execution_date=None, data_files=None, template_files=None, attachment_files=None)

Represents a Text import job request. Requires a template file and one or more data files.

#### \_\_init_\_(name, description, scheduled_execution_date=None, data_files=None, template_files=None, attachment_files=None)

* **Parameters:**
  * **name** – str (Display name of the job)
  * **description** – str
  * **scheduled_execution_date** – datetime.datetime (Earliest date and time job should be executed)
  * **data_files** – List[Union[str, pathlib.Path, IO]] (Text files containing data)
  * **template_files** – List[Union[str, pathlib.Path, IO]] (Text importer template file)
  * **attachment_files** – List[Union[str, pathlib.Path, IO]] (Any other files referenced in data files)

#### check_valid_for_import()

Verifies that the import job can run. Raises a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) with a specific error message if
not enough files have been provided for the import to successfully complete.

* **Returns:**
  None

<a id="async-job"></a>

### AsyncJob

### *class* AsyncJob

Represents a Job on the server. Provides information on the current status of the Job, as well as any
job specific outputs. Allows modification of Job metadata, such as Name, Description and Scheduled Date.

#### *property* id

Unique job identifier in GUID form. Recommended way to refer to individual jobs.

* **Returns:**
  str

#### *property* name

Display name of the job (not unique).

* **Returns:**
  str

#### update_name(value)

Updates the display name of the job on the server.

* **Parameters:**
  **value** – str
* **Returns:**
  None

#### *property* description

Description of the job (displayed in MI).

* **Returns:**
  str

#### update_description(value)

Updates the job description on the server.

* **Parameters:**
  **value** – str
* **Returns:**
  None

#### *property* status

Job status on the server:

* `Pending`: Job is in the queue
* `Running`: Job is currently executing
* `Succeeded`: Job has completed (does not guarantee that no errors occurred)
* `Failed`: Job could not complete
* `Cancelled`: Job was cancelled by the user
* `Corrupted`: Something went wrong on the server

If the job associated with the [`AsyncJob`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob) object was deleted, returns `Deleted`.

* **Returns:**
  str

#### *property* type

Job type, as known to the server.

* **Returns:**
  str

#### *property* position

Position in the Job Queue. Returns an `int` if the job is pending, otherwise returns `None`.

* **Returns:**
  int or None

#### move_to_top()

Promotes the job to the top of the Job Queue. User must have MI_ADMIN permission.

* **Returns:**
  None

#### *property* submitter_information

Information about the job submission. Returns the `username` of the submitter, `date_time` of submission,
and the `roles` to which the submitter belongs as a dictionary indexed by name.

* **Returns:**
  dict

#### *property* completion_date_time

Date and time of job completion. Returns `None` if job is pending.

* **Returns:**
  datetime.datetime or None

#### *property* execution_date_time

Date and time of job execution. Returns `None` if job is pending.

* **Returns:**
  datetime.datetime or None

#### *property* scheduled_execution_date_time

Date and time of job execution, if scheduled.

* **Returns:**
  datetime.datetime or None

#### update_scheduled_execution_date_time(value)

Updates the scheduled execution time on the server.

* **Parameters:**
  **value** – datetime.datetime
* **Returns:**
  None

#### *property* output_information

Provides additional information such as record placement or verbose logging, if the job type supports
it.

* **Returns:**
  Any job-specific outputs

#### *property* output_file_names

List of file names produced by the job, for example log files.

* **Returns:**
  List[str]

#### download_file(remote_file_name, file_path)

Downloads an output file from the server by name and saves it to a specified location.

* **Parameters:**
  * **remote_file_name** – str (File name provided by [`output_file_names()`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob.output_file_names))
  * **file_path** – [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path) or str (Path where the file should be saved; if a file name isn’t
    specified, the name provided by [`output_file_names()`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob.output_file_names) is used)
* **Returns:**
  None

#### get_file_content(remote_file_name)

Downloads an output file from the server by name, and returns the file contents.

* **Parameters:**
  **remote_file_name** – str (File name provided by [`output_file_names()`](#GRANTA_MIScriptingToolkit.granta._mi_async_jobs.AsyncJob.output_file_names))
* **Returns:**
  Union[bytes, str, dict]

#### update()

Updates the job from the server.

* **Returns:**
  None

<a id="functions"></a>

## Helper Functions

### connect

### connect(service_layer_url, user_name=None, password=None, domain=None, autologon=None, timeout=300000, existing_session=None, oidc=False, auth_token=None, refresh_token=None, use_stored_token=False, store_password=False, max_retries=0)

Establishes a connection to the Granta MI server and returns a [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object.

An existing session may be specified.

* **Parameters:**
  * **service_layer_url** – str
  * **user_name** – str
  * **password** – str
  * **domain** – str
  * **autologon** – bool
  * **timeout** – int (maximum time to wait for a response, in milliseconds)
  * **existing_session** – Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class
  * **oidc** – bool
  * **auth_token** – str
  * **refresh_token** – str
  * **use_stored_token** – bool
  * **store_password** – bool (Default value False. Set to True when the password is given and needs to be saved
    for the session’s duration, for example when parallelisation is required.)
  * **max_retries** – int (Default value 0. Maximum number of times to retry requests sent to the Service Layer.)
* **Returns:**
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

### extract_parameter_value

### extract_parameter_value(param_value)

Returns the data value stored in a Foundation API [`GRANTA_MIScriptingToolkit.ParameterValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.ParameterValue) object.

* **Parameters:**
  **param_value** – Foundation API [`GRANTA_MIScriptingToolkit.ParameterValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.ParameterValue) class
* **Returns:**
  str or float

### get_foundation_logger

### get_foundation_logger()

Return the logger used by the Foundation API (has the name “GDL”).

* **Returns:**
  [`logging.Logger`](https://docs.python.org/3/library/logging.html#logging.Logger) class

### log_to_file_in_local_app_data

### log_to_file_in_local_app_data(path='Granta Design\\\\MIScriptingToolkit\\\\Python')

Set up the built-in Granta logger to log to a file in the user’s local app data directory
(%LOCALAPPDATA% on Windows, ‘~/.appdata/’ on Linux).
The log file name is MIScriptingToolkitForPython_YYYY.MM.DD.log and you can
specify the filepath. The default filepath is Granta Design/MIScriptingToolkit/Python.

* **Parameters:**
  **path** – str
* **Returns:**
  None

## Constants

### RecordColor

### *enum* RecordColor(value)

An enumeration.

Valid values are as follows:

#### Red *= RecordColor.Red*

#### Maroon *= RecordColor.Maroon*

#### Fuchsia *= RecordColor.Fuchsia*

#### Yellow *= RecordColor.Yellow*

#### Black *= RecordColor.Black*

#### Gray *= RecordColor.Gray*

#### Aqua *= RecordColor.Aqua*

#### Green *= RecordColor.Green*

#### Navy *= RecordColor.Navy*

#### Purple *= RecordColor.Purple*

#### Blue *= RecordColor.Blue*

#### Silver *= RecordColor.Silver*

#### Lime *= RecordColor.Lime*

#### Olive *= RecordColor.Olive*

#### Teal *= RecordColor.Teal*

#### White *= RecordColor.White*

#### InheritFromParent *= RecordColor.InheritFromParent*
