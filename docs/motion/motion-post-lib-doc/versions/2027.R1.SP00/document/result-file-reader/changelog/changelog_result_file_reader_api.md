# Result File Reader
<div align="right"><a href="/document/result-file-reader/changelog/changelog_result_file_reader_api.md" download="changelog_result_file_reader_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This page lists the changes in 2027 R1.

## Added
- Added the [`ExecuteSoundPressureAnalysis(IList<string>, IList<double[]>, double, double, double, double, double, double, double, double, bool)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExecuteSoundPressureAnalysis.md) method to the [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md) class.
- Added contour metadata methods to the `OutputReader` class:
  - [`GetContourCharacteristics(string, ContourMappingType, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourCharacteristics.md)
  - [`GetContourComponents(string, ContourMappingType, string, AnalysisResultType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetContourComponents.md)
- Added the [`RemoveCoordinateSystem(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md) method to the `OutputReader` class.
- Added plot metadata methods to the `OutputReader` class:
  - [`GetPlotCharacteristics(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetPlotCharacteristics.md)
  - [`GetPlotComponents(string, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetPlotComponents.md)
- Added the [`GetVectorDisplayCharacteristics(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetVectorDisplayCharacteristics.md) method to the `OutputReader` class.
