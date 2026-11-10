# Property Start
<div align="right"><a href="/lib/VM.ViewModels.Post.IDurabilityAnalysisParameter.Start.md" download="VM.ViewModels.Post.IDurabilityAnalysisParameter.Start.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_Start"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_Start"></a> Start

Gets or sets the first State included in the fatigue analysis range.

```csharp
int Start { get; set; }
```

### Property Value

 int

### Remarks

[RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) analyzes States from this value through [`End`](VM.ViewModels.Post.IDurabilityAnalysisParameter.End.md), including both endpoints.
