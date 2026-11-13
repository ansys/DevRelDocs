# Interface ZOSAPI::Editors::NCE::ISTAR_NSC_RBMsOnly

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only"></a>

![][C#]
![][public]

**Definition**:

Provides settings and results for Rigid Body Motion only (RBM-only) mode, in which deformation data is used solely to compute the decenter and rotation of an object. This interface can be accessed via the ISTAR_NSC_Data interface.


## Members

* [CoordinateTransform](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1ac24b691b8674f8f07016d26df1df4942)
* [FEAData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a4dfc432e7870f0ae31e80aef3dc8f35e)
* [IsDataLocalCS](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a3ef2543f40fe9d09adc97b1f1a113467)
* [ObjectNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a11ad518f19b4374649f30510dcf2fcce)
* [RBMs](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a1ba48a77bcb5783cad4b266923a6c794)
* [SetDataIsGlobal](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1acacfc17fded3ed250c33b4001008fc15)
* [SetDataIsLocal](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1afd3879931543ec7302be35119fe36229)

## Properties

### Property ObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a11ad518f19b4374649f30510dcf2fcce"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.ObjectNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.ObjectNumber"}]}`
-->

### Property FEAData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a4dfc432e7870f0ae31e80aef3dc8f35e"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_DeformationsFEAData ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.FEAData
```


Provides access to FEA deformation data, including file assignment, data naming, importing from file, and retrieving transformed deformation results.


**Return type**: [ISTAR\_NSC\_DeformationsFEAData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.FEAData"}]}`
-->

### Property RBMs

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a1ba48a77bcb5783cad4b266923a6c794"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_RBMs ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.RBMs
```


Provides access to RBM results and controls whether they are applied during ray tracing.


**Return type**: [ISTAR\_NSC\_RBMs](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.RBMs"}]}`
-->

### Property CoordinateTransform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1ac24b691b8674f8f07016d26df1df4942"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_CoordinateTransform ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.CoordinateTransform
```


Provides access to the user-defined coordinate transform applied to convert between the deformation data coordinate system and the coordinate system selected via SetDataIsGlobal or SetDataIsLocal.


**Return type**: [ISTAR\_NSC\_CoordinateTransform](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___coordinate_transform)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.CoordinateTransform"}]}`
-->

## Public functions

### Function SetDataIsGlobal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1acacfc17fded3ed250c33b4001008fc15"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.SetDataIsGlobal()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.SetDataIsGlobal"}]}`
-->

### Function SetDataIsLocal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1afd3879931543ec7302be35119fe36229"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.SetDataIsLocal()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.SetDataIsLocal"}]}`
-->

### Function IsDataLocalCS

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only_1a3ef2543f40fe9d09adc97b1f1a113467"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.IsDataLocalCS()
```


**Returns**:

<code>true</code> if the deformation data is interpreted in local coordinates; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_RBMsOnly.IsDataLocalCS"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
