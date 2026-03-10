# File Optimization.cs

<a id="_optimization_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Optimization::ILocalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization)
* [ZOSAPI::Tools::Optimization::IGlobalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization)
* [ZOSAPI::Tools::Optimization::IHammerOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::Optimization](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Tools.Optimization
{

    [ComVisible(true)]
    [Guid("4EB4165B-78F9-4F4E-AF23-D81AE524C064")]
    public enum OptimizationAlgorithm
    {
        DampedLeastSquares = 0,
        OrthogonalDescent,
    }

    [ComVisible(true)]
    [Guid("5921B197-B7A0-4A75-BA2B-01DAC52F78A1")]
    public enum OptimizationCycles
    {
        Automatic = 0,
        Fixed_1_Cycle,
        Fixed_5_Cycles,
        Fixed_10_Cycles,
        Fixed_50_Cycles,
        Infinite
    }

    [Guid("C6E99D19-B473-4A05-A314-8DB45B01D130")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ILocalOptimization : ISystemTool
    {
        OptimizationAlgorithm Algorithm { get; set; }
        int NumberOfCores { get; set; }
        int MaxCores { get; }
        OptimizationCycles Cycles { get; set; }

        int Targets { get; }
        int Variables { get; }
        double InitialMeritFunction { get; }
        double CurrentMeritFunction { get; }
    }

    [ComVisible(true)]
    [Guid("DEC6C3F9-76C1-4ED7-8E4C-00593A303B8D")]
    public enum OptimizationSaveCount
    {
        Save_10 = 0,
        Save_20,
        Save_30,
        Save_40,
        Save_50,
        Save_60,
        Save_70,
        Save_80,
        Save_90,
        Save_100,
    }

    [Guid("A15EEA94-E93E-4723-9B71-B0B3CD8B018C")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IGlobalOptimization : ISystemTool
    {
        OptimizationAlgorithm Algorithm { get; set; }
        int NumberOfCores { get; set; }
        int MaxCores { get; }
        OptimizationSaveCount NumberToSave { get; set; }

        int Targets { get; }
        int Variables { get; }
        double InitialMeritFunction { get; }
        long Systems { get; }
        int Cycles { get; }

        double CurrentMeritFunction(int N);

        double CurrentMeritFunction01 { get; }
        double CurrentMeritFunction02 { get; }
        double CurrentMeritFunction03 { get; }
        double CurrentMeritFunction04 { get; }
        double CurrentMeritFunction05 { get; }
        double CurrentMeritFunction06 { get; }
        double CurrentMeritFunction07 { get; }
        double CurrentMeritFunction08 { get; }
        double CurrentMeritFunction09 { get; }
        double CurrentMeritFunction10 { get; }


        // Common for all HPC enabled tools
        bool IsHPCEnabled { get; }
        double HPCEstimatedTimeS { get; }
        double HPCRemainingTimeS { get; }
        double HPCTimeToStartS { get; }
        int HPCQueuePosition { get; }
        HPCRunState HPCState { get; }
        bool HPCHasTimeEstimate { get; }
        bool EstimateHPCTime();

        // Specific to global opt
        //int NumberOfTasks { get; set; }
        //double TimePerTaskS { get; set; }
        double TargetRunTimeM { get; set; }
    }

    [Guid("2F251021-FBF5-4E68-BCAB-2EBF846D80D4")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IHammerOptimization : ISystemTool
    {
        OptimizationAlgorithm Algorithm { get; set; }
        int NumberOfCores { get; set; }
        int MaxCores { get; }
        bool AutomaticOptimization { get; set; }

        int Targets { get; }
        int Variables { get; }
        double InitialMeritFunction { get; }
        double CurrentMeritFunction { get; }
        long Systems { get; }

        // Common for all HPC enabled tools
        bool IsHPCEnabled { get; }
        double HPCEstimatedTimeS { get; }
        double HPCRemainingTimeS { get; }
        double HPCTimeToStartS { get; }
        int HPCQueuePosition { get; }
        HPCRunState HPCState { get; }
        bool HPCHasTimeEstimate { get; }
        bool EstimateHPCTime();

        // Specific to hammer opt
        //int NumberOfTasks { get; set; }
        //double TimePerTaskS { get; set; }
        double TargetRunTimeM { get; set; }
    }
}
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)