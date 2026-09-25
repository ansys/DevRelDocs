# Property AnalysisType
<a id="VM_Operations_Post_FatigueParameter_AnalysisType"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_AnalysisType"></a> AnalysisType

Gets or sets the legacy fatigue method selected from [`FatigueAnalysisType`](VM.Models.Post.FatigueAnalysisType.md) for the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public FatigueAnalysisType AnalysisType { get; set; }
```

### Property Value

 [FatigueAnalysisType](VM.Models.Post.FatigueAnalysisType.md)

### Remarks

This property is obsolete. New analyses set [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) on the selected target body.
