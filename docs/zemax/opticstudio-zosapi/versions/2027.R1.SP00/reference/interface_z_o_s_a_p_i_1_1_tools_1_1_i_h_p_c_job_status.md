# Interface ZOSAPI::Tools::IHPCJobStatus

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status"></a>

![][C#]
![][public]

**Definition**:


## Members

* [Abort](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a1573e4a76a161fad553565ee70e94ffb)
* [CompletedTasks](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a982b4027bd29d0bd25b716a57258c523)
* [CurrentStatusInfo](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1af2ce84d21daf30004649c6fa038a55f0)
* [DisconnectJob](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1aabeda48418dabbb2a9240f0a0e1f6002)
* [ElapsedTimeMin](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a4655300287a42767329a12cd0c092d66)
* [EstimatedTimeMin](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a702402fc5087076ad93b4d9043bed774)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a1ed58c9d5231c5759e5ed27dd86f96da)
* [JobErrorCode](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a8ea942f7ee51bf0e6046acd7e10099de)
* [JobStarted](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a586fa0a1d8cb7a47bc087f148d959f79)
* [JobStatusCode](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a5fb8be161a1be296cbd0130c47cd603a)
* [LocalLog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a3eaf05f582f4fea8c917a703020d0a13)
* [RemoteErrorsInfo](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a1761d453cec873040b0429280befc8b7)
* [RemoteLog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1ae850db1253a2eefa38a16713b342c577)
* [SchedulerStatusInfo](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1ab5df6278bbf28259a560498b8c093a61)
* [StatusCode](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a82714f10d2bc12d2f15492cae66c3170)
* [StatusDetails](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a24343c9571a39617ff486148db8edbea)
* [StopAndDownload](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a4d9cae53b5d51c2c97d6a0fe52c24330)
* [TotalTasks](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a50ca1bd057d1037d7cdb9d716fd507e8)

## Properties

### Property StatusCode

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a82714f10d2bc12d2f15492cae66c3170"></a>

![][public]

**Definition**:


```csharp
HPCJobStatusCodes ZOSAPI.Tools.IHPCJobStatus.StatusCode
```


**Return type**: [HPCJobStatusCodes](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a791a7611c1786a0c74dacc0faa8765cf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.StatusCode"}]}`
-->

### Property IsRunning

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a1ed58c9d5231c5759e5ed27dd86f96da"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IHPCJobStatus.IsRunning
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.IsRunning"}]}`
-->

### Property CurrentStatusInfo

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1af2ce84d21daf30004649c6fa038a55f0"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IHPCJobStatus.CurrentStatusInfo
```


**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.CurrentStatusInfo"}]}`
-->

### Property SchedulerStatusInfo

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1ab5df6278bbf28259a560498b8c093a61"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IHPCJobStatus.SchedulerStatusInfo
```


**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.SchedulerStatusInfo"}]}`
-->

### Property LocalLog

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a3eaf05f582f4fea8c917a703020d0a13"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IHPCJobStatus.LocalLog
```


**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.LocalLog"}]}`
-->

### Property RemoteLog

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1ae850db1253a2eefa38a16713b342c577"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IHPCJobStatus.RemoteLog
```


**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.RemoteLog"}]}`
-->

### Property RemoteErrorsInfo

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a1761d453cec873040b0429280befc8b7"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IHPCJobStatus.RemoteErrorsInfo
```


**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.RemoteErrorsInfo"}]}`
-->

### Property JobStarted

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a586fa0a1d8cb7a47bc087f148d959f79"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IHPCJobStatus.JobStarted
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.JobStarted"}]}`
-->

### Property JobStatusCode

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a5fb8be161a1be296cbd0130c47cd603a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IHPCJobStatus.JobStatusCode
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.JobStatusCode"}]}`
-->

### Property JobErrorCode

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a8ea942f7ee51bf0e6046acd7e10099de"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IHPCJobStatus.JobErrorCode
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.JobErrorCode"}]}`
-->

### Property TotalTasks

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a50ca1bd057d1037d7cdb9d716fd507e8"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IHPCJobStatus.TotalTasks
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.TotalTasks"}]}`
-->

### Property CompletedTasks

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a982b4027bd29d0bd25b716a57258c523"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IHPCJobStatus.CompletedTasks
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.CompletedTasks"}]}`
-->

### Property EstimatedTimeMin

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a702402fc5087076ad93b4d9043bed774"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IHPCJobStatus.EstimatedTimeMin
```


**Return type**: [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.EstimatedTimeMin"}]}`
-->

### Property ElapsedTimeMin

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a4655300287a42767329a12cd0c092d66"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IHPCJobStatus.ElapsedTimeMin
```


**Return type**: [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.ElapsedTimeMin"}]}`
-->

### Property StatusDetails

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a24343c9571a39617ff486148db8edbea"></a>

![][public]

**Definition**:


```csharp
IHPCJSData ZOSAPI.Tools.IHPCJobStatus.StatusDetails
```


**Return type**: [IHPCJSData](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_j_s_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_j_s_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.StatusDetails"}]}`
-->

## Public functions

### Function StopAndDownload

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a4d9cae53b5d51c2c97d6a0fe52c24330"></a>

![][public]


```csharp
bool ZOSAPI.Tools.IHPCJobStatus.StopAndDownload()
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.StopAndDownload"}]}`
-->

### Function Abort

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1a1573e4a76a161fad553565ee70e94ffb"></a>

![][public]


```csharp
bool ZOSAPI.Tools.IHPCJobStatus.Abort()
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.Abort"}]}`
-->

### Function DisconnectJob

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_job_status_1aabeda48418dabbb2a9240f0a0e1f6002"></a>

![][public]


```csharp
bool ZOSAPI.Tools.IHPCJobStatus.DisconnectJob()
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCJobStatus.DisconnectJob"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
