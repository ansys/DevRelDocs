# Get Contour Data
This feature covers contour-data operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including reading contour values for selected states and entities and writing those values to a file.

Read operations pass each state's result to a callback for further processing.

## Getting
Get characteristics available for an entity, mapping type, and analysis result type with [`GetContourCharacteristics(string, ContourMappingType, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourCharacteristics.md). Select a characteristic and get its available components with [`GetContourComponents(string, ContourMappingType, string, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourComponents.md).

Pass the selected characteristic and component to [`GetContourResult(IList<int>, string, ContourMappingType, string, Action<int, IList<double[]>>, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourResult.md) or [`GetContourResult(IList<int>, IList<string>, ContourMappingType, string, Action<int, IList<double[]>>, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourResult.md) to read contour values for one entity or several entities.

The state IDs passed to either overload can come from `GetStateIDArray()`, see [Read Result Information](rfr_read_result_information.md). The callback receives the state ID together with the values for that state.

## Exporting
Write contour values for one entity or several entities with [`ExportContourResultToFile(string, FileMode, IList<int>, string, ContourMappingType, string, AnalysisResultType, FileFormatType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md) or [`ExportContourResultToFile(string, FileMode, IList<int>, IList<string>, ContourMappingType, string, AnalysisResultType, FileFormatType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md). The chosen file format decides how the values are written.