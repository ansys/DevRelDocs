# Property Coefficient
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Coefficient"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Coefficient"></a> Coefficient

Gets or sets the coefficient used by the log-scale transform.

```csharp
double Coefficient { get; set; }
```

### Property Value

 double

### Remarks

When the transform type is `LogScale`, this value scales the logarithmic result. Setting [`IsDecibel`](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.IsDecibel.md) to `true` changes it to `20`.
