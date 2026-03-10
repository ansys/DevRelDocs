# File IAS_PathAnalysis.cs

<a id="_i_a_s___path_analysis_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::RayTracing::IAS\_PathAnalysis](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::RayTracing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis.Settings;

namespace ZOSAPI.Analysis.RayTracing
{
    [ComVisible(true)]
    [Guid("CDD9818E-6EBB-437D-8E3A-FCEBBA61CFEA")]
    public enum PathAnalysisSortType
    {
        TotalEndingFlux = 0,
        NumberOfObjectsStruck = 1,
        NumberOfBranches = 2,
        LastObjectStruck = 3,
        NumberOfUniqueObjectsStruct = 4,
        AverageOpticalPathLength = 5,
        NumberOfDiffractionEvents = 6,
    }

    [ComVisible(true)]
    [Guid("D63057FA-87FC-4055-B40A-F6D481BBF636")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_PathAnalysis : IAS_
    {
        string RayDatabaseFile { get; set; }
        string[] AvailableRayDatabaseFiles { get; }
        int FirstRay { get; set; }
        int LastRay { get; set; }
        string FilterString { get; set; }
        bool GeneratePathFilters { get; set; }
        double RelativeMinimumFlux { get; set; }
        PathAnalysisSortType SortBy { get; set; }

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