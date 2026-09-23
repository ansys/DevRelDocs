# Method RunFatigueAnalysis
<a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> RunFatigueAnalysis\(IDurabilityAnalysisParameter\)

Runs a fatigue analysis for the targets and state range specified by [`IDurabilityAnalysisParameter`](VM.ViewModels.Post.IDurabilityAnalysisParameter.md).

```csharp
public static bool RunFatigueAnalysis(IDurabilityAnalysisParameter parameter)
```

### Parameters

`parameter` [IDurabilityAnalysisParameter](VM.ViewModels.Post.IDurabilityAnalysisParameter.md)

The imported result document, fatigue result name, state range, repeated-load count, and target IDs used for the analysis.

### Returns

 bool

`true` when the fatigue analysis completes successfully.

### Examples

```python
# Get the document and dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Create the animation view.
page_name = "Page"
page = application_handler.GetPage(page_name)
animation_view_name = "ResultAnimation"
animation_view = page.CreateAnimation(analysis_result, animation_view_name)

# Configure the target body's fatigue material and settings.
body_name = "FEBody_01"
material_name = "2014_HV_O"
febody = animation_view.GetViewModelByName(body_name)
material = animation_view.GetViewModelByName(material_name)
febody.Material = material
febody.AnalysisType = FatigueAnalysisType.SN
febody.StressStrainCombination = StressStrainCombinationType.VonMises
febody.MeanStressCorrection = MeanStressCorrection.Neglect

# Configure the fatigue analysis parameters.
durability_parameter = DurabilityAnalysisParameter()
# RESULT_FILE_PATH : .dfr result file path
durability_parameter.DocumentFilePath = RESULT_FILE_PATH

# FATIGUE_RESULT_NAME : name of the fatigue result file in the Fatigue folder, without the .dffrf extension
durability_parameter.ResultName = FATIGUE_RESULT_NAME
repeated_load_count = 1
start_state = 1
end_state = 10
durability_parameter.NoOfRepeatedLoad = repeated_load_count
durability_parameter.Start = start_state
durability_parameter.End = end_state
durability_parameter.AddTarget(febody.ID)
DurabilityAnalysis.RunFatigueAnalysis(durability_parameter)
```

### Remarks

The active view must implement [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) for the document identified by [`DocumentFilePath`](VM.ViewModels.Post.IDurabilityAnalysisParameter.DocumentFilePath.md). The analysis uses the target IDs and state range in <code class="paramref">parameter</code> to write and run the fatigue analysis.

> [!IMPORTANT]
> Activate the required `IOperationsAnimation` with [Activate\(\)](VM.Operations.Post.Interfaces.IView.Activate.md) before calling this method.

### Exceptions

 Exception

Thrown when the active view is not an animation view or the fatigue analysis cannot complete.
