# Interface ZOSAPI::Editors::NCE::IObjectDetectorRectangle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Detector Rectangle
            IObjectTypeSettings oType_3 = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle);
            Object_3.RefObject = 2;
            Object_3.ZPosition = 42;
            Object_3.Material = "ABSORB";
            Object_3.ChangeType(oType_3);
            IObjectDetectorRectangle DetRect3_data = Object_3.ObjectData as IObjectDetectorRectangle;
            DetRect3_data.XHalfWidth = 15;
            DetRect3_data.YHalfWidth = 15;
            DetRect3_data.NumberXPixels = 25;
            DetRect3_data.NumberYPixels = 25;
            DetRect3_data.DataType = 0;
            DetRect3_data.Color = 2;
            DetRect3_data.Smoothing = 1;
```
 C++ 
```csharp
    //Detector Rectangle
    IObjectTypeSettingsPtr oType_3 = Object_3->GetObjectTypeSettings(ObjectType_DetectorRectangle);
    Object_3->RefObject = 2;
    Object_3->ZPosition = 42;
    Object_3->Material = "ABSORB";
    Object_3->ChangeType(oType_3);
    IObjectDetectorRectanglePtr DetRect3_data = Object_3->ObjectData;
    DetRect3_data->XHalfWidth = 15;
    DetRect3_data->YHalfWidth = 15;
    DetRect3_data->NumberXPixels = 25;
    DetRect3_data->NumberYPixels = 25;
    DetRect3_data->DataType = 0;
    DetRect3_data->Color = 2;
    DetRect3_data->Smoothing = 1;
```
 Matlab 
```csharp
    % Detector Rectangle
    oType_3 = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle);
    Object_3.RefObject = 2;
    Object_3.ZPosition = 42;
    Object_3.Material = 'ABSORB';
    Object_3.ChangeType(oType_3);
    DetRect3_data = Object_3.ObjectData;
    DetRect3_data.XHalfWidth = 15;
    DetRect3_data.YHalfWidth = 15;
    DetRect3_data.NumberXPixels = 25;
    DetRect3_data.NumberYPixels = 25;
    DetRect3_data.DataType = 0;
    DetRect3_data.Color = 2;
    DetRect3_data.Smoothing = 1;
```
 Python 
```csharp
    # Detector Rectangle
    oType_3 = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle)
    Object_3.RefObject = 2
    Object_3.ZPosition = 42
    Object_3.Material = "ABSORB"
    Object_3.ChangeType(oType_3)
    DetRect3_data = Object_3.ObjectData
    DetRect3_data.XHalfWidth = 15
    DetRect3_data.YHalfWidth = 15
    DetRect3_data.NumberXPixels = 25
    DetRect3_data.NumberYPixels = 25
    DetRect3_data.DataType = 0
    DetRect3_data.Color = 2
    DetRect3_data.Smoothing = 1
```

**Inherits from**:

* [ZOSAPI.Editors.NCE.IObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object)

## Members

* [Color](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a20b51698bc466ef87bdaeb51d82dae3a)
* [ColorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a588d2fffd82c1535a1b47f18c39e87a9)
* [DataType](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1aad3946da3133426898e2fd8ccfdffef4)
* [DataTypeCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ac82e569dfde2c5fb5ce1411c0fa858f6)
* [FrontOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ae2d50e0ea9ce7407e17855b694b85a9b)
* [FrontOnlyCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a6637382c0a97c3ca3443b23125bf522f)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1ae417b5ad2c31f1142a793c586968a41f)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a26e6adbbd23135e3a72ee11e7b123a96)
* [Mirroring](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1afb4dbc7c5e3288b8977b51bed56791e5)
* [MirroringCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a215cf088e604266ea85d8df621a926a7)
* [NumberXPixels](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ad76888bff5419370e075cba9d3f3f560)
* [NumberXPixelsCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ad7e170954b4328a37323f4a9e9d341a7)
* [NumberYPixels](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a6a3b98a19e1f85861b726f297cddad9b)
* [NumberYPixelsCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a51c337e8bed2a6443976257fc85a7db2)
* [PlotScale](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a48c9a2444368cdbc4d689f1110c79cc8)
* [PlotScaleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a4ef7df70df16c5827e76648904a0343a)
* [Polarization](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af903e2949bddc4cbd8e10773cef38154)
* [PolarizationCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a50e4c1b17e0893b49d87584c1f23fbd8)
* [PsfWaveNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af4250be7257c275e3a9e8ada903ceab5)
* [PsfWaveNumberCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a1f7dd413df641a02a8aab0ae1e7f5062)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1afa5e824950dbeeadae6a34a4bd179605)
* [Scale](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a81086a7e19faddf12bd05cbb526b3b21)
* [ScaleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a420fca1735e1411f6116c0f5d5c65516)
* [Smoothing](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a38fae4973022f9aa709f6a92bc141d36)
* [SmoothingCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ad3017940a8716c9ba36e169bec055905)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a99f40e283bd5643d60beeb6a1bd586ba)
* [XAngleMax](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1aae6f4aa5d5a4fd874484839eb4e5d586)
* [XAngleMaxCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a7b06ac6bbb3b9e34052027deb08f4cf1)
* [XAngleMin](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af8d78cbd1f1c3397c68eba895644e0cd)
* [XAngleMinCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a43ce8ed19faa4e13f60e42cd3a7845d4)
* [XHalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a1389d895dbf232658c0e2cb3e11a6895)
* [XHalfWidthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a1c15e98d2951e665e9eaa6525dd021c6)
* [YAngleMax](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a02577431ba5945365f511016e18832e4)
* [YAngleMaxCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a44406d23afdfd3ab0e45d18db08c6840)
* [YAngleMin](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a854632daec7092575bccee7564939ada)
* [YAngleMinCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ae07063b224df55f0939f5ad57aba0186)
* [YHalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a4c0e6f5ed762f47c7f8e12909d054621)
* [YHalfWidthCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af1cebf9d2fc5436130026230f7813f9e)

## Properties

### Property XHalfWidthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a1c15e98d2951e665e9eaa6525dd021c6"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XHalfWidthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XHalfWidthCell"}]}`
-->

