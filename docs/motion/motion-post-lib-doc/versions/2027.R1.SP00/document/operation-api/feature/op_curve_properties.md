# Properties
This feature covers naming a curve and setting how its line, points, and curve form look with [`IOperationsLineDataSeriesViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md). These settings apply to a curve already added through [Manage a Curve](op_manage_curve.md) or created through [Postprocess a Curve](op_postprocess_curve.md), and change how that curve appears in the chart.

## Configuring
Name the curve with [`SeriesName`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesName.md).

Set the line's thickness, color, and style with [`Thickness`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.Thickness.md), [`Color`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.Color.md), and [`LineStyle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.LineStyle.md).

Set the point size and point shape with [`PointSize`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointSize.md) and [`PointType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.PointType.md).

Choose how the curve as a whole is drawn with [`SeriesType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.SeriesType.md).