# Interface IOperationsLineDataSeriesViewModelBase
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md" download="VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides the name, line appearance, point appearance, and rendering type for a curve.

```csharp
public interface IOperationsLineDataSeriesViewModelBase : IViewModel
```

## Properties

 [Color](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.Color.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_Color)

Gets or sets the color used to render the curve.

 [LineStyle](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.LineStyle.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_LineStyle)

Gets or sets the dash style selected from [`LineStyleType`](VM.Models.Post.LineStyleType.md) to render the line.

 [PointSize](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_PointSize)

Gets or sets the size of points rendered for the curve.

 [PointType](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_PointType)

Gets or sets the marker shape selected from [`PointType`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointType.md) for points in the curve.

 [SeriesName](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesName.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_SeriesName)

Gets or sets the full name used to identify the curve in its chart.

 [SeriesType](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_SeriesType)

Gets or sets the rendering mode selected from [`SeriesType`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md) for the curve.

 [Thickness](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.Thickness.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_Thickness)

Gets or sets the rendered line thickness of the curve.
