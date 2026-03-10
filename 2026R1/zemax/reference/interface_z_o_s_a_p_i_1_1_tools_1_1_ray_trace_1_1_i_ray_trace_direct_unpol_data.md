# Interface ZOSAPI::Tools::RayTrace::IRayTraceDirectUnpolData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [AddRay](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a96b121c5131a5aeb03744d70f7ed7dc8)
* [ClearData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1ac2db62ca0a19e5f49459870e415c88d5)
* [HasResultData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a3381c0f8a5d221a50b1b040bac631cbd)
* [MaxRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a4d172e793b8ec12ecb656e2f8b12605a)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a24a83ea4081d5a9b8437e6c8418c27b5)
* [ReadNextResult](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1adda88d83e5b1c8ef6e730dc101d160a6)
* [StartReadingResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a7e5fa56d5594002336ae7d65585b2339)

## Properties

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a24a83ea4081d5a9b8437e6c8418c27b5"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.NumberOfRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.NumberOfRays"}]}`
-->

### Property MaxRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a4d172e793b8ec12ecb656e2f8b12605a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.MaxRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.MaxRays"}]}`
-->

### Property HasResultData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a3381c0f8a5d221a50b1b040bac631cbd"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.HasResultData
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.HasResultData"}]}`
-->

## Public functions

### Function ClearData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1ac2db62ca0a19e5f49459870e415c88d5"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.ClearData()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.ClearData"}]}`
-->

### Function AddRay

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a96b121c5131a5aeb03744d70f7ed7dc8"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.AddRay(int waveNumber, double X, double Y, double Z, double L, double M, double N)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.AddRay"}]}`
-->

### Function StartReadingResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1a7e5fa56d5594002336ae7d65585b2339"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.StartReadingResults()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.StartReadingResults"}]}`
-->

### Function ReadNextResult

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data_1adda88d83e5b1c8ef6e730dc101d160a6"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.ReadNextResult(out int rayNumber, out int ErrorCode, out int vignetteCode, out double X, out double Y, out double Z, out double L, out double M, out double N, out double l2, out double m2, out double n2, out double intensity)
```


**Parameters**:

* out int **rayNumber**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **X**
* out double **Y**
* out double **Z**
* out double **L**
* out double **M**
* out double **N**
* out double **l2**
* out double **m2**
* out double **n2**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceDirectUnpolData.ReadNextResult"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)