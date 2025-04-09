<a id="sub-attribute-level"></a>

<a id="schema-and-supporting-items"></a>

# Schema and supporting items

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout"></a>

### *class* TableLayout

Provides a JSON-format display of a Granta layout. You can access this through the `layout` property.

#### NOTE
Do not create new instances of this class manually.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout.__init__"></a>

#### \_\_init_\_(name, table)

* **Parameters:**
  * **name** – str
  * **table** – [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object
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

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter"></a>

### *class* Exporter

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.__init__"></a>

#### \_\_init_\_(mi, exporter_key)

Represents a Granta MI FEA exporter. FEA exporters are used to export record data from Granta MI into formats
supported by CAD and CAE packages.

This operation performs no subset filtering, so all tabular rows will be included in the Initial XML
regardless of the subset membership of the linked records.

* **Parameters:**
  * **mi** – Current [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
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
  **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
* **Returns:**
  Dict[str, [`ExporterParameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ExporterParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.run_exporter"></a>

#### run_exporter(records, stop_before=None, parameter_defs=None, sig_figs=None)

Performs an FEA export on the specified list of records, returning the data representing the records as a
string.

* **Parameters:**
  * **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
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
  **records** – List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]
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

<a id="parameter-def"></a>

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
  [`AttributeFunctional.parameters`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.parameters) or [`AttributePoint.parameter_definitions`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.parameter_definitions) properties to
  provide parameter values for import in a different unit.

This property does not impact data export. Attribute parameter values are always exported according to the
[`Database.unit_system`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.unit_system) and [`Database.absolute_temperatures`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.absolute_temperatures) settings.

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
  [`AttributeDefinitionMultiValue`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue)

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory"></a>

### *class* ObjectHistory

Provides access to the revision history of an MI database element. Object histories are currently
supported via the following properties:

> - [`AttributeDefinition.history`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.history)
> - [`AttributeDefinitionTabular.column_histories`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_histories)
> - [`ParameterDefinition.history`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history)
> - [`ParameterDefinition.history_of_default`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.history_of_default)
> - [`ParameterDefinition.values_histories`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.values_histories)
> - [`DataRevisionHistory.history`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory.history)

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory.__init__"></a>

#### \_\_init_\_(\_gdl_revision_info)

* **Parameters:**
  **\_gdl_revision_info** – Foundation API [`GRANTA_MIScriptingToolkit.RevisionInfo`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.RevisionInfo) class
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

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory"></a>

### *class* RecordVersionHistory

Provides access to the revision history of an MI Record.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory.__init__"></a>

#### \_\_init_\_(record_version_history)

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory"></a>

### *class* DataRevisionHistory

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion"></a>

### *class* SearchCriterion

Defines a single criterion for use in a search. The criterion can be as simple as the presence of the
specified attribute, or as complex as the data in a specified column of the tabular attribute being
greater than a specified value. The search will use the same units as the
[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition).

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion.__init__"></a>

#### \_\_init_\_(attribute, operator, value=None, column_name=None)

* **Parameters:**
  * **attribute** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **operator** – str
  * **value** – Input type corresponding to your [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition)
  * **column_name** – str

#### NOTE
To perform an exact search on a discrete attribute, the operator argument should be
either `CONTAINS_ANY` or `CONTAINS_ALL`. In the case of searching for a single discrete
value, the `value` argument should be a list containing the search term.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion.attribute"></a>

#### *property* attribute

[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) for the attribute used in this search criterion.

* **Returns:**
  [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion.operation"></a>

#### *property* operation

Operator used in this criterion, if provided.

* **Example:**
  ‘EXISTS’ or ‘CONTAINS’
* **Returns:**
  str

<a id="hyperlink-type"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink"></a>

### *class* Hyperlink

Represents hyperlinks in MI. Can be used directly in tabular data, or within [`AttributeHyperlink`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink) objects for
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

To populate this property, the [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method must be used with
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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture"></a>

### *class* Picture

Extended [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) class for Pictures in MI.

Pictures of up to 500 MB in size may be stored in Granta MI. To upload pictures larger than 20 Mb using Scripting
Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys technical representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File"></a>

### *class* File

Extended [`BinaryType`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) class for Files in MI.

Files of up to 500 MB in size may be stored in Granta MI. To upload files larger than 20 Mb using Scripting Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys technical representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType"></a>

### *class* UnsupportedType

Represents a data type that is unsupported. No information about the value of the Attribute or the
Tabular Cell is available. However, the object’s data type is available through this class, along
with the underlying object, which may contain more information. Properties of this object cannot
be edited.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType.__init__"></a>

#### \_\_init_\_(datum)

<a id="currency-info"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.CurrencyInfo"></a>

### *class* CurrencyInfo

Stores information about a Currency known to Granta MI.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Human-readable name of the currency.
  * **code** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – str Currency short code, this appears in derived units.
  * **factor** ([*float*](https://docs.python.org/3/library/functions.html#float)) – Conversion factor from USD to this unit.

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.CurrencyInfo.__init__"></a>

#### \_\_init_\_(code, name, factor)

<a id="tabl-units"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits"></a>

### *class* TabularUnits

Stores and provides access to the units for a parent [`AttributeTabular`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object, in the same tabular format as
the data.

Units can be set on a cell-by-cell basis. [`TabularUnits`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) is populated when the parent
[`AttributeTabular`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object is loaded.

Any changes made to the underlying [`AttributeTabular.value()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) property must also be made to the corresponding
[`TabularUnits.data()`](#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits.data) and vice versa, or your changes will not import successfully and may be lost
([`AttributeTabular.add_row()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row) and [`AttributeTabular.delete_row()`](attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row) make the necessary changes to both
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
