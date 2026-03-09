# Interface ZOSAPI::Tools::IConvertToNSCGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for converting the sequential surfaces to a non-sequential group. This interface can be accessed via the IOpticalSystemTools interface.

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

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ConvertFileToNSC](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a96df0ba1c1b2b5a366eee43ff104b079)
* [ConvertStopToNSCAperture](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ad6e148eefce2b88cec30f26a67e34036)
* [ConvertToGlobalCoordinates](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1af8466c58c2f474710023f59b5c69c7dd)
* [CreateSourcesAndDetectors](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ad92fbe93506cb1b3fad0f1499b06a918)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [FirstSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ae91d29a32b1430d9c4c15e99d4b8be94)
* [HighFidelityConversion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ab65f412e3746b00fb8fed44d148f59dc)
* [HighFidelityResolution](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1aa39dcb5250f5bd9ee1f1dadcf02d6281)
* [IgnoreErrors](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a6de5a0c989130f785b6ce77856464752)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [LastSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a68bc498d7f93811b5e1cbe8be5b50ae3)
* [OverfillFactor](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a4bb668e01cd03dbb287803528ad97320)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [StopMechanicalHalfWidth](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ac118d74987a5d395ca00290d06bf375f)
* [StopObjectFace](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a7743caaa58818a9711a4de41749c974c)
* [StopObjectNumber](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ad5ef9179ce735bec49189926596c8bef)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property FirstSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ae91d29a32b1430d9c4c15e99d4b8be94"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IConvertToNSCGroup.FirstSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.FirstSurface"}]}`
-->

### Property LastSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a68bc498d7f93811b5e1cbe8be5b50ae3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IConvertToNSCGroup.LastSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.LastSurface"}]}`
-->

### Property IgnoreErrors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a6de5a0c989130f785b6ce77856464752"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IConvertToNSCGroup.IgnoreErrors
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.IgnoreErrors"}]}`
-->

### Property ConvertFileToNSC

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a96df0ba1c1b2b5a366eee43ff104b079"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IConvertToNSCGroup.ConvertFileToNSC
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.ConvertFileToNSC"}]}`
-->

### Property CreateSourcesAndDetectors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ad92fbe93506cb1b3fad0f1499b06a918"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IConvertToNSCGroup.CreateSourcesAndDetectors
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.CreateSourcesAndDetectors"}]}`
-->

### Property ConvertToGlobalCoordinates

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1af8466c58c2f474710023f59b5c69c7dd"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IConvertToNSCGroup.ConvertToGlobalCoordinates
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.ConvertToGlobalCoordinates"}]}`
-->

### Property ConvertStopToNSCAperture

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ad6e148eefce2b88cec30f26a67e34036"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IConvertToNSCGroup.ConvertStopToNSCAperture
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.ConvertStopToNSCAperture"}]}`
-->

### Property StopMechanicalHalfWidth

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ac118d74987a5d395ca00290d06bf375f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IConvertToNSCGroup.StopMechanicalHalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.StopMechanicalHalfWidth"}]}`
-->

### Property OverfillFactor

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a4bb668e01cd03dbb287803528ad97320"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IConvertToNSCGroup.OverfillFactor
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.OverfillFactor"}]}`
-->

### Property StopObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ad5ef9179ce735bec49189926596c8bef"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IConvertToNSCGroup.StopObjectNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.StopObjectNumber"}]}`
-->

### Property StopObjectFace

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1a7743caaa58818a9711a4de41749c974c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IConvertToNSCGroup.StopObjectFace
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.StopObjectFace"}]}`
-->

### Property HighFidelityConversion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1ab65f412e3746b00fb8fed44d148f59dc"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IConvertToNSCGroup.HighFidelityConversion
```


If true, any sequential surfaces that convert to grid sag representations will use bicubic interpolation instead of linear and the resolution will be set to the value specified in HighFidelityResolution.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.HighFidelityConversion"}]}`
-->

### Property HighFidelityResolution

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group_1aa39dcb5250f5bd9ee1f1dadcf02d6281"></a>

![][public]

**Definition**:


```csharp
SampleSizes_Pow2Plus1_X ZOSAPI.Tools.IConvertToNSCGroup.HighFidelityResolution
```


IF HighFidelityConversion is set to true, this sets the resolution used in the Grid Sag surface after conversion (up to 4097x4097).


**Return type**: [SampleSizes\_Pow2Plus1\_X](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IConvertToNSCGroup.HighFidelityResolution"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)