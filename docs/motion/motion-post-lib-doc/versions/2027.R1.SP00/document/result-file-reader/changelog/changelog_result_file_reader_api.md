# Result File Reader

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