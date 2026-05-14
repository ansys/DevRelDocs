# Session

<a id="session"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session"></a>

### *class* Session

Represents a Granta MI Session. Allows the MI Scripting Toolkit to make calls to the Service Layer, and provides
access to and search functions for available databases.

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.__init__"></a>

#### \_\_init_\_(service_layer_url, user_name, password, domain, autologon, timeout=300000, existing_session, oidc=False, auth_token, refresh_token, use_stored_token=False, store_password=False, max_retries=0)

* **Parameters:**
  * **service_layer_url** – str
  * **user_name** – str
  * **password** – str
  * **domain** – str
  * **autologon** – bool
  * **timeout** – int (Maximum time to wait for a response, in milliseconds)
  * **existing_session** – Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class
  * **oidc** – bool (Contact Ansys Technical Support for Granta MI OIDC configuration and setup documentation)
  * **auth_token** – str
  * **refresh_token** – str
  * **use_stored_token** – bool
  * **store_password** – bool (Default value False. Set to True when password is given and needs to be saved
    for the session’s duration, for example when parallelisation is required.)
  * **max_retries** – int (Default value 0. Maximum number of times to retry requests sent to the Service Layer.)
* **Returns:**
  None

#### NOTE
If MI Scripting Toolkit has been installed on the same server machine as Granta MI, then the Granta MI
server name *must* be specified in full in the url parameter. If you use ‘localhost’ or a loopback address, MI
Scripting Toolkit will be unable to use the specified user account to connect to Granta MI.

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.update"></a>

#### update(records, update_attributes=True, update_links=False, refresh_attributes=True, include_binary_data_in_refresh=False, notes=None, release_notes=None)

