# Interface ZOSAPI::Editors::NCE::IIndexModelSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings"></a>

![][C#]
![][public]

**Definition**:

Base interface for all specific NCEIndexType settings. This interface can be accessed via the INCEIndexData interface. Note that the "_S_" properties are convenience methods for retrieving the derived interface for the specific index model settings.


**Inherited by**:

* [ZOSAPI.Editors.NCE.IIMS\_Birefringent](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___birefringent.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___birefringent)
* [ZOSAPI.Editors.NCE.IIMS\_GRIN](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___g_r_i_n.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___g_r_i_n)
* [ZOSAPI.Editors.NCE.IIMS\_Isotropic](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___isotropic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___isotropic)

## Members

* [\_S\_Birefringent](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1ae986b80a48a2284c014daf5a53253a35)
* [\_S\_GRIN](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a952de466387e9f237e44c61269b21538)
* [\_S\_Isotropic](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a8e297b491b6fa3f904e9cf0adb5289f9)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a7e1688b2df4b1ad87969733983e374d3)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a559868ec6b7c59016065ad36d837c030)

## Properties

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a559868ec6b7c59016065ad36d837c030"></a>

![][public]

**Definition**:


```csharp
NCEIndexType ZOSAPI.Editors.NCE.IIndexModelSettings.Type
```


**Return type**: [NCEIndexType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a82b87d6c9945e2691cdb017282d1192b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IIndexModelSettings.Type"}]}`
-->

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a7e1688b2df4b1ad87969733983e374d3"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IIndexModelSettings.IsValid
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IIndexModelSettings.IsValid"}]}`
-->

### Property _S_Isotropic

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a8e297b491b6fa3f904e9cf0adb5289f9"></a>

![][public]

**Definition**:


```csharp
IIMS_Isotropic ZOSAPI.Editors.NCE.IIndexModelSettings._S_Isotropic
```


**Return type**: [IIMS\_Isotropic](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___isotropic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___isotropic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IIndexModelSettings._S_Isotropic"}]}`
-->

### Property _S_Birefringent

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1ae986b80a48a2284c014daf5a53253a35"></a>

![][public]

**Definition**:


```csharp
IIMS_Birefringent ZOSAPI.Editors.NCE.IIndexModelSettings._S_Birefringent
```


**Return type**: [IIMS\_Birefringent](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___birefringent.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___birefringent)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IIndexModelSettings._S_Birefringent"}]}`
-->

### Property _S_GRIN

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings_1a952de466387e9f237e44c61269b21538"></a>

![][public]

**Definition**:


```csharp
IIMS_GRIN ZOSAPI.Editors.NCE.IIndexModelSettings._S_GRIN
```


**Return type**: [IIMS\_GRIN](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___g_r_i_n.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___g_r_i_n)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IIndexModelSettings._S_GRIN"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
