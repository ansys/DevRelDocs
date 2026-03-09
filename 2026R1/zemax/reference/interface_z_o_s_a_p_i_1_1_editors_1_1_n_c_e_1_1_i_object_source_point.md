# Interface ZOSAPI::Editors::NCE::IObjectSourcePoint

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point"></a>

![][C#]
![][public]

**Definition**:


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

**Inherits from**:

* [ZOSAPI.Editors.NCE.IObjectSources](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources)

## Members

* [ColorNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1ac43345aa57291d9f3f7459d0898714df)
* [ColorNumberCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a4931f1f84c18e6ba19fe739a7568bcb8)
* [ConeAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point_1a48c040379d387781e2849349998128e4)
* [ConeAngleCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point_1a55319faa7de6887b9e30ee26c3e24c69)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1ae417b5ad2c31f1142a793c586968a41f)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a26e6adbbd23135e3a72ee11e7b123a96)
* [NumberOfAnalysisRays](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a90b08e551d43252e333f4d0c78af22c7)
* [NumberOfAnalysisRaysCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a6169d47a09123bebefe4d83fba367f6d)
* [NumberOfLayoutRays](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a5123beb47285f78c3eeced106078dae6)
* [NumberOfLayoutRaysCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a808939ad1b987104b0c0d1a05853f022)
* [Power](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a0ec42c168f30d22fa57f375d60c939a9)
* [PowerCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a5767ab50159caac35cc10051505bc2f2)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1afa5e824950dbeeadae6a34a4bd179605)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a99f40e283bd5643d60beeb6a1bd586ba)
* [WaveNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1a9360b33ef13f7c942566c3bd37a79c2f)
* [WaveNumberCell](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources_1aa66182684b36d60c5cd742f1c572b089)

## Properties

### Property ConeAngleCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point_1a55319faa7de6887b9e30ee26c3e24c69"></a>

![][public]

**Definition**:


```csharp
IEditorCell ZOSAPI.Editors.NCE.IObjectSourcePoint.ConeAngleCell
```


**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectSourcePoint.ConeAngleCell"}]}`
-->

### Property ConeAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point_1a48c040379d387781e2849349998128e4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IObjectSourcePoint.ConeAngle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectSourcePoint.ConeAngle"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)