# Interface ZOSAPI::Editors::LDE::ISTAR_Data

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data"></a>

![][C#]
![][public]

**Definition**:

All STAR data for a Lens Data Editor surface. This interface can be accessed via the ILDERow interface.


## Members

* [ComponentRBMs](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a81d0ecf115570eeef530cbd8990ebbad)
* [Deformations](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a5fb35a6c52b772289b6b5e5c7fd64d20)
* [DirectIndex](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a72f1b286e0063ff9b2521d6087654dae)
* [IndexDataType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1aec94877359bf9edc6793aa8b2ce4954f)
* [Stress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1aa1d62cf246f34a58c17414c0b2bcc417)
* [SurfaceNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1aca908f3ab1612d5356ee54661303d14e)
* [Temperatures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a25dafdd1342e035a986ddb79db95720b)

## Properties

### Property SurfaceNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1aca908f3ab1612d5356ee54661303d14e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ISTAR_Data.SurfaceNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.SurfaceNumber"}]}`
-->

### Property Deformations

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a5fb35a6c52b772289b6b5e5c7fd64d20"></a>

![][public]

**Definition**:


```csharp
ISTAR_Deformations ZOSAPI.Editors.LDE.ISTAR_Data.Deformations
```


**Return type**: [ISTAR\_Deformations](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___deformations.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___deformations)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.Deformations"}]}`
-->

### Property Temperatures

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a25dafdd1342e035a986ddb79db95720b"></a>

![][public]

**Definition**:


```csharp
ISTAR_Temperatures ZOSAPI.Editors.LDE.ISTAR_Data.Temperatures
```


**Return type**: [ISTAR\_Temperatures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___temperatures.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___temperatures)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.Temperatures"}]}`
-->

### Property DirectIndex

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a72f1b286e0063ff9b2521d6087654dae"></a>

![][public]

**Definition**:


```csharp
ISTAR_DirectIndex ZOSAPI.Editors.LDE.ISTAR_Data.DirectIndex
```


**Return type**: [ISTAR\_DirectIndex](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___direct_index.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___direct_index)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.DirectIndex"}]}`
-->

### Property IndexDataType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1aec94877359bf9edc6793aa8b2ce4954f"></a>

![][public]

**Definition**:


```csharp
IndexDataType ZOSAPI.Editors.LDE.ISTAR_Data.IndexDataType
```


**Return type**: [IndexDataType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a72ef33eba4cf6ffc52957201b71f0bf4)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.IndexDataType"}]}`
-->

### Property ComponentRBMs

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1a81d0ecf115570eeef530cbd8990ebbad"></a>

![][public]

**Definition**:


```csharp
ISTAR_ComponentRBMs ZOSAPI.Editors.LDE.ISTAR_Data.ComponentRBMs
```


**Return type**: [ISTAR\_ComponentRBMs](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___component_r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___component_r_b_ms)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.ComponentRBMs"}]}`
-->

### Property Stress

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___data_1aa1d62cf246f34a58c17414c0b2bcc417"></a>

![][public]

**Definition**:


```csharp
ISTAR_Stress ZOSAPI.Editors.LDE.ISTAR_Data.Stress
```


**Return type**: [ISTAR\_Stress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_Data.Stress"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)