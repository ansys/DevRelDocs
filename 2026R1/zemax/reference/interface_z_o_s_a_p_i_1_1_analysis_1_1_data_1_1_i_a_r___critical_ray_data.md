# Interface ZOSAPI::Analysis::Data::IAR\_CriticalRayData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetRay](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a34f7fbefd5531ead351f4a267e4c1581)
* [HeaderLabels](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a7954aaacec9cce837e6f9fbc76ffff40)
* [NumRays](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a270b3642b6492596b0e6fc85dd98402c)
* [Rays](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a80805911a7eb2fa9d15abb6ff8a019b6)

## Properties

### Property NumRays

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a270b3642b6492596b0e6fc85dd98402c"></a>

![][public]

**Definition**:


```csharp
uint ZOSAPI.Analysis.Data.IAR_CriticalRayData.NumRays
```


**Return type**: uint

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_CriticalRayData.NumRays"}]}`
-->

### Property HeaderLabels

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a7954aaacec9cce837e6f9fbc76ffff40"></a>

![][public]

**Definition**:


```csharp
string [] ZOSAPI.Analysis.Data.IAR_CriticalRayData.HeaderLabels
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_CriticalRayData.HeaderLabels"}]}`
-->

### Property Rays

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a80805911a7eb2fa9d15abb6ff8a019b6"></a>

![][public]

**Definition**:


```csharp
IAR_CriticalRayInfo [] ZOSAPI.Analysis.Data.IAR_CriticalRayData.Rays
```


**Return type**: [IAR\_CriticalRayInfo](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_info.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_info)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_CriticalRayData.Rays"}]}`
-->

## Public functions

### Function GetRay

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data_1a34f7fbefd5531ead351f4a267e4c1581"></a>

![][public]


```csharp
IAR_CriticalRayInfo ZOSAPI.Analysis.Data.IAR_CriticalRayData.GetRay(uint idx)
```


Gets the specified ray.

**Parameters**:

* **idx**: The index (0 to NumRays-1).


**Returns**:


**Parameters**:

* uint **idx**

**Return type**: [IAR\_CriticalRayInfo](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_info.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_info)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_CriticalRayData.GetRay"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)