<a id="release-notes"></a>

<a id="what-s-new-in-version-version"></a>

# What’s new in Version 4.1

Key features introduced or improved in MI Scripting Toolkit 4.1.

<a id="highlights"></a>

## Highlights

<a id="improvements-to-parameter-classes"></a>

### Improvements to parameter classes

[`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter), [`AttributeParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter), and [`ExporterParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter) classes have been added in
this release. These classes are sub-classes of the base [`ParameterDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) class, and represent parameters
at different levels of the Granta MI data hierarchy:

| Class                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Returned by                                                                                                                                                                                                                                                                                                                    |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter)   | Represents a parameter defined at the database level.<br/><br/>These parameters are defined generically, and are not assigned to an attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [`Database.parameters`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.parameters)                                                                                                                                                                                                                    |
| [`AttributeParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) | Represents a database parameter assigned to a particular attribute.<br/><br/>This class inherits all properties and methods from the [`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter) class, and adds<br/>[`AttributeParameter.order`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter.order) and [`AttributeParameter.parent_attribute`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter.parent_attribute).                                                   | [`AttributeDefinitionFloatFunctional.parameters`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue.parameters)<br/><br/>[`AttributeDefinitionPoint.parameters`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue.parameters) |
| [`ExporterParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter)   | Represents a parameter specified as an input for an FEA Export operation.<br/><br/>This class inherits all properties and methods from the [`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter) class, and adds<br/>[`ExporterParameter.value_for_exporters`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter.value_for_exporters) and [`ExporterParameter.clear_value_for_exporters()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter.clear_value_for_exporters). | [`Exporter.get_parameters_required_for_export()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export)                                                                                                                                                                     |

These improvements make it easier to understand which type of parameter is returned by properties and methods, and makes
it clearer which functionality is provided by those returned objects.

<a id="enhancements-and-bug-fixes"></a>

#### Enhancements and bug fixes

The following enhancements and bug fixes have been made to parameter classes:

* [`ParameterDefinition.axis_scale_type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.axis_scale_type) no longer incorrectly returns `Log` for discrete parameters. It now
  returns [`None`](https://docs.python.org/3/library/constants.html#None).
* [`AttributeParameter.parent_attribute`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter.parent_attribute) no longer returns an empty string. It now returns an
  [`AttributeDefinitionMultiValue`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue) object.
* Setting a parameter unit using the [`ParameterDefinition.unit`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property now raises a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) if the
  specified unit either could not be found in the database or is not dimensionally equivalent with the database unit.

<a id="backwards-incompatible-api-changes"></a>

#### Backwards incompatible API changes

The following backwards-incompatible changes have been made to parameter classes:

* [`ParameterDefinition.type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.type) has been deprecated. Use the [`ParameterDefinition.data_type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.data_type) and
  [`ParameterDefinition.restricted`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.restricted) parameters instead.
* The attribute `parent_record` of the class [`ParameterDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) has been removed as the information is not
  currently available in Scripting Toolkit. Attempting to access this attribute will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* The `order` and `parent_attribute` properties were previously implemented on the [`ParameterDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)
  class, and so were accessible for all parameter objects. However, these properties only have meaning when requested
  for an attribute parameter and had undefined behavior for database parameters. These properties have been
  moved to the [`AttributeParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) class. Attempting to access these properties from a
  [`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter) object will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* It is no longer permitted to provide database or attribute parameters to [`Exporter.run_exporter()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.run_exporter). The results
  of the [`Exporter.get_parameters_required_for_export()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export) method must be used to specify parameter values for
  export. If you do not use the results of the [`Exporter.get_parameters_required_for_export()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export) method a
  [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) will be raised.

<a id="unit-systems-and-absolute-temperatures"></a>

### Unit systems and absolute temperatures

<a id="summary"></a>

#### Summary

Passing certain combinations of `absolute_temperature` and `unit_system` values to the
[`Database.set_unit_system()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system), [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table), and [`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid) methods
resulted in database and table objects in unexpected states.

Fix applied:

> * The default absolute temperature scale on databases is now `False`.
> * The `absolute_temperature` and `unit_system` values are now always respected when passed to these methods, and
>   will override any previously set values on the [`Database`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) object.

Recommended usage:

