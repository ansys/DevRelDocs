# Attribute definitions

<a id="attribute-definitions"></a>

<a id="pseudo-attribute-def"></a>

<a id="ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition"></a>

### *class* PseudoAttributeDefinition

Stores basic information about a pseudo-attribute.

* **Parameters:**
  **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the pseudo-attribute.

### Notes

Supported names are:

* `recordType`
* `recordHistoryIdentity`
* `recordColor`
* `recordVersionNumber`
* `tableName`
* `writable`
* `parentShortName`
* `parentName`
* `parentRecordHistoryIdentity`
* `shortName`
* `modifiedDate`
* `createdDate`
* `releasedDate`
* `lastModifier`
* `creator`
* `subsets`
* `name`

* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the name is not a recognized pseudo-attribute name.

<a id="ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition.id"></a>

#### *property* id *: [int](https://docs.python.org/3/library/functions.html#int)*

Attribute identifier.

Always 0 for pseudo-attributes.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the pseudo-attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition.read_only"></a>

#### *property* read_only *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the current user has the correct permissions to edit the attribute.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition.type"></a>

#### *property* type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Data type of the pseudo-attribute (four-character string).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition"></a>

### *class* AttributeDefinition

Base attribute definition class.

Stores basic information about an attribute, such as data type or possible values. Contains information about
the attribute itself, not the data. Cannot be used to set attribute values.

### Notes

Do not create instances of this class, it represents an abstract database structure.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.search_criterion"></a>

#### search_criterion(less_than=None, greater_than=None, contains=None, contains_any=None, contains_all=None, does_not_contain=None, exists=None, equal_to=None, between_dates=None, in_column=None)

