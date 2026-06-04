# Interface ZOSAPI::Editors::LDE::ILDEScatteringData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data"></a>

![][C#]
![][public]

**Definition**:

Surface properties scattering tab. This interface can be accessed via the ILDERow interface.


## Members

* [ChangeScatteringTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1ad450aa4d2c2eb16777cac1a95e26253c)
* [CreateScatteringTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1ae6fe16458bb6f95a96ed43c21ebed233)
* [CurrentType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1a0c06959f30371c05111dd3f2ae089532)
* [CurrentTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1aa38cd4f0a8b4b5c9149f2dcb486247d5)

## Properties

### Property CurrentType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1a0c06959f30371c05111dd3f2ae089532"></a>

![][public]

**Definition**:


```csharp
SurfaceScatteringTypes ZOSAPI.Editors.LDE.ILDEScatteringData.CurrentType
```


Gets the current scattering type.

The scattering type.


**Return type**: [SurfaceScatteringTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a5be8a34c0ad68745dffc321a8a332e65)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEScatteringData.CurrentType"}]}`
-->

### Property CurrentTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1aa38cd4f0a8b4b5c9149f2dcb486247d5"></a>

![][public]

**Definition**:


```csharp
ISurfaceScatteringType ZOSAPI.Editors.LDE.ILDEScatteringData.CurrentTypeSettings
```


Gets the settings specific to the current scattering type. Use CreateScatteringTypeSettings to get settings for a specific scattering type.

The current type settings.


**Return type**: [ISurfaceScatteringType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEScatteringData.CurrentTypeSettings"}]}`
-->

## Public functions

### Function CreateScatteringTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1ae6fe16458bb6f95a96ed43c21ebed233"></a>

![][public]


```csharp
ISurfaceScatteringType ZOSAPI.Editors.LDE.ILDEScatteringData.CreateScatteringTypeSettings(SurfaceScatteringTypes type)
```


Gets settings for the specified scatter type. Note that no changes will be made until you call ChangeScatteringTypeSettings.

**Parameters**:

* **type**: The type.


**Returns**:


**Parameters**:

* [SurfaceScatteringTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a5be8a34c0ad68745dffc321a8a332e65) **type**

**Return type**: [ISurfaceScatteringType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEScatteringData.CreateScatteringTypeSettings"}]}`
-->

### Function ChangeScatteringTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_scattering_data_1ad450aa4d2c2eb16777cac1a95e26253c"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDEScatteringData.ChangeScatteringTypeSettings(ISurfaceScatteringType settings)
```


Updates the current scattering type settings. Use CurrentTypeSettings or CreateScatteringTypeSettings to retrieve the relevant settings.

**Parameters**:

* **settings**: The settings.


**Returns**:


**Parameters**:

* [ISurfaceScatteringType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_scattering_type) **settings**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEScatteringData.ChangeScatteringTypeSettings"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
