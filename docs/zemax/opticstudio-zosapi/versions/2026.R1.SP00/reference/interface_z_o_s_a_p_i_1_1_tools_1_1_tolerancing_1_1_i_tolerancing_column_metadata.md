# Interface ZOSAPI::Tools::Tolerancing::ITolerancingColumnMetadata

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata"></a>

![][C#]
![][public]

**Definition**:


**Inherited by**:

* [ZOSAPI.Tools.Tolerancing.ITolerancingOperandMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_operand_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_operand_metadata)

## Members

* [AsTeziData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a53ba2fcb9c9385043213f84658f6b627)
* [GetOperandType](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a90b4774f4d896f77a8d36110360d3b56)
* [GetParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a954dd1270f990a7c57c92dd55f4e6653)
* [IsOperand](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a6a158c3479d650614852dfe6b1fe5f16)
* [Name](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a3b6cbf46767fd86cb66db64cecd497bf)
* [NumberOfParameters](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a14404ff8d604cc036f93a82a6e2ef717)
* [SummaryStatistics](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1af5283fba8104c83078cbf0ef39a828cb)

## Properties

### Property Name

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a3b6cbf46767fd86cb66db64cecd497bf"></a>

![][public]

**Definition**:


```csharp
TolerancingColumnName ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.Name
```


**Return type**: [TolerancingColumnName](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.Name"}]}`
-->

### Property NumberOfParameters

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a14404ff8d604cc036f93a82a6e2ef717"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.NumberOfParameters
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.NumberOfParameters"}]}`
-->

### Property SummaryStatistics

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1af5283fba8104c83078cbf0ef39a828cb"></a>

![][public]

**Definition**:


```csharp
ITolerancingSummaryStatistics ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.SummaryStatistics
```


**Return type**: [ITolerancingSummaryStatistics](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_summary_statistics.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_summary_statistics)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.SummaryStatistics"}]}`
-->

### Property IsOperand

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a6a158c3479d650614852dfe6b1fe5f16"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.IsOperand
```


Gets a value indicating whether this column represents an operand.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.IsOperand"}]}`
-->

## Public functions

### Function GetParameter

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a954dd1270f990a7c57c92dd55f4e6653"></a>

![][public]


```csharp
ITolerancingParameter ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.GetParameter(int index)
```


Gets a parameter at the given _index_ .

**Parameters**:

* **index**: The 0-based index of the parameter.


**Returns**:

The parameter at the given index, if the value of _index_  is valid.


**Exceptions**:

* **ArgumentOutOfRangeException**: Thrown when _index_  is invalid (i.e., when _index_ <0 or _index_ >=NumberOfParameters).


**Parameters**:

* int **index**

**Return type**: [ITolerancingParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_parameter)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.GetParameter"}]}`
-->

### Function GetOperandType

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a90b4774f4d896f77a8d36110360d3b56"></a>

![][public]


```csharp
TolerancingOperand ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.GetOperandType()
```


**Return type**: [TolerancingOperand](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.GetOperandType"}]}`
-->

### Function AsTeziData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata_1a53ba2fcb9c9385043213f84658f6b627"></a>

![][public]


```csharp
ITeziData ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.AsTeziData()
```


**Return type**: [ITeziData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tezi_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tezi_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancingColumnMetadata.AsTeziData"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