Creates a search criterion for use with [`Table.search_for_records_where()`](table.md#ansys.grantami.core.mi_tree_classes.Table.search_for_records_where) or
[`Database.search_for_records_where()`](database.md#ansys.grantami.core.mi_tree_classes.Database.search_for_records_where).

Operator priority is the same as the order of the arguments.

* **Parameters:**
  * **less_than** ([*float*](https://docs.python.org/3/library/functions.html#float) *,* *optional*) – Search for values less than this.
  * **greater_than** ([*float*](https://docs.python.org/3/library/functions.html#float) *,* *optional*) – Search for values greater than this.
  * **contains** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Search for values containing this.
  * **contains_any** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – Search for values containing any of these.
  * **contains_all** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *]* *,* *optional*) – Search for values containing all of these.
  * **does_not_contain** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Search for values not containing this.
  * **exists** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Search for existence of attribute values.
  * **equal_to** ([*int*](https://docs.python.org/3/library/functions.html#int) *or* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Search for values equal to this.
  * **between_dates** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple) *[*[*datetime.date*](https://docs.python.org/3/library/datetime.html#datetime.date) *,* [*datetime.date*](https://docs.python.org/3/library/datetime.html#datetime.date) *]* *,* *optional*) – Two dates in chronological order to search between.
  * **in_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Name of tabular column to search.
* **Return type:**
  [`SearchCriterion`](supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion) or [`None`](https://docs.python.org/3/library/constants.html#None)
* **Raises:**
  * [**AssertionError**](https://docs.python.org/3/library/exceptions.html#AssertionError) – If the criterion type is incompatible with the attribute type.
  * [**AssertionError**](https://docs.python.org/3/library/exceptions.html#AssertionError) – If required parameters are missing.

### Notes

To perform an exact search on a discrete attribute, use either the `contains_any` or `contains_all`
parameters. In the case of searching for a single discrete value, the argument should be a list containing
the search term.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.history"></a>

#### *property* history *: [ObjectHistory](supporting.md#ansys.grantami.core.mi_meta_classes.ObjectHistory)*

Revision history of the attribute.

* **Return type:**
  [`ObjectHistory`](supporting.md#ansys.grantami.core.mi_meta_classes.ObjectHistory)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.id"></a>

#### *property* id *: [int](https://docs.python.org/3/library/functions.html#int)*

Attribute identifier.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.is_meta"></a>

#### *property* is_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute is a meta-attribute or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.is_meta_for"></a>

#### *property* is_meta_for *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Parent attribute name.

* **Returns:**
  Name of the parent attribute, if the attribute is a meta-attribute. Returns [`None`](https://docs.python.org/3/library/constants.html#None) if not a
  meta-attribute.
* **Return type:**
  str or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.meta_attributes"></a>

#### *property* meta_attributes *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeDefinition](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)]*

Meta-attributes associated with this attribute, indexed by name.

* **Return type:**
  dict[str, [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Attribute name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Display order in MI Viewer.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.table"></a>

#### *property* table *: [Table](table.md#ansys.grantami.core.mi_tree_classes.Table)*

Parent [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) the attribute belongs to.

* **Return type:**
  [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinition.type"></a>

#### *property* type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Attribute data type, as a four-character string.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

* Numeric attributes: `POIN` (point), `RNGE` (range), `INPT` (integer).
* Text attributes: `STXT` (short text), `LTXT` (long text), `DISC` (discrete).
* Functional attributes: `FUNC` (float functional).
* Media attributes: `HLNK` (hyperlink), `PICT` (picture), `FILE` (file).
* Other attributes: `LOGI` (logical), `DTTM` (date time), `TABL` (tabular).

`DSFN` (discrete functional) attributes are not fully supported by the MI Scripting Toolkit. Definitions can
be obtained but attribute values are exported as `UNSUPPORTED DATA TYPE` and contain no data.

`MAFN` (maths functional) attribute definitions cannot be obtained via the MI Scripting Toolkit.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate"></a>

### *class* AttributeDefinitionDate

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for date attributes.

Provides properties to view the table-wide minimum and maximum values for this attribute.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate.max"></a>

#### *property* max *: [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [None](https://docs.python.org/3/library/constants.html#None)*

Maximum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  datetime.date or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate.min"></a>

#### *property* min *: [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [None](https://docs.python.org/3/library/constants.html#None)*

Minimum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  datetime.date or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscrete"></a>

### *class* AttributeDefinitionDiscrete

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for discrete attributes.

Provides a method to view the possible discrete values of an attribute.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscrete.discrete_values"></a>

#### *property* discrete_values *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

All possible discrete values of the attribute, in the order defined by the associated discrete type.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscrete.is_multivalued"></a>

#### *property* is_multivalued *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this attribute allows multiple values to be set.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscrete.is_ordered"></a>

#### *property* is_ordered *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the discrete type associated with the discrete attribute is ordered.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFile"></a>

### *class* AttributeDefinitionFile

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for file attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionHyperlink"></a>

### *class* AttributeDefinitionHyperlink

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for hyperlink attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionInteger"></a>

### *class* AttributeDefinitionInteger

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for integer attributes.

Provides properties to view the table-wide minimum and maximum values for this attribute.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionInteger.is_unique"></a>

#### *property* is_unique *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this attribute is defined as unique.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionInteger.max"></a>

#### *property* max *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Maximum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  int or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionInteger.min"></a>

#### *property* min *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Minimum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  int or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionLogical"></a>

### *class* AttributeDefinitionLogical

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for logical attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionLongText"></a>

### *class* AttributeDefinitionLongText

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for long text attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPicture"></a>

### *class* AttributeDefinitionPicture

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for picture attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange"></a>

### *class* AttributeDefinitionRange

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for range attributes.

Provides access to range-specific information and methods.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The database unit for this attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Attribute database unit in the active unit system.

The unit used by MI Viewer or MI Explore to display this attribute in the active unit system. This
property is only affected by the unit system choice, and is not affected by [`Table.set_display_unit()`](table.md#ansys.grantami.core.mi_tree_classes.Table.set_display_unit).

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange.max"></a>

#### *property* max *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Maximum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  float or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange.min"></a>

#### *property* min *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Minimum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  float or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionShortText"></a>

### *class* AttributeDefinitionShortText

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for short text attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionShortText.is_unique"></a>

#### *property* is_unique *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this attribute is defined as unique.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular"></a>

### *class* AttributeDefinitionTabular

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for tabular data attributes.

Provides access to tabular-specific information and methods, such as columns, linking attribute and
cross-table links.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_database_units"></a>

#### *property* column_database_units *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)]*

Database unit symbols for each column.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | None]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_histories"></a>

#### *property* column_histories *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[ObjectHistory](supporting.md#ansys.grantami.core.mi_meta_classes.ObjectHistory) | [None](https://docs.python.org/3/library/constants.html#None)]*

The revision histories of each column.

* **Returns:**
  List of equal length to the number of columns. Each item is either an object history, or [`None`](https://docs.python.org/3/library/constants.html#None) for
  unavailable columns. Use [`column_targets`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_targets) to identify unavailable columns.
* **Return type:**
  list[[`ObjectHistory`](supporting.md#ansys.grantami.core.mi_meta_classes.ObjectHistory) or [`None`](https://docs.python.org/3/library/constants.html#None)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_targets"></a>

#### *property* column_targets *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Column meta-types.

Possible column targets are:

* `Local`: Contains local data..
* `TargetAttribute`: Contains data from a linked attribute.
* `TargetRecord`: Contains the records that the rows link to.
* `TargetTabularColumn`: Contains data from a linked tabular column.
* `Unavailable`: Data cannot be viewed, usually due to version control or permissions.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_types"></a>

#### *property* column_types *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)]*

Data type for each column.

* **Returns:**
  List of equal length to the number of columns. Each item is one of a type codes for local tabular columns,
  an empty string for linked columns, or [`None`](https://docs.python.org/3/library/constants.html#None) for unavailable columns. Use [`column_targets`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_targets) to
  identify unavailable columns.
* **Return type:**
  list[str or [`None`](https://docs.python.org/3/library/constants.html#None)]

### Examples

```pycon
>>> tabular_attribute.column_types  
['STXT', 'POIN', 'DISC', '', '']
```

#### SEE ALSO
[`AttributeDefinition.type`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition.type)
: List of type codes.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_units"></a>

#### *property* column_units *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)]*

Unit symbols for each column.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str) | None]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.columns"></a>

#### *property* columns *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Column names (headers).

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.columns_to_process"></a>

#### *property* columns_to_process *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Columns to be included when populating an AttributeTabular object.

Defaults to all columns, which will fully populate the AttributeTabular object. The content of unprocessed
columns depends on the column type:

* Ignored linked columns contain the value `<Ignored>` in all cells.
* Ignored local tabular columns contain instances of [`IgnoredLocalTabularCell`](tabular.md#ansys.grantami.core._mi_tabular_value_classes.IgnoredLocalTabularCell). These objects contain no
  accessible data, and they cannot be modified.

Ignoring columns that aren’t required by the script can significantly improve performance for operations with
large amounts of tabular data.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

### Notes

This property must be set on the AttributeDefinitionTabular object associated with the Table object
*before* data export for the setting to have an effect.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.discrete_values"></a>

#### *property* discrete_values *: [List](https://docs.python.org/3/library/typing.html#typing.List)[[List](https://docs.python.org/3/library/typing.html#typing.List)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]*

All possible discrete values, for all columns with the discrete data type.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.ignore_linked_records"></a>

#### *property* ignore_linked_records *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether to ignore linked records when creating Record objects.

Defaults to [`False`](https://docs.python.org/3/library/constants.html#False). Even when set to [`True`](https://docs.python.org/3/library/constants.html#True), linking values are still available if populated.

Ignoring linked records if they aren’t required can significantly improve performance for operations with large
amounts of tabular data.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

### Notes

This property must be set on the AttributeDefinitionTabular object associated with the Table object
*before* data export for the setting to have an effect.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.linking_attribute"></a>

#### *property* linking_attribute *: [None](https://docs.python.org/3/library/constants.html#None) | [AttributeDefinition](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)*

Short text-type attribute used to link rows in the tabular data attribute to records.

* **Returns:**
  The attribute definition of the linking attribute. Returns [`None`](https://docs.python.org/3/library/constants.html#None) for purely local tabular data or if the
  user annot access the table in Granta MI.
* **Return type:**
  [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.linking_table"></a>

#### *property* linking_table *: [None](https://docs.python.org/3/library/constants.html#None) | [Table](table.md#ansys.grantami.core.mi_tree_classes.Table)*

[`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) object which the linking attribute belongs to.

* **Returns:**
  The table object that the tabular attribute is linked to. Returns [`None`](https://docs.python.org/3/library/constants.html#None) for purely local tabular data or
  if the user cannot access the table in Granta MI.
* **Return type:**
  [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue"></a>

### *class* AttributeDefinitionMultiValue

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for functional and point data attributes.

Provides access to functional data parameters.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue.parameters"></a>

#### *property* parameters *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeParameter](supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter)]*

Parameters associated with the attribute, indexed by name.

* **Return type:**
  dict[str, [`AttributeParameter`](supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional"></a>

### *class* AttributeDefinitionFloatFunctional

Extended [`AttributeDefinitionMultiValue`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue) class for float functional attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional.axis_name"></a>

#### *property* axis_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Y-axis label.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The database unit for this attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional.parameters"></a>

#### *property* parameters *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeParameter](supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter)]*

Parameters associated with the attribute, indexed by name.

* **Return type:**
  dict[str, [`AttributeParameter`](supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint"></a>

### *class* AttributeDefinitionPoint

Extended [`AttributeDefinitionMultiValue`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue) class for point attributes.

Provides access to point-specific information and methods.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The database unit for this attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Attribute database unit in the active unit system.

The unit used by MI Viewer or MI Explore to display this attribute in the active unit system. This
property is only affected by the unit system choice, and is not affected by [`Table.set_display_unit()`](table.md#ansys.grantami.core.mi_tree_classes.Table.set_display_unit).

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.is_multivalued"></a>

#### *property* is_multivalued *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this attribute allows multiple values to be set.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.max"></a>

#### *property* max *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Maximum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  float or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.min"></a>

#### *property* min *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Minimum value of the data attribute.

Affected by user read permissions.

* **Return type:**
  float or [`None`](https://docs.python.org/3/library/constants.html#None)

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.parameters"></a>

#### *property* parameters *: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeParameter](supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter)]*

Parameters associated with the attribute, indexed by name.

* **Return type:**
  dict[str, [`AttributeParameter`](supporting.md#ansys.grantami.core.mi_attribute_classes.AttributeParameter)]

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionUnsupported"></a>

### *class* AttributeDefinitionUnsupported

Extended [`AttributeDefinition`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class for unsupported attribute types (discrete functional).

Provides access to the limited information available for unsupported attribute types (name, type and unit, if
present).

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscreteFunctional"></a>

### *class* AttributeDefinitionDiscreteFunctional

Extended [`AttributeDefinitionUnsupported`](#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionUnsupported) class for discrete functional attributes.

Provides access to the limited information available (name, type and unit, if present).

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Table.attributes`](table.md#ansys.grantami.core.mi_tree_classes.Table.attributes) to access instances of this class.
