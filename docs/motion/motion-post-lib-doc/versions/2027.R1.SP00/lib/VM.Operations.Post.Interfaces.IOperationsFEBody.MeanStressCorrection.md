# Property MeanStressCorrection
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_MeanStressCorrection"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_MeanStressCorrection"></a> MeanStressCorrection

Gets or sets the correction method selected from [`MeanStressCorrection`](VM.Models.Post.MeanStressCorrection.md) for stress-life fatigue analysis.

```csharp
MeanStressCorrection MeanStressCorrection { get; set; }
```

### Property Value

 [MeanStressCorrection](VM.Models.Post.MeanStressCorrection.md)

### Remarks

This property applies when [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) selects stress-life analysis. Changing it updates the mean-stress correction stored for fatigue evaluation.
