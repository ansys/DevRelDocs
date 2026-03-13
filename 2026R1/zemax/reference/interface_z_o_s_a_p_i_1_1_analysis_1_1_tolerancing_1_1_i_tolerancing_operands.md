# Interface ZOSAPI::Analysis::Tolerancing::ITolerancingOperands

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetOperand](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands_1ad1ac14a4dbb7a32c75c6b9116a4b069d)
* [NumberOfOperands](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands_1aec429baaf19dfdd366cd9a3cc8952c78)
* [Operands](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands_1a496fb179508fe0ca54f10e995beecce5)

## Properties

### Property NumberOfOperands

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands_1aec429baaf19dfdd366cd9a3cc8952c78"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Tolerancing.ITolerancingOperands.NumberOfOperands
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.ITolerancingOperands.NumberOfOperands"}]}`
-->

### Property Operands

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands_1a496fb179508fe0ca54f10e995beecce5"></a>

![][public]

**Definition**:


```csharp
ITolerancingOperand [] ZOSAPI.Analysis.Tolerancing.ITolerancingOperands.Operands
```


**Return type**: [ITolerancingOperand](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.ITolerancingOperands.Operands"}]}`
-->

## Public functions

### Function GetOperand

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands_1ad1ac14a4dbb7a32c75c6b9116a4b069d"></a>

![][public]


```csharp
ITolerancingOperand ZOSAPI.Analysis.Tolerancing.ITolerancingOperands.GetOperand(int operandIndex)
```


Retrieves the specified operand.

**Parameters**:

* **operandIndex**: Operand # (1-NumberOfOperands)


**Returns**:


**Parameters**:

* int **operandIndex**

**Return type**: [ITolerancingOperand](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.ITolerancingOperands.GetOperand"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
