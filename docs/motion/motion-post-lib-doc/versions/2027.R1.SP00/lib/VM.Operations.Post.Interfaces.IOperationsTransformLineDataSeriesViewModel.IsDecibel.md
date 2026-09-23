# Property IsDecibel
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_IsDecibel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_IsDecibel"></a> IsDecibel

Gets or sets whether the log-scale transform uses decibel values.

```csharp
bool IsDecibel { get; set; }
```

### Property Value

 bool

### Remarks

When set to `true`, the transform sets [`Coefficient`](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.Coefficient.md) to `20` and [`Base`](VM.Operations.Post.Interfaces.IOperationsTransformLineDataSeriesViewModel.Base.md) to `10`, then recalculates the curve.
