# Property Targets
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_Targets"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_Targets"></a> Targets

Gets the identifiers of finite-element bodies selected for the fatigue analysis.

```csharp
IEnumerable<Guid> Targets { get; }
```

### Property Value

 IEnumerable<Guid\>

### Remarks

[AddTarget\(Guid\)](VM.ViewModels.Post.IDurabilityAnalysisParameter.AddTarget.md) and [RemoveTarget\(Guid\)](VM.ViewModels.Post.IDurabilityAnalysisParameter.RemoveTarget.md) modify this collection. [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) resolves each identifier to a finite-element body and ignores bodies that cannot perform fatigue analysis.
