# Interface IOperationsLineDataSeriesViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides source-axis settings and axis-data creation operations for a curve.

```csharp
public interface IOperationsLineDataSeriesViewModel : IOperationsLineDataSeriesViewModelBase, IViewModel
```

## Properties

 [SourceX](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModel\_SourceX)

Gets or sets [`ILineDataSeriesAxisViewModel`](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md) used to obtain X values for the curve.

 [SourceY](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceY.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModel\_SourceY)

Gets or sets [`ILineDataSeriesAxisViewModel`](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md) used to obtain Y values for the curve.

## Methods

 [CreateLineDataSeries\(string, string, string, string, string\)](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.CreateLineDataSeries.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModel\_CreateLineDataSeries\_System\_String\_System\_String\_System\_String\_System\_String\_System\_String\_)

Creates [`IOperationsLineDataSeriesAxisViewModel`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesAxisViewModel.md) from a result file and selected result paths.

 [CreateLineDataSeries\(string, string, string, string, string, string, string\)](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.CreateLineDataSeries.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModel\_CreateLineDataSeries\_System\_String\_System\_String\_System\_String\_System\_String\_System\_String\_System\_String\_System\_String\_)

Creates source-axis data through an obsolete overload with separate parent and child target names.
