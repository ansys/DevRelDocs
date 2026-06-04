# Bulk operators

<a id="bulk-operators"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher"></a>

### *class* AttributeFetcher

Bulk exporter for record data. Fetches data values for all named [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) and
[`PseudoAttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) objects from the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects and [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table).

Set `attributes` to  `None` to export all record data.

A class method executes the data export, allowing the [`AttributeFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher) to be edited post-creation.

#### Deprecated
Deprecated since version 4.2: This class will be made private in a future release. Use [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) to fetch attribute values in
bulk.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.__init__"></a>

#### \_\_init_\_(table, batch_size=100, attributes=None, records=None, max_parallel_threads=6, include_binary_data=False)

* **Parameters:**
  * **table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **batch_size** – int (default value of 100)
  * **attributes** – Union[List[Union[[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition), [`PseudoAttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition)]], List[str]]
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
  * **include_binary_data** – bool (default value of False)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.records"></a>

#### *property* records

List of records to be fetched (exported).

* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.attribute_list"></a>

#### *property* attribute_list

List of attributes for which data will be fetched (exported).

* **Returns:**
  List[Union[[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition), [`PseudoAttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher.fetch_attribute_data"></a>

#### fetch_attribute_data(parallelise=False)

Fetch the attribute data for the provided records and attributes, and populate the corresponding
[`AttributeValue`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) objects for each record.

* **Parameters:**
  **parallelise** – bool
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher"></a>

### *class* AssociatedRecordFetcher

Bulk fetcher for associated records. Fetches all [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects via association chains from the specified
[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects in the target [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Provides means to choose the direction that association chains
are followed, and to specify a list of tabular attributes which are chained together.

This operation performs no subset filtering.

A class method executes the fetch, allowing the [`AssociatedRecordFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher) to be edited post-creation.

#### Deprecated
Deprecated since version 4.2: This class will be made private in a future release. Use [`Table.bulk_fetch_associated_records()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_associated_records) to fetch
associated records in bulk.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher.__init__"></a>

#### \_\_init_\_(table, records, target_table, link_direction='Both', attribute_path=None, batch_size=100)

* **Parameters:**
  * **table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **target_table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table)
  * **link_direction** – str (`Both`, `Forward`, `Reverse`)
  * **attribute_path** – List[[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)]
  * **batch_size** – int (default value of 100)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher.fetch_associated_records"></a>

#### fetch_associated_records(parallelise=False, max_parallel_threads=6)

Fetch the associated records in the specified [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) from the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects. Return
a list of dictionaries with `source_record` and `associated_records` fields for each provided
[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record).

This operation performs no subset filtering.

* **Parameters:**
  * **parallelise** – [`bool`](https://docs.python.org/3/library/functions.html#bool)
  * **max_parallel_threads** – [`int`](https://docs.python.org/3/library/functions.html#int) (default 6)
* **Returns:**
  List[Dict[str, Union[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record), List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher"></a>

### *class* LinkFetcher

Bulk record link fetcher (exporter). Fetches and populates record link groups for the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
objects in the specified [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table). Set `link_groups` to `None` to fetch all record link groups.

Set `filter_subsets` to `True` to return records that are in the default subsets of the target table.
Set it to `False` to search with no filtering by subset.

#### Deprecated
Deprecated since version 4.2: This class will be made private in a future release. Use [`Table.bulk_link_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) to fetch links in bulk.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.__init__"></a>

#### \_\_init_\_(table, batch_size=100, records=None, link_groups=None, filter_subsets=True)

* **Parameters:**
  * **table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
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
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher.fetch_linked_records"></a>

#### fetch_linked_records(parallelise=False, max_parallel_threads=6)

Perform the bulk fetch (export). Batches Service Layer calls into efficient blocks, then populates
[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object pseudo-attributes.

* **Parameters:**
  * **parallelise** – bool
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher"></a>

### *class* ReleaseStateFetcher

Allows record release states to be fetched from the server in bulk.

The list of [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects, batch size, and number of threads in parallel can be edited post-creation.

A class method fetches the release states and populates the relevant [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) properties.

#### Deprecated
Deprecated since version 4.2: This class will be made private in a future release. Use [`Session.bulk_fetch_release_states()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) to fetch
release states in bulk.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.__init__"></a>

#### \_\_init_\_(session, records, batch_size=100, max_parallel_threads=6)

* **Parameters:**
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.records"></a>

#### *property* records

List of [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects to be processed.

* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.fetch_release_states"></a>

#### fetch_release_states(parallelise=False)

Fetches the release states of the specified [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from the server, and populates their
relevant properties.

* **Parameters:**
  **parallelise** – bool (splits operation into multiple threads if set to `True`)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer"></a>

### *class* BulkRecordDeleterWithdrawer

Allows for bulk deletion or withdrawal or records from the server. Records are withdrawn from
version-controlled tables, otherwise they are deleted.

The deletion/withdrawal is performed by a method on the class; as such, the list of
[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects for deletion, batch size, and number of threads in parallel can be edited post-creation.

#### Deprecated
Deprecated since version 4.2: This class will be made private in a future release. Use [`Session.bulk_delete_or_withdraw_records()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records) to
delete and withdraw records in bulk.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer.__init__"></a>

#### \_\_init_\_(session, records, batch_size=100, max_parallel_threads=6, withdrawal_notes=None)

* **Parameters:**
  * **session** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **batch_size** – int (default value of 100)
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **max_parallel_threads** – int (default value of 6)
  * **withdrawal_notes** – Optional[str]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer.records"></a>

#### *property* records

List of records to be deleted or withdrawn.

* **Returns:**
  List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer.delete_or_withdraw"></a>

#### delete_or_withdraw(parallelise=False)

Performs the deletion (or withdrawal, if the records are in a version-controlled table).

* **Parameters:**
  **parallelise** – bool (splits operation into multiple threads if `True`)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher"></a>

### *class* DataRevisionHistoryFetcher

Bulk exporter for data revision history.

Fetches the data revision history for all attributes of the provided records and populates the
[`Record.data_revision_history`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) property.

See [`AttributeFetcher`](#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher) to export attribute data.

#### Deprecated
Deprecated since version 4.2: This class will be made private in a future release. Use [`Table.bulk_fetch_data_revision_history()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history) to fetch
data revision history in bulk.

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher.__init__"></a>

#### \_\_init_\_(\_mi, records, batch_size=100, max_parallel_threads=6)

* **Parameters:**
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
  * **batch_size** – int (default value of 100)
  * **max_parallel_threads** – int (default value of 6)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher.fetch_data_revision_history"></a>

#### fetch_data_revision_history(parallelise=False)

Fetches the data revision history for all attributes of the provided records and populates the
[`Record.data_revision_history`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.data_revision_history) property.

* **Parameters:**
  **parallelise** – bool
