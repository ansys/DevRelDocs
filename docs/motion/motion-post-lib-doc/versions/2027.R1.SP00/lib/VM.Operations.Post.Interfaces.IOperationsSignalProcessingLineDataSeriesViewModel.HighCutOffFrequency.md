# Property HighCutOffFrequency
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_HighCutOffFrequency"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_HighCutOffFrequency"></a> HighCutOffFrequency

Gets or sets the upper cutoff frequency, in the frequency unit of the source curve, for band-pass or band-stop filtering.

```csharp
double HighCutOffFrequency { get; set; }
```

### Property Value

 double

### Remarks

This value is used when [`FilteringType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FilteringType.md) selects a band filter. Changing it recalculates the calculated curve when an original curve exists.
