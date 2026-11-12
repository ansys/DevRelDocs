# Interface ZOSAPI::Editors::NCE::ISTAR_NSC_RBMs

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms"></a>

![][C#]
![][public]

**Definition**:


## Members

* [Decenters](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a8b6ef7e5659b873843d7ad2d5255abff)
* [Disable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a793a626b77077312c7a8d7037b9453b7)
* [Enable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a85f25d59f3c52afe08ad6e4877ee92c6)
* [IsEnabled](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a864e8effc9e33412c08e7c4de51281f0)
* [ObjectNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1acd0ca60149d8bb5ea73b5b7f72a9893f)
* [Rotations](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1aa063b5f94d2562d20b999a2b575cdcde)
* [Transform](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a0712d577c75cf4c25faaff22a5c49687)
* [UsedWeights](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a0496bd02a3fbfb4b475d5f6d9d20d08a)

## Properties

### Property ObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1acd0ca60149d8bb5ea73b5b7f72a9893f"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.ObjectNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.ObjectNumber"}]}`
-->

### Property IsEnabled

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a864e8effc9e33412c08e7c4de51281f0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.IsEnabled
```


Gets a value indicating whether the calculated RBM results are currently applied during ray tracing.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.IsEnabled"}]}`
-->

### Property Transform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a0712d577c75cf4c25faaff22a5c49687"></a>

![][public]

**Definition**:


```csharp
ICoordinateTransform ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Transform
```


The RBM expressed as a coordinate transform.


**Return type**: [ICoordinateTransform](interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Transform"}]}`
-->

### Property Decenters

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a8b6ef7e5659b873843d7ad2d5255abff"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_Decenters ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Decenters
```


The translational component of the RBM.


**Return type**: [ISTAR\_NSC\_Decenters](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___decenters.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___decenters)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Decenters"}]}`
-->

### Property Rotations

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1aa063b5f94d2562d20b999a2b575cdcde"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_Rotations ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Rotations
```


The rotational component of the RBM.


**Return type**: [ISTAR\_NSC\_Rotations](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___rotations.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___rotations)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Rotations"}]}`
-->

### Property UsedWeights

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a0496bd02a3fbfb4b475d5f6d9d20d08a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.UsedWeights
```


Gets a value indicating whether the RBM calculation used weighted data points.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.UsedWeights"}]}`
-->

## Public functions

### Function Enable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a85f25d59f3c52afe08ad6e4877ee92c6"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Enable()
```


Enables the use of the calculated RBM results during ray tracing.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Enable"}]}`
-->

### Function Disable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_1a793a626b77077312c7a8d7037b9453b7"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Disable()
```


Disables the use of the calculated RBM results during ray tracing.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMs.Disable"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
