# File ICommon.cs

<a id="_i_common_8cs"></a>

![][C#]


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
    [Guid("CA9ECD49-4C34-49C9-9219-BBD86EF00437")]
    public enum HuygensPsfTypes
    {
        Linear,
        Log_Minus_1, Log_Minus_2, Log_Minus_3, Log_Minus_4, Log_Minus_5,
        Real, Imaginary, Phase,
    }

    [ComVisible(true)]
    [Guid("476804C5-1805-4BFB-8421-05DDB898A971")]
    public enum DetectorViewerScaleTypes
    {
        Linear,
        Log_Minus_5, Normalized = Log_Minus_5,
        Log_Minus_10,
        Log_Minus_15,
    }

    [ComVisible(true)]
    [Guid("9619B30A-6E18-4B44-84F6-CD53EECEA909")]
    public enum PsfTypes
    {
        X_Linear, Y_Linear,
        X_Logarithmic, Y_Logarithmic,
        X_Phase, Y_Phase,
        X_RealPart, Y_RealPart,
        X_ImaginaryPart, Y_ImaginaryPart,
    }

    [ComVisible(true)]
    [Guid("881C3FD2-EE26-4A5E-9524-9E30721368DB")]
    public enum PsfSpread
    {
        Line, Edge,
    }

    [ComVisible(true)]
    [Guid("E08402E2-7B4E-4E49-BB85-CD80850737DE")]
    public enum Rotations
    {
        Rotate_0,
        Rotate_90,
        Rotate_180,
        Rotate_270,
    }

    [ComVisible(true)]
    [Guid("1BD7EBD0-0ACE-41C2-A1C5-B68D207F2E7E")]
    public enum Polarizations
    {
        None, Ex, Ey, Ez,
    }

    [ComVisible(true)]
    [Guid("2094B670-52C5-4DAD-B3F4-B1E57BBEFE8E")]
    public enum ScanTypes
    {
        Plus_Y = 0, Plus_X = 1, Minus_Y = 2, Minus_X = 3
    }

    [ComVisible(true)]
    [Guid("f96fff3e-33df-4f5a-aa0c-7fba79cc539a")]
    public enum AxisType
    {
        X = 0,
        Y = 1,
        Z = 2
    }

    [ComVisible(true)]
    [Guid("2b8a1af7-fc34-4b3b-90ba-72f6787a771d")]
    public enum SourceGia
    {
        Uniform = 0,
        Lambertian = 1
    }

    [ComVisible(true)]
    [Guid("1edd9759-db0b-4f0a-9ce4-ae5bf2c56dbd")]
    public enum Parity
    {
        Even = 0,
        Odd = 1
    }

    [ComVisible(true)]
    [Guid("37d503a0-913a-456a-9c82-378c5b718e7f")]
    public enum ReferenceGia
    {
        ChiefRay = 0,
        Vertex = 1,
        PrimaryChief = 2,
        Centroid = 3,
    }

}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
