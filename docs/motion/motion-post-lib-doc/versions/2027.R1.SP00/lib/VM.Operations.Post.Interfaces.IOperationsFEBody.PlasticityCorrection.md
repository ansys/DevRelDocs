# Property PlasticityCorrection
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_PlasticityCorrection"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_PlasticityCorrection"></a> PlasticityCorrection

Gets or sets the correction method selected from [`PlasticityCorrection`](VM.Models.Post.PlasticityCorrection.md) for strain-life fatigue analysis.

```csharp
PlasticityCorrection PlasticityCorrection { get; set; }
```

### Property Value

 [PlasticityCorrection](VM.Models.Post.PlasticityCorrection.md)

### Remarks

This property applies when [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) selects strain-life analysis. Changing it updates the plasticity correction stored for fatigue evaluation.
