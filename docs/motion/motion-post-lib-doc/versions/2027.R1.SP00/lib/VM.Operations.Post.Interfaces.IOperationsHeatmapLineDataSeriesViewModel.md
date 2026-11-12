# Interface IOperationsHeatmapLineDataSeriesViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsHeatmapLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides interval and harmonic settings for a heat-map curve.

```csharp
public interface IOperationsHeatmapLineDataSeriesViewModel : IOperationsLineDataSeriesViewModelBase, IViewModel
```

## Properties

 [Harmonic](VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.Harmonic.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapLineDataSeriesViewModel\_Harmonic)

Gets or sets the harmonic slope used at the beginning of the generated curve.

 [Interval](VM.Operations.Post.Interfaces.IOperationsHeatmapLineDataSeriesViewModel.Interval.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatmapLineDataSeriesViewModel\_Interval)

Gets or sets the interval between heat-map samples or frequency positions.
