# Property ResultName
<div align="right"><a href="/lib/VM.ViewModels.Post.IDurabilityAnalysisParameter.ResultName.md" download="VM.ViewModels.Post.IDurabilityAnalysisParameter.ResultName.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_ResultName"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_ResultName"></a> ResultName

Gets or sets the fatigue result name assigned to the analyzed document.

```csharp
string ResultName { get; set; }
```

### Property Value

 string

### Remarks

When this value is empty, [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) uses the imported result document's name without its file extension as the fatigue result name.
