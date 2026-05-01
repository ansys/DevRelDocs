# Namespace ZOSAPI

<a id="namespace_z_o_s_a_p_i"></a>

![][C#]

**Definition**:

The [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i) namespace contains classes for initially connecting to zemax. See also [ZOSAPI\_Connection](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection), and [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application) for more information.


## Child namespaces

* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Common](namespace_z_o_s_a_p_i_1_1_common.md#namespace_z_o_s_a_p_i_1_1_common)
* [ZOSAPI::Editors](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors)
* [ZOSAPI::Preferences](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences)
* [ZOSAPI::SystemData](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Wizards](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards)

## Classes

* [ZOSAPI::IOpticalSystem](interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)
* [ZOSAPI::IPreferences](interface_z_o_s_a_p_i_1_1_i_preferences.md#interface_z_o_s_a_p_i_1_1_i_preferences)
* [ZOSAPI::ISTARMaterials](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials)
* [ZOSAPI::ISTARSubsystem](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem)
* [ZOSAPI::ISTARTools](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools)
* [ZOSAPI::IZAPI\_BaseObject](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object)
* [ZOSAPI::IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)
* [ZOSAPI::IZOSAPI\_Callback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback)
* [ZOSAPI::IZOSAPI\_Connection](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection)
* [ZOSAPI::IZOSAPI\_Events](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events)
* [ZOSAPI::ZOSAPI\_Connection](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection)

## Enumeration types

### Enumeration type SystemType

<a id="namespace_z_o_s_a_p_i_1a3c37540f7b61a272f4eb50e826d27daf"></a>

![][public]

**Definition**:


```csharp
enum SystemType {
  Sequential,
  NonSequential
}
```


#### Enumerator Sequential

<a id="namespace_z_o_s_a_p_i_1a3c37540f7b61a272f4eb50e826d27dafaa7e82daa7280af25afbaa076ac16eb1e"></a>


#### Enumerator NonSequential

<a id="namespace_z_o_s_a_p_i_1a3c37540f7b61a272f4eb50e826d27dafa12d3de3f72d530905c690c2750951117"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemType"}]}`
-->

### Enumeration type LicenseStatusType

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493e"></a>

![][public]

**Definition**:


```csharp
enum LicenseStatusType {
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
  Timeout,
  InstanceConflict,
  OpticsViewer,
  OpticStudioHPCEdition,
  EnterpriseEdition,
  StudentEdition
}
```


Usage (see [Example 10](../apiexamples/example_10.md) for a full sample)


C# 
```csharp
            // Save Ray Path Analysis to Text File
            if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition)
            {
                IA_ RayPath = TheSystem.Analyses.New_Analysis(AnalysisIDM.PathAnalysis);
                ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis RayPath_settings = RayPath.GetSettings() as ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis;
                RayPath_settings.RayDatabaseFile = "e10_API_RayTrace.ZRD";
                RayPath.ApplyAndWaitForCompletion();
                IAR_ Rays = RayPath.GetResults();
                Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\CS\\e10_RayPathAnalysis.txt");
            }
            else
            {
                Console.Write("\nThe RayPathAnalysis is a premium feature only\n\nPress any key to continue\n");
                Console.ReadKey();
            }
```
 C++ 
```csharp
    // Save Ray Path Analysis to Text File
    if (TheApplication->LicenseStatus == ZOSAPI_Interfaces::LicenseStatusType::LicenseStatusType_PremiumEdition) {
        IA_Ptr RayPath = TheSystem->Analyses->New_Analysis(AnalysisIDM_PathAnalysis);
        ZOSAPI_Interfaces::IAS_PathAnalysisPtr RayPath_settings = RayPath->GetSettings();
        RayPath_settings->RayDatabaseFile = "e10_API_RayTrace.ZRD";
        RayPath->ApplyAndWaitForCompletion();

        IAR_Ptr Rays = RayPath->GetResults();
        Rays->GetTextFile(TheApplication->SamplesDir + "\\API\\CPP\\e10_RayPathAnalysis.txt");
    }
```
 Matlab 
```csharp
    % Save Ray Path Analysis to Text File
    if TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis);
        RayPath_settings = RayPath.GetSettings();
        RayPath_settings.RayDatabaseFile = 'e10_API_Raytrace.ZRD';
        RayPath.ApplyAndWaitForCompletion();
        Rays = RayPath.GetResults();
        Rays.GetTextFile(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e10_RayPathAnalysis.txt'));
    else
        fprintf('\nThe RayPathAnalysis is a premium feature only\n');
    end
```
 Python 
```csharp
    # Save Ray Path Analysis to Text File
    if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition):
        # there is a bug in ZOS16.5 SP4 with COM; need to use ZOS16.5 SP5 or higher to run this code successfully
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis)
        RayPath_settings = RayPath.GetSettings()
        zrd = "e10_API_RayTrace.ZRD"
        RayPath_settings.RayDatabaseFile = zrd
        RayPath.ApplyAndWaitForCompletion()

        Rays = RayPath.GetResults()
        Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\Python\\e10_RayPathAnalysis.txt")
```


#### Enumerator Unknown

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea88183b946cc5f0e8c96b2e66e1c74a7e"></a>


#### Enumerator KeyNotWorking

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493eae30c3d85ccc285b6c4cf428f13fc1bb2"></a>


#### Enumerator NewLicenseNeeded

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea63f7c30d809599bf49ef8d5d518f3ab8"></a>


#### Enumerator StandardEdition

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea80bcaf4301377c8b5dcd277ca28a7bb4"></a>


#### Enumerator ProfessionalEdition

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea2ed95be70a6ab6372a8dda3ebfd214d5"></a>


#### Enumerator PremiumEdition

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ead7c251f26e809b1c6294fa8c0a69b4f5"></a>


#### Enumerator TooManyInstances

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493eaa5ea7465492a8c5d19fbc46e789044b5"></a>


#### Enumerator NotAuthorized

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea418ec6476e1acd92e17681f4bd00e3a3"></a>


#### Enumerator KeyNotFound

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493eaa645e4cfc8d16be330607ad52aec5f98"></a>


#### Enumerator KeyExpired

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea3995421f2329ce6d6ba6b4ffad1e58ce"></a>


#### Enumerator Timeout

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493eac85a251cc457840f1e032f1b733e9398"></a>


#### Enumerator InstanceConflict

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea97ab5524427a661ccb9cd7bb133dd4ff"></a>


#### Enumerator OpticsViewer

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea0a55f5a93264f08c562bd0e8fa0f0e02"></a>


#### Enumerator OpticStudioHPCEdition

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea095d0bde25fd250873df0bc05d84dd02"></a>


#### Enumerator EnterpriseEdition

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea5fb4297717b3cc0d12b46f3f59fe9ecd"></a>


#### Enumerator StudentEdition

<a id="namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493ea732e0ba6a7d77f2f69b03fe6a52edc6d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.LicenseStatusType"}]}`
-->

### Enumeration type UpdateStatus

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9a"></a>

![][public]

**Definition**:


```csharp
enum UpdateStatus {
  CheckFailed = -2,
  NotSupported = -1,
  NotChecked = 0,
  UpToDate = 1,
  AvailableEligible = 2,
  AvailableIneligible = 3
}
```


#### Enumerator CheckFailed

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9aa67964924cf2737ff8335b0fed52d430f"></a>


#### Enumerator NotSupported

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9aa9ed2d871602556951e39f3cebd08d6cb"></a>


#### Enumerator NotChecked

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9aac9c0fcb2bb86adc799c4b7eb02412379"></a>


#### Enumerator UpToDate

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9aa761266b390b3dc960c74d9194512850a"></a>


#### Enumerator AvailableEligible

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9aad7c00931b9215da584bea3cc46e9d52e"></a>


#### Enumerator AvailableIneligible

<a id="namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9aabf78d5d426412bd40a10e886e14da89c"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.UpdateStatus"}]}`
-->

