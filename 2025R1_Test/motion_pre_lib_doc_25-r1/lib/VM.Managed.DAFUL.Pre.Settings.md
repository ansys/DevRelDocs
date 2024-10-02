#  Class Settings

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the setting for configuration.

```csharp
[SettingsProvider(typeof(HybridSettingsProvider))]
public class Settings : SettingsBase<Settings>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SettingsBase](https://learn.microsoft.com/dotnet/api/system.configuration.settingsbase) ← 
[ApplicationSettingsBase](https://learn.microsoft.com/dotnet/api/system.configuration.applicationsettingsbase) ← 
SettingsBase<Settings\> ← 
[Settings](VM.Managed.DAFUL.Pre.Settings.md)

#### Inherited Members

SettingsBase<Settings\>.GetProperty<TSettingType\>\(string\), 
SettingsBase<Settings\>.Default, 
SettingsBase<Settings\>.RootPath

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Settings__ctor"></a> Settings\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Settings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Settings()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Settings_ANSYSRstReaderPath"></a> ANSYSRstReaderPath

Gets the ANSYSRstReader.dll path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\ANSYSRstReader.dll")]
public string ANSYSRstReaderPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_AccuracyForCADImportMassCalculate"></a> AccuracyForCADImportMassCalculate

Gets or sets the accuracy for CAD import mass calculate.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("1e-2")]
public double AccuracyForCADImportMassCalculate { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Pre_Settings_AccuracyForMassCalculate"></a> AccuracyForMassCalculate

Gets or sets the accuracy for mass calculate.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("1e-6")]
public double AccuracyForMassCalculate { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Pre_Settings_AdditionalPythonLibPath"></a> AdditionalPythonLibPath

Gets the additional libpath for the function expression editor

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("..\\..\\commonfiles\\CPython\\3_7\\winx64\\Release\\python\\Lib;..\\Solver\\Console")]
public IEnumerable<string> AdditionalPythonLibPath { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Pre_Settings_AutoSaveInterval"></a> AutoSaveInterval

Gets or sets the auto save interval.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("5")]
public int AutoSaveInterval { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_AxisLocation"></a> AxisLocation

Gets or sets the Axis Location.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("AxisRightBottom")]
public AxisLocation AxisLocation { get; set; }
```

#### Property Value

 AxisLocation

### <a id="VM_Managed_DAFUL_Pre_Settings_AxisUseRotate"></a> AxisUseRotate

Gets or sets the whether user uses rotate in the axis area or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool AxisUseRotate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_CADConvertPath"></a> CADConvertPath

Gets the CAD convert path.

```csharp
[ApplicationScopedSetting]
public string CADConvertPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterMainKey1"></a> CenterMainKey1

Gets or sets the CenterMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB_Click")]
public NavigationKeys CenterMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterMainKey2"></a> CenterMainKey2

Gets or sets the CenterMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB_Click")]
public NavigationKeys CenterMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterMainKey3"></a> CenterMainKey3

Gets or sets the CenterMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys CenterMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterMainKey4"></a> CenterMainKey4

Gets or sets the CenterMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("C")]
public NavigationKeys CenterMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterSubKey1"></a> CenterSubKey1

Gets or sets the CenterSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys CenterSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterSubKey2"></a> CenterSubKey2

Gets or sets the CenterSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys CenterSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterSubKey3"></a> CenterSubKey3

Gets or sets the CenterSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_Click")]
public NavigationKeys CenterSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CenterSubKey4"></a> CenterSubKey4

Gets or sets the CenterSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_Click")]
public NavigationKeys CenterSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_CloseStartPageAfterOpenWork"></a> CloseStartPageAfterOpenWork

Gets or sets a value indicating whether close start page after opening work or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool CloseStartPageAfterOpenWork { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_ConsoleSolverPath"></a> ConsoleSolverPath

Gets the console solver path.

```csharp
[ApplicationScopedSetting]
[NoSettingsVersionUpgrade]
public string ConsoleSolverPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_ControlsPreset"></a> ControlsPreset

