# File IAS_FileComparator.cs

<a id="_i_a_s___file_comparator_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::IAS\_FileComparator](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___file_comparator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___file_comparator)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings
{
    [ComVisible(true)]
    [Guid("1A5FBA80-A389-4807-82ED-2BA34FE9CFDC")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FileComparator : IAS_
    {
        string File1Name { get; set; }
        bool File1SpecifyConfig { get; set; }
        int File1Config { get; set; }

        string File2Name { get; set; }
        bool File2SpecifyConfig { get; set; }
        int File2Config { get; set; }

        bool IncludeGeneralData { get; set; }
        bool IncludeSurfaceData { get; set; }
        bool IncludeSurfaceDetail { get; set; }
        bool IncludeEdgeThickness { get; set; }
        bool IncludeMultiConfigData { get; set; }
        bool IncludeSolvesVariables { get; set; }
        bool IncludeIndexTCEData { get; set; }
        bool IncludeGlobalVertex { get; set; }
        bool IncludeCOCPoint { get; set; }
        bool IncludeElementVolume { get; set; }
        bool IncludeFNumbers { get; set; }
        bool IncludeCardinalPoints { get; set; }
        bool IncludePOPSettings { get; set; }
        bool IncludeFilesUsed { get; set; }
        bool IncludeMeritFunction { get; set; }

        void ClearAllIncludes();
        void SetAllIncludes();
        bool ShowDifferencesOnly { get; set; }
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