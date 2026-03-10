# File NSCQuickFocus.cs

<a id="_n_s_c_quick_focus_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Optimization::INSCQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::Optimization](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools.Optimization
{

    [Guid("646D55F9-1D70-4857-B194-3EDE67C30142")]
    [ComVisible(true)]
    public enum NSCQuickFocusCriterion
    {
        SpotSizeRadial = 0,
        SpotSizeXOnly,
        SpotSizeYOnly,
    }

    [Guid("E7AED3E7-CDD8-40EE-A88B-C8767E234527")]
    [ComVisible(true)]
    public enum NSCQuickFocusSampling
    {
        S_257 = 0,
        S_513,
        S_1025,
        S_2049,
        S_4097,
        S_8193,
        S_16385,
        S_32769,
        S_65537,
        S_131073,
    }

    [Guid("2F8A6893-39B3-4870-8F6B-E4C78C0CD913")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCQuickFocus : ISystemTool
    {
        int Detector { get; set; }
        string Sequence { get; set; }
        string SnapToSequence { get; set; }
        bool EnableFirstRaySnapping { get; set; }

        NSCQuickFocusCriterion Criterion { get; set; }
        int Wavelength { get; set; }
        NSCQuickFocusSampling Sampling { get; set; }

        bool IsGroupSelected { get; }

        List<int> AvailableDetectors { get; }
        int NumberOfAvailableDetectors { get; }
        List<string> AvailableSequences { get; }
        int NumberOfAvailableSequences {  get; }
        List<string> AvailableSequenceGroups { get; }
        int NumberOfAvailableSequenceGroups { get; }
        List<string> AvailableSnapToSequences { get; }
        int NumberOfAvailableSnapToSequences { get; }

        int GetAvailableDetectorAt(int index);
        string GetAvailableSequenceAt(int index);
        string GetAvailableSequenceGroupAt(int index);
        string GetAvailableSnapToSequenceAt(int index);

        void SelectAvailableDetector(int index);
        void SelectAvailableSequence(int index);
        void SelectAvailableSequenceGroup(int index);
        void SelectAvailableSnapToSequence(int index);

        void UseAllWavelengths();

        bool SaveSettings();
        bool LoadSettings();
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