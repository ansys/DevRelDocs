# Manage a Curve
This feature covers adding, finding, removing, and exporting curve data in [`IOperationsLine2DViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md). A curve added here can be used as input to a curve operation, see [Postprocess a Curve](op_postprocess_curve.md), and its look can be set through [Curve Properties](op_curve_properties.md).

## Creating
Find the characteristic names available for an entity with [`GetPlotCharacteristics(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md), and find the component names for a selected characteristic with [`GetPlotComponents(string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md). Combine a characteristic and component to build the paths assigned to [`Paths`](../../../lib/VM.Models.OutputReader.PlotParameters.Paths.md).

Add curve data from a result file with [`AddCurves(string, PlotParameters)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.AddCurves.md). The target, coordinate system, and data paths chosen in `PlotParameters` decide which curves are added.

When a curve needs its own source settings instead, create its curve data directly with [`CreateLineDataSeries(string, string, string, string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.CreateLineDataSeries.md).

## Getting
Get one curve with [`GetCurve(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurve.md) or [`GetCurveByID(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurveByID.md). Get several curves at once with [`GetCurves()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurves.md) or [`GetCurves(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurves.md).

Get the most recently added curve with [`GetLastCurve()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetLastCurve.md), and get every curve name with [`GetCurveNameList()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurveNameList.md).

Get a chart axis by name with [`GetAxis(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetAxis.md) when curve data needs to use a named axis.

## Removing
Remove a curve with [`Remove(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Remove.md) or [`Remove(IOperationsLineDataSeriesViewModelBase)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Remove.md). Either way, the curve is taken off the chart.

## Exporting
Export curve data to a chosen path with [`ExportAllCurves(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves.md), with no dialog shown. Use [`ExportAllDataSeries()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllDataSeries.md) instead when picking the save location interactively makes more sense. Either way, the exported data can then be used outside the chart.