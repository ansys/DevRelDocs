# Upgrading from earlier versions

<a id="upgrading"></a>

<a id="upgrading-from-earlier-versions"></a>

This section summarizes all the breaking changes in previous versions of MI Scripting Toolkit.

<a id="upgrading-from-project-version-4-2"></a>

## Upgrading from MI Scripting Toolkit Version 4.2

<a id="package"></a>

### Package

* Moved MI Scripting Toolkit to new packages `ansys-grantami-core` and `ansys-grantami-backend-soap`.
* Added compatibility package `GRANTA_MIScriptingToolkit`, which is deprecated from v5.0.
* Removed Async Job Queue stubs: module `mi_async_jobs`, method `Session.get_async_job_queue` and error
  handling in the `granta` namespace.

<a id="session"></a>

### Session

* Added [`SessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder) to create [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) objects. [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) is no longer supported unless
  imported via `GRANTA_MIScriptingToolkit`.
* Removed Streamlined API function `connect()`.
* Removed methods `Session.can_connect()`, `Session.assert_can_run_parallelized()`.
* Removed `Session.spawn_session`. Create foundation layer sessions using
  [`ansys.grantami.backend.soap.GRANTA_MISession`](../foundation_api.md#module-ansys.grantami.backend.soap.GRANTA_MISession).
* [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) objects that are instantiated with URLs that do not specify a protocol now default to HTTPS. To use
  HTTP, provide the full URL including the `http` protocol.

<a id="database"></a>

### Database

* Removed [`Database.get_table()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.get_table) and [`Database.get_table_by_guid()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.get_table_by_guid) arguments `subsets`, `unit_system`,
  and `absolute_temperatures`.
* Removed `Database.get_all_link_details_where`, `Database.get_link_detail`, and `Database.link_details`. Use
  [`Database.record_link_groups`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.record_link_groups) for available record link groups.
* Removed `Database.set_unit_system`. Use [`Database.unit_system`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.absolute_temperatures).
* [`Database.get_table()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.get_table) no longer resets the active subsets of the returned [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) object.

<a id="table"></a>

### Table

* Removed [`Table.path_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.path_from) and [`Table.paths_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.paths_from) argument `end_node`. Create records using
  [`Table.create_record()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.create_record).

<a id="bulk-methods"></a>

### Bulk methods

* Removed `parallelise` argument from methods [`Session.bulk_fetch_release_states()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_fetch_release_states),
  [`Session.bulk_delete_or_withdraw_records()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_delete_or_withdraw_records), [`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch), [`Table.bulk_link_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_link_fetch),
  [`Table.bulk_fetch_associated_records()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_associated_records), and [`Table.bulk_fetch_data_revision_history()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_data_revision_history). Use the argument
  `parallelize`.
* Removed class `BulkRecordDeleterWithdrawer` from public API. Use [`Session.bulk_delete_or_withdraw_records()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_delete_or_withdraw_records) to
  delete and withdraw records in bulk.
