# Interface ZOSAPI::Tools::RayTrace::IBatchRayTrace

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running a ray trace on multiple rays at a time. This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 22](../apiexamples/example_22.md) for a full sample)


C# 
```csharp
            // Set up Batch Ray Trace
            ZOSAPI.Tools.RayTrace.IBatchRayTrace raytrace = TheSystem.Tools.OpenBatchRayTrace();
            int nsur = TheSystem.LDE.NumberOfSurfaces;
            int max_rays = 30;
            ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
```
 C++ 
```csharp
    // Set up Batch Ray Trace
    IBatchRayTracePtr raytrace = TheSystem->Tools->OpenBatchRayTrace();
    int nsur = TheSystem->LDE->NumberOfSurfaces;
    int max_rays = 30;
    IRayTraceNormUnpolDataPtr normUnPolData = raytrace->CreateNormUnpol((max_rays + 1) * (max_rays + 1), RaysType::RaysType_Real, nsur);
```
 Matlab 
```csharp
    % Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace();
    nsur = TheSystem.LDE.NumberOfSurfaces;
    max_rays = 30;
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1),ZOSAPI.Tools.RayTrace.RaysType.Real,nsur);
```
 Python 
```csharp
    # Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace()
    nsur = TheSystem.LDE.NumberOfSurfaces
    max_rays = 30
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur)
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [CreateDirectPol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a80487c9ddddc008652575311d007df0f)
* [CreateDirectUnpol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a68f8eed557fc5b6817067ef5ca02ac92)
* [CreateNormPol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a4dbc64caaabfc176af07faa98efd5f18)
* [CreateNormUnpol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a9bba4e0c9125e31f778462bbfa30a2cb)
* [CreateNSC](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a67c5e0de942cd17a5111bda78ef7d27f)
* [CreateNSCSourceData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a3fe15e6d875f0c5d64da0a50d6093366)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [GetDirectFieldCoordinates](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a7b16049b4400c22268944e3cbc9e10b6)
* [GetPhase](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a87da32ca035bef4cbe1961b681c95632)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SingleRayDirectPol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a3930233c51b311d40e4b4b696ca2f90f)
* [SingleRayDirectPolFull](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1aafba868cfbd7cb163d30687a74de36a0)
* [SingleRayDirectUnpol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1aa040a523ef4059e73fd6409b2dd57c41)
* [SingleRayNormPol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a56a2069fe80c2deb019ede4c1df8f1ca)
* [SingleRayNormPolFull](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a7d27bfeb80bb83d0c517f3e6bdd2c185)
* [SingleRayNormUnpol](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1aa446cd8397c46129a723de3f4c0e1998)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Public functions

### Function CreateNormUnpol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a9bba4e0c9125e31f778462bbfa30a2cb"></a>

![][public]


```csharp
IRayTraceNormUnpolData ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNormUnpol(int MaxRays, RaysType rayType, int toSurface)
```


Performs a batch unpolarized ray trace, using normalized pupil coordinates. See the OpticStudio help manual for more information.

Usage (see [Example 23](../apiexamples/example_23.md) for a full sample)


C# 
```csharp
            // Set up Batch Ray Trace
            ZOSAPI.Tools.RayTrace.IBatchRayTrace raytrace = TheSystem.Tools.OpenBatchRayTrace();
            int nsur = TheSystem.LDE.NumberOfSurfaces;
            ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData normUnPolData = raytrace.CreateNormUnpol(max_rays + 1, ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
```
 C++ 
```csharp
    // Set up Batch Ray Trace
    IBatchRayTracePtr raytrace = TheSystem->Tools->OpenBatchRayTrace();
    int nsur = TheSystem->LDE->NumberOfSurfaces;
    IRayTraceNormUnpolDataPtr normUnPolData = raytrace->CreateNormUnpol(max_rays + 1, RaysType_Real, nsur);
```
 Matlab 
```csharp
    % Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace();
    nsur = TheSystem.LDE.NumberOfSurfaces;
    normUnPolData = raytrace.CreateNormUnpol(max_rays + 1, ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
```
 Python 
```csharp
    # Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace()
    nsur = TheSystem.LDE.NumberOfSurfaces
    normUnPolData = raytrace.CreateNormUnpol(max_rays + 1, ZOSAPI.Tools.RayTrace.RaysType.Real, nsur)
```
 


**Parameters**:

* **MaxRays**: The maximum rays.
* **rayType**: Type of the ray.
* **toSurface**: To surface.


**Returns**:


**Parameters**:

* int **MaxRays**
* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* int **toSurface**

**Return type**: [IRayTraceNormUnpolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNormUnpol"}]}`
-->

### Function SingleRayNormUnpol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1aa446cd8397c46129a723de3f4c0e1998"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayNormUnpol(RaysType rayType, int toSurf, int waveNumber, double Hx, double Hy, double Px, double Py, bool calcOPD, out int ErrorCode, out int vignetteCode, out double xo, out double yo, out double zo, out double lo, out double mo, out double no, out double l2o, out double m2o, out double n2o, out double opd, out double intensity)
```


Performs the same calculation as CreateNormUnpol, but for one ray at a time.

**Parameters**:

* **rayType**: Type of the ray.
* **toSurf**: To surf.
* **waveNumber**: The wave number.
* **Hx**: hx.
* **Hy**: hy.
* **Px**: px.
* **Py**: py.
* **calcOPD**: if set to <code>true</code> the Optical Path Difference will be calculated. Note that this can only be done when tracing rays to the Image surface.
* **ErrorCode**: The error code.
* **vignetteCode**: The vignette code.
* **xo**: xo.
* **yo**: yo.
* **zo**: zo.
* **lo**: lo.
* **mo**: mo.
* **no**: no.
* **l2o**: l2o.
* **m2o**: m2o.
* **n2o**: n2o.
* **opd**: The OPD, if calculated.
* **intensity**: The intensity.


**Returns**:


**Parameters**:

* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* int **toSurf**
* int **waveNumber**
* double **Hx**
* double **Hy**
* double **Px**
* double **Py**
* bool **calcOPD**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **xo**
* out double **yo**
* out double **zo**
* out double **lo**
* out double **mo**
* out double **no**
* out double **l2o**
* out double **m2o**
* out double **n2o**
* out double **opd**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayNormUnpol"}]}`
-->

### Function CreateDirectUnpol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a68f8eed557fc5b6817067ef5ca02ac92"></a>

![][public]


```csharp
IRayTraceDirectUnpolData ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateDirectUnpol(int MaxRays, RaysType rayType, int startSurface, int toSurface)
```


Performs a batch unpolarized ray trace, using direct x/y/z coordinates. See the OpticStudio help manual for more information.

**Parameters**:

* **MaxRays**: The maximum rays.
* **rayType**: Type of the ray.
* **startSurface**: The start surface.
* **toSurface**: To surface.


**Returns**:


**Parameters**:

* int **MaxRays**
* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* int **startSurface**
* int **toSurface**

**Return type**: [IRayTraceDirectUnpolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateDirectUnpol"}]}`
-->

### Function SingleRayDirectUnpol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1aa040a523ef4059e73fd6409b2dd57c41"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayDirectUnpol(RaysType rayType, int startSurface, int toSurface, int waveNumber, double X, double Y, double Z, double L, double M, double N, out int ErrorCode, out int vignetteCode, out double xo, out double yo, out double zo, out double lo, out double mo, out double no, out double l2o, out double m2o, out double n2o, out double intensity)
```


Performs the same calculation as CreateDirectUnpol, but for one ray at a time.

**Parameters**:

* **rayType**: Type of the ray.
* **startSurface**: The start surface.
* **toSurface**: To surface.
* **waveNumber**: The wave number.
* **X**: x.
* **Y**: y.
* **Z**: z.
* **L**: l.
* **M**: m.
* **N**: n.
* **ErrorCode**: The error code.
* **vignetteCode**: The vignette code.
* **xo**: xo.
* **yo**: yo.
* **zo**: zo.
* **lo**: lo.
* **mo**: mo.
* **no**: no.
* **l2o**: l2o.
* **m2o**: m2o.
* **n2o**: n2o.
* **intensity**: The intensity.


**Returns**:


**Parameters**:

* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* int **startSurface**
* int **toSurface**
* int **waveNumber**
* double **X**
* double **Y**
* double **Z**
* double **L**
* double **M**
* double **N**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **xo**
* out double **yo**
* out double **zo**
* out double **lo**
* out double **mo**
* out double **no**
* out double **l2o**
* out double **m2o**
* out double **n2o**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayDirectUnpol"}]}`
-->

### Function CreateNormPol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a4dbc64caaabfc176af07faa98efd5f18"></a>

![][public]


```csharp
IRayTraceNormPolData ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNormPol(int MaxRays, RaysType rayType, double Ex, double Ey, double phaX, double phaY, int toSurface)
```


Performs a batch polarized ray trace, using normalized pupil coordinates. See the OpticStudio help manual for more information.

**Parameters**:

* **MaxRays**: The maximum rays.
* **rayType**: Type of the ray.
* **Ex**: ex.
* **Ey**: ey.
* **phaX**: phase x.
* **phaY**: phase y.
* **toSurface**: To surface.


**Returns**:


**Parameters**:

* int **MaxRays**
* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Ex**
* double **Ey**
* double **phaX**
* double **phaY**
* int **toSurface**

**Return type**: [IRayTraceNormPolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNormPol"}]}`
-->

### Function SingleRayNormPol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a56a2069fe80c2deb019ede4c1df8f1ca"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayNormPol(RaysType rayType, double Ex, double Ey, double phaX, double phaY, int toSurf, int waveNumber, double Hx, double Hy, double Px, double Py, double exr, double exi, double eyr, double eyi, double ezr, double ezi, out int ErrorCode, out double exro, out double exio, out double eyro, out double eyio, out double ezro, out double ezio, out double intensity)
```


Performs the same calculation as CreateNormPol, but for one ray at a time.

**Parameters**:

* **rayType**: Type of the ray.
* **Ex**: ex.
* **Ey**: ey.
* **phaX**: phase x.
* **phaY**: phase y.
* **toSurf**: To surf.
* **waveNumber**: The wave number.
* **Hx**: hx.
* **Hy**: hy.
* **Px**: px.
* **Py**: py.
* **exr**: exr.
* **exi**: exi.
* **eyr**: eyr.
* **eyi**: eyi.
* **ezr**: ezr.
* **ezi**: ezi.
* **ErrorCode**: The error code.
* **exro**: exro.
* **exio**: exio.
* **eyro**: eyro.
* **eyio**: eyio.
* **ezro**: ezro.
* **ezio**: ezio.
* **intensity**: The intensity.


**Returns**:


**Parameters**:

* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Ex**
* double **Ey**
* double **phaX**
* double **phaY**
* int **toSurf**
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
* out int **ErrorCode**
* out double **exro**
* out double **exio**
* out double **eyro**
* out double **eyio**
* out double **ezro**
* out double **ezio**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayNormPol"}]}`
-->

### Function SingleRayNormPolFull

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a7d27bfeb80bb83d0c517f3e6bdd2c185"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayNormPolFull(RaysType rayType, double Ex, double Ey, double phaX, double phaY, int toSurf, int waveNumber, double Hx, double Hy, double Px, double Py, double exr, double exi, double eyr, double eyi, double ezr, double ezi, out int ErrorCode, out double xo, out double yo, out double zo, out double lo, out double mo, out double no, out double exro, out double exio, out double eyro, out double eyio, out double ezro, out double ezio, out double intensity)
```


Performs the same calculation as CreateNormPol, but for one ray at a time.

**Parameters**:

* **rayType**: Type of the ray.
* **Ex**: ex.
* **Ey**: ey.
* **phaX**: phase x.
* **phaY**: phase y.
* **toSurf**: To surf.
* **waveNumber**: The wave number.
* **Hx**: hx.
* **Hy**: hy.
* **Px**: px.
* **Py**: py.
* **exr**: exr.
* **exi**: exi.
* **eyr**: eyr.
* **eyi**: eyi.
* **ezr**: ezr.
* **ezi**: ezi.
* **ErrorCode**: The error code.
* **xo**: output x.
* **yo**: output y.
* **zo**: output z.
* **lo**: output l.
* **mo**: output m.
* **no**: output n.
* **exro**: output exr.
* **exio**: output exi.
* **eyro**: output eyr.
* **eyio**: output eyi.
* **ezro**: output ezr.
* **ezio**: output ezi.
* **intensity**: The intensity.


**Returns**:


**Parameters**:

* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Ex**
* double **Ey**
* double **phaX**
* double **phaY**
* int **toSurf**
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
* out int **ErrorCode**
* out double **xo**
* out double **yo**
* out double **zo**
* out double **lo**
* out double **mo**
* out double **no**
* out double **exro**
* out double **exio**
* out double **eyro**
* out double **eyio**
* out double **ezro**
* out double **ezio**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayNormPolFull"}]}`
-->

### Function CreateDirectPol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a80487c9ddddc008652575311d007df0f"></a>

![][public]


```csharp
IRayTraceDirectPolData ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateDirectPol(int MaxRays, RaysType rayType, double Ex, double Ey, double phax, double phay, int startSurface, int toSurface)
```


Performs a batch polarized ray trace, using direct x/y/z coordinates. See the OpticStudio help manual for more information.

**Parameters**:

* **MaxRays**: The maximum rays.
* **rayType**: Type of the ray.
* **Ex**: ex.
* **Ey**: ey.
* **phax**: phase x.
* **phay**: phase y.
* **startSurface**: The start surface.
* **toSurface**: To surface.


**Returns**:


**Parameters**:

* int **MaxRays**
* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Ex**
* double **Ey**
* double **phax**
* double **phay**
* int **startSurface**
* int **toSurface**

**Return type**: [IRayTraceDirectPolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateDirectPol"}]}`
-->

### Function SingleRayDirectPol

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a3930233c51b311d40e4b4b696ca2f90f"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayDirectPol(RaysType rayType, double Ex, double Ey, double phaX, double phaY, int startSurface, int toSurface, int waveNumber, double X, double Y, double Z, double L, double M, double N, out int ErrorCode, out int vignetteCode, out double exro, out double exio, out double eyro, out double eyio, out double ezro, out double ezio, out double intensity)
```


Performs the same calculation as CreateDirectPol, but for one ray at a time.

**Parameters**:

* **rayType**: Type of the ray.
* **Ex**: ex.
* **Ey**: ey.
* **phaX**: phase x.
* **phaY**: phase y.
* **startSurface**: The start surface.
* **toSurface**: To surface.
* **waveNumber**: The wave number.
* **X**: x.
* **Y**: y.
* **Z**: z.
* **L**: l.
* **M**: m.
* **N**: n.
* **ErrorCode**: The error code.
* **vignetteCode**: The vignette code.
* **exro**: exro.
* **exio**: exio.
* **eyro**: eyro.
* **eyio**: eyio.
* **ezro**: ezro.
* **ezio**: ezio.
* **intensity**: The intensity.


**Returns**:


**Parameters**:

* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Ex**
* double **Ey**
* double **phaX**
* double **phaY**
* int **startSurface**
* int **toSurface**
* int **waveNumber**
* double **X**
* double **Y**
* double **Z**
* double **L**
* double **M**
* double **N**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **exro**
* out double **exio**
* out double **eyro**
* out double **eyio**
* out double **ezro**
* out double **ezio**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayDirectPol"}]}`
-->

### Function SingleRayDirectPolFull

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1aafba868cfbd7cb163d30687a74de36a0"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayDirectPolFull(RaysType rayType, double Ex, double Ey, double phaX, double phaY, int startSurface, int toSurface, int waveNumber, double X, double Y, double Z, double L, double M, double N, out int ErrorCode, out int vignetteCode, out double xo, out double yo, out double zo, out double lo, out double mo, out double no, out double exro, out double exio, out double eyro, out double eyio, out double ezro, out double ezio, out double intensity)
```


Performs the same calculation as CreateDirectPol, but for one ray at a time.

**Parameters**:

* **rayType**: Type of the ray.
* **Ex**: ex.
* **Ey**: ey.
* **phaX**: phase x.
* **phaY**: phase y.
* **startSurface**: The start surface.
* **toSurface**: To surface.
* **waveNumber**: The wave number.
* **X**: x.
* **Y**: y.
* **Z**: z.
* **L**: l.
* **M**: m.
* **N**: n.
* **ErrorCode**: The error code.
* **vignetteCode**: The vignette code.
* **xo**: output x.
* **yo**: output y.
* **zo**: output z.
* **lo**: output l.
* **mo**: output m.
* **no**: output n.
* **exro**: output exr.
* **exio**: output exi.
* **eyro**: output eyr.
* **eyio**: output eyi.
* **ezro**: output ezr.
* **ezio**: output ezi.
* **intensity**: The intensity.


**Returns**:


**Parameters**:

* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Ex**
* double **Ey**
* double **phaX**
* double **phaY**
* int **startSurface**
* int **toSurface**
* int **waveNumber**
* double **X**
* double **Y**
* double **Z**
* double **L**
* double **M**
* double **N**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **xo**
* out double **yo**
* out double **zo**
* out double **lo**
* out double **mo**
* out double **no**
* out double **exro**
* out double **exio**
* out double **eyro**
* out double **eyio**
* out double **ezro**
* out double **ezio**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.SingleRayDirectPolFull"}]}`
-->

### Function CreateNSC

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a67c5e0de942cd17a5111bda78ef7d27f"></a>

![][public]


```csharp
IRayTraceNSCData ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNSC(int MaxRays, int maxSegments, double coherenceLength)
```


Creates a interface to define custom non-sequential rays.

**Parameters**:

* **MaxRays**: The maximum rays.
* **maxSegments**: The maximum segments.
* **coherenceLength**: The coherence length to use if performing a polarized ray trace. <br/>
 If set to 0, the same coherence value will be used for all rays. Any other value will result in a random coherence value for each ray (for more information, see the OpticStudio documentation regarding Coherence Length).


**Returns**:


**Parameters**:

* int **MaxRays**
* int **maxSegments**
* double **coherenceLength**

**Return type**: [IRayTraceNSCData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNSC"}]}`
-->

### Function CreateNSCSourceData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a3fe15e6d875f0c5d64da0a50d6093366"></a>

![][public]


```csharp
IRayTraceNSCSourceData ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNSCSourceData(int maxSegments, double coherenceLength)
```


**Parameters**:

* int **maxSegments**
* double **coherenceLength**

**Return type**: [IRayTraceNSCSourceData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_source_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_source_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.CreateNSCSourceData"}]}`
-->

### Function GetDirectFieldCoordinates

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a7b16049b4400c22268944e3cbc9e10b6"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IBatchRayTrace.GetDirectFieldCoordinates(int waveNumber, RaysType rayType, double Hx, double Hy, double Px, double Py, out double X, out double Y, out double Z, out double L, out double M, out double N)
```


Convert from Normalized pupil coordinates to X/Y/Z coordinates.

**Parameters**:

* **waveNumber**: The wave number.
* **rayType**: Type of the ray.
* **Hx**: hx.
* **Hy**: hy.
* **Px**: px.
* **Py**: py.
* **X**: x.
* **Y**: y.
* **Z**: z.
* **L**: l.
* **M**: m.
* **N**: n.


**Returns**:


**Parameters**:

* int **waveNumber**
* [RaysType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828) **rayType**
* double **Hx**
* double **Hy**
* double **Px**
* double **Py**
* out double **X**
* out double **Y**
* out double **Z**
* out double **L**
* out double **M**
* out double **N**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.GetDirectFieldCoordinates"}]}`
-->

### Function GetPhase

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace_1a87da32ca035bef4cbe1961b681c95632"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.IBatchRayTrace.GetPhase(double L, double M, double N, double jx, double jy, double xPhaseDeg, double yPhaseDeg, double intensity, out double exr, out double exi, out double eyr, out double eyi, out double ezr, out double ezi)
```


**Parameters**:

* double **L**
* double **M**
* double **N**
* double **jx**
* double **jy**
* double **xPhaseDeg**
* double **yPhaseDeg**
* double **intensity**
* out double **exr**
* out double **exi**
* out double **eyr**
* out double **eyi**
* out double **ezr**
* out double **ezi**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IBatchRayTrace.GetPhase"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
