# Streamlined API structure

<a id="streamlined-api-structure"></a>

<a id="session"></a>

## [Session](../streamlined_api/session.md)

Includes [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) and [`SessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder) classes.

The [`SessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder) class is used to specify Granta MI connection information, and returns a [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session)
object once the connection to the server is complete.

The [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) object acts as the root object from which most other Streamlined API objects are spawned, and is
typically used to:

* Get [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) objects, which can be used to access [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) and [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) objects.
* Perform text searches across all records on the server with the [`Session.search_for_records_by_text()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.search_for_records_by_text) and
  [`Session.search_for_records_by_name()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.search_for_records_by_name) methods.
* Write changes to the Granta MI server with the [`Session.update()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.update) and [`Session.update_links()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.update_links) methods.
* Perform bulk activities across multiple records, optionally in different databases and tables.

<a id="database-and-table"></a>

## [Database](../streamlined_api/database.md) and [Table](../streamlined_api/table.md)

Includes the [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) and [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) classes.

The [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) class represents Granta MI databases. [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) objects are typically obtained by using
the [`Session.get_db()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.get_db) method.

The [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) class represents Granta MI tables. [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) objects are typically obtained by using the
[`Database.get_table()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.get_table) method.

[`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) and [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) objects are used to:

* Get [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) objects from a [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) object based on their location in the record tree.
* Get [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) objects from a [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) or [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) object by text, record name, or attribute
  value searching.
* Access schema information, such as [`mi_meta_classes.TableLayout`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.TableLayout) and
  [`mi_meta_classes.LinkGroupDetails`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.LinkGroupDetails) objects.

<a id="record"></a>

## [Record](../streamlined_api/record.md)

Includes the [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) class.

The [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) class represents Granta MI records.

[`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record) objects are used to:

* Access and modify data stored in attributes via the [`Record.attributes`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.attributes) dictionary.
* Access and modify properties of the record, such as [`Record.name`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.name) and [`Record.color`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.color)
* Access links via the [`Record.links`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.links) dictionary, and modify them with the [`Record.set_links()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.set_links) method.
* Copy and move the record with the [`Record.copy_to()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.copy_to) and [`Record.move_to()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.move_to) methods.

<a id="attribute-definitions"></a>

## [Attribute definitions](../streamlined_api/attribute-definitions.md)

Includes the [`PseudoAttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition) and [`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class, and all
[`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) sub-classes. The [`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) class is subclassed according to the
hierarchy described below:

* [`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) (no objects are direct instances of this type)
  * [`AttributeDefinitionDate`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDate)
  * [`AttributeDefinitionDiscrete`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscrete)
  * [`AttributeDefinitionFile`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFile)
  * [`AttributeDefinitionHyperlink`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionHyperlink)
  * [`AttributeDefinitionInteger`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionInteger)
  * [`AttributeDefinitionLogical`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionLogical)
  * [`AttributeDefinitionLongText`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionLongText)
  * [`AttributeDefinitionPicture`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPicture)
  * [`AttributeDefinitionRange`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange)
  * [`AttributeDefinitionShortText`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionShortText)
  * [`AttributeDefinitionTabular`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular)
  * [`AttributeDefinitionMultiValue`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionMultiValue) (no objects are direct instances of this type)
    * [`AttributeDefinitionFloatFunctional`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional)
    * [`AttributeDefinitionPoint`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint)
  * [`AttributeDefinitionUnsupported`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionUnsupported) (no objects are direct instances of this type)
    * [`AttributeDefinitionDiscreteFunctional`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscreteFunctional)

These [`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) classes represent the *definition* of an attribute on a Granta MI server, as opposed
to an instance of an attribute which contains data. They are not associated with a particular record, only with the
table that they are defined in.

[`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) objects are used to access the attribute name, attribute unit, and additional schema-level
configuration based on the type of the attribute.

