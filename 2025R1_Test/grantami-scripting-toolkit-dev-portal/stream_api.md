<a id="streamlined-api-reference"></a>

# Streamlined API reference

The classes and functions that form the Streamlined API are grouped by database element, to help you find what you need:

<a id="session-level"></a>

<a id="id1"></a>

## Session level

<a id="session"></a>

### Session

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session"></a>

### *class* Session(service_layer_url, user_name=None, password=None, domain=None, autologon=None, timeout=300000, existing_session=None, oidc=False, auth_token=None, refresh_token=None, use_stored_token=False, store_password=False, max_retries=0, backend_configuration=BackendServiceSelection(search=<BackendType.SOAP: 0>, data_export=<BackendType.SOAP: 0>, data_import=<BackendType.SOAP: 0>, browse=<BackendType.SOAP: 0>, engineering_data=<BackendType.SOAP: 0>, units=<BackendType.SOAP: 0>))

Represents a Granta MI Session. Allows the MI Scripting Toolkit to make calls to the Service Layer, and provides
access to and search functions for available databases.

> <a id="GRANTA_MIScriptingToolkit.granta.mi.Session.__init__"></a>

> #### \_\_init_\_(service_layer_url, user_name=None, password=None, domain=None, autologon=None, timeout=300000, existing_session=None, oidc=False, auth_token=None, refresh_token=None, use_stored_token=False, store_password=False, max_retries=0, backend_configuration=BackendServiceSelection(search=<BackendType.SOAP: 0>, data_export=<BackendType.SOAP: 0>, data_import=<BackendType.SOAP: 0>, browse=<BackendType.SOAP: 0>, engineering_data=<BackendType.SOAP: 0>, units=<BackendType.SOAP: 0>))

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

> #### NOTE
> If MI Scripting Toolkit has been installed on the same server machine as Granta MI, then the Granta MI
> server name *must* be specified in full in the url parameter. If you use ‘localhost’ or a loopback address, MI
> Scripting Toolkit will be unable to use the specified user account to connect to Granta MI.

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.update"></a>

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
  * **release_notes** – str (default value of None). Version release notes for the update. Applies to all records
    flagged for release in the update.
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.update_links"></a>

#### update_links(records)

Pushes any changes in the links of the specified records (including newly-created records) to the server.
Returns a list of successfully modified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. All source and target records must be exported
to/from the server before being linked.

* **Parameters:**
  **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.spawn_session"></a>

#### spawn_session()

Creates a new Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) object using the credentials
of the current [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session).

If the session was created with manual credentials, then this method will only succeed if `store_password`
was set to `True`. Otherwise, this method will return `None`.

* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class

#### WARNING
Calling this method from a Session object that was constructed with manual credentials and
without setting `store_password` to `True` is deprecated and will raise an exception in a
future release.

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.viewer_base_url"></a>

#### *property* viewer_base_url

MI Viewer URL associated with the Service Layer.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.can_connect"></a>

#### can_connect()

Checks whether credentials have been provided to the server.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.assert_can_run_parallelised"></a>

#### assert_can_run_parallelised()

Throws if a task cannot run in parallel mode with current session.

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.connect"></a>

#### connect(spawn_new_connection=True)

