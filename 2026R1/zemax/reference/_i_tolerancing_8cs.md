# File ITolerancing.cs

<a id="_i_tolerancing_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Tolerancing::ITolerancing](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing)
* [ZOSAPI::Tools::Tolerancing::IToleranceNest](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest)
* [ZOSAPI::Tools::Tolerancing::IQuickSensitivity](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity)
* [ZOSAPI::Tools::Tolerancing::ITolerancingParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_parameter)
* [ZOSAPI::Tools::Tolerancing::ITolerancingHistogram](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_histogram.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_histogram)
* [ZOSAPI::Tools::Tolerancing::ITolerancingSummaryStatistics](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_summary_statistics.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_summary_statistics)
* [ZOSAPI::Tools::Tolerancing::ITolerancingColumnMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata)
* [ZOSAPI::Tools::Tolerancing::ITolerancingOperandMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_operand_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_operand_metadata)
* [ZOSAPI::Tools::Tolerancing::ITeziData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tezi_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tezi_data)
* [ZOSAPI::Tools::Tolerancing::IMonteCarloData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_monte_carlo_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_monte_carlo_data)
* [ZOSAPI::Tools::Tolerancing::ISensitivityCompensator](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_compensator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_compensator)
* [ZOSAPI::Tools::Tolerancing::ISensitivityOperandEffect](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_effect.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_effect)
* [ZOSAPI::Tools::Tolerancing::ISensitivityCriterionMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata)
* [ZOSAPI::Tools::Tolerancing::ISensitivityOperandMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_metadata)
* [ZOSAPI::Tools::Tolerancing::ISensitivityData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data)
* [ZOSAPI::Tools::Tolerancing::IToleranceDataViewer](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::Tolerancing](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools.Tolerancing
{
    [ComVisible(true)]
    [Guid("244D8670-437C-45D2-8340-6AECE071123C")]
    public enum SetupModes
    {
        Sensitivity = 0,
        InverseLimit,
        InverseIncrement,
        SkipSensitivity
    }
    [ComVisible(true)]
    [Guid("C2535569-FE55-447B-B402-8587F085549A")]
    public enum SetupPolynomials
    {
        None = 0,
        ThreeMinusTerm,
        FiveMinusTerm,
    }
    [ComVisible(true)]
    [Guid("6B0AEA38-164E-4C8E-8401-2F87B9FB1E45")]
    public enum SetupCaches
    {
        RecomputeAll = 0,
        RecomputeChanged,
        UsePolynomial,
    }
    [ComVisible(true)]
    [Guid("91FDB480-4BF0-40CC-BFA2-DF1D12A05CD7")]
    public enum SetupChanges
    {
        LinearDifference = 0,
        RSSDifference,
    }
    [ComVisible(true)]
    [Guid("19FC0681-ED48-436F-8006-6FCED54FDCAC")]
    public enum Criterions
    {
        NONSEQMeritFunction = 0,
        NONSEQUserScript,

        RMSSpotRadius = 0,
        RMSSpotX,
        RMSSpotY,
        RMSWavefront,
        MeritFunction,
        GeometricMTFAverage,
        GeometricMTFTan,
        GeometricMTFSag,
        DiffMTFAverage,
        DiffMTFTan,
        DiffMTFSag,
        BoresightError,
        RMSAngularRadius,
        RMSAngularX,
        RMSAngularY,
        UserScript,
    }
    [ComVisible(true)]
    [Guid("832E2D39-DE9D-477C-85E0-088D68C49D1B")]
    public enum CriterionComps
    {
        NONSEQOptimizeAll = 0,
        NONSEQNone,
        NONSEQOptimizeAll_OD,

        OptimizeAll_DLS = 0,
        ParaxialFocus,
        None,
        OptimizeAll_OD,
    }
    [ComVisible(true)]
    [Guid("7AB89197-B91B-4B77-B7ED-676304D0AFA4")]
    public enum CriterionFields
    {
        NONSEQUserDefined = 0,

        Y_Symmetric = 0,
        XY_Symmetric,
        UserDefined,
    }
    [ComVisible(true)]
    [Guid("634786EA-70F9-42B9-A794-C04F032E0D61")]
    public enum MonteCarloStatistics
    {
        Normal = 0,
        Uniform,
        Parabolic,
    }

    [ComVisible(true)]
    [Guid("118559A1-0EA0-4F98-A0E2-735D16184D75")]
    public enum MPVTOptions   
    {
        FrontVertex = 0,
        RearVertex = 1,
        FrontMechanicalEdge = 2,
        RearMechanicalEdge = 3,
        UserDefined = 4,
    }

    [Guid("8F8DC755-5010-48C3-89EC-6A3154F2BB43")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITolerancing : ISystemTool
    {
        bool Save(string filename);
        bool Load(string filename);
        bool Reset();

      //  bool TerminateRun();

        string ResultFilename { get; }

        //
        //  Setup Tab
        //
        bool IsForceRayAimingUsed { get; set; }
        bool IsSeperateFieldConfigurationsUsed { get; set; }

        SetupModes SetupMode { get; set; }
        int SetupModeIndex { get; set; }            //  The Index into the list
        int NumberOfSetupModes { get; }             //  The Number of entries in the list
        string GetSetupModeAt(int idx);             //  Get the entry at the given index

        SetupPolynomials SetupPolynomial { get; set; }
        int SetupPolynomialsIndex { get; set; }
        int NumberOfSetupPolynomials { get; }
        string GetSetupPolynomialAt(int idx);

        SetupCaches SetupCache { get; set; }
        int SetupCacheIndex { get; set; }
        int NumberOfSetupCaches { get; }
        string GetSetupCacheAt(int idx);

        SetupChanges SetupChange { get; set; }
        int SetupChangeIndex { get; set; }
        int NumberOfSetupChanges { get; }
        string GetSetupChangeAt(int idx);

        int SetupCore { get; set; }
        int SetupCoreIndex { get; set; }
        int NumberOfSetupCores { get; }
        string GetSetupCoreAt(int idx);
        //
        //  Criteria Tab
        //
        double MaximumCriteria { get; set; }
        double MTFFrequency { get; set; }

        Criterions Criterion { get; set; }
        int CriterionIndex { get; set; }
        int NumberOfCriteria { get; }
        string GetCriterionAt(int idx);

        int CriterionSampling { get; set; }
        int CriterionSamplingIndex { get; set; }
        int NumberOfCriterionSamplings { get; }
        string GetCriterionSampleAt(int idx);

        CriterionComps CriterionComp { get; set; }
        int CriterionCompIndex { get; set; }
        int NumberOfCriterionComps { get; }
        string GetCriterionCompAt(int idx);

        int CriterionConfiguration { get; set; }
        int CriterionConfigurationIndex { get; set; }
        int NumberOfCriterionConfigurations { get; }
        string GetCriterionConfigurationAt(int idx);

        CriterionFields CriterionField { get; set; }
        int CriterionFieldIndex { get; set; }
        int NumberOfCriterionFields { get; }
        string GetCriterionFieldAt(int idx);

        int CriterionCycle { get; set; }
        int CriterionCycleIndex { get; set; }
        int NumberOfCriterionCycles { get; }
        string GetCriterionCycleAt(int idx);

        int CriterionScript { get; set; }
        int CriterionScriptIndex { get; set; }
        int NumberOfCriterionScripts { get; }

        string GetCriterionScriptAt(int idx);

        //
        //  Monte Carlo Tab
        //
        int NumberOfRuns { get; set; }
        int NumberToSave { get; set; }
        bool IsSaveBestWorstUsed { get; set; }
        bool IsOverlayGraphicsUsed { get; set; }
        string FilePrefix { get; set; }

        MonteCarloStatistics MonteCarloStatistic { get; set; }
        int MonteCarloStatisticIndex { get; set; }
        int NumberOfMonteCarloStatistics { get; }
        string GetMonteCarloStatisticAt(int idx);
        //
        //  Display Tab
        //
        bool IsShowDescriptionsUsed { get; set; }
        bool IsShowCompensatorsUsed { get; set; }
        bool IsHideAllButWorstUsed { get; set; }
        string OutputFile { get; set; }

        int DisplayShowWorst { get; set; }
        int DisplayShowWorstIndex { get; set; }
        int NumberOfDisplayShowWorsts { get; }
        string GetDisplayShowWorstAt(int idx);
        [Obsolete("The property UseDataRetention is no longer implemented. Data retention will always be utilized when running tolerancing.", false)]
        bool UseDataRetention { get; set; }
        bool OpenDataViewer { get; set; }
        bool SaveTolDataFile { get; set; }
        string TolDataFile { get; set; }

        void SetPartialMCTMode();

        // Common for all HPC enabled tools
        bool IsHPCEnabled { get; }
        double HPCEstimatedTimeS { get; }
        double HPCRemainingTimeS { get; }
        double HPCTimeToStartS { get; }
        int HPCQueuePosition { get; }
        HPCRunState HPCState { get; }
        bool HPCHasTimeEstimate { get; }
        bool EstimateHPCTime();

        // Specific to Tolerancing
        string BestWorstOutputFolder { get; }
    }


    [ComVisible(true)]
    [Guid("60938BCE-3CE1-4F01-AE51-A7A8D51E1A3B")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IToleranceNest : ISystemTool
    {
        void AddGroup(int firstSurface, int lastSurface, MPVTOptions mpvtOption,
                       double PivotX, double PivotY, double PivotZ,
                       double DecenterX, double DecenterY, double DecenterZ,
                       double TiltX, double TiltY, double TiltZ, bool PivotCheck);
        bool IsReferenceToDecenteredApertureValid(int firstSurface, int lastSurface);

        MPVTOptions MPVTOption { get; set; }
        int StartSurf { get; set; }
        int EndSurf { get; set; }
        double PivotX { get; set; }
        double PivotY { get; set; }
        double PivotZ { get; set; }
        double DecenterX { get; set; }
        double DecenterY { get; set; }
        double DecenterZ { get; set; }
        double TiltX { get; set; }
        double TiltY { get; set; }
        double TiltZ { get; set; }
        bool PivotCheck { get; set; }
    }


    [Guid("8A35CD71-571F-4E96-B224-3B68DEE66227")]
    [ComVisible(true)]
    public enum QSCriterions
    {
        RMSSpotRadius = 0,
        RMSSpotX = 1,
        RMSSpotY = 2,
        RMSWavefront = 3,
        BoresightError = 4,
        RMSAngularRadius = 5,
        RMSAngularX = 6,
        RMSAngularY = 7,
}

    [Guid("4E54392B-D4DB-4B46-BB1A-A18ECDAE3747")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IQuickSensitivity : ISystemTool
    {
        QSCriterions Criterion { get; set; }
        CriterionFields Field { get; set; }
        int Sampling { get; set; }
        int Configuration { get; set; }

        string ResultsFile { get; }
        int NumberOfConfigurations { get; }
        int MaxSampling { get; }

        void LoadSettings(string settingsFile);
        void SaveSettings(string settingsFile);
        void ResetSettings();

        bool ValidateCompensators();

        string ZTDFile { get; set; }
    }

    [Guid("75A5C485-9625-4630-9401-788AAC4EF4EA")]
    [ComVisible(true)]
    public enum TolerancingParameterName
    {
        Undefined = -1,                 // Core ID               mapped in ToleranceSeries::getAutonameForParameterCategory from
        AdjustSurface          = 20572, // IDS_FED_ADJUST        TolParameterCategory::ADJUSTSURFACE
        Code                   = 20578, // IDS_FED_CODE          TolParameterCategory::CODEDE
        CommentField           = 20004, // IDS_FED_COMMENT       TolParameterCategory::COMMENTFIELD
        CompensatorSetting     = 11400, // IDS_DLG_COMP          TolParameterCategory::COMPSETTING
        ConfigurationNumber    = 16304, // IDS_GEN_CONFIG        TolParameterCategory::CONFIGNUMBER
        ConfigurationParameter = 20580, // IDS_FED_CONFIG_NUMBER TolParameterCategory::CONFIGPARAMET
        Data                   = 20586, // IDS_FED_DATA          TolParameterCategory::DATAFLAG
        FieldNumber            = 20683, // IDS_FED_FIELD         TolParameterCategory::FIELDNUMBER
        FieldSetting           = 50027, // IDUS_FIELDS           TolParameterCategory::FIELDSETTING
        Layer                  = 20574, // IDS_FED_LAYR          TolParameterCategory::LAYER
        MaximumNumber          = 20576, // IDS_FED_MAX_NUMBER    TolParameterCategory::MAXNUMBER
        MaximumValue           = 20569, // IDS_FED_MAX           TolParameterCategory::MAXIMUMVALUE
        MinimumNumber          = 20577, // IDS_FED_MIN_NUMBER    TolParameterCategory::MINNUMBERER
        MinimumValue           = 20568, // IDS_FED_MIN           TolParameterCategory::MINIMUMVALUE
        NominalValue           = 20566, // IDS_FED_NOMINAL       TolParameterCategory::NOMINALVALUE
        Object                 = 20585, // IDS_FED_OBJECT        TolParameterCategory::OBJECT
        ParameterNumber        = 20573, // IDS_FED_PAR_NUMBER    TolParameterCategory::PARAMETERNUMBER
        RowNumber              = 20579, // IDS_FED_ROW           TolParameterCategory::ROWWNUMBER
        SamplingSetting        = 20694, // IDS_FED_SAMPLING      TolParameterCategory::SAMPSETTING
        Surface                = 20567, // IDS_FED_SURF          TolParameterCategory::SURFACE
        Surface1               = 20570, // IDS_FED_SURF1         TolParameterCategory::SURFACE1
        Surface2               = 20571, // IDS_FED_SURF2         TolParameterCategory::SURFACE2
        TdeRowNumber           = 75418, // IDS_TOLERANCE_TDE_ROW TolParameterCategory::TDEROW
        Units                  = 20874, // IDS_FED_UNITS         TolParameterCategory::UNITS
        Statistics             = 20875, // IDS_FED_STATISTICS    TolParameterCategory::STATISTICS
        PivotPointOption       = 20876, //IDS_FED_MPVT_PIVOT_POINT TolParameterCategory::PIVOTPOINTOPTION
    }

    [Guid("A9A7A789-1C2B-4D5E-A523-B00B650A61F0")]
    [ComVisible(true)]
    public enum TolerancingColumnName
    {
        Unknown = -1,

        BackFocusChange          = 75417, //             IDS_TOLERANCE_BACK_FOCUS_CHANGE
        BoresightError           = 11971, // CRT_BORS=11 IDS_DLG_BORESIGHT_ERROR
        MtfDiffractionAverage    = 11968, // CRT_MTFA= 8 IDS_DLG_DIFF_MTF_AVG
        MtfDiffractionSagittal   = 11970, // CRT_MTFS=10 IDS_DLG_DIFF_MTF_SAG
        MtfDiffractionTangential = 11969, // CRT_MTFT= 9 IDS_DLG_DIFF_MTF_TAN
        MtfGeometricAverage      = 11965, // CRT_GTFA= 5 IDS_DLG_GEOM_MTF_AVG
        MtfGeometricSaggital     = 11967, // CRT_GTFS= 7 IDS_DLG_GEOM_MTF_SAG
        MtfGeometricTangential   = 11966, // CRT_GTFT= 6 IDS_DLG_GEOM_MTF_TAN
        RmsAngularRadius         = 11972, // CRT_ANGR=12 IDS_DLG_RMS_ANGULAR_RADIUS
        RmsAngularX              = 11973, // CRT_ANGX=13 IDS_DLG_RMS_ANGULAR_X
        RmsAngularY              = 11974, // CRT_ANGY=14 IDS_DLG_RMS_ANGULAR_Y
        RmsSpotRadius            = 11961, // CRT_RMSR= 0 IDS_DLG_RMS_SPOT_RADIUS
        RmsSpotX                 = 11962, // CRT_RMSX= 1 IDS_DLG_RMS_SPOT_X
        RmsSpotY                 = 11963, // CRT_RMSY= 2 IDS_DLG_RMS_SPOT_Y
        RmsWavefrontError        = 11964, // CRT_RMSW= 3 IDS_DLG_RMS_WAVEFRONT
        UserMeritFunction        = 11959, // CRT_MFCN= 4 IDS_DLG_MERIT_FUNCTION
        UserScript               = 11960, // CRT_SCRI=15 IDS_DLG_USER_SCRIPT
    }

    [Guid("F7A872D6-8FD3-4EFF-8355-61660116412A")]
    [ComVisible(true)]
    public enum TolerancingOperand
    {
        Unknown = -1,
        CEDV = 32, // TOL_CEDV
        CMCO = 33, // TOL_CMCO
        CNPA = 47, // TOL_CNPA
        CNPS = 48, // TOL_CNPS
        COMM = 42, // TOL_COMM
        COMP = 30, // TOL_COMP
        CPAR = 31, // TOL_CPAR
        NULL =  0, // TOL_NULL
        SAVE = 29, // TOL_SAVE
        SEED = 41, // TOL_SEED
        STAT = 34, // TOL_STAT
        TABB = 27, // TOL_TABB
        TCEO = 45, // TOL_TCEO
        TCIO = 44, // TOL_TCIO
        TCMU = 40, // TOL_TCMU
        TCON =  5, // TOL_TCON
        TCUR =  2, // TOL_TCUR
        TEDV = 15, // TOL_TEDV
        TEDX = 16, // TOL_TEDX
        TEDY = 17, // TOL_TEDY
        TEDR = 55, // TOL_TEDR
        TETX = 18, // TOL_TETX
        TETY = 19, // TOL_TETY
        TETZ = 20, // TOL_TETZ
        TEXI = 28, // TOL_TEXI
        TEZI = 39, // TOL_TEZI
        TFRN =  3, // TOL_TFRN
        TIND = 26, // TOL_TIND
        TIRR = 13, // TOL_TIRR
        TIRX = 11, // TOL_TIRX
        TIRY = 12, // TOL_TIRY
        TMCO = 38, // TOL_TMCO
        TNMA = 46, // TOL_TNMA
        TNPA = 37, // TOL_TNPA
        TNPS = 36, // TOL_TNPS
        TPAI = 43, // TOL_TPAI
        TPAR = 14, // TOL_TPAR
        TRAD =  1, // TOL_TRAD
        TSDI =  6, // TOL_TSDI
        TSDX =  7, // TOL_TSDX
        TSDY =  8, // TOL_TSDY
        TSDR = 56, // TOL_TSDR
        TSTX =  9, // TOL_TSTX
        TSTY = 10, // TOL_TSTY
        TTHI =  4, // TOL_TTHI
        TUDX = 21, // TOL_TUDX
        TUDY = 22, // TOL_TUDY
        TUTX = 23, // TOL_TUTX
        TUTY = 24, // TOL_TUTY
        TUTZ = 25, // TOL_TUTZ
        TWAV = 35, // TOL_TWAV
        TRLX = 49, // TOL_TRLX
        TRLY = 50, // TOL_TRLY
        TRLR = 51, // TOL_TRLR
        TARX = 52, // TOL_TARX
        TARY = 53, // TOL_TARY
        TARR = 54, // TOL_TARR
        ISOA = 57, // TOL_ISOA
        ISOB = 58, // TOL_ISOB
        ISOC = 59, // TOL_ISOC
        ISOD = 60, // TOL_ISOD
        MPVT = 61, // TOL_MPVT
        NEST = 62, // TOL_FIXY
    }

    [Guid("7DEFB447-D409-45B1-9D21-C5454C066EFD")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITolerancingParameter
    {
        TolerancingParameterName Name { get; }

        bool IsDouble { get; }

        bool IsInt { get; }

        bool IsString { get; }

        double DoubleValue { get; }

        int IntValue { get; }

        string StringValue { get; }
    }

    [Guid("9AF83B2D-DC36-4FED-B0BA-55616F3DE57E")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITolerancingHistogram
    {
        int NumberOfBins { get; }

        Common.IVectorData BinCounts { get; }

        Common.IVectorData BinValues { get; }

        double Underflow { get; }

        double Overflow { get; }
    }

    [Guid("2C1F0488-B010-4A7A-AEEB-2962317B6B57")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITolerancingSummaryStatistics
    {
        double Minimum { get; }

        double Maximum { get; }

        double Mean { get; }

        double SampleStandardDeviation { get; }

        double PopulationStandardDeviation { get; }

        double Variance { get; }

        double SampleError { get; }

        int SampleSize { get; }

        ITolerancingHistogram Histogram { get; }
    }

    [Guid("F9F70FFC-02AE-4E4D-92E5-06C3F1378C76")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITolerancingColumnMetadata
    {
        TolerancingColumnName Name { get; }


        int NumberOfParameters { get; }

        ITolerancingParameter GetParameter(int index);

        ITolerancingSummaryStatistics SummaryStatistics { get; }

        bool IsOperand { get; }

        TolerancingOperand GetOperandType();

        ITeziData AsTeziData();
    }

    [Guid("E499E107-AB5A-4711-B34A-1F072C246968")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITolerancingOperandMetadata : ITolerancingColumnMetadata
    {
        TolerancingOperand OperandType { get; }
    }

    public interface ITeziData : ITolerancingOperandMetadata
    {
        Common.IMatrixData Coefficients { get; }
    }

    [Guid("D39BB164-F954-4896-BC18-36E38E1B8AE3")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMonteCarloData
    {
        Common.IMatrixData Values { get; }

        ITolerancingColumnMetadata GetMetadata(int columnIndex);
    }


    [Guid("A02F05C9-2DD9-425A-BC9D-DBBBEFE7A177")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISensitivityCompensator : ITolerancingOperandMetadata
    {
        double Minimum { get; }

        double Maximum { get; }

        double Mean { get; }

        double PopulationStandardDeviation { get; }

        double SampleStandardDeviation { get; }
    }

    [Guid("D4402763-753A-4C86-8FEE-FD0FD5C150A0")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISensitivityOperandEffect
    {
        double EstimatedChangeMinimum { get; }

        double EstimatedChangeMaximum { get; }
    }

    [Guid("2241D3DB-C756-4397-A065-C9CB26A28E37")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISensitivityCriterionMetadata
    {
        Criterions Name { get; }

        double NominalValue { get; }

        int NumberOfOperands { get; }

        ISensitivityOperandEffect GetEffectByOperand(int operandIndex);
    }

    [Guid("4BD199B4-7195-405F-AAB7-C877F3D11081")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISensitivityOperandMetadata : ITolerancingOperandMetadata
    {
        double Minimum { get; }

        double Maximum { get; }

        string Comment { get; }

        int NumberOfCriteria { get; }

        ISensitivityOperandEffect GetEffectOnCriterion(int criterionIndex);
    }

    [Guid("82B5152F-8132-4DBB-8C7D-154E198D439E")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISensitivityData
    {
        // Not available.

        // Not needed.

        int NumberOfCriteria { get; }

        ISensitivityCriterionMetadata GetCriterion(int index);

        int NumberOfCompensators { get; }

        ISensitivityCompensator GetCompensator(int index);

        int NumberOfResultOperands { get; }

        ISensitivityOperandMetadata GetOperand(int index);
    }

    [Guid("18FA6512-6B61-4BCB-8875-3711E91289A0")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IToleranceDataViewer : ISystemTool
    {
        IMonteCarloData MonteCarloData { get; }

        ISensitivityData SensitivityData { get; }

        string Summary { get; }

        string FileName { get; set; }

        string[] GetToleranceFiles();

        void UseSystemTolerances();
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