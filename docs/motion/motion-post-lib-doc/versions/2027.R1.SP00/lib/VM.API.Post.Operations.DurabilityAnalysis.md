# Class DurabilityAnalysis
<div align="right"><a href="/lib/VM.API.Post.Operations.DurabilityAnalysis.md" download="VM.API.Post.Operations.DurabilityAnalysis.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_DurabilityAnalysis"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

Provides methods for performing durability analysis operations.

```csharp
public static class DurabilityAnalysis
```

## Methods

 [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md\#VM\_API\_Post\_Operations\_DurabilityAnalysis\_RunFatigueAnalysis\_VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_)

Runs a fatigue analysis for the targets and state range specified by [`IDurabilityAnalysisParameter`](VM.ViewModels.Post.IDurabilityAnalysisParameter.md).

For a complete operations, see [Operation API Example - Fatigue Analysis](../document/operation-api/example/example_analysis_for_operation_api.md#fatigue-analysis).

 [RunFatigueAnalysisAndGenerateContours\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysisAndGenerateContours.md\#VM\_API\_Post\_Operations\_DurabilityAnalysis\_RunFatigueAnalysisAndGenerateContours\_VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_)

Runs a fatigue analysis and then generates fatigue contours using the specified parameters.

 [SetFatiguePath\(string, string\)](VM.API.Post.Operations.DurabilityAnalysis.SetFatiguePath.md\#VM\_API\_Post\_Operations\_DurabilityAnalysis\_SetFatiguePath\_System\_String\_System\_String\_)

Selects the fatigue result name used for subsequent operations on an imported document.
