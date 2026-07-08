# File InterfacesWizards.cs

<a id="_interfaces_wizards_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Wizards::IWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard)
* [ZOSAPI::Wizards::INSCWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_wizard)
* [ZOSAPI::Wizards::INSCOptimizationWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_optimization_wizard)
* [ZOSAPI::Wizards::INSCBitmapWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_bitmap_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_bitmap_wizard)
* [ZOSAPI::Wizards::IImageData](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_image_data.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_image_data)
* [ZOSAPI::Wizards::INSCRoadwayLightingWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_roadway_lighting_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_roadway_lighting_wizard)
* [ZOSAPI::Wizards::ISEQOptimizationWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard)
* [ZOSAPI::Wizards::ISEQOptimizationWizard2](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard2.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard2)
* [ZOSAPI::Wizards::IToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard)
* [ZOSAPI::Wizards::INSCToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_tolerance_wizard)
* [ZOSAPI::Wizards::ISEQToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_tolerance_wizard)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Wizards](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis.Settings;

namespace ZOSAPI.Wizards
{
    [ComVisible(true)]
    [Guid("D0844FC2-E274-4616-A28B-DEA3AB2E7789")]
    public enum WizardType
    {
        NSCOptimization,
        NSCBitmap,
        NSCRoadwayLighting,
        SEQOptimization,
        NSCTolerance,
        SEQTolerance,
    }

    [ComVisible(true)]
    [Guid("95343916-7778-434E-8CDF-EFBEE4F7BEBE")]
    public enum DefaultAndDegrees
    {
        Default = 0, Degrees = 1,
    }

    [ComVisible(true)]
    [Guid("6F123B2E-0BAB-47AF-B564-628DA4944A4B")]
    public enum DefaultAndFringes
    {
        Default = 0, Fringes = 1, Percent = 2,
    }

    [ComVisible(true)]
    [Guid("8B723DB3-B1C5-4420-852C-F03851282321")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IWizard
    {
        WizardType Wizard { get; }
        void OK();
        void Apply();
        void SaveSettings();
        void LoadSettings();
        void ResetSettings();

        void Initialize();
    }

    [ComVisible(true)]
    [Guid("41525713-B184-4C4E-9320-C15F64ECB0AE")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCWizard : IWizard
    {
        bool IsNSCOptimizingWizard { get; }
        bool IsNSCBitmapWizard { get; }
        bool IsClearDataSettingsUsed { get; set; }
        bool IsRaytraceSettingsUsed { get; set; }
        bool IsSplitRaysUsed { get; set; }
        bool IsUsePolarizationUsed { get; set; }
        bool IsScatterRaysUsed { get; set; }
        bool IsIgnoreErrorsUsed { get; set; }
        bool IsUseLightningTraceUsed { get; set; }
        bool IsCriterionSettingsUsed { get; set; }
        bool IsMinimumFluxUsed { get; set; }
        bool IsOverwriteUsed { get; set; }
        bool IsTargetSettingsUsed { get; set; }
        bool IsColorTargetsUsed { get; set; }
        bool IsResampleDetectorUsed { get; set; }

        int ClearDetector { get; set; }
        int Criterion { get; set; }
        int UseSource { get; set; }
        int UseDetector { get; set; }
        int Boundary { get; set; }
        int StartAt { get; set; }
        int Configuration { get; set; }
        int BitmapFile { get; set; }
        int RaySampling { get; set; }
        int EdgeSampling { get; set; }

        double Target { get; set; }
        double MinimumFlux { get; set; }
        double OverallWeight { get; set; }
        double TotalFlux { get; set; }

        int NumberOfSources { get; }
        string GetSourceAt(int idx);

        int NumberOfDetectors { get; }
        string GetDetectorAt(int idx);

        int NumberOfCriterion { get; }
        string GetCriterionAt(int idx);

        int NumberOfConfigurations { get; }
        string GetConfigurationAt(int idx);

        int NumberOfRaySamplings { get; }
        string GetRaySamplingAt(int idx);

        int NumberOfEdgeSamplings { get; }
        string GetEdgeSamplingAt(int idx);

        int NumberOfBoundaries { get; }
        string GetBoundaryAt(int idx);
    }

    [ComVisible(true)]
    [Guid("2C08E2B5-2D12-44B4-9886-1D12F44A9160")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCOptimizationWizard : INSCWizard
    {
        INSCWizard NSCSettings { get; }
        IWizard CommonSettings { get; }
    }

    [ComVisible(true)]
    [Guid("36702E27-6D71-475D-B3EB-ED06C9DEE2A9")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCBitmapWizard : INSCWizard
    {
        INSCWizard NSCSettings { get; }
        IWizard CommonSettings { get; }

        int NumberOfBitmapFiles { get; }
        string GetBitmapFileAt(int idx);

        IImageData GetPreviewImage();
    }

    [ComVisible(true)]
    [Guid("B3B71B8D-0103-4E30-A8D8-4623E4830C86")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IImageData
    {
        string ImageName { get; }

        int Width { get; }
        int Height { get; }
        int BitsPerPixel { get; }
        int Channels { get; }
        int Stride { get; }
        bool IsRGB { get; }

        byte[] GetRawData();
        void GetRawDataSafe(
            int totalSize,
            int height,
            int width,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In, Out]byte[] Data);

        byte[] GetPixels();
        void GetPixelsSafe(
            int totalSize,
            int height,
            int width,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In, Out]byte[] Data);
    }

    [ComVisible(true)]
    [Guid("4D913223-A453-44F5-9DF0-0C7D74B75555")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCRoadwayLightingWizard : IWizard
    {
        IWizard CommonSettings { get; }

        bool IsNSCRoadwayLightingWizard { get; }
        bool IsSplitRaysUsed { get; set; }
        bool IsScatterRaysUsed { get; set; }
        bool IsUsePolarizationUsed { get; set; }
        bool IsIgnoreErrorsUsed { get; set; }

        int Arrangement { get; set; }
        int Origin { get; set; }
        int NumberOfLanes { get; set; }
        int SurfaceClassification { get; set; }
        int RoadClass { get; set; }
        int StartAt { get; set; }
        int Configuration { get; set; }

        double MountingHeight { get; set; }
        double LongitudinalSpacing { get; set; }
        double LateralOffset { get; set; }
        double LaneWidth { get; set; }
        double OverallWeight { get; set; }

        int NumberOfOrigins { get; }
        string GetOriginAt(int idx);

        int NumberOfConfigurations { get; }
        string GetConfigurationAt(int idx);

        int NumberOfArrangements { get; }
        string GetArrangementAt(int idx);

        int NumberOfClassifications { get; }
        string GetClassificationAt(int idx);

        int NumberOfRoadClasses { get; }
        string GetRoadClassAt(int idx);
    }

    [ComVisible(true)]
    [Guid("29FD5871-6BFA-4F46-B49C-7C39328A06A8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISEQOptimizationWizard : IWizard
    {
        IWizard CommonSettings { get; }

        bool IsSEQOptimizationWizard { get; }
        bool IsDeleteVignetteUsed { get; set; }
        bool IsGlassUsed { get; set; }
        bool IsAirUsed { get; set; }
        bool IsAssumeAxialSymmetryUsed { get; set; }
        bool IsIgnoreLateralColorUsed { get; set; }
        bool IsAddFavoriteOperandsUsed { get; set; }
        bool IsRelativeXWeightUsed { get; set; }

        int Type { get; set; }
        int Data { get; set; }
        int Reference { get; set; }
        int PupilIntegrationMethod { get; set; }
        int Ring { get; set; }
        int Arm { get; set; }
        int Grid { get; set; }
        int Configuration { get; set; }
        int StartAt { get; set; }

        double Obscuration { get; set; }
        double GlassMin { get; set; }
        double GlassMax { get; set; }
        double GlassEdge { get; set; }
        double AirMin { get; set; }
        double AirMax { get; set; }
        double AirEdge { get; set; }
        double RelativeXWeight { get; set; }
        double OverallWeight { get; set; }

        int NumberOfTypes { get; }
        string GetTypeAt(int idx);

        int NumberOfDataTypes { get; }
        string GetDataTypeAt(int idx);

        int NumberOfReferences { get; }
        string GetReferenceAt(int idx);

        int NumberOfPupilIntegrationMethods { get; }
        string GetPupilIntegrationMethodAt(int idx);

        int NumberOfRings { get; }
        string GetRingAt(int idx);

        int NumberOfArms { get; }
        string GetArmAt(int idx);

        int NumberOfGrids { get; }
        string GetGridAt(int idx);

        int NumberOfConfigurations { get; }
        string GetConfigurationAt(int idx);
    }

    //[ComVisible(true)]
    //[Guid("844CD551-A7D9-4E1A-A932-E791422A55D4")]
    //public enum SensitivityTypes
    //{
    //    LowestSensitivity = 0,
    //    LowSensitivity = 1,
    //    ModerateSensitivity = 2,
    //}


    [ComVisible(true)]
    [Guid("0855F7AD-2121-4B43-9BAD-2BC89C84D312")]
    public enum CriterionTypes
    {
        Wavefront = 0,
        Contrast = 1,
        Spot = 2,
        Angular = 3,
    }

    [ComVisible(true)]
    [Guid("6015F006-3C25-4956-96F7-46ED289CEAEB")]
    public enum OptimizationTypes
    {
        RMS = 0,
        PTV = 1,
    }

    [ComVisible(true)]
    [Guid("E93565A6-3CFA-4247-9711-6E3B6FBF262C")]
    public enum ReferenceTypes
    {
        Centroid = 0,
        ChiefRay = 1,
        Unreferenced = 2,
    }

    [ComVisible(true)]
    [Guid("667A4EEC-789C-4070-9CB6-034086213CD8")]
    public enum PupilArmsCount
    {
        Arms_6 = 0,
        Arms_8 = 1,
        Arms_10 = 2,
        Arms_12 = 3,
    }

    [ComVisible(true)]
    [Guid("05206CE6-C478-44D3-B8B3-DFE6BF94366C")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISEQOptimizationWizard2 : IWizard
    {
        IWizard CommonSettings { get; }

        CriterionTypes Criterion { get; set; }
        double SpatialFrequency { get; set; }
        double XSWeight { get; set; }
        double YTWeight { get; set; }
        OptimizationTypes Type { get; set; }
        ReferenceTypes Reference { get; set; }

        bool UseGaussianQuadrature { get; set; }
        bool UseRectangularArray { get; set; }
        int Rings { get; set; }
        PupilArmsCount Arms { get; set; }
        double Obscuration { get; set; }
        int GridSizeNxN { get; set; }
        bool DeleteVignetted { get; set; }

        bool UseGlassBoundaryValues { get; set; }
        double GlassMin { get; set; }
        double GlassMax { get; set; }
        double GlassEdgeThickness { get; set; }

        bool UseAirBoundaryValues { get; set; }
        double AirMin { get; set; }
        double AirMax { get; set; }
        double AirEdgeThickness { get; set; }

        int StartAt { get; set; }
        double OverallWeight { get; set; }
        int ConfigurationNumber { get; set; }
        bool UseAllConfigurations { get; set; }
        int FieldNumber { get; set; }
        bool UseAllFields { get; set; }
        bool AssumeAxialSymmetry { get; set; }
        bool IgnoreLateralColor { get; set; }
        bool AddFavoriteOperands { get; set; }

        bool IsHighManufacturingYieldAvailable { get; }
        bool OptimizeForBestNominalPerformance { get; set; }
        bool OptimizeForManufacturingYield { get; set; }
        //SensitivityTypes ManufacturingYieldWeight { get; set; }
        double ManufacturingYieldWeight { get; set; }
        bool UseMaximumDistortion { get; set; }
        double MaxDistortionPct { get; set; }
    }

    [ComVisible(true)]
    [Guid("9DD3F827-6D2B-4CEB-B116-F5079F53C397")]
    public enum ToleranceVendor
    {
        Asphericon = 0,
        EdmundOptics = 1,
        Generic = 2,
        LaCroix = 3,
        Optimax = 4,
    }

    [ComVisible(true)]
    [Guid("E8DD5563-4271-4934-A417-057B80BE1829")]
    public enum ToleranceGrade
    {
        Commercial = 0,
        Precision = 1,
        HighPrecision = 2,
        CellPhoneLens = 3,
    }

    [ComVisible(true)]
    [Guid("97B4C0EC-6129-4D36-B252-D687A648B8F4")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IToleranceWizard : IWizard
    {
        IWizard CommonSettings { get; }

        bool IsSEQToleranceWizard { get; }
        bool IsSurfaceRadiusUsed { get; set; }
        bool IsSurfaceThicknessUsed { get; set; }
        bool IsSurfaceDecenterXUsed { get; set; }
        bool IsSurfaceDecenterYUsed { get; set; }
        bool IsSurfaceTiltXUsed { get; set; }
        bool IsSurfaceTiltYUsed { get; set; }
        bool IsSurfaceSandAIrregularityUsed { get; set; }
        bool IsSurfaceZernikeIrregularityUsed { get; set; }
        bool IsElementDecenterXUsed { get; set; }
        bool IsElementDecenterYUsed { get; set; }
        bool IsElementTiltXUsed { get; set; }
        bool IsElementTiltYUsed { get; set; }
        bool IsIndexUsed { get; set; }
        bool IsIndexAbbePercentageUsed { get; set; }
        bool IsFocusCompensationUsed { get; set; }

        DefaultAndFringes SurfaceRadiusUnitType { get; set; }
        DefaultAndDegrees SurfaceTiltXUnitType { get; set; }
        DefaultAndDegrees SurfaceTiltYUnitType { get; set; }
        int StartAt { get; set; }
        int StartAtSurface { get; set; }
        int StopAtSurface { get; set; }

        double SurfaceRadius { get; set; }
        double SurfaceRadiusFringes { get; set; }
        double SurfaceThickness { get; set; }
        double SurfaceDecenterX { get; set; }
        double SurfaceDecenterY { get; set; }
        double SurfaceTiltX { get; set; }
        double SurfaceTiltXDegrees { get; set; }
        double SurfaceTiltY { get; set; }
        double SurfaceTiltYDegrees { get; set; }
        double SurfaceSandAIrregularityFringes { get; set; }
        double SurfaceZernikeIrregularityFringes { get; set; }
        double ElementDecenterX { get; set; }
        double ElementDecenterY { get; set; }
        double ElementTiltXDegrees { get; set; }
        double ElementTiltYDegrees { get; set; }
        double Index { get; set; }
        double IndexAbbePercentage { get; set; }
        double TestWavelength { get; set; }

        double SurfaceRadiusPercent { get; set; }

        void SelectTolerancePreset(ToleranceVendor vendor, ToleranceGrade grade);
    }

    [ComVisible(true)]
    [Guid("7B460A95-0155-4DF4-BB9F-D4020DC05D76")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCToleranceWizard : IToleranceWizard
    {
        IToleranceWizard ToleranceSettings { get; }
    }

    [ComVisible(true)]
    [Guid("9E002CFB-3DFC-47B2-9300-48E08F3E6594")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISEQToleranceWizard : IToleranceWizard
    {
        IToleranceWizard ToleranceSettings { get; }
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
