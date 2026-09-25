# Property Order
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_Order"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_Order"></a> Order

Gets or sets the filter order passed to the filtering calculation.

```csharp
int Order { get; set; }
```

### Property Value

 int

### Remarks

This value applies when [`SignalProcessingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md) selects filtering. Changing it recalculates the calculated curve when an original curve exists.
