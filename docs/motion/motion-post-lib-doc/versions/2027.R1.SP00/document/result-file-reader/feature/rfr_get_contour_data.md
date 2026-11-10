# Get Contour Data
<div align="right"><a href="/document/result-file-reader/feature/rfr_get_contour_data.md" download="rfr_get_contour_data.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers contour-data operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including reading contour values for selected states and entities and writing those values to a file.

Read operations pass each state's result to a callback for further processing.

## Getting
Get characteristics available for an entity, mapping type, and analysis result type with [`GetContourCharacteristics(string, ContourMappingType, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourCharacteristics.md). Select a characteristic and get its available components with [`GetContourComponents(string, ContourMappingType, string, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourComponents.md).

Pass the selected characteristic and component to [`GetContourResult(IList<int>, string, ContourMappingType, string, Action<int, IList<double[]>>, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourResult.md) or [`GetContourResult(IList<int>, IList<string>, ContourMappingType, string, Action<int, IList<double[]>>, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourResult.md) to read contour values for one entity or several entities.

The state IDs passed to either overload can come from [`GetStateIDArray()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetStateIDArray.md), see [Read Result Information](rfr_read_result_information.md). The callback receives the state ID together with the values for that state.

## Exporting
Write contour values for one entity or several entities with [`ExportContourResultToFile(string, FileMode, IList<int>, string, ContourMappingType, string, AnalysisResultType, FileFormatType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md) or [`ExportContourResultToFile(string, FileMode, IList<int>, IList<string>, ContourMappingType, string, AnalysisResultType, FileFormatType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md). The chosen file format decides how the values are written.
