# Interface ZOSAPI::Tools::General::IExportCAD

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for exporting the current system to various CAD formats. This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 20](page_ex20.md#page_ex20) for a full sample)


C# 
```csharp
            // default option settings
            ToolExportCAD.FirstObject = 1;
            ToolExportCAD.LastObject = 8;
            ToolExportCAD.RayLayer = 1;
            ToolExportCAD.LensLayer = 0;
            ToolExportCAD.DummyThickness = 1;
            ToolExportCAD.SplineSegments = SplineSegmentsType.N_032;
            ToolExportCAD.FileType = CADFileType.STEP;
            ToolExportCAD.Tolerance = CADToleranceType.N_TenEMinus4;
            ToolExportCAD.SetCurrentConfiguration();
            // For other configuration choices, use following methods.
            //ToolExportCAD.SetConfigurationAllAtOnce();
            //ToolExportCAD.SetConfigurationAllByFile();
            //ToolExportCAD.SetConfigurationAllByLayer();
            //ToolExportCAD.SetSingleConfiguration(1);
```
 C++ 
```csharp
    // default option settings
    ToolExportCAD->FirstObject = 1;
    ToolExportCAD->LastObject = 8;
    ToolExportCAD->RayLayer = 1;
    ToolExportCAD->LensLayer = 0;
    ToolExportCAD->DummyThickness = 1;
    ToolExportCAD->SplineSegments = SplineSegmentsType_N_032;
    ToolExportCAD->FileType = CADFileType_STEP;
    ToolExportCAD->Tolerance = CADToleranceType_N_TenEMinus4;
    ToolExportCAD->SetCurrentConfiguration();
    // For other configuration choices, use following methods.
    //ToolExportCAD->SetConfigurationAllAtOnce();
    //ToolExportCAD->SetConfigurationAllByFile();
    //ToolExportCAD->SetConfigurationAllByLayer();
    //ToolExportCAD->SetSingleConfiguration(1);
```
 Matlab 
```csharp
    % default option settings
    ToolExportCAD.FirstObject = 1;
    ToolExportCAD.LastObject = 8;
    ToolExportCAD.RayLayer = 1;
    ToolExportCAD.LensLayer = 0;
    ToolExportCAD.DummyThickness = 1;
    ToolExportCAD.SplineSegments = ZOSAPI.Tools.General.SplineSegmentsType.N_032;
    ToolExportCAD.FileType = ZOSAPI.Tools.General.CADFileType.STEP;
    ToolExportCAD.Tolerance = ZOSAPI.Tools.General.CADToleranceType.N_TenEMinus4;
    ToolExportCAD.SetCurrentConfiguration();
    % For other configuration choices, use following methods.
    %ToolExportCAD.SetConfigurationAllAtOnce();
    %ToolExportCAD.SetConfigurationAllByFile();
    %ToolExportCAD.SetConfigurationAllByLayer();
    %ToolExportCAD.SetSingleConfiguration(1);
```
 Python 
```csharp
    # default option settings
    ToolExportCAD.FirstObject = 1
    ToolExportCAD.LastObject = 8
    ToolExportCAD.RayLayer = 1
    ToolExportCAD.LensLayer = 0
    ToolExportCAD.DummyThickness = 1
    ToolExportCAD.SplineSegments = ZOSAPI.Tools.General.SplineSegmentsType.N_032
    ToolExportCAD.FileType = ZOSAPI.Tools.General.CADFileType.STEP
    ToolExportCAD.Tolerance = ZOSAPI.Tools.General.CADToleranceType.N_TenEMinus4
    ToolExportCAD.SetCurrentConfiguration()
    # For other configuration choices, use following methods.
    # ToolExportCAD.SetConfigurationAllAtOnce()
    # ToolExportCAD.SetConfigurationAllByFile()
    # ToolExportCAD.SetConfigurationAllByLayer()
    # ToolExportCAD.SetSingleConfiguration(1)
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [AngularTolerance](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1afe75cd39b8438f32c6d4a00de8765242)
* [AutoNameFaces](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7ddb868c6c77abcbab9da3eb23d6e8be)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [CanChangeSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1afe17976514cc36385a5937c28606835f)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [Configuration](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a2f7f44afd7fe27a2da6fa033b09dbeda)
* [DeleteVignetted](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1abacbe12e4aafbb6c8c9a665045c40f17)
* [DummyThickness](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a6cf8a6e7492949cbfe0753b8cdfa0f1a)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [ExportChiefRay](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1af2b3d51035bb1dafbf5210f5613c889d)
* [ExportDummySurfaces](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1aa54e9c4c294ab95abb20341b3816eadd)
* [ExportRayFootprint](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1abac8ebe988de329c07c048cb9e62a270)
* [Field](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a197e352d734b3caf30e7f49cdbed4cf2)
* [FileType](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a00d526412fbca23bb6629f12a2fc0963)
* [FileVersion](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1aa612fd3b8047dcb1268db4aa11a00880)
* [FirstObject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ab2f002178ed78aa02f0cfa3ec6837806)
* [FirstSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a5c5cee11f7352582e7e05abcd95c3687)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [LastObject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ae8b39f5537af4fc0901ef69d55e7241f)
* [LastSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a539c023380d5516d89b17b0288bb86ea)
* [LensLayer](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a08c3ff68416d99d6046d2ffd9f8cfd6b)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a11b029c11f4d30c62bab626234fc5943)
* [OutputFileName](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ac093c72409a596a8fff73dacc8db89fc)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [RayFilter](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a4b6f7efa3befbeecd7f726e5d7d7a2d4)
* [RayFootprintLayer](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1aab67c55a5649a32da756dba18919fcef)
* [RayLayer](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7c864569542ca26e31191f48d4d18d10)
* [RayPattern](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ac5bd6f0eab34bae834c279fb564fea4c)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [ScatterNSCRays](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a9b048c158f4cd8ec739165280ba366ec)
* [SequentialSettingsEnabled](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7a74278d1ef8e50b7a21363efc4fbdc9)
* [SetConfigurationAllAtOnce](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7e732757607c2be3c3b6abe6b56bb2f4)
* [SetConfigurationAllByFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a5ae88b3d771319f8a348fc9e50c505e1)
* [SetConfigurationAllByLayer](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1af5d00ffe899bce9df077650402b75af7)
* [SetCurrentConfiguration](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a26fd31e24262a5ff040a5e170fedfc28)
* [SetFieldAll](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a3f632b46385cb688d358020d8d93dc31)
* [SetSingleConfiguration](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ad64a5132c9d5843c8d39e6fe20f80f0d)
* [SetWavelengthAll](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a859246424e645de9c0d468c6a85046d4)
* [SplineSegments](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ac6805babf3a3b8e6108c1c9dfc49f1de)
* [SplitNSCRays](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a64a9b9990893c79e1be9c76b585ca1bc)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [SurfacesAsSolids](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7f23f5d7146665ae10862cab9a04705c)
* [Tolerance](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a42522b02f3e7aa0e8df94880d25ecce2)
* [UsePolarization](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a2902e3bb60b20468c67ba2930ea71c45)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)
* [Wavelength](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a78fa7e7cc18f725b2750f79ca6d4e7cd)

## Properties

### Property FirstSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a5c5cee11f7352582e7e05abcd95c3687"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.FirstSurface
```


Gets or sets the first surface to include in the CAD file (0 to [ZOSAPI.Editors.LDE.ILensDataEditor.NumberOfSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a2d87212901ae5122ba17d1a7a6acce09)-2).

The first surface.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.FirstSurface"}]}`
-->

### Property LastSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a539c023380d5516d89b17b0288bb86ea"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.LastSurface
```


Gets or sets the last surface to include in the CAD file (1 to [ZOSAPI.Editors.LDE.ILensDataEditor.NumberOfSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a2d87212901ae5122ba17d1a7a6acce09)-1).

The last surface.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.LastSurface"}]}`
-->

### Property CanChangeSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1afe17976514cc36385a5937c28606835f"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.CanChangeSurface
```


Gets a value indicating whether the surface is modifiable. For non-sequential systems, the surface will be fixed at surface 1.

<code>true</code> if the surface can be changed; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.CanChangeSurface"}]}`
-->

### Property FirstObject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ab2f002178ed78aa02f0cfa3ec6837806"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.FirstObject
```


Gets or sets the first object to include in the CAD file (1 to [ZOSAPI.Editors.NCE.INonSeqEditor.NumberOfObjects](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor_1a42b3efb6b6c2c8ccb2828d23a7a395c2)). Note that this settings is only valid for pure non-sequential systems.

The first object.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.FirstObject"}]}`
-->

### Property LastObject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ae8b39f5537af4fc0901ef69d55e7241f"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.LastObject
```


Gets or sets the last object to include in the CAD file (1 to [ZOSAPI.Editors.NCE.INonSeqEditor.NumberOfObjects](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor_1a42b3efb6b6c2c8ccb2828d23a7a395c2)).

The last object.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.LastObject"}]}`
-->

### Property SequentialSettingsEnabled

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7a74278d1ef8e50b7a21363efc4fbdc9"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.SequentialSettingsEnabled
```


Gets a value indicating whether or not the sequential-only settings are used. These settings include:

RayPattern


NumberOfRays


Wavelength


SetWavelengthAll


Field


SetFieldAll


DeleteVignetted


<code>true</code> if the sequentials settings are available; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SequentialSettingsEnabled"}]}`
-->

### Property RayPattern

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ac5bd6f0eab34bae834c279fb564fea4c"></a>

![][public]

**Definition**:


```csharp
RayPatternType ZOSAPI.Tools.General.IExportCAD.RayPattern
```


**Return type**: [RayPatternType](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1a0833493cea5f58e88e3c557184f8c8d2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.RayPattern"}]}`
-->

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a11b029c11f4d30c62bab626234fc5943"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.NumberOfRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.NumberOfRays"}]}`
-->

### Property Wavelength

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a78fa7e7cc18f725b2750f79ca6d4e7cd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.Wavelength
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.Wavelength"}]}`
-->

