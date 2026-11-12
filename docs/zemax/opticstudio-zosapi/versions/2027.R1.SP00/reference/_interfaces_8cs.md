# File Interfaces.cs

<a id="_interfaces_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::IZOSAPI\_Connection](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection)
* [ZOSAPI::IZOSAPI\_Callback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback)
* [ZOSAPI::IZAPI\_BaseObject](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object)
* [ZOSAPI::IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)
* [ZOSAPI::IExtensionTools](interface_z_o_s_a_p_i_1_1_i_extension_tools.md#interface_z_o_s_a_p_i_1_1_i_extension_tools)
* [ZOSAPI::IOpticalSystem](interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)
* [ZOSAPI::ISTARSubsystem](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem)
* [ZOSAPI::ISTARTools](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools)
* [ZOSAPI::ISTARMaterials](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials)
* [ZOSAPI::IDesignParameterData](interface_z_o_s_a_p_i_1_1_i_design_parameter_data.md#interface_z_o_s_a_p_i_1_1_i_design_parameter_data)
* [ZOSAPI::IDesignParameters](interface_z_o_s_a_p_i_1_1_i_design_parameters.md#interface_z_o_s_a_p_i_1_1_i_design_parameters)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis;
using ZOSAPI.Common;
using ZOSAPI.Editors.LDE;
using ZOSAPI.Editors.MCE;
using ZOSAPI.Editors.MFE;
using ZOSAPI.Editors.NCE;
using ZOSAPI.Editors.TDE;
using ZOSAPI.SystemData;
using ZOSAPI.NSC;
using ZOSAPI.Tools;
using ZOSAPI.Tools.General;

namespace ZOSAPI
{

    public delegate void OpticalSystemStatusChangedHandler(int systemId, string newStatus);

    [ComVisible(true)]
    [Guid("3275B66B-B818-4993-8746-A698168B080E")]
    public enum SystemType
    {
        Sequential,
        NonSequential
    }

    [ComVisible(true)]
    [Guid("C17EAD04-A8DD-4985-8DD1-0ACE742F899F")]
    public enum LicenseStatusType
    {
        Unknown = 0,
        KeyNotWorking,
        NewLicenseNeeded,
        StandardEdition,
        ProfessionalEdition,
        PremiumEdition,
        TooManyInstances,
        NotAuthorized,
        KeyNotFound,
        KeyExpired,
        //NoSeatsAvailable,
        Timeout,
        InstanceConflict,
        OpticsViewer,
        OpticStudioHPCEdition,
        EnterpriseEdition,
        StudentEdition,
    }

    [ComVisible(true)]
    [Guid("5EB8A19B-9CA4-45DA-8995-9B0D7CA7AC94")]
    public enum UpdateStatus
    {
        CheckFailed = -2,
        NotSupported = -1,
        NotChecked = 0,
        UpToDate = 1,
        AvailableEligible = 2,
        AvailableIneligible = 3,
    }

    [ComVisible(true)]
    [Guid("E2900092-46B6-4E87-BFCF-6AF4D76F129B")]
    public enum ZOSAPI_Mode
    {
        Server,
        Operand,
        Plugin,
        UserAnalysis,
        UserAnalysisSettings
    }

    //[ComVisible(true)]
    //[Guid("D1D4C193-B625-4288-8A06-4E240A7D1FD0")]
    //public enum ZOSAPI_BaseLicenseType
    //{
    //    /// <summary>
    //    /// Check for a valid OpticStudio license when attempting to initiate the API
    //    /// </summary>
    //    OpticStudio,
    //    /// <summary>
    //    /// Check for a valid LensMechanix license when attempting to initiate the API
    //    /// </summary>
    //    LensMechanix
    //}

    [ComVisible(true)]
    [Guid("F4274FD8-D42F-4B77-AA8B-09BB951C66AA")]
    public enum LensUpdateMode
    {
        None = 0,
        EditorsOnly = 1,
        AllWindows = 2,
    }

    [ComVisible(true)]
    [Guid("3FD222A3-A529-4F7F-B8ED-D492959F47BE")]
    public enum SessionModes
    {
        FromPreferences = 0,
        SessionOn = 1,
        SessionOff = 2,
    }

    [ComVisible(true)]
    [Guid("ED0B14A9-DF23-4748-AEE9-1C71AE48073B")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IZOSAPI_Connection
    {
        bool IsAlive { get; }

        IZOSAPI_Application ConnectToApplication();

        IZOSAPI_Application CreateNewApplication();

        IZOSAPI_Application CreateZemaxServer(string applicationName);
        IZOSAPI_Application CreateZemaxServerEx(string applicationName, string libraryPath);
        string InitializationSettings { get; set; }
        int[] IntializationProgress { get; }
        double ConnectionTimeoutSeconds { get; set; }

        IZOSAPI_Application ConnectAsExtension(int zemaxInstance);

        string FormattingCulture { get; set; }

        string PreferencesFile { get; set; }

        string RunCommand(string command);

        string GetConfigSetting(string setting);
        void SetConfigSetting(string setting, string Value);

        void SetCreoInstallPath(string path);

        string GetSchemaFromType(string typeName);
        string GetSchemaFromObject(object o, string curTypeName = null);


    }

    [Guid("F734FC74-69B9-48CC-8D18-7FFF02BB7CC4")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IZOSAPI_Callback : IDisposable
    {
        string Name { get; set; }
        bool IsLocal { get; }
        ISettingsData Settings { get; }
        IZOSAPI_Application TheApp { get; }

        int Execute();

        IZOSAPI_Callback Copy(IZOSAPI_Application app);
    }

    public interface IZAPI_BaseObject
    {
        IZAPI_BaseObject Parent { get; }
        void AddChild(IZAPI_BaseObject child);
        void RemoveChild(IZAPI_BaseObject child);
        void Disconnect();
    }

    [Guid("AAB429CA-15A5-4934-98D5-A4257E9E04AB")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IZOSAPI_Application
    {
        LicenseStatusType LicenseStatus { get; }
        bool IsValidLicenseForAPI { get; }
        string InitializationErrors { get; }
        string InitializationErrorCode { get; }

        ZOSAPI_Mode Mode { get; }

        string SerialCode { get; }
        int OpticStudioVersion { get; }
        int ExpirationYear { get; }
        int ExpirationMonth { get; }
        int ExpirationDay { get; }

        int NumberOfOpticalSystems { get; }
        IOpticalSystem PrimarySystem { get; }
        IOpticalSystem GetSystemAt(int pos);
        bool CloseSystemAt(int pos, bool saveIfNeeded);

        IOpticalSystem LoadNewSystem(String LensFile);
        IOpticalSystem CreateNewSystem(SystemType mode);

        int NumberOfCPUs { get; }

        void UpdateFileLists();
        string ProgramDir { get; }
        string LensDir { get; }
        string ObjectsDir { get; }
        string GlassDir { get; }
        string ZPLDir { get; }
        string CoatingDir { get; }
        string POPDir { get; }
        string ImagesDir { get; }
        string SolidWorksFilesDir { get; }
        string AutodeskInventorFilesDir { get; }
        string CreoParametricFilesDir { get; }
        string MATLABFilesDir { get; }
        string ScatterDir { get; }
        string UndoDir { get; }

        string SamplesDir { get; }
        string ZemaxDataDir { get; }

        string GetDate();

        IVectorData OperandResults { get; }
        double OperandArgument1 { get; }
        double OperandArgument2 { get; }
        double OperandArgument3 { get; }
        double OperandArgument4 { get; }

        IUserAnalysisData UserAnalysisData { get; }

        bool TerminateRequested { get; } // For analysis & extensions only
        bool ShowChangesInUI { get; set; }
        string ProgressMessage { get; set; }
        double ProgressPercent { get; set; }

        void CloseApplication();

        UpdateStatus CheckForUpdatesStatus { get; }
        string CheckForUpdatesData { get; }
        int CheckForUpdatesVersion { get; }
        void CheckForUpdates();

        IPreferences Preferences { get; }

        bool IsLoggingMessages { get; }
        void ClearMessageLog();
        bool BeginMessageLogging();
        bool EndMessageLogging();
        string RetrieveLogMessages();

        IZOSAPI_Callback LoadCCallback(string cLib, string callbackName, ISettingsData settings);
        IMessage RegisterCOperandCallback(string cLib, string callbackName, ISettingsData settings);

        IZOSAPI_Callback LoadNETCallback(string fromAssembly, string typeName, ISettingsData settings);
        IMessage RegisterNETOperandCallback(string fromAssembly, string typeName, ISettingsData settings);

        bool CopySettingsData(ISettingsData from, ISettingsData to);
        ISettingsData CreateSettings();
        ISettingsData CreateSettingsFromParent(IZAPI_BaseObject parent);

        IDataDictionary OpenDataFile(string fileName);
        IDataDictionary CreateDataFile(string fileName, ZemaxFileTypes type, int data1, int data2);

        int ZOSMajorVersion { get; }
        int ZOSMinorVersion { get; }
        int ZOSSPVersion { get; }

        bool IsSubscriptionLicense { get; }

        string RunCommand(string command);

        bool IsSTARModuleEnabled { get; }
        int OpticStudioInstance { get; }

        IExtensionTools ExtensionTools { get; }
    }

    [Guid("07289D93-EA8D-4B90-99A1-DF5AE3D7FFFB")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IExtensionTools
    {
        IMessage StartUITask();
        bool EndUITask();
        //string StatusMessage { set; }
    }

    [Guid("652E9881-9769-40AE-A08E-176B0BFCF464")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IOpticalSystem
    {
        string SystemName { get; set; }
        int SystemID { get; }
        SystemType Mode { get; }
        string SystemFile { get; }

        string GetCurrentStatus();
        string UpdateStatus();

        bool IsNonAxial { get; }
        bool NeedsSave { get; }

        bool MakeSequential();
        bool MakeNonSequential();

        bool LoadFile(string LensFile, bool saveIfNeeded);
        void New(bool saveIfNeeded);
        void Save();
        void SaveAs(string fileName);
        bool Close(bool saveIfNeeded);

        //bool IsActiveSystem { get; } // Is currently displayed in UI?
        //bool MakeActive(); // Only works if not already active, and there is a UI

        ISystemData SystemData { get; }

        ILensDataEditor LDE { get; }
        INonSeqEditor NCE { get; }
        IToleranceDataEditor TDE { get; }
        IMeritFunctionEditor MFE { get; }
        IMultiConfigEditor MCE { get; }

        I_Analyses Analyses { get; }
        IOpticalSystemTools Tools { get; }

        //IPrescriptionData GetPrescription();


        IZOSAPI_Application TheApplication { get; }

        IOpticalSystem CopySystem();

        LensUpdateMode UpdateMode { get; set; }

        SessionModes SessionMode { get; set; }

        ISTARSubsystem STARSubsystem { get; }

        void UpdateFileLists();

        bool IsProjectDirectory { get; }
        bool ConvertToProjectDirectory(string folderPath);

        [Obsolete("Use the " + nameof(ZOSAPI.Tools.FileManager.IConvertProjectToFileTool) + " to convert a Lens Project to a Lens File.")]
        bool TurnOffProjectDirectory();

        IMetadata GetMetadata();

        IDesignParameters DesignParameters { get; }

        INSCSequences NSCSequences { get; }
    }

    [ComVisible(true)]
    [Guid("74E6AEF9-0AE9-4E33-8A29-8C5F50F5900E")]
    public enum STARUpdateMode
    {
        Normal,
        Suspended
    }

    [Guid("F9EA4CCE-8F8B-40F8-BBF9-193DF3612F94")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISTARSubsystem
    {        
        STARUpdateMode UpdateMode { get; set; }
        
        void DoManualUpdate();

        ISTARMaterials Materials { get; }

        ISTARTools Tools { get; }
    }

    [Guid("DB255972-9E29-4FA7-BE94-B6344DFDA08C")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISTARTools
    {
        int DataTypeFromFileHeader(string filename);

        ISTAR_PointWithIndex[] ReadDirectIndexFromFEAFile(string filename);
        ISTAR_PointWithTemperature[] ReadTemperaturesFromFEAFile(string filename);
        ISTAR_PointWithDeformation[] ReadDeformationsFromFEAFile(string filename);
        ISTAR_PointWithDeformationAndWeight[] ReadDeformationsWithWeightFromFEAFile(string filename);
        ISTAR_PointWithStress[] ReadStressFromFEAFile(string filename);
    }

    [Guid("0810835E-B03D-43D8-980A-3644E558BC0A")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISTARMaterials
    {
        double GetRefractiveIndex(string MaterialCatalog, string Material, double Wavelength, double EnvironmentPressure, double EnvironmentTemperature, double MaterialPressure, double MaterialTemperature);
        double GetDNDT(string MaterialCatalog, string Material, double Wavelength, double EnvironmentPressure, double EnvironmentTemperature, double MaterialPressure, double MaterialTemperature, double DeltaT);
    }

    [ComVisible(true)]
    [Guid("CC7902AB-5E8D-489F-8199-C4C6C99D7DF4")]
    public enum DesignParameterId
    {
        wavelength_primary,
        wavelength_minimum,
        wavelength_maximum,
        object_distance,
        F_number,
        working_F_number,
        object_space_NA,
        effective_focal_length,
        image_plane_diameter,
        paraxial_magnification,
        angular_magnification,
        entrance_pupil_diameter,
        physical_stop_diameter,
        exit_pupil_diameter,
        entrance_pupil_position,
        exit_pupil_position,
        fov_full_radial,
        fov_full_x,
        fov_full_y,
        fov_half_radial,
        fov_half_x,
        fov_half_y,
        object_size_radial,
        object_size_x,
        object_size_y,
        rms_spot_size,
        geo_spot_size,
        rms_wavefront_error,
        pv_wavefront_error,
        mtfx_at_spatial_frequency,
        mtfy_at_spatial_frequency,
        diffraction_encircled_energy_at_radius,
        geometric_encircled_energy_at_radius,
        grid_distortion,
        psf_fwhm_x,
        psf_fwhm_y,
        bounding_box_x,
        bounding_box_y,
        bounding_box_z,
        bounding_box_volume,
        back_focal_distance,
        operational_temperature,
        operational_pressure,
        detector_size_diagonal,
        detector_size_x,
        detector_size_y,
        detector_angle_in_object_space_diagonal,
        detector_angle_in_object_space_x,
        detector_angle_in_object_space_y,
        detector_size_in_object_space_diagonal,
        detector_size_in_object_space_x,
        detector_size_in_object_space_y,
        detector_pixels_x,
        detector_pixels_y,
        detector_pixel_size_x,
        detector_pixel_size_y,
        detector_pixel_angle_in_object_space_x,
        detector_pixel_angle_in_object_space_y,
        detector_pixel_size_in_object_space_x,
        detector_pixel_size_in_object_space_y,
        rms_spot_size_sampling_x,
        rms_spot_size_sampling_y,
        geo_spot_size_sampling_x,
        geo_spot_size_sampling_y,
        psf_fwhm_sampling_x,
        psf_fwhm_sampling_y,
    }

    [ComVisible(true)]
    [Guid("95C7AE32-4619-4225-ACED-4286EDE16B86")]
    public interface IDesignParameterData
    {
        DesignParameterId Id { get; }
        string Name { get; }
        string Symbol { get; }
        string Category { get; }
        string UnitsLong { get; }
        string UnitsShort { get; }
        bool RequiresExtraValue { get; }
        string ExtraValueName { get; }
        string ExtraValueUnitsShort { get; }
    }

    [Guid("CBD825C0-9A0F-45F3-94B9-9E6BA3FAEBE9")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IDesignParameters
    {
        bool DesignParameterRequiresExtraValue(DesignParameterId id);
        double GetDesignParameterValueWithExtraValue(DesignParameterId id, double extraValue);
        IDesignParameterData GetDesignParameterData(DesignParameterId id);
    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
