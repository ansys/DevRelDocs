# Interface ZOSAPI::Editors::NCE::INCEVolumePhysicsData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data"></a>

![][C#]
![][public]

**Definition**:

Object properties Volume Physics tab. This interface can be accessed via the INCERow interface.


## Members

* [IsVolumePhysicsAvailable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1abd2078f16e29cdfbfb664c06587f855a)
* [Model](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1a2809e426524d29845e0767b0a8ba8c40)
* [ModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1ab88387c98188498097b0cebd62072cc1)
* [WavelengthShift](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1ada6fb11fd22a41077940a58871889852)

## Properties

### Property IsVolumePhysicsAvailable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1abd2078f16e29cdfbfb664c06587f855a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCEVolumePhysicsData.IsVolumePhysicsAvailable
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEVolumePhysicsData.IsVolumePhysicsAvailable"}]}`
-->

### Property Model

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1a2809e426524d29845e0767b0a8ba8c40"></a>

![][public]

**Definition**:


```csharp
VolumePhysicsModelType ZOSAPI.Editors.NCE.INCEVolumePhysicsData.Model
```


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
 Matlab 
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


**Return type**: [VolumePhysicsModelType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEVolumePhysicsData.Model"}]}`
-->

### Property ModelSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1ab88387c98188498097b0cebd62072cc1"></a>

![][public]

**Definition**:


```csharp
IVolumePhysicsModelSettings ZOSAPI.Editors.NCE.INCEVolumePhysicsData.ModelSettings
```


Gets the model settings for the current model type.

The current model settings.


**Return type**: [IVolumePhysicsModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEVolumePhysicsData.ModelSettings"}]}`
-->

### Property WavelengthShift

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data_1ada6fb11fd22a41077940a58871889852"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.INCEVolumePhysicsData.WavelengthShift
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCEVolumePhysicsData.WavelengthShift"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)