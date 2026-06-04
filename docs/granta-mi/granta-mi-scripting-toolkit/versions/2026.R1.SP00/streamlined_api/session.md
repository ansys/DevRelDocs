# Session

<a id="session"></a>

<!-- from ansys.grantami.backend.mock.docs.session import (
    patch_backend_builder
)
patch_backend_builder() -->

<a id="ansys.grantami.core.mi.Session"></a>

### *class* Session

Represents a Granta MI Session.

Allows the MI Scripting Toolkit to make calls to the Service Layer, and provides access to and search functions for
available databases.

Use [`SessionBuilder`](#ansys.grantami.core.mi.SessionBuilder) to create a session and authenticate via one of the supported modes of authentication.

### Examples

Authenticating using Windows authentication

```pycon
>>> session = SessionBuilder(
...     service_layer_url="https://my_server_name/mi_servicelayer",
... ).with_autologon()
```

Authenticating using credentials and setting timeout and retries

```pycon
>>> session = SessionBuilder(
...     service_layer_url="https://my_server_name/mi_servicelayer",
...     session_configuration=SessionConfiguration(
...         timeout=200000,
...         max_retries=1,
...     )
... ).with_credentials(username="username", password="password")
```

<a id="ansys.grantami.core.mi.Session.bulk_delete_or_withdraw_records"></a>

#### bulk_delete_or_withdraw_records(records, batch_size=100, parallelize=False, max_num_threads=6, update_release_states=False, withdrawal_notes=None)

Deletes records from the server (or withdraws them, if in a version-controlled table).

Record release states can also be updated using this method.

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`.

* **Parameters:**
  * **records** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*Record*](record.md#ansys.grantami.core.mi_record_classes.Record) *]*) – List of records to delete or withdraw.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to parallelize the operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.
  * **update_release_states** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to update release states after deletion/withdrawal.
  * **withdrawal_notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Notes to add when withdrawing records.
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

#### WARNING
`parallelize=True` should not be set when using long-running sessions authenticated via OIDC. See
[OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

<a id="ansys.grantami.core.mi.Session.bulk_fetch_release_states"></a>

#### bulk_fetch_release_states(records, batch_size=100, parallelize=False, max_num_threads=6)

Fetches and populates the release states of the specified [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects.

#### Versionchanged
Changed in version 4.2: Argument `parallelise` was renamed to `parallelize`.

* **Parameters:**
  * **records** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*Record*](record.md#ansys.grantami.core.mi_record_classes.Record) *]*) – List of records to fetch release states for.
  * **batch_size** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 100*) – Number of records to process in each batch.
  * **parallelize** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to parallelize the fetch operation.
  * **max_num_threads** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 6*) – Maximum number of threads to use when parallelizing.
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

#### WARNING
`parallelize` should not be set to [`True`](https://docs.python.org/3/library/constants.html#True) when using long-running sessions authenticated via
OIDC. See [OIDC and parallel operation](../release_notes/known_issues.md#oidc-known-issue) for more details.

#### SEE ALSO
[`Table.bulk_fetch_all_record_versions()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_all_record_versions)
: Also populates the [`Record.all_versions`](record.md#ansys.grantami.core.mi_record_classes.Record.all_versions) property.

<a id="ansys.grantami.core.mi.Session.get_db"></a>

#### get_db(name=None, db_key=None, guid=None, version_guid=None)

Returns the database matching the specified criteria.

Provide at least one of:

* Database name: `name`
* Database key: `db_key`
* Database GUID: `guid`
* Database version GUID: `version_guid`

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Database name.
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Database key.
  * **guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Database GUID.
  * **version_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Database version GUID.
* **Returns:**
  Database object matching the specified criteria.
* **Return type:**
  [Database](database.md#ansys.grantami.core.mi_tree_classes.Database)
* **Raises:**
  * [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If multiple databases are found for the same criteria.
  * [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If no databases are found matching the provided criteria.
  * [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If no criteria are provided.

<a id="ansys.grantami.core.mi.Session.get_record_by_id"></a>

#### get_record_by_id(db_key, hguid=None, vguid=None, history_identity=None, version_number=None)

Returns the record with the specified ID from the database specified by `db_key`.

This method resolves records with the following (sets of) references in priority order:

1. `vguid` (record version GUID): Uniquely identifies specific record version.
2. `history_identity` (record history identity): Uniquely identifies record only. Can be optionally
   combined with `version_number` (record version number) to identify a specific record version.
3. `hguid` (record history GUID): Uniquely identifies record only.

If `vguid` or `version_number` are not provided for version controlled records, this method will return the
latest available version of the record available to the user. The latest available version is dependent on the
user’s Granta MI permissions.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Database key.
  * **hguid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record history GUID, uniquely identifies record.
  * **vguid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Record version GUID, uniquely identifies record version.
  * **history_identity** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Record history identity.
  * **version_number** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Record version number.
* **Returns:**
  Record object with the specified ID.
* **Return type:**
  [Record](record.md#ansys.grantami.core.mi_record_classes.Record)

<a id="ansys.grantami.core.mi.Session.get_records_by_ids"></a>

#### get_records_by_ids(record_identifiers)

Returns a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) object for each identifier provided.

The returned list of records will have the same number of elements as the provided list of identifiers. If no
record corresponds to that identifier then the corresponding item in the returned list will be [`None`](https://docs.python.org/3/library/constants.html#None).

Each element in the `record_identifiers` parameter should be a dictionary with the `db_key` entry.
Additionally, it must contain one or more of the following (sets of) references in priority order:

1. `vguid` (record version GUID): Uniquely identifies specific record version.
2. `history_identity` (record history identity): Uniquely identifies record only. Can be optionally
   combined with `version_number` (record version number) to identify a specific record version.
3. `hguid` (record history GUID): Uniquely identifies record only.

If `vguid` or `version_number` are not provided for version controlled records, this method will
return the latest available version of the record available to the user. The latest available version
is dependent on the user’s Granta MI permissions.

* **Parameters:**
  **record_identifiers** (*Sequence* *[*[*dict*](https://docs.python.org/3/library/stdtypes.html#dict) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *|* [*int*](https://docs.python.org/3/library/functions.html#int) *]* *]*) – Sequence of dictionaries containing record identifiers.
* **Returns:**
  List of Record objects corresponding to the identifiers, or [`None`](https://docs.python.org/3/library/constants.html#None) if the reference did not identify a
  resolvable record.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record) | None]

<a id="ansys.grantami.core.mi.Session.persist_oidc_token"></a>

#### persist_oidc_token()

Stores a refresh token in the credential manager for your system for unattended later use.

The `keyring` package uses system-managed storage, and supports the following credential managers:

* Windows Credential Manager
* macOS Keychain
* Freedesktop Secret Service
* KDE4 and KDE5 KWallet

#### WARNING
This method raises a `win32ctypes.pywin32.pywintypes.error` when it is used to persist a refresh token
longer than 1280 characters in the Windows Credential Manager. If this error is raised, use an alternative
keyring backend. A list of alternative backends are available on the [keyring PyPI page](https://pypi.org/project/keyring/).

<a id="ansys.grantami.core.mi.Session.records_from_string"></a>

#### records_from_string(text, use_strict_version=True)

Generates [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects from a tab separated values (.tsv) record list.

* **Parameters:**
  * **text** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The text string defining the record list.
  * **use_strict_version** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – If [`True`](https://docs.python.org/3/library/constants.html#True), return only the specified version of the record (if you do not have permission, the item
    will be [`None`](https://docs.python.org/3/library/constants.html#None)). If [`False`](https://docs.python.org/3/library/constants.html#False), return the latest visible version of the record.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record) | None]

### Notes

The required string format to identify a record is tab separated values (.tsv) with column headers
`RecordHistoryGuid`, `RecordGuid`, `Table`, `DatabaseKey` and `RecordFullName`. This format may be
generated by copying an MI Viewer record list to the clipboard.

In MI Viewer, a field name may be prefixed by an asterisk to denote a default Match Column. This functionality
is not supported in the MI Scripting Toolkit. Either the `RecordHistoryGuid` (if `use_strict_mode = False`)
or `RecordGuid` (if `use_strict_mode = True`) will be used to identify the record.

In One MI, use MI Favorites and PyGranta RecordLists to transfer a collection of records from the browser to
Scripting Toolkit.

<a id="ansys.grantami.core.mi.Session.refetch_dbs"></a>

#### refetch_dbs()

Fetches the list of databases from the server.

### Notes

Makes a Service Layer call.

<a id="ansys.grantami.core.mi.Session.search_for_records_by_name"></a>

#### search_for_records_by_name(name)

Searches by record name over all databases (uses [`Database.search_for_records_by_name()`](database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_name)).

* **Parameters:**
  **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The name of the record to search for.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record)]

### Notes

Makes a Service Layer call for each table in each database.

<a id="ansys.grantami.core.mi.Session.search_for_records_by_text"></a>

#### search_for_records_by_text(text)

Performs a simple text search over all databases (uses [`Database.search_for_records_by_text()`](database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_text)).

* **Parameters:**
  **text** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The text to search for.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record)]

### Notes

Makes a Service Layer call for each table in each database.

<a id="ansys.grantami.core.mi.Session.update"></a>

#### update(records, update_attributes=True, update_links=False, refresh_attributes=True, include_binary_data_in_refresh=False, notes=None, release_notes=None)

Pushes any changes in the specified records (including adding newly-created records) to the server.

Returns a list of successfully imported [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects. If refresh_attributes set to [`True`](https://docs.python.org/3/library/constants.html#True), the
imported records’ attributes are exported after the update is complete.

* **Parameters:**
  * **records** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*Record*](record.md#ansys.grantami.core.mi_record_classes.Record) *]*) – List of records to update.
  * **update_attributes** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Whether to include attribute updates.
  * **update_links** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to include link updates.
  * **refresh_attributes** (bool, default: [`True`](https://docs.python.org/3/library/constants.html#True)) – Whether to include updated attribute values in the returned records. See Notes for more details.
  * **include_binary_data_in_refresh** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Whether to include binary data in the refresh. See Notes for more details.
  * **notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Revision notes for the update. Applies to all records in the update.
  * **release_notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Version release notes for the update. Applies to all records flagged for release in the update.
* **Returns:**
  List of successfully updated Record objects.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) is imported with `name` set to [`None`](https://docs.python.org/3/library/constants.html#None).
  * [**UnexportedBinaryDataError**](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) – If a tabular attribute has been modified destructively and contains unexported binary data that has not
        been overwritten.

#### WARNING
If `include_binary_data_in_refresh` is set to [`False`](https://docs.python.org/3/library/constants.html#False), the `binary_data` property and `save()` method are
both still available for backwards compatibility. However, they will download the data from Granta MI on
demand for each attribute value. A warning will be generated each time this occurs, but may only occur once
due to the Python warning configuration settings.

This behavior is likely to have a significant performance impact, and so it is recommended that if access to
the binary data is required without a subsequent HTTP GET request, you should specify
`include_binary_data_in_refresh = True`.

On-demand access to attribute values without using [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) is unaffected.

### Notes

If `refresh_attributes` is set to [`True`](https://docs.python.org/3/library/constants.html#True) (default), the data will be re-exported after import. If data
is not required for subsequent operations, setting `refresh_attributes` to [`False`](https://docs.python.org/3/library/constants.html#False) can improve
performance of this operation significantly.

If `include_binary_data_in_refresh` is set to [`False`](https://docs.python.org/3/library/constants.html#False) (default), the export will not fetch the binary data
representing the request File and Picture attributes and will instead export URLs (see the
[`BinaryType.url`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.url) documentation for more information on how to use the URL to access the data). This
setting is recommended for large files and pictures, or if the binary data itself is not required.

To summarize how the file and picture data can be accessed:

* `include_binary_data_in_refresh = False` (default): The [`BinaryType.url`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.url) property is populated.
* `include_binary_data_in_refresh = True`: The [`BinaryType.binary_data`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.binary_data) property, and
  [`AttributeFile.save()`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.save) and [`AttributePicture.save()`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.save) methods are all available to access and save
  the binary data. The [`BinaryType.url`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.url) property is empty and returns [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi.Session.update_links"></a>

#### update_links(records)

Pushes any changes in the links of the specified records (including newly-created records) to the server.

Returns a list of successfully modified [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) objects. All source and target records must be exported
to/from the server before being linked.

* **Parameters:**
  **records** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*Record*](record.md#ansys.grantami.core.mi_record_classes.Record) *]*) – List of records to update links for.
* **Returns:**
  List of successfully updated Record objects.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record)]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

<a id="ansys.grantami.core.mi.Session.dbs"></a>

#### *property* dbs *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[Database](database.md#ansys.grantami.core.mi_tree_classes.Database)]*

List of databases on the server.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[Database](database.md#ansys.grantami.core.mi_tree_classes.Database)]

<a id="ansys.grantami.core.mi.Session.dbs_by_guid"></a>

#### *property* dbs_by_guid *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Database](database.md#ansys.grantami.core.mi_tree_classes.Database)]*

Dictionary of databases on the server, indexed by database GUID

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Database](database.md#ansys.grantami.core.mi_tree_classes.Database)]
* **Raises:**
  [**KeyError**](https://docs.python.org/3/library/exceptions.html#KeyError) – If multiple databases have the same GUID.

<a id="ansys.grantami.core.mi.Session.dbs_by_key"></a>

#### *property* dbs_by_key *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Database](database.md#ansys.grantami.core.mi_tree_classes.Database)]*

Dictionary of databases on the server, indexed by database key.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [Database](database.md#ansys.grantami.core.mi_tree_classes.Database)]

<a id="ansys.grantami.core.mi.Session.refresh_token"></a>

#### *property* refresh_token *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The refresh token returned by the OIDC identity provider if one was provided.

If a refresh token was not returned by the OIDC identity provider, the initial provided token is returned.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str), optional

#### WARNING
Refresh tokens are bearer tokens that grant access to the Granta MI server, and so should be treated as
confidential. To use a refresh token for unattended Scripting Toolkit authentication, use the
[`persist_oidc_token()`](#ansys.grantami.core.mi.Session.persist_oidc_token) method to persist the refresh token in a secure credential store.

<a id="ansys.grantami.core.mi.Session.service_layer_url"></a>

#### *property* service_layer_url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Service Layer URL.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi.Session.viewer_base_url"></a>

#### *property* viewer_base_url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

MI Viewer URL associated with the Service Layer.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi.SessionBuilder"></a>

### *class* SessionBuilder(service_layer_url, session_configuration)

Builds a [`Session`](#ansys.grantami.core.mi.Session).

* **Parameters:**
  * **service_layer_url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI Service Layer URL.
  * **session_configuration** ([*SessionConfiguration*](#ansys.grantami.core.mi.SessionConfiguration) *,* *optional*) – Additional settings for the connection.

### Notes

If MI Scripting Toolkit has been installed on the Granta MI application server, then the Granta MI application
server name *must* be specified in full in the url parameter. If you use ‘localhost’ or a loopback address, MI
Scripting Toolkit will be unable to use the specified user account to connect to Granta MI.

<a id="ansys.grantami.core.mi.SessionBuilder.with_oidc"></a>

#### with_oidc()

Connect with OIDC.

* **Returns:**
  An OIDC Session builder to finalize the OIDC connection.
* **Return type:**
  [OIDCSessionBuilder](#ansys.grantami.core.mi.OIDCSessionBuilder)

<a id="ansys.grantami.core.mi.SessionBuilder.with_autologon"></a>

#### with_autologon()

Connect with Windows Authentication.

* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.SessionBuilder.with_credentials"></a>

#### with_credentials(username, password, domain=None, store_password=False)

Connect using provided credentials.

* **Parameters:**
  * **username** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Username for the connection.
  * **password** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Password for the connection.
  * **domain** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Domain to use for the connection.
  * **store_password** (bool, default: [`False`](https://docs.python.org/3/library/constants.html#False)) – Set to [`True`](https://docs.python.org/3/library/constants.html#True) if additional sessions need to be spawned, for example when parallelization is required.
* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.OIDCSessionBuilder"></a>

### *class* OIDCSessionBuilder

OIDC session builder.

Returned by [`SessionBuilder.with_oidc()`](#ansys.grantami.core.mi.SessionBuilder.with_oidc).

<a id="ansys.grantami.core.mi.OIDCSessionBuilder.with_access_token"></a>

#### with_access_token(token)

Authenticate the user via the provided access token.

Access tokens have short lifespans. The session will no longer be authenticated once the token expires.

* **Parameters:**
  **token** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Access token.
* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.OIDCSessionBuilder.with_authorization_code_flow"></a>

#### with_authorization_code_flow()

Authenticate the user interactively via a web browser.

Requires a web browser on the client machine.

* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow"></a>

#### with_device_code_flow()

Authenticate the user interactively using device code flow.

* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.OIDCSessionBuilder.with_refresh_token"></a>

#### with_refresh_token(token)

Authenticate the user via the provided refresh token.

* **Parameters:**
  **token** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Refresh token.
* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.OIDCSessionBuilder.with_stored_token"></a>

#### with_stored_token()

Authenticate the user via a persisted token.

The token must have been persisted to the system credential manager via [`Session.persist_oidc_token()`](#ansys.grantami.core.mi.Session.persist_oidc_token).

* **Return type:**
  [Session](#ansys.grantami.core.mi.Session)

<a id="ansys.grantami.core.mi.SessionConfiguration"></a>

### *class* SessionConfiguration(timeout=300000, max_retries=0, \*\*kwargs)

Configuration for a session.

* **Parameters:**
  * **timeout** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 300000*) – Maximum time to wait for a response, in milliseconds.
  * **max_retries** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *default: 0*) – Maximum number of times to retry requests sent to the Service Layer.
