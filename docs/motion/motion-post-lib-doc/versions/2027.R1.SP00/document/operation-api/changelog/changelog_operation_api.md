# Operation API

## Added
- Added contour management methods to [`IOperationAnalysisResult`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.md):
  - [`GetContour(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContour.md)
  - [`RemoveContour(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.RemoveContour.md)
  - [`GetContourCharacteristics(string, ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md)
  - [`GetContourComponents(string, ContourMappingType, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md)
- Added plot characteristic and component retrieval methods to [`IOperationAnalysisResult`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.md):
  - [`GetPlotCharacteristics(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md)
  - [`GetPlotComponents(string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md)
- Added vector display characteristic and vector display management methods to [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md):
  - [`GetVectorDisplayCharacteristics(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md)
  - [`GetVectorDisplay(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplay.md)
  - [`RemoveVectorDisplay(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveVectorDisplay.md)
- Added Python expression management methods to [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md):
  - [`GetExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md)
  - [`RemoveExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md)
- Added coordinate-system retrieval and removal methods to [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md):
  - [`GetCoordinateSystem(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.GetCoordinateSystem.md)
  - [`RemoveCoordinateSystem(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.RemoveCoordinateSystem.md)
- Added the [`ShellResult`](../../../lib/VM.Operations.Post.Interfaces.IOperationsFEBody.ShellResult.md) property.
- Added the [`ShowVisibleMinMax`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModel.ShowVisibleMinMax.md) property.

## Changed
- Changed the view identity contract:
  - [`IView`](../../../lib/VM.Operations.Post.Interfaces.IView.md) now inherits [`IHasGuid`](../../../lib/VM.Models.Post.IHasGuid.md).
  - [`Index`](../../../lib/VM.Operations.Post.Interfaces.IView.Index.md) replaces the former integer ID property.
  - The view GUID is provided by [`ID`](../../../lib/VM.Models.Post.IHasGuid.ID.md).
- Changed the parameter name from `id` to `index` for:
  - [`CloseView(int)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CloseView.md)
  - [`GetView(int)`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetView.md)
- Renamed the [`ShellDirectionType`](../../../lib/VM.Models.Post.ShellDirectionType.md) enumeration members:
  - `TOP` to `Top`
  - `BOTTOM` to `Bottom`
- Removed properties from the `IOperationMaterial` interface:
  - `N`
  - `K`
- Replaced the `MaterialSequence` property on [`IFEProperty`](../../../lib/VM.Models.Post.IFEProperty.md) with [`FatigueMaterial`](../../../lib/VM.Models.Post.IFEProperty.FatigueMaterial.md), which exposes the fatigue material as a `FatigueMaterial` object instead of an integer sequence.

## Deprecated
- Deprecated [`AddPlotView()`](../../../lib/VM.API.Post.Operations.ApplicationHandler.AddPlotView.md). Use [`CreateChart(string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CreateChart.md) instead.
- Deprecated [`DurabilityAnalysis(IDurabilityAnalysisParameter)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.DurabilityAnalysis.md). Use [`RunFatigueAnalysis(IDurabilityAnalysisParameter)`](../../../lib/VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) and the contour APIs instead.
- Deprecated the [`ExportImage(IView, string, ExportType, double?, double?)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.ExportImage.md) overload. Use [`ExportImage(string, ImageFormat, double?, double?)`](../../../lib/VM.Operations.Post.Interfaces.IView.ExportImage.md) instead.
- Deprecated active-view helper methods:
  - [`GetActiveAnimationView()`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetActiveAnimationView.md)
  - [`GetActivePlotView()`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetActivePlotView.md)
  Use [`GetActiveView()`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetActiveView.md) instead.
- Deprecated view lookup methods:
  - [`GetView(int)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetView.md)
  - [`GetView(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetView.md)
  Use the corresponding [`GetView(int)`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetView.md) or [`GetView(string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetView.md) method instead.
- Deprecated [`ImportNumeric(IOperationsLine2DViewModelBase, string, List<INumericParameter>)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.ImportNumeric.md). Use [`ImportNumeric(string, List<INumericParameter>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md) instead.
- Deprecated [`RemoveDocument(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.RemoveDocument.md). Use [`CloseDocument(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.CloseDocument.md) instead.
- Deprecated [`RemoveView(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.RemoveView.md). Use [`CloseView(string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CloseView.md) instead.
- Deprecated [`RunFatigueAnalysisAndGenerateContours(IDurabilityAnalysisParameter)`](../../../lib/VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysisAndGenerateContours.md). Use [`RunFatigueAnalysis(IDurabilityAnalysisParameter)`](../../../lib/VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) together with the contour APIs instead.