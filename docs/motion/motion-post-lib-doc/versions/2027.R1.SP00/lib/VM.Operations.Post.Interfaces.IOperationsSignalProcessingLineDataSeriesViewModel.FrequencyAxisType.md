# Property FrequencyAxisType
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FrequencyAxisType.md" download="VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.FrequencyAxisType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