> * Remove uses of [`Database.set_unit_system()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system), and of the `absolute_temperature` and `unit_system` arguments
>   of [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) and [`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid).
> * Use [`Database.unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures) to explicitly set the unit system and
>   the absolute temperature scale on the [`Database`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database).

<a id="detailed-description-of-changes"></a>

#### Detailed description of changes

This section describes the previous incorrect behavior and usages that are subject to behavior changes in version 4.1.

> * If the `unit_system` and `absolute_temperature` arguments were never used, the default absolute temperature was
>   `True`. It now defaults to `False`.
> * If only the `absolute_temperature` argument was provided, it was ignored and the absolute temperature scale was
>   not updated on the database.
> * If the `unit_system` argument was provided, it only had an effect if the provided value was not the
>   [`DATABASE_UNIT_SYSTEM`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM) **and** if the provided value was different from the previously active unit system:
>   > | Unit system change   | `absolute_temperature` provided   | `absolute_temperature` not provided   |
>   > |----------------------|-----------------------------------|---------------------------------------|
>   > | True                 | `absolute_temperature` respected  | `absolute_temperature` set to `False` |
>   > | False                | `absolute_temperature` ignored    | `absolute_temperature` unchanged      |

In version 4.1, the behavior of these methods and arguments has been fixed. In order to clarify the expected behavior
and to avoid unwanted interaction between independent arguments in the future and unexpected mutation of parent objects,
some functionality has been deprecated:

> * The `unit_system`, and `absolute_temperatures` parameters for the methods [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table)
>   and [`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid) have been deprecated.
> * The method [`Database.set_unit_system()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system) has been deprecated.

To work with specific unit systems or absolute temperature scale, the recommended approach is to use setters on the
database properties [`Database.unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures). For example:

```python
database.unit_system = "UK Imperial"
database.absolute_temperatures = True
table = database.get_table(table_name)
```

In all cases, it is recommended to test scripts and applications being updated to the 4.1 version of the MI Scripting
Toolkit, to ensure the expected units are applied.

<a id="enhancements"></a>

#### Enhancements

The behavior of unit systems and absolute temperature units has been standardized in this release.

* The [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures) property is now respected by all tables, parameters, and attributes. This
  allows the setting to be consistently applied throughout a database.
* Setting the unit on a [`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter) or an [`AttributeParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) is respected by the `.values`
  and `.default_value` properties. This fixes an issue where the unit would not be respected when displaying values.
