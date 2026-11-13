# Interface ZOSAPI::Editors::NCE::ISTAR_NSC_Data

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data"></a>

![][C#]
![][public]

**Definition**:

Provides access to STAR settings and data for an object in the Non-Sequential Component Editor (NSC). This interface can be accessed via the INCERow interface.


## Members

* [ObjectNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data_1a835335d2d717769e4608baae033faf3d)
* [RBMsOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data_1a9c7004acedcfe27bd0485dfbd2208bc3)

## Properties

### Property ObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data_1a835335d2d717769e4608baae033faf3d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_Data.ObjectNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_Data.ObjectNumber"}]}`
-->

### Property RBMsOnly

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___data_1a9c7004acedcfe27bd0485dfbd2208bc3"></a>

![][public]

**Definition**:


```csharp
ISTAR_NSC_RBMsOnly ZOSAPI.Editors.NCE.ISTAR_NSC_Data.RBMsOnly
```


Provides access to RBM-only mode settings and results, in which deformation data is used solely to compute the decenter and rotation of an object.


**Return type**: [ISTAR\_NSC\_RBMsOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___r_b_ms_only)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_Data.RBMsOnly"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
