# Property ResultName
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
