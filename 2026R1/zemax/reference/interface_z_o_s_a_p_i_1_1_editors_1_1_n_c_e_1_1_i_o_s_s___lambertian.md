# Interface ZOSAPI::Editors::NCE::IOSS\_Lambertian

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___lambertian"></a>

![][C#]
![][public]

**Definition**:

Object Scattering Settings - Lambertian. This interface can be accessed via the INCECoatScatterFaceData interface.


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
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a2d8f29d5bc47a522983be45df7dc684a)
* [ScatterFraction](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___lambertian.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___lambertian_1af4254b9def3281f9c7262990a788608e)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings_1a79d447e9b68b4c9c6445545764859836)

## Properties

### Property ScatterFraction

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___lambertian_1af4254b9def3281f9c7262990a788608e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IOSS_Lambertian.ScatterFraction
```


Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Make Face 1 of object 3 has Lambertian scattering properties
            // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
            // And then assign is to object 3 by ChangeScatterModelSettings().
            IObjectScatteringSettings ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ObjectScatteringTypes.Lambertian);
            ScatType_Lam._S_Lambertian.ScatterFraction = 1;
            Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
            Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
```
 C++ 
```csharp
    // Make Face 1 of object 3 has Lambertian scattering properties
    // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    // And then assign is to object 3 by ChangeScatterModelSettings().
    IObjectScatteringSettingsPtr ScatType_Lam = Object_3->CoatScatterData->GetFaceData(1)->CreateScatterModelSettings(ObjectScatteringTypes_Lambertian);
    ScatType_Lam->_S_Lambertian->ScatterFraction = 1;
    Object_3->CoatScatterData->GetFaceData(1)->ChangeScatterModelSettings(ScatType_Lam);
    Object_3->CoatScatterData->GetFaceData(1)->NumberOfRays = 1;
```
 Matlab 
```csharp
    % Make Face 1 of object 3 has Lambertian scattering properties
    % To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    % And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    ScatType_Lam.S_Lambertian_.ScatterFraction = 1;
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
```
 Python 
```csharp
    # Make Face 1 of object 3 has Lambertian scattering properties
    # To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    # And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    ScatType_Lam._S_Lambertian.ScatterFraction = 1
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam)
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IOSS_Lambertian.ScatterFraction"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)