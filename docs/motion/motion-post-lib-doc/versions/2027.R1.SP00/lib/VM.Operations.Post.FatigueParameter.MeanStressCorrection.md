# Property MeanStressCorrection
<a id="VM_Operations_Post_FatigueParameter_MeanStressCorrection"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_MeanStressCorrection"></a> MeanStressCorrection

Gets or sets the legacy mean-stress correction selected from `MeanStressCorrection` for the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public MeanStressCorrection MeanStressCorrection { get; set; }
```

### Property Value

 [MeanStressCorrection](VM.Models.Post.MeanStressCorrection.md)

### Remarks

This property is obsolete. New analyses set [`MeanStressCorrection`](VM.Operations.Post.Interfaces.IOperationsFEBody.MeanStressCorrection.md) on the selected target body.
