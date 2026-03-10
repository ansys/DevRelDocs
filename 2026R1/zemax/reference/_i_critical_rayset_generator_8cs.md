# File ICriticalRaysetGenerator.cs

<a id="_i_critical_rayset_generator_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::ICriticalRaysetGenerator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Tools
{
    [ComVisible(true)]
    [Guid("71065DF0-DA95-4227-A772-66D8847C8190")]
    public enum RayPatternOption
    {
        XyFan = 0,
        XFan = 1,
        YFan = 2,
        ChiefAndRing = 3,
        List = 4,
        Grid = 6,
        ChiefAndMarginals = 8,
    };

    [ComVisible(true)]
    [Guid("0BE5FBB2-54A6-45B6-AE88-417E230F74DD")]
    public enum CriticalRayType
    {
        Chief = 0,
        Marginal = 1,
        Grid = 2,
        Ring = 3,
        Y_Fan = 4,
        X_Fan = 5,
        XY_Fan = 6,
        List = 7,
    };

    [Guid("FB5D6D75-661B-498F-9474-D9690057EF16")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ICriticalRaysetGenerator : ISystemTool
    {
        RayPatternOption RayPattern { get; set; }
        int NumRays { get; set; }
        double MinimumEfectiveInputDistance { get; }
        double EffectiveInputDistance { get; set; }
        bool UseAllFields { get; set; }
        bool UseAllWavelengths { get; set; }
        string ReadRaysFromFilename { set; }
        string SaveCriticalRaysFilename { set; }
        double RayScale { get; set; }
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