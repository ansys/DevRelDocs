# Property PolynomialOrder
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PolynomialOrder"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PolynomialOrder"></a> PolynomialOrder

Gets or sets the polynomial order passed to Savitzky-Golay smoothing.

```csharp
int PolynomialOrder { get; set; }
```

### Property Value

 int

### Remarks

This value applies only when [`SmoothingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SmoothingType.md) selects Savitzky-Golay smoothing. The calculation returns no curve when the window is too small for the selected order.
