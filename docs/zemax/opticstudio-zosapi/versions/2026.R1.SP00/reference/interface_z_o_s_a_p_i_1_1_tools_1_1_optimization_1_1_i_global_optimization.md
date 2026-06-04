# Interface ZOSAPI::Tools::Optimization::IGlobalOptimization

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running a Global Optimization. This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 15](../apiexamples/example_15.md) for a full sample)


C# 
```csharp
            // run global search
            double GlobalOptimTimeInSeconds = 15;
            IGlobalOptimization GlobalOpt = TheSystem.Tools.OpenGlobalOptimization();
            if (GlobalOpt != null)
            {
                GlobalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
                GlobalOpt.NumberOfCores = 8;
                Console.WriteLine("Global Optimization for " + GlobalOptimTimeInSeconds.ToString() + " seconds...");
                Console.WriteLine(String.Format("Initial Merit Function {0}", GlobalOpt.InitialMeritFunction));
                GlobalOpt.NumberToSave = ZOSAPI.Tools.Optimization.OptimizationSaveCount.Save_10;
                GlobalOpt.RunAndWaitWithTimeout(GlobalOptimTimeInSeconds);
                for (int j = 1; j <= 10; j++)
                {
                    Console.Write(String.Format("{0}: {1}\n", j, GlobalOpt.CurrentMeritFunction(j)));
                }
                GlobalOpt.Cancel();
                GlobalOpt.WaitForCompletion();                
                GlobalOpt.Close();
            }
```
 C++ 
```csharp
    // run global search
    int GlobalOptimTimeInSeconds = 15;
    IGlobalOptimizationPtr GlobalOpt = TheSystem->Tools->OpenGlobalOptimization();
    if (GlobalOpt != nullptr) {
        GlobalOpt->Algorithm = OptimizationAlgorithm::OptimizationAlgorithm_DampedLeastSquares;
        GlobalOpt->NumberOfCores = 8;
        cout << "Global Optimization for " << GlobalOptimTimeInSeconds << " seconds..." << endl;
        cout << "Initial Merit Function  " + _bstr_t(GlobalOpt->InitialMeritFunction) << endl;
        GlobalOpt->NumberToSave = OptimizationSaveCount::OptimizationSaveCount_Save_10;
        ISystemToolPtr baseToolGlobal = GlobalOpt;
        baseToolGlobal->RunAndWaitWithTimeout(GlobalOptimTimeInSeconds);
        for (int j = 1; j <= 10; j++) {
            cout << _bstr_t(int(j)) + ": " + _bstr_t(GlobalOpt->CurrentMeritFunction(j)) << endl;
        }
        baseToolGlobal->Cancel();
        // wait for tool to stop running before closing
        //bool stillRunning = baseToolGlobal->IsRunning;
        //while (stillRunning) {
        //  stillRunning = baseToolGlobal->IsRunning;
        //}
        baseToolGlobal->WaitForCompletion();
        baseToolGlobal->Close();
    }
```
 Matlab 
```csharp
    % run global search
    GlobalOptimTimeInSeconds = 15;
    GlobalOpt = TheSystem.Tools.OpenGlobalOptimization();
    if ~isempty(GlobalOpt)
        GlobalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
        GlobalOpt.NumberOfCores = 8;
        fprintf('Global Optimization for %i seconds...\n', GlobalOptimTimeInSeconds);
        fprintf('Initial Merit Function %6.3%\n', GlobalOpt.InitialMeritFunction);
        GlobalOpt.NumberToSave = ZOSAPI.Tools.Optimization.OptimizationSaveCount.Save_10;
        GlobalOpt.RunAndWaitWithTimeout(GlobalOptimTimeInSeconds);
        for j =1:10
            fprintf('%i: %6.3f\n', j, GlobalOpt.CurrentMeritFunction(j));
        end
        GlobalOpt.Cancel();
        GlobalOpt.WaitForCompletion();
        GlobalOpt.Close();
    end
```
 Python 
