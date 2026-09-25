# Run an Analysis
This feature covers analysis operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including calculating sound pressure curves and exporting acoustic raw data.

Sound pressure results are available as curve data, while acoustic output is written to a file for later use.

## Sound Pressure
Calculate sound pressure curves with [`ExecuteSoundPressureAnalysis(IList<string>, IList<double[]>, double, double, double, double, double, double, double, double, bool)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExecuteSoundPressureAnalysis.md). The result contains one curve for each microphone position over the chosen time range.

## Acoustic
Export acoustic data for chosen nodes with [`ExportAcousticRawDataToFile(string, string, BehaviorType, FFTParameters, uint[])`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md). Export data for the visible outer surface instead with [`ExportAcousticRawDataToFile(string, string, BehaviorType, FFTParameters)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md).