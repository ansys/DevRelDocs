# Property CutOffFrequency
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_CutOffFrequency"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_CutOffFrequency"></a> CutOffFrequency

Gets or sets the cutoff frequency, in the frequency unit of the source curve, for low-pass or high-pass filtering.

```csharp
double CutOffFrequency { get; set; }
```

### Property Value

 double

### Remarks

This value is used when [`FilteringType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FilteringType.md) selects low-pass or high-pass filtering. Changing it recalculates the calculated curve when an original curve exists.