### Property YHalfWidthCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af1cebf9d2fc5436130026230f7813f9e"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YHalfWidthCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YHalfWidthCell"}]}`
-->

### Property NumberXPixelsCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ad7e170954b4328a37323f4a9e9d341a7"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberXPixelsCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberXPixelsCell"}]}`
-->

### Property NumberYPixelsCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a51c337e8bed2a6443976257fc85a7db2"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberYPixelsCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberYPixelsCell"}]}`
-->

### Property DataTypeCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ac82e569dfde2c5fb5ce1411c0fa858f6"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.DataTypeCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.DataTypeCell"}]}`
-->

### Property ColorCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a588d2fffd82c1535a1b47f18c39e87a9"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.ColorCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.ColorCell"}]}`
-->

### Property SmoothingCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ad3017940a8716c9ba36e169bec055905"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.SmoothingCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.SmoothingCell"}]}`
-->

### Property ScaleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a420fca1735e1411f6116c0f5d5c65516"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.ScaleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.ScaleCell"}]}`
-->

### Property PlotScaleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a4ef7df70df16c5827e76648904a0343a"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PlotScaleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PlotScaleCell"}]}`
-->

### Property FrontOnlyCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a6637382c0a97c3ca3443b23125bf522f"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.FrontOnlyCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.FrontOnlyCell"}]}`
-->

### Property PsfWaveNumberCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a1f7dd413df641a02a8aab0ae1e7f5062"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PsfWaveNumberCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PsfWaveNumberCell"}]}`
-->

### Property XAngleMinCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a43ce8ed19faa4e13f60e42cd3a7845d4"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMinCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMinCell"}]}`
-->

### Property XAngleMaxCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a7b06ac6bbb3b9e34052027deb08f4cf1"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMaxCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMaxCell"}]}`
-->

### Property YAngleMinCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ae07063b224df55f0939f5ad57aba0186"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMinCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMinCell"}]}`
-->

### Property YAngleMaxCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a44406d23afdfd3ab0e45d18db08c6840"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMaxCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMaxCell"}]}`
-->

### Property PolarizationCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a50e4c1b17e0893b49d87584c1f23fbd8"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PolarizationCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PolarizationCell"}]}`
-->

### Property MirroringCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a215cf088e604266ea85d8df621a926a7"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectDetectorRectangle.MirroringCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.MirroringCell"}]}`
-->

### Property XHalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a1389d895dbf232658c0e2cb3e11a6895"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XHalfWidth
```


Usage (see [Example 06](page_ex06.md#page_ex06) for a full sample)


C# 
```csharp
            // modify object's cell values in the NCE
            ((IObjectSources)o1.ObjectData).NumberOfAnalysisRays = (int)1e6;
            ((IObjectSources)o1.ObjectData).NumberOfLayoutRays = 10;
            ((IObjectSourcePoint)o1.ObjectData).ConeAngle = 2.5;

            o2.ZPosition = 1;
            ((IObjectDetectorRectangle)o2.ObjectData).XHalfWidth = 0.1;
            ((IObjectDetectorRectangle)o2.ObjectData).YHalfWidth = 0.1;
            ((IObjectDetectorRectangle)o2.ObjectData).NumberXPixels = 100;
            ((IObjectDetectorRectangle)o2.ObjectData).NumberYPixels = 100;
