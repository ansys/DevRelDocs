# Property FrequencyAxisType
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FrequencyAxisType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_FrequencyAxisType"></a> FrequencyAxisType

Gets or sets the frequency axis selected from `FrequencyAxisType` during frequency weighting.

```csharp
FrequencyAxisType FrequencyAxisType { get; set; }
```

### Property Value

 [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

### Remarks

This value applies when [`SignalProcessingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md) selects frequency weighting and determines whether the X or Y values are used as frequency data.
