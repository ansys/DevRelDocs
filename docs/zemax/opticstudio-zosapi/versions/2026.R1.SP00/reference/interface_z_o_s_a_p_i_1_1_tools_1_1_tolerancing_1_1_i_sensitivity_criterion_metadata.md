# Interface ZOSAPI::Tools::Tolerancing::ISensitivityCriterionMetadata

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetEffectByOperand](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1ab8f44a90b73e4e42c9cd7bed27472827)
* [Name](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1ac8962281af76a49a9a3bc44590633f27)
* [NominalValue](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1a2a2615a57a0ea5fa16d5b4893609527d)
* [NumberOfOperands](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1a520a62b391ca9de9b09762f4d7007e2b)

## Properties

### Property Name

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1ac8962281af76a49a9a3bc44590633f27"></a>

![][public]

**Definition**:


```csharp
Criterions ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.Name
```


**Return type**: [Criterions](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.Name"}]}`
-->

### Property NominalValue

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1a2a2615a57a0ea5fa16d5b4893609527d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.NominalValue
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.NominalValue"}]}`
-->

### Property NumberOfOperands

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1a520a62b391ca9de9b09762f4d7007e2b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.NumberOfOperands
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.NumberOfOperands"}]}`
-->

## Public functions

### Function GetEffectByOperand

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata_1ab8f44a90b73e4e42c9cd7bed27472827"></a>

![][public]


```csharp
ISensitivityOperandEffect ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.GetEffectByOperand(int operandIndex)
```


**Parameters**:

* int **operandIndex**

**Return type**: [ISensitivityOperandEffect](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_effect.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_effect)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityCriterionMetadata.GetEffectByOperand"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
