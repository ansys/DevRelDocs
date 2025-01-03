# Upgrading from earlier versions

Breaking changes from previous releases of MI Scripting Toolkit.

<a id="upgrading-from-mi-scripting-toolkit-version-4-0"></a>

## Upgrading from MI Scripting Toolkit 4.0

<a id="parameters"></a>

### Parameters

* [`ParameterDefinition.type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.type) has been deprecated in favor of [`ParameterDefinition.data_type`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.data_type) and
  [`ParameterDefinition.restricted`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.restricted).
* The attribute `parent_record` of the class [`ParameterDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) has been removed as the information is not
  currently available in Scripting Toolkit. Attempting to access this attribute will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* The `order` and `parent_attribute` properties were previously implemented on the [`ParameterDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition)
  class, and so were accessible for all parameter objects. However, these properties only have meaning when requested
  for an attribute parameter, and had undefined behavior for database parameters. These properties have been
  moved to the [`AttributeParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) class. Attempting to access these properties from a
  [`DatabaseParameter`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.DatabaseParameter) object will raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError).
* It is no longer permitted to provide database or attribute parameters to [`Exporter.run_exporter()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.run_exporter). The results
  of the [`Exporter.get_parameters_required_for_export()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export) method must be used to specify parameter values for
  export. If you do not use the results of the [`Exporter.get_parameters_required_for_export()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export) method a
  [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) will be raised.

<a id="unit-systems-and-absolute-temperatures"></a>

### Unit systems and absolute temperatures

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

* The `unit_system`, and `absolute_temperatures` parameters for the methods [`Database.get_table()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table)
  and [`Database.get_table_by_guid()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table_by_guid) have been deprecated. To specify the unit system or whether absolute
  temperatures should be used, use the properties [`Database.unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and
  [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).
* The method [`Database.set_unit_system()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.set_unit_system) has been deprecated. To set the unit system on the database use
  [`Database.unit_system`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and to set the value of absolute_temperatures use
  [`Database.absolute_temperatures`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures).

<a id="other-changes"></a>

### Other changes

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

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-3-x"></a>

## Upgrading from MI Scripting Toolkit for Python 3.x

<a id="subsets"></a>

### Subsets

* If your code does not use the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property and the default subset in your
  tables contain all records, you should see no behavior changes. *This is the most common
  scenario.*
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to the default subset, then you should
  disable this assignment from your code, since it now occurs automatically.
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a non-default subset, then you should
  clear the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property with `table_object.subsets.clear()` before setting the
  non-default subset.
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a set containing more than one subset and
  you perform any subsequent record fetching or search operations, these operations will raise a
  `ValueError`. They would previously not consider all applied subsets, and so would return
  incorrect results.

<a id="searching-and-browsing-for-records"></a>

### Searching and browsing for records

* All searches except [`Database.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) now apply a subset filter when
  searching. If a table included in a search has multiple applied subsets, a `ValueError` is
  raised.
* The [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) `list_of_criteria` parameter must now only contain
  criteria based on pseudo-attributes and attribute definitions from the table being searched.
  Otherwise a `ValueError` is raised.
* The [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) `list_of_criteria` parameter must now only
  contain criteria based on pseudo-attributes and attribute definitions from at most one table
  within the database being searched. Otherwise a `ValueError` is raised.
* Getting records based on the Granta MI tree is generally now subject to subset filtering. If a
  table included in a record fetch operation has multiple applied subsets, a `ValueError` is
  raised.

<a id="id1"></a>

### Other changes

* [`Session.records_from_string()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string) now defaults to `use_strict_version=True`.
* `get_records_by_ids` and `get_record_by_id` methods on [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session), [`Database`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database),
  and [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) classes no longer accept the `identity` argument. Use `history_identity`
  instead.
* [`Table.paths_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from), [`Table.path_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from), and [`Table.get_records_from_path()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path) no
  longer support `str` and [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) inputs. Use `None` to use the table root as starting
  node. All three methods now raise a `ValueError` if the record specified as `starting_node`
  is not in the current table, and raise a `TypeError` if the argument value is not a
  [`Record`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or `None`.
* [`Record.color`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color) no longer supports `str` inputs. Only [`RecordColor`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) objects
  are supported.
* [`AttributeFunctional.add_point()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_point) and [`AttributeFunctional.add_range()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_range) methods now
  raise `KeyError` exceptions if a dictionary with incorrect keys is provided.
* [`File.load()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load), [`File.save()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save), [`Picture.load()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load), and [`Picture.save()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) no longer
  accept `file_name` as an argument. Provide the full path including the file name to the `path`
  argument. For file attributes, the name of the file is part of the attribute value and can be
  accessed via [`AttributeFile.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.file_name) or [`File.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name) to build a full path.
* `File.name` has been removed. Use [`File.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name).
* `Picture.name` has been removed.
* [`File`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) and [`Picture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) no longer accept `name` or `load` as arguments. Provide
  the full path to the file/picture (including the file name) to the keyword only argument `path`.
* [`File.description`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.description) now only supports `str` inputs.
* [`AttributeHyperlink.object`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object) no longer supports `str` inputs. Only [`Hyperlink`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink)
  objects are supported. This was deprecated in previous versions of the MI Scripting Toolkit.
* Any code which performs bulk export operations on file and picture attributes should be modified
  either to access the binary data with an HTTP library such as
  [requests](https://pypi.org/project/requests/) or [httpx](https://pypi.org/project/httpx/).
  Alternatively, the binary data can be exported directly by specifying
  `include_binary_data = True` in the call to [`Table.bulk_fetch()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch). However, this is likely
  to be less performant for large amounts of data.
* The `Record.id` property has been renamed to [`Record.history_identity`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_identity).

<a id="asyncjobs"></a>

### AsyncJobs

The AsyncJobQueue functionality has been moved to a new PyAnsys package called PyGranta JobQueue.
If you are using Granta MI 2024 R2 or later, you can use this package to import and export Excel
files and import text data into Granta MI. If you are using Granta MI 2024 R1 or earlier and require
Job Queue functionality, you should continue to use MI Scripting Toolkit v3.3.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-2-x"></a>

## Upgrading from MI Scripting Toolkit for Python Version 2.X

<a id="backwards-incompatible-api-changes"></a>

### Backwards-incompatible API changes

Scripts written for 2.X versions of MI Scripting Toolkit will need to be modified due to the following breaking changes:

<a id="new-store-password-option-on-the-session-class"></a>

### New `store_password` option on the [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class

**Old behavior:** The `password` for a [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) is used to connect to Granta MI once, and cannot be stored.

**New behavior:** The `password` assigned to a [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) can be stored and used multiple times. You must
specify whether you want to store the password or not using the `store_password` property. If `store_password` is
missing, bulk operations will fail.

<a id="attributevalue-value-property-has-been-standardized"></a>

### AttributeValue.value property has been standardized

| Class                                                                                                                  | Old (2.X) behavior                                                                                                                                                                                                                                               | New (3.0) behavior                                                                                                                                                                                                                                                                                                                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttributePoint`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint)           | `.points` returns the attribute value or values as a [`list`](https://docs.python.org/3/library/stdtypes.html#list) in all cases.                                                                                                                                | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`float`](https://docs.python.org/3/library/functions.html#float) values if the attribute is listed<br/>as multi-valued in the schema, and a single [`float`](https://docs.python.org/3/library/functions.html#float) value if single-valued. |
| [`AttributeDiscrete`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete)     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) always returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list), even when attribute is listed as<br/>single-valued in the schema. | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) returns [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`str`](https://docs.python.org/3/library/stdtypes.html#str) values if the attribute is<br/>multi-valued, and a single [`str`](https://docs.python.org/3/library/stdtypes.html#str) value if single-valued.                                  |
| [`AttributeFunctional`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values.                                                                                                                                                                                                                                  |
| [`AttributeTabular`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular)       | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) returns an instance of the class.                                                                                                                   | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values for each column.                                                                                                                                                                                                                |
| [`AttributeHyperlink`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink)   | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value) returns an instance of the class.                                                                                                                 | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value) returns the URL as a [`str`](https://docs.python.org/3/library/stdtypes.html#str), or [`None`](https://docs.python.org/3/library/constants.html#None) if no URL has been<br/>set.                                                                                                                                     |
| [`AttributeFile`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile)             | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                                                                                                                         |
| [`AttributePicture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture)       | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                                                                                                                         |

<a id="pending-deprecations"></a>

### Pending deprecations

We recommend changes to all scripts due to a pending deprecation:

<a id="file-and-picture-path-arguments-now-include-file-name"></a>

#### File and Picture `path` arguments now include file name

**Old behavior (may not be supported in future releases):** The `path` argument for [`AttributeFile`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile) and
[`AttributePicture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture) objects and methods contains the folder path to the file, and the `file_name` argument
contains the file name and extension.

**New behavior:** The `path` argument contains the file path with file name and extension. The `file_name` argument
is no longer used.

<a id="additional-changes-to-version-2-0-scripts"></a>

### Additional changes to Version 2.0 scripts

Version 2.0 scripts may need to be modified to take account of these additional breaking changes:

<a id="all-search-methods-now-return-an-empty-list-when-no-records-are-found"></a>

#### All search methods now return an empty list when no records are found

**Old behavior:** Text and criteria searches returned [`None`](https://docs.python.org/3/library/constants.html#None) when no results were found, while other methods
returned an empty [`list`](https://docs.python.org/3/library/stdtypes.html#list).

**New behavior:** All search methods now return an empty [`list`](https://docs.python.org/3/library/stdtypes.html#list) when no records are found.

<a id="search-for-records-by-text-now-returns-same-type-at-session-level-and-database-level"></a>

#### search_for_records_by_text now returns same type at session level and database level

**Old behavior:** [`Session.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text) returned an `iterator`, due to the potentially large
number of results. At the database and table level, it returned a [`list`](https://docs.python.org/3/library/stdtypes.html#list).

**New behavior:** [`Session.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text) now returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) in all cases.

<a id="table-path-from-no-longer-sets-the-record-color-unless-specified"></a>

#### Table.path_from no longer sets the record color unless specified

**Old behavior:** [`Table.path_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from) automatically set the color of the records in the path to the default record
color when `color` was not specified.

**New behavior:** The color of records in the path is not changed unless `color` is explicitly set.

<a id="identifying-databases-by-name-and-dbkey"></a>

#### Identifying databases by name and dbkey

The way that databases are identified when both database `name` and `db_key` are provided has changed.

**Old behavior:** if `name` and `db_key` were provided, the search would stop as soon as a unique name match was
made; `db_key` was only used if the name search did not produce a single result.

**New behavior:** if both `name` and `db_key` are specified, MI Scripting Toolkit will search through the available
databases until it finds a database where *both* the name *and* key match.

<a id="handling-of-dates"></a>

#### Handling of dates

The way that date-type data is handled has changed.

**Old behavior:** dates were handled as strings.

**New behavior:** dates can be read in as Python’s built-in [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects (as well as [`str`](https://docs.python.org/3/library/stdtypes.html#str)
objects), and additionally they return [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects.

<a id="session-search-for-records-where-method-removed"></a>

#### Session.search_for_records_where method removed

The `search_for_records_where` method on the [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class has been removed.
