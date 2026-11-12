# Method RunFatigueAnalysisAndGenerateContours
<div align="right"><a href="/lib/VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysisAndGenerateContours.md" download="VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysisAndGenerateContours.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysisAndGenerateContours_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysisAndGenerateContours_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> RunFatigueAnalysisAndGenerateContours\(IDurabilityAnalysisParameter\)

Runs a fatigue analysis and then generates fatigue contours using the specified parameters.

```csharp
public static bool RunFatigueAnalysisAndGenerateContours(IDurabilityAnalysisParameter parameter)
```

### Parameters

`parameter` [IDurabilityAnalysisParameter](VM.ViewModels.Post.IDurabilityAnalysisParameter.md)

The imported result document, fatigue result name, state range, repeated-load count, and target IDs used for both operations.

### Returns

 bool

`true` when both the fatigue analysis and contour generation complete successfully; otherwise, `false`.

### Remarks

This method is obsolete. Call [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md), then call [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md) for `Fatigue/Life Cycle` and `Fatigue/Damage` instead.

For the complete replacement flow, see [Operation API Example - Fatigue Analysis](../document/operation-api/example/example_analysis_for_operation_api.md#fatigue-analysis).

### Exceptions

 Exception

Thrown when the active view is not an animation view or the fatigue analysis cannot complete.
