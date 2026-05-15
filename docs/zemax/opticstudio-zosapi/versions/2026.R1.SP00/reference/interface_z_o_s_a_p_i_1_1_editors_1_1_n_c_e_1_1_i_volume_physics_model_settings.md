# Interface ZOSAPI::Editors::NCE::IVolumePhysicsModelSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings"></a>

![][C#]
![][public]

**Definition**:

Base interface for all specific VolumePhysicsModelType settings. This interface can be accessed via the INCEVolumePhysicsData interface. Note that the "_S_" properties are convenience methods for retrieving the derived interface for the specific volume physics model settings.


**Inherited by**:

* [ZOSAPI.Editors.NCE.IVMPS\_AngleScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering)
* [ZOSAPI.Editors.NCE.IVMPS\_DLLDefinedScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___d_l_l_defined_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___d_l_l_defined_scattering)
* [ZOSAPI.Editors.NCE.IVMPS\_PhotoluminscenceModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model)
* [ZOSAPI.Editors.NCE.IVPMS\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_p_m_s___none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_p_m_s___none)

## Members

* [\_S\_AngleScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a0d6315e8c4490ccb8a2cf5ce52475f7c)
* [\_S\_DLLDefinedScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a91d7f75ed8ff7548eda882ad739bcef5)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a2637b01347f773302d2c2f4d75fc3458)
* [\_S\_PhotoluminescenceModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a1abfcd38f597d1840ad99c41824bbab0)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1abdd68a49b7ecece33bc38c8c639ef023)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a9007f1942da20d97b25df1bbb9cdbbb1)

## Properties

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a9007f1942da20d97b25df1bbb9cdbbb1"></a>

![][public]

**Definition**:


```csharp
VolumePhysicsModelType ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings.Type
```


**Return type**: [VolumePhysicsModelType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings.Type"}]}`
-->

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1abdd68a49b7ecece33bc38c8c639ef023"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings.IsValid
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings.IsValid"}]}`
-->

### Property _S_None

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a2637b01347f773302d2c2f4d75fc3458"></a>

![][public]

**Definition**:


```csharp
IVPMS_None ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_None
```


**Return type**: [IVPMS\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_p_m_s___none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_p_m_s___none)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_None"}]}`
-->

### Property _S_AngleScattering

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a0d6315e8c4490ccb8a2cf5ce52475f7c"></a>

![][public]

**Definition**:


```csharp
IVMPS_AngleScattering ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_AngleScattering
```


**Return type**: [IVMPS\_AngleScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_AngleScattering"}]}`
-->

### Property _S_DLLDefinedScattering

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a91d7f75ed8ff7548eda882ad739bcef5"></a>

![][public]

**Definition**:


```csharp
IVMPS_DLLDefinedScattering ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_DLLDefinedScattering
```


**Return type**: [IVMPS\_DLLDefinedScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___d_l_l_defined_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___d_l_l_defined_scattering)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_DLLDefinedScattering"}]}`
-->

### Property _S_PhotoluminescenceModel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a1abfcd38f597d1840ad99c41824bbab0"></a>

![][public]

**Definition**:


```csharp
IVMPS_PhotoluminscenceModel ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_PhotoluminescenceModel
```


**Return type**: [IVMPS\_PhotoluminscenceModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings._S_PhotoluminescenceModel"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
