# Attribute definitions

<a id="attribute-definitions"></a>

<a id="pseudo-attribute-def"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition"></a>

### *class* PseudoAttributeDefinition

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

Parent [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) the attribute belongs to.

* **Returns:**
  [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object

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

Creates a search criterion for use with [`Table.search_for_records_where()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) or
[`Database.search_for_records_where()`](database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where).
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
  [`SearchCriterion`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.SearchCriterion) object

#### NOTE
To perform an exact search on a discrete attribute, use either the `contains_any` or
`contains_all` parameters. In the case of searching for a single discrete value, the argument
should be a list containing the search term.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition.history"></a>

#### *property* history

Revision history of the attribute, as an [`ObjectHistory`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object.

* **Returns:**
  [`ObjectHistory`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) object

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFile"></a>

### *class* AttributeDefinitionFile

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for file attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionHyperlink"></a>

### *class* AttributeDefinitionHyperlink

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for hyperlink attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger"></a>

### *class* AttributeDefinitionInteger

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for integer attributes.

Provides properties to view the table-wide minimum and maximum values for this attribute.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger.is_unique"></a>

#### *property* is_unique

Whether this attribute is defined as unique.

* **Returns:**
  bool

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionLogical"></a>

### *class* AttributeDefinitionLogical

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for logical attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionLongText"></a>

### *class* AttributeDefinitionLongText

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for long text attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPicture"></a>

### *class* AttributeDefinitionPicture

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for picture attributes.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionShortText"></a>

### *class* AttributeDefinitionShortText

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for short text attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionShortText.is_unique"></a>

#### *property* is_unique

Whether this attribute is defined as unique.

* **Returns:**
  bool

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

[`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object which the linking attribute belongs to. Returns `None` for purely local tabular data
or if the user cannot access the table in Granta MI.

* **Returns:**
  [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_types"></a>

#### *property* column_types

Data type in each column.

Populated for local tabular columns. Empty string for linked columns. [`None`](https://docs.python.org/3/library/constants.html#None) for unavailable columns.

* **Example:**
  `['STXT', 'POIN', 'DISC', '', '']`
* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_histories"></a>

#### *property* column_histories

The revision histories of each column, as an ordered list of [`ObjectHistory`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) objects.

The object history of unavailable columns is `None`. See [`column_targets`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.column_targets).

* **Returns:**
  List[Optional[[`ObjectHistory`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory)]]

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
If the intention is to export, modify, and update tabular data, and [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is
being used for the initial export of data, it is recommended to call [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) with
`include_binary_data = True`.

If [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) is called with `include_binary_data = False`, Picture and File columns **must
not** be removed from the `columns_to_process` list or an exception will be raised when attempting to
re-import the tabular attribute.

It is possible to call [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) with `include_binary_data = False` as long as all Picture
and File columns are set to be processed, but this will have a performance impact. See the
[`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) documentation for more details.

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

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue"></a>

### *class* AttributeDefinitionMultiValue

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for functional and point data attributes.

Provides access to functional data parameters.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue.parameters"></a>

#### *property* parameters

Parameters associated with the attribute, indexed by name.

* **Returns:**
  Dict[str, [`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue.database_unit"></a>

#### *property* database_unit

The database unit for this attribute.

* **Returns:**
  str

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
  Dict[str, [`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

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
  Dict[str, [`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint.unit"></a>

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionUnsupported"></a>

### *class* AttributeDefinitionUnsupported

Extended [`AttributeDefinition`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class for unsupported attribute types (discrete functional).

Provides access to the limited information available for unsupported attribute types (name, type and unit, if
present).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscreteFunctional"></a>

### *class* AttributeDefinitionDiscreteFunctional

Extended [`AttributeDefinitionUnsupported`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionUnsupported) class for discrete functional attributes.

Provides access to the limited information available (name, type and unit, if present).”
