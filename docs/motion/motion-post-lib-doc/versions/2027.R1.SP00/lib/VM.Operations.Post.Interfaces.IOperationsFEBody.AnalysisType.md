# Property AnalysisType
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AnalysisType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AnalysisType"></a> AnalysisType

Gets or sets the fatigue method selected from [`FatigueAnalysisType`](VM.Models.Post.FatigueAnalysisType.md) for finite-element durability analysis.

```csharp
FatigueAnalysisType AnalysisType { get; set; }
```

### Property Value

 [FatigueAnalysisType](VM.Models.Post.FatigueAnalysisType.md)

### Remarks

The selected method determines which fatigue settings apply. Strain-life analysis uses [`AnalysisMethodEN`](VM.Models.Post.AnalysisMethodEN.md) and [`PlasticityCorrection`](VM.Operations.Post.Interfaces.IOperationsFEBody.PlasticityCorrection.md), while stress-life analysis uses [`MeanStressCorrection`](VM.Operations.Post.Interfaces.IOperationsFEBody.MeanStressCorrection.md).
