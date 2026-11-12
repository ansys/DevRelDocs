# Method RunFatigueAnalysis
<div align="right"><a href="/lib/VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md" download="VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> RunFatigueAnalysis\(IDurabilityAnalysisParameter\)

Runs a fatigue analysis for the targets and state range specified by [`IDurabilityAnalysisParameter`](VM.ViewModels.Post.IDurabilityAnalysisParameter.md).

For a complete operations, see [Operation API Example - Fatigue Analysis](../document/operation-api/example/example_analysis_for_operation_api.md#fatigue-analysis).

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
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)

# Create the animation view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(analysis_result, animation_view_name)

# Configure the target body's fatigue material and settings.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The finite-element body with the specified name.
febody = animation_view.GetViewModelByName(entity_name)
# The fatigue material must already be registered in the Postprocessor UI.
# The name of the fatigue material.
material_name = "2014_HV_O"
# The fatigue material of the body.
material = animation_view.GetViewModelByName(material_name)
febody.Material = material
febody.AnalysisType = FatigueAnalysisType.SN
febody.StressStrainCombination = StressStrainCombinationType.VonMises
febody.MeanStressCorrection = MeanStressCorrection.Neglect

# Configure the fatigue analysis parameters.
durability_parameter = DurabilityAnalysisParameter()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
durability_parameter.DocumentFilePath = RESULT_FILE_PATH

# FATIGUE_RESULT_NAME : name of the fatigue result file in the Fatigue folder, without the .dffrf extension (e.g., FEBody_01_Fatigue)
durability_parameter.ResultName = FATIGUE_RESULT_NAME
# The number of times the load is repeated.
repeated_load_count = 1
# The first state of the analysis range.
start_state = 1
# The last state of the analysis range.
end_state = 10
durability_parameter.NoOfRepeatedLoad = repeated_load_count
durability_parameter.Start = start_state
durability_parameter.End = end_state
durability_parameter.AddTarget(febody.ID)
DurabilityAnalysis.RunFatigueAnalysis(durability_parameter)
```

### Remarks

The active view must implement [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) for the document identified by [`DocumentFilePath`](VM.ViewModels.Post.IDurabilityAnalysisParameter.DocumentFilePath.md). The analysis uses the target IDs and state range in <code class="paramref">parameter</code> to write and run the fatigue analysis.

<Danger>
Activate the required `IOperationsAnimation` with [Activate\(\)](VM.Operations.Post.Interfaces.IView.Activate.md) before calling this method.
</Danger>

### Exceptions

 Exception

Thrown when the active view is not an animation view or the fatigue analysis cannot complete.
