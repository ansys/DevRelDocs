# Interface ZOSAPI::Analysis::Tolerancing::QuickYield::IAS_QYField

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field"></a>

![][C#]
![][public]

**Definition**:

Provides methods for setting and inspecting the field configuration for a Quick Yield analysis.


## Members

* [GetFieldSymmetricXY](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a5de987e6f7f0ae9e594056578aa30bd2)
* [GetFieldSymmetricY](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1ad144b649ec9471bad00baf329278a3dc)
* [GetFieldUser](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a449433076a6c87653395d4a16183d6fa)
* [IsFieldSymmetricXY](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a616c7fd638601a8433a8ba4b4a562ead)
* [IsFieldSymmetricY](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a09df3fe4c410334ddca99698422c39de)
* [IsFieldUser](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a285dd06fe90ef6fb2e88d85b4869f637)
* [SetFieldSymmetricXY](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1ab85750190a475d6b5ef08a6cd3e249e0)
* [SetFieldSymmetricY](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a0b166d20ae9a8cb858704cf7a1021aa7)
* [SetFieldUser](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a5f3097463f9b30a8b57d76bd651acf62)

## Properties

### Property IsFieldUser

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a285dd06fe90ef6fb2e88d85b4869f637"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.IsFieldUser
```


Gets a value indicating whether the field Quick Analysis is configured to use comes from the set of user-defined fields.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.IsFieldUser"}]}`
-->

### Property IsFieldSymmetricXY

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a616c7fd638601a8433a8ba4b4a562ead"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.IsFieldSymmetricXY
```


Gets a value indicating whether the field Quick Analysis is configured to use comes from the set of XY-symmetric fields.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.IsFieldSymmetricXY"}]}`
-->

### Property IsFieldSymmetricY

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a09df3fe4c410334ddca99698422c39de"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.IsFieldSymmetricY
```


Gets a value indicating whether the field Quick Analysis is configured to use comes from the set of Y-symmetric fields.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.IsFieldSymmetricY"}]}`
-->

## Public functions

### Function GetFieldUser

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a449433076a6c87653395d4a16183d6fa"></a>

![][public]


```csharp
int ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.GetFieldUser()
```


Gets a value which specifies the User Defined field the Quick Yield analysis is configured to use.

**Returns**:

The 1-based field number the Quick Yield analysis is configured to use. A value of <code>0</code> means 
* "all fields" when there are at most twelve user-defined fields and 

* "first 12" when there are more than twelve user-defined fields.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.GetFieldUser"}]}`
-->

### Function GetFieldSymmetricXY

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a5de987e6f7f0ae9e594056578aa30bd2"></a>

![][public]


```csharp
XYSymmetricField ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.GetFieldSymmetricXY()
```


Gets a value which specifies the XY-symmetric field the Quick Yield analysis is configured to use.

**Returns**:

The XY-symmetric field the Quick Yield analysis is configured to use.


**Return type**: [XYSymmetricField](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.GetFieldSymmetricXY"}]}`
-->

### Function GetFieldSymmetricY

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1ad144b649ec9471bad00baf329278a3dc"></a>

![][public]


```csharp
YSymmetricField ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.GetFieldSymmetricY()
```


Gets a value which specifies the Y-symmetric field the Quick Yield analysis is configured to use.

**Returns**:

The Y-symmetric field the Quick Yield analysis is configured to use.


**Return type**: [YSymmetricField](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.GetFieldSymmetricY"}]}`
-->

### Function SetFieldUser

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a5f3097463f9b30a8b57d76bd651acf62"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.SetFieldUser(int fieldNumber)
```


Configures the Quick Yield analysis to use a user-defined field.

**Parameters**:

* **fieldNumber**: The (1-based) field number or <code>0</code>. The value <code>0</code> means "All" for a system with at most twelve user-defined fields; it means "First 12" for a system with more than twelve user- defined fields.


**Returns**:

A message indicating the success or failure of the operation. Null indicates success.


**Parameters**:

* int **fieldNumber**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.SetFieldUser"}]}`
-->

### Function SetFieldSymmetricXY

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1ab85750190a475d6b5ef08a6cd3e249e0"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.SetFieldSymmetricXY(XYSymmetricField field)
```


Configures the Quick Yield analysis to use a field from the XY-symmetric set of fields.

**Parameters**:

* **field**: The field to use in the Quick Yield analysis.


**Returns**:

A message indicating the success or failure of the operation. Null indicates success.


**Parameters**:

* [XYSymmetricField](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416) **field**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.SetFieldSymmetricXY"}]}`
-->

### Function SetFieldSymmetricY

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field_1a0b166d20ae9a8cb858704cf7a1021aa7"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.SetFieldSymmetricY(YSymmetricField field)
```


Configures the Quick Yield analysis to use a field from the Y-symmetric set of fields.

**Parameters**:

* **field**: The field to use in the Quick Yield analysis.


**Returns**:

A message indicating the success or failure of the operation. Null indicates success.


**Parameters**:

* [YSymmetricField](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0) **field**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.IAS_QYField.SetFieldSymmetricY"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
