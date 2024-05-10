# Class Settings

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

### Settings\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Settings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Settings()
```

## Properties

### ANSYSRstReaderPath

Gets the ANSYSRstReader.dll path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\ANSYSRstReader.dll")]
public string ANSYSRstReaderPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### AccuracyForCADImportMassCalculate

Gets or sets the accuracy for CAD import mass calculate.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("1e-2")]
public double AccuracyForCADImportMassCalculate { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AccuracyForMassCalculate

Gets or sets the accuracy for mass calculate.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("1e-6")]
public double AccuracyForMassCalculate { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AdditionalPythonLibPath

Gets the additional libpath for the function expression editor

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("..\\..\\commonfiles\\CPython\\3_7\\winx64\\Release\\python\\Lib;..\\Solver\\Console")]
public IEnumerable<string> AdditionalPythonLibPath { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AutoSaveInterval

Gets or sets the auto save interval.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("5")]
public int AutoSaveInterval { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AxisLocation

Gets or sets the Axis Location.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("AxisRightBottom")]
public AxisLocation AxisLocation { get; set; }
```

#### Property Value

 AxisLocation

### AxisUseRotate

Gets or sets the whether user uses rotate in the axis area or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool AxisUseRotate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CADConvertPath

Gets the CAD convert path.

```csharp
[ApplicationScopedSetting]
public string CADConvertPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CenterMainKey1

Gets or sets the CenterMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB_Click")]
public NavigationKeys CenterMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterMainKey2

Gets or sets the CenterMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB_Click")]
public NavigationKeys CenterMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterMainKey3

Gets or sets the CenterMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys CenterMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterMainKey4

Gets or sets the CenterMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("C")]
public NavigationKeys CenterMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterSubKey1

Gets or sets the CenterSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys CenterSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterSubKey2

Gets or sets the CenterSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys CenterSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterSubKey3

Gets or sets the CenterSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_Click")]
public NavigationKeys CenterSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### CenterSubKey4

Gets or sets the CenterSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_Click")]
public NavigationKeys CenterSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### CloseStartPageAfterOpenWork

Gets or sets a value indicating whether close start page after opening work or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool CloseStartPageAfterOpenWork { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConsoleSolverPath

Gets the console solver path.

```csharp
[ApplicationScopedSetting]
[NoSettingsVersionUpgrade]
public string ConsoleSolverPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ControlsPreset

