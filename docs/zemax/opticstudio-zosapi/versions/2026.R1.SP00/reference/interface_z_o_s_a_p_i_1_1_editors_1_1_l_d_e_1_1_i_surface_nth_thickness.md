# Interface ZOSAPI::Editors::LDE::ISurfaceNthThickness

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness"></a>

![][C#]
![][public]

**Definition**:


**Inherits from**:

* [ZOSAPI.Editors.LDE.ISurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface)

**Inherited by**:

* [ZOSAPI.Editors.LDE.ISurfaceZonePlate](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_zone_plate.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_zone_plate)

## Members

* [GetNthThickness](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a239f441aba1a4d815bdc637bff0d92ea)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1a3bebde6bca998efc4929dd5944f56a05)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1accb58c34eb8388c0a77b9eb425329977)
* [NthThicknessCell](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a8fe50aa2ddd435e33dc2f50d243b49b6)
* [NumberOfTerms](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1af6b809c478686b676940c88bb353bc1d)
* [NumberOfTermsCell](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a097616b1bd94d08caefa3290ff7aaae5)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1a0478da8afc6b3d5b1ee2e3efc8c8092d)
* [SetNthThickness](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a893bfd68a2eaef975353872d16fc168a)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1aeb55c88397724346dbfef66d1fb3d497)

## Properties

### Property NumberOfTermsCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a097616b1bd94d08caefa3290ff7aaae5"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.LDE.ISurfaceNthThickness.NumberOfTermsCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthThickness.NumberOfTermsCell"}]}`
-->

### Property NumberOfTerms

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1af6b809c478686b676940c88bb353bc1d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ISurfaceNthThickness.NumberOfTerms
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthThickness.NumberOfTerms"}]}`
-->

## Public functions

### Function NthThicknessCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a8fe50aa2ddd435e33dc2f50d243b49b6"></a>

![][public]


```csharp
IEditorCell ZOSAPI.Editors.LDE.ISurfaceNthThickness.NthThicknessCell(int n)
```


**Parameters**:

* int **n**

**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthThickness.NthThicknessCell"}]}`
-->

### Function GetNthThickness

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a239f441aba1a4d815bdc637bff0d92ea"></a>

![][public]


```csharp
double ZOSAPI.Editors.LDE.ISurfaceNthThickness.GetNthThickness(int n)
```


**Parameters**:

* int **n**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthThickness.GetNthThickness"}]}`
-->

### Function SetNthThickness

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_thickness_1a893bfd68a2eaef975353872d16fc168a"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ISurfaceNthThickness.SetNthThickness(int n, double Value)
```


**Parameters**:

* int **n**
* double **Value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthThickness.SetNthThickness"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
