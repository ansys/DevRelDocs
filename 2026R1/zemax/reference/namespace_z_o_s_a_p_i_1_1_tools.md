# Namespace ZOSAPI::Tools

<a id="namespace_z_o_s_a_p_i_1_1_tools"></a>

![][C#]

**Definition**:


Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            // remove all variables and add a F# solve on last surface radius
            ILensDataEditor TheLDE = TheSystem.LDE;
            IOpticalSystemTools tools = TheSystem.Tools;
            tools.RemoveAllVariables();
            ILDERow Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
            ISolveData Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
            Solver._S_FNumber.FNumber = 3.1415;
            Surface_Last.RadiusCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile1.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // remove all variables and add a F# solve on last surface radius
    ILensDataEditorPtr TheLDE = TheSystem->LDE;
    //IOpticalSystemTools
    IOpticalSystemToolsPtr tools = TheSystem->Tools;
    tools->RemoveAllVariables();
    ILDERowPtr Surface_Last = TheLDE->GetSurfaceAt(TheLDE->NumberOfSurfaces - 2);
    ISolveDataPtr Solver = Surface_Last->RadiusCell->CreateSolveType(SolveType::SolveType_FNumber);
    Solver->_S_FNumber->FNumber = 3.1415;
    Surface_Last->RadiusCell->SetSolveData(Solver);
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\\Seq_Optimization\\\OptimizedFile1.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    % remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE;
    tools = TheSystem.Tools;
    tools.RemoveAllVariables();
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.S_FNumber_.FNumber = 3.1415;
    Surface_Last.RadiusCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile1.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE
    #IOpticalSystemTools
    tools = TheSystem.Tools
    tools.RemoveAllVariables()
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2)
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    Solver._S_FNumber.FNumber = 3.1415
    Surface_Last.RadiusCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile1.zos'
    TheSystem.SaveAs(SampleFile)
```

## Child namespaces

* [ZOSAPI::Tools::FileManager](namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager)
* [ZOSAPI::Tools::General](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general)
* [ZOSAPI::Tools::Layouts](namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts)
* [ZOSAPI::Tools::Optimization](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization)
* [ZOSAPI::Tools::OptimizationTools](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools)
* [ZOSAPI::Tools::RayTrace](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace)
* [ZOSAPI::Tools::Sequences](namespace_z_o_s_a_p_i_1_1_tools_1_1_sequences.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_sequences)
* [ZOSAPI::Tools::Tolerancing](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing)

## Classes

* [ZOSAPI::Tools::IAPIUtilities](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities)
* [ZOSAPI::Tools::IConvertToNSCGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group)
* [ZOSAPI::Tools::ICriticalRaysetGenerator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator)
* [ZOSAPI::Tools::IDesignLockdown](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown)
* [ZOSAPI::Tools::IExportToSpeosLensSystem](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system)
* [ZOSAPI::Tools::IExportToSpeosWhitebox](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox)
* [ZOSAPI::Tools::IFileManager](interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager)
* [ZOSAPI::Tools::IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings)
* [ZOSAPI::Tools::IInternalBirefringenceData](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_data)
* [ZOSAPI::Tools::IInternalBirefringenceParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_parameter)
* [ZOSAPI::Tools::IInternalTransmissionData](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data)
* [ZOSAPI::Tools::IInternalTransmissionParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_parameter)
* [ZOSAPI::Tools::ILayouts](interface_z_o_s_a_p_i_1_1_tools_1_1_i_layouts.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_layouts)
* [ZOSAPI::Tools::IMaterialsCatalog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog)
* [ZOSAPI::Tools::IMFCalculator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator)
* [ZOSAPI::Tools::IOpticalSystemTools](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools)
* [ZOSAPI::Tools::IShadedModelTriangleList](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_triangle_list.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_triangle_list)
* [ZOSAPI::Tools::IShadedModelVisualizationExport](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export)
* [ZOSAPI::Tools::ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Enumeration types

### Enumeration type RayPatternOption

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201"></a>

![][public]

**Definition**:


```csharp
enum RayPatternOption {
  XyFan = 0,
  XFan = 1,
  YFan = 2,
  ChiefAndRing = 3,
  List = 4,
  Grid = 6,
  ChiefAndMarginals = 8
}
```


#### Enumerator XyFan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a540aea6471960421e87985bb9e0922b2"></a>


#### Enumerator XFan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201ad03771938370f42deb52f4c7bca9d2b9"></a>


#### Enumerator YFan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a116b05b870a7644f77e4f64ae6505a39"></a>


#### Enumerator ChiefAndRing

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee03e34d9aed688193ce0801e444f51"></a>


#### Enumerator List

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135"></a>


#### Enumerator Grid

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a5174d1309f275ba6f275db3af9eb3e18"></a>


#### Enumerator ChiefAndMarginals

<a id="namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a2afd4f66b86eaf8d35b93688b7723801"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayPatternOption"}]}`
-->

