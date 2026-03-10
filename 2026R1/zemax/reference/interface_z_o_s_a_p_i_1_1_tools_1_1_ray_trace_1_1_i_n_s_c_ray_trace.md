# Interface ZOSAPI::Tools::RayTrace::INSCRayTrace

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running a non-sequential ray trace. This interface can be accessed via the IOpticalSystemTools interface. NOTE - due to architectural limitations, currently only one INSCRayTrace instance can be used at a time, across all IOpticalSystem instances. The first call to IOpticalSystemTools.OpenNSCRayTrace will succeed, while all further calls will return <code>null</code> until the the single INSCRayTrace instance is closed. It is anticipated that this limiation will be removed in future versions of the API.

Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Run a ray trace
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = false;
            NSCRayTrace.ScatterNSCRays = true;
            NSCRayTrace.UsePolarization = false;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;

            NSCRayTrace.ClearDetectors(0);
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
```
 C++ 
```csharp
    //Run a ray trace
    INSCRayTracePtr  NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
    NSCRayTrace->SplitNSCRays = false;
    NSCRayTrace->ScatterNSCRays = true;
    NSCRayTrace->UsePolarization = false;
    NSCRayTrace->IgnoreErrors = true;
    NSCRayTrace->SaveRays = false;

    NSCRayTrace->ClearDetectors(0);
    // The method RunAndWaitForCompletion() and Close() are inehrited from base interface ISystemToolPtr. To use these methods, first cast to ISystemTool.
    ISystemToolPtr baseTool = NSCRayTrace;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Run a ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = false;
    NSCRayTrace.ScatterNSCRays = true;
    NSCRayTrace.UsePolarization = false;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
```
 Python 
```csharp
    # Run a ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = False
    NSCRayTrace.ScatterNSCRays = True
    NSCRayTrace.UsePolarization = False
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.ClearDetectors(0)
    NSCRayTrace.RunAndWaitForCompletion()
    NSCRayTrace.Close()
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [AutoUpdate](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1aac07b1538360912fc6d00b9ce955b4e9)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [ClearDetectorObject](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a222248f68ae800cc781aff2aa8a07418)
* [ClearDetectors](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a4b118fa79a1c9056ded4d08c34549914)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [DeadRayErrors](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a4d67dc8402a1c730f927b3b3ef52bc2c)
* [DeadRayThreshold](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a9655c01f7ad9586e90da4811f91f0343)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [EstimateHPCTime](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a6700c958013c5e20f48b4564db8873c0)
* [Filter](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a6fb1ac143e0fbeab3f720325c8a39a19)
* [GetTotalRayEnergy](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a1085cfef150bad544e29704e9dcd6011)
* [HasHPCUnsupportedDetectors](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a67bdcc27641860ec91df3b9e02e70839)
* [HPCEstimatedTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a1e833035daeb02e22516a2228d5223e7)
* [HPCHasTimeEstimate](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a4bad457a4e404e8b76a81450bae89873)
* [HPCQueuePosition](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1ac208021e024ba8069c418dc361c6a156)
* [HPCRemainingTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a01f4186782794de59cafaabd51feaa33)
* [HPCState](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0c9a90868d10d56ddfc03e161f0c09e4)
* [HPCTimeToStartS](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1adcd46a50a0831e9e45f76f5f5e2d7101)
* [IgnoreErrors](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0b2d0abbc2136cb715cc80c39b6a7ee6)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsHPCEnabled](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a8907e88d5ac81e5ed768265ee7883e11)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [NumberOfCores](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a17e5a4a746e528b61cb8a61a19224f83)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [RayMultiplier](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a3fbb05e6a6ff2d107310804ddee7c903)
* [ResetRandomSeed](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a3b70b0695bd3334305495e3786065d21)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SavePaths](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1aa3002775d08ace0593a14f2bc2b46fbd)
* [SavePathsFile](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1abcfcbcb01649d3794be48440991e9e0c)
* [SaveRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a23bf086bc5d6e37226134f5c005ef4a0)
* [SaveRaysFile](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0730287a12e5a9a1c30ecfc54b6a8eef)
* [ScatterNSCRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a3c803bd302986fa1496ea31e405118f2)
* [SetPartialRTMode](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a34d5dd4401c55fa0fc9c930e0fb1e41c)
* [SetRandomSeed](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0f1dbc2f9752b26f6e8db4494edc2be1)
* [SplitNSCRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0bfa13c1d11e6b64f529ca0ddd044053)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [UsePolarization](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1acbdda6a2a6ec6a5664e351452991c80a)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)
* [ZRDFormat](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a932bafb5d208b292e22774cb349d025b)

