# Interface ZOSAPI::Tools::Tolerancing::ISensitivityData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetCompensator](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1ae0b1d029d9d3f323e6f40f5be93a21ac)
* [GetCriterion](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1aeaccf630f14aeb9045b9b9c39e7a044d)
* [GetOperand](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1ae04d89ae21390f74ecfe6a9fc3dfd316)
* [NumberOfCompensators](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1a67a182489f31c460b14549d7b2115f7e)
* [NumberOfCriteria](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1a552664547157d30b6c26bb9853a17515)
* [NumberOfResultOperands](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1ae756c0e2fd2865a175b51ef3500837b9)

## Properties

### Property NumberOfCriteria

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1a552664547157d30b6c26bb9853a17515"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ISensitivityData.NumberOfCriteria
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityData.NumberOfCriteria"}]}`
-->

### Property NumberOfCompensators

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1a67a182489f31c460b14549d7b2115f7e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ISensitivityData.NumberOfCompensators
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityData.NumberOfCompensators"}]}`
-->

### Property NumberOfResultOperands

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1ae756c0e2fd2865a175b51ef3500837b9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ISensitivityData.NumberOfResultOperands
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityData.NumberOfResultOperands"}]}`
-->

## Public functions

### Function GetCriterion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1aeaccf630f14aeb9045b9b9c39e7a044d"></a>

![][public]


```csharp
ISensitivityCriterionMetadata ZOSAPI.Tools.Tolerancing.ISensitivityData.GetCriterion(int index)
```


**Parameters**:

* int **index**

**Return type**: [ISensitivityCriterionMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityData.GetCriterion"}]}`
-->

### Function GetCompensator

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1ae0b1d029d9d3f323e6f40f5be93a21ac"></a>

![][public]


```csharp
ISensitivityCompensator ZOSAPI.Tools.Tolerancing.ISensitivityData.GetCompensator(int index)
```


**Parameters**:

* int **index**

**Return type**: [ISensitivityCompensator](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_compensator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_compensator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityData.GetCompensator"}]}`
-->

### Function GetOperand

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data_1ae04d89ae21390f74ecfe6a9fc3dfd316"></a>

![][public]


```csharp
ISensitivityOperandMetadata ZOSAPI.Tools.Tolerancing.ISensitivityData.GetOperand(int index)
```


**Parameters**:

* int **index**

**Return type**: [ISensitivityOperandMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_metadata)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ISensitivityData.GetOperand"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)