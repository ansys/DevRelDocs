# File IAS\_TolerancingHistogram.cs

<a id="_i_a_s___tolerancing_histogram_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Tolerancing::IAS\_TolerancingHistogram](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_histogram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_histogram)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Tolerancing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;

namespace ZOSAPI.Analysis.Tolerancing
{
    [ComVisible(true)]
    [Guid("F766D917-C7CF-43ED-9CA4-AB095071C511")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_TolerancingHistogram : IAS_
    {
        String Filename { get; set; }
        int Operand { get; set; }
        double MinValue { get; set; }
        double MaxValue { get; set; }
        int NumBins { get; set; }

        void UseSystemTolerances();
        ITolerancingOperands GetOperands();
        string[] GetToleranceFiles();
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