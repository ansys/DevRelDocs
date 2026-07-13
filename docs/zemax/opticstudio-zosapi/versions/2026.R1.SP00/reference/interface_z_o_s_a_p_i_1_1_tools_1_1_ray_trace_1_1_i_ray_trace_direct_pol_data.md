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


**Return type**: int

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


**Return type**: int

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


**Return type**: bool

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


**Return type**: void

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

* int **waveNumber**
* double **X**
* double **Y**
* double **Z**
* double **L**
* double **M**
* double **N**

**Return type**: bool

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


**Return type**: bool

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

* out int **rayNumber**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **exr**
* out double **exi**
* out double **eyr**
* out double **eyi**
* out double **ezr**
* out double **ezi**
* out double **intensity**

**Return type**: bool

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

* out int **rayNumber**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **xo**
* out double **yo**
* out double **zo**
* out double **lo**
* out double **mo**
* out double **no**
* out double **exr**
* out double **exi**
* out double **eyr**
* out double **eyi**
* out double **ezr**
* out double **ezi**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectPolData.ReadNextResultFull"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