```csharp
    # run global search
    GlobalOptimTimeInSeconds = 5
    GlobalOpt = TheSystem.Tools.OpenGlobalOptimization()
    if (GlobalOpt != None):
        GlobalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
        GlobalOpt.NumberOfCores = 8
        print('Global Optimization for ' + str(GlobalOptimTimeInSeconds) + ' seconds...')
        print('Initial Merit Function ', GlobalOpt.InitialMeritFunction)
        GlobalOpt.NumberToSave = ZOSAPI.Tools.Optimization.OptimizationSaveCount.Save_10
        
        GlobalOpt.RunAndWaitWithTimeout(1 * GlobalOptimTimeInSeconds)
        for j in range(1, 11):
            print(str(int(j)) + ': ' + str(GlobalOpt.CurrentMeritFunction(j)))
        GlobalOpt.Cancel()
        GlobalOpt.WaitForCompletion()
        GlobalOpt.Close()
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [Algorithm](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac99dccfedcb7480ea4ac5c0ec2b38f77)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [CurrentMeritFunction](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1af0936f4cfb9c280c68f054cc00ae2f6f)
* [CurrentMeritFunction01](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a40ccf914c10d185c4e8867e71ae57584)
* [CurrentMeritFunction02](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a252935b8328ef54cd7a510d1ecba90be)
* [CurrentMeritFunction03](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac59ba311f16bcccd26d0a3e522362476)
* [CurrentMeritFunction04](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ada3358121ca3c5b47ca9cf4651f19ddd)
* [CurrentMeritFunction05](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1aa5c4133a96068d3e1d03e0a60196af46)
* [CurrentMeritFunction06](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a116f8ef83c1407917848a6b79e646032)
* [CurrentMeritFunction07](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a6edf3f29624227b17daf518e1c84d35b)
* [CurrentMeritFunction08](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac284c5570c91f521f924e1936677ebab)
* [CurrentMeritFunction09](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1aa0b0eecdc45ab42bd3e37fb89b03a8f0)
* [CurrentMeritFunction10](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac56ea78b6ba6dac164118a68c12b2c03)
* [Cycles](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1afc9dbfbf16f171ab314f3b7cdacd318c)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [EstimateHPCTime](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a9e7b5d494ec519b403462b881ee10d53)
* [HPCEstimatedTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac7626f591ff6127ffca4532259bee75a)
* [HPCHasTimeEstimate](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a7f3aea228dcffa83666ec28c0d564cf0)
* [HPCQueuePosition](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a4e45d31c05fcf0fa542515fd3bd3dfa7)
* [HPCRemainingTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a09514229e7e9e0250714955ca7ec8d87)
* [HPCState](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac67cd4f41469a5f9d22d8a2f12ef7bc0)
* [HPCTimeToStartS](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a3ad6acf0699fc29fd316f9aaa0fadfb6)
* [InitialMeritFunction](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac737ac4e98a4b490dac136b7624da562)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsHPCEnabled](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1aa5a40114a732baf12e428b69189d9d47)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [MaxCores](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a0b9d0ff426111f9fe63c6e50b697524d)
* [NumberOfCores](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a8d7a0763cd6999deb50c82bcc3a818da)
* [NumberToSave](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a1d84681fc6be29b384af07ec18219153)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [Systems](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a6d369e308ea0ede1ead5aa87da3fbe41)
* [TargetRunTimeM](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1acd1c2448a0e44588e4612dba84a77bf8)
* [Targets](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ab5ec701744a0247f3eb542017f9173f9)
* [Variables](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a9a51f6a51330542195075a112fde5db2)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property Algorithm

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac99dccfedcb7480ea4ac5c0ec2b38f77"></a>

![][public]

**Definition**:


```csharp
OptimizationAlgorithm ZOSAPI.Tools.Optimization.IGlobalOptimization.Algorithm
```


**Return type**: [OptimizationAlgorithm](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1abdfc45ae891097832d05ef1853e36917)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.Algorithm"}]}`
-->

### Property NumberOfCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a8d7a0763cd6999deb50c82bcc3a818da"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IGlobalOptimization.NumberOfCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.NumberOfCores"}]}`
-->

### Property MaxCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a0b9d0ff426111f9fe63c6e50b697524d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IGlobalOptimization.MaxCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.MaxCores"}]}`
-->

### Property NumberToSave

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a1d84681fc6be29b384af07ec18219153"></a>

![][public]

**Definition**:


```csharp
OptimizationSaveCount ZOSAPI.Tools.Optimization.IGlobalOptimization.NumberToSave
```


**Return type**: [OptimizationSaveCount](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dd)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.NumberToSave"}]}`
-->