### Property Field

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a197e352d734b3caf30e7f49cdbed4cf2"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.Field
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.Field"}]}`
-->

### Property DeleteVignetted

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1abacbe12e4aafbb6c8c9a665045c40f17"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.DeleteVignetted
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.DeleteVignetted"}]}`
-->

### Property RayLayer

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7c864569542ca26e31191f48d4d18d10"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.RayLayer
```


Gets or sets the ray layer (0 to 20).

The desired ray layer.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.RayLayer"}]}`
-->

### Property LensLayer

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a08c3ff68416d99d6046d2ffd9f8cfd6b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.LensLayer
```


Gets or sets the lens layer (0 to 20).

The desired lens layer.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.LensLayer"}]}`
-->

### Property DummyThickness

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a6cf8a6e7492949cbfe0753b8cdfa0f1a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.General.IExportCAD.DummyThickness
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.DummyThickness"}]}`
-->

### Property SplineSegments

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ac6805babf3a3b8e6108c1c9dfc49f1de"></a>

![][public]

**Definition**:


```csharp
SplineSegmentsType ZOSAPI.Tools.General.IExportCAD.SplineSegments
```


**Return type**: [SplineSegmentsType](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1ac7bc92335d84b37013503e1b92a28e22)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SplineSegments"}]}`
-->

