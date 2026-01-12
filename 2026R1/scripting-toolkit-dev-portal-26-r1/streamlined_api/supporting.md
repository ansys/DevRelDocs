# Schema and supporting items

<a id="schema-and-supporting-items"></a>

<!-- from ansys.grantami.backend.mock.docs.attribute_values import (
    functional_attribute,
    ranged_functional_attribute,
    gridded_functional_attribute,
    gridded_ranged_functional_attribute,
    multivalued_point_attribute,
) -->

<a id="api-guide-misc-schema"></a>

<a id="schema"></a>

## Schema

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails"></a>

### *class* LinkGroupDetails

Provides access to the properties of a record link group.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Database.record_link_groups`](database.md#ansys.grantami.core.mi_tree_classes.Database.record_link_groups) to access instances of this class.

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.database_from"></a>

#### *property* database_from *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Database key of the database the link group originates from.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.database_to"></a>

#### *property* database_to *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Database key of the database target by the link group.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the record link group.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.reverse_name"></a>

#### *property* reverse_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the record link group in the return direction.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.table_from"></a>

#### *property* table_from *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the table the link group comes from.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.table_to"></a>

#### *property* table_to *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the table targeted by the link group.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.LinkGroupDetails.type"></a>

#### *property* type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Whether the record link group is ‘static’, ‘crossDatabase’ or ‘dynamic’.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.TableLayout"></a>

### *class* TableLayout

Represents a layout for a table in the database.

Provides individually accessible categories, or a full representation of the layout as a JSON-style object.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use [`Table.layouts`](table.md#ansys.grantami.core.mi_tree_classes.Table.layouts)
to access instances of this class.

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.meta_attributes_on"></a>

#### meta_attributes_on(attribute_name)

Returns the list of meta-attributes corresponding to a given attribute in this layout.

* **Parameters:**
  **attribute_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the attribute.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.attributes_by_category"></a>

#### *property* attributes_by_category *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]*

Dictionary of attribute lists, indexed by the layout category they are in.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.categories"></a>

#### *property* categories *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

List of all the categories (headings) in the layout.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.layout"></a>

#### *property* layout *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) | [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) | [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]]]*

JSON-style representation of the layout.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) or [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] or [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) or [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]]]

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.link_groups_by_category"></a>

#### *property* link_groups_by_category *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]*

Dictionary of link group lists, indexed by the layout category they are in.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.meta_attributes_by_attribute"></a>

#### *property* meta_attributes_by_attribute *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]*

Dictionary of meta-attribute lists, indexed by parent attributes.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]

<a id="ansys.grantami.core.mi_meta_classes.TableLayout.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Layout name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_exporters.Exporter"></a>

### *class* Exporter

Represents a Granta MI FEA exporter.

FEA exporters are used to export record data from Granta MI into formats supported by CAD and CAE packages.

This operation performs no subset filtering, so all tabular rows will be included in the Initial XML
regardless of the subset membership of the linked records.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`get_available_exporters()`](table.md#ansys.grantami.core.mi_tree_classes.Table.get_available_exporters) to retrieve exporters for a given table.

<a id="ansys.grantami.core.mi_exporters.Exporter.export_list_is_valid"></a>

#### export_list_is_valid(records)

Verifies that a list of records is valid for export.

* **Parameters:**
  **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to validate.
* **Returns:**
  Whether the specified list of records can be exported with this exporter.
* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_exporters.Exporter.get_parameters_required_for_export"></a>

#### get_parameters_required_for_export(records)

Returns a dictionary of all the parameter definitions the Exporter requires to export the data.

Returns parameters required from the specified list of records, indexed by parameter name.

* **Parameters:**
  **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to export.
* **Return type:**
  dict[str, [`ExporterParameter`](#ansys.grantami.core.mi_attribute_classes.ExporterParameter)]
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

<a id="ansys.grantami.core.mi_exporters.Exporter.run_exporter"></a>

#### run_exporter(records, stop_before=None, parameter_defs=None, sig_figs=None)

Performs an FEA export on the specified list of records, returning the data representing the records as a
string.

* **Parameters:**
  * **records** (list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]) – List of records to export.
  * **stop_before** ([*int*](https://docs.python.org/3/library/functions.html#int) *or* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Either refers to the index of the transform step (int) or its name (str).
  * **parameter_defs** (dict[str, [`ExporterParameter`](#ansys.grantami.core.mi_attribute_classes.ExporterParameter)], optional) – Dictionary of exporter parameters.
  * **sig_figs** ([*int*](https://docs.python.org/3/library/functions.html#int) *,* *optional*) – Number of significant figures for numerical data.
* **Returns:**
  Contains data output by the exporter.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**InvalidRecordStateError**](exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) – If one or more records have not been pushed to the server.

<a id="ansys.grantami.core.mi_exporters.Exporter.save"></a>

#### save(file_path, file_name=None, file_extension=None)

Saves the output of the last FEA export to the path provided.

Uses the default naming convention and file extension for the exporter; specify a `file_name` or
`file_extension` to override the defaults.

* **Parameters:**
  * **file_path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – File path of the form *C:\\Users\\Username\\*.
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Output file name. Does not require a file extension.
  * **file_extension** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Output file extension.

<a id="ansys.grantami.core.mi_exporters.Exporter.absolute_temperatures_optional"></a>

#### *property* absolute_temperatures_optional *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this exporter allows the user to specify absolute or relative temperatures.

If [`True`](https://docs.python.org/3/library/constants.html#True) the user can choose to use the absolute or relative form of the temperature
unit defined in the unit system. Otherwise, the exporter will use the form defined in the
`.exp` file.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_exporters.Exporter.default_bom"></a>

#### *property* default_bom *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the default byte-order mark as defined by the exporter configuration file.

If no BOM is required by default, this property is [`None`](https://docs.python.org/3/library/constants.html#None).

* **Return type:**
  bytes or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_exporters.Exporter.default_encoding"></a>

#### *property* default_encoding *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Returns the default file encoding scheme as defined by the exporter configuration file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

This is returned as a Python-compatible string (e.g. “cp1252”) rather than the .NET codepage “1252”.

<a id="ansys.grantami.core.mi_exporters.Exporter.default_file_extension"></a>

#### *property* default_file_extension *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Returns the default file extension as defined by the exporter configuration file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_exporters.Exporter.default_file_name"></a>

#### *property* default_file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Returns the default file name for the last performed export.

As defined by the exporter configuration file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_exporters.Exporter.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The Exporter description.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_exporters.Exporter.exporter_key"></a>

#### *property* exporter_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The unique key that is used to identify the exporter.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_exporters.Exporter.model"></a>

#### *property* model *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The Finite-Element Material Model name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

This name is exported to the initial XML file, and appears in the MI Viewer and MI Explore export interfaces.

<a id="ansys.grantami.core.mi_exporters.Exporter.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The name of the exporter, as defined in the `.exp` file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_exporters.Exporter.package"></a>

#### *property* package *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The Package defines the name of the target CAE analysis package.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

This name is exported to the initial XML file, and appears in the MI Viewer and MI Explore export interfaces.

<a id="ansys.grantami.core.mi_exporters.Exporter.transforms"></a>

#### *property* transforms *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExporterTransform](#ansys.grantami.core.mi_exporters.ExporterTransform)]*

Iterable containing the transform steps defined for this exporter.

Each entry in the iterable contains the index of the transform stage, and the ID.
Either can be provided to the [`Exporter.run_exporter()`](#ansys.grantami.core.mi_exporters.Exporter.run_exporter) `stop_before` argument to selectively run
transformation steps.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExporterTransform](#ansys.grantami.core.mi_exporters.ExporterTransform)]

<a id="ansys.grantami.core.mi_exporters.Exporter.unit_system"></a>

#### *property* unit_system *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The currently selected unit-system.

If None then the default unit system for the exporter will be used, otherwise the provided
unit-system will be used when running the exporter.

* **Return type:**
  str or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_exporters.Exporter.unit_systems"></a>

#### *property* unit_systems *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

All the unit-systems this exporter supports.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_exporters.Exporter.use_absolute_temperatures"></a>

#### *property* use_absolute_temperatures *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this exporter should use absolute temperatures.

If [`True`](https://docs.python.org/3/library/constants.html#True) the exporter will use the absolute form of the temperature unit defined in the
selected unit-system. Otherwise, it will use the relative form.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_exporters.ExporterTransform"></a>

### *class* ExporterTransform

Dictionary representing a transformation step defined for an [`Exporter`](#ansys.grantami.core.mi_exporters.Exporter).

Provide the `id` or `index` to the [`Exporter.run_exporter()`](#ansys.grantami.core.mi_exporters.Exporter.run_exporter) `stop_before` argument to selectively run
transformation steps.

<a id="ansys.grantami.core.mi_exporters.ExporterTransform.id"></a>

#### id *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

ID of the transform step.

<a id="ansys.grantami.core.mi_exporters.ExporterTransform.index"></a>

#### index *: [int](https://docs.python.org/3/library/functions.html#int)*

Index of the transform step.

<a id="api-guide-misc-parameters"></a>

<a id="parameters"></a>

## Parameters

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition"></a>

### *class* ParameterDefinition

Base class for parameters.

Provides access to parameter properties such as revision history, default and possible values, and units.

### Notes

Do not create instances of this class; it represents an abstract database structure.

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.reset_unit"></a>

#### reset_unit()

Resets the unit back to its original value when the parameter was initially exported.

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.axis_scale_type"></a>

#### *property* axis_scale_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['Linear', 'Log'] | [None](https://docs.python.org/3/library/constants.html#None)*

Axis scale type for the parameter.

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) for discrete parameters.
* **Return type:**
  [`ScaleType`](constants.md#ansys.grantami.core.mi_constants.ScaleType) or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.data_type"></a>

#### *property* data_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['Numeric', 'Discrete']*

Parameter data type.

* **Returns:**
  One of ‘Numeric’ or ‘Discrete’.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError) – If the parameter type is not supported.

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Database unit symbol for the parameter.

* **Return type:**
  str or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.default_value"></a>

#### *property* default_value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)*

Default value of the parameter.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.history"></a>

#### *property* history *: [ObjectHistory](#ansys.grantami.core.mi_meta_classes.ObjectHistory)*

Revision history of the parameter.

* **Return type:**
  [`ObjectHistory`](#ansys.grantami.core.mi_meta_classes.ObjectHistory)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.history_of_default"></a>

#### *property* history_of_default *: [ObjectHistory](#ansys.grantami.core.mi_meta_classes.ObjectHistory)*

Revision history of the parameter’s default value.

* **Return type:**
  [`ObjectHistory`](#ansys.grantami.core.mi_meta_classes.ObjectHistory)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.id"></a>

#### *property* id *: [int](https://docs.python.org/3/library/functions.html#int)*

Parameter identifier.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.interpolation_type"></a>

#### *property* interpolation_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['None', 'Linear', 'Cubic Spline']*

The interpolation type for the parameter.

* **Return type:**
  [`InterpolationType`](constants.md#ansys.grantami.core.mi_constants.InterpolationType)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Parameter name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.restricted"></a>

#### *property* restricted *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the parameter is restricted to specific values.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol for the parameter.

* **Return type:**
  str or [`None`](https://docs.python.org/3/library/constants.html#None)

### Notes

This property is used to specify a unit in the following situations:

* Specify a unit on an object of any [`ParameterDefinition`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition) subclass to control the unit of the values
  returned by the [`default_value`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.default_value) and [`values`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.values) properties on that object.
* Specify a unit on an [`ExporterParameter`](#ansys.grantami.core.mi_attribute_classes.ExporterParameter) object to provide a value with a different unit to the
  [`ExporterParameter.value_for_exporters`](#ansys.grantami.core.mi_attribute_classes.ExporterParameter.value_for_exporters) property.

This property does not impact data export. Attribute parameter values are always exported according to the
[`Database.unit_system`](database.md#ansys.grantami.core.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](database.md#ansys.grantami.core.mi_tree_classes.Database.absolute_temperatures) settings.

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.values"></a>

#### *property* values *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)]*

List of all possible values the parameter can take.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float)]

<a id="ansys.grantami.core.mi_attribute_classes.ParameterDefinition.values_histories"></a>

#### *property* values_histories *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[ObjectHistory](#ansys.grantami.core.mi_meta_classes.ObjectHistory)]*

Revision histories of each possible value of a parameter.

* **Return type:**
  list[[`ObjectHistory`](#ansys.grantami.core.mi_meta_classes.ObjectHistory)]

<a id="ansys.grantami.core.mi_attribute_classes.DatabaseParameter"></a>

### *class* DatabaseParameter

Bases: [`ParameterDefinition`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition)

Definition of a parameter at the database level.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Database.parameters`](database.md#ansys.grantami.core.mi_tree_classes.Database.parameters) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeParameter"></a>

### *class* AttributeParameter

Bases: [`DatabaseParameter`](#ansys.grantami.core.mi_attribute_classes.DatabaseParameter)

Definition of a parameter as configured for an attribute.

Inherited properties [`ParameterDefinition.default_value`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.default_value), [`ParameterDefinition.axis_scale_type`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.axis_scale_type), and
[`ParameterDefinition.interpolation_type`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.interpolation_type) can differ from the database parameter definition.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`AttributeDefinitionMultiValue.parameters`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue.parameters) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeParameter.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Order in which the parameter is stored in the attribute.

This is relevant for some interpolation methods, and determines the display order in MI Viewer.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeParameter.parent_attribute"></a>

#### *property* parent_attribute *: [AttributeDefinitionMultiValue](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue)*

Attribute to which this parameter applies.

* **Return type:**
  [`AttributeDefinitionMultiValue`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue)

<a id="ansys.grantami.core.mi_attribute_value_classes.PointValueParameter"></a>

### *class* PointValueParameter

Parameter information that is associated with a point attribute value.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`AttributePointMulti.parameters`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.parameters) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.PointValueParameter.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Parameter name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.PointValueParameter.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol for the parameter.

