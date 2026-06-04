# Interface ZOSAPI::Tools::Tolerancing::IToleranceNest

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest"></a>

![][C#]
![][public]

**Definition**:

Interface to access the IToleranceNest Wizard.This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 14](../apiexamples/example_14.md) for a full sample)


C# 
```csharp
            // Set up the Tolerancing analysis and run it
            ZOSAPI.Tools.Tolerancing.ITolerancing tol = TheSystem.Tools.OpenTolerancing();
            // Select Sensitivity mode
            tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
            // Select Criterion and related settings 
            tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
            tol.CriterionSampling = 3;
            tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
            tol.CriterionCycle = 2;
            tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
            // Select the number or MC runs and files to save
            tol.NumberOfRuns = 20;
            tol.NumberToSave = 20;
            // Run the Tolerancing analysis
            tol.RunAndWaitForCompletion();
            tol.Close();
```
 C++ 
```csharp
    // Set up the Tolerancing analysis and run it
    ZOSAPI_Interfaces::ITolerancingPtr tol = TheSystem->Tools->OpenTolerancing();
    // Select Sensitivity mode
    tol->SetupMode = ZOSAPI_Interfaces::SetupModes_Sensitivity;
    // Select Criterion and related settings 
    tol->Criterion = ZOSAPI_Interfaces::Criterions_RMSSpotRadius;
    tol->CriterionSampling = 3;
    tol->CriterionComp = ZOSAPI_Interfaces::CriterionComps_OptimizeAll_DLS;
    tol->CriterionCycle = 2;
    tol->CriterionField = ZOSAPI_Interfaces::CriterionFields_UserDefined;
    // Select the number or MC runs and files to save
    tol->NumberOfRuns = 20;
    tol->NumberToSave = 20;
    // Run the Tolerancing analysis
    ZOSAPI_Interfaces::ISystemToolPtr baseTool = tol;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Set up the Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing();
    % Select Sensitivity mode
    tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
    % Select Criterion and related settings 
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
    tol.CriterionSampling = 3;
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
    tol.CriterionCycle = 2;
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
    % Select the number or MC runs and files to save
    tol.NumberOfRuns = 20;
    tol.NumberToSave = 20;
    % Run the Tolerancing analysis
    tol.RunAndWaitForCompletion();
    tol.Close();
```
 Python 
```csharp
    # Set up Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing()
    # Select Sensitivity mode
    tol.SetupMode =  ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity
    # Select Criterion and related settings
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius
    tol.CriterionSampling = 3
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS
    tol.CriterionCycle = 2
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined
    # Select number of MC runs and files to save
    tol.NumberOfRuns = 20
    tol.NumberToSave = 20
    # Run the Tolerancing analysis
    tol.RunAndWaitForCompletion()
    tol.Close()
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [AddGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1af920bc8b3e8ea25ad273dd40d1c9134b)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [DecenterX](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a580f219371c6f7d99b7d85d801d3d3ee)
* [DecenterY](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a150bebe9ce6991d2c33e588d4dc6629d)
* [DecenterZ](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1ac0fe3baec36d326f8557ad55cd19e288)
* [EndSurf](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a45ddd71e11d12093e33d9ef48e09838d)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsReferenceToDecenteredApertureValid](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a67feb970c0a25e77512b1f4d6488c122)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [MPVTOption](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a7575d0380bc1d5acdb7e043b83107bb5)
* [PivotCheck](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1af353513e84625ed3e279fbb68c27e051)
* [PivotX](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a58fed4592b1ac7fc90531b36b62cf9b7)
* [PivotY](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a07c71daead9477eaae91f4255a34fb81)
* [PivotZ](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1ad38931ac6a96ac2d3b07c1a015004867)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [StartSurf](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a8a7e6c18c38a66f9692d820c590141ad)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [TiltX](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a768996f1a89f635217b253c6356c19ad)
* [TiltY](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a457b9c19f541f32c3277461ce52101c6)
* [TiltZ](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a66031d8c9356f36721c5d6bd92bf2ad4)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property MPVTOption

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a7575d0380bc1d5acdb7e043b83107bb5"></a>

![][public]

**Definition**:


```csharp
MPVTOptions ZOSAPI.Tools.Tolerancing.IToleranceNest.MPVTOption
```


**Return type**: [MPVTOptions](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.MPVTOption"}]}`
-->

### Property StartSurf

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a8a7e6c18c38a66f9692d820c590141ad"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.IToleranceNest.StartSurf
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.StartSurf"}]}`
-->

### Property EndSurf

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a45ddd71e11d12093e33d9ef48e09838d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.IToleranceNest.EndSurf
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.EndSurf"}]}`
-->

### Property PivotX

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a58fed4592b1ac7fc90531b36b62cf9b7"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotX"}]}`
-->

### Property PivotY

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a07c71daead9477eaae91f4255a34fb81"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotY"}]}`
-->

### Property PivotZ

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1ad38931ac6a96ac2d3b07c1a015004867"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotZ
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotZ"}]}`
-->

### Property DecenterX

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a580f219371c6f7d99b7d85d801d3d3ee"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.DecenterX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.DecenterX"}]}`
-->

### Property DecenterY

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a150bebe9ce6991d2c33e588d4dc6629d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.DecenterY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.DecenterY"}]}`
-->

### Property DecenterZ

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1ac0fe3baec36d326f8557ad55cd19e288"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.DecenterZ
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.DecenterZ"}]}`
-->

### Property TiltX

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a768996f1a89f635217b253c6356c19ad"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.TiltX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.TiltX"}]}`
-->

### Property TiltY

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a457b9c19f541f32c3277461ce52101c6"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.TiltY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.TiltY"}]}`
-->

### Property TiltZ

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a66031d8c9356f36721c5d6bd92bf2ad4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.IToleranceNest.TiltZ
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.TiltZ"}]}`
-->

### Property PivotCheck

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1af353513e84625ed3e279fbb68c27e051"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotCheck
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.PivotCheck"}]}`
-->

## Public functions

### Function AddGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1af920bc8b3e8ea25ad273dd40d1c9134b"></a>

![][public]


```csharp
void ZOSAPI.Tools.Tolerancing.IToleranceNest.AddGroup(int firstSurface, int lastSurface, MPVTOptions mpvtOption, double PivotX, double PivotY, double PivotZ, double DecenterX, double DecenterY, double DecenterZ, double TiltX, double TiltY, double TiltZ, bool PivotCheck)
```


**Parameters**:

* int **firstSurface**
* int **lastSurface**
* [MPVTOptions](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87) **mpvtOption**
* double **PivotX**
* double **PivotY**
* double **PivotZ**
* double **DecenterX**
* double **DecenterY**
* double **DecenterZ**
* double **TiltX**
* double **TiltY**
* double **TiltZ**
* bool **PivotCheck**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.AddGroup"}]}`
-->

### Function IsReferenceToDecenteredApertureValid

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest_1a67feb970c0a25e77512b1f4d6488c122"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Tolerancing.IToleranceNest.IsReferenceToDecenteredApertureValid(int firstSurface, int lastSurface)
```


**Parameters**:

* int **firstSurface**
* int **lastSurface**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.IToleranceNest.IsReferenceToDecenteredApertureValid"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
