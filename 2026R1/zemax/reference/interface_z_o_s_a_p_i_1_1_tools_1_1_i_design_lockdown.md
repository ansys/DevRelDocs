# Interface ZOSAPI::Tools::IDesignLockdown

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for validating a sequential design, prior to manufacturing or conversion to non-sequential. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ConvertSDToMaxApertures](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a8e4fdf90c782f24ae983145cacd9d760)
* [DecimalPrecision](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a2c93987e8bbfb9be01f538e6972c3d87)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [ExcludePickups](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1acb04ac0a6cee6fd6d2df9d4260318814)
* [FixModelGlasses](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a9f5e426d9bee9a2a825038c5006a706e)
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
* [UsePrecisionRounding](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a1019f7d59ff29a4557e3a1732bc598cb)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property DecimalPrecision

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a2c93987e8bbfb9be01f538e6972c3d87"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IDesignLockdown.DecimalPrecision
```


Controls how many decimal places are included when UsePrecisionRounding is turned on.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IDesignLockdown.DecimalPrecision"}]}`
-->

### Property ExcludePickups

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1acb04ac0a6cee6fd6d2df9d4260318814"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IDesignLockdown.ExcludePickups
```


If <code>true</code>, pickup solves will be retained in the converted system; otherwise all solves will be removed including pickups.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IDesignLockdown.ExcludePickups"}]}`
-->

### Property UsePrecisionRounding

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a1019f7d59ff29a4557e3a1732bc598cb"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IDesignLockdown.UsePrecisionRounding
```


Controls whether or not editor values will be rounded in the output system.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IDesignLockdown.UsePrecisionRounding"}]}`
-->

### Property FixModelGlasses

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a9f5e426d9bee9a2a825038c5006a706e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IDesignLockdown.FixModelGlasses
```


Controls whether any model glass solves will be converted to the nearest material in the selected catalogs.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IDesignLockdown.FixModelGlasses"}]}`
-->

### Property ConvertSDToMaxApertures

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown_1a8e4fdf90c782f24ae983145cacd9d760"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IDesignLockdown.ConvertSDToMaxApertures
```


Controls whether floating semi-diamters will be treating as if the have a Maximum solve attached.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IDesignLockdown.ConvertSDToMaxApertures"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