## Properties

### Property AutoUpdate

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1aac07b1538360912fc6d00b9ce955b4e9"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.AutoUpdate
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.AutoUpdate"}]}`
-->

### Property NumberOfCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a17e5a4a746e528b61cb8a61a19224f83"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.INSCRayTrace.NumberOfCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.NumberOfCores"}]}`
-->

### Property UsePolarization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1acbdda6a2a6ec6a5664e351452991c80a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.UsePolarization
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.UsePolarization"}]}`
-->

### Property IgnoreErrors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0b2d0abbc2136cb715cc80c39b6a7ee6"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.IgnoreErrors
```


Usage (see [Example 02](page_ex02.md#page_ex02) for a full sample)


C# 
```csharp
            // Create ray trace
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = true;
            NSCRayTrace.ScatterNSCRays = false;
            NSCRayTrace.UsePolarization = true;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;

            // Run ray trace
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
```
 C++ 
```csharp
    // Creat ray trace
    INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
    NSCRayTrace->SplitNSCRays = true;
    NSCRayTrace->ScatterNSCRays = false;
    NSCRayTrace->UsePolarization = true;
    NSCRayTrace->IgnoreErrors = true;
    NSCRayTrace->SaveRays = false;
    NSCRayTrace->ClearDetectors(0);

    // Run ray trace
    // Methods RunAndWaitForCompletion() and Close is in base interface ISystemTool.
    // To use these two methods, cast to ISystemTool first.
    ISystemToolPtr baseTool = NSCRayTrace;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = true;
    NSCRayTrace.ScatterNSCRays = false;
    NSCRayTrace.UsePolarization = true;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
  
    % Run ray trace
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
```
 Python 
```csharp
    # Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = True
    NSCRayTrace.ScatterNSCRays = False
    NSCRayTrace.UsePolarization = True
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.Run()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.IgnoreErrors"}]}`
-->

### Property SplitNSCRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0bfa13c1d11e6b64f529ca0ddd044053"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.SplitNSCRays
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SplitNSCRays"}]}`
-->

### Property ScatterNSCRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a3c803bd302986fa1496ea31e405118f2"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.ScatterNSCRays
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.ScatterNSCRays"}]}`
-->

### Property SaveRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a23bf086bc5d6e37226134f5c005ef4a0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.SaveRays
```


Usage (see [Example 06](page_ex06.md#page_ex06) for a full sample)


C# 
```csharp
            // Setup and run the ray trace
            ZOSAPI.Tools.RayTrace.INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = false;
            NSCRayTrace.ScatterNSCRays = true;
            NSCRayTrace.UsePolarization = false;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;
            NSCRayTrace.ClearDetectors(0);

            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
```
 C++ 
```csharp
    // Setup and run the ray trace
    INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
    NSCRayTrace->SplitNSCRays = false;
    NSCRayTrace->ScatterNSCRays = true;
    NSCRayTrace->UsePolarization = false;
    NSCRayTrace->IgnoreErrors = true;
    NSCRayTrace->SaveRays = false;
    NSCRayTrace->ClearDetectors(0);

    ((ISystemToolPtr)NSCRayTrace)->RunAndWaitForCompletion();
    ((ISystemToolPtr)NSCRayTrace)->Close();
