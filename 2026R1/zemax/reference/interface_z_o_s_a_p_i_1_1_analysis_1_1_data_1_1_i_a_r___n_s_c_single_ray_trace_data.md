# Interface ZOSAPI::Analysis::Data::IAR_NSCSingleRayTraceData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [IsValid](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a0eccade29a190a127c5f70e1d07c68a0)
* [NumberOfSegments](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a5647d9316cd7e6e61dda55e81e5765c5)
* [ReadSegmentFull](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a1cf2d44a4a01fc516b73fa352c49899f)
* [WaveIndex](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1afe43e9504cf1761b4414984890607ad9)
* [WavelengthUM](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a7f7d853df42f67196a720952201a9a55)
* [ZRDFile](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a82553449c5822a5f156256747c0c8d71)

## Properties

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a0eccade29a190a127c5f70e1d07c68a0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.IsValid
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.IsValid"}]}`
-->

### Property ZRDFile

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a82553449c5822a5f156256747c0c8d71"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.ZRDFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.ZRDFile"}]}`
-->

### Property NumberOfSegments

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a5647d9316cd7e6e61dda55e81e5765c5"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.NumberOfSegments
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.NumberOfSegments"}]}`
-->

### Property WaveIndex

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1afe43e9504cf1761b4414984890607ad9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.WaveIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.WaveIndex"}]}`
-->

### Property WavelengthUM

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a7f7d853df42f67196a720952201a9a55"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.WavelengthUM
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.WavelengthUM"}]}`
-->

## Public functions

### Function ReadSegmentFull

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data_1a1cf2d44a4a01fc516b73fa352c49899f"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.ReadSegmentFull(int segmentNumber, out int segmentLevel, out int segmentParent, out int hitObj, out int hitFace, out int insideOf, out Tools.RayTrace.RayStatus status, out double x, out double y, out double z, out double l, out double m, out double n, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi, out double intensity, out double pathLength, out int xybin, out int lmbin, out double xNorm, out double yNorm, out double zNorm, out double index, out double startingPhase, out double phaseOf, out double phaseAt)
```


**Parameters**:

* int **segmentNumber**
* out int **segmentLevel**
* out int **segmentParent**
* out int **hitObj**
* out int **hitFace**
* out int **insideOf**
* out [Tools.RayTrace.RayStatus](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eb) **status**
* out double **x**
* out double **y**
* out double **z**
* out double **l**
* out double **m**
* out double **n**
* out double **exr**
* out double **exi**
* out double **eyr**
* out double **eyi**
* out double **ezr**
* out double **ezi**
* out double **intensity**
* out double **pathLength**
* out int **xybin**
* out int **lmbin**
* out double **xNorm**
* out double **yNorm**
* out double **zNorm**
* out double **index**
* out double **startingPhase**
* out double **phaseOf**
* out double **phaseAt**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_NSCSingleRayTraceData.ReadSegmentFull"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)