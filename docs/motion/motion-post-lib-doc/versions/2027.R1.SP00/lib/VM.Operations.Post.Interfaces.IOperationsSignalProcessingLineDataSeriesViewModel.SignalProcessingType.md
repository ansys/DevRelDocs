# Property SignalProcessingType
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md" download="VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
