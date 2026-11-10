# Properties
<div align="right"><a href="/document/operation-api/feature/op_chart_properties.md" download="op_chart_properties.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers setting how [`IOperationsLine2DViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md) looks and, with [`IOperationsLine2DViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.md), what it shows. These settings change the chart itself, while its curve data stays ready for curve operations and export.

## Configuring
Set these properties to change the chart:

- Background and border color with [`Background`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Background.md) and [`BorderColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.BorderColor.md).
- Title text with [`ChartTitle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartTitle.md).
- Title color, face, size, style, and weight with [`FontColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontColor.md), [`FontFace`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontFace.md), [`FontSize`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontSize.md), [`FontStyle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontStyle.md), and [`FontWeight`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontWeight.md).
- Single-axis or multiple-axis display with [`ChartAxisType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartAxisType.md).

## Displaying
For `IOperationsLine2DViewModel`, show or hide the X and Y axes with [`AxisX`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.AxisX.md) and [`AxisY`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.AxisY.md).

Show or hide the legend and the animation bar with [`ShowLegend`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowLegend.md) and [`ShowAnimationBar`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowAnimationBar.md).

- Show or hide minimum and maximum values with [`ShowVisibleMinMax`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowVisibleMinMax.md).
- Show or hide tracking with [`TrackingCurve`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingCurve.md), and choose how tracking behaves with [`TrackingOption`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingOption.md).

Set up the chart legend itself with [`Legend`](../../../lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.Legend.md).
