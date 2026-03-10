# Interface ZOSAPI::Editors::NCE::INCEScatterToData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data"></a>

![][C#]
![][public]

**Definition**:

Object properties Scatter To tab. This interface can be accessed via the INCERow interface.


## Members

* [GetRayData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1a0eb3fa0cec7f66260be2eae328cb2965)
* [IsScatterToAvailable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1a621e0230f99a47dbc4fe2043fe946582)
* [NumberOfRayData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1a18ca837de813fae407fcf8c39685e087)
* [ScatterToList](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1ab0949ac686b819d302a21432bfe411a8)
* [ScatterToMethod](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1abb2779c915334fadd8ea1bd4697794e8)
* [SetRayData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1acd71af34d74d1c79d05e5df16e6bfd78)

## Properties

### Property IsScatterToAvailable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1a621e0230f99a47dbc4fe2043fe946582"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCEScatterToData.IsScatterToAvailable
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEScatterToData.IsScatterToAvailable"}]}`
-->

### Property ScatterToMethod

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1abb2779c915334fadd8ea1bd4697794e8"></a>

![][public]

**Definition**:


```csharp
ScatterToType ZOSAPI.Editors.NCE.INCEScatterToData.ScatterToMethod
```


**Return type**: [ScatterToType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab3928fc3d8b75ba8d83585fb514a4b98)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEScatterToData.ScatterToMethod"}]}`
-->

### Property ScatterToList

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1ab0949ac686b819d302a21432bfe411a8"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.INCEScatterToData.ScatterToList
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEScatterToData.ScatterToList"}]}`
-->

### Property NumberOfRayData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1a18ca837de813fae407fcf8c39685e087"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCEScatterToData.NumberOfRayData
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEScatterToData.NumberOfRayData"}]}`
-->

## Public functions

### Function GetRayData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1a0eb3fa0cec7f66260be2eae328cb2965"></a>

![][public]


```csharp
IImportanceSamplingSettings ZOSAPI.Editors.NCE.INCEScatterToData.GetRayData(int rayIndex)
```


Gets the importance sampling ray data for the specified ray (1 to NumberOfRayData).

**Parameters**:

* **rayIndex**: Index of the ray data.


**Returns**:

IImportanceSamplingSettings if the specified ray is valid; otherwise, 
```csharp
false
```
.


**Parameters**:

* int **rayIndex**

**Return type**: [IImportanceSamplingSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_importance_sampling_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_importance_sampling_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEScatterToData.GetRayData"}]}`
-->

### Function SetRayData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data_1acd71af34d74d1c79d05e5df16e6bfd78"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCEScatterToData.SetRayData(int rayIndex, IImportanceSamplingSettings Data)
```


Sets the importance sampling ray data for the specified ray.

**Parameters**:

* **rayIndex**: Index of the ray.
* **Data**: The new ray data settings.


**Returns**:


```csharp
true
```
 if the specified index and data are valid; otherwise, 
```csharp
false
```
.


**Parameters**:

* int **rayIndex**
* [IImportanceSamplingSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_importance_sampling_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_importance_sampling_settings) **Data**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEScatterToData.SetRayData"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)