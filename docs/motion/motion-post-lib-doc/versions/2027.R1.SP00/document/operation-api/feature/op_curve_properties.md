# Properties
<div align="right"><a href="/document/operation-api/feature/op_curve_properties.md" download="op_curve_properties.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers naming a curve and setting how its line, points, and curve form look with [`IOperationsLineDataSeriesViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md). These settings apply to a curve already added through [Manage a Curve](op_manage_curve.md) or created through [Postprocess a Curve](op_postprocess_curve.md), and change how that curve appears in the chart.

## Configuring
Name the curve with [`SeriesName`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesName.md).

Set the line's thickness, color, and style with [`Thickness`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.Thickness.md), [`Color`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.Color.md), and [`LineStyle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.LineStyle.md).

Set the point size and point shape with [`PointSize`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointSize.md) and [`PointType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointType.md).

Choose how the curve as a whole is drawn with [`SeriesType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md).
