# Interface ZOSAPI::Tools::General::IQuickAdjust

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running the Quick Adjust tool. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [AdjustSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1ab20c0e455a71af0a27fb0d4a51d31eeb)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [Criterion](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1ab455395deadbfa26503b8506627b2482)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [EvaluateSurface](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1a24b42ecf79b770c0150f77d841c92ac4)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SetEvaluateSurfaceImage](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1a59322ad6cffa73e076b9cb245227909d)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [SurfaceParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1aeae680a67539598ba02c4309595eef50)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property AdjustSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1ab20c0e455a71af0a27fb0d4a51d31eeb"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IQuickAdjust.AdjustSurface
```


Gets or sets the adjust surface.

The selected adjust surface.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickAdjust.AdjustSurface"}]}`
-->

### Property SurfaceParameter

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1aeae680a67539598ba02c4309595eef50"></a>

![][public]

**Definition**:


```csharp
QuickAdjustType ZOSAPI.Tools.General.IQuickAdjust.SurfaceParameter
```


**Return type**: [QuickAdjustType](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1adc6deef05e5d543931a39918d23e11c9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickAdjust.SurfaceParameter"}]}`
-->

### Property Criterion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1ab455395deadbfa26503b8506627b2482"></a>

![][public]

**Definition**:


```csharp
QuickAdjustCriterion ZOSAPI.Tools.General.IQuickAdjust.Criterion
```


**Return type**: [QuickAdjustCriterion](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1a3c752510047e67dbd655f6ce0007677e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickAdjust.Criterion"}]}`
-->

### Property EvaluateSurface

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1a24b42ecf79b770c0150f77d841c92ac4"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IQuickAdjust.EvaluateSurface
```


Gets or sets the surface at which to evaluate the criterion.

The evaluate surface (a value of 0 will use the Image surface).


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickAdjust.EvaluateSurface"}]}`
-->

## Public functions

### Function SetEvaluateSurfaceImage

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust_1a59322ad6cffa73e076b9cb245227909d"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IQuickAdjust.SetEvaluateSurfaceImage()
```


Sets EvaluateSurface to 0.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IQuickAdjust.SetEvaluateSurfaceImage"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
