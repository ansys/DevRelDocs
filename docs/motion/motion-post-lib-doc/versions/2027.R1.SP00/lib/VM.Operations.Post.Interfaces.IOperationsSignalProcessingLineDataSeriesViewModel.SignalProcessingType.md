# Property SignalProcessingType
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SignalProcessingType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_SignalProcessingType"></a> SignalProcessingType

Gets or sets the signal-processing operation selected from `SignalProcessingType` and applied to the source curve.

```csharp
SignalProcessingType SignalProcessingType { get; set; }
```

### Property Value

 [SignalProcessingType](VM.Models.Post.SignalProcessingType.md)

### Remarks

Filtering uses [`FilteringType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FilteringType.md), smoothing uses [`SmoothingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SmoothingType.md), and frequency weighting uses [`WeightingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.WeightingType.md) with [`FrequencyAxisType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FrequencyAxisType.md). Changing this value recalculates the calculated curve when an original curve exists.
