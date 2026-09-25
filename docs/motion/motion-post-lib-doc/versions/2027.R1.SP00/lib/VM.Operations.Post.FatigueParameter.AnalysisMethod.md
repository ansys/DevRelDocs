# Property AnalysisMethod
<a id="VM_Operations_Post_FatigueParameter_AnalysisMethod"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_AnalysisMethod"></a> AnalysisMethod

Gets or sets the legacy strain-life analysis method selected from [`AnalysisMethodEN`](VM.Models.Post.AnalysisMethodEN.md) for the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public AnalysisMethodEN AnalysisMethod { get; set; }
```

### Property Value

 [AnalysisMethodEN](VM.Models.Post.AnalysisMethodEN.md)

### Remarks

This property is obsolete. New analyses set [`AnalysisMethodEN`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisMethodEN.md) when [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) selects strain-life analysis.
