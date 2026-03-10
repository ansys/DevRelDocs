# Interface ZOSAPI::Tools::IExportToSpeosLensSystem

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system"></a>

![][C#]
![][public]

**Definition**:

Interface to access the "Export to Speos Lens System" tool. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [AssumeRadialSymmetry](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a46e41182863cac15bb780922410d8c6b)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [Configuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a8fc3beb7949606bd3ee53bccccac3f7e)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [FileFormatVersion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a55b3c0277d0824aae03141d2cf0a3720)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [OPTDistortionFilename](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a74ddab0459267f26c93466a934d1eb23)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SamplePoints](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a68a05aa017cb59547d20747f931b7922)
* [SampleSize](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a698ff6bea9b831059d9e2509ba81997a)
* [SensorHeight](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1ae96caffce7687be93ab956251f3903b9)
* [SensorWidth](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1af59e2111f2d3ee164676e02d39670be2)
* [SkipSystemReversal](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a98381465b87157b617f23c0af2f8fe6f)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)
* [XSampling](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1ad65326952b1f1a5ef13312897809a3c5)
* [YSampling](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1af34654d895eb2d4914855aa545044a9c)

## Properties

### Property SensorWidth

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1af59e2111f2d3ee164676e02d39670be2"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IExportToSpeosLensSystem.SensorWidth
```


Controls the sensor width in Lens Units.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.SensorWidth"}]}`
-->

### Property SensorHeight

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1ae96caffce7687be93ab956251f3903b9"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IExportToSpeosLensSystem.SensorHeight
```


Controls the sensor height in Lens Units.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.SensorHeight"}]}`
-->

### Property SkipSystemReversal

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a98381465b87157b617f23c0af2f8fe6f"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IExportToSpeosLensSystem.SkipSystemReversal
```


If <code>true</code>, the tool will not attempt to reverse the system.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.SkipSystemReversal"}]}`
-->

### Property SamplePoints

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a68a05aa017cb59547d20747f931b7922"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IExportToSpeosLensSystem.SamplePoints
```


Controls the number of points used to sample the sensor.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.SamplePoints"}]}`
-->

### Property XSampling

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1ad65326952b1f1a5ef13312897809a3c5"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IExportToSpeosLensSystem.XSampling
```


Controls the number of points used to sample the sensor along X.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.XSampling"}]}`
-->

### Property YSampling

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1af34654d895eb2d4914855aa545044a9c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IExportToSpeosLensSystem.YSampling
```


Controls the number of points used to sample the sensor along Y.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.YSampling"}]}`
-->

### Property SampleSize

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a698ff6bea9b831059d9e2509ba81997a"></a>

![][public]

**Definition**:


```csharp
SampleSizes ZOSAPI.Tools.IExportToSpeosLensSystem.SampleSize
```


Controls the number of rays used to sample the pupil.


**Return type**: [SampleSizes](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.SampleSize"}]}`
-->

### Property Configuration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a8fc3beb7949606bd3ee53bccccac3f7e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IExportToSpeosLensSystem.Configuration
```


Controls which configuration is used by the tool. 0 identifies the current configuration.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.Configuration"}]}`
-->

### Property FileFormatVersion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a55b3c0277d0824aae03141d2cf0a3720"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IExportToSpeosLensSystem.FileFormatVersion
```


Controls which version of the file format is used for output. Valid values are 
* 2: Uses v2 of the OPTDistortion file format 

* 3: Uses v3 of the OPTDistortion file format

Note that v2 is only allowed for axially symmetric systems.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.FileFormatVersion"}]}`
-->

### Property AssumeRadialSymmetry

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a46e41182863cac15bb780922410d8c6b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IExportToSpeosLensSystem.AssumeRadialSymmetry
```


Controls if the sensor is sampled radially for radially symmetric systems.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.AssumeRadialSymmetry"}]}`
-->

### Property OPTDistortionFilename

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system_1a74ddab0459267f26c93466a934d1eb23"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.IExportToSpeosLensSystem.OPTDistortionFilename
```


Controls the name of the output file, including the full path.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IExportToSpeosLensSystem.OPTDistortionFilename"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)