### Enumeration type ZOSAPI_Mode

<a id="namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2a"></a>

![][public]

**Definition**:


```csharp
enum ZOSAPI_Mode {
  Server,
  Operand,
  Plugin,
  UserAnalysis,
  UserAnalysisSettings
}
```


#### Enumerator Server

<a id="namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2aa9aa1b03934893d7134a660af4204f2a9"></a>

The connection is running in server or headless mode.


#### Enumerator Operand

<a id="namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2aa1b488933c47964ca059d24f978f094e4"></a>

User operand mode.


#### Enumerator Plugin

<a id="namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2aa409c1892b68cb394799262ac57f6d4f1"></a>

Extension mode.


#### Enumerator UserAnalysis

<a id="namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2aa64eebbd15ce06c7625d3e50c3d7b2cbd"></a>

User analysis mode &ndash perform the calculation.


#### Enumerator UserAnalysisSettings

<a id="namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2aab71755803158960255ee23dc613d4ac2"></a>

User analysis mode &ndash display/configure the analysis settings.


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ZOSAPI_Mode"}]}`
-->

### Enumeration type LensUpdateMode

<a id="namespace_z_o_s_a_p_i_1a928284b47bbcad0717a234689558250a"></a>

![][public]

**Definition**:


```csharp
enum LensUpdateMode {
  None = 0,
  EditorsOnly = 1,
  AllWindows = 2
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1a928284b47bbcad0717a234689558250aa6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator EditorsOnly

<a id="namespace_z_o_s_a_p_i_1a928284b47bbcad0717a234689558250aa52a1d4089c743f81411a51a99d90a2e1"></a>


#### Enumerator AllWindows

<a id="namespace_z_o_s_a_p_i_1a928284b47bbcad0717a234689558250aa59ffd36b33cc5de3325845c3353ec433"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.LensUpdateMode"}]}`
-->

