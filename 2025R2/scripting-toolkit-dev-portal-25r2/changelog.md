# Changelog

<a id="release-notes"></a>

<a id="changelog"></a>

<a id="project-version-release-notes"></a>

## MI Scripting Toolkit 4.2 release notes

<a id="enhancements"></a>

### Enhancements

* [`SearchCriterion`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion) now accepts [`RecordColor`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) and [`RecordType`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType) as criterion values for searches
  on record properties [`RecordProperties.color`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.color) [`RecordProperties.type`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.type) respectively.
* Range cell data returned by [`AttributeTabular.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) now includes additional items, `low_is_inclusive`
  and `high_is_inclusive`, to describe whether the low and high value are included in the range.
* [`Record.find_parent()`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.find_parent) no longer raises an [`IndexError`](https://docs.python.org/3/library/exceptions.html#IndexError) if the user does not have sufficient permissions
  to access the parent record. It now raises a [`PermissionError`](https://docs.python.org/3/library/exceptions.html#PermissionError).
* Classes [`AttributeDefinitionShortText`](api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionShortText) and [`AttributeDefinitionInteger`](api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger) now include the `.is_unique`
  property which indicates whether the attribute values are required to be unique.

<a id="bug-fixes"></a>

### Bug fixes

* [`Table.bulk_fetch_data_revision_history()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history) no longer raises a [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) when `parallelize=True` and the
  table contains meta-attributes.
* Using [`Table.set_display_unit()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.set_display_unit) for attributes with a temperature based unit now correctly results in the data
  being exported in the requested unit.
* [`AttributeTabular`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) now correctly loads exported data in cases where the tabular attribute includes columns
  unavailable to the user, regardless of the order in which columns are defined.
* [`AttributeTabular.column_types`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.column_types) now returns a list with the expected length in cases where the tabular
  attribute includes unavailable columns.
* Modifying the number of rows in a tabular attribute value by modifying the shape of the
  [`AttributeTabular.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) and [`TabularUnits.data`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.data) (accessed as `AttributeTabular.units.data`) values
  directly is no longer permitted. Instead, the [`AttributeTabular.add_row()`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row) and
  [`AttributeTabular.delete_row()`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row) methods should be used to change the number of rows in the tabular attribute
  value.
* Calling [`AttributeTabular.load()`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.load) on an empty [`AttributeTabular`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) now correctly initialises the value.
  This fixes an issue where the tabular attribute `__repr__` incorrectly included `not loaded` after calling
  [`AttributeTabular.load()`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.load).
* Editing existing tabular data no longer discards inclusiveness information of range cells.
* [`ReleaseStateFetcher.fetch_release_states()`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.fetch_release_states) and [`Session.bulk_fetch_release_states()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) now correctly
  populate the release state of versioned records that are not the latest version available to the user.
* [`ReleaseStateFetcher.fetch_release_states()`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.fetch_release_states) and [`Session.bulk_fetch_release_states()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) now correctly
  populate the release state of records with identical guids in different databases.

<a id="examples"></a>

### Examples

There have been no changes to example scripts in MI Scripting Toolkit 4.2.

<a id="backwards-incompatible-api-changes"></a>

### Backwards incompatible API changes

There are no known backwards-incompatible changes in MI Scripting Toolkit 4.2.

<a id="foundation-api-changes"></a>

### Foundation API changes

* Additional logging has been added to assist in debugging scripts, this is available via the `GDL.http` logger.
* Logging has been reorganised to allow more granular control of message logging, existing request and
  response log messages are now available via the `GDL.core` logger.