Gets or sets the Preset Value for Navigation Controls

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string ControlsPreset { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_CopyrightAndOSSLicenseInfoPath"></a> CopyrightAndOSSLicenseInfoPath

Gets the Copyright and OSS License info file path.

```csharp
[ApplicationScopedSetting]
public string CopyrightAndOSSLicenseInfoPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_DbClickMode_AssembledBody"></a> DbClickMode\_AssembledBody

Gets or sets the db click mode_ assembled body.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int DbClickMode_AssembledBody { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_DbClickMode_FlexibleBody"></a> DbClickMode\_FlexibleBody

Gets or sets the db click mode_ flexible body.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int DbClickMode_FlexibleBody { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_DbClickMode_Subsystem"></a> DbClickMode\_Subsystem

Gets or sets the db click mode_ subsystem.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int DbClickMode_Subsystem { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_DebugMode"></a> DebugMode

Gets a value indicating whether [debug mode].

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("false")]
public bool DebugMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_Decimals"></a> Decimals

Gets or sets the decimals.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("8")]
public int Decimals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_DefaultMode_Subsystem"></a> DefaultMode\_Subsystem

Gets or sets the default mode of subsystem document.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string DefaultMode_Subsystem { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_DeveloperMode"></a> DeveloperMode

Gets or sets a value indicating whether is developer mode or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool DeveloperMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_DialogPath"></a> DialogPath

Gets the dialog path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\")]
public string DialogPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_DocumentPath"></a> DocumentPath

Gets the document path.

```csharp
[ApplicationScopedSetting]
public string DocumentPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_DotNetMinVersion"></a> DotNetMinVersion

Gets the .NET Framework Minimum Version.

```csharp
[ApplicationScopedSetting]
public Version DotNetMinVersion { get; }
```

#### Property Value

 [Version](https://learn.microsoft.com/dotnet/api/system.version)

### <a id="VM_Managed_DAFUL_Pre_Settings_FrontViewPlane"></a> FrontViewPlane

Gets or sets the front view plane.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("ZY_PlusZ")]
public ViewPlane FrontViewPlane { get; set; }
```

#### Property Value

 ViewPlane

### <a id="VM_Managed_DAFUL_Pre_Settings_FunctionExpressionScriptHeader"></a> FunctionExpressionScriptHeader

Gets the function expression script header for the function expression editor

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("from MotionFunction.FuncExp import *")]
public string FunctionExpressionScriptHeader { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_GUISolverPath"></a> GUISolverPath

Gets the GUI solver path.

```csharp
[ApplicationScopedSetting]
[NoSettingsVersionUpgrade]
public string GUISolverPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_HelpURL"></a> HelpURL

Gets the url for help page

```csharp
[ApplicationScopedSetting]
public string HelpURL { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_HighSpeedRotationReferenceValue"></a> HighSpeedRotationReferenceValue

Gets the high-speed rotation reference value

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("1.0e2")]
public double HighSpeedRotationReferenceValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Pre_Settings_InterfacePath"></a> InterfacePath

Gets the interface path.

```csharp
[ApplicationScopedSetting]
public string InterfacePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_KernelPath"></a> KernelPath

Gets the kernel path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Kernel\\VMAcis.dll")]
public string KernelPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_Labs"></a> Labs

Gets or sets a value indicating which lab functionalty is used.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public string Labs { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_LastUsedWorkDirectory"></a> LastUsedWorkDirectory

Gets or sets the last used work directory.

```csharp
[UserScopedSetting]
public string LastUsedWorkDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_LicenseManagerPath"></a> LicenseManagerPath

Gets or sets the license manager path.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("..\\License Manager\\VMLMgr.exe")]
public string LicenseManagerPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_Locale"></a> Locale

Gets or sets a value indicating locale of user setting page.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("AUTO")]
public string Locale { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_LogLicenseEvent"></a> LogLicenseEvent

Gets or sets the License status event log flag.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int LogLicenseEvent { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_MFInterfacePath"></a> MFInterfacePath

Gets the MF_Interface.dll path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Import\\MF_Interface.dll")]
public string MFInterfacePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_MaterialLibraryDirectory"></a> MaterialLibraryDirectory

Gets the material library directory.

```csharp
[ApplicationScopedSetting]
public string MaterialLibraryDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_MaximumOpenPropertyDialogCount"></a> MaximumOpenPropertyDialogCount

Gets the maximum number of property dialogs that can be opened.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("4")]
public int MaximumOpenPropertyDialogCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_MesherCorePath"></a> MesherCorePath

Gets the VMMesherCore.dll path.

```csharp
[ApplicationScopedSetting]
public string MesherCorePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_MeshfreePreprocessorPath"></a> MeshfreePreprocessorPath

Gets the MeshfreePreprocessorPath.exe path.

```csharp
[ApplicationScopedSetting]
public string MeshfreePreprocessorPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_MouseDownZoomIn1"></a> MouseDownZoomIn1

Gets or sets the MouseDownZoomIn1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool MouseDownZoomIn1 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_MouseDownZoomIn2"></a> MouseDownZoomIn2

Gets or sets the MouseDownZoomIn2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool MouseDownZoomIn2 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_MouseDownZoomIn3"></a> MouseDownZoomIn3

Gets or sets the MouseDownZoomIn3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool MouseDownZoomIn3 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_MouseDownZoomIn4"></a> MouseDownZoomIn4

Gets or sets the MouseDownZoomIn4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool MouseDownZoomIn4 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_NFtoDAFULPath"></a> NFtoDAFULPath

Gets the NFtoDAFUL.dll path.

```csharp
[ApplicationScopedSetting]
public string NFtoDAFULPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_NastranOutReaderPath"></a> NastranOutReaderPath

Gets the NastranOutReader.dll path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Import\\NastranOutReader.dll")]
public string NastranOutReaderPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_NumOfMRUFiles"></a> NumOfMRUFiles

Gets or sets a value indicating how many files will be shown in recently used file list.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("10")]
public int NumOfMRUFiles { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_OEMMode"></a> OEMMode

Gets a value indicating whether [OEMMode].

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("true")]
public bool OEMMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_OutputTextBoxInterval"></a> OutputTextBoxInterval

Gets a value indicating whether [output textbox interval].

```csharp
[ApplicationScopedSetting]
public int OutputTextBoxInterval { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_PostPath"></a> PostPath

Gets or sets the post path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Postprocessor.exe")]
public string PostPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_PrePath"></a> PrePath

Gets the pre path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\dfpre.exe")]
public string PrePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_PythonExecutablePath"></a> PythonExecutablePath

Gets the function expression script header for the function expression editor

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("..\\..\\commonfiles\\CPython\\3_7\\winx64\\Release\\python\\python.exe")]
public string PythonExecutablePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_RedrawKernel"></a> RedrawKernel

Gets a value indicating whether [redraw kernel].

```csharp
[ApplicationScopedSetting]
public bool RedrawKernel { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_Rendering"></a> Rendering

Gets or sets the rendering.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("3")]
public int Rendering { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateMainKey1"></a> RotateMainKey1

Gets or sets the RotateMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys RotateMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateMainKey2"></a> RotateMainKey2

Gets or sets the RotateMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys RotateMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateMainKey3"></a> RotateMainKey3

Gets or sets the RotateMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys RotateMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateMainKey4"></a> RotateMainKey4

Gets or sets the RotateMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("R")]
public NavigationKeys RotateMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateSpeed"></a> RotateSpeed

Gets or sets the Rotate Speed

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("5")]
public int RotateSpeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateSubKey1"></a> RotateSubKey1

Gets or sets the RotateSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_RMB")]
public NavigationKeys RotateSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateSubKey2"></a> RotateSubKey2

Gets or sets the RotateSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys RotateSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateSubKey3"></a> RotateSubKey3

Gets or sets the RotateSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB")]
public NavigationKeys RotateSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateSubKey4"></a> RotateSubKey4

Gets or sets the RotateSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_MMB")]
public NavigationKeys RotateSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_RotateTrackball"></a> RotateTrackball

Gets or sets the RotateTrackball

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool RotateTrackball { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_RunDllPath"></a> RunDllPath

Gets the RunDLL.exe path.

```csharp
[ApplicationScopedSetting]
public string RunDllPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_ShowStartPageAtStartup"></a> ShowStartPageAtStartup

Gets or sets a value indicating whether show start page at application startup or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool ShowStartPageAtStartup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_SolutionPath"></a> SolutionPath

Gets the solution path.

```csharp
[ApplicationScopedSetting]
public string SolutionPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_SolverDirectory"></a> SolverDirectory

Gets the solver directory.

```csharp
[ApplicationScopedSetting]
public string SolverDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_SplashPath"></a> SplashPath

Gets the splash path.

```csharp
[ApplicationScopedSetting]
public string SplashPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_TemplatePath"></a> TemplatePath

Gets the template path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Templates")]
public string TemplatePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_TextEditor"></a> TextEditor

Gets or sets a text editor.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("notepad.exe")]
public string TextEditor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_TextEditorArgument"></a> TextEditorArgument

Argument to launch text editor.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("\"$file$\"")]
public string TextEditorArgument { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_ToolkitInfoPath"></a> ToolkitInfoPath

Gets the toolkit info path.

```csharp
[ApplicationScopedSetting]
public string ToolkitInfoPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateMainKey1"></a> TranslateMainKey1

Gets or sets the TranslateMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys TranslateMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateMainKey2"></a> TranslateMainKey2

Gets or sets the TranslateMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys TranslateMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateMainKey3"></a> TranslateMainKey3

Gets or sets the TranslateMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys TranslateMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateMainKey4"></a> TranslateMainKey4

Gets or sets the TranslateMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("T")]
public NavigationKeys TranslateMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateSubKey1"></a> TranslateSubKey1

