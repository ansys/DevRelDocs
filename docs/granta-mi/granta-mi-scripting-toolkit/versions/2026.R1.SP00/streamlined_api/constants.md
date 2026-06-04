# Constants

<a id="constants"></a>

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties"></a>

### *class* RecordProperties

Provides [`PseudoAttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition) for every supported pseudo-attribute.

Attribute names match the corresponding property on [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record).

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.all"></a>

#### *classmethod* all()

All pseudo-attribute definitions.

* **Return type:**
  list[[`PseudoAttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.PseudoAttributeDefinition)]

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.color"></a>

#### color *= <PseudoAttributeDefinition name: recordColor, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.created_by"></a>

#### created_by *= <PseudoAttributeDefinition name: creator, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.created_on"></a>

#### created_on *= <PseudoAttributeDefinition name: createdDate, type: TIDT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.history_identity"></a>

#### history_identity *= <PseudoAttributeDefinition name: recordHistoryIdentity, type: INPT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.is_writable"></a>

#### is_writable *= <PseudoAttributeDefinition name: writable, type: LOGI>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.last_modified_by"></a>

#### last_modified_by *= <PseudoAttributeDefinition name: lastModifier, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.last_modified_on"></a>

#### last_modified_on *= <PseudoAttributeDefinition name: modifiedDate, type: TIDT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.name"></a>

#### name *= <PseudoAttributeDefinition name: name, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.parent_record_history_identity"></a>

#### parent_record_history_identity *= <PseudoAttributeDefinition name: parentRecordHistoryIdentity, type: INPT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.parent_record_name"></a>

#### parent_record_name *= <PseudoAttributeDefinition name: parentName, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.parent_record_short_name"></a>

#### parent_record_short_name *= <PseudoAttributeDefinition name: parentShortName, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.released_on"></a>

#### released_on *= <PseudoAttributeDefinition name: releasedDate, type: TIDT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.short_name"></a>

#### short_name *= <PseudoAttributeDefinition name: shortName, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.subsets"></a>

#### subsets *= <PseudoAttributeDefinition name: subsets, type: DISC>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.table_name"></a>

#### table_name *= <PseudoAttributeDefinition name: tableName, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.type"></a>

#### type *= <PseudoAttributeDefinition name: recordType, type: STXT>*

<a id="ansys.grantami.core.mi_attribute_classes.RecordProperties.version_number"></a>

#### version_number *= <PseudoAttributeDefinition name: recordVersionNumber, type: INPT>*

<a id="ansys.grantami.core.mi_constants.RecordColor"></a>

### *class* RecordColor(value)

<a id="ansys.grantami.core.mi_constants.RecordColor.Red"></a>

#### Red *= 0*

<a id="ansys.grantami.core.mi_constants.RecordColor.Maroon"></a>

#### Maroon *= 1*

<a id="ansys.grantami.core.mi_constants.RecordColor.Fuchsia"></a>

#### Fuchsia *= 2*

<a id="ansys.grantami.core.mi_constants.RecordColor.Yellow"></a>

#### Yellow *= 3*

<a id="ansys.grantami.core.mi_constants.RecordColor.Black"></a>

#### Black *= 4*

<a id="ansys.grantami.core.mi_constants.RecordColor.Gray"></a>

#### Gray *= 5*

<a id="ansys.grantami.core.mi_constants.RecordColor.Aqua"></a>

#### Aqua *= 6*

<a id="ansys.grantami.core.mi_constants.RecordColor.Green"></a>

#### Green *= 7*

<a id="ansys.grantami.core.mi_constants.RecordColor.Navy"></a>

#### Navy *= 8*

<a id="ansys.grantami.core.mi_constants.RecordColor.Purple"></a>

#### Purple *= 9*

<a id="ansys.grantami.core.mi_constants.RecordColor.Blue"></a>

#### Blue *= 10*

<a id="ansys.grantami.core.mi_constants.RecordColor.Silver"></a>

#### Silver *= 11*

<a id="ansys.grantami.core.mi_constants.RecordColor.Lime"></a>

#### Lime *= 12*

<a id="ansys.grantami.core.mi_constants.RecordColor.Olive"></a>

#### Olive *= 13*

<a id="ansys.grantami.core.mi_constants.RecordColor.Teal"></a>

#### Teal *= 14*

<a id="ansys.grantami.core.mi_constants.RecordColor.White"></a>

#### White *= 15*

<a id="ansys.grantami.core.mi_constants.RecordColor.InheritFromParent"></a>

#### InheritFromParent *= 16*

<a id="ansys.grantami.core.mi_constants.RecordColor.safe_name"></a>

#### *property* safe_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

<a id="ansys.grantami.core.mi_constants.RecordType"></a>

### *class* RecordType(value)

<a id="ansys.grantami.core.mi_constants.RecordType.Record"></a>

#### Record *= 'Record'*

<a id="ansys.grantami.core.mi_constants.RecordType.Folder"></a>

#### Folder *= 'Folder'*

<a id="ansys.grantami.core.mi_constants.RecordType.Generic"></a>

#### Generic *= 'Generic'*

<a id="ansys.grantami.core.mi_constants.DATABASE_CURRENCY"></a>

### DATABASE_CURRENCY

Value used to refer to the ‘Database currency’

<a id="ansys.grantami.core.mi_constants.DATABASE_UNIT_SYSTEM"></a>

### DATABASE_UNIT_SYSTEM

Value used to refer to the ‘Database unit system’.

<a id="ansys.grantami.core.mi_constants.InterpolationType"></a>

### InterpolationType

alias of [`Literal`](https://docs.python.org/3/library/typing.html#typing.Literal)[‘None’, ‘Linear’, ‘Cubic Spline’]

<a id="ansys.grantami.core.mi_constants.ScaleType"></a>

### ScaleType

alias of [`Literal`](https://docs.python.org/3/library/typing.html#typing.Literal)[‘Linear’, ‘Log’]