### Property Targets

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ab5ec701744a0247f3eb542017f9173f9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IGlobalOptimization.Targets
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.Targets"}]}`
-->

### Property Variables

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a9a51f6a51330542195075a112fde5db2"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IGlobalOptimization.Variables
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.Variables"}]}`
-->

### Property InitialMeritFunction

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac737ac4e98a4b490dac136b7624da562"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.InitialMeritFunction
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.InitialMeritFunction"}]}`
-->

### Property Systems

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a6d369e308ea0ede1ead5aa87da3fbe41"></a>

![][public]

**Definition**:


```csharp
long ZOSAPI.Tools.Optimization.IGlobalOptimization.Systems
```


**Return type**: long

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.Systems"}]}`
-->

### Property Cycles

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1afc9dbfbf16f171ab314f3b7cdacd318c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IGlobalOptimization.Cycles
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.Cycles"}]}`
-->

### Property CurrentMeritFunction01

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a40ccf914c10d185c4e8867e71ae57584"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction01
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction01"}]}`
-->

### Property CurrentMeritFunction02

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a252935b8328ef54cd7a510d1ecba90be"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction02
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction02"}]}`
-->

### Property CurrentMeritFunction03

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac59ba311f16bcccd26d0a3e522362476"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction03
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction03"}]}`
-->

### Property CurrentMeritFunction04

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ada3358121ca3c5b47ca9cf4651f19ddd"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction04
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction04"}]}`
-->

### Property CurrentMeritFunction05

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1aa5c4133a96068d3e1d03e0a60196af46"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction05
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction05"}]}`
-->

### Property CurrentMeritFunction06

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a116f8ef83c1407917848a6b79e646032"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction06
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction06"}]}`
-->

### Property CurrentMeritFunction07

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a6edf3f29624227b17daf518e1c84d35b"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction07
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction07"}]}`
-->

### Property CurrentMeritFunction08

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac284c5570c91f521f924e1936677ebab"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction08
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction08"}]}`
-->

### Property CurrentMeritFunction09

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1aa0b0eecdc45ab42bd3e37fb89b03a8f0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction09
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction09"}]}`
-->

### Property CurrentMeritFunction10

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac56ea78b6ba6dac164118a68c12b2c03"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction10
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction10"}]}`
-->

### Property IsHPCEnabled

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1aa5a40114a732baf12e428b69189d9d47"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Optimization.IGlobalOptimization.IsHPCEnabled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.IsHPCEnabled"}]}`
-->

### Property HPCEstimatedTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac7626f591ff6127ffca4532259bee75a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCEstimatedTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCEstimatedTimeS"}]}`
-->

### Property HPCRemainingTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a09514229e7e9e0250714955ca7ec8d87"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCRemainingTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCRemainingTimeS"}]}`
-->

### Property HPCTimeToStartS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a3ad6acf0699fc29fd316f9aaa0fadfb6"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCTimeToStartS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCTimeToStartS"}]}`
-->

### Property HPCQueuePosition

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a4e45d31c05fcf0fa542515fd3bd3dfa7"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCQueuePosition
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCQueuePosition"}]}`
-->

### Property HPCState

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1ac67cd4f41469a5f9d22d8a2f12ef7bc0"></a>

![][public]

**Definition**:


```csharp
HPCRunState ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCState
```


**Return type**: [HPCRunState](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCState"}]}`
-->

### Property HPCHasTimeEstimate

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a7f3aea228dcffa83666ec28c0d564cf0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCHasTimeEstimate
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.HPCHasTimeEstimate"}]}`
-->

### Property TargetRunTimeM

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1acd1c2448a0e44588e4612dba84a77bf8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.TargetRunTimeM
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.TargetRunTimeM"}]}`
-->

## Public functions

### Function CurrentMeritFunction

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1af0936f4cfb9c280c68f054cc00ae2f6f"></a>

![][public]


```csharp
double ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction(int N)
```


**Parameters**:

* int **N**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.CurrentMeritFunction"}]}`
-->

### Function EstimateHPCTime

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization_1a9e7b5d494ec519b403462b881ee10d53"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Optimization.IGlobalOptimization.EstimateHPCTime()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.IGlobalOptimization.EstimateHPCTime"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
