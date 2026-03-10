# Interface ZOSAPI::Editors::LDE::ISurfaceNthOrderTerms

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms"></a>

![][C#]
![][public]

**Definition**:


**Inherits from**:

* [ZOSAPI.Editors.LDE.ISurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface)

**Inherited by**:

* [ZOSAPI.Editors.LDE.ISurfaceAlternateOdd](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_alternate_odd.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_alternate_odd)
* [ZOSAPI.Editors.LDE.ISurfaceOddAsphere](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_odd_asphere.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_odd_asphere)

## Members

* [GetNthOrderTerm](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms_1aa040897c9bca0fc8acc024ad0a1db949)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1a3bebde6bca998efc4929dd5944f56a05)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1accb58c34eb8388c0a77b9eb425329977)
* [NthOrderTermCell](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms_1a35780882f574ea4dcde366b40658c727)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1a0478da8afc6b3d5b1ee2e3efc8c8092d)
* [SetNthOrderTerm](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms_1ae1dfa08ea91ac4d15db77480c940398e)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_1aeb55c88397724346dbfef66d1fb3d497)

## Public functions

### Function NthOrderTermCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms_1a35780882f574ea4dcde366b40658c727"></a>

![][public]


```csharp
IEditorCell ZOSAPI.Editors.LDE.ISurfaceNthOrderTerms.NthOrderTermCell(int n)
```


**Parameters**:

* int **n**

**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthOrderTerms.NthOrderTermCell"}]}`
-->

### Function GetNthOrderTerm

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms_1aa040897c9bca0fc8acc024ad0a1db949"></a>

![][public]


```csharp
double ZOSAPI.Editors.LDE.ISurfaceNthOrderTerms.GetNthOrderTerm(int n)
```


**Parameters**:

* int **n**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthOrderTerms.GetNthOrderTerm"}]}`
-->

### Function SetNthOrderTerm

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_nth_order_terms_1ae1dfa08ea91ac4d15db77480c940398e"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ISurfaceNthOrderTerms.SetNthOrderTerm(int n, double Value)
```


**Parameters**:

* int **n**
* double **Value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceNthOrderTerms.SetNthOrderTerm"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)