# Interface ZOSAPI::Editors::LDE::ISurfaceScatteringBSDF

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f"></a>

![][C#]
![][public]

**Definition**:

Surface Scattering - BSDF. This interface can be retrieved from the ILDEScatteringData interface.


**Inherits from**:

* [ZOSAPI.Editors.LDE.ISurfaceScatteringType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type)

## Members

* [\_S\_ABg](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1a60f527db4c93bc373848dea4087c9fe1)
* [\_S\_ABgFile](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1a5959912b10da999bb3826f485566e2ce)
* [\_S\_BSDF](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1a7871a4c33c8389be47f16c146ff6c9b0)
* [\_S\_Catalog](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1a460cc29aca79c49f69c4b9c4c2612bbc)
* [\_S\_Gaussian](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1afb720db3b0095d55b33fd0f30d69d946)
* [\_S\_Lambertian](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1ae50da8aaa3b0b2dfb270392e7488ef6e)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1a35f99775accf4b94b87cad45321907d7)
* [\_S\_User](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1ad5ab726bef7c89086a96d358eaeb1fff)
* [Angle](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1a05ae8b8a80586fbab9fe715303f3305a)
* [FileName](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1ac31aab08aefc9d44fe3538c51dd121a5)
* [GetAvailableFileNames](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1af1aeb712dceedf6c49f33732d6e3a7e6)
* [ScatterFraction](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1a8c88a68cf5d33a9b8e25f3f87e605c9e)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type_1a305e097b4c203ca74df6a915588b4b95)

## Properties

### Property FileName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1ac31aab08aefc9d44fe3538c51dd121a5"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.FileName
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.FileName"}]}`
-->

### Property ScatterFraction

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1a8c88a68cf5d33a9b8e25f3f87e605c9e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.ScatterFraction
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.ScatterFraction"}]}`
-->

### Property Angle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1a05ae8b8a80586fbab9fe715303f3305a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.Angle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.Angle"}]}`
-->

## Public functions

### Function GetAvailableFileNames

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_b_s_d_f_1af1aeb712dceedf6c49f33732d6e3a7e6"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.GetAvailableFileNames()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceScatteringBSDF.GetAvailableFileNames"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)