### Enumeration type CriticalRayType

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05"></a>

![][public]

**Definition**:


```csharp
enum CriticalRayType {
  Chief = 0,
  Marginal = 1,
  Grid = 2,
  Ring = 3,
  Y_Fan = 4,
  X_Fan = 5,
  XY_Fan = 6,
  List = 7
}
```


#### Enumerator Chief

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05aba23ed47917bf1a079d513b1df2395de"></a>


#### Enumerator Marginal

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05a39e861530e72b78a7b23c9cae1356549"></a>


#### Enumerator Grid

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05a5174d1309f275ba6f275db3af9eb3e18"></a>


#### Enumerator Ring

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05ad4db177c94738b72bf9ce61e988ab1f1"></a>


#### Enumerator Y\_Fan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05a21cec96214ef315cf04d733fb2c38a95"></a>


#### Enumerator X\_Fan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05a44b132c5df4f4bf73c698844900313b6"></a>


#### Enumerator XY\_Fan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05ae5d84fd236078441fa0e561be2f79b44"></a>


#### Enumerator List

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a8bbc6b3e36c64d13ead926a2f451bb05a4ee29ca12c7d126654bd0e5275de6135"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.CriticalRayType"}]}`
-->

### Enumeration type MaterialFormulas

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76"></a>

![][public]

**Definition**:


```csharp
enum MaterialFormulas {
  Schott = 1,
  Sellmeier1 = 2,
  Herzberger = 3,
  Sellmeier2 = 4,
  Conrady = 5,
  Sellmeier3 = 6,
  Handbook1 = 7,
  Handbook2 = 8,
  Sellmeier4 = 9,
  Extended = 10,
  Sellmeier5 = 11,
  Extended2 = 12,
  Extended3 = 13
}
```


#### Enumerator Schott

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76ae663d5551c3f46017ffd36f2213e410d"></a>


#### Enumerator Sellmeier1

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76ae01e08b54072a2bd2327bd024a970462"></a>


#### Enumerator Herzberger

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a870d03648d2e4ca0dfe72a6c04333766"></a>


#### Enumerator Sellmeier2

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a30ea6845100160865f59907276c4b656"></a>


#### Enumerator Conrady

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a6101fca39ef22c05f86d8343b0868316"></a>


#### Enumerator Sellmeier3

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a99763afb688952a43755bdf49a124763"></a>


#### Enumerator Handbook1

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a40a69f375d505d63a1fd5e0f177b89be"></a>


#### Enumerator Handbook2

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a088f3386a2c36a846e4533a7e228e824"></a>


#### Enumerator Sellmeier4

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76aa056859501637442a3ce09ab33ee5626"></a>


#### Enumerator Extended

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76af23578fcd2a868168854ab714e7de537"></a>


#### Enumerator Sellmeier5

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a0ac331dfc7c675bdc659de25427e9b40"></a>


#### Enumerator Extended2

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a047354cd566c210fb44667dc65ab1723"></a>


#### Enumerator Extended3

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a6df11e2844df49dda60584b8a9820c76a2fd51613b49139ccb46df3cbc5391726"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.MaterialFormulas"}]}`
-->

### Enumeration type MaterialStatuses

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a7862ff305a54047124a57804062940ad"></a>

![][public]

**Definition**:


```csharp
enum MaterialStatuses {
  Standard = 0,
  Preferred = 1,
  Obsolete = 2,
  Special = 3,
  Melt = 4
}
```


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a7862ff305a54047124a57804062940adaeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator Preferred

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a7862ff305a54047124a57804062940adaa054ccb4ff684c73cbc2d272d45e32df"></a>


#### Enumerator Obsolete

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a7862ff305a54047124a57804062940adaec30c235d0eb792797af1aa1d11759a7"></a>


#### Enumerator Special

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a7862ff305a54047124a57804062940adab4c2b550635fe54fd29f2b64dfaca55d"></a>


