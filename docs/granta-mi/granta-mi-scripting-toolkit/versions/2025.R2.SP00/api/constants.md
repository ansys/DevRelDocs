# Constants

<a id="constants"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties"></a>

### *class* RecordProperties

Provides [`PseudoAttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) for every supported pseudo-attribute.

Attribute names match the corresponding property on [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.name"></a>

#### name *= <PseudoAttributeDefinition name: name, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.short_name"></a>

#### short_name *= <PseudoAttributeDefinition name: shortName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.subsets"></a>

#### subsets *= <PseudoAttributeDefinition name: subsets, type: DISC>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.type"></a>

#### type *= <PseudoAttributeDefinition name: recordType, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.history_identity"></a>

#### history_identity *= <PseudoAttributeDefinition name: recordHistoryIdentity, type: INPT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.color"></a>

#### color *= <PseudoAttributeDefinition name: recordColor, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.version_number"></a>

#### version_number *= <PseudoAttributeDefinition name: recordVersionNumber, type: INPT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.table_name"></a>

#### table_name *= <PseudoAttributeDefinition name: tableName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.is_writable"></a>

#### is_writable *= <PseudoAttributeDefinition name: writable, type: LOGI>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.parent_record_short_name"></a>

#### parent_record_short_name *= <PseudoAttributeDefinition name: parentShortName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.parent_record_name"></a>

#### parent_record_name *= <PseudoAttributeDefinition name: parentName, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.parent_record_history_identity"></a>

#### parent_record_history_identity *= <PseudoAttributeDefinition name: parentRecordHistoryIdentity, type: INPT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.released_on"></a>

#### released_on *= <PseudoAttributeDefinition name: releasedDate, type: TIDT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.last_modified_on"></a>

#### last_modified_on *= <PseudoAttributeDefinition name: modifiedDate, type: TIDT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.created_on"></a>

#### created_on *= <PseudoAttributeDefinition name: createdDate, type: TIDT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.last_modified_by"></a>

#### last_modified_by *= <PseudoAttributeDefinition name: lastModifier, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.created_by"></a>

#### created_by *= <PseudoAttributeDefinition name: creator, type: STXT>*

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.RecordProperties.all"></a>

#### *classmethod* all()

All pseudo-attribute definitions.

* **Return type:**
  List[[PseudoAttributeDefinition](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor"></a>

### *enum* RecordColor(value)

Valid values are as follows:

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Red"></a>

#### Red *= RecordColor.Red*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Maroon"></a>

#### Maroon *= RecordColor.Maroon*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Fuchsia"></a>

#### Fuchsia *= RecordColor.Fuchsia*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Yellow"></a>

#### Yellow *= RecordColor.Yellow*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Black"></a>

#### Black *= RecordColor.Black*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Gray"></a>

#### Gray *= RecordColor.Gray*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Aqua"></a>

#### Aqua *= RecordColor.Aqua*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Green"></a>

#### Green *= RecordColor.Green*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Navy"></a>

#### Navy *= RecordColor.Navy*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Purple"></a>

#### Purple *= RecordColor.Purple*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Blue"></a>

#### Blue *= RecordColor.Blue*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Silver"></a>

#### Silver *= RecordColor.Silver*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Lime"></a>

#### Lime *= RecordColor.Lime*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Olive"></a>

#### Olive *= RecordColor.Olive*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.Teal"></a>

#### Teal *= RecordColor.Teal*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.White"></a>

#### White *= RecordColor.White*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor.InheritFromParent"></a>

#### InheritFromParent *= RecordColor.InheritFromParent*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType"></a>

### *enum* RecordType(value)

* **Member Type:**
  [`str`](https://docs.python.org/3/library/stdtypes.html#str)

Valid values are as follows:

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Record"></a>

#### Record *= RecordType.Record*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Folder"></a>

#### Folder *= RecordType.Folder*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.RecordType.Generic"></a>

#### Generic *= RecordType.Generic*

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_CURRENCY"></a>

### DATABASE_CURRENCY

Value used to refer to the ‘Database currency’

<a id="GRANTA_MIScriptingToolkit.granta.mi_constants.DATABASE_UNIT_SYSTEM"></a>

### DATABASE_UNIT_SYSTEM

Value used to refer to the ‘Database unit system’.
