# Interface ZOSAPI::Tools::IShadedModelVisualizationExport

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for getting a set of triangles for selected parts of the system. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [EndSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1a98b32bfe2bc7ac6f5de4c7c100cfc24a)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [GetResults](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1ae3da470526b1cb221508d92051d226ac)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Object](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1a215df8b4b11afd0757df321d02edb2d6)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [StartSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1a8f345cf998d768d8bb3ad9b29fbb5d41)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property StartSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1a8f345cf998d768d8bb3ad9b29fbb5d41"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IShadedModelVisualizationExport.StartSurface
```


The first surface which will be available in the output triangles. If set to -1, every surface from the beginning to the EndSurface will be available.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IShadedModelVisualizationExport.StartSurface"}]}`
-->

### Property EndSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1a98b32bfe2bc7ac6f5de4c7c100cfc24a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IShadedModelVisualizationExport.EndSurface
```


The last surface which will be available in the output triangles. If set to -1, every surface after the StartSurface will be available.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IShadedModelVisualizationExport.EndSurface"}]}`
-->

### Property Object

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1a215df8b4b11afd0757df321d02edb2d6"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IShadedModelVisualizationExport.Object
```


The Object index from a non-sequential surface which will be available in the output triangles. If specified as -1, all objects will be available.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IShadedModelVisualizationExport.Object"}]}`
-->

## Public functions

### Function GetResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export_1ae3da470526b1cb221508d92051d226ac"></a>

![][public]


```csharp
IShadedModelTriangleList ZOSAPI.Tools.IShadedModelVisualizationExport.GetResults()
```


Gets the triangles for the specified surfaces/objects, if available.

**Returns**:

IShadedModelTriangleList


**Return type**: [IShadedModelTriangleList](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_triangle_list.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_triangle_list)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IShadedModelVisualizationExport.GetResults"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)