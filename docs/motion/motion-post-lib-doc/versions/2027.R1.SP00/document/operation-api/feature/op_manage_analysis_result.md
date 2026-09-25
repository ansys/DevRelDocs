# Manage an Analysis Result
This feature covers reading contour and curve metadata, creating contour data, reading result state information, and moving an animation result to a selected frame with [`IOperationAnalysisResult`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

## Contour Metadata
Find valid contour targets with [`GetContourables(ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md). Then find characteristics and components with [`GetContourCharacteristics(string, ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md) and [`GetContourComponents(string, ContourMappingType, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md) before creating [`IOperationsContourViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.md) with [`CreateContour(IList<string>, ContourMappingType, string, string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

## Curve Metadata
Find curve characteristics and components with [`GetPlotCharacteristics(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md) and [`GetPlotComponents(string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md) before adding curve data to a chart.

## Result State
Read state IDs and reference times with [`GetStateIDArray()`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md) and [`GetReferenceTimeArray()`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md). Move the active animation result to a loaded frame with [`MoveToAnimationFrame(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md).