Defines the unit of the values for this parameter when importing into a point attribute.

* **Returns:**
  Unit symbol as str if units are used, else [`None`](https://docs.python.org/3/library/constants.html#None).
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.ExporterParameter"></a>

### *class* ExporterParameter

Bases: [`DatabaseParameter`](#ansys.grantami.core.mi_attribute_classes.DatabaseParameter)

Definition of a parameter that is used by an exporter.

The value and unit can be set to control the exporter output. If the value is not set then the database parameter
default value will be used.

### Notes

Do not create instances of this class manually. Use [`Exporter.get_parameters_required_for_export()`](#ansys.grantami.core.mi_exporters.Exporter.get_parameters_required_for_export) to
generate instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.ExporterParameter.clear_value_for_exporters"></a>

#### clear_value_for_exporters()

Clear the value on the [`ExporterParameter`](#ansys.grantami.core.mi_attribute_classes.ExporterParameter) instance and return it to the default value.

<a id="ansys.grantami.core.mi_attribute_classes.ExporterParameter.value_for_exporters"></a>

#### *property* value_for_exporters *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)*

Value on the [`ExporterParameter`](#ansys.grantami.core.mi_attribute_classes.ExporterParameter) instance for use in any exporters the parameter is passed to.

Can be set by the user. If this value is unset, the exporter will use the default value defined in the database
schema.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter"></a>

### *class* FunctionalValueParameter

Parameter that is associated with a functional attribute value.

Used to override parameter settings for an individual attribute value.

#### WARNING
When importing data, if [`FunctionalValueParameter`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter) object attributes are modified and the parameter is not
populated in the parent attribute value, the modification will be ignored during import. A `UserWarning` will be
emitted.

When exporting data, parameter settings may exist even if the parameter has no value on the parent attribute. These
parameter settings will be exported correctly.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use the `parameters`
property of a functional attribute value, for example [`AttributeFunctionalSeriesPoint.parameters`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.parameters), to access
instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.axis_scale_type"></a>

#### *property* axis_scale_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['Linear', 'Log'] | [None](https://docs.python.org/3/library/constants.html#None)*

The scale type for the parameter.

* **Returns:**
  If set to [`None`](https://docs.python.org/3/library/constants.html#None), the value is inherited from the parameter definition associated with the parent
  attribute definition.
* **Return type:**
  [`ScaleType`](constants.md#ansys.grantami.core.mi_constants.ScaleType) or None
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-string value.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If providing an invalid scale type.

#### SEE ALSO
[`effective_axis_scale_type`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.effective_axis_scale_type)
: The effective value of this property, taking inheritance into account if the property is set to [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.default_value"></a>

#### *property* default_value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Default value for the parameter.

* **Returns:**
  Parameter default value. If set to [`None`](https://docs.python.org/3/library/constants.html#None), the value is inherited from the parameter definition associated
  with the parent attribute definition.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or None
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-float value for a numeric parameter or a non-str value for a discrete parameter.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the string value is not in the allowed values list.

#### SEE ALSO
[`effective_default_value`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.effective_default_value)
: The effective value of this property, taking inheritance into account if the property is set to [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.effective_axis_scale_type"></a>

#### *property* effective_axis_scale_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['Linear', 'Log'] | [None](https://docs.python.org/3/library/constants.html#None)*

Effective scale type, inherited from the attribute parameter if not defined on the datum.

None for all discrete parameters.

* **Return type:**
  [`ScaleType`](constants.md#ansys.grantami.core.mi_constants.ScaleType) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.effective_default_value"></a>

#### *property* effective_default_value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)*

Effective default value, inherited from the attribute parameter if not defined on the datum.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.effective_interpolation_type"></a>

#### *property* effective_interpolation_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['None', 'Linear', 'Cubic Spline']*

Effective interpolation type, inherited from the attribute parameter if not defined on the datum.

* **Return type:**
  [`InterpolationType`](constants.md#ansys.grantami.core.mi_constants.InterpolationType)

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.interpolation_type"></a>

#### *property* interpolation_type *: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['None', 'Linear', 'Cubic Spline'] | [None](https://docs.python.org/3/library/constants.html#None)*

The interpolation type for the parameter.

* **Returns:**
  If set to [`None`](https://docs.python.org/3/library/constants.html#None), the value is inherited from the parameter definition associated with the parent
  attribute definition.
* **Return type:**
  [`InterpolationType`](constants.md#ansys.grantami.core.mi_constants.InterpolationType) or None
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-string value.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If providing an invalid interpolation type.

#### SEE ALSO
[`effective_interpolation_type`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.effective_interpolation_type)
: The effective value of this property, taking inheritance into account if the property is set to [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Parameter name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol for the parameter.

Defines the unit of the values for this parameter when importing into a functional attribute.

* **Returns:**
  Unit symbol as str if units are used, else [`None`](https://docs.python.org/3/library/constants.html#None).
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

#### WARNING
The [`unit`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) property affects both the [`default_value`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.default_value) and the functional attribute parameter
value for import. If the unit is modified, you must make sure that both the [`default_value`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.default_value) and the
corresponding functional attribute data contain values consistent with the new unit.

<a id="api-guide-misc-object-history"></a>

<a id="item-history"></a>

## Item history

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory"></a>

### *class* ObjectHistory

Provides access to the revision history of an MI database element.

Object histories are currently supported via the following properties:

* [`AttributeDefinition.history`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition.history)
* [`AttributeDefinitionTabular.column_histories`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_histories)
* [`ParameterDefinition.history`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.history)
* [`ParameterDefinition.history_of_default`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.history_of_default)
* [`ParameterDefinition.values_histories`](#ansys.grantami.core.mi_attribute_classes.ParameterDefinition.values_histories)
* [`DataRevisionHistory.history`](#ansys.grantami.core.mi_meta_classes.DataRevisionHistory.history)

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use the properties listed
above to access instances of this class.

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.created_at"></a>

#### *property* created_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Date and time the database element was created.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.created_by"></a>

#### *property* created_by *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The username of the user who created the database element.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.date_created"></a>

#### *property* date_created *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Date the database element was created.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.last_modified_at"></a>

#### *property* last_modified_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Date and time the database element was last modified.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.last_modified_by"></a>

#### *property* last_modified_by *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The username of the last user to modify the database element.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.last_modified_date"></a>

#### *property* last_modified_date *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Date the database element was last modified.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.ObjectHistory.update_count"></a>

#### *property* update_count *: [int](https://docs.python.org/3/library/functions.html#int)*

The number of times the object has been updated.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="record-version-history"></a>

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory"></a>

### *class* RecordVersionHistory

Provides access to the revision history of an MI Record.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.record_history`](record.md#ansys.grantami.core.mi_record_classes.Record.record_history) to access an instance of this class.

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.created_at"></a>

#### *property* created_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Date and time the record version was created.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.created_by"></a>

#### *property* created_by *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The username of the user who created the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.creation_notes"></a>

#### *property* creation_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Notes associated with the creation of the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.last_modification_notes"></a>

#### *property* last_modification_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Notes associated with the last modification made to record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.last_modified_at"></a>

#### *property* last_modified_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)*

Date and time the record version was last modified.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime)

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.last_modified_by"></a>

#### *property* last_modified_by *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The username of the user who last modified the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.release_notes"></a>

#### *property* release_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Notes associated with the release of the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.released_at"></a>

#### *property* released_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) | [None](https://docs.python.org/3/library/constants.html#None)*

Date and time the record version was released.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.released_by"></a>

#### *property* released_by *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The username of the user who released the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.superseded_at"></a>

#### *property* superseded_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) | [None](https://docs.python.org/3/library/constants.html#None)*

Date and time the record version was superseded.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.superseded_by"></a>

#### *property* superseded_by *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The username of the user who superseded the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.supersession_notes"></a>

#### *property* supersession_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Notes associated with the last operation that superseded the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.withdrawal_notes"></a>

#### *property* withdrawal_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Notes associated with the withdrawal of the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.withdrawn_at"></a>

#### *property* withdrawn_at *: [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) | [None](https://docs.python.org/3/library/constants.html#None)*

Date and time the record version was withdrawn.

* **Return type:**
  [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) or None

<a id="ansys.grantami.core.mi_meta_classes.RecordVersionHistory.withdrawn_by"></a>

#### *property* withdrawn_by *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The username of the user who withdrew the record version.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="attribute-data-information"></a>

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory"></a>

### *class* DataRevisionHistory

Provides revision history information about the data in an attribute of a record.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.data_revision_history`](record.md#ansys.grantami.core.mi_record_classes.Record.data_revision_history) to access an instance of this class.

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.created_in_record_version"></a>

#### *property* created_in_record_version *: [int](https://docs.python.org/3/library/functions.html#int)*

Version of the record when this datum was created.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.data_version_number"></a>

#### *property* data_version_number *: [int](https://docs.python.org/3/library/functions.html#int)*

Data version number.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.history"></a>

#### *property* history *: [ObjectHistory](#ansys.grantami.core.mi_meta_classes.ObjectHistory) | [None](https://docs.python.org/3/library/constants.html#None)*

Revision history of the attribute data, as an [`ObjectHistory`](#ansys.grantami.core.mi_meta_classes.ObjectHistory) object.

Is [`None`](https://docs.python.org/3/library/constants.html#None) for empty attributes.

* **Return type:**
  [`ObjectHistory`](#ansys.grantami.core.mi_meta_classes.ObjectHistory) or None

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.is_meta"></a>

#### *property* is_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute is a meta-attribute or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.is_meta_for"></a>

#### *property* is_meta_for *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Name of the parent attribute, if a meta-attribute.

Returns [`None`](https://docs.python.org/3/library/constants.html#None) otherwise.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.is_populated"></a>

#### *property* is_populated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute is populated.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.meta_attributes"></a>

#### *property* meta_attributes *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [DataRevisionHistory](#ansys.grantami.core.mi_meta_classes.DataRevisionHistory)]*

Data revision history of meta-attributes associated with this attribute, indexed by meta-attribute name.

* **Return type:**
  dict[str, [`DataRevisionHistory`](#ansys.grantami.core.mi_meta_classes.DataRevisionHistory)]

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.DataRevisionHistory.retired_in_record_version"></a>

#### *property* retired_in_record_version *: [int](https://docs.python.org/3/library/functions.html#int)*

Version of the record when this datum was retired.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="search-crit"></a>

<a id="search-criterion"></a>

## Search criterion

<a id="ansys.grantami.core.mi_meta_classes.SearchCriterion"></a>

### *class* SearchCriterion(attribute, operator, value=None, column_name=None)

Defines a single criterion for use in a search.

The criterion can be as simple as the presence of the specified attribute, or as complex as the data in a specified
column of the tabular attribute being greater than a specified value. The search will use the same units as the
[`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition).

* **Parameters:**
  * **attribute** ([*AttributeDefinition*](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) *|* [*PseudoAttributeDefinition*](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition)) – The subject of the search criterion.
  * **operator** (*Literal* *[* *"LESS_THAN"* *,*  *"GREATER_THAN"* *,*  *"BETWEEN"* *,*  *"CONTAINS_ANY"* *,*  *"CONTAINS_ALL"* *,*  *"CONTAINS"* *,*  *"NOT_CONTAINS"* *,*  *"EXISTS"* *,*  *"NOT_EXISTS"* *,*  *"EQUAL"* *]*) – The search mode for this criterion. The operator value must be compatible with the type of attribute or pseudo-
    attribute specified in the `attribute` parameter.
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float) *|* [*bool*](https://docs.python.org/3/library/functions.html#bool) *|* [*int*](https://docs.python.org/3/library/functions.html#int) *|* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *|* *List* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*datetime.datetime*](https://docs.python.org/3/library/datetime.html#datetime.datetime) *,* [*datetime.datetime*](https://docs.python.org/3/library/datetime.html#datetime.datetime) *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*datetime.date*](https://docs.python.org/3/library/datetime.html#datetime.date) *,* [*datetime.date*](https://docs.python.org/3/library/datetime.html#datetime.date) *]*  *|* [*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *]*  *|* [*RecordColor*](constants.md#ansys.grantami.core.mi_constants.RecordColor) *|* [*RecordType*](constants.md#ansys.grantami.core.mi_constants.RecordType) *|* *None*) – The value used in this criterion. The value type must correspond to the type of attribute or pseudo-attribute
    specified in the `attribute` parameter.
  * **column_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *|* *None*) – For tabular attributes, the name of the column to which this search criterion applies. Required when the
    operator is `EQUAL`.

### Notes

To perform an exact search on a discrete attribute, the operator argument should be either `CONTAINS_ANY` or
`CONTAINS_ALL`. In the case of searching for a single discrete value, the `value` argument should be a list
containing the search term.

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) values default to UTC if no timezone information is provided.

<a id="ansys.grantami.core.mi_meta_classes.SearchCriterion.attribute"></a>

#### *property* attribute *: [AttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) | [PseudoAttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition)*

[`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) or [`PseudoAttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition) for the attribute used in this search criterion.

* **Return type:**
  [AttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) | [PseudoAttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition)

<a id="ansys.grantami.core.mi_meta_classes.SearchCriterion.operation"></a>

#### *property* operation *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Operator used in this criterion, if provided.

* **Example:**
  ‘EXISTS’ or ‘CONTAINS’
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="api-guide-misc-media-attribute-values"></a>

<a id="media-attribute-values"></a>

## Media attribute values

<a id="binary-type"></a>

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType"></a>

### *class* BinaryType

Stores and provides access to Pictures and Files and associated metadata.

Pictures and files can appear in Granta MI as data (for example, in a tabular data column), or as an attribute
value. This class wraps files and images for inclusion in the corresponding MI Scripting Toolkit class.

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.load"></a>

#### load(path)

Populates the object with the data located on `path`.

Relative paths are permitted.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path to the object to load.

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.save"></a>

#### save(path)

Saves an object to file location `path`.

Relative paths are permitted.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path where the object should be saved.

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data for the file.

Binary data can be set with a bytes object or file buffer.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported.

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Checks whether the [`BinaryType`](#ansys.grantami.core.mi_attribute_value_classes.BinaryType) object is populated by checking whether there is binary data in the
object.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

If this object is populated via export, the `mime_file_type` property returns the MIME file type stored in
Granta MI.

If this object is populated via [`load()`](#ansys.grantami.core.mi_attribute_value_classes.BinaryType.load) or setting the [`binary_data`](#ansys.grantami.core.mi_attribute_value_classes.BinaryType.binary_data) property, the
`mime_file_type` property is populated using the `filetype` library. If `filetype` cannot determine the
MIME file type, the `mime_file_type` property is set to [`None`](https://docs.python.org/3/library/constants.html#None) and Granta MI determines the MIME file
type during import.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The [filetype PyPI page](https://pypi.org/project/filetype) lists supported MIME types.

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL of the hosted file.

* **Returns:**
  URL to the file stored in the parent Granta MI attribute, or [`None`](https://docs.python.org/3/library/constants.html#None) if the URL was not populated.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.BinaryType.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data of the hosted file, if exported.

[`None`](https://docs.python.org/3/library/constants.html#None) if the attribute was exported with `include_binary_data = False`.

* **Return type:**
  bytes or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="picture-type"></a>

<a id="ansys.grantami.core.mi_attribute_value_classes.Picture"></a>

### *class* Picture(\*, path=None)

Extended [`BinaryType`](#ansys.grantami.core.mi_attribute_value_classes.BinaryType) class for Pictures in MI.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *,* *optional*) – Path to the image file to load. Takes the form `C:\\Users\\username\\Pictures\\image.jpg` or
  `/home/username/Pictures/image.jpg`.

### Notes

Pictures of up to 500 MB in size may be stored in Granta MI. To upload pictures larger than 20 Mb using Scripting
Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys Technical Representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

<a id="ansys.grantami.core.mi_attribute_value_classes.Picture.load"></a>

#### load(path)

Populates the Picture object with the image located on `path`.

Relative paths are permitted.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path to the image file to load. Takes the form
  `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.

<a id="ansys.grantami.core.mi_attribute_value_classes.Picture.save"></a>

#### save(path)

Saves a Picture object to file location `path`.

Relative paths are permitted.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path where the image should be saved. Takes the form
  `C:\\Users\\username\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.

<a id="file-type"></a>

<a id="ansys.grantami.core.mi_attribute_value_classes.File"></a>

### *class* File(\*, path=None)

Extended [`BinaryType`](#ansys.grantami.core.mi_attribute_value_classes.BinaryType) class for Files in MI.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]* *,* *optional*) – Path to the file to load. Takes the form `C:\\Users\\username\\Documents\\file.pdf` or
  `/home/username/Documents/file.pdf`.

### Notes

Files of up to 500 MB in size may be stored in Granta MI. To upload files larger than 20 Mb using Scripting Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys Technical Representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

<a id="ansys.grantami.core.mi_attribute_value_classes.File.load"></a>

#### load(path)

Populates the File object with the file located by `path`.

Relative paths are permitted.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path to the file to load. Takes the form
  `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.

<a id="ansys.grantami.core.mi_attribute_value_classes.File.save"></a>

#### save(path)

Saves a File object to file location `path`.

Relative paths are permitted.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path where the file should be saved. Takes the form
  `C:\\Users\\username\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.

<a id="ansys.grantami.core.mi_attribute_value_classes.File.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

File description.

Stored with the data value. If provided, the description replaces the file name for the attribute when
displayed on a datasheet in MI Viewer.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-string value.

<a id="ansys.grantami.core.mi_attribute_value_classes.File.file_name"></a>

#### *property* file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="api-guide-misc-numeric-attribute-values"></a>

<a id="numeric-attribute-values"></a>

## Numeric attribute values

<a id="ansys.grantami.core._mi_value_classes.ParameterizedPointValue"></a>

### *class* ParameterizedPointValue(value, parameters=<factory>)

Represents a point value with parameters in a multi-valued point attribute value.

* **Parameters:**
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float) *|* [*ValueWithPrecision*](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision)) – The point float value.
  * **parameters** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*PointParameterValue*](#ansys.grantami.core._mi_value_classes.PointParameterValue) *,*  *...* *]* *,* *optional*) – Tuple of [`PointParameterValue`](#ansys.grantami.core._mi_value_classes.PointParameterValue) objects.

### Examples

Point with no parameters:

```pycon
>>> point = ParameterizedPointValue(value=1.0)
```

Point with parameters:

```pycon
>>> point = ParameterizedPointValue(
...     value=1.0,
...     parameters=(
...         PointParameterValue("Temperature", 25.0),
...         PointParameterValue("Statistical basis", "A-basis"),
...     ),
... )
```

Point with precision information and parameters:

```pycon
>>> point = ParameterizedPointValue(
...     value=ValueWithPrecision(1.0, 3),
...     parameters=(
...         PointParameterValue("Temperature", 25.0),
...         PointParameterValue("Statistical basis", "A-basis"),
...     ),
... )
```

<a id="ansys.grantami.core._mi_value_classes.ParameterizedPointValue.from_data"></a>

#### *classmethod* from_data(value, parameters=None)

Alternative constructor to create [`ParameterizedPointValue`](#ansys.grantami.core._mi_value_classes.ParameterizedPointValue) from more general data types.

* **Parameters:**
  * **value** (*SupportsFloat*) – The point float value.
  * **parameters** (*Sequence* *[*[*PointParameterValue*](#ansys.grantami.core._mi_value_classes.PointParameterValue) *]* *,* *optional*) – Sequence of [`PointParameterValue`](#ansys.grantami.core._mi_value_classes.PointParameterValue) objects.
* **Return type:**
  [ParameterizedPointValue](#ansys.grantami.core._mi_value_classes.ParameterizedPointValue)

<a id="ansys.grantami.core._mi_value_classes.ParameterizedPointValue.parameters"></a>

#### parameters *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[PointParameterValue](#ansys.grantami.core._mi_value_classes.PointParameterValue), ...]*

Tuple of [`PointParameterValue`](#ansys.grantami.core._mi_value_classes.PointParameterValue) objects.

<a id="ansys.grantami.core._mi_value_classes.ParameterizedPointValue.parameters_by_name"></a>

#### *property* parameters_by_name *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)]*

Returns a read-only mapping of parameter values by name.

* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, str | float]

<a id="ansys.grantami.core._mi_value_classes.ParameterizedPointValue.value"></a>

#### value *: [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision)*

The point float value.

<a id="ansys.grantami.core._mi_value_classes.PointParameterValue"></a>

### *class* PointParameterValue(name, value)

Parameter value for a point in a multi-valued point value.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The name of the parameter.
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float) *|* [*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The value of the parameter. This must be a [`float`](https://docs.python.org/3/library/functions.html#float) for numeric parameters, or [`str`](https://docs.python.org/3/library/stdtypes.html#str) for discrete
    parameters.

### Examples

Numeric parameter:

```pycon
>>> parameter = PointParameterValue(
...     name="Temperature",
...     value=25.0,
... )
```

Discrete parameter:

```pycon
>>> parameter = PointParameterValue(
...     name="Statistical basis",
...     value="A-basis",
... )
```

<a id="ansys.grantami.core._mi_value_classes.PointParameterValue.from_data"></a>

#### *classmethod* from_data(name, value)

Alternative constructor to create [`PointParameterValue`](#ansys.grantami.core._mi_value_classes.PointParameterValue) from more general data types.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The name of the parameter.
  * **value** (*SupportsFloat* *|* [*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The value of the parameter. This must be a ‘float’-like for numeric parameters, or a ‘str’ for discrete
    parameters.
* **Return type:**
  [PointParameterValue](#ansys.grantami.core._mi_value_classes.PointParameterValue)

<a id="ansys.grantami.core._mi_value_classes.PointParameterValue.name"></a>

#### name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The name of the parameter.

<a id="ansys.grantami.core._mi_value_classes.PointParameterValue.value"></a>

#### value *: [float](https://docs.python.org/3/library/functions.html#float) | [str](https://docs.python.org/3/library/stdtypes.html#str)*

The value of the parameter.

<a id="ansys.grantami.core._mi_value_classes.Range"></a>

### *class* Range(low, high, low_value_is_inclusive=True, high_value_is_inclusive=True)

Range value representation.

* **Parameters:**
  * **low** ([*float*](https://docs.python.org/3/library/functions.html#float) *|* [*ValueWithPrecision*](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) *|* *None*) – The lower bound value. Use [`None`](https://docs.python.org/3/library/constants.html#None) for an open-ended range.
  * **high** ([*float*](https://docs.python.org/3/library/functions.html#float) *|* [*ValueWithPrecision*](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) *|* *None*) – The upper bound value. Use [`None`](https://docs.python.org/3/library/constants.html#None) for an open-ended range.
  * **low_value_is_inclusive** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether the low value is included in the range. Defaults to [`True`](https://docs.python.org/3/library/constants.html#True). This property should only be set if the
    [`low`](#ansys.grantami.core._mi_value_classes.Range.low) property has a value. If [`low`](#ansys.grantami.core._mi_value_classes.Range.low) is [`None`](https://docs.python.org/3/library/constants.html#None), this property has no effect on imported data.
  * **high_value_is_inclusive** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether the high value is included in the range. Defaults to [`True`](https://docs.python.org/3/library/constants.html#True). This property should only be set if
    the [`high`](#ansys.grantami.core._mi_value_classes.Range.high) property has a value. If [`high`](#ansys.grantami.core._mi_value_classes.Range.high) is [`None`](https://docs.python.org/3/library/constants.html#None), this property has no effect on imported
    data.

### Examples

Range with default inclusiveness and values for the lower and upper bounds:

```pycon
>>> value = Range(1.0, 2.0)
```

Range value using significant figures and specifying inclusiveness:

```pycon
>>> value = Range(
...     low=ValueWithPrecision(1.0, 2),
...     high=2.0,
...     low_value_is_inclusive=False,
...     high_value_is_inclusive=False,
... )
```

Open-ended range:

```pycon
>>> value = Range(1.0, None)
```

<a id="ansys.grantami.core._mi_value_classes.Range.from_data"></a>

#### *classmethod* from_data(value, low_value_is_inclusive=True, high_value_is_inclusive=True)

Create a [`Range`](#ansys.grantami.core._mi_value_classes.Range) from data in various formats.

* **Parameters:**
  * **value** ([`Range_Value_Type`](#ansys.grantami.core._mi_value_classes.Range_Value_Type)) – Low and high values.
  * **low_value_is_inclusive** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether the low value is included in the range. Defaults to [`True`](https://docs.python.org/3/library/constants.html#True).
  * **high_value_is_inclusive** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether the high value is included in the range. Defaults to [`True`](https://docs.python.org/3/library/constants.html#True).
* **Returns:**
  The created [`Range`](#ansys.grantami.core._mi_value_classes.Range) object.
* **Return type:**
  [Range](#ansys.grantami.core._mi_value_classes.Range)

### Examples

From a dictionary with keys `low` and `high`:

```pycon
>>> value = Range.from_data({"low": 1.0, "high": 2.0})
```

From a tuple:

```pycon
>>> value = Range.from_data((1.0, 2.0))
```

From a list of integers:

```pycon
>>> value = Range.from_data([1, 2])
```

From a single float value:

```pycon
>>> Range.from_data(1.0)
Range(low=1.0, high=1.0, low_value_is_inclusive=True, high_value_is_inclusive=True)
```

<a id="ansys.grantami.core._mi_value_classes.Range.as_dict"></a>

#### *property* as_dict *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [None](https://docs.python.org/3/library/constants.html#None)]*

Returns a dictionary representation of the range value with `low` and `high` keys.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | None]

<a id="ansys.grantami.core._mi_value_classes.Range.high"></a>

#### high *: [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [None](https://docs.python.org/3/library/constants.html#None)*

The upper bound value.

<a id="ansys.grantami.core._mi_value_classes.Range.high_value_is_inclusive"></a>

#### high_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)* *= True*

Whether the high value is included in the range.

This property should only be set if the [`high`](#ansys.grantami.core._mi_value_classes.Range.high) property has a value. If [`high`](#ansys.grantami.core._mi_value_classes.Range.high) is [`None`](https://docs.python.org/3/library/constants.html#None), this
property has no effect on imported data.

<a id="ansys.grantami.core._mi_value_classes.Range.low"></a>

#### low *: [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [None](https://docs.python.org/3/library/constants.html#None)*

The lower bound value.

<a id="ansys.grantami.core._mi_value_classes.Range.low_value_is_inclusive"></a>

#### low_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)* *= True*

Whether the low value is included in the range.

This property should only be set if the [`low`](#ansys.grantami.core._mi_value_classes.Range.low) property has a value. If [`low`](#ansys.grantami.core._mi_value_classes.Range.low) is [`None`](https://docs.python.org/3/library/constants.html#None), this
property has no effect on imported data.

<a id="ansys.grantami.core._mi_value_classes.Range_Value_Type"></a>

### Range_Value_Type

Valid values for use with [`Range.from_data()`](#ansys.grantami.core._mi_value_classes.Range.from_data).

Alias of:

* [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple) [[`Range_Extrema_Value_Type`](#ansys.grantami.core._mi_value_classes.Range_Extrema_Value_Type), [`Range_Extrema_Value_Type`](#ansys.grantami.core._mi_value_classes.Range_Extrema_Value_Type)]
* [`list`](https://docs.python.org/3/library/stdtypes.html#list) [[`Range_Extrema_Value_Type`](#ansys.grantami.core._mi_value_classes.Range_Extrema_Value_Type)]
* [`dict`](https://docs.python.org/3/library/stdtypes.html#dict) [[`Literal`](https://docs.python.org/3/library/typing.html#typing.Literal) [`"high"`, `"low"`], [`Range_Extrema_Value_Type`](#ansys.grantami.core._mi_value_classes.Range_Extrema_Value_Type)]
* Single [`Range_Extrema_Value_Type`](#ansys.grantami.core._mi_value_classes.Range_Extrema_Value_Type) for ranges with identical low and high values.

<a id="ansys.grantami.core._mi_value_classes.Range_Extrema_Value_Type"></a>

### Range_Extrema_Value_Type

alias of [`SupportsFloat`](https://docs.python.org/3/library/typing.html#typing.SupportsFloat) | [`ValueWithPrecision`](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_meta_classes.ValueWithPrecision"></a>

### *class* ValueWithPrecision(value, number_of_digits)

Represents a float value with a specific precision defined as a number of decimal digits.

Upon import the value is rounded at the specified number of digits. This class helps compute the number of
significant figures in a value.

* **Parameters:**
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float) *or* [*int*](https://docs.python.org/3/library/functions.html#int)) – Float value.
  * **number_of_digits** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Number of significant decimal places.
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value and precision would result in more than 15 significant figures or fewer than 1 significant figure.

### Notes

Up to 15 significant figures are supported.

<a id="ansys.grantami.core.mi_meta_classes.ValueWithPrecision.as_decimal"></a>

#### *property* as_decimal *: [Decimal](https://docs.python.org/3/library/decimal.html#decimal.Decimal)*

Return a [`Decimal`](https://docs.python.org/3/library/decimal.html#decimal.Decimal) representation of the floating point value with the configured precision.

* **Return type:**
  [decimal.Decimal](https://docs.python.org/3/library/decimal.html#decimal.Decimal)

### Examples

```pycon
>>> ValueWithPrecision(value=5.4, number_of_digits=2).as_decimal
Decimal('5.40')
```

```pycon
>>> ValueWithPrecision(value=5.4, number_of_digits=4).as_decimal
Decimal('5.4000')
```

```pycon
>>> ValueWithPrecision(value=5.4, number_of_digits=0).as_decimal
Decimal('5')
```

<a id="ansys.grantami.core.mi_meta_classes.ValueWithPrecision.number_of_digits"></a>

#### *property* number_of_digits *: [int](https://docs.python.org/3/library/functions.html#int)*

Number of significant decimal places.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_meta_classes.ValueWithPrecision.significant_figures"></a>

#### *property* significant_figures *: [int](https://docs.python.org/3/library/functions.html#int)*

Number of significant figures, computed from the floating point value and number of digits.

Significant figures as defined in an MI system include the number of digits in the integral and decimal parts
of the value.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

### Examples

```pycon
>>> ValueWithPrecision(value=5.5, number_of_digits=2).significant_figures
3
```

```pycon
>>> ValueWithPrecision(value=10.2, number_of_digits=2).significant_figures
4
```

<a id="ansys.grantami.core.mi_meta_classes.ValueWithPrecision.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Floating point value.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.core.mi_meta_classes.TrailingZeroInformation"></a>

### *class* TrailingZeroInformation

Trailing zero information for an exported attribute value.

* **Parameters:**
  * **entered_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – String representation of the imported floating-point value.
  * **entered_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Unit symbol of the entered value.
  * **significant_figures** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Number of significant figures in the entered value.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`ValueWithPrecision`](#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) to create values with precision information.

<a id="ansys.grantami.core.mi_meta_classes.TrailingZeroInformation.as_decimal"></a>

#### *property* as_decimal *: [Decimal](https://docs.python.org/3/library/decimal.html#decimal.Decimal)*

Return a [`Decimal`](https://docs.python.org/3/library/decimal.html#decimal.Decimal) representation of the value.

* **Return type:**
  [decimal.Decimal](https://docs.python.org/3/library/decimal.html#decimal.Decimal)

### Examples

2 m, measured to a precision of 1 mm:

```pycon
>>> trailing_zero_information = TrailingZeroInformation("2", "m", 4)
>>> trailing_zero_information.as_decimal
Decimal('2.000')
```

<a id="ansys.grantami.core.mi_meta_classes.TrailingZeroInformation.entered_unit"></a>

#### *property* entered_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Unit symbol in which the value with trailing zero information was imported.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.TrailingZeroInformation.entered_value"></a>

#### *property* entered_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

String representation of the floating point value.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_meta_classes.TrailingZeroInformation.number_of_digits"></a>

#### *property* number_of_digits *: [int](https://docs.python.org/3/library/functions.html#int)*

Number of digits, computed from the entered value and significant figures.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_meta_classes.TrailingZeroInformation.significant_figures"></a>

#### *property* significant_figures *: [int](https://docs.python.org/3/library/functions.html#int)*

Number of significant digits in the value, including trailing zeros.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="api-guide-misc-functional-attribute-values"></a>

<a id="functional-attribute-values"></a>

## Functional attribute values

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint"></a>

### *class* SeriesPoint(\*, x, is_estimated=None, decoration=GraphDecoration.LINES, y, parameters=<factory>)

Data that represents the value of a point series functional attribute.

This class is a frozen [`dataclass`](https://docs.python.org/3/library/dataclasses.html#module-dataclasses).

* **Parameters:**
  * **x** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,*  *...* *]*) – Tuple of x-axis parameter values.
  * **y** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*) – Tuple of y-axis values. Must be the same length as the `x` parameter.
  * **is_estimated** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *,*  *...* *]* *,* *optional*) – Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values. If provided, must be a tuple of
    [`bool`](https://docs.python.org/3/library/functions.html#bool) values and must be the same length as the `x` and `y` parameters.
  * **parameters** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*SeriesParameterValue*](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) *,*  *...* *]* *,* *optional*) – Tuple of [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – [`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style. Defaults to [`GraphDecoration.LINES`](#ansys.grantami.core._mi_value_classes.GraphDecoration.LINES).

### Examples

Series with no extra parameters:

```pycon
>>> series = SeriesPoint(
...     x=(1.0, 2.0),
...     y=(4.5, 5.5),
... )
```

Series with additional parameters, all points marked as estimated, and using markers as the display type:

```pycon
>>> series = SeriesPoint(
...     x=(1.0, 2.0),
...     y=(4.5, 5.5),
...     is_estimated=(True, True),
...     parameters=(
...         SeriesParameterValue("Temperature", 25.0),
...         SeriesParameterValue("Strain rate", 0.01),
...     ),
...     decoration=GraphDecoration.MARKERS,
... )
```

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.from_data"></a>

#### *classmethod* from_data(x, y, is_estimated=None, parameters=None, decoration=None)

Alternative constructor to create [`SeriesPoint`](#ansys.grantami.core._mi_value_classes.SeriesPoint) from more general data types.

* **Parameters:**
  * **x** (*Sequence* *[**SupportsFloat* *]*  *|* *Sequence* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – Sequence of x-axis parameter values.
  * **y** (*Sequence* *[**SupportsFloat* *]*) – Sequence of values for the y-axis.
  * **is_estimated** (*Sequence* *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *]* *,* *optional*) – Whether values are estimated. Defaults to [`None`](https://docs.python.org/3/library/constants.html#None), which results in all points being marked as not
    estimated.
  * **parameters** (*Sequence* *[*[*SeriesParameterValue*](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) *]* *,* *optional*) – Sequence of [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – Graph decoration style.
* **Return type:**
  [SeriesPoint](#ansys.grantami.core._mi_value_classes.SeriesPoint)

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.decoration"></a>

#### decoration *: [GraphDecoration](#ansys.grantami.core._mi_value_classes.GraphDecoration)* *= 'Lines'*

[`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style.

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.is_estimated"></a>

#### is_estimated *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), ...]* *= None*

Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values.

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.parameters"></a>

#### parameters *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[SeriesParameterValue](#ansys.grantami.core._mi_value_classes.SeriesParameterValue), ...]*

Tuple of [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) objects.

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.parameters_by_name"></a>

#### *property* parameters_by_name *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)]*

Returns a read-only mapping of parameter values by name.

* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, str | float]

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.x"></a>

#### x *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...]*

Tuple of x-axis parameter values.

<a id="ansys.grantami.core._mi_value_classes.SeriesPoint.y"></a>

#### y *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Tuple of y-axis values.

<a id="ansys.grantami.core._mi_value_classes.SeriesRange"></a>

### *class* SeriesRange(\*, x, is_estimated=None, decoration=GraphDecoration.LINES, y_low, y_high, parameters=<factory>)

Data that represents the value of a range series functional attribute.

This class is a frozen [`dataclass`](https://docs.python.org/3/library/dataclasses.html#module-dataclasses).

* **Parameters:**
  * **x** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,*  *...* *]*) – Tuple of x-axis parameter values.
  * **y_low** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*) – Tuple of values for the y-axis lower bound. Must be the same length as the `x` parameter.
  * **y_high** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*) – Tuple of values for the y-axis upper bound. Must be the same length as the `x` parameter.
  * **is_estimated** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *,*  *...* *]* *,* *optional*) – Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values. If provided, must be a tuple of
    [`bool`](https://docs.python.org/3/library/functions.html#bool) values and must be the same length as the `x`, `y_low`, and `y_high` parameters.
  * **parameters** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*SeriesParameterValue*](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) *,*  *...* *]* *,* *optional*) – Tuple of [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – [`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style. Defaults to [`GraphDecoration.LINES`](#ansys.grantami.core._mi_value_classes.GraphDecoration.LINES).

### Examples

Series with no extra parameters:

```pycon
>>> series = SeriesRange(
...     x=(1.0, 2.0),
...     y_low=(4.5, 5.5),
...     y_high=(4.7, 5.8),
... )
```

Series with additional parameters, all points marked as estimated, and using markers as the display type:

```pycon
>>> series = SeriesRange(
...     x=(1.0, 2.0),
...     y_low=(4.5, 5.5),
...     y_high=(4.7, 5.8),
...     is_estimated=(True, True),
...     parameters=(
...         SeriesParameterValue("Temperature", 25.0),
...         SeriesParameterValue("Strain rate", 0.01),
...     ),
...     decoration=GraphDecoration.LINES_AND_MARKERS,
... )
```

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.from_data"></a>

#### *classmethod* from_data(x, y_low, y_high, is_estimated=None, parameters=None, decoration=None)

Alternative constructor to create [`SeriesRange`](#ansys.grantami.core._mi_value_classes.SeriesRange) from more general data types.

* **Parameters:**
  * **x** (*Sequence* *[**SupportsFloat* *]*  *|* *Sequence* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – Sequence of x-axis parameter values.
  * **y_low** (*Sequence* *[**SupportsFloat* *]*) – Sequence of values for the y-axis lower bound.
  * **y_high** (*Sequence* *[**SupportsFloat* *]*) – Sequence of values for the y-axis upper bound.
  * **is_estimated** (*Sequence* *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *]* *,* *optional*) – Whether values are estimated. Defaults to [`None`](https://docs.python.org/3/library/constants.html#None), which results in all points being marked as not
    estimated.
  * **parameters** (*Sequence* *[*[*SeriesParameterValue*](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) *]* *,* *optional*) – Sequence of [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – Graph decoration style.
* **Return type:**
  [SeriesRange](#ansys.grantami.core._mi_value_classes.SeriesRange)

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.decoration"></a>

#### decoration *: [GraphDecoration](#ansys.grantami.core._mi_value_classes.GraphDecoration)* *= 'Lines'*

[`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style.

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.is_estimated"></a>

#### is_estimated *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), ...]* *= None*

Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values.

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.parameters"></a>

#### parameters *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[SeriesParameterValue](#ansys.grantami.core._mi_value_classes.SeriesParameterValue), ...]*

Tuple of [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) objects.

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.parameters_by_name"></a>

#### *property* parameters_by_name *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float)]*

Returns a read-only mapping of parameter values by name.

* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, str | float]

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.x"></a>

#### x *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...]*

Tuple of x-axis parameter values.

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.y_high"></a>

#### y_high *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Tuple of values for the y-axis upper bound.

<a id="ansys.grantami.core._mi_value_classes.SeriesRange.y_low"></a>

#### y_low *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Tuple of values for the y-axis lower bound.

<a id="ansys.grantami.core._mi_value_classes.SeriesParameterValue"></a>

### *class* SeriesParameterValue(name, value)

Parameter value for a functional series.

The parameter value applies to the entire [`SeriesPoint`](#ansys.grantami.core._mi_value_classes.SeriesPoint) or [`SeriesRange`](#ansys.grantami.core._mi_value_classes.SeriesRange) it is assigned to.

This class is a frozen [`dataclass`](https://docs.python.org/3/library/dataclasses.html#module-dataclasses).

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The name of the parameter.
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float) *|* [*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The value of the parameter. This must be a ‘float’ for numeric parameters, or a ‘str’ for discrete
    parameters.

### Examples

```pycon
>>> parameter = SeriesParameterValue(
...     name="Temperature",
...     value=25.0,
... )
```

<a id="ansys.grantami.core._mi_value_classes.SeriesParameterValue.from_data"></a>

#### *classmethod* from_data(name, value)

Alternative constructor to create [`SeriesParameterValue`](#ansys.grantami.core._mi_value_classes.SeriesParameterValue) from more general data types.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The name of the parameter.
  * **value** (*SupportsFloat* *|* [*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The value of the parameter. This must be a ‘float’-like for numeric parameters, or a ‘str’ for discrete
    parameters.
* **Return type:**
  [SeriesParameterValue](#ansys.grantami.core._mi_value_classes.SeriesParameterValue)

<a id="ansys.grantami.core._mi_value_classes.SeriesParameterValue.name"></a>

#### name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The name of the parameter.

<a id="ansys.grantami.core._mi_value_classes.SeriesParameterValue.value"></a>

#### value *: [float](https://docs.python.org/3/library/functions.html#float) | [str](https://docs.python.org/3/library/stdtypes.html#str)*

The value of the parameter.

This must be a ‘float’ for numeric parameters, or a ‘str’ for discrete parameters.

<a id="ansys.grantami.core._mi_value_classes.GridPoint"></a>

### *class* GridPoint(\*, x, is_estimated=None, decoration=GraphDecoration.LINES, y, parameters=<factory>)

Multi-dimensional data that represents the value of a point grid functional attribute.

This class is a frozen [`dataclass`](https://docs.python.org/3/library/dataclasses.html#module-dataclasses).

* **Parameters:**
  * **x** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,*  *...* *]*) – Tuple of x-axis parameter values.
  * **y** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*) – Tuple of y-axis values. Must be the same length as the `x` parameter.
  * **is_estimated** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *,*  *...* *]* *,* *optional*) – Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values. If provided, must be a
    tuple of [`bool`](https://docs.python.org/3/library/functions.html#bool) values and must be the same length as the `x` and `y` parameters.
  * **parameters** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*GridParameterValues*](#ansys.grantami.core._mi_value_classes.GridParameterValues) *,*  *...* *]* *,* *optional*) – Tuple of [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – [`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style. Defaults to [`GraphDecoration.LINES`](#ansys.grantami.core._mi_value_classes.GraphDecoration.LINES).

### Examples

Grid with no parameters:

```pycon
>>> grid = GridPoint(
...     x=(1.0, 2.0),
...     y=(4.5, 5.5),
... )
```

Grid with additional parameters, all points marked as estimated, and using markers as the display type:

```pycon
>>> grid = GridPoint(
...     x=(1.0, 2.0, 1.0, 2.0),
...     y=(4.5, 5.5, 4.3, 5.3),
...     is_estimated=(True, True, True, True),
...     parameters=(
...         GridParameterValues("Temperature", (25.0, 25.0, 100.0, 100.0)),
...     ),
...     decoration=GraphDecoration.MARKERS,
... )
```

<a id="ansys.grantami.core._mi_value_classes.GridPoint.__add__"></a>

#### \_\_add_\_(other)

Returns a new grid object that concatenates both grids.

Only grids that define values for the same parameters and use the same decoration style can be concatenated.

* **Parameters:**
  **other** ([*GridPoint*](#ansys.grantami.core._mi_value_classes.GridPoint)) – The other grid to concatenate with this grid.
* **Returns:**
  New instance with merged data from both input grids.
* **Return type:**
  [GridPoint](#ansys.grantami.core._mi_value_classes.GridPoint)

### Examples

```pycon
>>> grid_1 = GridPoint(
...     x=(1.0, 2.0),
...     y=(4.5, 5.5),
...     parameters=(GridParameterValues("Temperature", (25.0, 25.0)),),
... )
>>> grid_2 = GridPoint(
...     x=(1.0, 2.0),
...     y=(7.6, 8.6),
...     parameters=(GridParameterValues("Temperature", (100.0, 100.0)),),
... )
>>> grid_1 + grid_2 == GridPoint(
...    x=(1.0, 2.0, 1.0, 2.0),
...    y=(4.5, 5.5, 7.6, 8.6),
...    parameters=(GridParameterValues("Temperature", (25.0, 25.0, 100.0, 100.0)),),
... )
True
```

<a id="ansys.grantami.core._mi_value_classes.GridPoint.from_data"></a>

#### *classmethod* from_data(x, y, is_estimated=None, parameters=None, decoration=None)

Alternative constructor to create [`GridPoint`](#ansys.grantami.core._mi_value_classes.GridPoint) from more general data types.

* **Parameters:**
  * **x** (*Sequence* *[**SupportsFloat* *]*  *|* *Sequence* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – Sequence of x-axis parameter values.
  * **y** (*Sequence* *[**SupportsFloat* *]*) – Sequence of values for the y-axis.
  * **is_estimated** (*Sequence* *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *]* *,* *optional*) – Whether values are estimated. Defaults to [`None`](https://docs.python.org/3/library/constants.html#None), which results in all points being marked as not
    estimated.
  * **parameters** (*Sequence* *[*[*GridParameterValues*](#ansys.grantami.core._mi_value_classes.GridParameterValues) *]* *,* *optional*) – Sequence of [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – Graph decoration style.

<a id="ansys.grantami.core._mi_value_classes.GridPoint.decoration"></a>

#### decoration *: [GraphDecoration](#ansys.grantami.core._mi_value_classes.GraphDecoration)* *= 'Lines'*

[`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style.

<a id="ansys.grantami.core._mi_value_classes.GridPoint.is_estimated"></a>

#### is_estimated *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), ...]* *= None*

Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values.

<a id="ansys.grantami.core._mi_value_classes.GridPoint.parameters"></a>

#### parameters *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[GridParameterValues](#ansys.grantami.core._mi_value_classes.GridParameterValues), ...]*

Tuple of [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) objects.

<a id="ansys.grantami.core._mi_value_classes.GridPoint.parameters_by_name"></a>

#### *property* parameters_by_name *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]]*

Returns a read-only mapping of parameter values by name.

* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, tuple[str, …] | tuple[float, …]]

<a id="ansys.grantami.core._mi_value_classes.GridPoint.x"></a>

#### x *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...]*

Tuple of x-axis parameter values.

<a id="ansys.grantami.core._mi_value_classes.GridPoint.y"></a>

#### y *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Tuple of y-axis values.

<a id="ansys.grantami.core._mi_value_classes.GridRange"></a>

### *class* GridRange(\*, x, is_estimated=None, decoration=GraphDecoration.LINES, y_low, y_high, parameters=<factory>)

Multi-dimensional data that represents the value of a range grid functional attribute.

This class is a frozen [`dataclass`](https://docs.python.org/3/library/dataclasses.html#module-dataclasses).

* **Parameters:**
  * **x** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,*  *...* *]*) – Tuple of x-axis parameter values.
  * **y_low** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*) – Tuple of values for the y-axis lower bound. Must be the same length as the `x` parameter.
  * **y_high** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*) – Tuple of values for the y-axis upper bound. Must be the same length as the `x` parameter.
  * **is_estimated** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *,*  *...* *]* *,* *optional*) – Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values. If provided, must be a tuple of
    [`bool`](https://docs.python.org/3/library/functions.html#bool) values and must be the same length as the `x`, `y_low`, and ``y_high` parameters.
  * **parameters** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*GridParameterValues*](#ansys.grantami.core._mi_value_classes.GridParameterValues) *,*  *...* *]* *,* *optional*) – Tuple of [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – [`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style. Defaults to [`GraphDecoration.LINES`](#ansys.grantami.core._mi_value_classes.GraphDecoration.LINES).

### Examples

Grid with no parameters:

```pycon
>>> grid = GridRange(
...     x=(1.0, 2.0),
...     y_low=(4.5, 5.5),
...     y_high=(4.55, 5.55),
... )
```

Grid with additional parameters, all points marked as estimated, and using markers as the display type:

```pycon
>>> grid = GridRange(
...     x=(1.0, 2.0, 1.0, 2.0),
...     y_low=(4.5, 5.5, 4.3, 5.3),
...     y_high=(4.55, 5.55, 4.35, 5.35),
...     is_estimated=(True, True, True, True),
...     parameters=(
...         GridParameterValues("Temperature", (25.0, 25.0, 100.0, 100.0)),
...     ),
...     decoration=GraphDecoration.MARKERS,
... )
```

<a id="ansys.grantami.core._mi_value_classes.GridRange.__add__"></a>

#### \_\_add_\_(other)

Returns a new grid object that concatenates both grids.

Only grids that define values for the same parameters and use the same decoration style can be concatenated.

* **Parameters:**
  **other** ([*GridRange*](#ansys.grantami.core._mi_value_classes.GridRange)) – The other grid to concatenate with this grid.
* **Returns:**
  New instance with merged data from both input grids.
* **Return type:**
  [GridRange](#ansys.grantami.core._mi_value_classes.GridRange)

### Examples

```pycon
>>> grid_1 = GridRange(
...     x=(1.0, 2.0),
...     y_low=(4.5, 5.5),
...     y_high=(4.55, 5.55),
...     parameters=(GridParameterValues("Temperature", (25.0, 25.0)),),
... )
>>> grid_2 = GridRange(
...     x=(1.0, 2.0),
...     y_low=(7.6, 8.6),
...     y_high=(7.65, 8.65),
...     parameters=(GridParameterValues("Temperature", (100.0, 100.0)),),
... )
>>> grid_1 + grid_2 == GridRange(
...    x=(1.0, 2.0, 1.0, 2.0),
...    y_low=(4.5, 5.5, 7.6, 8.6),
...    y_high=(4.55, 5.55, 7.65, 8.65),
...    parameters=(GridParameterValues("Temperature", (25.0, 25.0, 100.0, 100.0)),),
... )
True
```

<a id="ansys.grantami.core._mi_value_classes.GridRange.from_data"></a>

#### *classmethod* from_data(x, y_low, y_high, is_estimated=None, parameters=None, decoration=None)

Alternative constructor to create [`GridRange`](#ansys.grantami.core._mi_value_classes.GridRange) from more general data types.

* **Parameters:**
  * **x** (*Sequence* *[**SupportsFloat* *]*  *|* *Sequence* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – Sequence of x-axis parameter values.
  * **y_low** (*Sequence* *[**SupportsFloat* *]*) – Sequence of values for the y-axis lower bound.
  * **y_high** (*Sequence* *[**SupportsFloat* *]*) – Sequence of values for the y-axis upper bound.
  * **is_estimated** (*Sequence* *[*[*bool*](https://docs.python.org/3/library/functions.html#bool) *]* *,* *optional*) – Whether values are estimated. Defaults to [`None`](https://docs.python.org/3/library/constants.html#None), which results in all points being marked as not
    estimated.
  * **parameters** (*Sequence* *[*[*GridParameterValues*](#ansys.grantami.core._mi_value_classes.GridParameterValues) *]* *,* *optional*) – Sequence of [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) objects.
  * **decoration** ([*GraphDecoration*](#ansys.grantami.core._mi_value_classes.GraphDecoration) *,* *optional*) – Graph decoration style.

<a id="ansys.grantami.core._mi_value_classes.GridRange.decoration"></a>

#### decoration *: [GraphDecoration](#ansys.grantami.core._mi_value_classes.GraphDecoration)* *= 'Lines'*

[`GraphDecoration`](#ansys.grantami.core._mi_value_classes.GraphDecoration) style.

<a id="ansys.grantami.core._mi_value_classes.GridRange.is_estimated"></a>

#### is_estimated *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), ...]* *= None*

Whether points are estimated. Defaults to a tuple of [`False`](https://docs.python.org/3/library/constants.html#False) values.

<a id="ansys.grantami.core._mi_value_classes.GridRange.parameters"></a>

#### parameters *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[GridParameterValues](#ansys.grantami.core._mi_value_classes.GridParameterValues), ...]*

Tuple of [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) objects.

<a id="ansys.grantami.core._mi_value_classes.GridRange.parameters_by_name"></a>

#### *property* parameters_by_name *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]]*

Returns a read-only mapping of parameter values by name.

* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, tuple[str, …] | tuple[float, …]]

<a id="ansys.grantami.core._mi_value_classes.GridRange.x"></a>

#### x *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...]*

Tuple of x-axis parameter values.

<a id="ansys.grantami.core._mi_value_classes.GridRange.y_high"></a>

#### y_high *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Tuple of values for the y-axis upper bound.

<a id="ansys.grantami.core._mi_value_classes.GridRange.y_low"></a>

#### y_low *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Tuple of values for the y-axis lower bound.

<a id="ansys.grantami.core._mi_value_classes.GridParameterValues"></a>

### *class* GridParameterValues(name, values)

Parameter values for a functional grid.

When assigned to [`GridPoint`](#ansys.grantami.core._mi_value_classes.GridPoint) or [`GridRange`](#ansys.grantami.core._mi_value_classes.GridRange), there must be as many parameter values as xy value
pairs in the grid.

This class is a frozen [`dataclass`](https://docs.python.org/3/library/dataclasses.html#module-dataclasses).

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the parameter.
  * **values** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*float*](https://docs.python.org/3/library/functions.html#float) *,*  *...* *]*  *|* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,*  *...* *]*) – Tuple of values for the parameter. [`float`](https://docs.python.org/3/library/functions.html#float) for numeric parameters, [`str`](https://docs.python.org/3/library/stdtypes.html#str) for discrete parameters.

### Examples

```pycon
>>> parameter = GridParameterValues(
...     name="Temperature",
...     values=(10.0, 20.0),
... )
```

<a id="ansys.grantami.core._mi_value_classes.GridParameterValues.from_data"></a>

#### *classmethod* from_data(name, values)

Alternative constructor to create [`GridParameterValues`](#ansys.grantami.core._mi_value_classes.GridParameterValues) from more general data types.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – The name of the parameter.
  * **values** (*Sequence* *[**SupportsFloat* *]*  *|* *Sequence* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]*) – The value of the parameter. This must be a Sequence of ‘float’-like objects for numeric parameters, or a
    Sequence of ‘str’ for discrete parameters.
* **Return type:**
  [GridParameterValues](#ansys.grantami.core._mi_value_classes.GridParameterValues)

<a id="ansys.grantami.core._mi_value_classes.GridParameterValues.name"></a>

#### name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the parameter.

<a id="ansys.grantami.core._mi_value_classes.GridParameterValues.values"></a>

#### values *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str), ...]*

Tuple of values for the parameter.

<a id="ansys.grantami.core._mi_value_classes.GraphDecoration"></a>

### *class* GraphDecoration

<a id="ansys.grantami.core._mi_value_classes.GraphDecoration.LINES"></a>

#### LINES *= 'Lines'*

<a id="ansys.grantami.core._mi_value_classes.GraphDecoration.LINES_AND_MARKERS"></a>

#### LINES_AND_MARKERS *= 'LinesAndMarkers'*

<a id="ansys.grantami.core._mi_value_classes.GraphDecoration.MARKERS"></a>

#### MARKERS *= 'Markers'*

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView"></a>

### *class* FunctionalSeriesPointTableView

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView.column_headers"></a>

#### *property* column_headers

Column headers including units.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView.data_by_column"></a>

#### *property* data_by_column *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[None](https://docs.python.org/3/library/constants.html#None)]]*

View of the attribute value in a dictionary format.

This is a view of the attribute value data. Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[None]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional
parameter `Temperature`:

```pycon
>>> ranged_functional_attribute.value = (
...     SeriesRange(
...         x=(1.0, 2.0, 3.0),
...         y_low=(10.0, 20.0, 30.0),
...         y_high=(11.0, 21.0, 31.0),
...         parameters=(SeriesParameterValue("Temperature", 25.0),),
...         is_estimated=(False, True, False),
...     ),
... )
>>> ranged_functional_attribute.table_view.data_by_column  
{'Y min (Stress-Strain (Ranged) [MPa])': [10.0, 20.0, 30.0],
'Y max (Stress-Strain (Ranged) [MPa])': [11.0, 21.0, 31.0],
'Strain [% strain]': [1.0, 2.0, 3.0],
'Temperature [°C]': [25.0, 25.0, 25.0],
'Estimated point?': [False, True, False]}
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView.parameter_column_index"></a>

#### *property* parameter_column_index *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]*

Mapping of parameter names to index in the [`column_headers`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView.column_headers).

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView.table_view"></a>

#### *property* table_view *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)]]*

Value returned by [`AttributeFunctionalSeriesPoint.value`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.value) in Scripting Toolkit versions earlier than 5.0.

Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or [bool](https://docs.python.org/3/library/functions.html#bool) or None]]

### Examples

For a functional attribute named `Stress-Strain`, with an X-axis of `Strain` and an additional parameter
`Temperature`:

```pycon
>>> functional_attribute: AttributeFunctionalSeriesPoint
>>> functional_attribute.value = (
...     SeriesPoint(x=(0.0, 1.0, 2.0), y=(900.0, 1210.0, 1250.0), parameters=(SeriesParameterValue("Temperature", 25.0),)),
... )
>>> functional_attribute.table_view.table_view  
[['Y min (Stress-Strain [MPa])', 'Y max (Stress-Strain [MPa])', 'Strain [% strain]', 'Temperature [°C]', 'Estimated point?'],
[900.0, 900.0, 0.0, 25.0, False],
[1210.0, 1210.0, 1.0, 25.0, False],
[1250.0, 1250.0, 2.0, 25.0, False]]
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView.table_view_with_series_number"></a>

#### *property* table_view_with_series_number *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None) | [int](https://docs.python.org/3/library/functions.html#int)]]*

Table view of the attribute value as a list of points, including the series number.

Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or [bool](https://docs.python.org/3/library/functions.html#bool) or None or [int](https://docs.python.org/3/library/functions.html#int)]]

### Examples

For a functional attribute named `Stress-Strain`, with an X-axis of `Strain` and an additional parameter
`Temperature`:

```pycon
>>> functional_attribute: AttributeFunctionalSeriesPoint
>>> functional_attribute.value = (
...     SeriesPoint(x=(0.0, 1.0, 2.0), y=(900.0, 1210.0, 1250.0), parameters=(SeriesParameterValue("Temperature", 25.0),)),
... )
>>> functional_attribute.table_view.table_view_with_series_number  
[['Y min (Stress-Strain [MPa])', 'Y max (Stress-Strain [MPa])', 'Strain [% strain]', 'Temperature [°C]', 'Estimated point?', 'Series number'],
[900.0, 900.0, 0.0, 25.0, False, 1],
[1210.0, 1210.0, 1.0, 25.0, False, 1],
[1250.0, 1250.0, 2.0, 25.0, False, 1]]
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView"></a>

### *class* FunctionalSeriesRangeTableView

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView.column_headers"></a>

#### *property* column_headers

Column headers including units.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView.data_by_column"></a>

#### *property* data_by_column *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[None](https://docs.python.org/3/library/constants.html#None)]]*

View of the attribute value in a dictionary format.

This is a view of the attribute value data. Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[None]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional
parameter `Temperature`:

```pycon
>>> ranged_functional_attribute.value = (
...     SeriesRange(
...         x=(1.0, 2.0, 3.0),
...         y_low=(10.0, 20.0, 30.0),
...         y_high=(11.0, 21.0, 31.0),
...         parameters=(SeriesParameterValue("Temperature", 25.0),),
...         is_estimated=(False, True, False),
...     ),
... )
>>> ranged_functional_attribute.table_view.data_by_column  
{'Y min (Stress-Strain (Ranged) [MPa])': [10.0, 20.0, 30.0],
'Y max (Stress-Strain (Ranged) [MPa])': [11.0, 21.0, 31.0],
'Strain [% strain]': [1.0, 2.0, 3.0],
'Temperature [°C]': [25.0, 25.0, 25.0],
'Estimated point?': [False, True, False]}
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView.parameter_column_index"></a>

#### *property* parameter_column_index *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]*

Mapping of parameter names to index in the [`column_headers`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView.column_headers).

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView.table_view"></a>

#### *property* table_view *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)]]*

Value returned by [`AttributeFunctionalSeriesRange.value`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.value) in Scripting Toolkit versions earlier than 5.0.

Modifying the returned value has no effect on the attribute value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or [bool](https://docs.python.org/3/library/functions.html#bool) or None]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional parameter
`Temperature`:

```pycon
>>> ranged_functional_attribute: AttributeFunctionalSeriesRange
>>> ranged_functional_attribute.value = (
...     SeriesRange(
...         x=(0.0, 1.0, 2.0),
...         y_low=(900.0, 1210.0, 1250.0),
...         y_high=(910.0, 1220.0, 1260.0),
...         parameters=(SeriesParameterValue("Temperature", 25.0),)
...     ),
... )
>>> ranged_functional_attribute.table_view.table_view  
[['Y min (Stress-Strain (Ranged) [MPa])', 'Y max (Stress-Strain (Ranged) [MPa])', 'Strain [% strain]', 'Temperature [°C]', 'Estimated point?'],
[900.0, 910.0, 0.0, 25.0, False],
[1210.0, 1220.0, 1.0, 25.0, False],
[1250.0, 1260.0, 2.0, 25.0, False]]
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView.table_view_with_series_number"></a>

#### *property* table_view_with_series_number *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None) | [int](https://docs.python.org/3/library/functions.html#int)]]*

Table view of the attribute value as a list of points, including the series number.

Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or [bool](https://docs.python.org/3/library/functions.html#bool) or None or [int](https://docs.python.org/3/library/functions.html#int)]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional
parameter `Temperature`:

```pycon
>>> ranged_functional_attribute: AttributeFunctionalSeriesRange
>>> ranged_functional_attribute.value = (
...     SeriesRange(
...         x=(0.0, 1.0, 2.0),
...         y_low=(900.0, 1210.0, 1250.0),
...         y_high=(910.0, 1220.0, 1260.0),
...         parameters=(SeriesParameterValue("Temperature", 25.0),)
...     ),
... )
>>> ranged_functional_attribute.table_view.table_view_with_series_number  
[['Y min (Stress-Strain (Ranged) [MPa])', 'Y max (Stress-Strain (Ranged) [MPa])', 'Strain [% strain]', 'Temperature [°C]', 'Estimated point?', 'Series number'],
[900.0, 910.0, 0.0, 25.0, False, 1],
[1210.0, 1220.0, 1.0, 25.0, False, 1],
[1250.0, 1260.0, 2.0, 25.0, False, 1]]
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView"></a>

### *class* FunctionalGridPointTableView

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView.column_headers"></a>

#### *property* column_headers

Column headers including units.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView.data_by_column"></a>

#### *property* data_by_column *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[None](https://docs.python.org/3/library/constants.html#None)]]*

View of the attribute value in a dictionary format.

This is a view of the attribute value data. Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[None]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional
parameter `Temperature`:

```pycon
>>> ranged_functional_attribute.value = (
...     SeriesRange(
...         x=(1.0, 2.0, 3.0),
...         y_low=(10.0, 20.0, 30.0),
...         y_high=(11.0, 21.0, 31.0),
...         parameters=(SeriesParameterValue("Temperature", 25.0),),
...         is_estimated=(False, True, False),
...     ),
... )
>>> ranged_functional_attribute.table_view.data_by_column  
{'Y min (Stress-Strain (Ranged) [MPa])': [10.0, 20.0, 30.0],
'Y max (Stress-Strain (Ranged) [MPa])': [11.0, 21.0, 31.0],
'Strain [% strain]': [1.0, 2.0, 3.0],
'Temperature [°C]': [25.0, 25.0, 25.0],
'Estimated point?': [False, True, False]}
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView.parameter_column_index"></a>

#### *property* parameter_column_index *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]*

Mapping of parameter names to index in the [`column_headers`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView.column_headers).

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView.table_view"></a>

#### *property* table_view *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)]]*

Value returned by [`AttributeFunctionalGridPoint.value`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.value) in Scripting Toolkit versions earlier than 5.0.

Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or [bool](https://docs.python.org/3/library/functions.html#bool) or None]]

### Examples

For a functional attribute named `Stress-Strain`, with an X-axis of `Strain` and an additional parameter
`Temperature`:

```pycon
>>> gridded_functional_attribute: AttributeFunctionalGridPoint
>>> gridded_functional_attribute.value = GridPoint(
...     x=(0.0, 1.0, 2.0, 0.0, 1.0, 2.0),
...     y=(900.0, 1210.0, 1250.0, 895.0, 1205.0, 1245.0),
...     parameters=(GridParameterValues("Temperature", (25.0, 25.0, 25.0, 100.0, 100.0, 100.0)),)
... )
>>> gridded_functional_attribute.table_view.table_view  
[['Y min (Stress-Strain [MPa])',
  'Y max (Stress-Strain [MPa])',
  'Strain [% strain]',
  'Temperature [°C]',
  'Estimated point?'],
[900.0, 900.0, 0.0, 25.0, False],
[1210.0, 1210.0, 1.0, 25.0, False],
[1250.0, 1250.0, 2.0, 25.0, False],
[895.0, 895.0, 0.0, 100.0, False],
[1205.0, 1205.0, 1.0, 100.0, False],
[1245.0, 1245.0, 2.0, 100.0, False]]
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView"></a>

### *class* FunctionalGridRangeTableView

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView.column_headers"></a>

#### *property* column_headers

Column headers including units.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView.data_by_column"></a>

#### *property* data_by_column *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)], [list](https://docs.python.org/3/library/stdtypes.html#list)[[None](https://docs.python.org/3/library/constants.html#None)]]*

View of the attribute value in a dictionary format.

This is a view of the attribute value data. Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[float](https://docs.python.org/3/library/functions.html#float)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)] or [list](https://docs.python.org/3/library/stdtypes.html#list)[None]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional
parameter `Temperature`:

```pycon
>>> ranged_functional_attribute.value = (
...     SeriesRange(
...         x=(1.0, 2.0, 3.0),
...         y_low=(10.0, 20.0, 30.0),
...         y_high=(11.0, 21.0, 31.0),
...         parameters=(SeriesParameterValue("Temperature", 25.0),),
...         is_estimated=(False, True, False),
...     ),
... )
>>> ranged_functional_attribute.table_view.data_by_column  
{'Y min (Stress-Strain (Ranged) [MPa])': [10.0, 20.0, 30.0],
'Y max (Stress-Strain (Ranged) [MPa])': [11.0, 21.0, 31.0],
'Strain [% strain]': [1.0, 2.0, 3.0],
'Temperature [°C]': [25.0, 25.0, 25.0],
'Estimated point?': [False, True, False]}
```

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView.parameter_column_index"></a>

#### *property* parameter_column_index *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]*

Mapping of parameter names to index in the [`column_headers`](#ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView.column_headers).

* **Return type:**
  [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [int](https://docs.python.org/3/library/functions.html#int)]

<a id="ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView.table_view"></a>

#### *property* table_view *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [float](https://docs.python.org/3/library/functions.html#float) | [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)]]*

Value returned by [`AttributeFunctionalGridRange.value`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.value) by pre-v5.0 Scripting Toolkit versions.

Modifying the view has no effect on the underlying attribute value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) or [float](https://docs.python.org/3/library/functions.html#float) or [bool](https://docs.python.org/3/library/functions.html#bool) or None]]

### Examples

For a functional attribute named `Stress-Strain (Ranged)`, with an X-axis of `Strain` and an additional parameter
`Temperature`:

```pycon
>>> gridded_ranged_functional_attribute: AttributeFunctionalGridRange
>>> gridded_ranged_functional_attribute.value = GridRange(
...     x=(0.0, 1.0, 2.0, 0.0, 1.0, 2.0),
...     y_low=(900.0, 1210.0, 1250.0, 895.0, 1205.0, 1245.0),
...     y_high=(910.0, 1220.0, 1260.0, 905.0, 1215.0, 1255.0),
...     parameters=(GridParameterValues("Temperature", (25.0, 25.0, 25.0, 100.0, 100.0, 100.0)),)
... )
>>> gridded_ranged_functional_attribute.table_view.table_view  
[['Y min (Stress-Strain (Ranged) [MPa])',
  'Y max (Stress-Strain (Ranged) [MPa])',
  'Strain [% strain]',
  'Temperature [°C]',
  'Estimated point?'],
[900.0, 910.0, 0.0, 25.0, False],
[1210.0, 1220.0, 1.0, 25.0, False],
[1250.0, 1260.0, 2.0, 25.0, False],
[895.0, 905.0, 0.0, 100.0, False],
[1205.0, 1215.0, 1.0, 100.0, False],
[1245.0, 1255.0, 2.0, 100.0, False]]
```

<a id="api-guide-misc-misc-attribute-values"></a>

<a id="miscellaneous-attribute-values"></a>

## Miscellaneous attribute values

<a id="unsupported-type"></a>

<a id="ansys.grantami.core.mi_attribute_value_classes.UnsupportedType"></a>

### *class* UnsupportedType

Represents a data type that is unsupported. No information about the value of the Attribute or the
Tabular Cell is available. Properties of this object cannot
be edited.