* [`GetRecordAttributesByRefRequest.tabularDataSettings`](foundation/api.md#GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.tabularDataSettings) added to control how tabular attributes are exported.

<a id="known-issues"></a>

## Known issues

* If an attribute is exported with the [`Table.bulk_fetch()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method with `include_binary_data=False`, subsequent
  values returned by the `AttributePicture.mime_file_type` property will always return `image/png`, regardless of
  the actual image format. The header returned when accessing the URL is unaffected and should be used instead.
* The behavior of [`Table.get_record_by_lookup_value()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_record_by_lookup_value) when a non-unique lookup value is provided is dependent on
  the Granta MI version. In Granta MI 2025 R2 and later, if multiple matches are detected, no results are returned. In
  earlier Granta MI versions, an exception is raised.
* If an attribute is removed from the Granta MI database after the parent [`Database`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) is first accessed, calls to
  [`Table.refresh_attributes()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.refresh_attributes) raise a [`GRANTA_ServiceLayerError`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_ServiceLayerError). Use [`Database.refresh_tables()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.refresh_tables)
  instead.
* In version-controlled tables, [`DataRevisionHistory`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory) objects have an ambiguous meaning. The
  `history.last_modified_date` for the following attribute types is updated when the release state of the parent
  record is modified:
  - Date
  - Hyperlink
  - Integer
  - Logical
  - Range
  - Short text

  The `history.last_modified_date` for the following attribute types is *not* updated when the release state of the
  parent record is modified:
  - Discrete
  - File
  - Functional
  - Long text
  - Picture
  - Point
  - Tabular
* The following hyperlink display options available in MI Viewer are not supported by
  [`Hyperlink.hyperlink_display`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink.hyperlink_display):
  - Current pane
  - Left browse pane
  - Both panes below toolbar

  If a hyperlink attribute value with one of these three display options is exported, the
  [`hyperlink_display`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink.hyperlink_display) will be set to `Content`. If the attribute is subsequently re-imported, the
  display option in MI Viewer will be changed to “Right content pane”.

<a id="upgrading"></a>

<a id="planned-changes-and-deprecations"></a>

## Planned changes and deprecations

This section describes deprecated functionality which will be removed or changed in a future release.

<a id="functionality-deprecated-with-version-4-2"></a>

### Functionality deprecated with version 4.2

| Deprecated functionality                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Recommended replacement / future functionality                                                                                                                                                                                                                                            |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Session.spawn_session()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.spawn_session)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Create foundation layer sessions using [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession).                                                                                                                               |
| [`Session.connect()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.connect)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Create foundation layer sessions using [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession).                                                                                                                               |
| [`Session.bulk_fetch_release_states()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) and [`ReleaseStateFetcher.fetch_release_states()`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher.fetch_release_states) raise<br/>[`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) exceptions on staged records.                                                                                                                                                                                                                                                                                                                                                                                                                              | Will raise [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) exceptions in a future version.                                                                                                                                                                   |
| [`AttributeTabular.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) raises [`AssertionError`](https://docs.python.org/3/library/exceptions.html#AssertionError) exceptions for invalid values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Will raise [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) or [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) exceptions in a future version.                                                                                     |
| [`Session.assert_can_run_parallelised()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.assert_can_run_parallelised).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Use renamed method [`Session.assert_can_run_parallelized()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.assert_can_run_parallelized).                                                                                                                                     |
| Argument `parallelise` of methods [`Session.bulk_fetch_release_states()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states),<br/>[`Session.bulk_delete_or_withdraw_records()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records), [`Table.bulk_fetch()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch), [`Table.bulk_link_fetch()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch),<br/>[`Table.bulk_fetch_associated_records()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_associated_records), and [`Table.bulk_fetch_data_revision_history()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history). | Use the argument `parallelize`.                                                                                                                                                                                                                                                           |
| [`Table.path_from()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from) and [`Table.paths_from()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from) `end_node` parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Create records using [`Table.create_record()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_record).                                                                                                                                                        |
| [`Record.refetch_record_versions()`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.refetch_record_versions) and [`Record.all_versions`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_versions) raise<br/>[`GRANTA_Exception`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_Exception) exceptions on staged records.                                                                                                                                                                                                                                                                                                                                                                                                                                                | Will raise [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) exceptions in a future version.                                                                                                                                                                   |
| Record color and record type [`SearchCriterion`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion) using [`str`](https://docs.python.org/3/library/stdtypes.html#str) criterion values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Define the criterion value using the enumerations [`RecordColor`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) and [`RecordType`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType).                                              |
| [`BulkRecordDeleterWithdrawer`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Use [`Session.bulk_delete_or_withdraw_records()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records) to delete and withdraw records in bulk.                                                                                                     |
| [`ReleaseStateFetcher`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.ReleaseStateFetcher)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Use [`Session.bulk_fetch_release_states()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_fetch_release_states) to fetch release states in bulk.                                                                                                                        |
| [`AttributeFetcher`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AttributeFetcher)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Use [`Table.bulk_fetch()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) to fetch attribute values in bulk.                                                                                                                                             |
| [`AssociatedRecordFetcher`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.AssociatedRecordFetcher)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Use [`Table.bulk_fetch_associated_records()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_associated_records) to fetch associated records in bulk.                                                                                                     |
| [`LinkFetcher`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.LinkFetcher)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Use [`Table.bulk_link_fetch()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_link_fetch) to fetch links in bulk.                                                                                                                                              |
| [`DataRevisionHistoryFetcher`](api/bulk-operators.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.DataRevisionHistoryFetcher)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Use [`Table.bulk_fetch_data_revision_history()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch_data_revision_history) to fetch data revision history in bulk.                                                                                            |
| [`extract_parameter_value()`](api/helpers.md#GRANTA_MIScriptingToolkit.granta.mi_functions.extract_parameter_value)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Access the [`ParameterValue.discreteValue`](foundation/api.md#GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue.discreteValue) and<br/>[`ParameterValue.numericValue`](foundation/api.md#GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue.numericValue) properties directly. |
| [`debug()`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.debug),<br/>[`info()`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.info),<br/>[`warning()`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.warning), and<br/>[`error()`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.error)                                                                                                                                                                                                                                                                                                                                                                                                                                            | Use [`core_logger()`](foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.core_logger) to obtain the<br/>[`Logger`](https://docs.python.org/3/library/logging.html#logging.Logger) object directly.                                                                 |

<a id="functionality-deprecated-with-version-4-1"></a>

### Functionality deprecated with version 4.1

| Deprecated functionality                                                                                                                                                                                                                                                           | Recommended replacement / future functionality                                                                                                                                                                                                                                          |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Session.spawn_session()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.spawn_session) if session contains manual credentials and `store_password = False`                                                                                                          | Specify `store_password = True` when creating the original session.                                                                                                                                                                                                                     |
| [`Database.get_all_link_details_where()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_all_link_details_where)                                                                                                                                    | [`Database.record_link_groups`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups)                                                                                                                                                           |
| [`Database.get_link_detail()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_link_detail)                                                                                                                                                          | [`Database.record_link_groups`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups)                                                                                                                                                           |
| [`Database.link_details`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.link_details)                                                                                                                                                                  | [`Database.record_link_groups`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups)                                                                                                                                                           |
| [`Database.set_unit_system()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system)                                                                                                                                                          | [`Database.unit_system`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures)                                 |
| [`Database.get_table()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) and [`Database.get_table_by_guid()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid): `subsets` parameter               | Use [`Table.subsets`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) on the returned table object.                                                                                                                                                        |
| [`Database.get_table()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) and [`Database.get_table_by_guid()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid): `unit_system` parameter           | Configure database unit system before getting table.                                                                                                                                                                                                                                    |
| [`Database.get_table()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) and [`Database.get_table_by_guid()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid): `absolute_temperatures` parameter | Configure database absolute temperatures before getting table.                                                                                                                                                                                                                          |
| [`Record.pseudo_attributes`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.pseudo_attributes)                                                                                                                                                            | Individual [`Record`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) properties.                                                                                                                                                                              |
| Setting [`Record.type`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.type) to a string.                                                                                                                                                                 | Set to a [`RecordType`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType) value.                                                                                                                                                                               |
| [`Record.all_children()`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.all_children)                                                                                                                                                                    | [`Record.get_descendants()`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.get_descendants)                                                                                                                                                                   |
| Setting single-valued [`AttributeDiscrete.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) to a list of strings.                                                                                               | Set to a string.                                                                                                                                                                                                                                                                        |
| [`ParameterDefinition.type`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.type)                                                                                                                                                     | [`ParameterDefinition.data_type`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.data_type) and [`ParameterDefinition.restricted`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.restricted) |
| [`log_to_file_in_local_app_data()`](api/helpers.md#GRANTA_MIScriptingToolkit.granta.mi_functions.log_to_file_in_local_app_data)                                                                                                                                                    | Use the Python logging module. Obtain the built-in logger with the function [`get_foundation_logger()`](api/helpers.md#GRANTA_MIScriptingToolkit.granta.mi_functions.get_foundation_logger).                                                                                            |

<a id="upgrading-from-earlier-versions"></a>

## Upgrading from earlier versions

This section summarizes all the breaking changes in previous versions of MI Scripting Toolkit.

<a id="upgrading-from-project-version-4-1"></a>

### Upgrading from MI Scripting Toolkit Version 4.1

There are no changes required to upgrade from MI Scripting Toolkit Version 4.1.

<a id="upgrading-from-project-version-4-0"></a>

### Upgrading from MI Scripting Toolkit Version 4.0

<a id="parameters"></a>

#### Parameters

* The attribute `parent_record` of the class [`ParameterDefinition`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) has been removed as the information is not
  currently available in Scripting Toolkit. Attempting to access this attribute will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* The `order` and `parent_attribute` properties were previously implemented on the [`ParameterDefinition`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)
  class, and so were accessible for all parameter objects. However, these properties only have meaning when requested
  for an attribute parameter, and had undefined behavior for database parameters. These properties have been
  moved to the [`AttributeParameter`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) class. Attempting to access these properties from a
  [`DatabaseParameter`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter) object will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* It is no longer permitted to provide database or attribute parameters to [`Exporter.run_exporter()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.run_exporter). The results
  of the [`Exporter.get_parameters_required_for_export()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export) method must be used to specify parameter values for
  export. If you do not use the results of the [`Exporter.get_parameters_required_for_export()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export) method a
  [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) will be raised.

<a id="unit-systems-and-absolute-temperatures"></a>

#### Unit systems and absolute temperatures

This section describes the previous incorrect behavior and usages that are subject to behavior changes in version 4.1.

* If the `unit_system` and `absolute_temperature` arguments were never used, the default absolute temperature was
  `True`. It now defaults to `False`.
* If only the `absolute_temperature` argument was provided, it was ignored and the absolute temperature scale was
  not updated on the database.
* If the `unit_system` argument was provided, it only had an effect if the provided value was not the
  [`DATABASE_UNIT_SYSTEM`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM) **and** if the provided value was different from the previously active unit system:

  | Unit system change   | `absolute_temperature` provided   | `absolute_temperature` not provided   |
  |----------------------|-----------------------------------|---------------------------------------|
  | True                 | `absolute_temperature` respected  | `absolute_temperature` set to `False` |
  | False                | `absolute_temperature` ignored    | `absolute_temperature` unchanged      |

In version 4.1, the behavior of these methods and arguments has been fixed.

<a id="upgrading-from-project-for-python-version-3-x"></a>

### Upgrading from MI Scripting Toolkit for Python Version 3.x

<a id="subsets"></a>

#### Subsets

* If your code does not use the [`Table.subsets`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property and the default subset in your
  tables contain all records, you should see no behavior changes. *This is the most common
  scenario.*
* If your code sets the [`Table.subsets`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to the default subset, then you should
  disable this assignment from your code, since it now occurs automatically.
* If your code sets the [`Table.subsets`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a non-default subset, then you should
  clear the [`Table.subsets`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property with `table_object.subsets.clear()` before setting the
  non-default subset.
* If your code sets the [`Table.subsets`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a set containing more than one subset and
  you perform any subsequent record fetching or search operations, these operations will raise a
  `ValueError`. They would previously not consider all applied subsets, and so would return
  incorrect results.

<a id="searching-and-browsing-for-records"></a>

#### Searching and browsing for records

* All searches except [`Database.search_for_records_by_text()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) now apply a subset filter when
  searching. If a table included in a search has multiple applied subsets, a `ValueError` is
  raised.
* The [`Table.search_for_records_where()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) `list_of_criteria` parameter must now only contain
  criteria based on pseudo-attributes and attribute definitions from the table being searched.
  Otherwise a `ValueError` is raised.
* The [`Database.search_for_records_where()`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) `list_of_criteria` parameter must now only
  contain criteria based on pseudo-attributes and attribute definitions from at most one table
  within the database being searched. Otherwise a `ValueError` is raised.
* Getting records based on the Granta MI tree is generally now subject to subset filtering. If a
  table included in a record fetch operation has multiple applied subsets, a `ValueError` is
  raised.

<a id="other-changes"></a>

#### Other changes

* [`Session.records_from_string()`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string) now defaults to `use_strict_version=True`.
* `get_records_by_ids` and `get_record_by_id` methods on [`Session`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session), [`Database`](api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database),
  and [`Table`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) classes no longer accept the `identity` argument. Use `history_identity`
  instead.
* [`Table.paths_from()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from), [`Table.path_from()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from), and [`Table.get_records_from_path()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path) no
  longer support `str` and [`Table`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) inputs. Use `None` to use the table root as starting
  node. All three methods now raise a `ValueError` if the record specified as `starting_node`
  is not in the current table, and raise a `TypeError` if the argument value is not a
  [`Record`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or `None`.
* [`Record.color`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color) no longer supports `str` inputs. Only [`RecordColor`](api/constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) objects
  are supported.
* [`AttributeFunctional.add_point()`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_point) and [`AttributeFunctional.add_range()`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_range) methods now
  raise `KeyError` exceptions if a dictionary with incorrect keys is provided.
* [`File.load()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load), [`File.save()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save), [`Picture.load()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load), and [`Picture.save()`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) no longer
  accept `file_name` as an argument. Provide the full path including the file name to the `path`
  argument. For file attributes, the name of the file is part of the attribute value and can be
  accessed via [`AttributeFile.file_name`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.file_name) or [`File.file_name`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name) to build a full path.
* `File.name` has been removed. Use [`File.file_name`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name).
* `Picture.name` has been removed.
* [`File`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) and [`Picture`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) no longer accept `name` or `load` as arguments. Provide
  the full path to the file/picture (including the file name) to the keyword only argument `path`.
* [`File.description`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.description) now only supports `str` inputs.
* [`AttributeHyperlink.object`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object) no longer supports `str` inputs. Only [`Hyperlink`](api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink)
  objects are supported.
* Any code which performs bulk export operations on file and picture attributes should be modified
  either to access the binary data with an HTTP library such as
  [requests](https://pypi.org/project/requests/) or [httpx](https://pypi.org/project/httpx/).
  Alternatively, the binary data can be exported directly by specifying
  `include_binary_data = True` in the call to [`Table.bulk_fetch()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch). However, this is likely
  to be less performant for large amounts of data.
* The `Record.id` property has been renamed to [`Record.history_identity`](api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_identity).

<a id="asyncjobs"></a>

#### AsyncJobs

The AsyncJobQueue functionality has been moved to a new PyAnsys package called PyGranta JobQueue.
If you are using Granta MI 2024 R2 or later, you can use this package to import and export Excel
files and import text data into Granta MI. If you are using Granta MI 2024 R1 or earlier and require
Job Queue functionality, you should continue to use MI Scripting Toolkit v3.3.

<a id="upgrading-from-project-for-python-version-2-x"></a>

### Upgrading from MI Scripting Toolkit for Python Version 2.X

<a id="new-store-password-option-on-the-session-class"></a>

#### New `store_password` option on the [`Session`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class

**Old behavior:** The `password` for a [`Session`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) is used to connect to Granta MI once, and cannot be stored.

**New behavior:** The `password` assigned to a [`Session`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) can be stored and used multiple times. You must
specify whether you want to store the password or not using the `store_password` property. If `store_password` is
missing, bulk operations will fail.

<a id="attributevalue-value-property-has-been-standardized"></a>

#### AttributeValue.value property has been standardized

| Class                                                                                                                            | Old (2.X) behavior                                                                                                                                                                                                                                                         | New (3.0) behavior                                                                                                                                                                                                                                                                                                                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttributePoint`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint)           | `.points` returns the attribute value or values as a [`list`](https://docs.python.org/3/library/stdtypes.html#list) in all cases.                                                                                                                                          | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`float`](https://docs.python.org/3/library/functions.html#float) values if the attribute is listed<br/>as multi-valued in the schema, and a single [`float`](https://docs.python.org/3/library/functions.html#float) value if single-valued. |
| [`AttributeDiscrete`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete)     | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) always returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list), even when attribute is listed as<br/>single-valued in the schema. | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) returns [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`str`](https://docs.python.org/3/library/stdtypes.html#str) values if the attribute is<br/>multi-valued, and a single [`str`](https://docs.python.org/3/library/stdtypes.html#str) value if single-valued.                                  |
| [`AttributeFunctional`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values.                                                                                                                                                                                                                                  |
| [`AttributeTabular`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular)       | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) returns an instance of the class.                                                                                                                   | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values for each column.                                                                                                                                                                                                                |
| [`AttributeHyperlink`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink)   | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value) returns an instance of the class.                                                                                                                 | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value) returns the URL as a [`str`](https://docs.python.org/3/library/stdtypes.html#str), or [`None`](https://docs.python.org/3/library/constants.html#None) if no URL has been<br/>set.                                                                                                                                     |
| [`AttributeFile`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile)             | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                                                                                                                         |
| [`AttributePicture`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture)       | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                                                                                                                         |

<a id="additional-changes-to-version-2-0-scripts"></a>

#### Additional changes to Version 2.0 scripts

Version 2.0 scripts may need to be modified to take account of these additional breaking changes:

| Behavior area                                                                                                              | Old (2.X) behavior                                                                                                                                                                                                                       | New (3.0) behavior                                                                                                                                                                                                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search return types                                                                                                        | Text and criteria searches returned [`None`](https://docs.python.org/3/library/constants.html#None) when no results are found, whereas other methods return an empty<br/>[`list`](https://docs.python.org/3/library/stdtypes.html#list). | All search methods return an empty [`list`](https://docs.python.org/3/library/stdtypes.html#list) when no records are found.                                                                                                                                                                                                   |
| `search_for_records_by_text` return types                                                                                  | The session method returns an `iterator`. The database and table methods return a [`list`](https://docs.python.org/3/library/stdtypes.html#list).                                                                                        | All methods return a [`list`](https://docs.python.org/3/library/stdtypes.html#list).                                                                                                                                                                                                                                           |
| [`Table.path_from()`](api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from) record color behavior | The color of the records in the path is set to the default record color if  `color` is not provided.                                                                                                                                     | The color of records in the path inherits from the parent unless `color` is provided.                                                                                                                                                                                                                                          |
| Identifying databases when both `name` and `db_key` are provided                                                           | The search stops once a unique name match is made; `db_key` is only used if the name search does not produce a<br/>single result.                                                                                                        | The search continues through until a database matching *both* the name *and* key is found.                                                                                                                                                                                                                                     |
| Date data types                                                                                                            | Dates are always handled as strings.                                                                                                                                                                                                     | Dates can be provided as [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects or [`str`](https://docs.python.org/3/library/stdtypes.html#str) objects. Dates are returned as<br/>[`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects. |
| The `search_for_records_where` method                                                                                      | The `search_for_records_where` method on the [`Session`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class was available.                                                                                                | The `search_for_records_where` method on the [`Session`](api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class has been removed.                                                                                                                                                                                   |
