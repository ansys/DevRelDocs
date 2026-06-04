# Interface ZOSAPI::Analysis::Settings::RayTracing::IAS_DetectorViewer

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 10](../apiexamples/example_10.md) for a full sample)


C# 
```csharp
            // Open Detector Viewer, view previously saved .zrd file
            IA_ DetectorView = TheSystem.Analyses.New_DetectorViewer();
            IAS_DetectorViewer DetectorView_Settings = DetectorView.GetSettings() as IAS_DetectorViewer;
            DetectorView_Settings.RayDatabaseFilename = "e10_API_RayTrace.ZRD";
            DetectorView_Settings.ShowAs = DetectorViewerShowAsTypes.FalseColor;
            DetectorView_Settings.Filter = "X_HIT(2, 4)";  // Detector will only display rays which hit object 2 exactly 4 times

            DetectorView.ApplyAndWaitForCompletion();  // Apply Settings to Detector Viewer
```
 C++ 
```csharp
    // Open Detector Viewer, view previously saved .zrd file
    IA_Ptr DetectorView = TheSystem->Analyses->New_DetectorViewer();
    IAS_DetectorViewerPtr DetectorView_Settings = DetectorView->GetSettings();
    DetectorView_Settings->RayDatabaseFilename = "e10_API_Raytrace.ZRD";
    DetectorView_Settings->ShowAs = DetectorViewerShowAsTypes_FalseColor;
    // Detector will only display rays which hit object 2 exactly 4 times
    DetectorView_Settings->Filter = "X_HIT(2, 4)";
    // Apply Settings to Detector Viewer
    DetectorView->ApplyAndWaitForCompletion();  
```
 Matlab 
```csharp
    % Open Detector Viewer, view previously saved .zrd file
    DetectorView = TheSystem.Analyses.New_DetectorViewer();
    DetectorView_Settings = DetectorView.GetSettings();
    DetectorView_Settings.RayDatabaseFilename = 'e10_API_Raytrace.ZRD';
    DetectorView_Settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor;
    DetectorView_Settings.Filter = 'X_HIT(2, 4)';  % Detector will only display rays which hit object 2 exactly 4 times

    DetectorView.ApplyAndWaitForCompletion(); % Apply Settings to Detector Viewer
```
 Python 
```csharp
    # Open Detector Viewer, view previously saved .zrd file
    DetectorView = TheSystem.Analyses.New_DetectorViewer()
    DetectorView_Settings = DetectorView.GetSettings()
    DetectorView_Settings.RayDatabaseFilename = "e10_API_Raytrace.ZRD"
    DetectorView_Settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor
    DetectorView_Settings.Filter = "X_HIT(2, 4)"  # Detector will only display rays which hit object 2 exactly 4 times
    DetectorView.ApplyAndWaitForCompletion()  # Apply Settings to Detector Viewer
```

**Inherits from**:

* [ZOSAPI.Analysis.Settings.IAS\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__)

## Members

* [AngleList](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1abbae8fa3b26b46646085ec6351cded46)
* [Configuration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a5c62d1cf48343612bd00dc2db8a55240)
* [Contrast](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a46f84491e7438cdf793607a79fdc21c5)
* [DataType](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a77590e3bc23177ecb3b88449eec7e7e3)
* [Detector](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ad949867cd677e510d3830ba9e2b02770)
* [ExtraProperty](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ab3b8b37e639e4d3cdc0a5c2e3833b34d)
* [Filter](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1afd5e6e3afb0c7db238ae0679efc070be)
* [GetDetectorName](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1aacd98aaf55c13cfa149affb84d753093)
* [GetDetectorObjectNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a94855f3aac7bc5a83cb0e0642d1038e9)
* [GetNonSequentialSurfaceName](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a44869db62f1d31c8aee6bc11a96786ea)
* [GetNonSequentialSurfaceNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1aaf8cedb29e3807f7044aeb4a9d50f09a)
* [GetShowAsTypeNameAt](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a2d57f058eacf6c9ca5d09c9b69cfe032)
* [IsValidDetector](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ab59f7cc71bd364fc1f92c55cf5195f41)
* [Load](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76)
* [LoadFrom](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650)
* [MaxSpatialFrequency](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1aad31d48e29f768ae343d225c845e23d8)
* [ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309)
* [NumberOfDetectorsOnSurface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1abc99159e111a9baf91ab46bf6c3cfade)
* [NumberOfNonSequentialSurfaces](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1af967847bece2c671640d3898c7b72b6b)
* [NumberOfShowAsTypes](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a4c3f5c59f4b0f82e997961a0b74215be)
* [OutFile](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a0014ee3fe0d6955e939892e6580c6378)
* [PlotScaleMaximum](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a36b761dd16098b8ace940e082665ca24)
* [PlotScaleMinimum](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a8761f116ac8268fd63f31f3df6d19dce)
* [RayDatabaseFilename](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a695207ecd3fde47169c689d4ec3e3164)
* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277)
* [RowCol](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ad6bcb1f948c56d1c1713cb0266035d9a)
* [Save](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca)
* [SaveTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7)
* [Scale](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a7ea2c9bd032453d1c02849da56e7c940)
* [ShowAs](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ab5c52fd5e7510919f4d6b9b5e41fa4b2)
* [Smoothing](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a3205823bb792692433d958d568a26299)
* [SuppressFrame](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a4c172b58594a6b8cf744d2608cbd30fd)
* [Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ae2e6e7a6e119f2b4c7b9ebd4f6fcc98f)
* [SymbolType](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a3e71e3f00230ecc99e11e8f252751f48)
* [Verify](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e)
* [Zplane](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a6e903171b6fb77cd193aa9287e08c25f)