### Property FileType

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a00d526412fbca23bb6629f12a2fc0963"></a>

![][public]

**Definition**:


```csharp
CADFileType ZOSAPI.Tools.General.IExportCAD.FileType
```


**Return type**: [CADFileType](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1aa8038711502dd1a7ebe3b181d7f7d2a1)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.FileType"}]}`
-->

### Property Tolerance

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a42522b02f3e7aa0e8df94880d25ecce2"></a>

![][public]

**Definition**:


```csharp
CADToleranceType ZOSAPI.Tools.General.IExportCAD.Tolerance
```


**Return type**: [CADToleranceType](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1aa99cc7ff7bdef0cc7700d4da164b2668)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.Tolerance"}]}`
-->

### Property AngularTolerance

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1afe75cd39b8438f32c6d4a00de8765242"></a>

![][public]

**Definition**:


```csharp
CADAngularToleranceType ZOSAPI.Tools.General.IExportCAD.AngularTolerance
```


**Return type**: [CADAngularToleranceType](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1ac08ab7cfc9f32020380dfe4111397ba9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.AngularTolerance"}]}`
-->

### Property Configuration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a2f7f44afd7fe27a2da6fa033b09dbeda"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.Configuration
```


Gets the current configuration setting. Use one of the following methods to change the configuration setting:

SetSingleConfiguration


SetConfigurationAllByLayer


SetConfigurationAllByFile


SetConfigurationAllAtOnce


The configuration.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.Configuration"}]}`
-->

### Property ExportDummySurfaces

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1aa54e9c4c294ab95abb20341b3816eadd"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.ExportDummySurfaces
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.ExportDummySurfaces"}]}`
-->

### Property SurfacesAsSolids

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7f23f5d7146665ae10862cab9a04705c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.SurfacesAsSolids
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SurfacesAsSolids"}]}`
-->

### Property ScatterNSCRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a9b048c158f4cd8ec739165280ba366ec"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.ScatterNSCRays
```


Usage (see [Example 20](page_ex20.md#page_ex20) for a full sample)


C# 
```csharp
            // default check boxes settings
            ToolExportCAD.SurfacesAsSolids = true;
            ToolExportCAD.ScatterNSCRays = false;
            ToolExportCAD.ExportDummySurfaces = false;
            ToolExportCAD.SplitNSCRays = false;
            ToolExportCAD.UsePolarization = false;
```
 C++ 
```csharp
    // default check boxes settings
    ToolExportCAD->SurfacesAsSolids = true;
    ToolExportCAD->ScatterNSCRays = false;
    ToolExportCAD->ExportDummySurfaces = false;
    ToolExportCAD->SplitNSCRays = false;
    ToolExportCAD->UsePolarization = false;
```
 Matlab 
```csharp
    % default check boxes settings
    ToolExportCAD.SurfacesAsSolids = true;
    ToolExportCAD.ScatterNSCRays = false;
    ToolExportCAD.ExportDummySurfaces = false;
    ToolExportCAD.SplitNSCRays = false;
    ToolExportCAD.UsePolarization = false;
```
 Python 
```csharp
    # default check boxes settings
    ToolExportCAD.SurfacesAsSolids = True
    ToolExportCAD.ScatterNSCRays = False
    ToolExportCAD.ExportDummySurfaces = False
    ToolExportCAD.SplitNSCRays = False
    ToolExportCAD.UsePolarization = False
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.ScatterNSCRays"}]}`
-->

### Property SplitNSCRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a64a9b9990893c79e1be9c76b585ca1bc"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.SplitNSCRays
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SplitNSCRays"}]}`
-->

### Property UsePolarization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a2902e3bb60b20468c67ba2930ea71c45"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.UsePolarization
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.UsePolarization"}]}`
-->

### Property OutputFileName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ac093c72409a596a8fff73dacc8db89fc"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.General.IExportCAD.OutputFileName
```


Usage (see [Example 20](page_ex20.md#page_ex20) for a full sample)


C# 
```csharp
            // set output file name
            ToolExportCAD.OutputFileName = TheApplication.ObjectsDir + "\\CAD Files\\e20_export_CAD_File.step";
```
 C++ 
```csharp
    // set output file name
    ToolExportCAD->OutputFileName = TheApplication->ObjectsDir + "\\CAD Files\\API_CADexport_sample.step";
```
 Matlab 
```csharp
    % set output file name
    ToolExportCAD.OutputFileName = System.String.Concat(TheApplication.ObjectsDir, '\\CAD Files\\API_CADexport_sample.step');
```
 Python 
```csharp
    # set output file name
    ToolExportCAD.OutputFileName = TheApplication.ObjectsDir + '\\CAD Files\\API_CADexport_sample.step'
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.OutputFileName"}]}`
-->

### Property AutoNameFaces

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7ddb868c6c77abcbab9da3eb23d6e8be"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.AutoNameFaces
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.AutoNameFaces"}]}`
-->

### Property FileVersion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1aa612fd3b8047dcb1268db4aa11a00880"></a>

![][public]

**Definition**:


```csharp
ACISExportVersion ZOSAPI.Tools.General.IExportCAD.FileVersion
```


**Return type**: [ACISExportVersion](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1abab4afdfdc095f30f55fb01f91b411c0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.FileVersion"}]}`
-->

### Property ExportRayFootprint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1abac8ebe988de329c07c048cb9e62a270"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.ExportRayFootprint
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.ExportRayFootprint"}]}`
-->

### Property RayFootprintLayer

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1aab67c55a5649a32da756dba18919fcef"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IExportCAD.RayFootprintLayer
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.RayFootprintLayer"}]}`
-->

### Property ExportChiefRay

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1af2b3d51035bb1dafbf5210f5613c889d"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IExportCAD.ExportChiefRay
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.ExportChiefRay"}]}`
-->

### Property RayFilter

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a4b6f7efa3befbeecd7f726e5d7d7a2d4"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.General.IExportCAD.RayFilter
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.RayFilter"}]}`
-->

## Public functions

### Function SetWavelengthAll

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a859246424e645de9c0d468c6a85046d4"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetWavelengthAll()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetWavelengthAll"}]}`
-->

### Function SetFieldAll

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a3f632b46385cb688d358020d8d93dc31"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetFieldAll()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetFieldAll"}]}`
-->

