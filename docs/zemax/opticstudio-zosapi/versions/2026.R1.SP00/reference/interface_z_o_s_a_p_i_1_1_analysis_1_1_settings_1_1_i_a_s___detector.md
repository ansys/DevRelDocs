# Interface ZOSAPI::Analysis::Settings::IAS_Detector

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetDetectorNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector_1af163ef8793bc7f09873c456801282620)
* [SetDetectorNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector_1ad1d58eebd22900f71622b83219456264)
* [SummarizeAll](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector_1a94e30a2f249a73b43b46d6fa002ee22c)

## Public functions

### Function GetDetectorNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector_1af163ef8793bc7f09873c456801282620"></a>

![][public]


```csharp
int ZOSAPI.Analysis.Settings.IAS_Detector.GetDetectorNumber()
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_Detector.GetDetectorNumber"}]}`
-->

### Function SetDetectorNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector_1ad1d58eebd22900f71622b83219456264"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Settings.IAS_Detector.SetDetectorNumber(int N)
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


**Parameters**:

* int **N**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_Detector.SetDetectorNumber"}]}`
-->

### Function SummarizeAll

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector_1a94e30a2f249a73b43b46d6fa002ee22c"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Settings.IAS_Detector.SummarizeAll()
```


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_Detector.SummarizeAll"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
