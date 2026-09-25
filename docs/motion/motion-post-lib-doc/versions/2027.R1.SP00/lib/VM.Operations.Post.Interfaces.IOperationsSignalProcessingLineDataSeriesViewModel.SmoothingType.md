# Property SmoothingType
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SmoothingType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SmoothingType"></a> SmoothingType

Gets or sets the smoothing method selected from `SmoothingType`.

```csharp
SmoothingType SmoothingType { get; set; }
```

### Property Value

 [SmoothingType](VM.Models.Post.SmoothingType.md)

### Remarks

This value applies when [`SignalProcessingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md) selects smoothing. Savitzky-Golay smoothing additionally uses [`PolynomialOrder`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.PolynomialOrder.md).
