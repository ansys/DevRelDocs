# Streamlined API structure

<a id="streamlined-api-structure"></a>

The Streamlined [Streamlined API reference](./../api/index.md) documents all the classes and functions that make up the
interface, and is split up into sections which represent the different logical components of the Streamlined API. These
logical components are described in the sections below:

<a id="session-object"></a>

## Session object

The [Session](./../api/session.md) section documents the [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class. The [`Session`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class is instantiated by
specifying Granta MI connection information, and the returned object represents a connection to the server. It acts as
the root object from which most other Streamlined API objects are spawned, and is typically used to:

* Get [`Database`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) objects, which can be used to access [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) and [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects.
* Perform text searches across all records on the server with the [`Session.search_for_records_by_text()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text) and
  [`Session.search_for_records_by_name()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_name) methods.
* Write changes to the Granta MI server with the [`Session.update()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) and [`Session.update_links()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update_links) methods.

This section also documents other classes which perform bulk activities across multiple records in different databases
and tables.

<a id="database-and-table-classes"></a>

## Database and table classes

The [Database](./../api/database.md) section documents the [`Database`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) class, which represents Granta MI databases.
[`Database`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) objects are typically obtained by using the [`Session.get_db()`](./../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.get_db) method.

The [Table](./../api/table.md) section documents [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) class, which represents tables on the Granta MI server.
[`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) objects are typically obtained by using the [`Database.get_table()`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.get_table) method.

[`Database`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) and [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) objects are used to:

* Get [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object based on their location in the record tree.
* Get [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects from a [`Database`](./../api/database.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database) or [`Table`](./../api/table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object by text, record name, or attribute
  value searching.
* Access schema information, such as [`mi_meta_classes.TableLayout`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TableLayout) and
  [`mi_meta_classes.LinkGroupDetails`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.LinkGroupDetails) objects.

<a id="record-classes"></a>

## Record classes

The [Record](./../api/record.md) section documents the [`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) class, which represents a record on the Granta MI server.
[`Record`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) objects are used to:

* Access and modify data stored in attributes via the [`Record.attributes`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.attributes) dictionary.
* Access and modify properties of the record, such as [`Record.name`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.name) and [`Record.color`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color)
* Access links via the [`Record.links`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.links) dictionary, and modify them with the [`Record.set_links()`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.set_links) method.
* Copy and move the record with the [`Record.copy_to()`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.copy_to) and [`Record.move_to()`](./../api/record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.move_to) methods.

<a id="attribute-definition-classes"></a>

## Attribute definition classes

The [Attribute definitions](./../api/attribute-definitions.md) section documents the [`AttributeDefinition`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class and all sub-classes.
These classes represent the *definition* of an attribute on a Granta MI server, as opposed to an instance of an
attribute which contains data. They are not associated with a particular record, only with the table that they are
defined in. [`AttributeDefinition`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) classes can be used to access the attribute name, attribute unit, and
additional schema-level configuration based on the type of the attribute.

The [`AttributeDefinition`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) class is subclassed according to the hierarchy described below:

* [`AttributeDefinition`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) (no objects are direct instances of this type)
  * [`AttributeDefinitionDatetime`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDatetime)
  * [`AttributeDefinitionDiscrete`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscrete)
  * [`AttributeDefinitionFile`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFile)
  * [`AttributeDefinitionHyperlink`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionHyperlink)
  * [`AttributeDefinitionInteger`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionInteger)
  * [`AttributeDefinitionLogical`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionLogical)
  * [`AttributeDefinitionLongText`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionLongText)
  * [`AttributeDefinitionPicture`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPicture)
  * [`AttributeDefinitionRange`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionRange)
  * [`AttributeDefinitionShortText`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionShortText)
  * [`AttributeDefinitionTabular`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular)
  * [`AttributeDefinitionMultiValue`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionMultiValue) (no objects are direct instances of this type)
    * [`AttributeDefinitionFloatFunctional`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionFloatFunctional)
    * [`AttributeDefinitionPoint`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint)
  * [`AttributeDefinitionUnsupported`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionUnsupported) (no objects are direct instances of this type)
    * [`AttributeDefinitionDiscreteFunctional`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscreteFunctional)

This section also documents the [`PseudoAttributeDefinition`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) class. Objects of this type can generally be used in
place of [`AttributeDefinition`](./../api/attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) objects to search or export pseudo-attributes.

<a id="attribute-classes"></a>

## Attribute classes

The [Attribute values](./../api/attribute-values.md) section documents the
[`AttributeValue`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class and all sub-classes. These
classes are analogous to the attribute definition classes, but represent attribute *values*. They are associated with
both the table and record that they relate to. In addition to being able to access the attribute name and attribute
unit, they can be used to access data values (if the attribute is populated for the associated record).

The [`AttributeValue`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class is subclassed according to
the hierarchy described below:

* [`AttributeValue`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue): Base class for all attributes
  * [`AttributeBinary`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary): Parent class for binary attributes (no objects are direct instances of this type)
    * [`AttributePicture`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture): Picture data
    * [`AttributeFile`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile): File data
  * [`AttributeDate`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate): Datetime data
  * [`AttributeDiscrete`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete): Discrete data
  * [`AttributeFunctional`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional): Parent class for float functional data (no objects are direct instances of this type)
    * [`FunctionalSeries`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries): Float functional series data
    * [`FunctionalGrid`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid): Float functional gridded data
  * [`AttributeHyperlink`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink): Hyperlink data
  * [`AttributeInteger`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger): Integer data
  * [`AttributeLogical`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLogical): Logical data
  * [`AttributePoint`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint): Point (optionally with parameter) data
  * [`AttributeRange`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange): Range data
  * [`AttributeTabular`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular): Tabular data
  * [`AttributeShortText`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText): Short text data
  * [`AttributeLongText`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLongText): Long text data
  * [`AttributeUnsupported`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported): Unsupported data
  * [`PseudoAttributeValue`](./../api/attribute-values.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue): Pseudo-attribute value class covering all pseudo-attribute types

<a id="sub-attribute-classes"></a>

## Sub-attribute classes

The [Schema and supporting items](./../api/supporting.md) section documents classes that are used by attribute objects but are not attributes
themselves. This includes:

* The [`ParameterDefinition`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) section, which documents the classes used to describe parameters.
* The [`ObjectHistory`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory), [`RecordVersionHistory`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.RecordVersionHistory), and [`DataRevisionHistory`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.DataRevisionHistory) classes, which are used
  to describe revision information of certain items within a Granta MI database.
* The [`Hyperlink`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink) class, which describes a Granta MI hyperlink attribute’s URL, target, and description.
* The [`BinaryType`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType), [`Picture`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture), and [`File`](./../api/supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) classes, which contain binary data, and provide
  methods or saving and loading that data to/from disk.