Gets or sets the TranslateSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys TranslateSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateSubKey2"></a> TranslateSubKey2

Gets or sets the TranslateSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys TranslateSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateSubKey3"></a> TranslateSubKey3

Gets or sets the TranslateSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("RMB")]
public NavigationKeys TranslateSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslateSubKey4"></a> TranslateSubKey4

Gets or sets the TranslateSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_MMB")]
public NavigationKeys TranslateSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_TranslatorDirectory"></a> TranslatorDirectory

Gets the translator directory.

```csharp
[ApplicationScopedSetting]
[NoSettingsVersionUpgrade]
public string TranslatorDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseAutoCheckDotNetVersion"></a> UseAutoCheckDotNetVersion

Gets or sets a value indicating whether [use auto check .NET Framework version].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoCheckDotNetVersion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseAutoCreateOK"></a> UseAutoCreateOK

Gets or sets a value indicating whether [use auto ok].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseAutoCreateOK { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseAutoPickerOK"></a> UseAutoPickerOK

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoPickerOK { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseAutoSave"></a> UseAutoSave

Gets or sets a value indicating whether [use auto save].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseAutoSave { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseConsoleSolver"></a> UseConsoleSolver

Argument to launch text editor.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseConsoleSolver { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseDefaultStartPage"></a> UseDefaultStartPage

Gets or sets a value indicating whether show default start page or user defined start page.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseDefaultStartPage { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseDefaultTemp"></a> UseDefaultTemp

Gets or sets a value indicating whether [use default temp path].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseDefaultTemp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UseDockableCreateAndPickerWindows"></a> UseDockableCreateAndPickerWindows

Gets or sets a value indicating whether [use dockable create and picker windows].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseDockableCreateAndPickerWindows { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_UserRibbon"></a> UserRibbon

Gets or sets the user ribbon directory.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UserRibbon { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_UserStartPage"></a> UserStartPage

Gets or sets a value indicating url of user setting page.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("")]
public string UserStartPage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_UserTempPath"></a> UserTempPath

Gets or sets the user temp path.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UserTempPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_VMMesherPath"></a> VMMesherPath

Gets the VMMesher path.

```csharp
[ApplicationScopedSetting]
public string VMMesherPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_Verify"></a> Verify

