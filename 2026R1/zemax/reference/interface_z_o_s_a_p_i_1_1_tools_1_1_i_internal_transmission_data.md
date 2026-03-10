# Interface ZOSAPI::Tools::IInternalTransmissionData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetDataPoint](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data_1a8ae18e4af4c6704ae7f7370434ea6ccd)
* [NumberOfPoints](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data_1aa2f6eccb9442de802d90bd64a59100e6)

## Properties

### Property NumberOfPoints

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data_1aa2f6eccb9442de802d90bd64a59100e6"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IInternalTransmissionData.NumberOfPoints
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IInternalTransmissionData.NumberOfPoints"}]}`
-->

## Public functions

### Function GetDataPoint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data_1a8ae18e4af4c6704ae7f7370434ea6ccd"></a>

![][public]


```csharp
IInternalTransmissionParameter ZOSAPI.Tools.IInternalTransmissionData.GetDataPoint(int pointNumber)
```


**Parameters**:

* int **pointNumber**

**Return type**: [IInternalTransmissionParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_parameter)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IInternalTransmissionData.GetDataPoint"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)