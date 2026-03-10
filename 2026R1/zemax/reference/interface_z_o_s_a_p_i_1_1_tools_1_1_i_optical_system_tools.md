# Interface ZOSAPI::Tools::IOpticalSystemTools

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools"></a>

![][C#]
![][public]

**Definition**:

Methods to run various system-wide tools. This interface can be accessed via the IOpticalSystem interface. Note that only one ISystemTool can be open at a time; the previous tool must be closed using ISystemTool.Close before a new one can be opened.

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

## Members

* [CreateDoubleMatrix](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ae13c13a267263335b4aac29316523bb2)
* [CreateDoubleVector](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1af977c244428135c360dc0a5dabeedc05)
* [CurrentTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1a4bd51984a71ae67c3a5d6ae3c93476)
* [GetConversionFromSystemUnits](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a53176cdc6067cbc7648640c605c6ba10)
* [GetConversionToSystemUnits](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ac2599a09afa8e9751df38441b4a294bd)
* [GetHPCSettingsCustom](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aab7d47afb9102c05935264844dd687c3)
* [GetHPCSettingsFromPrefs](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ab4c461fa7e14a7abc3dae20c683fe7bf)
* [GetHullTools](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2b4fa90acc4d84d91c2b9603b97b6bda)
* [GetPointTools](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a6b366e2bd7e34ba9b62e9d96e2d9b25f)
* [GetUtilities](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a04a6b363dba6f42b8a4c117680c376fc)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1fa337f20b597eb34135f9eaad20a1b1)
* [LastError](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aa0f5fc389b50b6eb08eb51605417ee9a)
* [Layouts](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ade2ed131685bffd7245bcc633fdc5e35)
* [OpenBatchRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7cef31b9ae2068d8a114a59c1d803946)
* [OpenConvertAsphereTypes](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2e699022a6b8fc981bc54b6cb766778f)
* [OpenConvertToNSCGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4e5e3663b8e8a04d0f498a4053ef0b8a)
* [OpenCreateProject](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7ccfaf2c6258bd54423cbc1222bc80ce)
* [OpenCreateZAR](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a461fe7b0c51b4cbf31d72c3bd7d99297)
* [OpenCriticalRaysetGenerator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a8f080ba9390b7c90e6cf1d75ad042308)
* [OpenDesignLockdown](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a84b000d3fec15188ca28b06222e3c9b1)
* [OpenExportCAD](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a30a8ee455c2efb8ab4de80d786f975cf)
* [OpenExportToSpeosLensSystem](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a25d76bda58f208ad2ecf6bbfc90a1cb4)
* [OpenExportToSpeosWhitebox](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1f155cdc7c002d9205d4d6e1239d96a5)
* [OpenFileManager](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a47cdb84a0d65d7d3121932a09940c4e5)
* [OpenFindBestAsphere](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4ef481ba986ed82d5dfcb1497e2e5645)
* [OpenGlobalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1b495830f6c14e86c4508b0de0e1cfc2)
* [OpenGlobalOptimization\_HPC](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1adf1a8098bb1038c60efefd9f3c467f0c)
* [OpenHammerOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a81c6f8b5714580058da6bbdcd7a8bf54)
* [OpenHammerOptimization\_HPC](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a32b632c45c930f3a14662069f715ba66)
* [OpenLensCatalogs](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aea6d99f2a9721ef39017e2cfe0cd97c9)
* [OpenLightningTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a365e86fd4ff33f5c15f0c82fbd150a36)
* [OpenLocalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1afd1b8515718e214be105ab283d02eb88)
* [OpenMaterialsCatalog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1abe528fa18736395e08f05182c8632712)
* [OpenMeritFunctionCalculator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2a503d6af9a788dd63fd0c8ad43109ae)
* [OpenNEST](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ac9062dea336aeb69eec64a23c296f9e5)
* [OpenNSCQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a183548e42a856a5b1d24218e052a0759)
* [OpenNSCRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7128e132b0e5f9cb0050f794ec607ac1)
* [OpenNSCRayTrace\_HPC](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ac17b14caf73f287d31ba80332cc95113)
* [OpenProjectToFileConverter](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a0c8b073c028c673c0008cfc2e93b74e7)
* [OpenQuickAdjust](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4e2eb7e35bbc0189cea90f7c2a762f85)
* [OpenQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a27eb438a1843cddb810b111e4f10b6ab)
* [OpenQuickSensitivity](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aac8ffd0eff7b621a0b9240f4b8600b01)
* [OpenRayAimingWizard](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a55bda90378bbb93ef819176fc0945033)
* [OpenRayDatabaseReader](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4f95e97804bea9a7b7ee0a675c54b326)
* [OpenRestoreProject](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ade03a9460462f8afb9e2ff4ebea8ca3e)
* [OpenRestoreZAR](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2252854f3eed63eb99f3ae0ceff613b6)
* [OpenRMSSpotRadiusCalculator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1b99d5b0158b02e390bcb6ddf8fc8dfe)
* [OpenScale](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a99c573559a3e053651f71d3ac184116d)
* [OpenSequenceSelector](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aeb9644084e959c5a97daea87372bc9cc)
* [OpenShadedModelVisualizationExport](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a925e1628d96cc774504586051367f64e)
* [OpenToleranceDataViewer](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a45f6795078e3cc4ac112d0f293e5b6fd)
* [OpenTolerancing](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aad6ef2b44a723a0da199fad083d1201e)
* [OpenTolerancing\_HPC](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2f860d04d928cdef3dfacac2e73ba6b0)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7c7e90a475b67407f6266d775e41164b)
* [RemoveAllVariables](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a74ba97071e2838cebea60050bc5353a2)
* [SetAllRadiiVariable](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a6a7d9cd6afa85c61deee672063ca6db8)
* [SetAllThicknessesVariable](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a46fa07fe553739623aa8aed67a981bfc)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a133a9c400dd49ddbe7272a04779d2e12)

