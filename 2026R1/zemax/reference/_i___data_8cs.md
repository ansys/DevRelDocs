# File I_Data.cs

<a id="_i___data_8cs"></a>

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
    [Guid("0E56AD4B-5BC7-49B1-9FFD-7C44A71A86BE")]
    public enum SurfaceCurvatureData
    {
        TangentialCurvature = 0, SagittalCurvature = 1,
        X_Curvature = 2, Y_Curvature = 3,
        CurvatureModulus = 4, CurvatureUnused = 5,
    }

    [ComVisible(true)]
    [Guid("257607AD-DC90-4F80-8559-3D9AABC4A391")]
    public enum SurfaceCurvatureCrossData
    {
        TangentialCurvature = 0, SagittalCurvature = 1,
        X_Curvature = 2, Y_Curvature = 3,
        CurvatureModulus = 4, CurvatureUnused = 5,
        //TanPlusSagCurvature = 5, XPlusYCurvature = 6,
    }

    [ComVisible(true)]
    [Guid("ADCBCF1E-78B1-409A-A358-4B803FEDAA7E")]
    public enum SurfacePhaseData
    {
        SurfacePhase = 0,
    }

    [ComVisible(true)]
    [Guid("6C291317-C595-40AB-8099-0EE113227C61")]
    public enum SurfaceSagData
    {
        SurfaceSag = 0,
    }
    // SURFACE_DATA_ANALYSIS
    [ComVisible(true)]
    [Guid("6C291317-C595-40AB-8099-0EE113227C51")]
    public enum SurfaceSlopeData
    {
        [Obsolete]
        SurfaceSlope = 0,
        TangentialSlope = 0,
        SagittalSlope = 1,
        XSlope = 2,
        YSlope = 3,
        SlopeModulus = 4,
        SlopeUnused = 5,
    }
    [ComVisible(true)]
    [Guid("6C291317-C595-40AB-8099-0EE113227C41")]
    public enum SurfaceSlopeCrossData
    {
        TangentialSlope = 0, SagittalSlope = 1,
        XSlope = 2, YSlope = 3,
        SlopeModulus = 4, SlopeUnused = 5,
        //TanPlusSagSlope = 5, XPlusYSlope = 6,
    }
    // end SURFACE_DATA_ANALYSIS

    // SURFACE_PHASE_DATA_ANALYSIS
    [ComVisible(true)]
    [Guid("0ea2e731-5368-4f7c-b20f-11bcbf08d517")]
    public enum SurfacePhaseSlopeData
    {
        PhaseSlopeTangential = 0,
        PhaseSlopeSagittal = 1,
        PhaseSlopeX = 2,
        PhaseSlopeY = 3,
        PhaseSlopeModulus = 4,
        PhaseSlopeUnused = 5,
    }
    [ComVisible(true)]
    [Guid("1919371b-732f-495c-9330-fa4adf6233df")]
    public enum SurfacePhaseSlopeCrossData
    {
        PhaseSlopeTangential = 0, 
        PhaseSlopeSagittal = 1,
        PhaseSlopeX = 2, 
        PhaseSlopeY = 3,
        PhaseSlopeModulus = 4,
        PhaseSlopeUnused = 5,
        //PhaseSlopeTangentialAndSagittal = 5,
        //PhaseSlopeX_and_Y = 6,
    }
    // end SURFACE_PHASE_DATA_ANALYSIS

    [ComVisible(true)]
    [Guid("05F4D8BB-2D0D-46F3-A6CA-88535C9CAC5E")]
    public enum RemoveOptions
    {
        None = 0, BaseROC = 1,
        BestFitSphere = 2, BaseSag = 3, CompositeSag = 4,
    }

    [ComVisible(true)]
    [Guid("21541761-9836-4412-85CF-FB2B11C22969")]
    public enum BestFitSphereOptions
    {
        MinimumVolume = 0, MinimumRMS = 1,
        MinimumRMSWithOffset = 2,
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