[`PseudoAttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition) objects can generally be used in place of [`AttributeDefinition`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) objects to
search or export pseudo-attributes.

<a id="attribute-values"></a>

## [Attribute values](../streamlined_api/attribute-values.md)

Includes the [`AttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class and all sub-classes. The
[`AttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class is subclassed according to the hierarchy
described below:

* [`AttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue): Base class for all attributes
  * [`AttributeBinary`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeBinary): Parent class for binary attributes (no objects are direct instances of this type)
    * [`AttributePicture`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture): Picture data
    * [`AttributeFile`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile): File data
  * [`AttributeDate`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate): Datetime data
  * [`AttributeDiscrete`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete): Parent class for discrete attributes (no objects are direct instances of this type)
    * [`AttributeDiscreteSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle): Single-valued discrete data
    * [`AttributeDiscreteMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti): Multi-valued discrete data
  * [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint): Float functional series data
  * [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange): Ranged float functional series data
  * [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint): Float functional gridded data
  * [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange): Ranged float functional gridded data
  * [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink): Hyperlink data
  * [`AttributeInteger`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeInteger): Integer data
  * [`AttributeLogical`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeLogical): Logical data
  * [`AttributePoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePoint): Parent class for point attributes (no objects are direct instances of this type)
    * [`AttributePointSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle): Single-valued point data
    * [`AttributePointMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti): Multi-valued point data
  * [`AttributeRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange): Range data
  * [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular): [Tabular data](#tabular-attribute-values)
  * [`AttributeShortText`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeShortText): Short text data
  * [`AttributeLongText`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeLongText): Long text data
  * [`AttributeUnsupported`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported): Unsupported data
  * [`PseudoAttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue): Pseudo-attribute value class covering all pseudo-attribute types

These [`AttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) classes are analogous to the attribute
definition classes, but represent attribute *values*. They are associated with both the table and record that they
relate to. In addition to being able to access the attribute name and attribute unit, they can be used to access data
values (if the attribute is populated for the associated record).

<a id="schema-and-supporting-items"></a>

## [Schema and supporting items](../streamlined_api/supporting.md)

Includes:

* The [Schema](../streamlined_api/supporting.md#api-guide-misc-schema) section. Includes classes used to describe aspects of a database schema.
* The [Parameters](../streamlined_api/supporting.md#api-guide-misc-parameters) section. Includes classes used to describe parameters at all levels of the Granta
  MI object hierarchy.
* The [Item history](../streamlined_api/supporting.md#api-guide-misc-object-history) section. Includes classes used to describe revision information of
  items within a Granta MI database.
* The [`SearchCriterion`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion) class. Used to specify search criteria when searching for records by pseudo-attribute
  value.

Also includes sections describing classes used with specific types of attribute values. These contain similar
information to the corresponding [`AttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) classes, but
are not directly associated with a record.

* [Media attribute values](../streamlined_api/supporting.md#api-guide-misc-media-attribute-values): File and picture attribute values.
* [Numeric attribute values](../streamlined_api/supporting.md#api-guide-misc-numeric-attribute-values): Multi-valued point attributes and precision information.
* [Functional attribute values](../streamlined_api/supporting.md#api-guide-misc-functional-attribute-values): Float functional series and float functional grid attribute values.

<a id="tabular-attribute-values"></a>

<a id="tabular-attribute-value-items"></a>

## [Tabular attribute value items](../streamlined_api/tabular.md)

<a id="tabular-rows"></a>

### Tabular rows

A tabular attribute consists of zero or more rows, each represented by a
[`TabularRow`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow) object. This provides access to individual cells, either as a tuple via
the [`cells`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) property, or by using the
[`cells_by_column`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) property as a mapping from column names to cell values.

<a id="tabular-cells"></a>

### Tabular cells

Cells within a tabular row are represented by specific cell value classes, depending on the type of data stored in the
cell. These classes include:

* The [`ShortTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.ShortTextValue) class, which describes a short text cell, and
  includes the text value.
* The [`LongTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LongTextValue) class, which describes a long text cell, and
  includes the text value.
* The [`LogicalValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LogicalValue) class, which describes a logical cell, and includes
  the boolean value.
* The [`IntegerValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.IntegerValue) class, which describes an integer cell, and includes
  the integer value.
* The [`DateValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.DateValue) class, which describes a date cell, and includes the
  date value.
* The [`PictureValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.PictureValue) class, which describes a binary data cell, and includes
  the binary data, URL, and MIME file type. This class also enables saving the picture to a file.
* The [`FileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) class, which describes a file cell, and includes
  the binary data, URL, MIME file type, file name, and description. This class also enables saving the file.
* The [`PointValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.PointValue) class, which describes a Point cell, and includes the
  attribute’s value and associated unit.
  Note that tabular cells can only contain a single point value, and are not associated with parameters.
* The [`RangeValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.RangeValue) class, which describes a Range cell, and includes the
  value, inclusivity, and associated unit.
* The [`DiscreteValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.DiscreteValue) class, which describes a Discrete cell, and includes
  the value and the order.
* The [`HyperlinkValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue) class, which describes a Hyperlink cell, and
  includes URL, target, and description.

Each of these classes has a corresponding Local cell version which is mutable, this allows local cell data to be set.
Some of these local versions have additional properties to simplify working with them. These are:

* The [`LocalShortTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalShortTextValue) class is a mutable short text cell which allows local cell data to be set.
* The [`LocalLongTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalLongTextValue) class is a mutable long text cell which allows local cell data to be set.
* The [`LocalLogicalValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalLogicalValue) class is a mutable logical cell which allows local cell data to be set.
* The [`LocalIntegerValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalIntegerValue) class is a mutable integer cell which allows local cell data to be set.
* The [`LocalDateValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalDateValue) class is a mutable date cell which allows local cell data to be set.
* The [`LocalPictureValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue) class is a mutable binary data cell which allows local cell data to be set and
  includes methods for loading binary data from files.
* The [`LocalFileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue) class is a mutable file cell which allows local cell data to be set and
  includes methods for loading file data with file name and description properties.
* The [`LocalPointValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalPointValue) class exposes the `default_unit` property, which returns the
  default unit for the point value as defined for the column in the attribute definition.
* The [`LocalRangeValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue) class exposes the `default_unit` property, which returns the
  default unit for the range value as defined for the column in the attribute definition.
* The [`LocalDiscreteValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue) class exposes the `possible_discrete_values` property,
  which returns the possible discrete values for the column in the attribute definition.
* The [`LocalHyperlinkValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue) exposes no additional properties.

Functional cells are not supported in tabular attributes, and are represented as [`UnsupportedType`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.UnsupportedType) objects.
As an alternative, linked records for each row can be accessed [`AttributeTabular.linked_records`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.linked_records) and the
functional data can be exported for these records.

<a id="destructive-editing"></a>

### Destructive editing

Since v5.0, Scripting Toolkit will always try to update tabular attribute values via an update operation, by only
updating the modified cells and leaving the tabular rows and unmodified cells in place. However, there are some tabular
data modifications which cannot be performed as an update operation, and instead the tabular value must be completely
re-created. This is referred to as ‘destructive editing’.

Destructive editing should be avoided because:

* This can be slow for attributes with File or Picture attributes, especially if many rows are present.
* Users of Data Updater will face conflicts when applying subsequent updates.

The following actions cause destructive editing, because they can only be accomplished by re-creating the tabular
attribute value:

* [`AttributeTabular.swap_rows()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.swap_rows)
* [`TabularRow.set_linking_value()`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.set_linking_value) for an exported row

By default, using one of these methods will raise a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) to inform the user that a destructive action
has been performed. To allow the destructive action, first call the method
[`enable_destructive_editing()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing). See the API guide for more details,
including additional considerations when performing destructive editing with binary data.

Destructive editing may also be forced for a tabular attribute by calling [`force_destructive_editing()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.force_destructive_editing) before
importing the data.
