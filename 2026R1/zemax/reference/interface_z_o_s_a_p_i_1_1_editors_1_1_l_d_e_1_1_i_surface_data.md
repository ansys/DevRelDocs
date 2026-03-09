# Interface ZOSAPI::Editors::LDE::ISurfaceData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data"></a>

![][C#]
![][public]

**Definition**:


**Inherits from**:

* [ZOSAPI.Editors.LDE.ISurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface)

## Members

* [GetNthExtraData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data_1a78951acadf63123e8c3819cb952c6c9f)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1a3bebde6bca998efc4929dd5944f56a05)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1accb58c34eb8388c0a77b9eb425329977)
* [NthExtraDataCell](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data_1ad3b7f1c4d0ce169414e7b4ca8f6a2478)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1a0478da8afc6b3d5b1ee2e3efc8c8092d)
* [SetNthExtraData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data_1a97a20c94a95af3caaac24ae353ca0ac2)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1aeb55c88397724346dbfef66d1fb3d497)

## Public functions

### Function NthExtraDataCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data_1ad3b7f1c4d0ce169414e7b4ca8f6a2478"></a>

![][public]


```csharp
IEditorCell ZOSAPI.Editors.LDE.ISurfaceData.NthExtraDataCell(int n)
```


**Parameters**:

* int **n**

**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceData.NthExtraDataCell"}]}`
-->

### Function GetNthExtraData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data_1a78951acadf63123e8c3819cb952c6c9f"></a>

![][public]


```csharp
double ZOSAPI.Editors.LDE.ISurfaceData.GetNthExtraData(int n)
```


**Parameters**:

* int **n**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceData.GetNthExtraData"}]}`
-->

### Function SetNthExtraData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_data_1a97a20c94a95af3caaac24ae353ca0ac2"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ISurfaceData.SetNthExtraData(int n, double Value)
```


**Parameters**:

* int **n**
* double **Value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceData.SetNthExtraData"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)