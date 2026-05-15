# Interface ZOSAPI::Editors::NCE::IOSS_ABgFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file"></a>

![][C#]
![][public]

**Definition**:

Object Scattering Settings - ABg File. This interface can be accessed via the INCECoatScatterFaceData interface.


**Inherits from**:

* [ZOSAPI.Editors.NCE.IObjectScatteringSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings)

## Members

* [\_S\_ABg](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1ae74b8f293baa55d117ee8b1a327cdaa7)
* [\_S\_ABgFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a0f6aa9f934241dfd7803ac7b60ca0ff4)
* [\_S\_BSDF](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1ad2c4c54dbda6059fa51d5f8129e77182)
* [\_S\_Gaussian](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a8ab29cc60a2dc8cb19538f3b6c6c44e9)
* [\_S\_ISScatterCatalog](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a4170c4526371a7cb29192fd7efa22db1)
* [\_S\_Lambertian](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a2b6f7320ee0a5de54240ba7101cb6848)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a169589d933ef9e0ba9de49aec046f504)
* [\_S\_User](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1aaf8697c0ab31a9fc33599efc0d9bced9)
* [GetAvailableFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file_1ad30f10738ded04d52657094fc75abc5e)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a2d8f29d5bc47a522983be45df7dc684a)
* [ReflectFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file_1aa8739974daf055a7a64a6d466cedcb90)
* [TransmitFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file_1a91d04a84231d3f4089ec812ed62322c9)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a79d447e9b68b4c9c6445545764859836)

## Properties

### Property ReflectFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file_1aa8739974daf055a7a64a6d466cedcb90"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IOSS_ABgFile.ReflectFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IOSS_ABgFile.ReflectFile"}]}`
-->

### Property TransmitFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file_1a91d04a84231d3f4089ec812ed62322c9"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IOSS_ABgFile.TransmitFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IOSS_ABgFile.TransmitFile"}]}`
-->

## Public functions

### Function GetAvailableFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file_1ad30f10738ded04d52657094fc75abc5e"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IOSS_ABgFile.GetAvailableFiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IOSS_ABgFile.GetAvailableFiles"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