### Function SetSingleConfiguration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1ad64a5132c9d5843c8d39e6fe20f80f0d"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetSingleConfiguration(int ConfigurationNumber)
```


Set it to export a single configuration of the current system.

**Parameters**:

* **ConfigurationNumber**: The configuration number (0 to [ZOSAPI.Editors.MCE.IMultiConfigEditor.NumberOfConfigurations](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor_1aff9ad113e8d62ec394a0601a1f5188b6)). Use 0 for the current configuration.


**Parameters**:

* int **ConfigurationNumber**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetSingleConfiguration"}]}`
-->

### Function SetCurrentConfiguration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a26fd31e24262a5ff040a5e170fedfc28"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetCurrentConfiguration()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetCurrentConfiguration"}]}`
-->

### Function SetConfigurationAllByLayer

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1af5d00ffe899bce9df077650402b75af7"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetConfigurationAllByLayer()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetConfigurationAllByLayer"}]}`
-->

### Function SetConfigurationAllByFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a5ae88b3d771319f8a348fc9e50c505e1"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetConfigurationAllByFile()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetConfigurationAllByFile"}]}`
-->

### Function SetConfigurationAllAtOnce

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d_1a7e732757607c2be3c3b6abe6b56bb2f4"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IExportCAD.SetConfigurationAllAtOnce()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IExportCAD.SetConfigurationAllAtOnce"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)