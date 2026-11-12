# Interface ZOSAPI::Tools::IHPCJobMonitor

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor"></a>

![][C#]
![][public]

**Definition**:


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [CreateHPCPackage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ad5babda4b4f6ec249fd82cf3e1f46158)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [HPCConfiguration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a3b1ffbf11d0d614c7b3e51bcf8ff0988)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsHPCTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1acef856f93110815a487329f1d66f931a)
* [IsJobFinished](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a7091e9e4605a776de7364d22a1658621)
* [IsJobStarted](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1ac001783b6c946288c94781cb51e9f0cf)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [JobSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1aca627a5239f82dd8beb8f0435a385bb2)
* [JobStatus](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a38f5d244972b39a875ecba2807c9745b)
* [ProcessResults](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a0088caf21c678b5b02ec884c5a0df391)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitForUpdate](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a04c89ec514f3c65dac03b3427cdf1fb9)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property JobSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1aca627a5239f82dd8beb8f0435a385bb2"></a>

![][public]

**Definition**:


```csharp
IHPCJobSettings ZOSAPI.Tools.IHPCJobMonitor.JobSettings
```


**Return type**: [IHPCJobSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobMonitor.JobSettings"}]}`
-->

### Property IsJobStarted

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1ac001783b6c946288c94781cb51e9f0cf"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IHPCJobMonitor.IsJobStarted
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobMonitor.IsJobStarted"}]}`
-->

### Property IsJobFinished

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a7091e9e4605a776de7364d22a1658621"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IHPCJobMonitor.IsJobFinished
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobMonitor.IsJobFinished"}]}`
-->

### Property JobStatus

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a38f5d244972b39a875ecba2807c9745b"></a>

![][public]

**Definition**:


```csharp
IHPCJobStatus ZOSAPI.Tools.IHPCJobMonitor.JobStatus
```


**Return type**: [IHPCJobStatus](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobMonitor.JobStatus"}]}`
-->

## Public functions

### Function WaitForUpdate

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a04c89ec514f3c65dac03b3427cdf1fb9"></a>

![][public]


```csharp
void ZOSAPI.Tools.IHPCJobMonitor.WaitForUpdate()
```


**Return type**: [void](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobMonitor.WaitForUpdate"}]}`
-->

### Function ProcessResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_monitor_1a0088caf21c678b5b02ec884c5a0df391"></a>

![][public]


```csharp
IHPCResultProcessor ZOSAPI.Tools.IHPCJobMonitor.ProcessResults()
```


**Return type**: [IHPCResultProcessor](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_result_processor.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_result_processor)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobMonitor.ProcessResults"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
