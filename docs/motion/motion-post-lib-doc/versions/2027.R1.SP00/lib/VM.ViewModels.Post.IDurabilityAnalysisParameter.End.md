# Property End
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_End"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_End"></a> End

Gets or sets the last State included in the fatigue analysis range.

```csharp
int End { get; set; }
```

### Property Value

 int

### Remarks

[RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) analyzes States from [`Start`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Start.md) through this value, including both endpoints. A value lower than `Start` produces an empty state range.
