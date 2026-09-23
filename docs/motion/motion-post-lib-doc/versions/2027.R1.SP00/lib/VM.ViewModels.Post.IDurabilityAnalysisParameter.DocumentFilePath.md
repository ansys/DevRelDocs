# Property DocumentFilePath
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_DocumentFilePath"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_DocumentFilePath"></a> DocumentFilePath

Gets or sets the path of the imported result document used for the fatigue analysis.

```csharp
string DocumentFilePath { get; set; }
```

### Property Value

 string

### Remarks

[RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) uses this path to find the active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) for the analysis. The path must match a document already imported through [AddDocument\(IList<string\>\)](VM.API.Post.Operations.ApplicationHandler.AddDocument.md).
