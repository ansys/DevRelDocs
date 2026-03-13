# Interface ZOSAPI::Tools::ICriticalRaysetGenerator

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for generating a 'critical rayset'; these rays can be used after converting to non-sequential in order to verify that the conversion did not fundamentally alter the geometries. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [EffectiveInputDistance](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a8b3d3a8430f0fee3432bdc99124ec781)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [MinimumEfectiveInputDistance](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a6c2de05ed7b1391ee8c23182c41b3863)
* [NumRays](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1aa4b2f573b59a06f7831028ffcfe5b4e6)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [RayPattern](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a90d356fb6721aaf4805ca45cdc22d535)
* [RayScale](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a1a616a3391d1640e191be657a4111841)
* [ReadRaysFromFilename](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a2a7283343b5fe60e9d51e1090a0e984f)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SaveCriticalRaysFilename](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a7bef9cf22de581eaf8bbca98a3654a34)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [UseAllFields](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a6b3d36109b79e8b5de215e1054939e04)
* [UseAllWavelengths](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a1526e25e73701bdef89566a78cb2e496)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property RayPattern

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a90d356fb6721aaf4805ca45cdc22d535"></a>

![][public]

**Definition**:


```csharp
RayPatternOption ZOSAPI.Tools.ICriticalRaysetGenerator.RayPattern
```


The pattern used to generate the critical rays.


**Return type**: [RayPatternOption](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.RayPattern"}]}`
-->

### Property NumRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1aa4b2f573b59a06f7831028ffcfe5b4e6"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.ICriticalRaysetGenerator.NumRays
```


The number of rays to include in the critical ray bundle. Note that this is not necessarily the same as the number of total rays generated, and will be used differently for different ray patterns.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.NumRays"}]}`
-->

### Property MinimumEfectiveInputDistance

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a6c2de05ed7b1391ee8c23182c41b3863"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.ICriticalRaysetGenerator.MinimumEfectiveInputDistance
```


Gets the minimum efective input distance.

The minimum efective input distance.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.MinimumEfectiveInputDistance"}]}`
-->

### Property EffectiveInputDistance

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a8b3d3a8430f0fee3432bdc99124ec781"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.ICriticalRaysetGenerator.EffectiveInputDistance
```


The pre-progation distance used with infinite conjugate systems; must be >= MinimumEfectiveInputDistance.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.EffectiveInputDistance"}]}`
-->

### Property UseAllFields

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a6b3d36109b79e8b5de215e1054939e04"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ICriticalRaysetGenerator.UseAllFields
```


If <code>true</code>, all fields will be included in the critical ray set; otherwise, only the on-axis fields will be included.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.UseAllFields"}]}`
-->

### Property UseAllWavelengths

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a1526e25e73701bdef89566a78cb2e496"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ICriticalRaysetGenerator.UseAllWavelengths
```


If <code>true</code>, all wavelengths will be included in the critical ray set; otherwise, only the primary wavelength will be included.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.UseAllWavelengths"}]}`
-->

### Property ReadRaysFromFilename

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a2a7283343b5fe60e9d51e1090a0e984f"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.ICriticalRaysetGenerator.ReadRaysFromFilename
```


Input ray file (including path) to use when RayPattern is equal to RayPatternOption.List.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.ReadRaysFromFilename"}]}`
-->

### Property SaveCriticalRaysFilename

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a7bef9cf22de581eaf8bbca98a3654a34"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.ICriticalRaysetGenerator.SaveCriticalRaysFilename
```


Critial rayset output file name, including path.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.SaveCriticalRaysFilename"}]}`
-->

### Property RayScale

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator_1a1a616a3391d1640e191be657a4111841"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.ICriticalRaysetGenerator.RayScale
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ICriticalRaysetGenerator.RayScale"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