```
 Matlab 
```csharp
    % Setup and run the ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = false;
    NSCRayTrace.ScatterNSCRays = true;
    NSCRayTrace.UsePolarization = false;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
    
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
```
 Python 
```csharp
    # Setup and run the ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = False
    NSCRayTrace.ScatterNSCRays = True
    NSCRayTrace.UsePolarization = False
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.ClearDetectors(0)

    NSCRayTrace.RunAndWaitForCompletion()
    NSCRayTrace.Close()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SaveRays"}]}`
-->

### Property SaveRaysFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0730287a12e5a9a1c30ecfc54b6a8eef"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.RayTrace.INSCRayTrace.SaveRaysFile
```


Gets or sets the save rays filename (only used when SaveRays is <code>true</code>).

The save rays filename. Note - only the file name will be used, not any path information; it will be saved in the directory of the lens file.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SaveRaysFile"}]}`
-->

### Property SavePaths

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1aa3002775d08ace0593a14f2bc2b46fbd"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.SavePaths
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SavePaths"}]}`
-->

### Property SavePathsFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1abcfcbcb01649d3794be48440991e9e0c"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.RayTrace.INSCRayTrace.SavePathsFile
```


Gets or sets the save rays filename (only used when SavePaths is <code>true</code>).

The save paths filename. Note - only the file name will be used, not any path information; it will be saved in the directory of the lens file.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SavePathsFile"}]}`
-->

### Property ZRDFormat

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a932bafb5d208b292e22774cb349d025b"></a>

![][public]

**Definition**:


```csharp
ZRDFormatType ZOSAPI.Tools.RayTrace.INSCRayTrace.ZRDFormat
```


**Return type**: [ZRDFormatType](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7ace1fd04fcbfc4a5c00a27b1945347d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.ZRDFormat"}]}`
-->

### Property Filter

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a6fb1ac143e0fbeab3f720325c8a39a19"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.RayTrace.INSCRayTrace.Filter
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.Filter"}]}`
-->

### Property DeadRayErrors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a4d67dc8402a1c730f927b3b3ef52bc2c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.DeadRayErrors
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.DeadRayErrors"}]}`
-->

### Property DeadRayThreshold

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a9655c01f7ad9586e90da4811f91f0343"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.DeadRayThreshold
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.DeadRayThreshold"}]}`
-->

### Property IsHPCEnabled

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a8907e88d5ac81e5ed768265ee7883e11"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.IsHPCEnabled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.IsHPCEnabled"}]}`
-->

### Property HPCEstimatedTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a1e833035daeb02e22516a2228d5223e7"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCEstimatedTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCEstimatedTimeS"}]}`
-->

### Property HPCRemainingTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a01f4186782794de59cafaabd51feaa33"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCRemainingTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCRemainingTimeS"}]}`
-->

### Property HPCTimeToStartS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1adcd46a50a0831e9e45f76f5f5e2d7101"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCTimeToStartS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCTimeToStartS"}]}`
-->

### Property HPCQueuePosition

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1ac208021e024ba8069c418dc361c6a156"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCQueuePosition
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCQueuePosition"}]}`
-->

### Property HPCState

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0c9a90868d10d56ddfc03e161f0c09e4"></a>

![][public]

**Definition**:


```csharp
HPCRunState ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCState
```


