# Interface ZOSAPI::Tools::RayTrace::IRayTraceNSCData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [AddRay](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1afb3f3892125ee9c4d2430afead33b899)
* [ClearData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1af30a2c28f2e482f8e8971a2825d1dae7)
* [HasResultData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1abdcac777daea38a51a79b543efea083e)
* [MaxRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1a8bc2c85723450e18a97edac88913dc94)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1aac66dc4696a3da3d6573a7f4d6686478)
* [ReadNextResult](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1aefb1bacb085e48ee69b0662997698707)
* [ReadNextSegment](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1a36a572761e9bca1143a4d8c77888be02)
* [StartReadingResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1ada47823f0f8441c605d2654a75f44d45)

## Properties

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1aac66dc4696a3da3d6573a7f4d6686478"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceNSCData.NumberOfRays
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.NumberOfRays"}]}`
-->

### Property MaxRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1a8bc2c85723450e18a97edac88913dc94"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceNSCData.MaxRays
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.MaxRays"}]}`
-->

### Property HasResultData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1abdcac777daea38a51a79b543efea083e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNSCData.HasResultData
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.HasResultData"}]}`
-->

## Public functions

### Function ClearData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1af30a2c28f2e482f8e8971a2825d1dae7"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.IRayTraceNSCData.ClearData()
```


**Return type**: [void](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.ClearData"}]}`
-->

### Function AddRay

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1afb3f3892125ee9c4d2430afead33b899"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNSCData.AddRay(int waveNumber, int surf, NSCTraceOptions mode, double X, double Y, double Z, double L, double M, double N, int InsideOf, double exr, double exi, double eyr, double eyi, double ezr, double ezi)
```


Note - as the input intensity is always assumed to be equal to 1.0, the e-field magnitude (if used) should also be 1.0.

**Parameters**:

* **waveNumber**: 
* **surf**: 
* **mode**: 
* **X**: 
* **Y**: 
* **Z**: 
* **L**: 
* **M**: 
* **N**: 
* **InsideOf**: 
* **exr**: 
* **exi**: 
* **eyr**: 
* **eyi**: 
* **ezr**: 
* **ezi**:


**Returns**:


**Parameters**:

* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **waveNumber**
* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **surf**
* [NSCTraceOptions](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286) **mode**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **X**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **Y**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **Z**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **L**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **M**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **N**
* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **InsideOf**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exr**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exi**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyr**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyi**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezr**
* [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezi**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.AddRay"}]}`
-->

### Function StartReadingResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1ada47823f0f8441c605d2654a75f44d45"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNSCData.StartReadingResults()
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.StartReadingResults"}]}`
-->

### Function ReadNextResult

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1aefb1bacb085e48ee69b0662997698707"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNSCData.ReadNextResult(out int rayNumber, out int ErrorCode, out int wave, out int numSegments)
```


**Parameters**:

* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **rayNumber**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ErrorCode**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **wave**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **numSegments**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.ReadNextResult"}]}`
-->

### Function ReadNextSegment

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data_1a36a572761e9bca1143a4d8c77888be02"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNSCData.ReadNextSegment(out int segmentLevel, out int segmentParent, out int hitObj, out int InsideOf, out double X, out double Y, out double Z, out double L, out double M, out double N, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi, out double intensity, out double pathLength)
```


**Parameters**:

* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **segmentLevel**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **segmentParent**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **hitObj**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **InsideOf**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **X**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **Y**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **Z**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **L**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **M**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **N**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **exi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **eyi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezr**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **ezi**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **intensity**
* [out](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **pathLength**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNSCData.ReadNextSegment"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
