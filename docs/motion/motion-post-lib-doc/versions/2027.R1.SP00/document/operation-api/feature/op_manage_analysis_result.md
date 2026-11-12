# Manage an Analysis Result
<div align="right"><a href="/document/operation-api/feature/op_manage_analysis_result.md" download="op_manage_analysis_result.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers reading contour and curve metadata, creating contour data, reading result state information, and moving an animation result to a selected frame with [`IOperationAnalysisResult`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

## Contour Metadata
Find valid contour targets with [`GetContourables(ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md). Then find characteristics and components with [`GetContourCharacteristics(string, ContourMappingType)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md) and [`GetContourComponents(string, ContourMappingType, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md) before creating [`IOperationsContourViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.md) with [`CreateContour(IList<string>, ContourMappingType, string, string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

## Curve Metadata
Find curve characteristics and components with [`GetPlotCharacteristics(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md) and [`GetPlotComponents(string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md) before adding curve data to a chart.

## Result State
Read state IDs and reference times with [`GetStateIDArray()`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md) and [`GetReferenceTimeArray()`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md). Move the active animation result to a loaded frame with [`MoveToAnimationFrame(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md).
