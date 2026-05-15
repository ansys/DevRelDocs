# File InterfacesSE.cs

<a id="_interfaces_s_e_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::SystemData::ISystemData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_system_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_system_data)
* [ZOSAPI::SystemData::ISurfaceSelection](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_surface_selection.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_surface_selection)
* [ZOSAPI::SystemData::ISDApertureData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data)
* [ZOSAPI::SystemData::ISDEnvironmentData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data)
* [ZOSAPI::SystemData::ISDPolarizationData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_polarization_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_polarization_data)
* [ZOSAPI::SystemData::ISDAdvancedData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data)
* [ZOSAPI::SystemData::ISDRayAimingData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data)
* [ZOSAPI::SystemData::ISDMaterialCatalogData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data)
* [ZOSAPI::SystemData::ISDTitleNotes](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes)
* [ZOSAPI::SystemData::ISDFiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files)
* [ZOSAPI::SystemData::ISDUnitsData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data)
* [ZOSAPI::SystemData::IWavelengths](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths)
* [ZOSAPI::SystemData::IWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength)
* [ZOSAPI::SystemData::IFields](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields)
* [ZOSAPI::SystemData::IField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field)
* [ZOSAPI::SystemData::ISDNonSeqData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_non_seq_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_non_seq_data)
* [ZOSAPI::SystemData::ISDNamedFilters](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_named_filters.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_named_filters)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::SystemData](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis;
using ZOSAPI.Editors;

namespace ZOSAPI.SystemData
{
    [ComVisible(true)]
    [Guid("DA8732C1-4A73-4A8B-9561-ECE9984FB5F9")]
    public enum ZemaxSystemUnits
    {
        Millimeters = 0,
        Centimeters = 1,
        Inches = 2,
        Meters = 3,
    }

    [ComVisible(true)]
    [Guid("B09F226B-903B-4717-A667-30A67DED63DD")]
    public enum ZemaxSourceUnits
    {
        Watts = 0,
        Lumens = 1,
        Joules = 2,
    }

    [ComVisible(true)]
    [Guid("571D57C6-62EA-411D-AD66-8CE2D140ADCF")]
    public enum ZemaxAnalysisUnits
    {
        WattsPerMMSq = 0,
        WattsPerCMSq = 1,
        WattsPerinSq = 2,
        WattsPerMSq = 3,
        WattsPerftSq = 4,
    }

    [ComVisible(true)]
    [Guid("73923DE5-F257-4C53-A522-AE13C42CC1AD")]
    public enum ZemaxUnitPrefix
    {
        Femto = 0,
        Pico = 1,
        Nano = 2,
        Micro = 3,
        Milli = 4,
        None = 5,
        Kilo = 6,
        Mega = 7,
        Giga = 8,
        Tera = 9,
    }

    [ComVisible(true)]
    [Guid("A8505FB6-404C-4C3F-85BD-9C8FC28DB153")]
    public enum ZemaxAfocalModeUnits
    {
        Microradians = 0,
        Milliradians = 1,
        Radians = 2,
        ArcSeconds = 3,
        ArcMinutes = 4,
        Degrees = 5,
    }

    [ComVisible(true)]
    [Guid("2FF52760-7CF4-4CD3-929D-E6DF5A900094")]
    public enum ZemaxMTFUnits
    {
        CyclesPerMillimeter,
        CyclesPerMilliradian,
    }

    [ComVisible(true)]
    [Guid("6B6A550B-6E46-4ABA-8808-ABC7F7B4B21F")]
    public enum ZemaxApertureType
    {
        EntrancePupilDiameter = 0,
        ImageSpaceFNum = 1,
        ObjectSpaceNA = 2,
        FloatByStopSize = 3,
        ParaxialWorkingFNum = 4,
        ObjectConeAngle = 5,
    }

    [ComVisible(true)]
    [Guid("4B708235-89A5-4454-A623-30407587BE8F")]
    public enum ZemaxApodizationType
    {
        Uniform = 0,
        Gaussian = 1,
        CosineCubed = 2,
    }

    [ComVisible(true)]
    [Guid("121F812D-CB57-4AAE-A57A-9F080412BFC0")]
    public enum WavelengthPreset
    {
        FdC_Visible = 0,
        Photopic_Bright = 1,
        Scotopic_Dark = 2,
        HeNe_0p6328 = 3,
        HeNe_0p5438 = 4,
        Argon_0p4880 = 5,
        Argon_0p5145 = 6,
        NDYAG_1p0641 = 7,
        NDGlass_1p054 = 8,
        CO2_10p60 = 9,
        CrLiSAF_0p840 = 10,
        TiAl203_0p760 = 11,
        Ruby_0p6943 = 12,
        HeCadmium_0p4416 = 13,
        HeCadmium_0p3536 = 14,
        HeCadmium_0p3250 = 15,
        t_1p014 = 16,
        r_0p707 = 17,
        C_0p656 = 18,
        d_0p587 = 19,
        F_0p486 = 20,
        g_0p436 = 21,
        i_0p365 = 22,
        Fp_0p365 = 23,
        e_0p54607 = 24,
        Cp_0p6438469 = 25,
        FpeCp_Visible = 26,
        THz_193p10 = 27,
    }

    [ComVisible(true)]
    [Guid("288DEACD-044A-400B-B254-7584E143A260")]
    public enum QuadratureSteps
    {
        S2,
        S4,
        S6,
        S8,
        S10,
        S12,
    }

    [ComVisible(true)]
    [Guid("776B1A26-FB34-4606-A763-EE0B84F2A344")]
    public enum FieldType
    {
        Angle = 0,
        ObjectHeight = 1,
        ParaxialImageHeight = 2,
        RealImageHeight = 3,
        TheodoliteAngle = 4,
    }

    [ComVisible(true)]
    [Guid("788D255F-6050-45F0-9305-617AF47D00CD")]
    public enum PolarizationMethod
    {
        XAxisMethod = 0,
        YAxisMethod = 1,
        ZAxisMethod = 2,
    }

    [ComVisible(true)]
    [Guid("E993CDE2-3DF3-4D62-B58F-30A26D5D0119")]
    public enum ReferenceOPDSetting
    {
        Absolute = 0,
        Infinity = 1,
        ExitPupil = 2,
        Absolute2 = 3,
    }

    [ComVisible(true)]
    [Guid("7F8F44BF-08E5-4794-8396-D64C5429A741")]
    public enum ParaxialRaysSetting
    {
        ConsiderCoordinateBreaks = 0,
        IgnoreCoordinateBreaks = 1,
    }

    [ComVisible(true)]
    [Guid("953819C5-3D69-4F56-9CE4-317E085ED252")]
    public enum HuygensIntegralSettings
    {
        Auto = 0,
        Planar = 1,
        Spherical = 2,
    }

    [ComVisible(true)]
    [Guid("D5B5088C-C726-4A7C-8FCB-9B04198EEDB2")]
    public enum FNumberComputationType
    {
        TracingRays = 0,
        PupilSizePosition = 1,
    }

    [ComVisible(true)]
    [Guid("224BD957-3C13-4538-A18D-1DB94C61A6A2")]
    public enum RayAimingMethod
    {
        Off = 0,
        Paraxial = 1,
        Real = 2,
    }

    [ComVisible(true)]
    [Guid("3e095c1d-2996-4d7b-97a3-a3baaee797c1")]
    public enum RayAimingType
    {
        Heuristic = 0,
        Optimize = 1,
    }

    [ComVisible(true)]
    [Guid("038F1C7D-A0D5-407D-B0A8-4EF52B8E7992")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISystemData
    {
        ISDApertureData Aperture { get; }
        IWavelengths Wavelengths { get; }
        IFields Fields { get; }
        ISDEnvironmentData Environment { get; }
        ISDPolarizationData Polarization { get; }
        ISDAdvancedData Advanced { get; }
        ISDRayAimingData RayAiming { get; }
        ISDMaterialCatalogData MaterialCatalogs { get; }
        ISDTitleNotes TitleNotes { get; }
        ISDFiles Files { get; }
        ISDUnitsData Units { get; }

        ISDNonSeqData NonSequentialData { get; }
        ISDNamedFilters NamedFiltersData { get; }
    }

    [ComVisible(true)]
    [Guid("3E7ED240-5AA3-42C6-B6D9-3FB8B4BF822D")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISurfaceSelection
    {
        int FirstAllowedSurface { get; }
        int LastAllowedSurface { get; }
        int ImageSurface { get; }
        int StopSurface { get; }

        int GetSelectedSurface();
        bool SetSelectedSurface(int Surface);

        bool UseObjectSurface();
        bool UseStopSurface();
        bool UseImageSurface();
    }

    [ComVisible(true)]
    [Guid("5ED309B8-E522-48CE-9481-521E00E71273")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDApertureData
    {
        ZemaxApertureType ApertureType { get; set; }
        double ApertureValue { get; set; }
        ZemaxApodizationType ApodizationType { get; set; }
        double ApodizationFactor { get; set; }
        bool ApodizationFactorIsUsed { get; }
        double SemiDiameterMargin { get; set; }
        double SemiDiameterMarginPct { get; set; }
        ISurfaceSelection GCRS { get; }
        bool TelecentricObjectSpace { get; set; }
        bool AFocalImageSpace { get; set; }
        bool IterateSolvesWhenUpdating { get; set; }
        bool FastSemiDiameters { get; set; }
        bool CheckGRINApertures { get; set; }

    }

    [ComVisible(true)]
    [Guid("FAABD3A3-C146-4723-A7B6-A93BA1D158A5")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDEnvironmentData
    {
        bool AdjustIndexToEnvironment { get; set; }
        double Temperature { get; set; }
        double Pressure { get; set; }
    }

    [ComVisible(true)]
    [Guid("3D86558B-38C6-44E2-9D8A-A4A6AA52850E")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDPolarizationData
    {
        bool ConvertThinFilmPhaseToRayEquivalent { get; set; }
        bool Unpolarized { get; set; }
        double Jx { get; set; }
        double Jy { get; set; }
        double XPhase { get; set; }
        double YPhase { get; set; }
        PolarizationMethod Method { get; set; }
    }

    [ComVisible(true)]
    [Guid("3FC64148-0E27-46B7-8101-D554D385D845")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDAdvancedData
    {
        ReferenceOPDSetting ReferenceOPD { get; set; }
        ParaxialRaysSetting ParaxialRays { get; set; }
        FNumberComputationType FNumMethod { get; set; }
        bool DontPrintCoordinateBreakData { get; set; }
        bool TurnOffThreading { get; set; }
        bool OPDModulo2PI { get; set; }
        bool IncludeCalculatedDataInSessionFile { get; set; }
        bool IncludeToleranceDataInSessionFile { get; set; }

        HuygensIntegralSettings HuygensIntegralMethod { get; set; }
    }

    [ComVisible(true)]
    [Guid("61D96BC4-158B-41D8-8CDC-95068A3E9E57")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDRayAimingData
    {
        RayAimingMethod RayAiming { get; set; }
        RayAimingType Method { get; set; }
        bool UseRayAimingCache { get; set; }
        bool UseRobustRayAiming { get; set; }
        bool ScalePupilShiftFactorsByField { get; set; }
        bool AutomaticallyCalculatePupilShiftsIsChecked { get; set; }
        bool UseEnhancedRayAiming { get; set; }
        bool UseAdvancedConvergence { get; set; }
        bool UseFallBackSearchDuringCacheSetup { get; set; }
        double PupilShiftX { get; set; }
        double PupilShiftY { get; set; }
        double PupilShiftZ { get; set; }
        double PupilCompressX { get; set; }
        double PupilCompressY { get; set; }
        int NumStepsCacheSetup { get; set; }
    }

    [ComVisible(true)]
    [Guid("3543D3F3-16ED-4B9A-B033-9CDD7FC95554")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDMaterialCatalogData
    {
        string[] GetCatalogsInUse();
        string[] GetAvailableCatalogs();
        string[] GetMaterialsInCatalog(string catalog);
        bool IsCatalogInUse(string catalog);
        bool RemoveCatalog(string catalog);
        bool AddCatalog(string catalog);
    }

    [ComVisible(true)]
    [Guid("731B798F-1126-45FB-890E-632ABED92BC6")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDTitleNotes
    {
        string Title { get; set; }
        string Notes { get; set; }
        string Author { get; set; }
    }


    [ComVisible(true)]
    [Guid("FF41D6CA-DE03-43ED-BF29-4FC2B3E4EF57")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDFiles
    {
        string[] GetCoatingFiles();
        string CoatingFile { get; set; }
        string[] GetScatterProfiles();
        string ScatterProfile { get; set; }
        string[] GetABgDataFiles();
        string ABgDataFile { get; set; }
        string[] GetGradiumProfiles();
        string GradiumProfile { get; set; }

        void ReloadFiles();
    }

    [ComVisible(true)]
    [Guid("8DEC3467-C25E-4E82-8A95-6A6BE7592DCC")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDUnitsData
    {
        ZemaxSystemUnits LensUnits { get; set; }
        ZemaxUnitPrefix SourceUnitPrefix { get; set; }
        ZemaxSourceUnits SourceUnits { get; set; }
        ZemaxUnitPrefix AnalysisUnitPrefix { get; set; }
        ZemaxAnalysisUnits AnalysisUnits { get; set; }
        ZemaxAfocalModeUnits AfocalModeUnits { get; set; }
        ZemaxMTFUnits MTFUnits { get; set; }
        bool UseLensUnitsForCAD { get; set; }
        ZemaxSystemUnits CADUnits { get; set; }
    }

    [Guid("8B8C12B1-F85D-4F3A-B309-80C60AFD48AA")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IWavelengths
    {
        int NumberOfWavelengths { get; }

        IWavelength GetWavelength(int position);
        IWavelength AddWavelength(double Wavelength, double Weight);
        bool RemoveWavelength(int position);

        bool SelectWavelengthPreset(WavelengthPreset preset);
        bool GaussianQuadrature(double minWave, double maxWave, QuadratureSteps numSteps);
    }

    [Guid("DC212171-DBF3-42EC-A727-B70D2677D611")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IWavelength
    {
        int WavelengthNumber { get; }

        bool IsActive { get; }
        bool IsPrimary { get; }
        double Wavelength { get; set; }
        double Weight { get; set; }

        void MakePrimary();
    }

    [ComVisible(true)]
    [Guid("A17FB7E8-87F5-43F0-AAA1-8FC85143F356")]
    public enum FieldNormalizationType
    {
        Radial = 0,
        Rectangular,
    }

    [ComVisible(true)]
    [Guid("9E8D27F5-8575-450A-8E89-A0B8BA362A30")]
    public enum FieldPattern
    {
        UniformY = 0,
        EqualAreaY,
        UniformX,
        EqualAreaX,
        Grid,
        UniformRadial,
        EqualAreaRadial,
    }

    [ComVisible(true)]
    [Guid("A2F97C46-74DF-473E-9481-FAA807E19EBD")]
    public enum FieldColumn
    {
        Comment = 0,
        X = 1,
        Y = 2,
        Weight = 3,
        VDX = 4,
        VDY = 5,
        VCX = 6,
        VCY = 7,
        TAN = 8,
        [Obsolete("Use TAN")]
        VAN = 8,
    }

    [Guid("EE58E697-9A2A-49E5-8AF2-36269BDF170E")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IFields
    {
        int NumberOfFields { get; }

        IField GetField(int position);

        IField AddField(double X, double Y, double Weight);
        bool RemoveField(int position);

        void SetVignetting();
        void ClearVignetting();

        FieldType GetFieldType();
        void SetFieldType(FieldType type);
        FieldNormalizationType Normalization { get; set; }

        [Obsolete("This method is deprecated - use ApplyFieldWizard instead")]
        bool MakeEqualAreaFields(int numberOfFields, double maximumField);

        IMessage ApplyFieldWizard(
            FieldPattern pattern,
            int numberOfYFields, double maxFieldY,
            int numberOfXFields, double maxFieldX,
            int startAt, bool overwrite,
            bool includePickups);

        IField InsertFieldAt(int fieldNumber);
        bool DeleteFieldAt(int fieldNumber);
        int DeleteFieldsAt(int fieldNumber, int numberOfFields);
        int DeleteAllFields();

        IMessage ConvertToFieldType(FieldType type);

    }

    [Guid("56AA7E6D-E7B6-4685-B720-576ADC466932")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IField
    {
        bool IsActive { get; }
        int FieldNumber { get; }

        double X { get; set; }
        double Y { get; set; }
        double Weight { get; set; }
        double VDX { get; set; }
        double VDY { get; set; }
        double VCX { get; set; }
        double VCY { get; set; }
        [Obsolete("Use TAN instead")]
        double VAN { get; set; }
        double TAN { get; set; }
        string Comment { get; set; }

        SolveType XSolve { get; }
        ISolveData GetXSolveData();
        SolveStatus SetXPickup(int fromField, FieldColumn fromColumn, double scale, double offset);
        SolveStatus SetXFixed();

        SolveType YSolve { get; }
        ISolveData GetYSolveData();
        SolveStatus SetYPickup(int fromField, FieldColumn fromColumn, double scale, double offset);
        SolveStatus SetYFixed();

        ISolveData GetSolveData(FieldColumn forColumn);
        SolveStatus SetPickup(FieldColumn forColumn, int fromField, FieldColumn fromColumn, double scale, double offset);
        SolveStatus SetFixed(FieldColumn forColumn);

        bool Ignore { get; set; }
    }

    [Guid("9855725C-3492-4050-A229-48E3D5327B3F")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDNonSeqData
    {
        int MaximumIntersectionsPerRay { get; set; }
        int MaximumSegmentsPerRay { get; set; }
        int MaximumNestedTouchingObjects { get; set; }
        int MaximumSourceFileRaysInMemory { get; set; }
        double MinimumRelativeRayIntensity { get; set; }
        double MinimumAbsoluteRayIntensity { get; set; }
        double GlueDistanceInLensUnits { get; set; }
        double MissedRayDrawDistanceInLensUnits { get; set; }
        bool SimpleRaySplitting { get; set; }
        bool RetraceSourceRaysUponFileOpen { get; set; }

    }

    [Guid("7BB031C2-82A1-478F-AE4E-5CB0C332710F")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISDNamedFilters
    {
        string NamedFilters { get; set; }
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
