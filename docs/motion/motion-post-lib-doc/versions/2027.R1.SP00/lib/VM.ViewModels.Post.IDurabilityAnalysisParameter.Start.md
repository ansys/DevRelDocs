# Property Start
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
