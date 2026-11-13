# Interface ZOSAPI::Tools::RayTrace::IRayTraceDirectPolData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [AddRay](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1aa3a885c5b49dfa619aa163fb795225f7)
* [ClearData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1ae3fd70ae378bc211f21ca0a5eab09213)
* [HasResultData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a68278dc5fdc6d30df5459df4fe1558fc)
* [MaxRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1affae6a6ffb34c7577481d5a3ecf4a2b1)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a1b441cc3310083080f0423f6b85f3092)
* [ReadNextResult](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a9c0e0e1603d42b12cba2825144f0b6d0)
* [ReadNextResultFull](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1ae8bf012de5bc76343a647ceab36d96e0)
* [StartReadingResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a9ac8da589f5e00c4f22b2bb50a1bc52c)

## Properties

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a1b441cc3310083080f0423f6b85f3092"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.NumberOfRays
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.NumberOfRays"}]}`
-->

### Property MaxRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1affae6a6ffb34c7577481d5a3ecf4a2b1"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.MaxRays
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.MaxRays"}]}`
-->

### Property HasResultData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a68278dc5fdc6d30df5459df4fe1558fc"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.HasResultData
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.HasResultData"}]}`
-->

## Public functions

### Function ClearData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1ae3fd70ae378bc211f21ca0a5eab09213"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ClearData()
```


**Return type**: [void](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ClearData"}]}`
-->

### Function AddRay

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1aa3a885c5b49dfa619aa163fb795225f7"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.AddRay(int waveNumber, double X, double Y, double Z, double L, double M, double N)
```


**Parameters**:

* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **waveNumber**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **X**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **Y**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **Z**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **L**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **M**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **N**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.AddRay"}]}`
-->

### Function StartReadingResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a9ac8da589f5e00c4f22b2bb50a1bc52c"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.StartReadingResults()
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.StartReadingResults"}]}`
-->

### Function ReadNextResult

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1a9c0e0e1603d42b12cba2825144f0b6d0"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ReadNextResult(out int rayNumber, out int ErrorCode, out int vignetteCode, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi, out double intensity)
```


**Parameters**:

* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **rayNumber**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ErrorCode**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **vignetteCode**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **intensity**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ReadNextResult"}]}`
-->

### Function ReadNextResultFull

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data_1ae8bf012de5bc76343a647ceab36d96e0"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ReadNextResultFull(out int rayNumber, out int ErrorCode, out int vignetteCode, out double xo, out double yo, out double zo, out double lo, out double mo, out double no, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi, out double intensity)
```


**Parameters**:

* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **rayNumber**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ErrorCode**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **vignetteCode**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **xo**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **yo**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **zo**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **lo**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **mo**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **no**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **intensity**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ReadNextResultFull"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
