# Interface ZOSAPI::Tools::Optimization::IHammerOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running a Hammer Optimization. This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 03](page_ex03.md#page_ex03) for a full sample)


C# 
```csharp
            // Hammer for 10 seconds
            Console.WriteLine("Running Hammer for 10 seconds");
            IHammerOptimization HammerOpt = TheSystem.Tools.OpenHammerOptimization();
            HammerOpt.RunAndWaitWithTimeout(10); // 10s of Hammer
            HammerOpt.Cancel();
            HammerOpt.WaitForCompletion();
            HammerOpt.Close();
```
 C++ 
```csharp
    // Hammer for 10 seconds
    IHammerOptimizationPtr HammerOpt = TheSystem->Tools->OpenHammerOptimization();
    baseTool = HammerOpt;
    baseTool->RunAndWaitWithTimeout(10);    
    baseTool->Cancel();
    baseTool->WaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Hammer for 10 seconds
    HammerOpt = TheSystem.Tools.OpenHammerOptimization();
    HammerOpt.RunAndWaitWithTimeout(10);    
    HammerOpt.Cancel();
    HammerOpt.WaitForCompletion();
    HammerOpt.Close();
```
 Python 
```csharp
    # Hammer for 10 seconds
    # need to 'import time' at the top of the file to use the pause function
    print('Running Hammer Optimization')
    HammerOpt = TheSystem.Tools.OpenHammerOptimization()
    HammerOpt.RunAndWaitWithTimeout(10)    
    HammerOpt.Cancel()
    HammerOpt.WaitForCompletion()
    HammerOpt.Close()
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [Algorithm](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1ae9636efee2e4164af230a89d45aafeb6)
* [AutomaticOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a20a30305e8e15037a3bee42467284f3c)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [CurrentMeritFunction](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a6e0cb7edb9b3871a903cbfc40860fc60)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [EstimateHPCTime](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a2cc12d9f0cc5578ba2d00283f8c48b21)
* [HPCEstimatedTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a059e83155d3133a2a7b3df59b43b0ef4)
* [HPCHasTimeEstimate](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1afa8db9cc746304d8f374e34631539ba6)
* [HPCQueuePosition](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1aa885b6951af7e82134efc0aa7b33949c)
* [HPCRemainingTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a6906c54ff631a6a066805041dc7f7e72)
* [HPCState](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1af94d913f19eee42175b6c2b0684f0f4b)
* [HPCTimeToStartS](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a1f71a1a170c7ee9f4687403727c5d613)
* [InitialMeritFunction](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a660870437d3f48d2c9058fccc3d590c0)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsHPCEnabled](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a79bb707bbbf78f77d5a1ae21fa7759c5)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [MaxCores](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1aa5fe21217a91ff41d977083ca09f3e88)
* [NumberOfCores](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a4cf7eecb18e306d61f5ed1b1d88a9001)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [Systems](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a32b6fe73470806155f0e65ec6af85156)
* [TargetRunTimeM](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1ac183b40335b045c56d04b2325e4a189b)
* [Targets](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a2d79e36563ba87c8667130ea22f31aff)
* [Variables](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1aee092798f56254a5d47eb28e26a1aeaa)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property Algorithm

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1ae9636efee2e4164af230a89d45aafeb6"></a>

![][public]

**Definition**:


```csharp
OptimizationAlgorithm ZOSAPI.Tools.Optimization.IHammerOptimization.Algorithm
```


**Return type**: [OptimizationAlgorithm](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1abdfc45ae891097832d05ef1853e36917)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.Algorithm"}]}`
-->

### Property NumberOfCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a4cf7eecb18e306d61f5ed1b1d88a9001"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IHammerOptimization.NumberOfCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.NumberOfCores"}]}`
-->

### Property MaxCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1aa5fe21217a91ff41d977083ca09f3e88"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IHammerOptimization.MaxCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.MaxCores"}]}`
-->

### Property AutomaticOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a20a30305e8e15037a3bee42467284f3c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Optimization.IHammerOptimization.AutomaticOptimization
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.AutomaticOptimization"}]}`
-->

### Property Targets

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a2d79e36563ba87c8667130ea22f31aff"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IHammerOptimization.Targets
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.Targets"}]}`
-->

### Property Variables

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1aee092798f56254a5d47eb28e26a1aeaa"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IHammerOptimization.Variables
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.Variables"}]}`
-->

### Property InitialMeritFunction

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a660870437d3f48d2c9058fccc3d590c0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IHammerOptimization.InitialMeritFunction
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.InitialMeritFunction"}]}`
-->

### Property CurrentMeritFunction

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a6e0cb7edb9b3871a903cbfc40860fc60"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IHammerOptimization.CurrentMeritFunction
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.CurrentMeritFunction"}]}`
-->

### Property Systems

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a32b6fe73470806155f0e65ec6af85156"></a>

![][public]

**Definition**:


```csharp
long ZOSAPI.Tools.Optimization.IHammerOptimization.Systems
```


**Return type**: long

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.Systems"}]}`
-->

### Property IsHPCEnabled

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a79bb707bbbf78f77d5a1ae21fa7759c5"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Optimization.IHammerOptimization.IsHPCEnabled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.IsHPCEnabled"}]}`
-->

### Property HPCEstimatedTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a059e83155d3133a2a7b3df59b43b0ef4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IHammerOptimization.HPCEstimatedTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.HPCEstimatedTimeS"}]}`
-->

### Property HPCRemainingTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a6906c54ff631a6a066805041dc7f7e72"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IHammerOptimization.HPCRemainingTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.HPCRemainingTimeS"}]}`
-->

### Property HPCTimeToStartS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a1f71a1a170c7ee9f4687403727c5d613"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IHammerOptimization.HPCTimeToStartS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.HPCTimeToStartS"}]}`
-->

### Property HPCQueuePosition

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1aa885b6951af7e82134efc0aa7b33949c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IHammerOptimization.HPCQueuePosition
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.HPCQueuePosition"}]}`
-->

### Property HPCState

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1af94d913f19eee42175b6c2b0684f0f4b"></a>

![][public]

**Definition**:


```csharp
HPCRunState ZOSAPI.Tools.Optimization.IHammerOptimization.HPCState
```


**Return type**: [HPCRunState](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.HPCState"}]}`
-->

### Property HPCHasTimeEstimate

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1afa8db9cc746304d8f374e34631539ba6"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Optimization.IHammerOptimization.HPCHasTimeEstimate
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.HPCHasTimeEstimate"}]}`
-->

### Property TargetRunTimeM

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1ac183b40335b045c56d04b2325e4a189b"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IHammerOptimization.TargetRunTimeM
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.TargetRunTimeM"}]}`
-->

## Public functions

### Function EstimateHPCTime

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization_1a2cc12d9f0cc5578ba2d00283f8c48b21"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Optimization.IHammerOptimization.EstimateHPCTime()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IHammerOptimization.EstimateHPCTime"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)