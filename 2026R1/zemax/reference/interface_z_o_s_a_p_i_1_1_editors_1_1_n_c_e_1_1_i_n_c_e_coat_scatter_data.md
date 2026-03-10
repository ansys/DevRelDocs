# Interface ZOSAPI::Editors::NCE::INCECoatScatterData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data"></a>

![][C#]
![][public]

**Definition**:

Object properties Coat/Scatter tab. This interface can be accessed via the INCERow interface.


## Members

* [CopySettingsToAllFaces](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1aae3465d6ffb89d65f72e049b9643c4ab)
* [GetFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1a784337a7b51eb6c4b283972986aa8039)
* [IsCoatScatterAvailable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1a9b14e1bc208ec1476c8a1874b4d81e18)
* [NumberOfFaces](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1afb46afe0d2e368b6ef9ab4a0a70589b7)

## Properties

### Property IsCoatScatterAvailable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1a9b14e1bc208ec1476c8a1874b4d81e18"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterData.IsCoatScatterAvailable
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterData.IsCoatScatterAvailable"}]}`
-->

### Property NumberOfFaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1afb46afe0d2e368b6ef9ab4a0a70589b7"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECoatScatterData.NumberOfFaces
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterData.NumberOfFaces"}]}`
-->

## Public functions

### Function GetFaceData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1a784337a7b51eb6c4b283972986aa8039"></a>

![][public]


```csharp
INCECoatScatterFaceData ZOSAPI.Editors.NCE.INCECoatScatterData.GetFaceData(int faceNumber)
```


Gets coat/scatter data for the specified face (0 to NumberOfFaces-1).

**Parameters**:

* **faceNumber**: The face number.


**Returns**:


**Parameters**:

* int **faceNumber**

**Return type**: [INCECoatScatterFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterData.GetFaceData"}]}`
-->

### Function CopySettingsToAllFaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data_1aae3465d6ffb89d65f72e049b9643c4ab"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.INCECoatScatterData.CopySettingsToAllFaces(INCECoatScatterFaceData fromFace)
```


Copies the specified coat/scatter settings from the specified face too all faces on this object.

**Parameters**:

* **fromFace**: The coat/scatter settings to copy


**Parameters**:

* [INCECoatScatterFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data) **fromFace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterData.CopySettingsToAllFaces"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)