Gets or sets the Preset Value for Navigation Controls

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string ControlsPreset { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CopyrightAndOSSLicenseInfoPath

Gets the Copyright and OSS License info file path.

```csharp
[ApplicationScopedSetting]
public string CopyrightAndOSSLicenseInfoPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DbClickMode\_AssembledBody

Gets or sets the db click mode_ assembled body.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int DbClickMode_AssembledBody { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DbClickMode\_FlexibleBody

Gets or sets the db click mode_ flexible body.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int DbClickMode_FlexibleBody { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DbClickMode\_Subsystem

Gets or sets the db click mode_ subsystem.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int DbClickMode_Subsystem { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DebugMode

Gets a value indicating whether [debug mode].

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("false")]
public bool DebugMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Decimals

Gets or sets the decimals.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("8")]
public int Decimals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefaultMode\_Subsystem

Gets or sets the default mode of subsystem document.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string DefaultMode_Subsystem { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DeveloperMode

Gets or sets a value indicating whether is developer mode or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool DeveloperMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DialogPath

Gets the dialog path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\")]
public string DialogPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DocumentPath

Gets the document path.

```csharp
[ApplicationScopedSetting]
public string DocumentPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DotNetMinVersion

Gets the .NET Framework Minimum Version.

```csharp
[ApplicationScopedSetting]
public Version DotNetMinVersion { get; }
```

#### Property Value

 [Version](https://learn.microsoft.com/dotnet/api/system.version)

### FrontViewPlane

Gets or sets the front view plane.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("ZY_PlusZ")]
public ViewPlane FrontViewPlane { get; set; }
```

#### Property Value

 ViewPlane

### FunctionExpressionScriptHeader

Gets the function expression script header for the function expression editor

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("from MotionFunction.FuncExp import *")]
public string FunctionExpressionScriptHeader { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GUISolverPath

Gets the GUI solver path.

```csharp
[ApplicationScopedSetting]
[NoSettingsVersionUpgrade]
public string GUISolverPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HelpURL

Gets the url for help page

```csharp
[ApplicationScopedSetting]
public string HelpURL { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HighSpeedRotationReferenceValue

Gets the high-speed rotation reference value

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("1.0e2")]
public double HighSpeedRotationReferenceValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InterfacePath

Gets the interface path.

```csharp
[ApplicationScopedSetting]
public string InterfacePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### KernelPath

Gets the kernel path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Kernel\\VMAcis.dll")]
public string KernelPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Labs

Gets or sets a value indicating which lab functionalty is used.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public string Labs { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LastUsedWorkDirectory

Gets or sets the last used work directory.

```csharp
[UserScopedSetting]
public string LastUsedWorkDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LicenseManagerPath

Gets or sets the license manager path.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("..\\License Manager\\VMLMgr.exe")]
public string LicenseManagerPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Locale

Gets or sets a value indicating locale of user setting page.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("AUTO")]
public string Locale { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogLicenseEvent

Gets or sets the License status event log flag.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int LogLicenseEvent { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MFInterfacePath

Gets the MF_Interface.dll path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Import\\MF_Interface.dll")]
public string MFInterfacePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialLibraryDirectory

Gets the material library directory.

```csharp
[ApplicationScopedSetting]
public string MaterialLibraryDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaximumOpenPropertyDialogCount

Gets the maximum number of property dialogs that can be opened.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("4")]
public int MaximumOpenPropertyDialogCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MesherCorePath

Gets the VMMesherCore.dll path.

```csharp
[ApplicationScopedSetting]
public string MesherCorePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MeshfreePreprocessorPath

Gets the MeshfreePreprocessorPath.exe path.

```csharp
[ApplicationScopedSetting]
public string MeshfreePreprocessorPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MouseDownZoomIn1

Gets or sets the MouseDownZoomIn1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool MouseDownZoomIn1 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MouseDownZoomIn2

Gets or sets the MouseDownZoomIn2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool MouseDownZoomIn2 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MouseDownZoomIn3

Gets or sets the MouseDownZoomIn3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool MouseDownZoomIn3 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MouseDownZoomIn4

Gets or sets the MouseDownZoomIn4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool MouseDownZoomIn4 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NFtoDAFULPath

Gets the NFtoDAFUL.dll path.

```csharp
[ApplicationScopedSetting]
public string NFtoDAFULPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NastranOutReaderPath

Gets the NastranOutReader.dll path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Import\\NastranOutReader.dll")]
public string NastranOutReaderPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NumOfMRUFiles

Gets or sets a value indicating how many files will be shown in recently used file list.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("10")]
public int NumOfMRUFiles { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OEMMode

Gets a value indicating whether [OEMMode].

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("true")]
public bool OEMMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputTextBoxInterval

Gets a value indicating whether [output textbox interval].

```csharp
[ApplicationScopedSetting]
public int OutputTextBoxInterval { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PostPath

Gets or sets the post path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Postprocessor.exe")]
public string PostPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PrePath

Gets the pre path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\dfpre.exe")]
public string PrePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PythonExecutablePath

Gets the function expression script header for the function expression editor

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue("..\\..\\commonfiles\\CPython\\3_7\\winx64\\Release\\python\\python.exe")]
public string PythonExecutablePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RedrawKernel

Gets a value indicating whether [redraw kernel].

```csharp
[ApplicationScopedSetting]
public bool RedrawKernel { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Rendering

Gets or sets the rendering.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("3")]
public int Rendering { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RotateMainKey1

Gets or sets the RotateMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys RotateMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateMainKey2

Gets or sets the RotateMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys RotateMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateMainKey3

Gets or sets the RotateMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys RotateMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateMainKey4

Gets or sets the RotateMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("R")]
public NavigationKeys RotateMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateSpeed

Gets or sets the Rotate Speed

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("5")]
public int RotateSpeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RotateSubKey1

Gets or sets the RotateSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_RMB")]
public NavigationKeys RotateSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateSubKey2

Gets or sets the RotateSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys RotateSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateSubKey3

Gets or sets the RotateSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB")]
public NavigationKeys RotateSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateSubKey4

Gets or sets the RotateSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_MMB")]
public NavigationKeys RotateSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### RotateTrackball

Gets or sets the RotateTrackball

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool RotateTrackball { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RunDllPath

Gets the RunDLL.exe path.

```csharp
[ApplicationScopedSetting]
public string RunDllPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShowStartPageAtStartup

Gets or sets a value indicating whether show start page at application startup or not.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool ShowStartPageAtStartup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SolutionPath

Gets the solution path.

```csharp
[ApplicationScopedSetting]
public string SolutionPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SolverDirectory

Gets the solver directory.

```csharp
[ApplicationScopedSetting]
public string SolverDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SplashPath

Gets the splash path.

```csharp
[ApplicationScopedSetting]
public string SplashPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TemplatePath

Gets the template path.

```csharp
[ApplicationScopedSetting]
[DefaultSettingValue(".\\Templates")]
public string TemplatePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TextEditor

Gets or sets a text editor.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("notepad.exe")]
public string TextEditor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TextEditorArgument

