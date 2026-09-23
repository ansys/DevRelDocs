# Property FilteringType
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FilteringType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FilteringType"></a> FilteringType

Gets or sets the filter mode selected from `FilteringType` for signal processing.

```csharp
FilteringType FilteringType { get; set; }
```

### Property Value

 [FilteringType](VM.Models.Post.FilteringType.md)

### Remarks

Low-pass and high-pass modes use [`CutOffFrequency`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.CutOffFrequency.md). Band-pass and band-stop modes use [`LowCutOffFrequency`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.LowCutOffFrequency.md) and [`HighCutOffFrequency`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.HighCutOffFrequency.md).