Gets a value indicating whether [verify].

```csharp
[ApplicationScopedSetting]
public bool Verify { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_VerifyLevel"></a> VerifyLevel

Gets or sets the verify level.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int VerifyLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_WheelDownZoomIn1"></a> WheelDownZoomIn1

Gets or sets the WheelDownZoomIn1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool WheelDownZoomIn1 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_WheelDownZoomIn2"></a> WheelDownZoomIn2

Gets or sets the WheelDownZoomIn2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool WheelDownZoomIn2 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_WheelDownZoomIn3"></a> WheelDownZoomIn3

Gets or sets the WheelDownZoomIn3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool WheelDownZoomIn3 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_WheelDownZoomIn4"></a> WheelDownZoomIn4

Gets or sets the WheelDownZoomIn4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool WheelDownZoomIn4 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Settings_XmlSolverManagerPath"></a> XmlSolverManagerPath

Gets the XML solver manager path.

```csharp
[ApplicationScopedSetting]
public string XmlSolverManagerPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomMainKey1"></a> ZoomMainKey1

Gets or sets the ZoomMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys ZoomMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomMainKey2"></a> ZoomMainKey2

Gets or sets the ZoomMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Shift")]
public NavigationKeys ZoomMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomMainKey3"></a> ZoomMainKey3

Gets or sets the ZoomMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys ZoomMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomMainKey4"></a> ZoomMainKey4

Gets or sets the ZoomMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Z")]
public NavigationKeys ZoomMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomSpeed"></a> ZoomSpeed

Gets or sets the Zoom Speed

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("5")]
public int ZoomSpeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomSubKey1"></a> ZoomSubKey1

Gets or sets the ZoomSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_RMB_Click")]
public NavigationKeys ZoomSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomSubKey2"></a> ZoomSubKey2

Gets or sets the ZoomSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys ZoomSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomSubKey3"></a> ZoomSubKey3

Gets or sets the ZoomSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys ZoomSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_ZoomSubKey4"></a> ZoomSubKey4

Gets or sets the ZoomSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB")]
public NavigationKeys ZoomSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### <a id="VM_Managed_DAFUL_Pre_Settings_Item_System_String_"></a> this\[string\]

```csharp
public override object this[string propertyName] { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

