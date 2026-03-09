# Interface ZOSAPI::Tools::RayTrace::IRayTraceNormPolData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [AddRay](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a8b45eb2d69c102f971ff5326f4dbcbbe)
* [ClearData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a4578e9b6198fef1bbda9bb8a0309d5bb)
* [HasResultData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1ae2f8308003ca619ae97ebec72ce83f4e)
* [MaxRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a80c227771ff78e9ef45b0c4fe80e3a60)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a0fa759974a024240f3e33a602d196e42)
* [ReadNextResult](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a993864cee4fd4eba804d446792cc9e8c)
* [ReadNextResultFull](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a22ca6638f29cfb754e44a0df22fb181c)
* [StartReadingResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1ac3edd8c89f810d84ef1b2400196a2fa0)

## Properties

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a0fa759974a024240f3e33a602d196e42"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.NumberOfRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.NumberOfRays"}]}`
-->

### Property MaxRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a80c227771ff78e9ef45b0c4fe80e3a60"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.MaxRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.MaxRays"}]}`
-->

### Property HasResultData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1ae2f8308003ca619ae97ebec72ce83f4e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.HasResultData
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.HasResultData"}]}`
-->

## Public functions

### Function ClearData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a4578e9b6198fef1bbda9bb8a0309d5bb"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.ClearData()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.ClearData"}]}`
-->

### Function AddRay

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a8b45eb2d69c102f971ff5326f4dbcbbe"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.AddRay(int waveNumber, double Hx, double Hy, double Px, double Py, double exr, double exi, double eyr, double eyi, double ezr, double ezi)
```


**Parameters**:

* int **waveNumber**
* double **Hx**
* double **Hy**
* double **Px**
* double **Py**
* double **exr**
* double **exi**
* double **eyr**
* double **eyi**
* double **ezr**
* double **ezi**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.AddRay"}]}`
-->

### Function StartReadingResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1ac3edd8c89f810d84ef1b2400196a2fa0"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.StartReadingResults()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.StartReadingResults"}]}`
-->

### Function ReadNextResult

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a993864cee4fd4eba804d446792cc9e8c"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.ReadNextResult(out int rayNumber, out int ErrorCode, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi, out double intensity)
```


**Parameters**:

* out int **rayNumber**
* out int **ErrorCode**
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.ReadNextResult"}]}`
-->

### Function ReadNextResultFull

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data_1a22ca6638f29cfb754e44a0df22fb181c"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.ReadNextResultFull(out int rayNumber, out int ErrorCode, out double xo, out double yo, out double zo, out double lo, out double mo, out double no, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi, out double intensity)
```


**Parameters**:

* out int **rayNumber**
* out int **ErrorCode**
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormPolData.ReadNextResultFull"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)