# Manage a Contour
This feature covers finding valid targets, creating contour data for them, changing how the contour looks, and exporting the result. Once enabled, the contour is shown in [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) view and appears in any frames captured from that view, and its data can also be saved to a file. Creating, finding, and removing contour data use [`IOperationAnalysisResult`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.md), its display settings use [`IOperationsContourViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.md), and exporting uses [`Export`](../../../lib/VM.API.Post.Operations.Export.md).

## Creating
Create [`IOperationsContourViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.md) with [`CreateContour(IList<string>, ContourMappingType, string, string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md). The new contour is added to the analysis result, so it can be turned on and shown in the animation.

Find target entity names that support a mapping type with [`GetContourables(ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md). For a selected target and mapping type, find available characteristics with [`GetContourCharacteristics(string, ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md). Then find available components with [`GetContourComponents(string, ContourMappingType, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md).

Pass the selected target names, mapping type, characteristic, and component to `CreateContour(IList<string>, ContourMappingType, string, string, string)`.

## Exporting
Export contour data with [`ExportContourResultToFile()`](../../../lib/VM.API.Post.Operations.Export.ExportContourResultToFile.md).

> [!IMPORTANT]
> The active view must be [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) for the chosen document, and an animation frame must already be loaded, before this export is called. Load a frame with the operations described in [Control Animation Playback](op_control_animation_playback.md#loading).

## Properties
Change how the contour looks and behaves with these properties:

- Name it with [`FullName`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md).
- Pick its component, and check which ones are available, with [`Component`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.Component.md) and [`ComponentList`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.ComponentList.md).
- Turn it on or off with [`IsEnabled`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.IsEnabled.md).
- Use an automatic range or set one by hand with [`AutoRange`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.AutoRange.md), [`Min`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.Min.md), and [`Max`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.Max.md).
- Blend colors smoothly, or use a logarithmic scale, with [`Continuous`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.Continuous.md) and [`LogScale`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.LogScale.md).
- Choose which extreme values are shown with [`MinMaxTargetType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.MinMaxTargetType.md).
- Show or hide the legend, and set its color and text color, with [`LegendVisibility`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.LegendVisibility.md), [`LegendColorScheme`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.LegendColorScheme.md), and [`LegendFontColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.LegendFontColor.md).