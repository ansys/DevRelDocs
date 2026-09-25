# Properties
This feature covers setting how [`IOperationsLine2DViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md) looks and, with [`IOperationsLine2DViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.md), what it shows. These settings change the chart itself, while its curve data stays ready for curve operations and export.

## Configuring
Set these properties to change the chart:

- Background and border color with [`Background`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Background.md) and [`BorderColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.BorderColor.md).
- Title text with [`ChartTitle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartTitle.md).
- Title color, face, size, style, and weight with [`FontColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontColor.md), [`FontFace`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontFace.md), [`FontSize`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontSize.md), [`FontStyle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontStyle.md), and [`FontWeight`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontWeight.md).
- Single-axis or multiple-axis display with [`ChartAxisType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartAxisType.md).

## Displaying
For [`IOperationsLine2DViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.md), show or hide the X and Y axes with [`AxisX`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.AxisX.md) and [`AxisY`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.AxisY.md).

Show or hide the legend and the animation bar with [`ShowLegend`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowLegend.md) and [`ShowAnimationBar`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowAnimationBar.md).

- Show or hide minimum and maximum values with [`ShowVisibleMinMax`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowVisibleMinMax.md).
- Show or hide tracking with [`TrackingCurve`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingCurve.md), and choose how tracking behaves with [`TrackingOption`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.TrackingOption.md).

Set up the chart legend itself with [`Legend`](../../../lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.Legend.md).