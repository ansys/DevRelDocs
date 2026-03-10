# Interface ZOSAPI::Editors::NCE::IObjectRectangularVolume

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume"></a>

![][C#]
![][public]

**Definition**:


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
 Matlabvol 
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

* [ZOSAPI.Editors.NCE.IObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object)

## Members

* [FrontXAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1adbfb8be893d38d765d1b082dc8846836)
* [FrontXAngleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1af172f3caafb992f26a17c55d7258111b)
* [FrontYAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1ad70a27ab08575dfd24f2f4bca27e981d)
* [FrontYAngleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1aa9559b76c3e6fed379dc7e9548850297)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1ae417b5ad2c31f1142a793c586968a41f)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a26e6adbbd23135e3a72ee11e7b123a96)
* [RearXAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a179f26d3027b431e60a07328c0c86110)
* [RearXAngleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1ab1cfa0d0d2c6615e99a1fd4b776429dd)
* [RearYAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1abb34083e21da2d75259a3eb232561ee3)
* [RearYAngleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a93875ad13abc6cdcad54c4b0e1ddfa47)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1afa5e824950dbeeadae6a34a4bd179605)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a99f40e283bd5643d60beeb6a1bd586ba)
* [X1HalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a536468eca036569d0d759db616e70859)
* [X1HalfWidthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a866fb8cc83a3e587613a993979a51100)
* [X2HalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a904c63726b5d607ee7be96264ba72964)
* [X2HalfWidthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1ab5ffb2cd91ed52226509f144352f7bfb)
* [Y1HalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a1394b3a47a2e274a148db6d070e841e0)
* [Y1HalfWidthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a1653992dd9baf2da9ae011b11c25e9a8)
* [Y2HalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a9dfed2a499ca75aab43089ba15824f01)
* [Y2HalfWidthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a92d38601bf98f78dc9e5a29b6f5ba5b4)
* [ZLength](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1abcb73772f20b48325c95ea21fab96d63)
* [ZLengthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1acdf4b0bc5118b6682fa08a13b12ee37b)

## Properties

### Property X1HalfWidthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a866fb8cc83a3e587613a993979a51100"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.X1HalfWidthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.X1HalfWidthCell"}]}`
-->

### Property Y1HalfWidthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a1653992dd9baf2da9ae011b11c25e9a8"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y1HalfWidthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y1HalfWidthCell"}]}`
-->

### Property ZLengthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1acdf4b0bc5118b6682fa08a13b12ee37b"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.ZLengthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.ZLengthCell"}]}`
-->

### Property X2HalfWidthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1ab5ffb2cd91ed52226509f144352f7bfb"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.X2HalfWidthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.X2HalfWidthCell"}]}`
-->

### Property Y2HalfWidthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a92d38601bf98f78dc9e5a29b6f5ba5b4"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y2HalfWidthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y2HalfWidthCell"}]}`
-->

### Property FrontXAngleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1af172f3caafb992f26a17c55d7258111b"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontXAngleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontXAngleCell"}]}`
-->

### Property FrontYAngleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1aa9559b76c3e6fed379dc7e9548850297"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontYAngleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontYAngleCell"}]}`
-->

### Property RearXAngleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1ab1cfa0d0d2c6615e99a1fd4b776429dd"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearXAngleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearXAngleCell"}]}`
-->

### Property RearYAngleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a93875ad13abc6cdcad54c4b0e1ddfa47"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearYAngleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearYAngleCell"}]}`
-->

### Property X1HalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a536468eca036569d0d759db616e70859"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.X1HalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.X1HalfWidth"}]}`
-->

### Property Y1HalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a1394b3a47a2e274a148db6d070e841e0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y1HalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y1HalfWidth"}]}`
-->

### Property ZLength

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1abcb73772f20b48325c95ea21fab96d63"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.ZLength
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.ZLength"}]}`
-->

### Property X2HalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a904c63726b5d607ee7be96264ba72964"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.X2HalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.X2HalfWidth"}]}`
-->

### Property Y2HalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a9dfed2a499ca75aab43089ba15824f01"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y2HalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.Y2HalfWidth"}]}`
-->

### Property FrontXAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1adbfb8be893d38d765d1b082dc8846836"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontXAngle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontXAngle"}]}`
-->

### Property FrontYAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1ad70a27ab08575dfd24f2f4bca27e981d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontYAngle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.FrontYAngle"}]}`
-->

### Property RearXAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1a179f26d3027b431e60a07328c0c86110"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearXAngle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearXAngle"}]}`
-->

### Property RearYAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_1abb34083e21da2d75259a3eb232561ee3"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearYAngle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectRectangularVolume.RearYAngle"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)