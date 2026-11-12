# Property CutOffFrequency
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.CutOffFrequency.md" download="VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.CutOffFrequency.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
