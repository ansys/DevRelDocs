# File I\_Analyses.cs

<a id="_i___analyses_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::IColorTranslator](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator)
* [ZOSAPI::Analysis::I\_Analyses](interface_z_o_s_a_p_i_1_1_analysis_1_1_i___analyses.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i___analyses)
* [ZOSAPI::Analysis::IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)
* [ZOSAPI::Analysis::IMessages](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)

## Source


```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Data;

namespace ZOSAPI.Analysis
{
    [ComVisible(true)]
    [Guid("6AACAAED-C624-4E91-B2BB-593AF900D25D")]
    public enum AnalysisIDM
    {
        [ComVisible(false)]
        XXXTemplateXXX = -1,

        //
        //  Adding entries here also update A_Command.FromAnalysisIDM, and A_Command.Initialize
        //
        RayFan,                             // = CoreCommand.IDM_RAYFAN,
        OpticalPathFan,                     // = CoreCommand.IDM_OPDFAN,
        PupilAberrationFan,                 // = CoreCommand.IDM_PABFAN,

        FieldCurvatureAndDistortion,        // = CoreCommand.IDM_FIELDCUR
        FocalShiftDiagram,                  // = CoreCommand.IDM_FOCSHIFT
        GridDistortion,                     // = CoreCommand.IDM_GRIDDIST
        LateralColor,                       // = CoreCommand.IDM_LATCOLOR
        LongitudinalAberration,             // = CoreCommand.IDM_LONGAB
        RayTrace,                           // = CoreCommand.IDM_RAYTRACE
        SeidelCoefficients,                 // = CoreCommand.IDM_SEIDEL
        SeidelDiagram,                      // = CoreCommand.IDM_SEIDEL
        ZernikeAnnularCoefficients,         // = CoreCommand.IDM_ZERNIKE_A
        ZernikeCoefficientsVsField,         // = CoreCommand.IDM_ZERNIKEVSFIELD
        ZernikeFringeCoefficients,          // = CoreCommand.IDM_ZERNIKE_F
        ZernikeStandardCoefficients,        // = CoreCommand.IDM_ZERNIKE_S

        FftMtf,                             // = CoreCommand.IDM_MTF
        FftThroughFocusMtf,                 // = CoreCommand.IDM_TFM
        GeometricThroughFocusMtf,           // = CoreCommand.IDM_TFGTF
        GeometricMtf,                       // = CoreCommand.IDM_GTF

        FftMtfMap,                          // = CoreCommand.IDM_DMTF_RF
        GeometricMtfMap,                    // = CoreCommand.IDM_GMTF_RF

        FftSurfaceMtf,                      // = CoreCommand.IDM_OTF

        FftMtfvsField,                      // = CoreCommand.IDM_MTFH
        GeometricMtfvsField,                // = CoreCommand.IDM_GMTFH
        HuygensMtfvsField,                  // = CoreCommand.IDM_HMTFH

        HuygensMtf,                         // = CoreCommand.IDM_HMTF
        HuygensSurfaceMtf,                  // = CoreCommand.IDM_HSMTF
        HuygensThroughFocusMtf,             // = CoreCommand.IDM_HTMTF

        FftPsf,                             // = CoreCommand.IDM_PSF
        FftPsfCrossSection,                 // = CoreCommand.IDM_PSFCROSS
        FftPsfLineEdgeSpread,               // = CoreCommand.IDM_LSF
        HuygensPsfCrossSection,             // = CoreCommand.IDM_APSFCROSS
        HuygensPsf,                         // = CoreCommand.IDM_APSF

        DiffractionEncircledEnergy,         // = CoreCommand.IDM_DIFFENC
        GeometricEncircledEnergy,           // = CoreCommand.IDM_GEOMENC
        GeometricLineEdgeSpread,            // = CoreCommand.IDM_LINEEDGE
        ExtendedSourceEncircledEnergy,      // = CoreCommand.IDM_EXTSRCENC
        SurfaceCurvatureCross,              // = CoreCommand.IDM_SURFACE_CURVATURE_CROSS
        SurfacePhaseCross,                  // = CoreCommand.IDM_SURFPHACROSS
        SurfaceSagCross,                    // = CoreCommand.IDM_SURFSAGCROSS
        SurfaceCurvature,                   // = CoreCommand.IDM_SURFACE_CURVATURE
        SurfacePhase,                       // = CoreCommand.IDM_SURFPHA
        SurfaceSag,                         // = CoreCommand.IDM_SURFSAG
        StandardSpot,                       // = CoreCommand.IDM_SPOTDIAGRAM
        ThroughFocusSpot,                   // = CoreCommand.IDM_SPOTTHROUGH
        FullFieldSpot,                      // = CoreCommand.IDM_SPOTFULLFLD
        MatrixSpot,                         // = CoreCommand.IDM_SPOTMATRIX
        ConfigurationMatrixSpot,            // = CoreCommand.IDM_SPOTMATRIXC

        RMSField,                           // = CoreCommand.IDM_RMSFIELD
        RMSFieldMap,                        // = CoreCommand.IDM_WAVFIELDMAP
        RMSLambdaDiagram,                   // = CoreCommand.IDM_RMSLAMBDA
        RMSFocus,                           // = CoreCommand.IDM_RMSFOCUS

        Foucault,                           // = CoreCommand.IDM_FOUCAULT
        Interferogram,                      // = CoreCommand.IDM_INTERFEROGRAM
        WavefrontMap,                       // = CoreCommand.IDM_WAV

        DetectorViewer,                     // = CoreCommand.IDM_NSC_DETECTORVIEWER

        // These are not yet implemented
        Draw2D,                             // = CoreCommand.IDM_LAYSTANDARD,
        Draw3D,                             // = CoreCommand.IDM_LAYTHREEDIM,
        ImageSimulation,                    // = CoreCommand.IDM_DIFFBMIMA
        GeometricImageAnalysis,             // = CoreCommand.IDM_IMAGEANA
        IMABIMFileViewer,                   // = CoreCommand.IDM_IMAVIEW
        GeometricBitmapImageAnalysis,       // = CoreCommand.IDM_IMAGEANABM
        BitmapFileViewer,                   // = CoreCommand.IDM_JPGVIEW
        LightSourceAnalysis,                // = CoreCommand.IDM_LIGHTSOURCE
        PartiallyCoherentImageAnalysis,     // = CoreCommand.IDM_DIFFIMAGE
        ExtendedDiffractionImageAnalysis,   // = CoreCommand.IDM_XDIA
        BiocularFieldOfViewAnalysis,        // = CoreCommand.IDM_BIO_FOV
        BiocularDipvergenceConvergence,     // = CoreCommand.IDM_BIO_DIP
        RelativeIllumination,               // = CoreCommand.IDM_RELILLUM
        VignettingDiagramSettings,          // = CoreCommand.IDM_VIGNETTING
        FootprintSettings,                  // = CoreCommand.IDM_FOOTPRINT
        YYbarDiagram,                       // = CoreCommand.IDM_YYBAR
        PowerFieldMapSettings,              // = CoreCommand.IDM_PAL
        PowerPupilMapSettings,              // = CoreCommand.IDM_PPM
        IncidentAnglevsImageHeight,         // = CoreCommand.IDM_ANGLEVSIMAGEHEIGHT
        FiberCouplingSettings,              // = CoreCommand.IDM_FIBERCOUPLING
        YNIContributions,                   // = CoreCommand.IDM_YNI
        SagTable,                           // = CoreCommand.IDM_SAGTABLE
        CardinalPoints,                     // = CoreCommand.IDM_CARDINAL
        DispersionDiagram,                  // = CoreCommand.IDM_DISPERSION
        GlassMap,                           // = CoreCommand.IDM_GLASSMAP
        AthermalGlassMap,                   // = CoreCommand.IDM_ATHERMALGLASSMAP
        InternalTransmissionvsWavelength,   // = CoreCommand.IDM_GTRAN
        DispersionvsWavelength,             // = CoreCommand.IDM_DISPVSLAMBDA
        GrinProfile,                        // = CoreCommand.IDM_GRINPROFILE
        GradiumProfile,                     // = CoreCommand.IDM_GRIN8PROFILE
        UniversalPlot1D,                    // = CoreCommand.IDM_OPVSPARAM
        UniversalPlot2D,                    // = CoreCommand.IDM_OPVSPARAM2D
        PolarizationRayTrace,               // = CoreCommand.IDM_POLRAYTRACE
        PolarizationPupilMap,               // = CoreCommand.IDM_PUPILMAP
        Transmission,                       // = CoreCommand.IDM_TRANSMISSION
        PhaseAberration,                    // = CoreCommand.IDM_PHASEABERRATION
        TransmissionFan,                    // = CoreCommand.IDM_POLTRANFAN
        ParaxialGaussianBeam,               // = CoreCommand.IDM_PGAUSSBEAM
        SkewGaussianBeam,                   // = CoreCommand.IDM_SGAUSSBEAM
        PhysicalOpticsPropagation,          // = CoreCommand.IDM_POP
        BeamFileViewer,                     // = CoreCommand.IDM_POPVIEW
        ReflectionvsAngle,                  // = CoreCommand.IDM_RTA_RA
        TransmissionvsAngle,                // = CoreCommand.IDM_RTA_TA
        AbsorptionvsAngle,                  // = CoreCommand.IDM_RTA_AA
        DiattenuationvsAngle,               // = CoreCommand.IDM_RTA_DA
        PhasevsAngle,                       // = CoreCommand.IDM_RTA_PA
        RetardancevsAngle,                  // = CoreCommand.IDM_RTA_NA
        ReflectionvsWavelength,             // = CoreCommand.IDM_RTA_RL
        TransmissionvsWavelength,           // = CoreCommand.IDM_RTA_TL
        AbsorptionvsWavelength,             // = CoreCommand.IDM_RTA_AL
        DiattenuationvsWavelength,          // = CoreCommand.IDM_RTA_DL
        PhasevsWavelength,                  // = CoreCommand.IDM_RTA_PL
        RetardancevsWavelength,             // = CoreCommand.IDM_RTA_NL
        DirectivityPlot,                    // = CoreCommand.IDM_SRC_DIRECTIVITY
        SourcePolarViewer,                  // = CoreCommand.IDM_SRC_POLAR
        PhotoluminscenceViewer,             // = CoreCommand.IDM_PLM_SPECTRUM
        SourceSpectrumViewer,               // = CoreCommand.IDM_SRC_SPECTRUM
        RadiantSourceModelViewerSettings,   // = CoreCommand.IDM_SRC_RSM_VIEWER
        SurfaceDataSettings,                // = CoreCommand.IDM_SURFDATA
        PrescriptionDataSettings,           // = CoreCommand.IDM_HARDCOPY
        FileComparatorSettings,             // = CoreCommand.IDM_FILECOMPARATOR
        PartViewer,                         // = CoreCommand.IDM_PART_VIEWER
        ReverseRadianceAnalysis,            // = CoreCommand.IDM_NSC_REVERSE_DETECTOR
        PathAnalysis,                       // = CoreCommand.IDM_NSC_ZRDA_PATH_ANALYSIS
        FluxvsWavelength,                   // = CoreCommand.IDM_NSC_ZRDA_FLUX_VS_WAVE
        RoadwayLighting,                    // = CoreCommand.IDM_NSC_RDW_SETUP
        SourceIlluminationMap,              // = CoreCommand.IDM_SRC_PROJECTION
        ScatterFunctionViewer,              // = CoreCommand.IDM_SCATTERPLOT
        ScatterPolarPlotSettings,           // = CoreCommand.IDM_SCATTER_POLARPLOT
        ZemaxElementDrawing,                // = CoreCommand.IDM_ELEMENT
        ShadedModel,                        // = CoreCommand.IDM_SHADEDMODEL
        NSCShadedModel,                     // = CoreCommand.IDM_SHADEDMODEL_NSC
        NSC3DLayout,                        // = CoreCommand.IDM_LAYTHREEDIM_NSC
        NSCObjectViewer,                    // = CoreCommand.IDM_SHADEDOBJECT
        RayDatabaseViewer,                  // = CoreCommand.IDM_ZRD
        ISOElementDrawing,                  // = CoreCommand.IDM_ELEMENTISO
        SystemData,                         // = CoreCommand.IDM_SYSDATA
        TestPlateList,                      // = CoreCommand.IDM_TESTPLATELIST
        SourceColorChart1931,               // = CoreCommand.IDM_SRC_COLOR_CHART_1931
        SourceColorChart1976,               // = CoreCommand.IDM_SRC_COLOR_CHART_1976
        PrescriptionGraphic,                // = CoreCommand.IDM_PRESCRIPGRAPH
        CriticalRayTracer,                // = CoreCommand.IDM_CRITICALRAYTRACER
        ContrastLoss,                  // = CoreCommand.IDM_CONTRAST_LOSS
        CoatingListing,
        FullFieldAberration,

        // SURFACE_DATA_ANALYSIS
        SurfaceSlope,                         // = CoreCommand.IDM_SURFACE_SLOPE
        SurfaceSlopeCross,                  // = CoreCommand.IDM_SURFACE_SLOPE_CROSS
        // end SURFACE_DATA_ANALYSIS

        // QUICK_YIELD
        QuickYield,                         //= CoreCommand.IDM_QUICKYIELD
        // end QUICK_YIELD

        SystemCheck,                         //= CoreCommand.IDM_ERRORCHECK

        // TOLERANCE_YIELD
        ToleranceYield,                         //= CoreCommand.IDM_TOLYIELD
                                                // end TOLERANCE_YIELD

        // TOLERANCE_HISTOGRAM
        ToleranceHistogram,                    //= CoreCommand.IDM_TOLHIST
        // end TOLERANCE_HISTOGRAM

        // DIFFRACTION_EFFICIENCY_2D
        DiffEfficiency2D,  //= CoreCommand.IDM_DIFF_EFFICIENCY_2D
        // end DIFFRACTION_EFFICIENCY_2D

        // DIFFRACTION_EFFICIENCY_ANGULAR
        DiffEfficiencyAngular,  //= CoreCommand.IDM_DIFF_EFFICIENCY_ANGULAR
        // end DIFFRACTION_EFFICIENCY_ANGULAR

        // DIFFRACTION_EFFICIENCY_CHROMATIC
        DiffEfficiencyChromatic,  //= CoreCommand.IDM_DIFF_EFFICIENCY_CHROMATIC
        // end DIFFRACTION_EFFICIENCY_CHROMATIC

        NSCSurfaceSag,                      // = CoreCommand.IDM_NSC_SURFSAG

        NSCSingleRayTrace,                  // = CoreCommand.IDM_NSC_SINGLE_RAY_TRACE

        NSCGeometricMtf,                       // = CoreCommand.IDM_NSC_GEO_MTF

        // SURFACE_PHASE_DATA_ANALYSIS
        SurfacePhaseSlope,                         // = CoreCommand.IDM_SURFACE_PHASE_SLOPE
        SurfacePhaseSlopeCross,                  // = CoreCommand.IDM_SURFACE_PHASE_SLOPE_CROSS
        // end SURFACE_PHASE_DATA_ANALYSIS

        // STAR API-based analyses
        STARAlignCheck,                     // = CoreCommand.IDM_STAR_ALIGNCHECK
        STARSysViewer,                      // = CoreCommand.IDM_STAR_SYSVIEWER
        STAR2DDefPlot,                      // = CoreCommand.IDM_STAR_2DDEFPLOT
        STARPerfChange,                     // = CoreCommand.IDM_STAR_PERFCHANGE
        STARIndexVsTemp,                    // = CoreCommand.IDM_STAR_INDEXVSTEMP
        STARInspectFEA,                     // = CoreCommand.IDM_STAR_INSPECTFEA

        // USER analysis
        UserDefinedCOM,                     // = CoreCommand.IDM_USER_DEFINED_COM

        NEST,                              // = CoreCommand.IDM_NEST

        NSCSpotStandardNative,                      // = CoreCommand.IDM_NSC_SPOTDIAGRAM
    };


    [ComVisible(true)]
    [Guid("BCE66233-BC26-464C-B5B7-769680C0B67E")]
    public enum ColorPaletteType
    {
        GreyScale,
        FalseColor,
        FalseColorOriginal,
        Viridis,
        Magma,
    }

    [ComVisible(true)]
    [Guid("27778424-C503-4CF9-BF14-1EA61A8B389A")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IColorTranslator
    {
        ColorPaletteType Palette { get; }
        bool IsInversePalette { get; }
        bool IsAutoScaled { get; }
        int NumberOfShades { get; }
        double MinValue { get; }
        double MaxValue { get; }
        bool IsLog { get; }
        double LogBase { get; }
        bool CanConvertSingleValue { get; }

        bool GetSingleRGB(double x, out int R, out int G, out int B);
        bool GetSingleRGBFloat(double x, out float R, out float G, out float B);
        int[,,] GetRGB2DSafe(double[,] vals);
        int[,] GetRGBSafe(double[] vals);
        float[,,] GetRGB2DFloatSafe(double[,] vals);
        float[,] GetRGBFloatSafe(double[] vals);

        void GetRGB(
            uint fullSize,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)]double[] data,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out]int[] rData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out]int[] gData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out]int[] bData);

        void GetRGBFloat(
            uint fullSize,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)]double[] data,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out]float[] rData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out]float[] gData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out]float[] bData);

    }

    [ComVisible(true)]
    [Guid("F8A05BDC-1817-4C9B-BD16-E5D3C5215359")]
    public enum POPSampling
    {
        S_32 = 5,
        S_64 = 6,
        S_128 = 7,
        S_256 = 8,
        S_512 = 9,
        S_1024 = 10,
        S_2048 = 11,
        S_4096 = 12,
        S_8192 = 13,
        S_16384 = 14,
        S_32768 = 15,
        S_65536 = 16,
        S_131072 = 17,
        S_262144 = 18,
        S_524288 = 19,
        S_1048576 = 20,
        S_2097152 = 21,
        S_4194304 = 22,
        S_8388608 = 23,
        S_16777216 = 24,
        S_33554432 = 25,
        S_67108864 = 26,
        S_134217728 = 27,
        S_268435456 = 28,
        S_536870912 = 29,
        S_1073741824 = 30,

        S_1K = 10,
        S_2K = 11,
        S_4K = 12,
        S_8K = 13,
        S_16K = 14,
        S_32K = 15,
        S_64K = 16,
        S_128K = 17,
        S_256K = 18,
        S_512K = 19,
        S_1M = 20,
        S_2M = 21,
        S_4M = 22,
        S_8M = 23,
        S_16M = 24,
        S_32M = 25,
        S_64M = 26,
        S_128M = 27,
        S_256M = 28,
        S_512M = 29,
        S_1G = 30,
    }

    [ComVisible(true)]
    [Guid("B96379C2-D2CE-417C-827E-7BF644637C95")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface I_Analyses
    {
        int NumberOfAnalyses { get; }

        bool CloseAnalysis(int index);
        bool CloseAnalysis(IA_ analysis);

        IA_ Get_AnalysisAtIndex(int index);
        IA_ New_Analysis(AnalysisIDM AnalysisType);
        IA_ New_Analysis_SettingsFirst(AnalysisIDM AnalysisType);

        [ComVisible(false)]
        IA_ New_XXXTemplateXXX();

        IA_ New_RayFan();
        IA_ New_OpticalPathFan();
        IA_ New_PupilAberrationFan();

        IA_ New_FieldCurvatureAndDistortion();
        IA_ New_FocalShiftDiagram();
        IA_ New_GridDistortion();
        IA_ New_LateralColor();
        IA_ New_LongitudinalAberration();
        IA_ New_RayTrace();
        IA_ New_SeidelCoefficients();
        IA_ New_SeidelDiagram();
        IA_ New_ZernikeAnnularCoefficients();
        IA_ New_ZernikeCoefficientsVsField();
        IA_ New_ZernikeFringeCoefficients();
        IA_ New_ZernikeStandardCoefficients();
        IA_ New_FullFieldAberration();
        IA_ New_ContrastLossMap();
        IA_ New_FftMtf();
        IA_ New_FftThroughFocusMtf();
        IA_ New_GeometricThroughFocusMtf();
        IA_ New_GeometricMtf();
        IA_ New_NSCGeometricMtf();

        IA_ New_FftMtfMap();
        IA_ New_GeometricMtfMap();

        IA_ New_FftSurfaceMtf();

        IA_ New_FftMtfvsField();
        IA_ New_GeometricMtfvsField();
        IA_ New_HuygensMtfvsField();

        IA_ New_HuygensMtf();
        IA_ New_HuygensSurfaceMtf();
        IA_ New_HuygensThroughFocusMtf();

        IA_ New_FftPsf();
        IA_ New_FftPsfCrossSection();
        IA_ New_FftPsfLineEdgeSpread();
        IA_ New_HuygensPsfCrossSection();
        IA_ New_HuygensPsf();

        IA_ New_DiffractionEncircledEnergy();
        IA_ New_GeometricEncircledEnergy();
        IA_ New_GeometricLineEdgeSpread();
        IA_ New_ExtendedSourceEncircledEnergy();

        IA_ New_SurfaceCurvatureCross();
        IA_ New_SurfacePhaseCross();
        IA_ New_SurfaceSagCross();

        IA_ New_SurfaceCurvature();
        IA_ New_SurfacePhase();
        IA_ New_SurfaceSag();

        IA_ New_NSCSurfaceSag();

        IA_ New_NSCSpotStandardNative();

        IA_ New_StandardSpot();
        IA_ New_ThroughFocusSpot();
        IA_ New_FullFieldSpot();
        IA_ New_MatrixSpot();
        IA_ New_ConfigurationMatrixSpot();

        IA_ New_RMSField();
        IA_ New_RMSFieldMap();
        IA_ New_RMSLambdaDiagram();
        IA_ New_RMSFocus();

        IA_ New_Foucault();
        IA_ New_Interferogram();
        IA_ New_WavefrontMap();

        IA_ New_DetectorViewer();
        IA_ New_CriticalRayTracer();

        IA_ New_PathAnalysis();

        IA_ New_NSCSingleRayTrace();

        IA_ New_FileComparator();

        IA_ New_GrinProfile();

        IA_ New_GeometricImageAnalysis();

        IColorTranslator CreateColorTranslatorAuto(
            ColorPaletteType palette,
            bool inversePalette,
            int numberOfShades = 256);
        IColorTranslator CreateLogColorTranslatorAuto(
            ColorPaletteType palette,
            bool inversePalette,
            double logBase = 10.0,
            int numberOfShades = 256);

        IColorTranslator CreateColorTranslatorFixed(
            double minValue,
            double maxValue,
            ColorPaletteType palette,
            bool inversePalette,
            int numberOfShades = 256);
        IColorTranslator CreateLogColorTranslatorFixed(
            double minValue,
            double maxValue,
            ColorPaletteType palette,
            bool inversePalette,
            double logBase = 10.0,
            int numberOfShades = 256);

        IMessage RunHighSamplingPOP(
            string configFile,
            POPSampling xSampling,
            POPSampling ySampling,
            string outputTextFile,
            string outputBeamFileName,
            bool saveBeamAtAllSurfaces);

        IA_ New_QuickYield();

        IA_ New_SurfaceSlope();
        IA_ New_SurfaceSlopeCross();

        IA_ New_SurfacePhaseSlope();
        IA_ New_SurfacePhaseSlopeCross();


        IA_ New_ReflectionVsAngle();

        IA_ New_TransmissionVsAngle();

        IA_ New_AbsorptionVsAngle();

        IA_ New_DiattenuationVsAngle();

        IA_ New_PhaseVsAngle();

        IA_ New_RetardanceVsAngle();
        
        IA_ New_ReflectionVsWavelength();

        IA_ New_TransmissionVsWavelength();

        IA_ New_AbsorptionVsWavelength();

        IA_ New_DiattenuationVsWavelength();

        IA_ New_PhaseVsWavelength();

        IA_ New_RetardanceVsWavelength();

        IA_ New_ImageSimulation();

        IA_ New_RelativeIllumination();

        IA_ New_TolerancingYield();

        IA_ New_TolerancingHistogram();

        IA_ New_InternalTransmissionvsWavelength();
    }

    [ComVisible(true)]
    [Guid("755A1CE9-3ABB-40FA-AFA6-D91521F3FF87")]
    public enum ErrorType
    {
        // General
        Success,
        InvalidParameter,
        InvalidSettings,
        Failed,
        AnalysisUnavailableForProgramMode,
        NotYetImplemented,

        // Tool errors
        NoSolverLicenseAvailable = 10000,
        ToolAlreadyOpen,
        SequentialOnly,
        NonSequentialOnly,
        SingleNSCRayTraceSupported,
        HPCNotAvailable,
        FeatureNotSupported,
        NotAvailableInLegacy,

    }

    [ComVisible(true)]
    [Guid("4D96D146-624F-48AB-BEE2-5C1437E9925F")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMessage
    {
        ErrorType ErrorCode { get; }
        String Text { get; }
    }

    [ComVisible(true)]
    [Guid("B8695A85-282B-4958-8B48-C71EE40F7EAA")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMessages : IList<IMessage>
    {
        void WriteLine(string s, int userV, int settingsV);
        void WriteLine(string s, bool userV, bool settingsV);
        void WriteLine(string s, double userV, double settingsV);
        void WriteLine(string s, string userV, string settingsV);

        string AllToString();
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