**Return type**: [HPCRunState](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCState"}]}`
-->

### Property HPCHasTimeEstimate

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a4bad457a4e404e8b76a81450bae89873"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCHasTimeEstimate
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HPCHasTimeEstimate"}]}`
-->

### Property RayMultiplier

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a3fbb05e6a6ff2d107310804ddee7c903"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.RayMultiplier
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.RayMultiplier"}]}`
-->

### Property HasHPCUnsupportedDetectors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a67bdcc27641860ec91df3b9e02e70839"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.HasHPCUnsupportedDetectors
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.HasHPCUnsupportedDetectors"}]}`
-->

## Public functions

### Function ClearDetectors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a4b118fa79a1c9056ded4d08c34549914"></a>

![][public]


```csharp
ErrorType ZOSAPI.Tools.RayTrace.INSCRayTrace.ClearDetectors(int DetectorNumber)
```


Clears the specified detectors.

Usage (see [Example 02](page_ex02.md#page_ex02) for a full sample)


C# 
```csharp
            // Create ray trace
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = true;
            NSCRayTrace.ScatterNSCRays = false;
            NSCRayTrace.UsePolarization = true;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;

            // Run ray trace
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
```
 C++ 
```csharp
    // Creat ray trace
    INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
    NSCRayTrace->SplitNSCRays = true;
    NSCRayTrace->ScatterNSCRays = false;
    NSCRayTrace->UsePolarization = true;
    NSCRayTrace->IgnoreErrors = true;
    NSCRayTrace->SaveRays = false;
    NSCRayTrace->ClearDetectors(0);

    // Run ray trace
    // Methods RunAndWaitForCompletion() and Close is in base interface ISystemTool.
    // To use these two methods, cast to ISystemTool first.
    ISystemToolPtr baseTool = NSCRayTrace;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = true;
    NSCRayTrace.ScatterNSCRays = false;
    NSCRayTrace.UsePolarization = true;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
  
    % Run ray trace
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
```
 Python 
```csharp
    # Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = True
    NSCRayTrace.ScatterNSCRays = False
    NSCRayTrace.UsePolarization = True
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.Run()
```
 


**Parameters**:

* **DetectorNumber**: number of the detector to clear. Use <code>0</code> for all detectors. Note that detector number 1 is the first object that functions as a detector, not object number 1. To clear a specific object, use ClearDetectorObject.///


**Parameters**:

* int **DetectorNumber**

**Return type**: [ErrorType](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.ClearDetectors"}]}`
-->

### Function ClearDetectorObject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a222248f68ae800cc781aff2aa8a07418"></a>

![][public]


```csharp
ErrorType ZOSAPI.Tools.RayTrace.INSCRayTrace.ClearDetectorObject(int ObjectNumber)
```


Clears the detector data on the specified object.

**Parameters**:

* **ObjectNumber**: object number of the detector to clear. Use <code>0</code> for all detectors.


**Parameters**:

* int **ObjectNumber**

**Return type**: [ErrorType](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.ClearDetectorObject"}]}`
-->

### Function GetTotalRayEnergy

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a1085cfef150bad544e29704e9dcd6011"></a>

![][public]


```csharp
double ZOSAPI.Tools.RayTrace.INSCRayTrace.GetTotalRayEnergy()
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.GetTotalRayEnergy"}]}`
-->

### Function SetRandomSeed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a0f1dbc2f9752b26f6e8db4494edc2be1"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.INSCRayTrace.SetRandomSeed(int seed)
```


Usually the NSC Ray Trace uses a new random seed each time it is run. This function allows the user to explicitly set the random seed that is used, in order to trace a reproducible set of rays.

**Parameters**:

* **seed**: Any non-zero seed value


**Parameters**:

* int **seed**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SetRandomSeed"}]}`
-->

### Function ResetRandomSeed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a3b70b0695bd3334305495e3786065d21"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.INSCRayTrace.ResetRandomSeed()
```


Clear any previously set random seed, so that each new ray trace uses a new random seed value.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.ResetRandomSeed"}]}`
-->

### Function SetPartialRTMode

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a34d5dd4401c55fa0fc9c930e0fb1e41c"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.INSCRayTrace.SetPartialRTMode(int seed, int group)
```


**Parameters**:

* int **seed**
* int **group**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.SetPartialRTMode"}]}`
-->

### Function EstimateHPCTime

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace_1a6700c958013c5e20f48b4564db8873c0"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.INSCRayTrace.EstimateHPCTime()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.INSCRayTrace.EstimateHPCTime"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)