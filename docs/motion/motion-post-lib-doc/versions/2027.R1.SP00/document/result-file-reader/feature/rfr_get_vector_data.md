# Get Vector Data
This feature covers vector-data operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including creating vector definitions, reading vector values, and exporting vector results.

The resulting vector data can be processed in memory or saved for use outside `OutputReader`.

## Creating
Get the vector display characteristics available for a target with [`GetVectorDisplayCharacteristics(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetVectorDisplayCharacteristics.md). Then create a vector definition with [`CreateVector(string, string, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.CreateVector.md) using a selected characteristic path. The new definition is added to the Dynamics analysis result.

## Getting
Use a selected characteristic path to read vector data with [`GetVector(string, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetVector.md) or [`GetVector(string, string, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetVector.md).

Read vector data with `GetVector(string, string)`, or pick a different analysis result with `GetVector(string, string, AnalysisResultType)`. The returned dictionary contains the vector data for the requested target and path.

## Exporting
Export already-created vector definitions with [`ExportVectorDisplayToFile(string, int[], IEnumerable<object>, bool, bool, bool, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md). Export straight from a target and path instead with [`ExportVectorDisplayToFile(string, int[], string, string, bool, bool, bool, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md), without creating a vector definition first. Either overload accepts the state IDs obtained from `GetStateIDArray()`, see [Read Result Information](rfr_read_result_information.md).