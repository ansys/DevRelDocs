# Method RunFatigueAnalysisAndGenerateContours
<a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysisAndGenerateContours_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_DurabilityAnalysis_RunFatigueAnalysisAndGenerateContours_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> RunFatigueAnalysisAndGenerateContours\(IDurabilityAnalysisParameter\)

Runs a fatigue analysis and then generates fatigue contours using the specified parameters.

```csharp
[Obsolete("")]
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
