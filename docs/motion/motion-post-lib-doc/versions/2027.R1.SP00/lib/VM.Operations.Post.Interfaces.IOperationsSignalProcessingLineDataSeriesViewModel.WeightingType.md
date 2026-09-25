# Property WeightingType
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_WeightingType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_WeightingType"></a> WeightingType

Gets or sets the frequency-weighting method selected from `WeightingType`.

```csharp
WeightingType WeightingType { get; set; }
```

### Property Value

 [WeightingType](VM.Models.Post.WeightingType.md)

### Remarks

This value applies when [`SignalProcessingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md) selects frequency weighting. The weighting calculation uses [`FrequencyAxisType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FrequencyAxisType.md) to select the frequency axis.
