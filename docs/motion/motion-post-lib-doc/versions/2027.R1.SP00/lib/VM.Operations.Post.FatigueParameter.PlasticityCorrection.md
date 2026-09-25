# Property PlasticityCorrection
<a id="VM_Operations_Post_FatigueParameter_PlasticityCorrection"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_PlasticityCorrection"></a> PlasticityCorrection

Gets or sets the legacy plasticity correction selected from `PlasticityCorrection` for the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public PlasticityCorrection PlasticityCorrection { get; set; }
```

### Property Value

 [PlasticityCorrection](VM.Models.Post.PlasticityCorrection.md)

### Remarks

This property is obsolete. New analyses set [`PlasticityCorrection`](VM.Operations.Post.Interfaces.IOperationsFEBody.PlasticityCorrection.md) when [`AnalysisType`](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md) selects strain-life analysis.
