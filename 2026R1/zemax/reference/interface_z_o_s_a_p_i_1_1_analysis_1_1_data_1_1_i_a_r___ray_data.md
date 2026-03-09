# Interface ZOSAPI::Analysis::Data::IAR\_RayData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [Description](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1a6d773a105d1af186c47babd14f01a3c6)
* [GetRay](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1a62683454f69780173e92a8ec8197342d)
* [NumRays](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1a0e9ea0004cdaeb81dc74ffdc524a69fa)
* [Rays](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1ae470e9e42e867a4f37ccd034c115292e)

## Properties

### Property Description

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1a6d773a105d1af186c47babd14f01a3c6"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.Data.IAR_RayData.Description
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_RayData.Description"}]}`
-->

### Property NumRays

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1a0e9ea0004cdaeb81dc74ffdc524a69fa"></a>

![][public]

**Definition**:


```csharp
uint ZOSAPI.Analysis.Data.IAR_RayData.NumRays
```


**Return type**: uint

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_RayData.NumRays"}]}`
-->

### Property Rays

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1ae470e9e42e867a4f37ccd034c115292e"></a>

![][public]

**Definition**:


```csharp
IAR_RayInfo [] ZOSAPI.Analysis.Data.IAR_RayData.Rays
```


**Return type**: [IAR\_RayInfo](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_info.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_info)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_RayData.Rays"}]}`
-->

## Public functions

### Function GetRay

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data_1a62683454f69780173e92a8ec8197342d"></a>

![][public]


```csharp
IAR_RayInfo ZOSAPI.Analysis.Data.IAR_RayData.GetRay(int idx)
```


Gets the specified ray.

**Parameters**:

* **idx**: The index (0 to NumRays-1).


**Returns**:


**Parameters**:

* int **idx**

**Return type**: [IAR\_RayInfo](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_info.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_info)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_RayData.GetRay"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)