# Property LowCutOffFrequency
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_LowCutOffFrequency"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_LowCutOffFrequency"></a> LowCutOffFrequency

Gets or sets the lower cutoff frequency, in the frequency unit of the source curve, for band-pass or band-stop filtering.

```csharp
double LowCutOffFrequency { get; set; }
```

### Property Value

 double

### Remarks

This value is used when [`FilteringType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FilteringType.md) selects a band filter. Changing it recalculates the calculated curve when an original curve exists.
