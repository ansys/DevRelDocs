# Interface ZOSAPI::Analysis::RayTracing::IAS_PathAnalysis

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 10](page_ex10.md#page_ex10) for a full sample)


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

**Inherits from**:

* [ZOSAPI.Analysis.Settings.IAS\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__)

## Members

* [AvailableRayDatabaseFiles](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a46a8474942d1269cb61fca5da1045256)
* [FilterString](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a4a9b8ccfc995e93126d0f856532c4735)
* [FirstRay](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a1a7c799b41bee8486263cca5b151d0f3)
* [GeneratePathFilters](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a21b2ea7f0d089a8b4c0d525afdde6018)
* [LastRay](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a6587c04a89bfc8f4ef53ae3751753770)
* [Load](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76)
* [LoadFrom](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650)
* [ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309)
* [RayDatabaseFile](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a05b2aae5d5361fb4b47b99b49b844eea)
* [RelativeMinimumFlux](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1acaf79a7732a367ec5673b387d3854df1)
* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277)
* [Save](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca)
* [SaveTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7)
* [SortBy](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1ac8247bd43eb384a66c4b124061611a1c)
* [Verify](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e)

## Properties

### Property RayDatabaseFile

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a05b2aae5d5361fb4b47b99b49b844eea"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.RayDatabaseFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.RayDatabaseFile"}]}`
-->

### Property AvailableRayDatabaseFiles

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a46a8474942d1269cb61fca5da1045256"></a>

![][public]

**Definition**:


```csharp
string [] ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.AvailableRayDatabaseFiles
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.AvailableRayDatabaseFiles"}]}`
-->

### Property FirstRay

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a1a7c799b41bee8486263cca5b151d0f3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.FirstRay
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.FirstRay"}]}`
-->

### Property LastRay

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a6587c04a89bfc8f4ef53ae3751753770"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.LastRay
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.LastRay"}]}`
-->

### Property FilterString

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a4a9b8ccfc995e93126d0f856532c4735"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.FilterString
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.FilterString"}]}`
-->

### Property GeneratePathFilters

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1a21b2ea7f0d089a8b4c0d525afdde6018"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.GeneratePathFilters
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.GeneratePathFilters"}]}`
-->

### Property RelativeMinimumFlux

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1acaf79a7732a367ec5673b387d3854df1"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.RelativeMinimumFlux
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.RelativeMinimumFlux"}]}`
-->

### Property SortBy

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis_1ac8247bd43eb384a66c4b124061611a1c"></a>

![][public]

**Definition**:


```csharp
PathAnalysisSortType ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.SortBy
```


**Return type**: [PathAnalysisSortType](namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1a4762143cc34e1bc8ca57136a898c5ed3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis.SortBy"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)