* In some cases the default [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures) would be set to [`True`](https://docs.python.org/3/library/constants.html#True). It is now set to
  [`False`](https://docs.python.org/3/library/constants.html#False) in all situations.
* The column headings in [`FunctionalSeries.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) and
  [`FunctionalGrid.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value), and the
  [`FunctionalSeries.parameters`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.parameters) and
  [`FunctionalGrid.parameters`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.parameters) properties correctly respect the
  [`unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and [`absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures) values specified on the [`Database`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database)
  object. This fixes an issue where in some cases the unit would be reported incorrectly.
* Using [`Table.set_display_unit()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.set_display_unit) to set an attribute to the same current display unit no longer raises a
  [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError).

<a id="id1"></a>

#### Backwards incompatible API changes

The features listed in this section provide potentially confusing behavior. Code that uses these features should be
modified according to the recommendations below. The features will be removed in a future release.

* The `unit_system`, and `absolute_temperatures` parameters for the methods [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table)
  and [`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid) have been deprecated. To specify the unit system or whether absolute
  temperatures should be used, use the properties [`Database.unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and
  [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).
* The method [`Database.set_unit_system()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system) has been deprecated. To set the unit system on the database use
  [`Database.unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and to set the value of absolute_temperatures use
  [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

<a id="streamlined-api-enhancements-and-bug-fixes"></a>

## Streamlined API enhancements and bug fixes

<a id="id2"></a>

### Enhancements

* Added [`Record.copy_to()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.copy_to) to copy records.
* Added [`Table.default_layout`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.default_layout), providing the name of the default layout for a table.
* Improved documentation of [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) and [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where).
* Attribute min/max information is no longer fetched by default when retrieving attributes for a table.
* [`AttributeDiscrete`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete) now validates values before trying to write to the database.
  - If a value is not permitted according to the discrete values defined in the database schema, a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError)
    is raised.
  - If the value is not a string or a list of strings then a [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) is raised.

  Additionally, passing a list of values to a single-valued discrete is now deprecated and will be removed in a future
  release.
* Fetching attribute definitions from a table now returns distinct classes for each type of attribute,
  see [Attribute Definitions](stream_api.md#attribute-defs) for more information.
* [`LinkGroupDetails`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails) now includes two additional properties, [`database_from`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.database_from) and
  [`database_to`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails.database_to). These provide access to the database key of the source database and target
  database respectively.
* The [`Exporter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter) documentation has been extended to describe all
  public properties of the class.

<a id="bug-fixes"></a>

### Bug fixes

* [`Table.get_records_from_path()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path) now raises a [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError) whenever an invalid `tree_path` parameter is
  provided.
* Extrema information [`AttributeDefinitionPoint.min`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.min), [`AttributeDefinitionPoint.max`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.max),
  [`AttributeDefinitionRange.min`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange.min), [`AttributeDefinitionRange.max`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange.max),
  [`AttributeDefinitionInteger.min`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger.min), [`AttributeDefinitionInteger.max`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger.max),
  [`AttributeDefinitionDatetime.min`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDatetime.min), and [`AttributeDefinitionDatetime.max`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDatetime.max) now return [`None`](https://docs.python.org/3/library/constants.html#None) in
  the following cases:
  > * When the attribute is either empty or not applicable for all records in the table.
  > * When the [`min_max_type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.min_max_type) is set to `"None"`.
* [`Table.default_subset`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.default_subset) no longer returns an empty string if the table does not define a default subset. It now
  returns [`None`](https://docs.python.org/3/library/constants.html#None).
* [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) no longer throws an unexpected error when handling a table with no default subset.
* The property [`AttributeDefinitionTabular.column_histories`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_histories) no longer raises an exception for columns that are
  unavailable (due to access control or a missing database used in cross database tabular links).

<a id="examples"></a>

### Examples

* Added new [Data validation](samples/data-analytics/13_Data_validation.md) notebook that demonstrates how to use
  Scripting Toolkit to validate data in a Granta MI database.

<a id="foundation-api-enhancements-and-bug-fixes"></a>

## Foundation API enhancements and bug fixes

* [`FloatFunctionalGriddedDataType.functionalDataParameterSettings`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.functionalDataParameterSettings)
  and [`FloatFunctionalSeriesDataType.functionalDataParameterSettings`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.functionalDataParameterSettings)
  now return correctly parsed values. Additionally, importing data no longer sets datum default values unless explicitly
  requested.

<a id="id3"></a>

## Backwards incompatible API changes

<a id="streamlined-api"></a>

### Streamlined API

* The [`log_to_file_in_local_app_data()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_functions.log_to_file_in_local_app_data) function has been deprecated. To log messages to a file, use
  the Python logging module. The Foundation Layer logger can be obtained with the function
  [`get_foundation_logger()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_functions.get_foundation_logger).
* The methods [`Database.get_all_link_details_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_all_link_details_where) and [`Database.get_link_detail()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_link_detail), and the property
  [`Database.link_details`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.link_details) have been deprecated. To obtain record link group information use the property
  [`Database.record_link_groups`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.record_link_groups).
* The `subsets` parameter for the methods [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) and [`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid) has been
  deprecated. To specify one or more subsets for the table, use the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property of the returned
  table object.
* Passing a list of values to a [`AttributeDiscrete`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete) where [`AttributeDiscrete.is_multivalued`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.is_multivalued) is False
  is now deprecated, provide a single string instead.

<a id="known-issues"></a>

## Known issues

* If an attribute is exported with the [`Table.bulk_fetch`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch)
  method with `include_binary_data=False`, subsequent values returned by the
  `AttributePicture.mime_file_type` property will always return `image/png`, regardless of the
  actual image format. The header returned when accessing the URL is unaffected and should be used
  instead.
* In version-controlled tables, [`DataRevisionHistory`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory)
  objects have an ambiguous meaning. The `history.last_modified_date` for the following attribute
  types is updated when the release state of the parent record is modified:
  - Date
  - Hyperlink
  - Integer
  - Logical
  - Range
  - Short text

  The `history.last_modified_date` for the following attribute types is *not* updated when the
  release state of the parent record is modified:
  - Discrete
  - File
  - Functional
  - Long text
  - Picture
  - Point
  - Tabular