```
 C++ 
```csharp
    // modify object's cell values in the NCE
    ((IObjectSourcesPtr)o1->ObjectData)->NumberOfAnalysisRays = (int)1e6;
    ((IObjectSourcesPtr)o1->ObjectData)->NumberOfLayoutRays = 10;
    ((IObjectSourcePointPtr)o1->ObjectData)->ConeAngle = 2.5;

    o2->ZPosition = 1;
    ((IObjectDetectorRectanglePtr)o2->ObjectData)->XHalfWidth = 0.1;
    ((IObjectDetectorRectanglePtr)o2->ObjectData)->YHalfWidth = 0.1;
    ((IObjectDetectorRectanglePtr)o2->ObjectData)->NumberXPixels = 100;
    ((IObjectDetectorRectanglePtr)o2->ObjectData)->NumberYPixels = 100;
```
 Matlab 
```csharp
    % modify object's cell values in the NCE
    o1.ObjectData.NumberOfAnalysisRays = 1e6;
    o1.ObjectData.NumberOfLayoutRays = 10;
    o1.ObjectData.ConeAngle = 2.5;
    
    o2.ZPosition = 1;
    o2.ObjectData.XHalfWidth = 0.1;
    o2.ObjectData.YHalfWidth = 0.1;
    o2.ObjectData.NumberXPixels = 100;
    o2.ObjectData.NumberYPixels = 100;
```
 Python 
```csharp
    # modify object's cell values in the NCE
    o1.ObjectData.NumberOfAnalysisRays = 1e6
    o1.ObjectData.NumberOfLayoutRays = 10
    o1.ObjectData.ConeAngle = 2.5

    o2.ZPosition = 1
    o2.ObjectData.XHalfWidth = 0.1
    o2.ObjectData.YHalfWidth = 0.1
    o2.ObjectData.NumberXPixels = 100
    o2.ObjectData.NumberYPixels = 100
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XHalfWidth"}]}`
-->

### Property YHalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a4c0e6f5ed762f47c7f8e12909d054621"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YHalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YHalfWidth"}]}`
-->

### Property NumberXPixels

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ad76888bff5419370e075cba9d3f3f560"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberXPixels
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberXPixels"}]}`
-->

### Property NumberYPixels

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a6a3b98a19e1f85861b726f297cddad9b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberYPixels
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.NumberYPixels"}]}`
-->

### Property DataType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1aad3946da3133426898e2fd8ccfdffef4"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.DataType
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.DataType"}]}`
-->

### Property Color

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a20b51698bc466ef87bdaeb51d82dae3a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Color
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Color"}]}`
-->

### Property Smoothing

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a38fae4973022f9aa709f6a92bc141d36"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Smoothing
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Smoothing"}]}`
-->

### Property Scale

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a81086a7e19faddf12bd05cbb526b3b21"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Scale
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Scale"}]}`
-->

### Property PlotScale

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a48c9a2444368cdbc4d689f1110c79cc8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PlotScale
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PlotScale"}]}`
-->

### Property FrontOnly

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1ae2d50e0ea9ce7407e17855b694b85a9b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.FrontOnly
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.FrontOnly"}]}`
-->

### Property PsfWaveNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af4250be7257c275e3a9e8ada903ceab5"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PsfWaveNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.PsfWaveNumber"}]}`
-->

### Property XAngleMin

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af8d78cbd1f1c3397c68eba895644e0cd"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMin
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMin"}]}`
-->

### Property XAngleMax

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1aae6f4aa5d5a4fd874484839eb4e5d586"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMax
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.XAngleMax"}]}`
-->

### Property YAngleMin

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a854632daec7092575bccee7564939ada"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMin
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMin"}]}`
-->

### Property YAngleMax

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1a02577431ba5945365f511016e18832e4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMax
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.YAngleMax"}]}`
-->

### Property Polarization

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1af903e2949bddc4cbd8e10773cef38154"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Polarization
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Polarization"}]}`
-->

### Property Mirroring

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle_1afb4dbc7c5e3288b8977b51bed56791e5"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Mirroring
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetectorRectangle.Mirroring"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)