Returns a Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) object using the current
[`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session)’s credentials.

* **Parameters:**
  **spawn_new_connection** – bool (default value True)
* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.persist_oidc_token"></a>

#### persist_oidc_token()

Stores a refresh token in the credential manager for your system for unattended later use. The `keyring`
package uses system-managed storage, and supports the following credential managers:

* Windows Credential Manager
* macOS Keychain
* Freedesktop Secret Service
* KDE4 and KDE5 KWallet

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.refetch_dbs"></a>

#### refetch_dbs()

Fetches the list of databases from the server. Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.dbs"></a>

#### *property* dbs

List of databases on the server.

* **Returns:**
  List[[`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.dbs_by_key"></a>

#### *property* dbs_by_key

Dict of databases on the server, keyed by database key

* **Returns:**
  Dict[str, [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.dbs_by_guid"></a>

#### *property* dbs_by_guid

Dict of databases on the server, keyed by database GUID

* **Returns:**
  Dict[str, [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.get_db"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_name"></a>

#### search_for_records_by_name(name)

Searches by record name over all databases
(uses [`Database.search_for_records_by_name()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name)).
Makes a Service Layer call for each table in each database.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text"></a>

#### search_for_records_by_text(text)

Performs a simple text search over all databases
(uses [`Database.search_for_records_by_text()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text)).
Makes a Service Layer call for each table in each database.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string"></a>

#### records_from_string(text, use_strict_version=True)

Generates [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a string in MI clipboard format (version 12 or higher).

#### NOTE
Required string format is .tsv with column headers RecordHistoryGuid, RecordGuid, Table,
DatabaseKey and RecordFullName.

#### NOTE
In MI Viewer, a field name may be prefixed by an asterisk to denote a default Match
Column. This functionality is not supported in the MI Scripting Toolkit. Either the
RecordHistoryGuid (if `use_strict_mode = False`) or RecordGuid (if
`use_strict_mode = True`) will be used to identify the record.

* **Parameters:**
  * **text** – str
  * **use_strict_version** – bool (default value of `True`) - If `True`, return only
    the specified version of the record (if you do not have permission, the item will be `None`).
    If `False`, return the latest visible version of the record.
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.get_record_by_id"></a>

#### get_record_by_id(db_key, hguid=None, vguid=None, history_identity=None, version_number=None)

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
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.get_records_by_ids"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states"></a>

#### bulk_fetch_release_states(records, batch_size=100, parallelise=False, max_num_threads=6)

Fetches and populates the release states of the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records"></a>

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

<a id="attributefetcher"></a>

### AttributeFetcher

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher"></a>

### *class* AttributeFetcher(table, batch_size=100, attributes=None, records=None, max_parallel_threads=6, include_binary_data=False)

Bulk exporter for record data. Fetches data values for all named [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) and
[`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) objects from the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects and [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

Set `attributes` to  `None` to export all record data.

A class method executes the data export, allowing the [`AttributeFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher) to be edited post-creation.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.records"></a>

#### *property* records

List of records to be fetched (exported).

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.attribute_list"></a>

#### *property* attribute_list

List of attributes for which data will be fetched (exported).

* **Returns:**
  List[Union[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition), [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.fetch_attribute_data"></a>

#### fetch_attribute_data(parallelise=False)

Fetch the attribute data for the provided records and attributes, and populate the corresponding
[`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) objects for each record.

* **Parameters:**
  **parallelise** – bool
* **Returns:**
  None

<a id="associatedrecordfetcher"></a>

### AssociatedRecordFetcher

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher"></a>

### *class* AssociatedRecordFetcher(table, records, target_table, link_direction='Both', attribute_path=None, batch_size=100)

Bulk fetcher for associated records. Fetches all [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects via association chains from the specified
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects in the target [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Provides means to choose the direction that association chains
are followed, and to specify a list of tabular attributes which are chained together.

This operation performs no subset filtering.

A class method executes the fetch, allowing the [`AssociatedRecordFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher) to be edited post-creation.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher.fetch_associated_records"></a>

#### fetch_associated_records(parallelise=False, max_parallel_threads=6)

Fetch the associated records in the specified [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) from the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Return a
list of dictionaries with `source_record` and `associated_records` fields for each provided
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record).

This operation performs no subset filtering.

* **Parameters:**
  * **parallelise** – [`bool`](https://docs.python.org/3/library/functions.html#bool)
  * **max_parallel_threads** – [`int`](https://docs.python.org/3/library/functions.html#int) (default 6)
* **Returns:**
  List[Dict[str, Union[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]]]

<a id="linkfetcher"></a>

### LinkFetcher

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher"></a>

### *class* LinkFetcher(table, batch_size=100, records=None, link_groups=None, filter_subsets=True)

Bulk record link fetcher (exporter). Fetches and populates record link groups for the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
objects in the specified [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Set `link_groups` to `None` to fetch all record link groups.

Set `filter_subsets` to `True` to return records that are in the default subsets of the target table.
Set it to `False` to search with no filtering by subset.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.__init__"></a>

#### \_\_init_\_(table, batch_size=100, records=None, link_groups=None, filter_subsets=True)

* **Parameters:**
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **link_groups** – List[str]
  * **filter_subsets** – bool (default value of True)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.link_groups"></a>

#### *property* link_groups

List of link groups to export.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.records"></a>

#### *property* records

List of records to fetch link groups for.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.fetch_linked_records"></a>

#### fetch_linked_records(parallelise=False, max_parallel_threads=6)

Perform the bulk fetch (export). Batches Service Layer calls into efficient blocks, then populates
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object pseudo-attributes.

* **Parameters:**
  * **parallelise** – bool
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

<a id="releasestatefetcher"></a>

### ReleaseStateFetcher

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher"></a>

### *class* ReleaseStateFetcher(session, records, batch_size=100, max_parallel_threads=6)

Allows record release states to be fetched from the server in bulk.

The list of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects, batch size, and number of threads in parallel can be edited post-creation.

A class method fetches the release states and populates the relevant [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) properties.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.__init__"></a>

#### \_\_init_\_(session, records, batch_size=100, max_parallel_threads=6)

* **Parameters:**
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.records"></a>

#### *property* records

List of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects to be processed.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.fetch_release_states"></a>

#### fetch_release_states(parallelise=False)

Fetches the release states of the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from the server, and populates their
relevant properties.

* **Parameters:**
  **parallelise** – bool (splits operation into multiple threads if set to `True`)
* **Returns:**
  None

<a id="bulkrecorddeleterwithdrawer"></a>

### BulkRecordDeleterWithdrawer

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer"></a>

### *class* BulkRecordDeleterWithdrawer(session, records, batch_size=100, max_parallel_threads=6, withdrawal_notes=None)

Allows for bulk deletion or withdrawal or records from the server. Records are withdrawn from
version-controlled tables, otherwise they are deleted.

The deletion/withdrawal is performed by a method on the class; as such, the list of
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects for deletion, batch size, and number of threads in parallel can be edited post-creation.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer.__init__"></a>

#### \_\_init_\_(session, records, batch_size=100, max_parallel_threads=6, withdrawal_notes=None)

* **Parameters:**
  * **session** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
  * **withdrawal_notes** – Optional[str]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer.records"></a>

#### *property* records

List of records to be deleted or withdrawn.

* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer.delete_or_withdraw"></a>

#### delete_or_withdraw(parallelise=False)

Performs the deletion (or withdrawal, if the records are in a version-controlled table).

* **Parameters:**
  **parallelise** – bool (splits operation into multiple threads if `True`)
* **Returns:**
  None

<a id="datarevisionhistoryfetcher"></a>

### DataRevisionHistoryFetcher

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher"></a>

### *class* DataRevisionHistoryFetcher(\_mi, records, batch_size=100, max_parallel_threads=6)

Bulk exporter for data revision history.

Fetches the data revision history for all attributes of the provided records and populates the
[`Record.data_revision_history`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) property.
See [`AttributeFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher) to export attribute data.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher.__init__"></a>

#### \_\_init_\_(\_mi, records, batch_size=100, max_parallel_threads=6)

* **Parameters:**
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher.fetch_data_revision_history"></a>

#### fetch_data_revision_history(parallelise=False)

Fetches the data revision history for all attributes of the provided records and populates the
[`Record.data_revision_history`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) property.

* **Parameters:**
  **parallelise** – bool

<a id="dbtable-level"></a>

<a id="database-and-table-level"></a>

## Database and Table level

<a id="database"></a>

### Database

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database"></a>

### *class* Database

Represents an MI database, and provides access to its tables, unit systems, and record link groups.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.mi"></a>

#### *property* mi

MI Session that was used to create or access the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object. Used for any Service Layer calls made by
the [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database).

* **Returns:**
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.parameters"></a>

#### *property* parameters

Parameters associated with the database, indexed by name.

* **Returns:**
  Dict[str, [`DatabaseParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter)]

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

Currently selected unit system (default is [`DATABASE_UNIT_SYSTEM`](#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM)).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_all_link_details_where"></a>

#### get_all_link_details_where(name, table_name=None, to_table_name=None, to_db_key=None, rlg_types=None)

Returns all the named Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail)
objects that match the specified criteria.

#### WARNING
This method is deprecated. Use [`Database.record_link_groups`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).

* **Parameters:**
  * **name** – str (Name of [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object)
  * **table_name** – Optional[str]
  * **to_table_name** – Optional[str]
  * **to_db_key** – Optional[str]
  * **rlg_types** – Optional[List[str]]
* **Returns:**
  list of Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) class

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_link_detail"></a>

#### get_link_detail(name, table_name=None, to_table_name=None, to_db_key=None, rlg_type=None)

Returns the named Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object.
Must resolve to exactly one record link group.

#### WARNING
This method is deprecated. Use [`Database.record_link_groups`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).

* **Parameters:**
  * **name** – str (Name of [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) object)
  * **table_name** – str
  * **to_table_name** – str
  * **to_db_key** – str
  * **rlg_type** – str
* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) class

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.link_details"></a>

#### *property* link_details

Foundation API [`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects associated with the database.

#### WARNING
This method is deprecated. Use [`Database.record_link_groups`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).

* **Returns:**
  List[[`GRANTA_MIScriptingToolkit.RecordLinkGroupDetail`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups"></a>

#### *property* record_link_groups

All record link groups in the database.

* **Returns:**
  List[[`LinkGroupDetails`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails)]

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

Updates the list of tables associated with the database. Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.tables"></a>

#### *property* tables

Tables associated with the database.

* **Returns:**
  List[[`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.tables_by_name"></a>

#### *property* tables_by_name

Tables in the database, as dictionary keyed by name.

* **Returns:**
  Dict[str, [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.tables_by_guid"></a>

#### *property* tables_by_guid

Tables in the database, as dictionary keyed by GUID.

* **Returns:**
  Dict[str, [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table"></a>

#### get_table(name, subsets=Ellipsis, unit_system=None, absolute_temperatures=None)

Returns the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with the specified name. Case-insensitive.

If the `subsets` argument is not provided, the default subset is applied to the returned table. Set
`subsets` to an empty set to disable subset filtering.

If the `unit_system` argument is not provided, the currently active unit system is used.

If the `absolute_temperatures` argument is not provided, `absolute_temperatures` is set to `False`.

#### WARNING
The `subsets`, `unit_system`, and `absolute_temperatures` parameters are deprecated. To specify the
active subsets for the table, use [`Table.subsets`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets), [`Table.add_subsets()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.add_subsets), or
[`Table.remove_subsets()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.remove_subsets) on the returned table object. To specify the unit system or whether absolute
temperatures should be used, use [`Database.unit_system`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) or [`Database.absolute_temperatures`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

* **Parameters:**
  * **name** – str
  * **subsets** – Optional[Set[str]] (default value of `...`)
  * **unit_system** – Optional[str] (default value of `None`)
  * **absolute_temperatures** – Optional[bool] (default value of `None`)
* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid"></a>

#### get_table_by_guid(guid, subsets=Ellipsis, unit_system=None, absolute_temperatures=None)

Returns the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object with the specified GUID. Case-insensitive.

If the `subsets` argument is not provided, the default subset is applied to the returned table. Set
`subsets` to an empty set to disable subset filtering.

If the `unit_system` argument is not provided, the currently active unit system is used.

If the `absolute_temperatures` argument is not provided, `absolute_temperatures` is set to `False`.

#### WARNING
The `subsets`, `unit_system`, and `absolute_temperatures` parameters are deprecated. To specify the
active subsets for the table, use [`Table.subsets`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets), [`Table.add_subsets()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.add_subsets), or
[`Table.remove_subsets()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.remove_subsets) on the returned table object. To specify the unit system or whether absolute
temperatures should be used, use [`Database.unit_system`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) or [`Database.absolute_temperatures`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

* **Parameters:**
  * **guid** – str
  * **subsets** – Set[str] (default value of `...`)
  * **unit_system** – str (default value of [`DATABASE_UNIT_SYSTEM`](#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM))
  * **absolute_temperatures** – bool (default value of `False`)
* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name"></a>

#### search_for_records_by_name(name)

Performs a search on record name across the database. Returns only the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects whose
short or long names are an exact match for `name`. Case-insensitive. This method searches in the
currently active subsets for each table, and will raise an exception if a table has more than one
active subset.

Makes a separate Service Layer call for each table in the database.

**Note:** Use [`Table.search_for_records_by_name()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_name) to narrow your search to a single table.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text"></a>

#### search_for_records_by_text(text)

Performs a simple text search across the database for the string provided. Returns a list of matching
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. This method does not apply any subset filtering.

Makes a separate Service Layer call for each table in the database.

**Note:** Use [`Table.search_for_records_by_text()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_text) to narrow your search to a single table.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where"></a>

#### search_for_records_where(list_of_criteria, silent=True)

Performs a search using criteria within tables across the database.

Use [`Table.search_for_records_where()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) to narrow your search to a single table.

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
  * **list_of_criteria** – List[[`SearchCriterion`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)]
  * **silent** – bool
* **Returns:**
  a list of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects that match the provided criteria.
* **Return type:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_records_by_ids"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_record_by_id"></a>

#### get_record_by_id(hguid=None, vguid=None, history_identity=None, version_number=None)

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
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

<a id="table"></a>

### Table

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
of each [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object. If `filter_by_subset` is True then the operation will only
return records that are in the subset given in `subset_name`, if no value is provided then
the subset specified on the table will be used. If `filter_by_subset` is False then records
will be returned from all subsets. Makes a Service Layer call.

* **Parameters:**
  * **include_folders** – bool
  * **include_generics** – bool
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

#### WARNING
If you set `filter_by_subset` to True, you must either provide a `subset_name` or
ensure that the table has only one subset applied. If more than one subset is applied,
this will raise a ValueError.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_by_text"></a>

#### search_for_records_by_text(text, filter_by_subset=True, subset_name=None)

Performs a simple text search within the table for the specified string. Returns a list of matching
[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. If `filter_by_subset` is True then the search will only return records that
are in the subset given in `subset_name`, if no value is provided then the subset specified on the
table will be used. If `filter_by_subset` is False then records will be returned from all subsets.
Makes a Service Layer call.

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table being
searched has only one subset applied. If more than one subset is applied, this will raise a ValueError.

#### NOTE
Use [`Database.search_for_records_by_text()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) to search across the whole database.

* **Parameters:**
  * **text** – str
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where"></a>

#### search_for_records_where(list_of_criteria, silent=False, filter_by_subset=True, subset_name=None)

Performs a search using criteria within the table.

Use [`Database.search_for_records_where()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) to search across the whole database.

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
  * **list_of_criteria** – List[[`SearchCriterion`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion)]
  * **silent** – bool
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Return type:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  a list of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects that match the provided criteria.

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

Performs a Foundation API [`BrowseService.GetAttributeDetails()`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetAttributeDetails) request and creates a new set
of attributes for the table from the results.
Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.layouts"></a>

#### *property* layouts

Fetch and view the layouts available in this table.

* **Returns:**
  Dict[str, [`TableLayout`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout)]

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
  Dict[str, [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.mi"></a>

#### *property* mi

MI Session that was used to create or access the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object. Used for any Service Layer calls made by
the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

* **Returns:**
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.database"></a>

#### *property* database

[`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) in which the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) is defined.

* **Returns:**
  [`Database`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_attribute_definition"></a>

#### get_attribute_definition(name=None, identity=None)

Returns the [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object specified by `name` or the identifier `identity`.
Meta-attributes are also returned if the identifier is provided.

* **Parameters:**
  * **name** – str (Name of the [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object)
  * **identity** – int (Attribute identifier)
* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or List[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_by_ids"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_record_by_id"></a>

#### get_record_by_id(history_identity=None, hguid=None, vguid=None, version_number=None)

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
  * **version_number** – int (Record version number)
* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_record_by_lookup_value"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.children"></a>

#### *property* children

Return the children of the Table node. Analogous to [`Record.children`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children), this returns all the records one
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
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

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

Performs a search on record name within the table. Returns only the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects whose
short or long names are an exact match for `name`. If `filter_by_subset` is True then the search
will only return records that are in the subset given in `subset_name`, if no value is provided then
the subset specified on the table will be used. If `filter_by_subset` is False then records will be
returned from all subsets. Makes a Service Layer call. This method is Case-insensitive.

#### WARNING
If you set `filter_by_subset` to True, you must provide a `subset_name` or ensure that the table being
searched has only one subset applied. If more than one subset is applied, this will raise a ValueError.

#### NOTE
Use [`Database.search_for_records_by_name()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name) to search across the whole database.

* **Parameters:**
  * **name** – str
  * **filter_by_subset** – bool
  * **subset_name** – str
* **Returns:**
  List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_empty_attribute_value"></a>

#### create_empty_attribute_value(definition)

Create an empty [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) instance for an attribute from its
[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition).
This can subsequently be assigned to a record for import.

* **Parameters:**
  **definition** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
* **Returns:**
  [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record"></a>

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

* **Parameters:**
  **paths** – List[Dict[str, Union[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), str, None, List[str]]]]
* **Returns:**
  List[Tuple[dict, [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from"></a>

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
  * **color** – [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) (Optional) Sets the color of all folders and records in the path.
* **Returns:**
  The [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object at the end of the path: the created record if `end_node` has been specified,
  otherwise the last folder in the path.

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch"></a>

#### bulk_fetch(records, attributes=None, batch_size=100, parallelise=False, max_num_threads=6, include_binary_data=False)

Populates data values for all named [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) and [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) objects in
the specified [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Set `attributes` to  `None` to export all record data.
Attribute values for requested `attributes` are added to [`Record.attributes`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) dictionary whether the
attribute is populated or not.

Meta-attributes can be included in a bulk operation by providing the meta-attribute [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)
in `attributes`. [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) of meta-attributes can be obtained from the parent attribute
[`AttributeDefinition.meta_attributes`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.meta_attributes).

Attribute values will not be created for attributes not included in the export via the attributes argument and
trying to access them might raise a [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError).

If `include_binary_data` is set to False (default), the export will not fetch the binary data
representing the request File and Picture attributes and will instead export URLs (see the
[`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) documentation for more information on how to use the URL to access the data). This
setting is recommended for large files and pictures, or if the binary data itself is not required.

To summarize how the file and picture data can be accessed:

* `include_binary_data = False` (default): The [`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data = True`: The [`BinaryType.binary_data`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save) methods are both available to access and save
  the binary data. The [`BinaryType.url`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is empty and returns `None`.

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
Providing a list of attributes by name or by [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) will not fetch any meta-attributes
associated with those attributes. If the meta-attributes are not explicitly requested, then the resulting
[`AttributeValue.meta_attributes`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.meta_attributes) dictionary will contain empty meta-attribute values.

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
  * **attributes** – List[Union[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition),
    [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition), str]]
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
  * **include_binary_data** – bool (default value of False)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_associated_records"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history"></a>

#### bulk_fetch_data_revision_history(records, batch_size=100, parallelise=False, max_num_threads=6)

Fetches the data revision history for all attributes of the provided records and populates the
[`Record.data_revision_history`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) property.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelise** – bool
  * **max_num_threads** – int (default value of 6)
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
  List[[`Exporter`](#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter)]

<a id="linkgroupdetails"></a>

### LinkGroupDetails

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails"></a>

### *class* LinkGroupDetails

Provides access to the properties of a record link group.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.name"></a>

#### *property* name

Name of the record link group.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.table_to"></a>

#### *property* table_to

Name of the table targeted by the link group.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.database_to"></a>

#### *property* database_to

Database key of the database target by the link group.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.table_from"></a>

#### *property* table_from

Name of the table the link group comes from.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.database_from"></a>

#### *property* database_from

Database key of the database the link group originates from.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.type"></a>

#### *property* type

Whether the record link group is ‘static’, ‘crossDatabase’ or ‘dynamic’.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.reverse_name"></a>

#### *property* reverse_name

Name of the record link group in the return direction.

* **Returns:**
  str

<a id="tablelayout"></a>

### TableLayout

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout"></a>

### *class* TableLayout(name, table)

Provides a JSON-format display of a Granta layout. You can access this through the `layout` property.

#### NOTE
Do not create new instances of this class manually.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.__init__"></a>

#### \_\_init_\_(name, table)

* **Parameters:**
  * **name** – str
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.name"></a>

#### *property* name

Layout name.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.layout"></a>

#### *property* layout

JSON-formatted version of the layout.

* **Returns:**
  List[Dict[str, Union[str, List[str], Dict[str, Union[str, List[str]]]]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.categories"></a>

#### *property* categories

List of all the categories (headings) in the layout.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.attributes_by_category"></a>

#### *property* attributes_by_category

Dictionary of attribute lists, indexed by the layout category they are in.

* **Returns:**
  Dict[str, List[str]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.link_groups_by_category"></a>

#### *property* link_groups_by_category

Dictionary of link group lists, indexed by the layout category they are in.

* **Returns:**
  Dict[str, List[str]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.meta_attributes_by_attribute"></a>

#### *property* meta_attributes_by_attribute

Dictionary of meta-attribute lists, indexed by parent attributes.

* **Returns:**
  Dict[str, List[str]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.meta_attributes_on"></a>

#### meta_attributes_on(attribute_name)

Returns the list of meta-attributes corresponding to a given attribute in this layout.

* **Parameters:**
  **attribute_name** – str
* **Returns:**
  List[str]

<a id="exporter"></a>

### Exporter

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter"></a>

### *class* Exporter(mi, exporter_key)

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.__init__"></a>

#### \_\_init_\_(mi, exporter_key)

Represents a Granta MI FEA exporter. FEA exporters are used to export record data from Granta MI into formats
supported by CAD and CAE packages.

This operation performs no subset filtering, so all tabular rows will be included in the Initial XML
regardless of the subset membership of the linked records.

* **Parameters:**
  * **mi** – Current [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **exporter_key** – str (Unique identifier for this exporter)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.default_file_extension"></a>

#### *property* default_file_extension

Returns the default file extension as defined by the exporter configuration file.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.save"></a>

#### save(file_path, file_name=None, file_extension=None)

Saves the output of the last FEA export to the path provided using the default naming convention and file
extension for the exporter; specify a file_name or file_extension to override the defaults.

* **Parameters:**
  * **file_path** – str (File path of the form *C:\\Users\\Username\\*)
  * **file_name** – str (*Optional* - Output file name. Does not require a file extension.)
  * **file_extension** – str (*Optional* - Output file extension.)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.default_file_name"></a>

#### *property* default_file_name

Returns the default file name for the last performed export, as defined by the exporter configuration file.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.default_encoding"></a>

#### *property* default_encoding

Returns the default file encoding scheme as defined by the exporter configuration file.

#### NOTE
This is returned as a Python-compatible string (e.g. “cp1252”) rather than the .NET codepage “1252”.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.default_bom"></a>

#### *property* default_bom

Returns the default byte-order mark as defined by the exporter configuration file. If no BOM is required by
default, this property is `None`.

* **Returns:**
  Union[str, None]

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export"></a>

#### get_parameters_required_for_export(records)

Returns a dictionary of all the parameter definitions the Exporter requires to export the data from
the specified list of records, indexed by parameter name.

* **Parameters:**
  **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  Dict[str, [`ExporterParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.run_exporter"></a>

#### run_exporter(records, stop_before=None, parameter_defs=None, sig_figs=None)

Performs an FEA export on the specified list of records, returning the data representing the records as a string.

* **Parameters:**
  * **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **stop_before** – Union[int, str] (Either refers to the index of the transform step (int) or its name (str))
  * **parameter_defs** – Dict[str, [`ExporterParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter)]
  * **sig_figs** – int
* **Returns:**
  str (Contains data output by the exporter)

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.export_list_is_valid"></a>

#### export_list_is_valid(records)

Verifies that a list of records is valid for export.

If the exporter was created from a table search, then this method verifies that all records come from this
table. Otherwise, the first record is used to determine which table the exporter belongs to.

* **Parameters:**
  **records** – List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  bool (Whether the specified list of records can be exported with this exporter)

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.name"></a>

#### *property* name

The name of the exporter, as defined in the `.exp` file

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.exporter_key"></a>

#### *property* exporter_key

The unique key, that is used to identify the exporter.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.model"></a>

#### *property* model

The Finite-Element Material Model name.

#### NOTE
This name is exported to the initial XML file, and appears in the MI Viewer and
MI Explore export interfaces.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.package"></a>

#### *property* package

The Package defines the name of the target CAE analysis package.

#### NOTE
This name is exported to the initial XML file, and appears in the MI Viewer and
MI Explore export interfaces.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.description"></a>

#### *property* description

The Exporter description.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.unit_systems"></a>

#### *property* unit_systems

All the unit-systems this exporter supports.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.unit_system"></a>

#### *property* unit_system

The currently selected unit-system.

If None then the default unit system for the exporter will be used, otherwise the provided
unit-system will be used when running the exporter.

* **Returns:**
  Optional[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.use_absolute_temperatures"></a>

#### *property* use_absolute_temperatures

Whether this exporter should use absolute temperatures.

If `True` the exporter will use the absolute form of the temperature unit defined in the
selected unit-system. Otherwise, it will use the relative form.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.absolute_temperatures_optional"></a>

#### *property* absolute_temperatures_optional

Whether this exporter allows the user to specify absolute or relative temperatures.

If `True` the user can choose to use the absolute or relative form of the temperature
unit defined in the unit system. Otherwise, the exporter will use the form defined in the
`.exp` file.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.transforms"></a>

#### *property* transforms

Iterable containing the transform steps defined for this exporter.

Each entry in the iterable contains the index of the transform stage, and the ID.
Either can be used when running the exporter to selectively run transformation steps.

* **Returns:**
  Iterable[Mapping[str, Union[str, int]]]

<a id="record-level"></a>

<a id="id2"></a>

## Record level

<a id="record"></a>

<a id="id3"></a>

### Record

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record"></a>

### *class* Record(name, table, parent=None, short_name=None, attributes=None, subsets=None, folder=None, record_color=None, release_record=True)

Stores and provides access to record attributes, pseudo-attributes, links and children. Provides methods for adding,
editing and deleting records, and importing/exporting record data.

New [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects may be created to represent records that do not currently exist in the database:

* A name and parent table must be specified. `name` will become the record’s long name. The record short name
  (or tree name) can be set via the argument `short_name`, or via the [`Record.short_name`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.short_name) property following
  object creation. If a record is pushed to MI without a specifying short name, the short name will default to the
  record name.
* Records created this way will not exist in the host database until the changes have been
  pushed to MI (see [`Session.update()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.update)).

#### NOTE
Do not create new instances of [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects for records which are already in the database.
Existing records will have Foundation API classes associated with them, from which the Streamlined API will
automatically generate and return [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects as required.

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.__init__"></a>

#### \_\_init_\_(name, table, parent=None, short_name=None, attributes=None, subsets=None, folder=None, record_color=None, release_record=True)

* **Parameters:**
  * **name** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) (Long name for new records)
  * **table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **parent** – [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **short_name** – [`str`](https://docs.python.org/3/library/stdtypes.html#str) (Short (tree) name for new records)
  * **attributes** – Dict[[`str`](https://docs.python.org/3/library/stdtypes.html#str), [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]
  * **subsets** – Set[[`str`](https://docs.python.org/3/library/stdtypes.html#str)] (Subsets the record belongs to)
  * **folder** – [`bool`](https://docs.python.org/3/library/functions.html#bool) (Whether the record is ‘Folder’ type)
  * **record_color** – [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) (Color of the record)
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
  [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.table"></a>

#### *property* table

Parent [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) the record belongs to.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

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
  [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)

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

* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.find_parent"></a>

#### find_parent()

Finds and sets the parent record or table.

If a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) has been created from a Foundation API [`GRANTA_MIScriptingToolkit.RecordReference`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RecordReference)
object (for example, an existing database record), its parent may not be defined. This function gets the
Foundation API [`GRANTA_MIScriptingToolkit.TreeRecord`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.TreeRecord) object (if it does not already exist) and uses
it to create and/or set a parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object. If the record is at the highest level, the parent is
set as the host [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object instead.

Since the parent record is in all subsets that this record is in, this operation performs no subset filtering.

* **Returns:**
  None

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

Flags attributes to update on the server when [`Session.update()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.update)
is next called. If [`set_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes) is not called on modified attributes, changes
to those attributes will not be transferred to MI.

* **Parameters:**
  **attributes** – Union[Iterable[AttributeValue]]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.clear_attributes"></a>

#### clear_attributes(attributes)

Flags attributes to have their data value on the server deleted when [`Session.update()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.update)
is next called. Does not delete the local value of flagged attributes, only the data on MI. Supersedes
previous [`set_attributes()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_attributes) calls.

* **Parameters:**
  **attributes** – Union[Iterable[AttributeValue]]
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
  Dict[str, [`PseudoAttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue)]

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

Refreshes the Foundation API [`GRANTA_MIScriptingToolkit.TreeRecord`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.TreeRecord) object associated with the
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

Always includes binary data in the response. Use the [`bulk_fetch()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method if URL
data representation is required.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos"></a>

#### refetch_pseudos()

Fetches pseudo-attribute data for this record, and updates subsets for the record if not set.
Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes"></a>

#### *property* attributes

Attributes associated with the record, indexed by attribute name.

* **Returns:**
  Dict[str,
  [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_attributes"></a>

#### get_attributes(names=None, types=None, include_attributes=True, include_metas=False, include_pseudos=False, empty=None)

Retrieve a list of attributes from the `record.attributes` dictionary. You can narrow the results by
specifying the attribute names or data types, or the required attribute categories (attribute,
meta-attribute, or pseudo-attribute).

If the `record.attributes` dictionary is empty when `get_attributes` is called, it will be
populated before retrieving any attributes.

This operation performs no subset filtering, so all tabular rows will be included in the response
regardless of the subset membership of the linked records.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type"></a>

#### *property* type

Record type.

On record creation via the MI Scripting Toolkit, the record type can only be set to [`RecordType.Folder`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder) or
[`RecordType.Record`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Record). The type of an existing record cannot be set via this property.

Adding children to a record, or populating attributes on a folder both result in the type updating to
[`RecordType.Generic`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Generic) during the update.

* **Return type:**
  [RecordType](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType)

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
[`Table.all_records()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.all_records), which all apply subset filtering. If the [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) subset configuration has
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
  * **target_table** – [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **link_direction** – str (Which direction to follow links in: `Both` (default), `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)] (Path of tabular attributes to follow - if `None`, all
    paths are followed)
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

Whether the record is a [`RecordType.Folder`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder) type.

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
  [`RecordVersionHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory)

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
Makes a Service Layer call.

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
  List[[`Exporter`](#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history"></a>

#### *property* data_revision_history

Data revision history for all attributes, indexed by attribute name.

* **Returns:**
  Dict[str,
  [`DataRevisionHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.move_to"></a>

#### move_to(new_parent)

Moves the record and all its descendants to a new parent.

The provided new parent must be a [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) of type [`RecordType.Folder`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder) or
[`RecordType.Generic`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Generic), or a [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) to move the record at the root of the table.

Some cached properties are cleared after the record has been moved, as they would be out-of-date:

* [`Record.pseudo_attributes`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.pseudo_attributes) and pseudo-attribute properties
* [`Record.path`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.path)
* [`Record.parent`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent)

They will be dynamically retrieved from the server on property access, or can be manually refreshed via the
following methods:

* [`Record.refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos)
* [`Record.refresh_path()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_path)
* [`Record.find_parent()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.find_parent)
* [`Record.refresh_properties()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refresh_properties)

[`Record.children`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.children) is not cleared, because children are moved with the parent. Their internal state might
be outdated, and if necessary can be updated via the methods listed above.

`children` properties of the source and target parent are not cleared or updated. This is by design, to
prevent unnecessary updates in scripts performing a large number of record move operations.
To update the list of children of a table (after moving a child record from it or to it), use the method
[`Table.refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refetch_children).
To update the list of children of a record (after moving a child record from it or to it), use the method
[`Record.refetch_children()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_children).

* **Parameters:**
  **new_parent** – [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) | [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
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
  * **destination** ([*Record*](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) *or* [*Table*](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)) – Location in the tree where to create the copy.
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
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) | None

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.is_writable"></a>

#### *property* is_writable

Whether the current user has write permissions on the record.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_short_name"></a>

#### *property* parent_record_short_name

Short name of the parent record.

If the record is at the root of the table, returns the name of the table.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_name"></a>

#### *property* parent_record_name

Name of the parent record.

If the record is at the root of the table, returns the name of the table.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.parent_record_history_identity"></a>

#### *property* parent_record_history_identity

History identity of the parent record.

If the record is at the root of the table, returns the history identity of the table root node.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_on"></a>

#### *property* last_modified_on

Datetime of the last modification.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.last_modified_by"></a>

#### *property* last_modified_by

User who last modified the record.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_on"></a>

#### *property* created_on

Datetime of the record creation.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.created_by"></a>

#### *property* created_by

User who created the record.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.released_on"></a>

#### *property* released_on

Datetime of the record release.

Read-only property. This is only available for records that exist on the server.
This property is populated from a pseudo-attribute value and can be refreshed via [`refetch_pseudos()`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_pseudos).

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="attribute-level"></a>

<a id="id4"></a>

## Attribute level

There are two types of attribute object at the attribute level: [Attribute Definitions](#attribute-defs) and [Attribute Values](#attribute-vals).

<a id="attribute-defs"></a>

<a id="attribute-definitions"></a>

### Attribute Definitions

These classes describe how an attribute appears in the schema of a given table. There are two base types:

> * [PseudoAttributeDefinition](#pseudo-attribute-def) - Class for pseudo-attributes. Operates like [AttributeDefinition](#attribute-def) but is not a child of it.
> * [AttributeDefinition](#attribute-def) - Base class and parent of all AttributeDefinition classes.

The AttributeDefinition class hierarchy is as follows:

> * [AttributeDefinition](#attribute-def) (no objects are direct instances of this type)
>   * [AttributeDefinitionDatetime](#attribute-def-datetime)
>   * [AttributeDefinitionDiscrete](#attribute-def-discrete)
>   * [AttributeDefinitionFile](#attribute-def-file)
>   * [AttributeDefinitionHyperlink](#attribute-def-hyperlink)
>   * [AttributeDefinitionInteger](#attribute-def-integer)
>   * [AttributeDefinitionLogical](#attribute-def-logical)
>   * [AttributeDefinitionLongText](#attribute-def-long-text)
>   * [AttributeDefinitionPicture](#attribute-def-picture)
>   * [AttributeDefinitionRange](#attribute-def-range)
>   * [AttributeDefinitionShortText](#attribute-def-short-text)
>   * [AttributeDefinitionTabular](#attribute-def-tabular)
>   * [AttributeDefinitionMultiValue](#attribute-def-multi-valued) (no objects are direct instances of this type)
>     * [AttributeDefinitionFloatFunctional](#attribute-def-float-functional)
>     * [AttributeDefinitionPoint](#attribute-def-point)
>   * [AttributeDefinitionUnsupported](#attribute-def-unsupported) (no objects are direct instances of this type)
>     * [AttributeDefinitionDiscreteFunctional](#attribute-def-discrete-functional)

<a id="pseudo-attribute-def"></a>

<a id="pseudoattributedefinition"></a>

#### PseudoAttributeDefinition

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition"></a>

### *class* PseudoAttributeDefinition(name)

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition.id"></a>

#### *property* id

Attribute identifier (this is always 0 for pseudo-attributes).

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition.read_only"></a>

#### *property* read_only

Whether the current user has the correct permissions to edit the attribute.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition.unit"></a>

#### *property* unit

Unit symbol for the pseudo-attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition.name"></a>

#### *property* name

Name of the pseudo-attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition.type"></a>

#### *property* type

Data type of the pseudo-attribute (four-character string).

* **Returns:**
  str

<a id="attribute-def"></a>

<a id="attributedefinition"></a>

#### AttributeDefinition

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition"></a>

### *class* AttributeDefinition

Base attribute definition class.

#### NOTE
Do not create new instances of this class or its subclasses; it represents a pre-existing database
structure.

Stores basic information about an attribute, such as data type or possible values. Contains information about
the attribute itself, and cannot be used to set attribute values.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.table"></a>

#### *property* table

Parent [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) the attribute belongs to.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.id"></a>

#### *property* id

Attribute identifier.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.axis_name"></a>

#### *property* axis_name

Y-axis name (for functional data attributes only).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.name"></a>

#### *property* name

Attribute name.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.order"></a>

#### *property* order

Display order in MI Viewer.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.is_meta"></a>

#### *property* is_meta

Whether the attribute is a meta-attribute or not.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.is_meta_for"></a>

#### *property* is_meta_for

Name of the parent attribute, if the attribute is a meta-attribute. Returns `None` if not a meta-attribute.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.type"></a>

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

DSFN attributes are not fully supported by the MI Scripting Toolkit. Definitions can be obtained but attribute
values are exported as `UNSUPPORTED DATA TYPE` and contain no data.
MAFN attribute definitions cannot be obtained via the MI Scripting Toolkit.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.unit"></a>

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.meta_attributes"></a>

#### *property* meta_attributes

Meta-attributes associated with this attribute, indexed by name.

* **Returns:**
  Dict[str, [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.search_criterion"></a>

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

#### NOTE
To perform an exact search on a discrete attribute, use either the `contains_any` or
`contains_all` parameters. In the case of searching for a single discrete value, the argument
should be a list containing the search term.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.history"></a>

#### *property* history

Revision history of the attribute, as an [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object.

* **Returns:**
  [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object

<a id="attribute-def-datetime"></a>

<a id="attributedefinitiondatetime"></a>

#### AttributeDefinitionDatetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDatetime"></a>

### *class* AttributeDefinitionDatetime

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for date-time attributes.

Provides properties to view the table-wide minimum and maximum values for this attribute.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDatetime.max"></a>

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDatetime.min"></a>

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="attribute-def-discrete"></a>

<a id="attributedefinitiondiscrete"></a>

#### AttributeDefinitionDiscrete

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscrete"></a>

### *class* AttributeDefinitionDiscrete

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for discrete attributes.

Provides a method to view the possible discrete values of an attribute.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscrete.discrete_values"></a>

#### *property* discrete_values

All possible discrete values of the attribute.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscrete.is_multivalued"></a>

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="attribute-def-file"></a>

<a id="attributedefinitionfile"></a>

#### AttributeDefinitionFile

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFile"></a>

### *class* AttributeDefinitionFile

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for file attributes.

<a id="attribute-def-hyperlink"></a>

<a id="attributedefinitionhyperlink"></a>

#### AttributeDefinitionHyperlink

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionHyperlink"></a>

### *class* AttributeDefinitionHyperlink

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for hyperlink attributes.

<a id="attribute-def-integer"></a>

<a id="attributedefinitioninteger"></a>

#### AttributeDefinitionInteger

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger"></a>

### *class* AttributeDefinitionInteger

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for integer attributes.

Provides properties to view the table-wide minimum and maximum values for this attribute.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger.max"></a>

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger.min"></a>

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="attribute-def-logical"></a>

<a id="attributedefinitionlogical"></a>

#### AttributeDefinitionLogical

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionLogical"></a>

### *class* AttributeDefinitionLogical

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for logical attributes.

<a id="attribute-def-long-text"></a>

<a id="attributedefinitionlongtext"></a>

#### AttributeDefinitionLongText

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionLongText"></a>

### *class* AttributeDefinitionLongText

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for long text attributes.

<a id="attribute-def-picture"></a>

<a id="attributedefinitionpicture"></a>

#### AttributeDefinitionPicture

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPicture"></a>

### *class* AttributeDefinitionPicture

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for picture attributes.

<a id="attribute-def-range"></a>

<a id="attributedefinitionrange"></a>

#### AttributeDefinitionRange

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange"></a>

### *class* AttributeDefinitionRange

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for range attributes.

Provides access to range-specific information and methods.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange.database_unit"></a>

#### *property* database_unit

The database unit for this attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange.max"></a>

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange.min"></a>

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange.unit"></a>

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="attribute-def-short-text"></a>

<a id="attributedefinitionshorttext"></a>

#### AttributeDefinitionShortText

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionShortText"></a>

### *class* AttributeDefinitionShortText

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for short text attributes.

<a id="attribute-def-tabular"></a>

<a id="attributedefinitiontabular"></a>

#### AttributeDefinitionTabular

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular"></a>

### *class* AttributeDefinitionTabular

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for tabular data attributes.

Provides access to tabular-specific information and methods, such as columns, linking attribute and
cross-table links.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.linking_attribute"></a>

#### *property* linking_attribute

Linking attribute, a short text-type attribute used to link rows in the tabular data attribute to records.
Returns `None` for purely local tabular data or if the user cannot access the table in Granta MI.

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.linking_table"></a>

#### *property* linking_table

[`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object which the linking attribute belongs to. Returns `None` for purely local tabular data
or if the user cannot access the table in Granta MI.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_types"></a>

#### *property* column_types

Data type in each column. Only populated for local tabular columns. The element will be an empty string
otherwise.

* **Example:**
  `['STXT', 'POIN', 'DISC', '', '']`
* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_histories"></a>

#### *property* column_histories

The revision histories of each column, as an ordered list of [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) objects.

The object history of unavailable columns is `None`. See [`column_targets`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_targets).

* **Returns:**
  List[Optional[[`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_units"></a>

#### *property* column_units

Unit symbols for each column.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_database_units"></a>

#### *property* column_database_units

Database unit symbols for each column.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.discrete_values"></a>

#### *property* discrete_values

All possible discrete values, for all columns with the discrete data type.

* **Returns:**
  List[List[str]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_targets"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.columns"></a>

#### *property* columns

Column names (headers).

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.columns_to_process"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.ignore_linked_records"></a>

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

<a id="attribute-def-multi-valued"></a>

<a id="attributedefinitionmultivalue"></a>

#### AttributeDefinitionMultiValue

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue"></a>

### *class* AttributeDefinitionMultiValue

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for functional and point data attributes.

Provides access to functional data parameters.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue.parameters"></a>

#### *property* parameters

Parameters associated with the attribute, indexed by name.

* **Returns:**
  Dict[str, [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue.database_unit"></a>

#### *property* database_unit

The database unit for this attribute.

* **Returns:**
  str

<a id="attribute-def-float-functional"></a>

<a id="attributedefinitionfloatfunctional"></a>

#### AttributeDefinitionFloatFunctional

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFloatFunctional"></a>

### *class* AttributeDefinitionFloatFunctional

Extended [`AttributeDefinitionMultiValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue) class for float functional attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFloatFunctional.database_unit"></a>

#### *property* database_unit

The database unit for this attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFloatFunctional.parameters"></a>

#### *property* parameters

Parameters associated with the attribute, indexed by name.

* **Returns:**
  Dict[str, [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="attribute-def-point"></a>

<a id="attributedefinitionpoint"></a>

#### AttributeDefinitionPoint

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint"></a>

### *class* AttributeDefinitionPoint

Extended [`AttributeDefinitionMultiValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue) class for point attributes.

Provides access to point-specific information and methods.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.is_multivalued"></a>

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.database_unit"></a>

#### *property* database_unit

The database unit for this attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.max"></a>

#### *property* max

Maximum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.min"></a>

#### *property* min

Minimum value of the data attribute. Affected by user read permissions.

* **Returns:**
  Optional[Union[float, int, datetime.datetime]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.parameters"></a>

#### *property* parameters

Parameters associated with the attribute, indexed by name.

* **Returns:**
  Dict[str, [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.unit"></a>

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="attribute-def-unsupported"></a>

<a id="attributedefinitionunsupported"></a>

#### AttributeDefinitionUnsupported

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionUnsupported"></a>

### *class* AttributeDefinitionUnsupported

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for unsupported attribute types (discrete functional).

Provides access to the limited information available for unsupported attribute types (name, type and unit, if
present).

<a id="attribute-def-discrete-functional"></a>

<a id="attributedefinitiondiscretefunctional"></a>

#### AttributeDefinitionDiscreteFunctional

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscreteFunctional"></a>

### *class* AttributeDefinitionDiscreteFunctional

Extended [`AttributeDefinitionUnsupported`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionUnsupported) class for discrete functional attributes.

Provides access to the limited information available (name, type and unit, if present).”

<a id="attribute-vals"></a>

<a id="attribute-values"></a>

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

<a id="attributevalue"></a>

#### AttributeValue

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.record"></a>

#### *property* record

[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) in which the attribute value is defined. Would be None
if the [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) has been created outside a Record context, e.g.
with [`Table.create_empty_attribute_value`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_empty_attribute_value).

* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.definition"></a>

#### *property* definition

[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) associated with this [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue).

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.id"></a>

#### *property* id

Attribute identifier.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_meta"></a>

#### *property* is_meta

Whether the attribute is a meta-attribute.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_meta_for"></a>

#### *property* is_meta_for

Name of the parent attribute, if a meta-attribute. Returns `None` if not.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.meta_attributes"></a>

#### *property* meta_attributes

Meta-attributes associated with this attribute. Does not make calls to the Service Layer.

* **Returns:**
  Dict[str, [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.name"></a>

#### *property* name

Attribute name.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.type"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.unit"></a>

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_applicable"></a>

#### *property* is_applicable

Whether the attribute is applicable to the current record. Setting this to `False` will clear
any data values on the attribute.

* **Returns:**
  bool

<a id="attribute-val-bin"></a>

<a id="attributebinary"></a>

#### AttributeBinary

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary"></a>

### *class* AttributeBinary(attr_def, \_gdl_av, \_mi, record, metas=None, path=None, content_type=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class to handle [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) objects
as attribute data values.

Provides access to [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object methods and properties.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.url"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.mime_file_type"></a>

#### *property* mime_file_type

MIME (Multipurpose Internet Mail Extensions) file type, if populated.

When exporting, this property is populated with the value of the MIME file type as determined by Granta MI.

When importing, this property is populated automatically by the `load()` method:

* For Picture attributes, the MIME file type is determined by the image data.
* For File attributes, this property is not used and is set to `None`.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.is_empty"></a>

#### is_empty()

Checks if the [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object is populated by checking if it contains any binary data.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.value"></a>

#### *property* value

Returns the file as a bytes object, or None if unset.

* **Returns:**
  bytes or None.

<a id="attribute-val-pic"></a>

<a id="attributepicture"></a>

#### AttributePicture

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture"></a>

### *class* AttributePicture(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeBinary`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary) class for handling [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) objects.

Provides access to [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) save/load methods.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save"></a>

#### save(path)

Wraps the [`Picture.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) method.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the image should be saved.
  Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.load"></a>

#### load(path)

Wraps the [`Picture.load()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load) method (populates the [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) object with the specified image file).

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path to the image file to load.
  Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="attribute-val-file"></a>

<a id="attributefile"></a>

#### AttributeFile

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile"></a>

### *class* AttributeFile(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeBinary`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary) class to handle [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) objects.

Provides access to [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object save/load methods, file name, and description.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save"></a>

#### save(path)

Wraps the [`File.save()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save) method.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the file should be saved.
  Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.load"></a>

#### load(path)

Wraps the [`File.load()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load) method (populates the [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object with the specified file).

* **Parameters:**
  **path** – Union[str, pathlib.Path] (Path to the file to be imported.
  Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.file_name"></a>

#### *property* file_name

Name of the file associated with the [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object. Displayed in MI applications.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.description"></a>

#### *property* description

Description of the file displayed in MI applications.

* **Returns:**
  str

<a id="attribute-val-dttm"></a>

<a id="attributedate"></a>

#### AttributeDate

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate"></a>

### *class* AttributeDate(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for date attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate.value_as_string"></a>

#### *property* value_as_string

Return the value of the date attribute as a string.

* **Returns:**
  str | None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate.value"></a>

#### *property* value

Return the value of the date attribute as a [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) object.

* **Returns:**
  [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) object | None

<a id="attribute-val-disc"></a>

<a id="attributediscrete"></a>

#### AttributeDiscrete

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete"></a>

### *class* AttributeDiscrete(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for discrete attributes.

Provides access to the list of strings that store the attribute’s data values, and their display order.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.__init__"></a>

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinitionDiscrete`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscrete) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)] (Foundation API
    [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute of this attribute)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value"></a>

#### *property* value

Discrete value(s) associated with this attribute.

* **Returns:**
  List[str] or str if not multivalued

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.order"></a>

#### *property* order

Display order of the discrete data values (strings) in MI Viewer. Order cannot be edited using the MI
Scripting Toolkit.

* **Returns:**
  List[int]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.is_multivalued"></a>

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.possible_discrete_values"></a>

#### *property* possible_discrete_values

List of the attribute’s possible discrete data values.

* **Returns:**
  List[str]

<a id="attribute-val-func"></a>

<a id="attributefunctional"></a>

#### AttributeFunctional

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.update_header_units"></a>

#### update_header_units()

Updates the unit symbols in the header with the currently selected units.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.unit"></a>

#### *property* unit

Unit symbol for the y-axis.

To access the unit for the x-axis parameter or constraint parameters, use the `unit` property on the object
returned by the [`xaxis_parameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.xaxis_parameter) or [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) respectively.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.clear"></a>

#### clear()

Deletes all data stored in the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.is_empty"></a>

#### is_empty()

Checks whether any of the data values in the attribute are populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_point"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_range"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.xaxis_parameter"></a>

#### *property* xaxis_parameter

[`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) for the current x-axis parameter of the functional data attribute.

Modify the [`ParameterDefinition.unit`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property on the returned object to specify a different unit for
import.

* **Returns:**
  [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.column_headers"></a>

#### *property* column_headers

Column headers with units.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.constraint_column_index"></a>

#### *property* constraint_column_index

Mapping of columns to indices for functional data attributes.

* **Returns:**
  Dict[str, int]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.data_by_column"></a>

#### data_by_column()

Sorts data into columns (lists of values indexed by column name). Changing a dictionary generated
using this method does not affect the underlying data, and data in the dictionary will not be
refreshed automatically if the underlying data changes.

* **Returns:**
  Dict[str, List[Any]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.parameters"></a>

#### *property* parameters

Parameters used by the functional data attribute, indexed by name.

Modify the [`ParameterDefinition.unit`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property on the returned objects to specify a different unit for
import.

* **Returns:**
  Dict[str, [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="attribute-val-series"></a>

<a id="functionalseries"></a>

#### FunctionalSeries

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries"></a>

### *class* FunctionalSeries(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) class for Series functional data attributes.

Provides access to Series numbers and linestyles, and a method of generating a [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object from a
[`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object ([`generate_grid_version()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.generate_grid_version)).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.generate_grid_version"></a>

#### generate_grid_version()

Creates a Gridded version of the [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object and returns a copy of it.

* **Returns:**
  [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.data_with_series_number"></a>

#### *property* data_with_series_number

Series number for all data points, returned as an additional column with the data values.

* **Returns:**
  List[List[Union[str, float, bool, int]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.series_linestyles"></a>

#### *property* series_linestyles

Linestyles for each series (linestyle can be ‘Lines’, ‘Markers’, or ‘Both’).

* **Returns:**
  Dict[int, str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.log_yaxis"></a>

#### *property* log_yaxis

Whether the Y axis is using a logarithmic scale.

* **Returns:**
  bool

<a id="attribute-val-grid"></a>

<a id="functionalgrid"></a>

#### FunctionalGrid

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid"></a>

### *class* FunctionalGrid(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) class for Gridded functional data attributes.

Provides access to linestyle and a method of generating a [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object from a
[`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object ([`generate_series_version()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.generate_series_version)).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.generate_series_version"></a>

#### generate_series_version()

Creates a Series version of the [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object and returns a copy of it.

* **Returns:**
  [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.linestyle"></a>

#### *property* linestyle

Linestyle for gridded functional data (gridded data can only have one linestyle:
‘Lines’, ‘Markers’, or ‘Both’).

* **Returns:**
  str

<a id="attribute-val-hlnk"></a>

<a id="attributehyperlink"></a>

#### AttributeHyperlink

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink"></a>

### *class* AttributeHyperlink(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for hyperlink attributes.

Provides access to the `hyperlink_description` and `hyperlink_display` text properties.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object"></a>

#### *property* object

Hyperlink attribute object value.

* **Returns:**
  [`Hyperlink`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink)

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value"></a>

#### *property* value

Returns the URL as a string, or `None` if unset.

* **Returns:**
  str or `None`.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display"></a>

#### *property* hyperlink_display

Indicates how the hyperlink should be opened when clicked on in MI applications. Takes one of the
following values:

- `New`: Open in a new window or tab.
- `Top`: Open in the current window or tab.
- `Content`: Open within the current MI application (for example, in a frame or dialog).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description"></a>

#### *property* hyperlink_description

Text which displays instead of the URL in MI applications.

* **Returns:**
  str

<a id="attribute-val-int"></a>

<a id="attributeinteger"></a>

#### AttributeInteger

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger"></a>

### *class* AttributeInteger(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for integer attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="attribute-val-logi"></a>

<a id="attributelogical"></a>

#### AttributeLogical

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLogical"></a>

### *class* AttributeLogical(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for logical attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLogical.__init__"></a>

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

<a id="attributepoint"></a>

#### AttributePoint

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint"></a>

### *class* AttributePoint(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for point data attributes.

Provides access to lists of point values and their parameters. Points can be multi-valued and are represented
in the Streamlined API as lists of floats. They can have multiple parameters.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.__init__"></a>

#### \_\_init_\_(attr_def, \_gdl_av, \_mi, record, metas=None)

* **Parameters:**
  * **attr_def** – [`AttributeDefinitionPoint`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint) object
  * **\_gdl_av** – Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for this attribute
  * **\_mi** – [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **metas** – List[[`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue)]
    (Foundation API [`GRANTA_MIScriptingToolkit.AttributeValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.AttributeValue) class for each meta-attribute
    of this attribute)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.is_multivalued"></a>

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated. [`AttributePoint`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint) objects are empty if the length
of the list [`AttributePoint.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value) == 0.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.is_estimated"></a>

#### *property* is_estimated

Whether the value has been estimated.

Defaults to False for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.parameter_definitions"></a>

#### *property* parameter_definitions

Parameter definitions for the parameters associated with the point attribute, indexed by name.

Modify the [`ParameterDefinition.unit`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property on the returned objects to specify a different unit for
import.

* **Returns:**
  Dict[str, [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.parameters"></a>

#### *property* parameters

Parameters associated with each point in [`AttributePoint.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value). Each point has a
dictionary, indexed by parameter name and containing the parameter value for that point.

* **Returns:**
  List[Dict[str, Union[float, str]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value"></a>

#### *property* value

Point values associated with this attribute.

* **Returns:**
  Union[List[float], float]

<a id="attribute-val-rnge"></a>

<a id="attributerange"></a>

#### AttributeRange

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange"></a>

### *class* AttributeRange(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for range data attributes.  Range attribute values are represented in
the MI Scripting Toolkit by dictionaries of the form `{'low': float, 'high': float}`, and should be entered
in this form when editing them.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.is_estimated"></a>

#### *property* is_estimated

Whether the value has been estimated.

Defaults to False for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.high_value_is_inclusive"></a>

#### *property* high_value_is_inclusive

Whether the high value is included in the range.

Defaults to True for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.low_value_is_inclusive"></a>

#### *property* low_value_is_inclusive

Whether the low value is included in the range.

Defaults to True for new attribute values.

return: bool

<a id="attribute-val-tabl"></a>

<a id="attributetabular"></a>

#### AttributeTabular

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular"></a>

### *class* AttributeTabular(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for tabular data attributes.

Provides access to tabular data and its properties, such as linking attribute and table, and methods for
adding, deleting or swapping rows.

#### WARNING
Importing an empty tabular attribute is deprecated. To delete all rows in an existing tabular attribute,
use the [`Record.clear_attributes`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.clear_attributes) method to delete the attribute value. To mark the attribute
as Not Applicable, set the [`AttributeValue.is_applicable`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_applicable) property to `False`.

Use the [`AttributeTabular.shape`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.shape) property to determine the current number of rows in the
tabular attribute.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.columns"></a>

#### *property* columns

List of columns in the tabular data.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.column_types"></a>

#### *property* column_types

Data type in each column. Only populated for local, linked attribute, or linked column tabular columns.
The element will be an empty string otherwise.

* **Example:**
  `['STXT', 'POIN', 'DISC', '', '']`
* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linked_columns"></a>

#### *property* linked_columns

Whether each column is linked or not.

* **Returns:**
  List[bool]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linking_table"></a>

#### *property* linking_table

[`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object which the linking attribute belongs to. Returns `None` for purely local tabular data.

* **Returns:**
  [`Table`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linking_attribute"></a>

#### *property* linking_attribute

Linking attribute, a short text-type attribute used to link rows in the tabular data attribute to records.
Returns `None` for purely local tabular data.

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value"></a>

#### *property* value

Raw data for the attribute (list of data values per column).

* **Returns:**
  List[List[Union[str, list, [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture), [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File), [`Hyperlink`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink), float, int, tuple]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.units"></a>

#### *property* units

[`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object associated with this [`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object.

* **Returns:**
  [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.show"></a>

#### show()

Displays the data as an ascii-art style table.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.load"></a>

#### load()

Loads linked tabular data into the class.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linked_records"></a>

#### *property* linked_records

The records linked to each row, indexed by the linking value of each row at loading.

These links are calculated in Granta MI, and therefore cannot be edited by the user. The dictionary is
unaffected by local changes to the tabular data, and the data must be re-imported to reflect local changes.

This property will be empty if the user cannot access the linked table, or if
[`AttributeDefinitionTabular.ignore_linked_records`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.ignore_linked_records) was set to `True` before data export.

* **Returns:**
  Dict[str, List[[`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.shape"></a>

#### *property* shape

Number of columns by number of rows.

* **Returns:**
  Tuple[int, int]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row"></a>

#### add_row(linking_value='<linking value not chosen>')

Inserts a new unpopulated row, and sets the linking value for that row if one is provided.

* **Parameters:**
  **linking_value** – str
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row"></a>

#### delete_row(index)

Removes the row at the specified index.

* **Example:**
  `delete_row(0)` deletes the first row.
* **Parameters:**
  **index** – int
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.swap_rows"></a>

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

<a id="attributeshorttext"></a>

#### AttributeShortText

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText"></a>

### *class* AttributeShortText(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for short text attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="attribute-val-long-text"></a>

<a id="attributelongtext"></a>

#### AttributeLongText

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLongText"></a>

### *class* AttributeLongText(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for long text attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLongText.__init__"></a>

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

<a id="attributeunsupported"></a>

#### AttributeUnsupported

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported"></a>

### *class* AttributeUnsupported(attr_def, \_gdl_av, \_mi, record, metas=None)

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for attributes with unsupported data types.

Note that unsupported attribute data will not yield any information regarding its value in that record. However,
some meta-data is still available through this class (such as the attribute’s name and data type).
An unsupported attribute value remains unpopulated, and these objects cannot be edited.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.__init__"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.object"></a>

#### *property* object

Gets the underlying [`UnsupportedType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType) object representing the attribute value or the tabular cell. Does
not allow access to the data.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.is_applicable"></a>

#### *property* is_applicable

Whether the attribute is applicable to the current record. Setting this to `False` will clear
any data values on the attribute.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="pseudo-attribute-val"></a>

<a id="pseudoattributevalue"></a>

#### PseudoAttributeValue

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue"></a>

### *class* PseudoAttributeValue(name, record)

Stores and provides access to pseudo-attribute data values.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.__init__"></a>

#### \_\_init_\_(name, record)

* **Parameters:**
  * **name** – str
  * **record** – Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.record"></a>

#### *property* record

Parent [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) described by the [`PseudoAttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue)

* **Returns:**
  [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.value"></a>

#### *property* value

Current value of the pseudo-attribute. Cannot be modified. Modification of pseudo-attributes must be done
through the [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object properties `color`, `short_name` and `name`.

* **Returns:**
  Union[List[str], str, int, bool, Set[str], [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime), [`RecordColor`](#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.id"></a>

#### *property* id

Attribute identifier (this is always 0 for pseudo-attributes).

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.is_empty"></a>

#### is_empty()

Checks whether the pseudo-attribute value is populated or not.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.name"></a>

#### *property* name

Name of the pseudo-attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.type"></a>

#### *property* type

Data type of the pseudo-attribute value (four-character string).

* **Returns:**
  str

<a id="sub-attribute-level"></a>

<a id="id5"></a>

## Sub-attribute level

Classes that are used by attribute objects but are not attributes themselves.

<a id="parameter-def"></a>

<a id="parameterdefinition"></a>

### ParameterDefinition

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition"></a>

### *class* ParameterDefinition

Base class for parameters.

Provides access to parameter properties such as revision history, default and possible values, and units.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.name"></a>

#### *property* name

Parameter name.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history"></a>

#### *property* history

Revision history of the parameter, as an [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object.

* **Returns:**
  [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.default_value"></a>

#### *property* default_value

Default value of the parameter (all parameters must have a default value).

* **Returns:**
  str or float

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history_of_default"></a>

#### *property* history_of_default

Revision history of the parameter’s default value, as an [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object.

* **Returns:**
  [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.interpolation_type"></a>

#### *property* interpolation_type

The interpolation type for the parameter (‘None’, ‘Linear’, or ‘Cubic Spline’).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.axis_scale_type"></a>

#### *property* axis_scale_type

Axis scale type for the parameter (‘Linear’, ‘Log’).

`None` for discrete parameters.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit"></a>

#### *property* unit

Unit symbol for the parameter.

This property is used to specify a unit in the following situations:

* Specify a unit on an object of any [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) subclass to control the unit of the values
  returned by the [`default_value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.default_value) and [`values`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.values) properties on that object.
* Specify a unit on an [`ExporterParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter) object to provide a value with a different unit to the
  [`ExporterParameter.value_for_exporters`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter.value_for_exporters) property.
* Specify a unit on an [`AttributeParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) object returned by the
  [`AttributeFunctional.parameters`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.parameters) or [`AttributePoint.parameter_definitions`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.parameter_definitions) properties to
  provide parameter values for import in a different unit.

This property does not impact data export. Attribute parameter values are always exported according to the
[`Database.unit_system`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures) settings.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.database_unit"></a>

#### *property* database_unit

Database unit symbol for the parameter.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.reset_unit"></a>

#### reset_unit()

Resets the unit back to its original value (the unit in use when the parameter was initially exported).
Does not make a call to the Service Layer.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.values"></a>

#### *property* values

List of all possible values the parameter can take.

* **Returns:**
  List[Union[str, float]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.values_histories"></a>

#### *property* values_histories

Revision histories of each possible value of a parameter, as a list of [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) objects.

* **Returns:**
  List[[`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.type"></a>

#### *property* type

Parameter type  (‘Unrestricted numeric’, ‘Restricted numeric’, or ‘Discrete’).

#### WARNING
This property is deprecated. Use [`data_type`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.data_type) and [`restricted`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.restricted).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.data_type"></a>

#### *property* data_type

Parameter data type (Numeric or Discrete).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.restricted"></a>

#### *property* restricted

Whether the parameter is restricted to specific values.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.id"></a>

#### *property* id

Parameter identifier.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter"></a>

### *class* DatabaseParameter

Bases: [`ParameterDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)

Definition of a parameter at the database level.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter"></a>

### *class* AttributeParameter

Bases: [`DatabaseParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter)

Definition of a parameter as configured for an attribute.

Inherited properties [`default_value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.default_value), [`axis_scale_type`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.axis_scale_type), and [`interpolation_type`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.interpolation_type) can differ
from the database parameter definition.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter.parent_attribute"></a>

#### *property* parent_attribute

Attribute to which this parameter applies.

* **Returns:**
  [`AttributeDefinitionMultiValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue)

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter.order"></a>

#### *property* order

Order in which the parameter is stored in the attribute. This is relevant for
some interpolation methods, and determines the display order in MI Viewer.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter"></a>

### *class* ExporterParameter

Bases: [`DatabaseParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter)

Definition of a parameter that is used by an exporter, the value and unit can be set to control the exporter’s
output.

If the value is not set then the database parameter default value will be used.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter.value_for_exporters"></a>

#### *property* value_for_exporters

Value on the [`ExporterParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter) instance for use in any exporters the parameter is passed to. Can be set
by the user.

If this value is unset, the exporter will use the default value defined in Granta MI.

* **Returns:**
  Union[str, float]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter.clear_value_for_exporters"></a>

#### clear_value_for_exporters()

Clear the value on the [`ExporterParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter) instance and return it to the default value.

<a id="object-history"></a>

<a id="objecthistory"></a>

### ObjectHistory

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory"></a>

### *class* ObjectHistory(\_gdl_revision_info)

Provides access to the revision history of an MI database element. Object histories are currently
supported via the following properties:

> - [`AttributeDefinition.history`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.history)
> - [`AttributeDefinitionTabular.column_histories`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_histories)
> - [`ParameterDefinition.history`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history)
> - [`ParameterDefinition.history_of_default`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history_of_default)
> - [`ParameterDefinition.values_histories`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.values_histories)
> - [`DataRevisionHistory.history`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.history)

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.__init__"></a>

#### \_\_init_\_(\_gdl_revision_info)

* **Parameters:**
  **\_gdl_revision_info** – Foundation API [`GRANTA_MIScriptingToolkit.RevisionInfo`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RevisionInfo) class
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.last_modified_date"></a>

#### *property* last_modified_date

Date the database element was last modified.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.last_modified_at"></a>

#### *property* last_modified_at

Date and time the database element was last modified.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.date_created"></a>

#### *property* date_created

Date the database element was created.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.created_at"></a>

#### *property* created_at

Date and time the database element was created.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.last_modified_by"></a>

#### *property* last_modified_by

The username of the last user to modify the database element.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.created_by"></a>

#### *property* created_by

The username of the user who created the database element.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.update_count"></a>

#### *property* update_count

The number of times the object has been updated.

* **Returns:**
  str

<a id="record-version-history"></a>

<a id="recordversionhistory"></a>

### RecordVersionHistory

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory"></a>

### *class* RecordVersionHistory(record_version_state)

Provides access to the revision history of an MI Record.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.__init__"></a>

#### \_\_init_\_(record_version_state)

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.created_at"></a>

#### *property* created_at

Date and time the record version was created.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.created_by"></a>

#### *property* created_by

The username of the user who created the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.creation_notes"></a>

#### *property* creation_notes

Notes associated with the creation of the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.last_modified_at"></a>

#### *property* last_modified_at

Date and time the record version was last modified.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.last_modified_by"></a>

#### *property* last_modified_by

The username of the user who last modified the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.last_modification_notes"></a>

#### *property* last_modification_notes

Notes associated with the last modification made to record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.released_at"></a>

#### *property* released_at

Date and time the record version was released.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.released_by"></a>

#### *property* released_by

The username of the user who released the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.release_notes"></a>

#### *property* release_notes

Notes associated with the release of the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.superseded_at"></a>

#### *property* superseded_at

Date and time the record version was superseded.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.superseded_by"></a>

#### *property* superseded_by

The username of the user who superseded the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.supersession_notes"></a>

#### *property* supersession_notes

Notes associated with the last operation that superseded the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.withdrawn_at"></a>

#### *property* withdrawn_at

Date and time the record version was withdrawn.

* **Returns:**
  datetime.datetime

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.withdrawn_by"></a>

#### *property* withdrawn_by

The username of the user who withdrew the record version.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.withdrawal_notes"></a>

#### *property* withdrawal_notes

Notes associated with the withdrawal of the record version.

* **Returns:**
  str

<a id="attribute-data-information"></a>

<a id="datarevisionhistory"></a>

### DataRevisionHistory

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory"></a>

### *class* DataRevisionHistory(record_attribute)

Provides revision history information about the data in an attribute of a record.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.__init__"></a>

#### \_\_init_\_(record_attribute)

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.name"></a>

#### *property* name

Name of the attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.is_populated"></a>

#### *property* is_populated

Whether the attribute is populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.created_in_record_version"></a>

#### *property* created_in_record_version

Version of the record when this datum was created.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.retired_in_record_version"></a>

#### *property* retired_in_record_version

Version of the record when this datum was retired.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.data_version_number"></a>

#### *property* data_version_number

Data version number.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.history"></a>

#### *property* history

Revision history of the attribute data, as an [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object. Is None for empty attributes.

* **Returns:**
  [`ObjectHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.meta_attributes"></a>

#### *property* meta_attributes

Data revision history of meta-attributes associated with this attribute, indexed by meta-attribute name.

* **Returns:**
  Dict[str, [`DataRevisionHistory`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.is_meta_for"></a>

#### *property* is_meta_for

Name of the parent attribute, if a meta-attribute. Returns `None` otherwise.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.is_meta"></a>

#### *property* is_meta

Whether the attribute is a meta-attribute or not.

* **Returns:**
  bool

<a id="search-crit"></a>

<a id="searchcriterion"></a>

### SearchCriterion

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion"></a>

### *class* SearchCriterion(attribute, operator, value=None, column_name=None)

Defines a single criterion for use in a search. The criterion can be as simple as the presence of the
specified attribute, or as complex as the data in a specified column of the tabular attribute being
greater than a specified value. The search will use the same units as the
[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition).

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion.__init__"></a>

#### \_\_init_\_(attribute, operator, value=None, column_name=None)

* **Parameters:**
  * **attribute** – [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **operator** – str
  * **value** – Input type corresponding to your [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)
  * **column_name** – str

#### NOTE
To perform an exact search on a discrete attribute, the operator argument should be
either `CONTAINS_ANY` or `CONTAINS_ALL`. In the case of searching for a single discrete
value, the `value` argument should be a list containing the search term.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion.attribute"></a>

#### *property* attribute

[`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) for the attribute used in this search criterion.

* **Returns:**
  [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion.operation"></a>

#### *property* operation

Operator used in this criterion, if provided.

* **Example:**
  ‘EXISTS’ or ‘CONTAINS’
* **Returns:**
  str

<a id="hyperlink-type"></a>

<a id="hyperlink"></a>

### Hyperlink

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink"></a>

### *class* Hyperlink(url=None, hyperlink_display='New', hyperlink_description='')

Represents hyperlinks in MI. Can be used directly in tabular data, or within [`AttributeHyperlink`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink) objects for
standalone hyperlink attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink.__init__"></a>

#### \_\_init_\_(url=None, hyperlink_display='New', hyperlink_description='')

* **Parameters:**
  * **url** – str
  * **hyperlink_display** – str (Hyperlink display mode: `New`, `Content`, `Top`)
  * **hyperlink_description** – str (Hyperlink description, displayed in MI applications)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink.hyperlink_display"></a>

#### *property* hyperlink_display

Indicates how the hyperlink should be opened when clicked on in MI applications. Takes one of the
following values:

* `New`: Open in a new window or tab.
* `Top`: Open in the current window or tab.
* `Content`: Open within the current MI application (for example, in a frame or dialog).

* **Returns:**
  str

<a id="binary-type"></a>

<a id="binarytype"></a>

### BinaryType

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType"></a>

### *class* BinaryType

Stores and provides access to Pictures and Files, and associated metadata. Pictures and files can appear
in Granta MI as data (for example, in a tabular data column), or as an attribute value.

The [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object wraps files and images for inclusion in the corresponding MI Scripting Toolkit
classes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.__init__"></a>

#### \_\_init_\_()

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.value"></a>

#### *property* value

Current value of the attribute; [`BinaryType.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.value) always returns the current instance of the class
and cannot be modified. In this case, the values are the file or picture, which can be accessed through
the `load` and `save` methods of the [`File`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) or [`Picture`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) classes.

* **Returns:**
  [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url"></a>

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.mime_file_type"></a>

#### *property* mime_file_type

MIME (Multipurpose Internet Mail Extensions) file type.

When exporting, this property is populated with the value of the MIME file type as determined by Granta MI.

When importing, this property is populated automatically by the `load()` method:

* For Picture attributes, the MIME file type is determined by the image data.
* For File attributes, this property is not used and is set to `None`.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.is_empty"></a>

#### is_empty()

Checks whether the [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object is populated by checking whether there is binary data in the object.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.binary_data"></a>

#### *property* binary_data

The binary data for the file. Binary data can be set with a bytes object or file buffer.

* **Returns:**
  bytes or None.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.load"></a>

#### load(path)

Populates the object with the data located on `path`. Relative paths are permitted.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path to the object to load.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.save"></a>

#### save(path)

Saves an object to file location `path`. Relative paths are permitted.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the object should be saved.
* **Returns:**
  None

<a id="picture-type"></a>

<a id="picture"></a>

### Picture

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture"></a>

### *class* Picture(\*, path=None)

Extended [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) class for Pictures in MI.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.__init__"></a>

#### \_\_init_\_(\*, path=None)

* **Parameters:**
  **path** (*Optional* *[**Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]* *]*) – Path to the image file to load. Takes the form
  `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load"></a>

#### load(path)

Populates the Picture object with the image located on `path`. Relative paths are permitted.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path to the image file to load. Takes the form
  `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save"></a>

#### save(path)

Saves a Picture object to file location `path`. Relative paths are permitted.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the image should be saved. Takes the form
  `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.binary_data"></a>

#### *property* binary_data

The binary data for the file. Binary data can be set with a bytes object or file buffer.

* **Returns:**
  bytes or None.

<a id="file-type"></a>

<a id="file"></a>

### File

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File"></a>

### *class* File(\*, path=None)

Extended [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) class for Files in MI.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.__init__"></a>

#### \_\_init_\_(\*, path=None)

* **Parameters:**
  **path** (*Optional* *[**Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]* *]*) – Path to the file to load. Takes the form
  `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save"></a>

#### save(path)

Saves a File object to file location `path`. Relative paths are permitted.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the file should be saved. Takes the form
  `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load"></a>

#### load(path)

Populates the File object with the file located by `path`. Relative paths are permitted.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path to the file to load. Takes the form
  `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name"></a>

#### *property* file_name

Name of the file.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.description"></a>

#### *property* description

File description.

Stored with the data value. If provided, the description replaces the file name for the attribute when
displayed on a datasheet in MI Viewer.

* **Returns:**
  str

<a id="unsupported-type"></a>

<a id="unsupportedtype"></a>

### UnsupportedType

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType"></a>

### *class* UnsupportedType(\_gdl_av)

Represents a data type that is unsupported. No information about the value of the Attribute or the
Tabular Cell is available. However, the object’s data type is available through this class, along
with the underlying gdl object, which may contain more information. Properties of this object cannot
be edited.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType.__init__"></a>

#### \_\_init_\_(\_gdl_av)

<a id="currency-info"></a>

<a id="currencyinfo"></a>

### CurrencyInfo

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.CurrencyInfo"></a>

### *class* CurrencyInfo(code, name, factor)

Stores information about a Currency known to Granta MI.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Human-readable name of the currency.
  * **code** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – str Currency short code, this appears in derived units.
  * **factor** ([*float*](https://docs.python.org/3/library/functions.html#float)) – Conversion factor from USD to this unit.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.CurrencyInfo.__init__"></a>

#### \_\_init_\_(code, name, factor)

<a id="tabl-units"></a>

<a id="tabularunits"></a>

### TabularUnits

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits"></a>

### *class* TabularUnits(units, default_units, database_units)

Stores and provides access to the units for a parent [`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object, in the same tabular format as
the data.

Units can be set on a cell-by-cell basis. [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) is populated when the parent
[`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object is loaded.

Any changes made to the underlying [`AttributeTabular.value()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) property must also be made to the corresponding
[`TabularUnits.data()`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.data) and vice versa, or your changes will not import successfully and may be lost
([`AttributeTabular.add_row()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row) and [`AttributeTabular.delete_row()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row) make the necessary changes to both
objects, but you must duplicate other changes to `data` yourself).

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.__init__"></a>

#### \_\_init_\_(units, default_units, database_units)

* **Parameters:**
  * **units** – List[List[str]]
  * **default_units** – List[str] the default units applied when creating new rows for each column
  * **database_units** – List[str] the units defined in the database for each column
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.database_units"></a>

#### *property* database_units

The database units, as a list corresponding to each column.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.default_units"></a>

#### *property* default_units

The default units, as a list corresponding to each column.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.data"></a>

#### *property* data

Data values (unit symbol strings) stored in the [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object.

* **Returns:**
  List[List[str]]

<a id="functions"></a>

<a id="helper-functions"></a>

## Helper Functions

<a id="connect"></a>

### connect

<a id="GRANTA_MIScriptingToolkit.granta.mi.connect"></a>

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

#### NOTE
If MI Scripting Toolkit has been installed on the same server machine as Granta MI, then the Granta MI
server name *must* be specified in full in the url parameter. If you use ‘localhost’ or a loopback address, MI
Scripting Toolkit will be unable to use the specified user account to connect to Granta MI.

<a id="extract-parameter-value"></a>

### extract_parameter_value

<a id="GRANTA_MIScriptingToolkit.granta.mi_functions.extract_parameter_value"></a>

### extract_parameter_value(param_value)

Returns the data value stored in a Foundation API [`GRANTA_MIScriptingToolkit.ParameterValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.ParameterValue) object.

* **Parameters:**
  **param_value** – Foundation API [`GRANTA_MIScriptingToolkit.ParameterValue`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.ParameterValue) class
* **Returns:**
  str or float

<a id="get-foundation-logger"></a>

### get_foundation_logger

<a id="GRANTA_MIScriptingToolkit.granta.mi_functions.get_foundation_logger"></a>

### get_foundation_logger()

Return the logger used by the Foundation API (has the name “GDL”).

* **Returns:**
  [`logging.Logger`](https://docs.python.org/3/library/logging.html#logging.Logger) class

<a id="log-to-file-in-local-app-data"></a>

### log_to_file_in_local_app_data

<a id="GRANTA_MIScriptingToolkit.granta.mi_functions.log_to_file_in_local_app_data"></a>

### log_to_file_in_local_app_data(path='Granta Design\\\\MIScriptingToolkit\\\\Python')

Set up the built-in Granta logger to log to a file in the user’s local app data directory
(%LOCALAPPDATA% on Windows, ‘~/.appdata/’ on Linux).
The log file name is MIScriptingToolkitForPython_YYYY.MM.DD.log and you can
specify the filepath. The default filepath is Granta Design/MIScriptingToolkit/Python.

#### WARNING
This function is deprecated and will be removed in a future version. To log messages
to a file, use the Python logging module. The Foundation Layer logger can be obtained
with the function [`get_foundation_logger()`](#GRANTA_MIScriptingToolkit.granta.mi_functions.get_foundation_logger).

* **Parameters:**
  **path** – str
* **Returns:**
  None

<a id="constants"></a>

## Constants

<a id="recordproperties"></a>

### RecordProperties

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties"></a>

### *class* RecordProperties

Provides [`PseudoAttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) for every supported pseudo-attribute.

Attribute names match the corresponding property on [`Record`](#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.name"></a>

#### name *= <PseudoAttributeDefinition name: name, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.short_name"></a>

#### short_name *= <PseudoAttributeDefinition name: shortName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.subsets"></a>

#### subsets *= <PseudoAttributeDefinition name: subsets, type: DISC>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.type"></a>

#### type *= <PseudoAttributeDefinition name: recordType, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.history_identity"></a>

#### history_identity *= <PseudoAttributeDefinition name: recordHistoryIdentity, type: INPT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.color"></a>

#### color *= <PseudoAttributeDefinition name: recordColor, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.version_number"></a>

#### version_number *= <PseudoAttributeDefinition name: recordVersionNumber, type: INPT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.table_name"></a>

#### table_name *= <PseudoAttributeDefinition name: tableName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.is_writable"></a>

#### is_writable *= <PseudoAttributeDefinition name: writable, type: LOGI>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.parent_record_short_name"></a>

#### parent_record_short_name *= <PseudoAttributeDefinition name: parentShortName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.parent_record_name"></a>

#### parent_record_name *= <PseudoAttributeDefinition name: parentName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.parent_record_history_identity"></a>

#### parent_record_history_identity *= <PseudoAttributeDefinition name: parentRecordHistoryIdentity, type: INPT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.released_on"></a>

#### released_on *= <PseudoAttributeDefinition name: releasedDate, type: TIDT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.last_modified_on"></a>

#### last_modified_on *= <PseudoAttributeDefinition name: modifiedDate, type: TIDT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.created_on"></a>

#### created_on *= <PseudoAttributeDefinition name: createdDate, type: TIDT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.last_modified_by"></a>

#### last_modified_by *= <PseudoAttributeDefinition name: lastModifier, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.created_by"></a>

#### created_by *= <PseudoAttributeDefinition name: creator, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.all"></a>

#### *classmethod* all()

All pseudo-attribute definitions.

* **Return type:**
  List[[PseudoAttributeDefinition](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition)]

<a id="recordcolor"></a>

### RecordColor

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor"></a>

### *enum* RecordColor(value)

Valid values are as follows:

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Red"></a>

#### Red *= RecordColor.Red*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Maroon"></a>

#### Maroon *= RecordColor.Maroon*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Fuchsia"></a>

#### Fuchsia *= RecordColor.Fuchsia*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Yellow"></a>

#### Yellow *= RecordColor.Yellow*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Black"></a>

#### Black *= RecordColor.Black*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Gray"></a>

#### Gray *= RecordColor.Gray*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Aqua"></a>

#### Aqua *= RecordColor.Aqua*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Green"></a>

#### Green *= RecordColor.Green*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Navy"></a>

#### Navy *= RecordColor.Navy*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Purple"></a>

#### Purple *= RecordColor.Purple*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Blue"></a>

#### Blue *= RecordColor.Blue*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Silver"></a>

#### Silver *= RecordColor.Silver*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Lime"></a>

#### Lime *= RecordColor.Lime*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Olive"></a>

#### Olive *= RecordColor.Olive*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Teal"></a>

#### Teal *= RecordColor.Teal*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.White"></a>

#### White *= RecordColor.White*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.InheritFromParent"></a>

#### InheritFromParent *= RecordColor.InheritFromParent*

<a id="recordtype"></a>

### RecordType

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType"></a>

### *enum* RecordType(value)

* **Member Type:**
  [`str`](https://docs.python.org/3/library/stdtypes.html#str)

Valid values are as follows:

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Record"></a>

#### Record *= RecordType.Record*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder"></a>

#### Folder *= RecordType.Folder*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Generic"></a>

#### Generic *= RecordType.Generic*

<a id="database-currency"></a>

### DATABASE_CURRENCY

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_CURRENCY"></a>

### DATABASE_CURRENCY

Value used to refer to the ‘Database currency’

<a id="database-unit-system"></a>

### DATABASE_UNIT_SYSTEM

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM"></a>

### DATABASE_UNIT_SYSTEM

Value used to refer to the ‘Database unit system’.

<a id="exceptions"></a>

## Exceptions

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.UnsupportedLinkGroupError"></a>

### *class* UnsupportedLinkGroupError

Exception raised when an operation is performed on a record link group which is incompatible
with that operation.