#### Enumerator Melt

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a7862ff305a54047124a57804062940ada99876091c84fcbe03a59a4d01be7abe7"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.MaterialStatuses"}]}`
-->

### Enumeration type VertexOrder

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a854f4abc9c04e1b2c8fe5fe01b8a8adc"></a>

![][public]

**Definition**:


```csharp
enum VertexOrder {
  First,
  Second,
  Third
}
```


#### Enumerator First

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a854f4abc9c04e1b2c8fe5fe01b8a8adca7fb55ed0b7a30342ba6da306428cae04"></a>


#### Enumerator Second

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a854f4abc9c04e1b2c8fe5fe01b8a8adcac22cf8376b1893dcfcef0649fe1a7d87"></a>


#### Enumerator Third

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a854f4abc9c04e1b2c8fe5fe01b8a8adca168909c0b6f1dfbd48f679d47059c1d6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.VertexOrder"}]}`
-->

### Enumeration type HPCEnvironments

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a07560c2d76e9760689f2313436187b1b"></a>

![][public]

**Definition**:


```csharp
enum HPCEnvironments {
  OnPremise = 0,
  AWSKubernetes,
  AzureKubernetes
}
```


#### Enumerator OnPremise

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a07560c2d76e9760689f2313436187b1ba64ec427e32c61e4b5d78816bcd95a580"></a>


#### Enumerator AWSKubernetes

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a07560c2d76e9760689f2313436187b1bac527e8f092d6f9aaf10b46666a268ba4"></a>


#### Enumerator AzureKubernetes

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a07560c2d76e9760689f2313436187b1ba79f07e794e6b7592f3cc7d32faf9ac0d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.HPCEnvironments"}]}`
-->

### Enumeration type HPCNodeSize

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8"></a>

![][public]

**Definition**:


```csharp
enum HPCNodeSize {
  Default = 0,
  Tiny = 1,
  Small = 2,
  Medium = 3,
  Large = 4,
  XLarge = 5
}
```


#### Enumerator Default

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8a7a1920d61156abc05a60135aefe8bc67"></a>


#### Enumerator Tiny

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8a383c05bda6f030a44990d354b24f3338"></a>


#### Enumerator Small

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8a2660064e68655415da2628c2ae2f7592"></a>


#### Enumerator Medium

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8a87f8a6ab85c9ced3702b4ea641ad4bb5"></a>


#### Enumerator Large

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8a3a69b34ce86dacb205936a8094f6c743"></a>


#### Enumerator XLarge

<a id="namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8a7e3974f53d1c28e788066dbaf5377797"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.HPCNodeSize"}]}`
-->

### Enumeration type HPCRunState

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473e"></a>

![][public]

**Definition**:


```csharp
enum HPCRunState {
  NotRunning = 0,
  Initializing,
  ClusterAllocating,
  UploadingData,
  Queued,
  RunStarting,
  WaitingForResults,
  Complete
}
```


#### Enumerator NotRunning

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473eae457ff7a83d0a8681fa483f898788515"></a>


#### Enumerator Initializing

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473ea32b169f72b293ef80d35435e9894f8e2"></a>


#### Enumerator ClusterAllocating

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473ea7713394dcf2b71c2b590f0da1c2e5d39"></a>


#### Enumerator UploadingData

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473ea7393bdf28cf77c0c25f059a077cd7e53"></a>


#### Enumerator Queued

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473ea7b2f31b90fe1c2cc33a52233c1925df3"></a>


#### Enumerator RunStarting

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473eaffe7be2ae14ada651350b8ed09de8374"></a>


#### Enumerator WaitingForResults

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473ea0bb0640d0b88e29c97aa602db76d3b7c"></a>


#### Enumerator Complete

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473eaae94f80b3ce82062a5dd7815daa04f9d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.HPCRunState"}]}`
-->

### Enumeration type RunStatus

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11"></a>

![][public]

**Definition**:


```csharp
enum RunStatus {
  Completed,
  FailedToStart,
  TimedOut,
  InvalidTimeout
}
```


#### Enumerator Completed

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11a07ca5050e697392c9ed47e6453f1453f"></a>

The tool completed running.


#### Enumerator FailedToStart

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11a4ace348995a664f8a904bc8263043797"></a>

The tool either failed to start, or a wait was requested on a tool that was not already running.


#### Enumerator TimedOut

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11a9541eb2348d883dd8e32ae0420274c4c"></a>

The time out value was exceeded; note that the tool will continue running.


#### Enumerator InvalidTimeout

<a id="namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11ac794d9d363bf315121816d23896ad098"></a>

An invalid timeout value was specified.


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RunStatus"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)