Argument to launch text editor.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("\"$file$\"")]
public string TextEditorArgument { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToolkitInfoPath

Gets the toolkit info path.

```csharp
[ApplicationScopedSetting]
public string ToolkitInfoPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TranslateMainKey1

Gets or sets the TranslateMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys TranslateMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateMainKey2

Gets or sets the TranslateMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys TranslateMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateMainKey3

Gets or sets the TranslateMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Ctrl")]
public NavigationKeys TranslateMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateMainKey4

Gets or sets the TranslateMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("T")]
public NavigationKeys TranslateMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateSubKey1

Gets or sets the TranslateSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys TranslateSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateSubKey2

Gets or sets the TranslateSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys TranslateSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateSubKey3

Gets or sets the TranslateSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("RMB")]
public NavigationKeys TranslateSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslateSubKey4

Gets or sets the TranslateSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_MMB")]
public NavigationKeys TranslateSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### TranslatorDirectory

Gets the translator directory.

```csharp
[ApplicationScopedSetting]
[NoSettingsVersionUpgrade]
public string TranslatorDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseAutoCheckDotNetVersion

Gets or sets a value indicating whether [use auto check .NET Framework version].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoCheckDotNetVersion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseAutoCreateOK

Gets or sets a value indicating whether [use auto ok].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseAutoCreateOK { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseAutoPickerOK

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoPickerOK { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseAutoSave

Gets or sets a value indicating whether [use auto save].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseAutoSave { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseDefaultStartPage

Gets or sets a value indicating whether show default start page or user defined start page.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseDefaultStartPage { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseDefaultTemp

Gets or sets a value indicating whether [use default temp path].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseDefaultTemp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseDockableCreateAndPickerWindows

Gets or sets a value indicating whether [use dockable create and picker windows].

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseDockableCreateAndPickerWindows { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UserRibbon

Gets or sets the user ribbon directory.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UserRibbon { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UserStartPage

Gets or sets a value indicating url of user setting page.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("")]
public string UserStartPage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UserTempPath

Gets or sets the user temp path.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UserTempPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### VMMesherPath

Gets the VMMesher path.

```csharp
[ApplicationScopedSetting]
public string VMMesherPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Verify

Gets a value indicating whether [verify].

```csharp
[ApplicationScopedSetting]
public bool Verify { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VerifyLevel

Gets or sets the verify level.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public int VerifyLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WheelDownZoomIn1

Gets or sets the WheelDownZoomIn1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool WheelDownZoomIn1 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WheelDownZoomIn2

Gets or sets the WheelDownZoomIn2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool WheelDownZoomIn2 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WheelDownZoomIn3

Gets or sets the WheelDownZoomIn3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool WheelDownZoomIn3 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WheelDownZoomIn4

Gets or sets the WheelDownZoomIn4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool WheelDownZoomIn4 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### XmlSolverManagerPath

Gets the XML solver manager path.

```csharp
[ApplicationScopedSetting]
public string XmlSolverManagerPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ZoomMainKey1

Gets or sets the ZoomMainKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys ZoomMainKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomMainKey2

Gets or sets the ZoomMainKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Shift")]
public NavigationKeys ZoomMainKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomMainKey3

Gets or sets the ZoomMainKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys ZoomMainKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomMainKey4

Gets or sets the ZoomMainKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("Z")]
public NavigationKeys ZoomMainKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomSpeed

Gets or sets the Zoom Speed

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("5")]
public int ZoomSpeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ZoomSubKey1

Gets or sets the ZoomSubKey1

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB_or_RMB_Click")]
public NavigationKeys ZoomSubKey1 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomSubKey2

Gets or sets the ZoomSubKey2

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("MMB")]
public NavigationKeys ZoomSubKey2 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomSubKey3

Gets or sets the ZoomSubKey3

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("NONE")]
public NavigationKeys ZoomSubKey3 { get; set; }
```

#### Property Value

 NavigationKeys

### ZoomSubKey4

Gets or sets the ZoomSubKey4

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("LMB")]
public NavigationKeys ZoomSubKey4 { get; set; }
```

#### Property Value

 NavigationKeys

### this\[string\]

```csharp
public override object this[string propertyName] { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)