## Properties

### Property CurrentTool

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1a4bd51984a71ae67c3a5d6ae3c93476"></a>

![][public]

**Definition**:


```csharp
ISystemTool ZOSAPI.Tools.IOpticalSystemTools.CurrentTool
```


Gets the currently open tool. Note that if a tool is already open, all attempts to open a new tool will fail.

The current tool if one is currently open; otherwise, <code>null</code>.


**Return type**: [ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.CurrentTool"}]}`
-->

### Property Progress

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7c7e90a475b67407f6266d775e41164b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IOpticalSystemTools.Progress
```


Gets the progress of the currently running tool, if the tool reports incremental progress.

The current progress percentage, if available.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.Progress"}]}`
-->

### Property Status

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a133a9c400dd49ddbe7272a04779d2e12"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IOpticalSystemTools.Status
```


Gets the status of the currently running tool, if the tool reports incremental status messages.

The current status, if available.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.Status"}]}`
-->

### Property IsRunning

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1fa337f20b597eb34135f9eaad20a1b1"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IOpticalSystemTools.IsRunning
```


Gets a value indicating whether the CurrentTool is currently running asynchronously.

<code>true</code> if a tool is currently running; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.IsRunning"}]}`
-->

### Property Layouts

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ade2ed131685bffd7245bcc633fdc5e35"></a>

![][public]

**Definition**:


```csharp
ILayouts ZOSAPI.Tools.IOpticalSystemTools.Layouts
```


**Return type**: [ILayouts](interface_z_o_s_a_p_i_1_1_tools_1_1_i_layouts.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_layouts)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.Layouts"}]}`
-->

### Property LastError

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aa0f5fc389b50b6eb08eb51605417ee9a"></a>

![][public]

**Definition**:


```csharp
IMessage ZOSAPI.Tools.IOpticalSystemTools.LastError
```


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.LastError"}]}`
-->

## Public functions

### Function OpenBatchRayTrace

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7cef31b9ae2068d8a114a59c1d803946"></a>

![][public]


```csharp
IBatchRayTrace ZOSAPI.Tools.IOpticalSystemTools.OpenBatchRayTrace()
```


Opens the Batch Ray Trace tool.

Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


C# 
```csharp
            // Set up Batch Ray Trace
            ZOSAPI.Tools.RayTrace.IBatchRayTrace raytrace = TheSystem.Tools.OpenBatchRayTrace();
            int nsur = TheSystem.LDE.NumberOfSurfaces;
            int max_rays = 30;
            ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
```
 C++ 
```csharp
    // Set up Batch Ray Trace
    IBatchRayTracePtr raytrace = TheSystem->Tools->OpenBatchRayTrace();
    int nsur = TheSystem->LDE->NumberOfSurfaces;
    int max_rays = 30;
    IRayTraceNormUnpolDataPtr normUnPolData = raytrace->CreateNormUnpol((max_rays + 1) * (max_rays + 1), RaysType::RaysType_Real, nsur);
```
 Matlab 
```csharp
    % Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace();
    nsur = TheSystem.LDE.NumberOfSurfaces;
    max_rays = 30;
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1),ZOSAPI.Tools.RayTrace.RaysType.Real,nsur);
```
 Python 
```csharp
    # Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace()
    nsur = TheSystem.LDE.NumberOfSurfaces
    max_rays = 30
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur)
```
 


**Returns**:


**Return type**: [IBatchRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenBatchRayTrace"}]}`
-->

### Function OpenNSCRayTrace

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7128e132b0e5f9cb0050f794ec607ac1"></a>

![][public]


```csharp
INSCRayTrace ZOSAPI.Tools.IOpticalSystemTools.OpenNSCRayTrace()
```


Creates a new NSC Ray Trace instance. Note &ndash only one instance of this tool can be open at a time. See the INSCRayTrace documentation for more information.

Usage (see [Example 02](page_ex02.md#page_ex02) for a full sample)


C# 
```csharp
            // Create ray trace
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = true;
            NSCRayTrace.ScatterNSCRays = false;
            NSCRayTrace.UsePolarization = true;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;

            // Run ray trace
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
```
 C++ 
```csharp
    // Creat ray trace
    INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
    NSCRayTrace->SplitNSCRays = true;
    NSCRayTrace->ScatterNSCRays = false;
    NSCRayTrace->UsePolarization = true;
    NSCRayTrace->IgnoreErrors = true;
    NSCRayTrace->SaveRays = false;
    NSCRayTrace->ClearDetectors(0);

    // Run ray trace
    // Methods RunAndWaitForCompletion() and Close is in base interface ISystemTool.
    // To use these two methods, cast to ISystemTool first.
    ISystemToolPtr baseTool = NSCRayTrace;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = true;
    NSCRayTrace.ScatterNSCRays = false;
    NSCRayTrace.UsePolarization = true;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
  
    % Run ray trace
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
```
 Python 
```csharp
    # Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = True
    NSCRayTrace.ScatterNSCRays = False
    NSCRayTrace.UsePolarization = True
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.Run()
```
 


**Returns**:


**Return type**: [INSCRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenNSCRayTrace"}]}`
-->

### Function OpenQuickAdjust

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4e2eb7e35bbc0189cea90f7c2a762f85"></a>

![][public]


```csharp
IQuickAdjust ZOSAPI.Tools.IOpticalSystemTools.OpenQuickAdjust()
```


Opens the Quick Adjust tool.

**Returns**:


**Return type**: [IQuickAdjust](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenQuickAdjust"}]}`
-->

### Function OpenQuickFocus

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a27eb438a1843cddb810b111e4f10b6ab"></a>

![][public]


```csharp
IQuickFocus ZOSAPI.Tools.IOpticalSystemTools.OpenQuickFocus()
```


Opens the Quick Focus tool.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //change BFL & run quick focus                         
            Surface_Last.Thickness = 40.0;
            IQuickFocus QFocus = tools.OpenQuickFocus();
            QFocus.Criterion = QuickFocusCriterion.SpotSizeRadial;
            QFocus.UseCentroid = true;
            QFocus.RunAndWaitForCompletion();
            QFocus.Close();
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile2.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // change BFL & run quick focus
    Surface_Last->Thickness = 40.0;
    IQuickFocusPtr QFocus = tools->OpenQuickFocus();
    QFocus->Criterion = QuickFocusCriterion::QuickFocusCriterion_SpotSizeRadial;
    QFocus->UseCentroid = true;
    ISystemToolPtr baseTool = QFocus;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile2.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    %change BFL & run quick focus                         
    Surface_Last.Thickness = 40.0;
    QFocus = tools.OpenQuickFocus();
    QFocus.Criterion = ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial;
    QFocus.UseCentroid = true;
    QFocus.RunAndWaitForCompletion();
    QFocus.Close();
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile2.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # change BFL & run quick focus
    Surface_Last.Thickness = 40.0
    QFocus = tools.OpenQuickFocus()
    QFocus.Criterion = ZOSAPI.Tools.General.QuickAdjustCriterion.SpotSizeRadial
    QFocus.UseCentroid = True
    QFocus.RunAndWaitForCompletion()
    QFocus.Close()
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile2.zos'
    TheSystem.SaveAs(SampleFile)
```
 


**Returns**:


**Return type**: [IQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenQuickFocus"}]}`
-->

### Function OpenLightningTrace

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a365e86fd4ff33f5c15f0c82fbd150a36"></a>

![][public]


```csharp
ILightningTrace ZOSAPI.Tools.IOpticalSystemTools.OpenLightningTrace()
```


Opens the Lightning Trace tool.

**Returns**:


**Return type**: [ILightningTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenLightningTrace"}]}`
-->

### Function OpenFindBestAsphere

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4ef481ba986ed82d5dfcb1497e2e5645"></a>

![][public]


```csharp
IFindBestAsphere ZOSAPI.Tools.IOpticalSystemTools.OpenFindBestAsphere()
```


Opens the Find Best Asphere tool.

**Returns**:


**Return type**: [IFindBestAsphere](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_find_best_asphere.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_find_best_asphere)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenFindBestAsphere"}]}`
-->

### Function OpenConvertAsphereTypes

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2e699022a6b8fc981bc54b6cb766778f"></a>

![][public]


```csharp
IConvertAsphereType ZOSAPI.Tools.IOpticalSystemTools.OpenConvertAsphereTypes()
```


Opens the Convert Asphere Types tool.

**Returns**:


**Return type**: [IConvertAsphereType](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_convert_asphere_type.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_convert_asphere_type)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenConvertAsphereTypes"}]}`
-->

### Function OpenLocalOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1afd1b8515718e214be105ab283d02eb88"></a>

![][public]


```csharp
ILocalOptimization ZOSAPI.Tools.IOpticalSystemTools.OpenLocalOptimization()
```


Opens the Local Optimization tool.

Usage (see [Example 03](page_ex03.md#page_ex03) for a full sample)


C# 
```csharp
            // Local optimisation till completion
            ILocalOptimization LocalOpt = TheSystem.Tools.OpenLocalOptimization();
            LocalOpt.Algorithm = OptimizationAlgorithm.DampedLeastSquares;
            LocalOpt.Cycles = OptimizationCycles.Automatic;
            LocalOpt.NumberOfCores = 8;
            LocalOpt.RunAndWaitForCompletion();
            LocalOpt.Close();
```
 C++ 
```csharp
    // Local optimisation till completion
    ILocalOptimizationPtr LocalOpt = TheSystem->Tools->OpenLocalOptimization();
    LocalOpt->Algorithm = OptimizationAlgorithm_DampedLeastSquares;
    LocalOpt->Cycles = OptimizationCycles_Automatic;
    LocalOpt->NumberOfCores = 8;
    ISystemToolPtr baseTool = LocalOpt;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Local optimisation till completion
    LocalOpt = TheSystem.Tools.OpenLocalOptimization();
    LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
    LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
    LocalOpt.NumberOfCores = 8;
    LocalOpt.RunAndWaitForCompletion();
    LocalOpt.Close();
```
 Python 
```csharp
    # Local optimisation till completion
    print('Running Local Optimization')
    LocalOpt = TheSystem.Tools.OpenLocalOptimization()
    LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
    LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic
    LocalOpt.NumberOfCores = 8
    LocalOpt.RunAndWaitForCompletion()
    LocalOpt.Close()
```
 


**Returns**:


**Return type**: [ILocalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenLocalOptimization"}]}`
-->

### Function OpenGlobalOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1b495830f6c14e86c4508b0de0e1cfc2"></a>

![][public]


```csharp
IGlobalOptimization ZOSAPI.Tools.IOpticalSystemTools.OpenGlobalOptimization()
```


Opens the Global Optimization tool.

**Returns**:


**Return type**: [IGlobalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenGlobalOptimization"}]}`
-->

### Function OpenHammerOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a81c6f8b5714580058da6bbdcd7a8bf54"></a>

![][public]


```csharp
IHammerOptimization ZOSAPI.Tools.IOpticalSystemTools.OpenHammerOptimization()
```


Opens the Hammer Optimization tool.

Usage (see [Example 03](page_ex03.md#page_ex03) for a full sample)


C# 
```csharp
            // Hammer for 10 seconds
            Console.WriteLine("Running Hammer for 10 seconds");
            IHammerOptimization HammerOpt = TheSystem.Tools.OpenHammerOptimization();
            HammerOpt.RunAndWaitWithTimeout(10); // 10s of Hammer
            HammerOpt.Cancel();
            HammerOpt.WaitForCompletion();
            HammerOpt.Close();
```
 C++ 
```csharp
    // Hammer for 10 seconds
    IHammerOptimizationPtr HammerOpt = TheSystem->Tools->OpenHammerOptimization();
    baseTool = HammerOpt;
    baseTool->RunAndWaitWithTimeout(10);    
    baseTool->Cancel();
    baseTool->WaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Hammer for 10 seconds
    HammerOpt = TheSystem.Tools.OpenHammerOptimization();
    HammerOpt.RunAndWaitWithTimeout(10);    
    HammerOpt.Cancel();
    HammerOpt.WaitForCompletion();
    HammerOpt.Close();
```
 Python 
```csharp
    # Hammer for 10 seconds
    # need to 'import time' at the top of the file to use the pause function
    print('Running Hammer Optimization')
    HammerOpt = TheSystem.Tools.OpenHammerOptimization()
    HammerOpt.RunAndWaitWithTimeout(10)    
    HammerOpt.Cancel()
    HammerOpt.WaitForCompletion()
    HammerOpt.Close()
```
 


**Returns**:


**Return type**: [IHammerOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenHammerOptimization"}]}`
-->

### Function OpenTolerancing

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aad6ef2b44a723a0da199fad083d1201e"></a>

![][public]


```csharp
ITolerancing ZOSAPI.Tools.IOpticalSystemTools.OpenTolerancing()
```


Opens the Tolerancing tool.

Usage (see [Example 14](page_ex14.md#page_ex14) for a full sample)


C# 
```csharp
            // Set up the Tolerancing analysis and run it
            ZOSAPI.Tools.Tolerancing.ITolerancing tol = TheSystem.Tools.OpenTolerancing();
            // Select Sensitivity mode
            tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
            // Select Criterion and related settings 
            tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
            tol.CriterionSampling = 3;
            tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
            tol.CriterionCycle = 2;
            tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
            // Select the number or MC runs and files to save
            tol.NumberOfRuns = 20;
            tol.NumberToSave = 20;
            // Run the Tolerancing analysis
            tol.RunAndWaitForCompletion();
            tol.Close();
```
 C++ 
```csharp
    // Set up the Tolerancing analysis and run it
    ZOSAPI_Interfaces::ITolerancingPtr tol = TheSystem->Tools->OpenTolerancing();
    // Select Sensitivity mode
    tol->SetupMode = ZOSAPI_Interfaces::SetupModes_Sensitivity;
    // Select Criterion and related settings 
    tol->Criterion = ZOSAPI_Interfaces::Criterions_RMSSpotRadius;
    tol->CriterionSampling = 3;
    tol->CriterionComp = ZOSAPI_Interfaces::CriterionComps_OptimizeAll_DLS;
    tol->CriterionCycle = 2;
    tol->CriterionField = ZOSAPI_Interfaces::CriterionFields_UserDefined;
    // Select the number or MC runs and files to save
    tol->NumberOfRuns = 20;
    tol->NumberToSave = 20;
    // Run the Tolerancing analysis
    ZOSAPI_Interfaces::ISystemToolPtr baseTool = tol;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Set up the Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing();
    % Select Sensitivity mode
    tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
    % Select Criterion and related settings 
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
    tol.CriterionSampling = 3;
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
    tol.CriterionCycle = 2;
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
    % Select the number or MC runs and files to save
    tol.NumberOfRuns = 20;
    tol.NumberToSave = 20;
    % Run the Tolerancing analysis
    tol.RunAndWaitForCompletion();
    tol.Close();
```
 Python 
```csharp
    # Set up Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing()
    # Select Sensitivity mode
    tol.SetupMode =  ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity
    # Select Criterion and related settings
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius
    tol.CriterionSampling = 3
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS
    tol.CriterionCycle = 2
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined
    # Select number of MC runs and files to save
    tol.NumberOfRuns = 20
    tol.NumberToSave = 20
    # Run the Tolerancing analysis
    tol.RunAndWaitForCompletion()
    tol.Close()
```
 


**Returns**:


**Return type**: [ITolerancing](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenTolerancing"}]}`
-->

### Function OpenRestoreZAR

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2252854f3eed63eb99f3ae0ceff613b6"></a>

![][public]


```csharp
IRestoreArchive ZOSAPI.Tools.IOpticalSystemTools.OpenRestoreZAR()
```


Opens the Restore Zemax Archive (ZAR) tool.

**Returns**:


**Return type**: [IRestoreArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenRestoreZAR"}]}`
-->

### Function OpenCreateZAR

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a461fe7b0c51b4cbf31d72c3bd7d99297"></a>

![][public]


```csharp
ICreateArchive ZOSAPI.Tools.IOpticalSystemTools.OpenCreateZAR()
```


Opens the Create Zemax Archive (ZAR) tool.

**Returns**:


**Return type**: [ICreateArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenCreateZAR"}]}`
-->

### Function OpenRestoreProject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ade03a9460462f8afb9e2ff4ebea8ca3e"></a>

![][public]


```csharp
IRestoreProject ZOSAPI.Tools.IOpticalSystemTools.OpenRestoreProject()
```


**Return type**: [IRestoreProject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenRestoreProject"}]}`
-->

### Function OpenCreateProject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a7ccfaf2c6258bd54423cbc1222bc80ce"></a>

![][public]


```csharp
ICreateProject ZOSAPI.Tools.IOpticalSystemTools.OpenCreateProject()
```


**Return type**: [ICreateProject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_project)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenCreateProject"}]}`
-->

### Function OpenExportCAD

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a30a8ee455c2efb8ab4de80d786f975cf"></a>

![][public]


```csharp
IExportCAD ZOSAPI.Tools.IOpticalSystemTools.OpenExportCAD()
```


Opens the Export to Cad tool.

Usage (see [Example 20](page_ex20.md#page_ex20) for a full sample)


C# 
```csharp
            // Get interface of IExportCAD
            IExportCAD ToolExportCAD = TheSystem.Tools.OpenExportCAD();
```
 C++ 
```csharp
    // Get interface of IExportCAD
    IExportCADPtr ToolExportCAD = TheSystem->Tools->OpenExportCAD();
```
 Matlab 
```csharp
    % Get interface of IExportCAD
    ToolExportCAD = TheSystem.Tools.OpenExportCAD();
```
 Python 
```csharp
    # Get interface of IExportCAD
    ToolExportCAD = TheSystem.Tools.OpenExportCAD()
```
 


**Returns**:


**Return type**: [IExportCAD](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenExportCAD"}]}`
-->

### Function OpenScale

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a99c573559a3e053651f71d3ac184116d"></a>

![][public]


```csharp
IScale ZOSAPI.Tools.IOpticalSystemTools.OpenScale()
```


Opens the Scale Lens tool.

Usage (see [Example 11](page_ex11.md#page_ex11) for a full sample)


C# 
```csharp
            // Set system lens units to inches, scale all values with Scale Lens tool
            // For demonstration only. This file is new, so it has default units mm.
            ZemaxSystemUnits unit = TheSystemData.Units.LensUnits;
            // Open Scale Lens tool
            ScaleLens = TheSystem.Tools.OpenScale();
            // Apply Tool Settings
            ScaleLens.ScaleByUnits = true;
            ScaleLens.ScaleToUnit = ScaleToUnits.Inches;
            ScaleLens.RunAndWaitForCompletion();
            ScaleLens.Close();
```
 C++ 
```csharp
    // Set system lens units to inches, scale all values with Scale Lens tool
    // For demonstration only. This file is new, so it has default units mm.
    ZemaxSystemUnits unit = TheSystemData->Units->LensUnits;
    // Open Scale Lens tool
    IScalePtr ScaleLens = TheSystem->Tools->OpenScale();
    // Apply Tool Settings
    ScaleLens->ScaleByUnits = true;
    ScaleLens->ScaleToUnit = ScaleToUnits_Inches;
    ISystemToolPtr baseTool = ScaleLens;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits;  % For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale();  % Open Scale Lens tool
    % Apply Tool Settings
    ScaleLens.ScaleByUnits = true;
    ScaleLens.ScaleToUnit = ZOSAPI.Tools.General.ScaleToUnits.Inches;
    ScaleLens.RunAndWaitForCompletion();
    ScaleLens.Close();
```
 Python 
```csharp
    # Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits  # For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale()  # Open Scale Lens tool
    # Apply Tool Settings
    ScaleLens.ScaleByUnits = True
    ScaleLens.ScaleToUnit = 2  # 0=millimeters; 1=centimeters; 2=inches; 3=meters
    # Cast to ISystemTool interface to gain access to Run
    ScaleLens.RunAndWaitForCompletion()
    ScaleLens.Close()
```
 


**Returns**:


**Return type**: [IScale](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenScale"}]}`
-->

### Function OpenMeritFunctionCalculator

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2a503d6af9a788dd63fd0c8ad43109ae"></a>

![][public]


```csharp
IMFCalculator ZOSAPI.Tools.IOpticalSystemTools.OpenMeritFunctionCalculator()
```


Opens the Merit Function Calculator tool.

**Returns**:


**Return type**: [IMFCalculator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenMeritFunctionCalculator"}]}`
-->

### Function OpenLensCatalogs

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aea6d99f2a9721ef39017e2cfe0cd97c9"></a>

![][public]


```csharp
ILensCatalogs ZOSAPI.Tools.IOpticalSystemTools.OpenLensCatalogs()
```


Opens the Lens Catalogs tool.

**Returns**:


**Return type**: [ILensCatalogs](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_lens_catalogs.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_lens_catalogs)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenLensCatalogs"}]}`
-->

### Function OpenConvertToNSCGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4e5e3663b8e8a04d0f498a4053ef0b8a"></a>

![][public]


```csharp
IConvertToNSCGroup ZOSAPI.Tools.IOpticalSystemTools.OpenConvertToNSCGroup()
```


Opens the Convert to NSC Group tool.

Usage (see [Example 14](page_ex14.md#page_ex14) for a full sample)


C# 
```csharp
            // Convert file to Non-sequential mode
            ZOSAPI.Tools.IConvertToNSCGroup convertNSmode = TheSystem.Tools.OpenConvertToNSCGroup();
            convertNSmode.ConvertFileToNSC = true;
            convertNSmode.RunAndWaitForCompletion();
            convertNSmode.Close();
            // Save the Non-sequential file to the Double Gauss folder
            string fileNameNS = System.IO.Path.Combine(dirLoc, "Double Gauss (NS).zos");
            TheSystem.SaveAs(fileNameNS);
```
 C++ 
```csharp
    // Convert file to Non-sequential mode
    ZOSAPI_Interfaces::IConvertToNSCGroupPtr convertNSmode = TheSystem->Tools->OpenConvertToNSCGroup();
    convertNSmode->ConvertFileToNSC = true;
    ZOSAPI_Interfaces::ISystemToolPtr baseTool2 = convertNSmode;
    baseTool2->RunAndWaitForCompletion();
    baseTool2->Close();
    // Save the Non-sequential file to the Double Gauss folder
    _bstr_t fileNameNS = dirLoc + (_bstr_t)"\\Double_Gauss_(NS).zos";
    TheSystem->SaveAs(fileNameNS);
```
 Matlab 
```csharp
    % Convert file to Non-sequential mode
    convertNSmode = TheSystem.Tools.OpenConvertToNSCGroup();
    convertNSmode.ConvertFileToNSC = true;
    convertNSmode.RunAndWaitForCompletion();
    convertNSmode.Close();
    % Save the Non-sequential file to the Double Gauss folder
    fileNameNS = System.String.Concat(dirLoc, '\Double Gauss (NS).zos');
    TheSystem.SaveAs(fileNameNS);
```
 Python 
```csharp
    # Convert file to Non-sequential mode
    convertNSmode = TheSystem.Tools.OpenConvertToNSCGroup()
    convertNSmode.ConvertFileToNSC = True
    convertNSmode.RunAndWaitForCompletion()
    convertNSmode.Close();
    # Save the Non-sequential file to the Double Gauss folder
    fileNameNS = dirLoc + "\\Double Gauss (NS).zos"
    TheSystem.SaveAs(fileNameNS)
```
 


**Returns**:


**Return type**: [IConvertToNSCGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenConvertToNSCGroup"}]}`
-->

### Function OpenDesignLockdown

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a84b000d3fec15188ca28b06222e3c9b1"></a>

![][public]


```csharp
IDesignLockdown ZOSAPI.Tools.IOpticalSystemTools.OpenDesignLockdown()
```


Opens the Design Lockdown tool.

**Returns**:


**Return type**: [IDesignLockdown](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenDesignLockdown"}]}`
-->

### Function OpenCriticalRaysetGenerator

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a8f080ba9390b7c90e6cf1d75ad042308"></a>

![][public]


```csharp
ICriticalRaysetGenerator ZOSAPI.Tools.IOpticalSystemTools.OpenCriticalRaysetGenerator()
```


Opens the critical rayset generator tool.

**Returns**:


**Return type**: [ICriticalRaysetGenerator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenCriticalRaysetGenerator"}]}`
-->

### Function OpenSequenceSelector

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aeb9644084e959c5a97daea87372bc9cc"></a>

![][public]


```csharp
ISequenceSelector ZOSAPI.Tools.IOpticalSystemTools.OpenSequenceSelector()
```


Open the Sequence Selector tool.

**Returns**:


**Return type**: [ISequenceSelector](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenSequenceSelector"}]}`
-->

### Function OpenNSCQuickFocus

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a183548e42a856a5b1d24218e052a0759"></a>

![][public]


```csharp
INSCQuickFocus ZOSAPI.Tools.IOpticalSystemTools.OpenNSCQuickFocus()
```


Open the NSC Quick Focus tool.

**Returns**:


**Return type**: [INSCQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenNSCQuickFocus"}]}`
-->

### Function RemoveAllVariables

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a74ba97071e2838cebea60050bc5353a2"></a>

![][public]


```csharp
bool ZOSAPI.Tools.IOpticalSystemTools.RemoveAllVariables()
```


Removes all variables in the system.

**Returns**:


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.RemoveAllVariables"}]}`
-->

### Function SetAllRadiiVariable

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a6a7d9cd6afa85c61deee672063ca6db8"></a>

![][public]


```csharp
int ZOSAPI.Tools.IOpticalSystemTools.SetAllRadiiVariable()
```


Makes all radii in the system variable.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //setup a few variables
            tools.SetAllRadiiVariable();
            ILDERow Surface1 = TheLDE.GetSurfaceAt(1);
            ILDERow Surface2 = TheLDE.GetSurfaceAt(2);
            ILDERow Surface5 = TheLDE.GetSurfaceAt(5);
            ILDERow Surface6 = TheLDE.GetSurfaceAt(6);
            ILDERow Surface9 = TheLDE.GetSurfaceAt(9);
            ILDERow Surface10 = TheLDE.GetSurfaceAt(10);
            ILDERow Surface11 = TheLDE.GetSurfaceAt(11);
```
 C++ 
```csharp
    // setup a few variables
    tools->SetAllRadiiVariable();
    ILDERowPtr Surface1 = TheLDE->GetSurfaceAt(1);
    ILDERowPtr Surface2 = TheLDE->GetSurfaceAt(2);
    ILDERowPtr Surface5 = TheLDE->GetSurfaceAt(5);
    ILDERowPtr Surface6 = TheLDE->GetSurfaceAt(6);
    ILDERowPtr Surface9 = TheLDE->GetSurfaceAt(9);
    ILDERowPtr Surface10 = TheLDE->GetSurfaceAt(10);
    ILDERowPtr Surface11 = TheLDE->GetSurfaceAt(11);
```
 Matlab 
```csharp
    %setup a few variables
    tools.SetAllRadiiVariable();            
    Surface1 = TheLDE.GetSurfaceAt(1);
    Surface2 = TheLDE.GetSurfaceAt(2);
    Surface5 = TheLDE.GetSurfaceAt(5);
    Surface6 = TheLDE.GetSurfaceAt(6);
    Surface9 = TheLDE.GetSurfaceAt(9);
    Surface10 = TheLDE.GetSurfaceAt(10);
    Surface11 = TheLDE.GetSurfaceAt(11);
```
 Python 
```csharp
    # setup a few variables
    tools.SetAllRadiiVariable()
    Surface1 = TheLDE.GetSurfaceAt(1)
    Surface2 = TheLDE.GetSurfaceAt(2)
    Surface5 = TheLDE.GetSurfaceAt(5)
    Surface6 = TheLDE.GetSurfaceAt(6)
    Surface9 = TheLDE.GetSurfaceAt(9)
    Surface10 = TheLDE.GetSurfaceAt(10)
    Surface11 = TheLDE.GetSurfaceAt(11)
```
 


**Returns**:


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.SetAllRadiiVariable"}]}`
-->

### Function SetAllThicknessesVariable

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a46fa07fe553739623aa8aed67a981bfc"></a>

![][public]


```csharp
int ZOSAPI.Tools.IOpticalSystemTools.SetAllThicknessesVariable()
```


Makes all thicknesses in the system variable.

**Returns**:


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.SetAllThicknessesVariable"}]}`
-->

### Function CreateDoubleVector

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1af977c244428135c360dc0a5dabeedc05"></a>

![][public]


```csharp
double[] ZOSAPI.Tools.IOpticalSystemTools.CreateDoubleVector(int numElements)
```


Creates a 1D array of doubles. This is primarily useful when you need to create a SAFEARRAY for access to the API from a COM-based interface.

**Parameters**:

* **numElements**: The number elements in the output array.


**Returns**:


**Parameters**:

* int **numElements**

**Return type**: double[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.CreateDoubleVector"}]}`
-->

### Function CreateDoubleMatrix

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ae13c13a267263335b4aac29316523bb2"></a>

![][public]


```csharp
double[,] ZOSAPI.Tools.IOpticalSystemTools.CreateDoubleMatrix(int Rows, int Cols)
```


Creates a 2D matrix double doubles. This is primarily useful when you need to create a SAFEARRAY for access to the API from a COM-based interface.

**Parameters**:

* **Rows**: The number of rows in the output matrix.
* **Cols**: The number of columns in the output matrix.


**Returns**:


**Parameters**:

* int **Rows**
* int **Cols**

**Return type**: double[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.CreateDoubleMatrix"}]}`
-->

### Function OpenRayDatabaseReader

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a4f95e97804bea9a7b7ee0a675c54b326"></a>

![][public]


```csharp
IZRDReader ZOSAPI.Tools.IOpticalSystemTools.OpenRayDatabaseReader()
```


**Return type**: [IZRDReader](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenRayDatabaseReader"}]}`
-->

### Function OpenRMSSpotRadiusCalculator

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1b99d5b0158b02e390bcb6ddf8fc8dfe"></a>

![][public]


```csharp
IComputeRMSSpotSize ZOSAPI.Tools.IOpticalSystemTools.OpenRMSSpotRadiusCalculator()
```


Opens the RMS spot radius calculator. Note that this is only valid in sequential mode.

**Returns**:


**Return type**: [IComputeRMSSpotSize](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_compute_r_m_s_spot_size.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_compute_r_m_s_spot_size)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenRMSSpotRadiusCalculator"}]}`
-->

### Function GetConversionToSystemUnits

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ac2599a09afa8e9751df38441b4a294bd"></a>

![][public]


```csharp
double ZOSAPI.Tools.IOpticalSystemTools.GetConversionToSystemUnits(ZemaxSystemUnits fromUnits)
```


Gets the conversion factor from the specified units to system units. Returns s such that [x' = s * x] where x is in "fromUnits" and x' is in system units.

**Parameters**:

* **fromUnits**: From units.


**Returns**:


**Parameters**:

* [ZemaxSystemUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aa) **fromUnits**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetConversionToSystemUnits"}]}`
-->

### Function GetConversionFromSystemUnits

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a53176cdc6067cbc7648640c605c6ba10"></a>

![][public]


```csharp
double ZOSAPI.Tools.IOpticalSystemTools.GetConversionFromSystemUnits(ZemaxSystemUnits toUnits)
```


Gets the conversion factor from system units to the specified units. Returns s such that [x' = s * x] where x is in system units and x' is in "toUnits".

**Parameters**:

* **toUnits**: To units.


**Returns**:


**Parameters**:

* [ZemaxSystemUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aa) **toUnits**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetConversionFromSystemUnits"}]}`
-->

### Function OpenShadedModelVisualizationExport

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a925e1628d96cc774504586051367f64e"></a>

![][public]


```csharp
IShadedModelVisualizationExport ZOSAPI.Tools.IOpticalSystemTools.OpenShadedModelVisualizationExport()
```


Opens the Shaded Model Visualization export tool. This tool allows retreieving a list of triangles representing the solid models used for Shaded Model visualization.

**Returns**:


**Return type**: [IShadedModelVisualizationExport](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenShadedModelVisualizationExport"}]}`
-->

### Function OpenMaterialsCatalog

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1abe528fa18736395e08f05182c8632712"></a>

![][public]


```csharp
IMaterialsCatalog ZOSAPI.Tools.IOpticalSystemTools.OpenMaterialsCatalog()
```


**Return type**: [IMaterialsCatalog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenMaterialsCatalog"}]}`
-->

### Function OpenQuickSensitivity

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aac8ffd0eff7b621a0b9240f4b8600b01"></a>

![][public]


```csharp
IQuickSensitivity ZOSAPI.Tools.IOpticalSystemTools.OpenQuickSensitivity()
```


**Return type**: [IQuickSensitivity](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenQuickSensitivity"}]}`
-->

### Function OpenToleranceDataViewer

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a45f6795078e3cc4ac112d0f293e5b6fd"></a>

![][public]


```csharp
IToleranceDataViewer ZOSAPI.Tools.IOpticalSystemTools.OpenToleranceDataViewer()
```


**Return type**: [IToleranceDataViewer](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenToleranceDataViewer"}]}`
-->

### Function OpenRayAimingWizard

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a55bda90378bbb93ef819176fc0945033"></a>

![][public]


```csharp
IRayAimingWizard ZOSAPI.Tools.IOpticalSystemTools.OpenRayAimingWizard()
```


**Return type**: [IRayAimingWizard](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_ray_aiming_wizard.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_ray_aiming_wizard)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenRayAimingWizard"}]}`
-->

### Function GetHPCSettingsFromPrefs

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ab4c461fa7e14a7abc3dae20c683fe7bf"></a>

![][public]


```csharp
IHPCSettings ZOSAPI.Tools.IOpticalSystemTools.GetHPCSettingsFromPrefs()
```


**Return type**: [IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetHPCSettingsFromPrefs"}]}`
-->

### Function GetHPCSettingsCustom

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1aab7d47afb9102c05935264844dd687c3"></a>

![][public]


```csharp
IHPCSettings ZOSAPI.Tools.IOpticalSystemTools.GetHPCSettingsCustom(int nodeCount, HPCNodeSize instanceType)
```


**Parameters**:

* int **nodeCount**
* [HPCNodeSize](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1af9b19fe46bcaaed03add101dc63d99f8) **instanceType**

**Return type**: [IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetHPCSettingsCustom"}]}`
-->

### Function OpenNSCRayTrace\_HPC

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ac17b14caf73f287d31ba80332cc95113"></a>

![][public]


```csharp
INSCRayTrace ZOSAPI.Tools.IOpticalSystemTools.OpenNSCRayTrace_HPC(IHPCSettings hpcSettings)
```


**Parameters**:

* [IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings) **hpcSettings**

**Return type**: [INSCRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenNSCRayTrace_HPC"}]}`
-->

### Function OpenTolerancing\_HPC

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2f860d04d928cdef3dfacac2e73ba6b0"></a>

![][public]


```csharp
ITolerancing ZOSAPI.Tools.IOpticalSystemTools.OpenTolerancing_HPC(IHPCSettings hpcSettings)
```


**Parameters**:

* [IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings) **hpcSettings**

**Return type**: [ITolerancing](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenTolerancing_HPC"}]}`
-->

### Function OpenGlobalOptimization\_HPC

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1adf1a8098bb1038c60efefd9f3c467f0c"></a>

![][public]


```csharp
IGlobalOptimization ZOSAPI.Tools.IOpticalSystemTools.OpenGlobalOptimization_HPC(IHPCSettings hpcSettings)
```


**Parameters**:

* [IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings) **hpcSettings**

**Return type**: [IGlobalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenGlobalOptimization_HPC"}]}`
-->

### Function OpenHammerOptimization\_HPC

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a32b632c45c930f3a14662069f715ba66"></a>

![][public]


```csharp
IHammerOptimization ZOSAPI.Tools.IOpticalSystemTools.OpenHammerOptimization_HPC(IHPCSettings hpcSettings)
```


**Parameters**:

* [IHPCSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_settings) **hpcSettings**

**Return type**: [IHammerOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenHammerOptimization_HPC"}]}`
-->

### Function GetPointTools

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a6b366e2bd7e34ba9b62e9d96e2d9b25f"></a>

![][public]


```csharp
IPointTools ZOSAPI.Tools.IOpticalSystemTools.GetPointTools()
```


**Return type**: [IPointTools](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetPointTools"}]}`
-->

### Function GetHullTools

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a2b4fa90acc4d84d91c2b9603b97b6bda"></a>

![][public]


```csharp
IHullTools ZOSAPI.Tools.IOpticalSystemTools.GetHullTools()
```


**Return type**: [IHullTools](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetHullTools"}]}`
-->

### Function OpenFileManager

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a47cdb84a0d65d7d3121932a09940c4e5"></a>

![][public]


```csharp
IFileManager ZOSAPI.Tools.IOpticalSystemTools.OpenFileManager()
```


**Return type**: [IFileManager](interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenFileManager"}]}`
-->

### Function OpenProjectToFileConverter

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a0c8b073c028c673c0008cfc2e93b74e7"></a>

![][public]


```csharp
FileManager.IConvertProjectToFileTool ZOSAPI.Tools.IOpticalSystemTools.OpenProjectToFileConverter()
```


**Return type**: [FileManager.IConvertProjectToFileTool](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenProjectToFileConverter"}]}`
-->

### Function OpenExportToSpeosLensSystem

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a25d76bda58f208ad2ecf6bbfc90a1cb4"></a>

![][public]


```csharp
IExportToSpeosLensSystem ZOSAPI.Tools.IOpticalSystemTools.OpenExportToSpeosLensSystem()
```


**Return type**: [IExportToSpeosLensSystem](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenExportToSpeosLensSystem"}]}`
-->

### Function OpenExportToSpeosWhitebox

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a1f155cdc7c002d9205d4d6e1239d96a5"></a>

![][public]


```csharp
IExportToSpeosWhitebox ZOSAPI.Tools.IOpticalSystemTools.OpenExportToSpeosWhitebox()
```


**Return type**: [IExportToSpeosWhitebox](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenExportToSpeosWhitebox"}]}`
-->

### Function GetUtilities

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1a04a6b363dba6f42b8a4c117680c376fc"></a>

![][public]


```csharp
IAPIUtilities ZOSAPI.Tools.IOpticalSystemTools.GetUtilities()
```


**Return type**: [IAPIUtilities](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.GetUtilities"}]}`
-->

### Function OpenNEST

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_optical_system_tools_1ac9062dea336aeb69eec64a23c296f9e5"></a>

![][public]


```csharp
IToleranceNest ZOSAPI.Tools.IOpticalSystemTools.OpenNEST()
```


**Return type**: [IToleranceNest](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IOpticalSystemTools.OpenNEST"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)