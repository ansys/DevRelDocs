# File IAS_PhysicalOpticsPropagation.cs

<a id="_i_a_s___physical_optics_propagation_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::PhysicalOptics::IAS\_PhysicalOpticsPropagation](interface_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1_1_i_a_s___physical_optics_propagation.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1_1_i_a_s___physical_optics_propagation)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::PhysicalOptics](namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;

namespace ZOSAPI.Analysis.PhysicalOptics
{
    [ComVisible(true)]
    [Guid("E36E92AD-A40E-45DB-B65F-B364E9A9DAA1")]
    public enum POPBeamTypes
    {
        GaussianWaist = 0,
        GaussianAngle,
        GaussianSizeAngle,
        TopHat,
        File,
        DLL,
        Multimode,
        AstigmaticGaussian,
    }

    [ComVisible(true)]
    [Guid("FD8E4082-678C-4D33-ACD3-48CEEDD76B6E")]
    public enum POPShowAsTypes
    {
        Surface = 0,
        Contour,
        GrayScale,
        InverseGrayScale,
        FalseColor,
        InverseFalseColor,
        CrossX,
        CrossY,
        Encircled,
        Ensquared,
        EnslittedX,
        EnslittedY,
    }

    [ComVisible(true)]
    [Guid("9AA60B12-0D50-4762-9B56-C032448747B8")]
    public enum POPDataTypes
    {
        Irradiance = 0,
        EXIrradiance,
        EYIrradiance,
        Phase,
        EXPhase,
        EYPhase,
        TransferMagnitude,
        TransferPhase,
    }

    [ComVisible(true)]
    [Guid("ABB2A1E4-D42F-4A8A-A66C-44FF6B5002C6")]
    public enum POPProjectionTypes
    {
        AlongBeam = 0,
        AlongNormal,
        AlongLocalZ,
    }

    [ComVisible(true)]
    [Guid("F4A1C1CF-EE40-4699-B69E-2C4B09C58273")]
    public enum POPScaleTypes
    {
        Linear = 0,
        Log_Minus_5,
        Log_Minus_10,
        Log_Minus_15,
    }

    [ComVisible(true)]
    [Guid("F101E58F-25E4-44DA-965D-B435FAA8F218")]
    public enum POPZoomTypes
    {
        NoZoom = 0,
        X2,
        X4,
        X8,
        X16,
    }

    [ComVisible(true)]
    [Guid("7966D747-51A7-4CA4-9124-C301F5CF045F")]
    public enum POPFiberTypes
    {
        GaussianWaist = 0,
        GaussianAngle,
        GaussianSizeAngle,
        TopHat,
        File,
        DLL,
        AstigmaticGaussian,
    }

    [ComVisible(true)]
    [Guid("DD176BE9-490F-4B5E-8CAA-AC886715300B")]
    public enum POPFiberPositions
    {
        ChiefRay = 0,
        SurfaceVertex,
    }

    [ComVisible(true)]
    [Guid("E8DC4B9E-7291-4152-90E4-007DC9008753")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_PhysicalOpticsPropagation : IAS_
    {
        // General Tab
        IAS_Wavelength Wavelength { get; }
        IAS_Field Field { get; }
        IAS_Surface StartSurface { get; }
        IAS_Surface EndSurface { get; }
        double SurfaceToBeam { get; set; } // Z_ToWaist
        bool UsePolarization { get; set; } // UsePolarizedIsChecked
        bool SeparateXY { get; set; } // SeparateXYIsChecked
        bool UseDiskStorage { get; set; } // UseDiskIsChecked

        // Beam Definition Tab
        POPBeamTypes BeamType { get; set; } // BeamTypeIndex
        SampleSizes XSampling { get; set; } // Sample_X
        SampleSizes YSampling { get; set; } // Sample_Y
        double XWidth { get; set; } // Width_X
        double YWidth { get; set; } // Width_Y
        void AutoCalculateBeamSampling();
        bool UseTotalPower { get; set; } // PowerRadioIndex
        double TotalPower { get; set; }
        bool UsePeakIrradiance { get; set; } // PowerRadioIndex
        double PeakIrradiance { get; set; } // PeakIrradiation
        int NumberOfBeamTypeFiles { get; }
        string GetBeamTypeFileName(int fileIndex);
        string[] GetBeamTypeFiles();
        string BeamTypeFilename { get; set; }
        void ReadPowerFromFile();
        int NumberOfParameters { get; }
        string GetParameterName(int paramIdx);
        double GetParameterValue(int paramIdx);
        void SetParameterValue(int paramIdx, double Value);
        //double[] ParameterValues { get; set; } // Parameters 

        // Display Tab
        POPShowAsTypes ShowAs { get; set; } // ShowAsIndex
        POPDataTypes DataType { get; set; } // DataTypeIndex
        POPProjectionTypes Project { get; set; } // ProjectionIndex
        string ContourFormat { get; set; }
        double PlotScale { get; set; } // NormalizeTo
        POPScaleTypes LogScale { get; set; } // LogScaleIndex
        POPZoomTypes ZoomIn { get; set; } // ZoomInByIndex
        int RowOrColumn { get; set; } // RowCol_X
        double ZeroPhaseLevel { get; set; }
        bool SaveOutputBeam { get; set; } // SaveFileIsChecked
        string OutputBeamFile { get; set; } // SaveFilename
        bool SaveBeamAtAllSurfaces { get; set; } // SaveAllSurfacesIsChecked

        // Fiber Data Tab
        bool ComputeFiberCouplingIntegral { get; set; } // ComputeFiberCouplingIntegralIsChecked
        bool IgnoreFiberPolarization { get; set; } // FiberIgnoresPolarizatonIsChecked
        POPFiberTypes FiberType { get; set; } // FiberTypeIndex
        POPFiberPositions FiberPosition { get; set; } // ReferencePointIndex
        double TiltAboutX { get; set; } // FiberTilt_TX
        double TiltAboutY { get; set; } // FiberTilt_TY

        int NumberOfFiberTypeFiles { get; }
        string GetFiberTypeFileName(int fileIndex);
        string[] GetFiberTypeFiles();
        string FiberTypeFilename { get; set; } // FiberTypeFilename


        int NumberOfFiberParameters { get; }
        string GetFiberParameterName(int paramIdx);
        double GetFiberParameterValue(int paramIdx);
        void SetFiberParameterValue(int paramIdx, double Value);
        //double[] FiberParameterValues { get; set; } // FiberParameters
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
