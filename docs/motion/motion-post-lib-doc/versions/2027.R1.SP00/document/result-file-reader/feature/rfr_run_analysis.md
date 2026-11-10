# Run an Analysis
<div align="right"><a href="/document/result-file-reader/feature/rfr_run_analysis.md" download="rfr_run_analysis.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers analysis operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including calculating sound pressure curves and exporting acoustic raw data.

Sound pressure results are available as curve data, while acoustic output is written to a file for later use.

## Sound Pressure
Calculate sound pressure curves with [`ExecuteSoundPressureAnalysis(IList<string>, IList<double[]>, double, double, double, double, double, double, double, double, bool)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExecuteSoundPressureAnalysis.md). The result contains one curve for each microphone position over the chosen time range.

## Acoustic
Export acoustic data for chosen nodes with [`ExportAcousticRawDataToFile(string, string, BehaviorType, FFTParameters, uint[])`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md). Export data for the visible outer surface instead with [`ExportAcousticRawDataToFile(string, string, BehaviorType, FFTParameters)`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md).
