# Interface ZOSAPI::Editors::NCE::IVMPS_AngleScattering

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering"></a>

![][C#]
![][public]

**Definition**:

Volume Physics Model - Angle Scattering. This interface can be accessed via the INCEVolumePhysicsData interface.

Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Rectangular Volume
            //Scattering properties
            //Draw:opacity set to 50%
            IObjectTypeSettings oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume);
            Object_2.ChangeType(oType_2);
            Object_2.ZPosition = 2;
            Object_2.Material = "N-BK7";
            IObjectRectangularVolume RectVolume2_data = Object_2.ObjectData as IObjectRectangularVolume;
            RectVolume2_data.X1HalfWidth = 12;
            RectVolume2_data.Y1HalfWidth = 12;
            RectVolume2_data.ZLength = 40;
            RectVolume2_data.X2HalfWidth = 12;
            RectVolume2_data.Y2HalfWidth = 12;
            INCEVolumePhysicsData RectVolume2_volphysdata = Object_2.VolumePhysicsData;
            RectVolume2_volphysdata.Model = VolumePhysicsModelType.AngleScattering;
            RectVolume2_volphysdata.ModelSettings._S_AngleScattering.MeanPath = 5;
            RectVolume2_volphysdata.ModelSettings._S_AngleScattering.Angle = 30;
            INCEDrawData RectVolume2_Drawdata = Object_2.DrawData;
            RectVolume2_Drawdata.Opacity = ZOSAPI.Common.ZemaxOpacity.P50;
```
 C++ 
```csharp
    //Rectangular Volume
    //Scattering properties
    //Draw:opacity set to 50%
    IObjectTypeSettingsPtr oType_2 = Object_2->GetObjectTypeSettings(ObjectType_RectangularVolume);
    Object_2->ChangeType(oType_2);
    Object_2->ZPosition = 2;
    Object_2->Material = "N-BK7";
    IObjectRectangularVolumePtr RectVolume2_data = Object_2->ObjectData;
    RectVolume2_data->X1HalfWidth = 12;
    RectVolume2_data->Y1HalfWidth = 12;
    RectVolume2_data->ZLength = 40;
    RectVolume2_data->X2HalfWidth = 12;
    RectVolume2_data->Y2HalfWidth = 12;
    INCEVolumePhysicsDataPtr RectVolume2_volphysdata = Object_2->VolumePhysicsData;
    RectVolume2_volphysdata->Model = VolumePhysicsModelType_AngleScattering;
    RectVolume2_volphysdata->ModelSettings->_S_AngleScattering->MeanPath = 5;
    RectVolume2_volphysdata->ModelSettings->_S_AngleScattering->Angle = 30;
    INCEDrawDataPtr RectVolume2_Drawdata = Object_2->DrawData;
    RectVolume2_Drawdata->Opacity = ZemaxOpacity_P50;
```
 Matlabdr 
```csharp
    % Rectangular Volume
    % Scattering Properties
    % Draw:opacity set to 50%
    oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume);
    Object_2.ChangeType(oType_2);
    Object_2.ZPosition = 2;
    Object_2.Material = 'N-BK7';
    RectVolume2_data = Object_2.ObjectData;
    RectVolume2_data.X1HalfWidth = 12;
    RectVolume2_data.Y1HalfWidth = 12;
    RectVolume2_data.ZLength = 40;
    RectVolume2_data.X2HalfWidth = 12;
    RectVolume2_data.Y2HalfWidth = 12;
    RectVolume2_volphysdata = Object_2.VolumePhysicsData;
    RectVolume2_volphysdata.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.AngleScattering;
    RectVolume2_volphysdata.ModelSettings.S_AngleScattering_.MeanPath = 5;
    RectVolume2_volphysdata.ModelSettings.S_AngleScattering_.Angle = 30;
    RectVolume2_DrawData = Object_2.DrawData;
    RectVolume2_DrawData.Opacity = ZOSAPI.Common.ZemaxOpacity.P50;
```
 Python 
```csharp
    # Rectangular Volume
    # Scattering Properties
    # Draw:opacity set to 50%
    oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume)
    Object_2.ChangeType(oType_2)
    Object_2.ZPosition = 2
    Object_2.Material = "N-BK7"
    RectVolume2_data = Object_2.ObjectData
    RectVolume2_data.X1HalfWidth = 12
    RectVolume2_data.Y1HalfWidth = 12
    RectVolume2_data.ZLength = 40
    RectVolume2_data.X2HalfWidth = 12
    RectVolume2_data.Y2HalfWidth = 12
    RectVolume2_volphysdata = Object_2.VolumePhysicsData
    RectVolume2_volphysdata.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.AngleScattering
    RectVolume2_volphysdata.ModelSettings._S_AngleScattering.MeanPath = 5
    RectVolume2_volphysdata.ModelSettings._S_AngleScattering.Angle = 30
    RectVolume2_DrawData = Object_2.DrawData
    RectVolume2_DrawData.Opacity = ZOSAPI.Common.ZemaxOpacity.P50
```

**Inherits from**:

* [ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings)

## Members

* [\_S\_AngleScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a0d6315e8c4490ccb8a2cf5ce52475f7c)
* [\_S\_DLLDefinedScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a91d7f75ed8ff7548eda882ad739bcef5)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a2637b01347f773302d2c2f4d75fc3458)
* [\_S\_PhotoluminescenceModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a1abfcd38f597d1840ad99c41824bbab0)
* [Angle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering_1a80caaaaea33c97c37e786c0d215fcd60)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1abdd68a49b7ecece33bc38c8c639ef023)
* [MeanPath](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering_1a063005fa87d9277db03e65959ca7a7cb)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a9007f1942da20d97b25df1bbb9cdbbb1)

## Properties

### Property MeanPath

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering_1a063005fa87d9277db03e65959ca7a7cb"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_AngleScattering.MeanPath
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_AngleScattering.MeanPath"}]}`
-->

### Property Angle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering_1a80caaaaea33c97c37e786c0d215fcd60"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_AngleScattering.Angle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_AngleScattering.Angle"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)