Pushes any changes in the specified records (including adding newly-created records) to the server.
Returns a list of successfully imported [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. If refresh_attributes
set to True, the imported records’ attributes are exported after the update is complete.

If `include_binary_data_in_refresh` is set to False (default), the export will not fetch the binary data
representing the request File and Picture attributes and will instead export URLs (see the
[`BinaryType.url`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) documentation for more information on how to use the URL to access the data). This
setting is recommended for large files and pictures, or if the binary data itself is not required.

To summarize how the file and picture data can be accessed:

* `include_binary_data_in_refresh = False` (default): The [`BinaryType.url`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data_in_refresh = True`: The [`BinaryType.binary_data`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save) methods are all available to access and save
  the binary data. The [`BinaryType.url`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType.url) property is empty and returns `None`.

#### WARNING
If `include_binary_data_in_refresh` is set to False, the `binary_data` property and `save()` method are
both still available for backwards compatibility. However, they will download the data from Granta MI on
demand for each attribute value. A warning will be generated each time this occurs, but may only occur once
due to the Python warning configuration settings.

This behavior is likely to have a significant performance impact, and so it is recommended that if access to
the binary data is required without a subsequent HTTP GET request, you should specify
`include_binary_data_in_refresh = True`.

On-demand access to attribute values without using [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is unaffected.

* **Parameters:**
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **update_attributes** – bool (default value of True)
  * **update_links** – bool (default value of False)
  * **refresh_attributes** – bool (default value of True)
  * **include_binary_data_in_refresh** – bool (default value of False)
  * **notes** – str (default value of None). Revision notes for the update. Applies to all records in the update.
  * **release_notes** – str (default value of None). Version release notes for the update. Applies to all records
    flagged for release in the update.
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.update_links"></a>

#### update_links(records)

Pushes any changes in the links of the specified records (including newly-created records) to the server.
Returns a list of successfully modified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. All source and target records must be exported
to/from the server before being linked.

* **Parameters:**
  **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.spawn_session"></a>

#### spawn_session()

Creates a new Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) object using the credentials
of the current [`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session).

If the session was created with manual credentials, then this method will only succeed if `store_password`
was set to `True`. Otherwise, this method will return `None`.

* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class

#### Deprecated
Deprecated since version 4.2: Use [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) to instantiate a foundation layer session.

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

#### Deprecated
Deprecated since version 4.2: Renamed to [`assert_can_run_parallelized()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.assert_can_run_parallelized).

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.assert_can_run_parallelized"></a>

#### assert_can_run_parallelized()

Throws if a task cannot run in parallel mode with current session.

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.connect"></a>

#### connect(spawn_new_connection=True)

Returns a Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) object using the current
[`Session`](#GRANTA_MIScriptingToolkit.granta.mi.Session)’s credentials.

* **Parameters:**
  **spawn_new_connection** – bool (default value True)
* **Returns:**
  Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class

#### Deprecated
Deprecated since version 4.2: Use [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) to instantiate a foundation layer session.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.refresh_token"></a>

#### *property* refresh_token

The refresh token returned by the OIDC identity provider if one was provided. If a refresh token was not
returned by the OIDC identity provider, the initial provided token is returned.

#### WARNING
Refresh tokens are bearer tokens that grant access to the Granta MI server, and so should be treated as
confidential. To use a refresh token for unattended Scripting Toolkit authentication, use the
[`persist_oidc_token()`](#GRANTA_MIScriptingToolkit.granta.mi.Session.persist_oidc_token) method to persist the refresh token in a secure credential store.

* **Returns:**
  optional[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.refetch_dbs"></a>

#### refetch_dbs()

Fetches the list of databases from the server. Makes a Service Layer call.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.dbs"></a>

#### *property* dbs

List of databases on the server.

* **Returns:**
  List[[`Database`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.dbs_by_key"></a>

#### *property* dbs_by_key

Dict of databases on the server, keyed by database key

* **Returns:**
  Dict[str, [`Database`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.dbs_by_guid"></a>

#### *property* dbs_by_guid

Dict of databases on the server, keyed by database GUID

* **Returns:**
  Dict[str, [`Database`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.get_db"></a>

#### get_db(name=None, db_key=None, guid=None, version_guid=None)

Returns the database matching the specified criteria. Provide at least one of:

* Database name: `name`
* Database key: `db_key`
* Database GUID: `guid`
* Database Version GUID: `version_guid`

Raises a KeyError if multiple databases are found for the same criteria. Raises a KeyError if no databases are
found matching the provided criteria.

* **Parameters:**
  * **name** – str
  * **db_key** – str
  * **guid** – str
  * **version_guid** – str
* **Returns:**
  [`Database`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_name"></a>

#### search_for_records_by_name(name)

Searches by record name over all databases
(uses [`Database.search_for_records_by_name()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_name)).
Makes a Service Layer call for each table in each database.

* **Parameters:**
  **name** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text"></a>

#### search_for_records_by_text(text)

Performs a simple text search over all databases
(uses [`Database.search_for_records_by_text()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text)).
Makes a Service Layer call for each table in each database.

* **Parameters:**
  **text** – str
* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string"></a>

#### records_from_string(text, use_strict_version=True)

Generates [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a string in MI clipboard format (version 12 or higher).

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
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

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
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.get_records_by_ids"></a>

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object for each identifier provided. The returned list of records
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
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states"></a>

#### bulk_fetch_release_states(records, batch_size=100, parallelize=False, max_num_threads=6)

Fetches and populates the release states of the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records"></a>

#### bulk_delete_or_withdraw_records(records, batch_size=100, parallelize=False, max_num_threads=6, update_release_states=False, withdrawal_notes=None)

Deletes records from the server (or withdraws them, if in a version-controlled table). Record release states
can also be updated using this method.

* **Parameters:**
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **parallelize** – bool (default False)
  * **max_num_threads** – int (default value of 6)
  * **update_release_states** – bool
  * **withdrawal_notes** – Optional[str]

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`. `parallelise` may still be used, but is
deprecated.

* **Returns:**
  None
