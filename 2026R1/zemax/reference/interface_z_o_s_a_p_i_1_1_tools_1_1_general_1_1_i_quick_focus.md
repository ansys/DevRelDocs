# Interface ZOSAPI::Tools::General::IQuickFocus

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running the Quick Focus tool. This interface can be accessed via the IOpticalSystemTools interface.

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

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [Criterion](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus_1ad43a6218fbc963f011c81ba7dbf59368)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [UseCentroid](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus_1a94b42a71c2ddb090236a54e7bcd24a6d)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property UseCentroid

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus_1a94b42a71c2ddb090236a54e7bcd24a6d"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IQuickFocus.UseCentroid
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickFocus.UseCentroid"}]}`
-->

### Property Criterion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus_1ad43a6218fbc963f011c81ba7dbf59368"></a>

![][public]

**Definition**:


```csharp
QuickFocusCriterion ZOSAPI.Tools.General.IQuickFocus.Criterion
```


Usage (see [Example 01](page_ex01.md#page_ex01) for a full sample)


C# 
```csharp
            // QuickFocus
            IQuickFocus quickFocus = TheSystem.Tools.OpenQuickFocus();
            quickFocus.Criterion = QuickFocusCriterion.SpotSizeRadial;
            quickFocus.UseCentroid = true;
            quickFocus.RunAndWaitForCompletion();
            quickFocus.Close();
```
 C++ 
```csharp
    // QuickFocus
    IQuickFocusPtr quickFocus = TheSystem->Tools->OpenQuickFocus();
    quickFocus->Criterion = QuickFocusCriterion_SpotSizeRadial;
    quickFocus->UseCentroid = true;
    ISystemToolPtr baseTool = quickFocus;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % QuickFocus
    quickFocus = TheSystem.Tools.OpenQuickFocus();
    quickFocus.Criterion = ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial;
    quickFocus.UseCentroid = true;
    quickFocus.RunAndWaitForCompletion();
    quickFocus.Close();
```
 Python 
```csharp
    # QuickFocus
    quickFocus = TheSystem.Tools.OpenQuickFocus()
    quickFocus.Criterion =  ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial
    quickFocus.UseCentroid = True
    quickFocus.RunAndWaitForCompletion()
    quickFocus.Close()
```


**Return type**: [QuickFocusCriterion](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1a20d6bbac90c0df7ec303415873b2553b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickFocus.Criterion"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)