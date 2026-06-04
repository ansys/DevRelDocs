# File I_ShowAs.cs

<a id="_i___show_as_8cs"></a>

![][C#]


## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Analysis
{
    [ComVisible(true)]
    [Guid("31326ED1-77B1-4E16-BFBF-29095F411A5C")]
    public enum ShowAs
    {
        Surface, Contour,
        GreyScale, InverseGreyScale,
        FalseColor, InverseFalseColor,
    }

    [ComVisible(true)]
    [Guid("78EA1024-8C5F-42BE-B121-7D6484E5EFA6")]
    public enum DetectorViewerShowAsTypes
    {
        FullListing = 0, AzimuthCrossSection,

        Text_CrossSection_Row = 1, Text_CrossSection_Column,
        FluxVsWaveLength,

        GreyScale = 0, GreyScale_Inverted,
        FalseColor, FalseColor_Inverted,
        TrueColor,
        Color_CrossSection_Row, Color_CrossSection_Column,
        Color_FluxVsWavelength,

        CrossSection = 5,
        Directivity_Full, Directivity_Half,

        CrossSection_Row = 4, CrossSection_Column,
        GeometricMtf = 6,
    }

    [ComVisible(true)]
    [Guid("01E02C73-72E7-4C17-ABDF-0262015D9AD1")]
    public enum DetectorViewerShowDataTypes
    {
        IncidentFlux, AbsorbedFlux, AbsorbedFluxVolume,

        PositionSpace = 0, AngleSpace,

        Polar_AngleSpace = 0,

        IncoherentIrradiance = 0, CoherentIrradiance,
        CoherentPhase, RadiantIntensity, RadiancePositionSpace, RadianceAngleSpace,

        IncoherentIlluminance = 0, CoherentIlluminance,
        /* CoherentPhase, */ LuminousIntensity = 3, LuminancePositionSpace, LuminanceAngleSpace,

        IncoherentFluence = 0, CoherentFluence
    }

    [ComVisible(true)]
    [Guid("B848BE6E-4A43-4209-A6D2-A2DC50CB5C07")]
    public enum HuygensSurfaceMftShowAsTypes
    {
        GreyScale, InverseGreyScale,
        FalseColor, InverseFalseColor,
    }

    [ComVisible(true)]
    [Guid("ED2BE65C-9E2E-4746-B2E5-AAB0014FD579")]
    public enum HuygensShowAsTypes
    {
        Surface, Contour,
        GreyScale, InverseGreyScale,
        FalseColor, InverseFalseColor, TrueColor
    }

    [ComVisible(true)]
    [Guid("88C5B6C5-63EB-450E-8BBB-853BB7C834FC")]
    public enum Beam
    {
        Reference,
        Configuration_1, Configuration_2, Configuration_3, Configuration_4,
        Configuration_5, Configuration_6, Configuration_7, Configuration_8,
        Configuration_9, Configuration_10, Configuration_11, Configuration_12,
        Configuration_13, Configuration_14, Configuration_15, Configuration_16,
        Configuration_17, Configuration_18, Configuration_19, Configuration_20,
    }

    [ComVisible(true)]
    [Guid("71ce9340-4674-429c-8aa6-9759a22bb6c5")]
    public enum GiaShowAsTypes
    {
        Surface,
        Contour,
        GreyScale,
        InverseGreyScale,
        FalseColor,
        InverseFalseColor,
        SpotDiagram,
        CrossX,
        CrossY,
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