### Enumeration type SessionModes

<a id="namespace_z_o_s_a_p_i_1a0bbab31714d9ab6077ce3a689a286f42"></a>

![][public]

**Definition**:


```csharp
enum SessionModes {
  FromPreferences = 0,
  SessionOn = 1,
  SessionOff = 2
}
```


#### Enumerator FromPreferences

<a id="namespace_z_o_s_a_p_i_1a0bbab31714d9ab6077ce3a689a286f42a8e0a81536e3612d31a704c3ece62a68f"></a>


#### Enumerator SessionOn

<a id="namespace_z_o_s_a_p_i_1a0bbab31714d9ab6077ce3a689a286f42a1f6ef1cc58fdff6cdfd7c8f5dda169ad"></a>


#### Enumerator SessionOff

<a id="namespace_z_o_s_a_p_i_1a0bbab31714d9ab6077ce3a689a286f42a5735ac012ce18416658c0d7462c32be8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SessionModes"}]}`
-->

### Enumeration type STARUpdateMode

<a id="namespace_z_o_s_a_p_i_1a55b9060ae2fffe30bd5c6cb28e8cd164"></a>

![][public]

**Definition**:


```csharp
enum STARUpdateMode {
  Normal,
  Suspended
}
```


#### Enumerator Normal

<a id="namespace_z_o_s_a_p_i_1a55b9060ae2fffe30bd5c6cb28e8cd164a960b44c579bc2f6818d2daaf9e4c16f0"></a>


#### Enumerator Suspended

<a id="namespace_z_o_s_a_p_i_1a55b9060ae2fffe30bd5c6cb28e8cd164a8bf906833cc7aea8084f552217ed9c1d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.STARUpdateMode"}]}`
-->

## Functions

### Function OpticalSystemStatusChangedHandler

<a id="namespace_z_o_s_a_p_i_1afaf981c5f923ffd5800be6562f3ebc0a"></a>

![][public]


```csharp
delegate void ZOSAPI.OpticalSystemStatusChangedHandler(int systemId, string newStatus)
```


**Parameters**:

* int **systemId**
* string **newStatus**

**Return type**: delegate void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.OpticalSystemStatusChangedHandler"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