## Properties

### Property Surface

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ae2e6e7a6e119f2b4c7b9ebd4f6fcc98f"></a>

![][public]

**Definition**:


```csharp
IAS_Surface ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Surface
```


**Return type**: [IAS\_Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Surface"}]}`
-->

### Property Detector

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ad949867cd677e510d3830ba9e2b02770"></a>

![][public]

**Definition**:


```csharp
IAS_Detector ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Detector
```


**Return type**: [IAS\_Detector](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Detector"}]}`
-->

### Property ShowAs

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ab5c52fd5e7510919f4d6b9b5e41fa4b2"></a>

![][public]

**Definition**:


```csharp
DetectorViewerShowAsTypes ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.ShowAs
```


Usage (see [Example 24](../apiexamples/example_24.md) for a full sample)


C# 
```csharp
            // Creates a new detector viewer analysis reference
            ZOSAPI.Analysis.IA_ d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);

            ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer d4_settings = d4.GetSettings() as ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer;
            d4_settings.Detector.SetDetectorNumber(4);
            d4_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
            d4.ApplyAndWaitForCompletion();

            ZOSAPI.Analysis.Data.IAR_ d4_Results = d4.GetResults();
            ZOSAPI.Analysis.Data.IAR_DataGridRgb d4_raw = d4_Results.GetDataGridRgb(0) as ZOSAPI.Analysis.Data.IAR_DataGridRgb;
```
 C++ 
```csharp
    // Creates a new detector viewer analysis reference
    IA_Ptr d4 = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_DetectorViewer);

    IAS_DetectorViewerPtr d4_settings = d4->GetSettings();
    d4_settings->Detector->SetDetectorNumber(4);
    d4_settings->ShowAs = DetectorViewerShowAsTypes_TrueColor;
    d4->ApplyAndWaitForCompletion();

    IAR_Ptr d4_results = d4->GetResults();
    IAR_DataGridRgbPtr d4_raw = d4_results->GetDataGridRgb(0);
```
 Matlab 
```csharp
    % Creates a new detector viewer analysis reference, changes to TrueColor for RGB extraction
    d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
    d4_settings = d4.GetSettings();
    d4_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
    d4_settings.Detector.SetDetectorNumber(4);
    d4.ApplyAndWaitForCompletion();
    d4_Results = d4.GetResults();
    d4_raw =  d4_Results.DataGridsRgb.Get(0);
```
 Python 
```csharp
    # Creates a new detector viewer analysis reference, changes to TrueColor for RGB extraction
    d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    det_settings = d4.GetSettings()
    det_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor
    det_settings.Detector.SetDetectorNumber(4);
    d4.ApplyAndWaitForCompletion()
    d4_Results = d4.GetResults()
    d4_raw = d4_Results.GetDataGridRgb(0)
```


**Return type**: [DetectorViewerShowAsTypes](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.ShowAs"}]}`
-->

### Property Scale

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a7ea2c9bd032453d1c02849da56e7c940"></a>

![][public]

**Definition**:


```csharp
DetectorViewerScaleTypes ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Scale
```


**Return type**: [DetectorViewerScaleTypes](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1aed28df3cd5d8c66babc3da0f30efaa86)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Scale"}]}`
-->

### Property DataType

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a77590e3bc23177ecb3b88449eec7e7e3"></a>

![][public]

**Definition**:


```csharp
DetectorViewerShowDataTypes ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.DataType
```


**Return type**: [DetectorViewerShowDataTypes](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.DataType"}]}`
-->

### Property SymbolType

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a3e71e3f00230ecc99e11e8f252751f48"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.SymbolType
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.SymbolType"}]}`
-->

### Property Configuration

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a5c62d1cf48343612bd00dc2db8a55240"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Configuration
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Configuration"}]}`
-->

### Property ExtraProperty

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ab3b8b37e639e4d3cdc0a5c2e3833b34d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.ExtraProperty
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.ExtraProperty"}]}`
-->

### Property Smoothing

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a3205823bb792692433d958d568a26299"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Smoothing
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Smoothing"}]}`
-->

### Property RowCol

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ad6bcb1f948c56d1c1713cb0266035d9a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.RowCol
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.RowCol"}]}`
-->

### Property Zplane

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a6e903171b6fb77cd193aa9287e08c25f"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Zplane
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Zplane"}]}`
-->

### Property Contrast

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a46f84491e7438cdf793607a79fdc21c5"></a>

![][public]

**Definition**:


```csharp
UInt16 ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Contrast
```


**Return type**: UInt16

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Contrast"}]}`
-->

### Property AngleList

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1abbae8fa3b26b46646085ec6351cded46"></a>

![][public]

**Definition**:


```csharp
UInt16 [] ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.AngleList
```


**Return type**: UInt16[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.AngleList"}]}`
-->

### Property PlotScaleMinimum

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a8761f116ac8268fd63f31f3df6d19dce"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.PlotScaleMinimum
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.PlotScaleMinimum"}]}`
-->

### Property PlotScaleMaximum

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a36b761dd16098b8ace940e082665ca24"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.PlotScaleMaximum
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.PlotScaleMaximum"}]}`
-->

### Property RayDatabaseFilename

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a695207ecd3fde47169c689d4ec3e3164"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.RayDatabaseFilename
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.RayDatabaseFilename"}]}`
-->

### Property Filter

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1afd5e6e3afb0c7db238ae0679efc070be"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Filter
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.Filter"}]}`
-->

### Property OutFile

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a0014ee3fe0d6955e939892e6580c6378"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.OutFile
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.OutFile"}]}`
-->

### Property SuppressFrame

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a4c172b58594a6b8cf744d2608cbd30fd"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.SuppressFrame
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.SuppressFrame"}]}`
-->

### Property NumberOfNonSequentialSurfaces

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1af967847bece2c671640d3898c7b72b6b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.NumberOfNonSequentialSurfaces
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.NumberOfNonSequentialSurfaces"}]}`
-->

### Property NumberOfDetectorsOnSurface

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1abc99159e111a9baf91ab46bf6c3cfade"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.NumberOfDetectorsOnSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.NumberOfDetectorsOnSurface"}]}`
-->

### Property NumberOfShowAsTypes

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a4c3f5c59f4b0f82e997961a0b74215be"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.NumberOfShowAsTypes
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.NumberOfShowAsTypes"}]}`
-->

### Property MaxSpatialFrequency

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1aad31d48e29f768ae343d225c845e23d8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.MaxSpatialFrequency
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.MaxSpatialFrequency"}]}`
-->

## Public functions

### Function GetNonSequentialSurfaceName

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a44869db62f1d31c8aee6bc11a96786ea"></a>

![][public]


```csharp
string ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetNonSequentialSurfaceName(int index)
```


**Parameters**:

* int **index**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetNonSequentialSurfaceName"}]}`
-->

### Function GetNonSequentialSurfaceNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1aaf8cedb29e3807f7044aeb4a9d50f09a"></a>

![][public]


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetNonSequentialSurfaceNumber(int index)
```


**Parameters**:

* int **index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetNonSequentialSurfaceNumber"}]}`
-->

### Function GetDetectorName

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1aacd98aaf55c13cfa149affb84d753093"></a>

![][public]


```csharp
string ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetDetectorName(int index)
```


**Parameters**:

* int **index**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetDetectorName"}]}`
-->

### Function GetDetectorObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a94855f3aac7bc5a83cb0e0642d1038e9"></a>

![][public]


```csharp
int ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetDetectorObjectNumber(int index)
```


**Parameters**:

* int **index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetDetectorObjectNumber"}]}`
-->

### Function GetShowAsTypeNameAt

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1a2d57f058eacf6c9ca5d09c9b69cfe032"></a>

![][public]


```csharp
string ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetShowAsTypeNameAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.GetShowAsTypeNameAt"}]}`
-->

### Function IsValidDetector

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer_1ab59f7cc71bd364fc1f92c55cf5195f41"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.IsValidDetector(int N)
```


**Parameters**:

* int **N**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer.IsValidDetector"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