* Removed class `ReleaseStateFetcher` from public API. Use [`Session.bulk_fetch_release_states()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_fetch_release_states) to fetch release
  states in bulk.
* Removed class `AttributeFetcher` from public API. Use [`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) to fetch attribute values in bulk.
* Removed class `AssociatedRecordFetcher` from public API. Use [`Table.bulk_fetch_associated_records()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_associated_records) to fetch
  associated records in bulk.
* Removed class `LinkFetcher` from public API. Use [`Table.bulk_link_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_link_fetch) to fetch links in bulk.
* Removed class `DataRevisionHistoryFetcher` from public API. Use [`Table.bulk_fetch_data_revision_history()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_data_revision_history) to
  fetch data revision history in bulk.
* Removed module `mi_bulk_utilities` from public API.

<a id="attribute-definitions"></a>

### Attribute definitions

* Renamed `AttributeDefinitionDatetime` to [`AttributeDefinitionDate`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate).
* [`AttributeDefinitionDate.min`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate.min) and [`AttributeDefinitionDate.max`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate.max) now return [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)
  objects instead of [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects set to midnight on the appropriate date.
* Removed the `axis_name` property from all attribute definition classes except
  [`AttributeDefinitionFloatFunctional`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional).
* Removed the `unit` property from all attribute definition classes except
  [`AttributeDefinitionRange`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange), [`AttributeDefinitionFloatFunctional`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional), and
  [`AttributeDefinitionPoint`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint).

<a id="records"></a>

### Records

* Removed `Record.all_children`. Use [`Record.get_descendants()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.get_descendants).
* Removed support for setting [`Record.type`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.type) to a string. Set to a [`RecordType`](../streamlined_api/constants.md#ansys.grantami.core.mi_constants.RecordType) value.
* Removed support for record color and record type [`SearchCriterion`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion) using [`str`](https://docs.python.org/3/library/stdtypes.html#str) criterion values. Define
  the criterion value using the enumerations [`RecordColor`](../streamlined_api/constants.md#ansys.grantami.core.mi_constants.RecordColor) and [`RecordType`](../streamlined_api/constants.md#ansys.grantami.core.mi_constants.RecordType).
* Removed deprecated method `refetch_pseudos()`. Use the alternative [`Record.refetch_pseudo_attributes()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes).
* Removed support for deprecated argument names `include_metas` and `include_pseudos` on
  [`Record.get_attributes()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.get_attributes). Use `include_meta_attributes` and `include_pseudo_attributes`.
* Removed deprecated attribute `Record.pseudo_attributes`. Pseudo-attributes are available as individual
  [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) properties.
* The behavior when invalid operations are performed on staged records has been standardized. All methods and properties
  now raise [`InvalidRecordStateError`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) when called on staged records in circumstances where this is not
  permitted.

<a id="float-functional-attribute-values"></a>

### Float functional attribute values

* `FunctionalSeries` has been split into [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint) and
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange).
* `FunctionalGrid` has been split into [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint) and
  [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange).
* `FunctionalSeries.hide_graph` has been renamed to `show_as_table`.
* Removed `AttributeFunctionalSeries.series_linestyles` and `AttributeFunctionalGrid.linestyle`. Use the
  `decoration` property.
* Removed `AttributeFunctional.clear()`. Set the `.value` to [`None`](https://docs.python.org/3/library/constants.html#None).
* The `unit` property on functional attribute classes now returns [`None`](https://docs.python.org/3/library/constants.html#None) for dimensionless attributes, instead of
  an empty string.
* `AttributeFunctional.xaxis_parameter` has been removed. To access x-axis parameter information, use the `x_axis`
  and `parameters` properties.
* The mapping `AttributeFunctional.xaxis` has been removed. Use `with_new_x_axis()`, to create an attribute value
  with a different x-axis.
* The `parameters` property now returns a mapping of parameter names to [`FunctionalValueParameter`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter) objects.

<a id="tabular-attribute-values"></a>

### Tabular attribute values

* The `.value` property on [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular) is now read-only, replicating where possible the v 4.2
  interface. Use the new [`AttributeTabular.rows`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.rows)-based interface for making changes to tabular data.
* The `.add_row` method on [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular) has been renamed to [`AttributeTabular.append_row()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.append_row), to
  better reflect its behavior.
* The `.units` property has been removed from [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular). To access the units as defined on the
  column, use the [`AttributeDefinitionTabular.column_units`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_units) property. To access the unit for a specific cell,
  use the [`RangeValue.unit`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.RangeValue.unit) or [`PointValue.unit`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.PointValue.unit) property on the cell.
* Direct indexing of the tabular attribute value to access rows has been removed.
* Operations which can cause data loss for users of Data Updater have been disabled by default. To enable them for a
  specific attribute value, call [`AttributeTabular.enable_destructive_editing()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing).
* New classes [`ShortTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.ShortTextValue), [`LongTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LongTextValue), [`LogicalValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LogicalValue), [`IntegerValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.IntegerValue),
  [`DateValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.DateValue), [`PictureValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.PictureValue), and [`FileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) represent individual linked cells in a tabular
  attribute value. The corresponding Local versions of these classes are used to represent local cells.

<a id="other-attribute-values"></a>

### Other attribute values

* [`AttributePoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePoint) has been split into [`AttributePointSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle) and [`AttributePointMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti).
* The [`AttributePoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePoint) `unit` property now returns [`None`](https://docs.python.org/3/library/constants.html#None) for dimensionless attributes, instead of an
  empty string.
* [`AttributeDiscrete`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete) has been split into [`AttributeDiscreteSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle) and
  [`AttributeDiscreteMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti).
* [`AttributeDate.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate.value) now only supports [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) objects.
* Removed `AttributeDate.value_as_string`.
* [`AttributeRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value) can now only be set to an instance of [`Range`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range).
* [`AttributeRange.unit`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.unit) now returns [`None`](https://docs.python.org/3/library/constants.html#None) for dimensionless attributes, instead of an empty string.
* The property `.object` has been removed from [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink). Use the properties
  [`AttributeHyperlink.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.value), [`AttributeHyperlink.hyperlink_display`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display), and
  [`AttributeHyperlink.hyperlink_description`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description)
  instead.
* Properties [`AttributeHyperlink.hyperlink_description`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description), [`AttributeFile.description`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.description),
  [`AttributeFile.url`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.url), and [`AttributePicture.url`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.url) now return [`None`](https://docs.python.org/3/library/constants.html#None) if properties are not set,
  instead of an empty string.

<a id="schema-and-supporting-items"></a>

### Schema and supporting items

* Removed `ParameterDefinition.type`. Use [`ParameterDefinition.data_type`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.data_type)
  and [`ParameterDefinition.restricted`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.restricted).
* Removed support for creating [`SearchCriterion`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion) objects for datetime-based pseudo-attributes with [`str`](https://docs.python.org/3/library/stdtypes.html#str)
  values. Use [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) values only.
* Removed support for providing the [`AttributeDefinition.search_criterion()`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition.search_criterion) `between_dates` argument as a
  non-tuple sequence of [`str`](https://docs.python.org/3/library/stdtypes.html#str) values. Argument must be specified as a 2-tuple of [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) values.

<a id="miscellaneous-functions"></a>

### Miscellaneous functions

* Removed method `mi_functions.log_to_file_in_local_app_data`. Use the Python logging module, and obtain the
  built-in logger with the function [`get_foundation_logger()`](../streamlined_api/helpers.md#ansys.grantami.core.mi_functions.get_foundation_logger).
* Removed method `mi_functions.extract_parameter_value`.

<a id="upgrading-from-project-version-4-1"></a>

## Upgrading from MI Scripting Toolkit Version 4.1

There are no changes required to upgrade from MI Scripting Toolkit Version 4.1.

<a id="upgrading-from-project-version-4-0"></a>

## Upgrading from MI Scripting Toolkit Version 4.0

<a id="parameters"></a>

### Parameters

* The attribute `parent_record` of the class [`ParameterDefinition`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_classes.ParameterDefinition) has been removed as the information is not
  currently available in Scripting Toolkit. Attempting to access this attribute will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* The `order` and `parent_attribute` properties were previously implemented on the [`ParameterDefinition`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_classes.ParameterDefinition)
  class, and so were accessible for all parameter objects. However, these properties only have meaning when requested
  for an attribute parameter, and had undefined behavior for database parameters. These properties have been
  moved to the [`AttributeParameter`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter) class. Attempting to access these properties from a
  [`DatabaseParameter`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_classes.DatabaseParameter) object will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* It is no longer permitted to provide database or attribute parameters to [`Exporter.run_exporter()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_exporters.Exporter.run_exporter). The results
  of the [`Exporter.get_parameters_required_for_export()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_exporters.Exporter.get_parameters_required_for_export) method must be used to specify parameter values for
  export. If you do not use the results of the [`Exporter.get_parameters_required_for_export()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_exporters.Exporter.get_parameters_required_for_export) method a
  [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) will be raised.

<a id="unit-systems-and-absolute-temperatures"></a>

### Unit systems and absolute temperatures

This section describes the previous incorrect behavior and usages that are subject to behavior changes in version 4.1.

* If the `unit_system` and `absolute_temperature` arguments were never used, the default absolute temperature was
  `True`. It now defaults to `False`.
* If only the `absolute_temperature` argument was provided, it was ignored and the absolute temperature scale was
  not updated on the database.
* If the `unit_system` argument was provided, it only had an effect if the provided value was not the
  [`DATABASE_UNIT_SYSTEM`](../streamlined_api/constants.md#ansys.grantami.core.mi_constants.DATABASE_UNIT_SYSTEM) **and** if the provided value was different from the previously active unit system:

  | Unit system change   | `absolute_temperature` provided   | `absolute_temperature` not provided   |
  |----------------------|-----------------------------------|---------------------------------------|
  | True                 | `absolute_temperature` respected  | `absolute_temperature` set to `False` |
  | False                | `absolute_temperature` ignored    | `absolute_temperature` unchanged      |

In version 4.1, the behavior of these methods and arguments has been fixed.

<a id="upgrading-from-project-for-python-version-3-x"></a>

## Upgrading from MI Scripting Toolkit for Python Version 3.x

<a id="subsets"></a>

### Subsets

* If your code does not use the [`Table.subsets`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.subsets) property and the default subset in your
  tables contain all records, you should see no behavior changes. *This is the most common
  scenario.*
* If your code sets the [`Table.subsets`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.subsets) property to the default subset, then you should
  disable this assignment from your code, since it now occurs automatically.
* If your code sets the [`Table.subsets`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.subsets) property to a non-default subset, then you should
  clear the [`Table.subsets`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.subsets) property with `table_object.subsets.clear()` before setting the
  non-default subset.
* If your code sets the [`Table.subsets`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.subsets) property to a set containing more than one subset and
  you perform any subsequent record fetching or search operations, these operations will raise a
  `ValueError`. They would previously not consider all applied subsets, and so would return
  incorrect results.

<a id="searching-and-browsing-for-records"></a>

### Searching and browsing for records

* All searches except [`Database.search_for_records_by_text()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_by_text) now apply a subset filter when
  searching. If a table included in a search has multiple applied subsets, a `ValueError` is
  raised.
* The [`Table.search_for_records_where()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.search_for_records_where) `list_of_criteria` parameter must now only contain
  criteria based on pseudo-attributes and attribute definitions from the table being searched.
  Otherwise a `ValueError` is raised.
* The [`Database.search_for_records_where()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_where) `list_of_criteria` parameter must now only
  contain criteria based on pseudo-attributes and attribute definitions from at most one table
  within the database being searched. Otherwise a `ValueError` is raised.
* Getting records based on the Granta MI tree is generally now subject to subset filtering. If a
  table included in a record fetch operation has multiple applied subsets, a `ValueError` is
  raised.

<a id="other-changes"></a>

### Other changes

* [`Session.records_from_string()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.records_from_string) now defaults to `use_strict_version=True`.
* `get_records_by_ids` and `get_record_by_id` methods on [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session), [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database),
  and [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) classes no longer accept the `identity` argument. Use `history_identity`
  instead.
* [`Table.paths_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.paths_from), [`Table.path_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.path_from), and [`Table.get_records_from_path()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.get_records_from_path) no
  longer support `str` and [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) inputs. Use `None` to use the table root as starting
  node. All three methods now raise a `ValueError` if the record specified as `starting_node`
  is not in the current table, and raise a `TypeError` if the argument value is not a
  [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) or `None`.
* [`Record.color`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.color) no longer supports `str` inputs. Only [`RecordColor`](../streamlined_api/constants.md#ansys.grantami.core.mi_constants.RecordColor) objects
  are supported.
* ‘AttributeFunctional.add_point’ and ‘AttributeFunctional.add_range’ methods now raise `KeyError` exceptions if a
  dictionary with incorrect keys is provided. Note: these methods were removed with MI Scripting Toolkit v5.0.
* [`File.load()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.load), [`File.save()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.save), [`Picture.load()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture.load), and [`Picture.save()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture.save) no longer
  accept `file_name` as an argument. Provide the full path including the file name to the `path`
  argument. For file attributes, the name of the file is part of the attribute value and can be
  accessed via [`AttributeFile.file_name`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.file_name) or [`File.file_name`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.file_name) to build a full path.
* `File.name` has been removed. Use [`File.file_name`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.file_name).
* `Picture.name` has been removed.
* [`File`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.File) and [`Picture`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture) no longer accept `name` or `load` as arguments. Provide
  the full path to the file/picture (including the file name) to the keyword only argument `path`.
* [`File.description`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.description) now only supports `str` inputs.
* `AttributeHyperlink.object` has been removed, use the properties on the [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink) object
  instead.
* Any code which performs bulk export operations on file and picture attributes should be modified
  either to access the binary data with an HTTP library such as
  [requests](https://pypi.org/project/requests/) or [httpx](https://pypi.org/project/httpx/).
  Alternatively, the binary data can be exported directly by specifying
  `include_binary_data = True` in the call to [`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch). However, this is likely
  to be less performant for large amounts of data.
* The `Record.id` property has been renamed to [`Record.history_identity`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.history_identity).

<a id="asyncjobs"></a>

### AsyncJobs

The AsyncJobQueue functionality has been moved to a new PyAnsys package called PyGranta JobQueue.
If you are using Granta MI 2024 R2 or later, you can use this package to import and export Excel
files and import text data into Granta MI. If you are using Granta MI 2024 R1 or earlier and require
Job Queue functionality, you should continue to use MI Scripting Toolkit v3.3.

<a id="upgrading-from-project-for-python-version-2-x"></a>

## Upgrading from MI Scripting Toolkit for Python Version 2.X

<a id="new-store-password-option-on-the-session-class"></a>

### New `store_password` option on the [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) class

**Old behavior:** The `password` for a [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) is used to connect to Granta MI once, and cannot be stored.

**New behavior:** The `password` assigned to a [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) can be stored and used multiple times. You must
specify whether you want to store the password or not using the `store_password` property. If `store_password` is
missing, bulk operations will fail.

<a id="attributevalue-value-property-has-been-standardized"></a>

### AttributeValue.value property has been standardized

| Class                                                                                                                            | Old (2.X) behavior                                                                                                                                                           | New (3.0) behavior                                                                                                                                                                                                                                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttributePoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePoint)         | `.points` returns the attribute value or values as a [`list`](https://docs.python.org/3/library/stdtypes.html#list) in all cases.                                            | `AttributePoint.value` returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`float`](https://docs.python.org/3/library/functions.html#float) values if the attribute is listed<br/>as multi-valued in the schema, and a single [`float`](https://docs.python.org/3/library/functions.html#float) value if single-valued. |
| [`AttributeDiscrete`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete)   | `AttributeDiscrete.value` always returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list), even when attribute is listed as<br/>single-valued in the schema. | `AttributeDiscrete.value` returns [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`str`](https://docs.python.org/3/library/stdtypes.html#str) values if the attribute is<br/>multi-valued, and a single [`str`](https://docs.python.org/3/library/stdtypes.html#str) value if single-valued.                                  |
| `AttributeFunctional`                                                                                                            | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                     | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values.                                                                                                                                  |
| [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular)     | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.value) returns an instance of the class.                   | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values for each column.                                                                                                                |
| [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink) | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.value) returns an instance of the class.                 | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.value) returns the URL as a [`str`](https://docs.python.org/3/library/stdtypes.html#str), or [`None`](https://docs.python.org/3/library/constants.html#None) if no URL has been<br/>set.                                     |
| [`AttributeFile`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile)           | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                     | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                         |
| [`AttributePicture`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture)     | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                     | [`.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                         |

<a id="additional-changes-to-version-2-0-scripts"></a>

### Additional changes to Version 2.0 scripts

Version 2.0 scripts may need to be modified to take account of these additional breaking changes:

| Behavior area                                                                                                                | Old (2.X) behavior                                                                                                                                                                                                                       | New (3.0) behavior                                                                                                                                                                                                                                                                                                             |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search return types                                                                                                          | Text and criteria searches returned [`None`](https://docs.python.org/3/library/constants.html#None) when no results are found, whereas other methods return an empty<br/>[`list`](https://docs.python.org/3/library/stdtypes.html#list). | All search methods return an empty [`list`](https://docs.python.org/3/library/stdtypes.html#list) when no records are found.                                                                                                                                                                                                   |
| `search_for_records_by_text` return types                                                                                    | The session method returns an `iterator`. The database and table methods return a [`list`](https://docs.python.org/3/library/stdtypes.html#list).                                                                                        | All methods return a [`list`](https://docs.python.org/3/library/stdtypes.html#list).                                                                                                                                                                                                                                           |
| [`Table.path_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.path_from) record color behavior | The color of the records in the path is set to the default record color if  `color` is not provided.                                                                                                                                     | The color of records in the path inherits from the parent unless `color` is provided.                                                                                                                                                                                                                                          |
| Identifying databases when both `name` and `db_key` are provided                                                             | The search stops once a unique name match is made; `db_key` is only used if the name search does not produce a<br/>single result.                                                                                                        | The search continues through until a database matching *both* the name *and* key is found.                                                                                                                                                                                                                                     |
| Date data types                                                                                                              | Dates are always handled as strings.                                                                                                                                                                                                     | Dates can be provided as [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects or [`str`](https://docs.python.org/3/library/stdtypes.html#str) objects. Dates are returned as<br/>[`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects. |
| The `search_for_records_where` method                                                                                        | The `search_for_records_where` method on the [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) class was available.                                                                                              | The `search_for_records_where` method on the [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) class has been removed.                                                                                                                                                                                 |
