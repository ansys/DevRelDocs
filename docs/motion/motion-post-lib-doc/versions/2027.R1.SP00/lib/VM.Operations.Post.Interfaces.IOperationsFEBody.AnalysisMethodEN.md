# Property AnalysisMethodEN
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AnalysisMethodEN"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AnalysisMethodEN"></a> AnalysisMethodEN

Gets or sets the mean-stress method selected from [`AnalysisMethodEN`](VM.Models.Post.AnalysisMethodEN.md) for strain-life fatigue analysis.

```csharp
AnalysisMethodEN AnalysisMethodEN { get; set; }
```

### Property Value

 [AnalysisMethodEN](VM.Models.Post.AnalysisMethodEN.md)

### Remarks

This property applies when [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) selects strain-life analysis. Changing it updates the mean-stress method stored for fatigue evaluation.
