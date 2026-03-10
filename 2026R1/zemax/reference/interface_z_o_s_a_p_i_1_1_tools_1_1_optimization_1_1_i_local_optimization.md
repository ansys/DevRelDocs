# Interface ZOSAPI::Tools::Optimization::ILocalOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running a Local Optimization. This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 03](page_ex03.md#page_ex03) for a full sample)


C# 
```csharp
            // Local optimisation till completion
            ILocalOptimization LocalOpt = TheSystem.Tools.OpenLocalOptimization();
            LocalOpt.Algorithm = OptimizationAlgorithm.DampedLeastSquares;
            LocalOpt.Cycles = OptimizationCycles.Automatic;
            LocalOpt.NumberOfCores = 8;
            LocalOpt.RunAndWaitForCompletion();
            LocalOpt.Close();
```
 C++ 
```csharp
    // Local optimisation till completion
    ILocalOptimizationPtr LocalOpt = TheSystem->Tools->OpenLocalOptimization();
    LocalOpt->Algorithm = OptimizationAlgorithm_DampedLeastSquares;
    LocalOpt->Cycles = OptimizationCycles_Automatic;
    LocalOpt->NumberOfCores = 8;
    ISystemToolPtr baseTool = LocalOpt;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Local optimisation till completion
    LocalOpt = TheSystem.Tools.OpenLocalOptimization();
    LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
    LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
    LocalOpt.NumberOfCores = 8;
    LocalOpt.RunAndWaitForCompletion();
    LocalOpt.Close();
```
 Python 
```csharp
    # Local optimisation till completion
    print('Running Local Optimization')
    LocalOpt = TheSystem.Tools.OpenLocalOptimization()
    LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
    LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic
    LocalOpt.NumberOfCores = 8
    LocalOpt.RunAndWaitForCompletion()
    LocalOpt.Close()
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [Algorithm](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a5785bb62f12e4e7d93880229411b9919)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [CurrentMeritFunction](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a03af1bad5235250fa376ce743ec7e663)
* [Cycles](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a9e9bdb7578b5d3b57d9f839fe8a776a3)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [InitialMeritFunction](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1ab19b913681bf82d6fbecd65120da6da7)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [MaxCores](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a65bfdfdfe07e12217682a3bcd889ea44)
* [NumberOfCores](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1ab2b49eb4063fb2b0afd58452da11d487)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [Targets](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1af32b239a8abaf4e3fbbc3eb2213a86fc)
* [Variables](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1abd3ac46f307b3eac52fd876a9cb73159)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property Algorithm

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a5785bb62f12e4e7d93880229411b9919"></a>

![][public]

**Definition**:


```csharp
OptimizationAlgorithm ZOSAPI.Tools.Optimization.ILocalOptimization.Algorithm
```


**Return type**: [OptimizationAlgorithm](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1abdfc45ae891097832d05ef1853e36917)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.Algorithm"}]}`
-->

### Property NumberOfCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1ab2b49eb4063fb2b0afd58452da11d487"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.ILocalOptimization.NumberOfCores
```


Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            // Run local optimization and measure time
            // Local optimization until completion
            Stopwatch stopWatch = new Stopwatch();
            stopWatch.Start();

            ILocalOptimization LocalOpt = TheSystem.Tools.OpenLocalOptimization();
            if (LocalOpt != null)
            {
                LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
                LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
                LocalOpt.NumberOfCores = 8;
                Console.WriteLine("Local Optimization...");
                Console.WriteLine(String.Format("Initial Merit Function {0}", LocalOpt.InitialMeritFunction));
                LocalOpt.RunAndWaitForCompletion();
                Console.WriteLine(String.Format("Final Merit Function {0}", LocalOpt.CurrentMeritFunction));
                LocalOpt.Close();
            }
            stopWatch.Stop();
            // Get the elapsed time as a TimeSpan value.
            TimeSpan ts = stopWatch.Elapsed;

            // Format and display the TimeSpan value.
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
            ts.Hours, ts.Minutes, ts.Seconds,
            ts.Milliseconds / 10);
            Console.WriteLine("Time elapsed : " + elapsedTime + "\n");
            //Console.ReadKey(true);
```
 C++ 
```csharp
    // Run local optimization and measure time
    // Local optimization until completion
    double clo = clock();
    ILocalOptimizationPtr LocalOpt = TheSystem->Tools->OpenLocalOptimization();
    // need to determine how to check to validity
    if (LocalOpt != nullptr) {
        LocalOpt->Algorithm = OptimizationAlgorithm::OptimizationAlgorithm_DampedLeastSquares;
        LocalOpt->Cycles = OptimizationCycles::OptimizationCycles_Automatic;
        LocalOpt->NumberOfCores = 8;
        cout << "Local Optimization..." << endl;
        cout << "Initial Merit Function  " + _bstr_t(LocalOpt->InitialMeritFunction) << endl;
        ISystemToolPtr baseToolLocal = LocalOpt;
        baseToolLocal->RunAndWaitForCompletion();
        cout << "Final Merit Function    " + _bstr_t(LocalOpt->CurrentMeritFunction) << endl;
        baseToolLocal->Close();
    }
    // Get the elapsed time.
    cout << "Time elapsed            " + _bstr_t((clock() - clo) / 1000) << endl;
```
 Matlab 
```csharp
    % Run local optimization and measure time
    % Local optimization until completion
    tic;

    LocalOpt = TheSystem.Tools.OpenLocalOptimization();
    if ~isempty(LocalOpt)
        LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
        LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
        LocalOpt.NumberOfCores = 8;
        fprintf('Local Optimization...\n');
        fprintf('Initial Merit Function %6.3f\n', LocalOpt.InitialMeritFunction);
        LocalOpt.RunAndWaitForCompletion();
        fprintf('Final Merit Function %6.3f\n', LocalOpt.CurrentMeritFunction);
        LocalOpt.Close();
    end
    
    % Get the elapsed time as a TimeSpan value.
    toc;
```
 Python 
```csharp
    # Run local optimization and measure time
    # Local optimization until completion
    t = time.time()

    LocalOpt = TheSystem.Tools.OpenLocalOptimization()
    if (LocalOpt != None):

        LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
        LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic
        LocalOpt.NumberOfCores = 8
        print('Local Optimization...')
        print('Initial Merit Function ', LocalOpt.InitialMeritFunction)
        
        LocalOpt.RunAndWaitForCompletion()
        print('Final Merit Function   ', LocalOpt.CurrentMeritFunction)
        LocalOpt.Close()

    # Get the elapsed time.
    elapsed = time.time() - t
    print('Time elapsed            ' + str(round(elapsed,3)) + 's')
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.NumberOfCores"}]}`
-->

### Property MaxCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a65bfdfdfe07e12217682a3bcd889ea44"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.ILocalOptimization.MaxCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.MaxCores"}]}`
-->

### Property Cycles

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a9e9bdb7578b5d3b57d9f839fe8a776a3"></a>

![][public]

**Definition**:


```csharp
OptimizationCycles ZOSAPI.Tools.Optimization.ILocalOptimization.Cycles
```


**Return type**: [OptimizationCycles](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.Cycles"}]}`
-->

### Property Targets

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1af32b239a8abaf4e3fbbc3eb2213a86fc"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.ILocalOptimization.Targets
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.Targets"}]}`
-->

### Property Variables

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1abd3ac46f307b3eac52fd876a9cb73159"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.ILocalOptimization.Variables
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.Variables"}]}`
-->

### Property InitialMeritFunction

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1ab19b913681bf82d6fbecd65120da6da7"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.ILocalOptimization.InitialMeritFunction
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.InitialMeritFunction"}]}`
-->

### Property CurrentMeritFunction

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization_1a03af1bad5235250fa376ce743ec7e663"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.ILocalOptimization.CurrentMeritFunction
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.ILocalOptimization.CurrentMeritFunction"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)