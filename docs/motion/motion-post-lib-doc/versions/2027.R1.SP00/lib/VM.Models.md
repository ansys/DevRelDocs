# Namespace VM.Models
<div align="right"><a href="/lib/VM.Models.md" download="VM.Models.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models"></a>

### Namespaces

 [VM.Models.OutputReader](VM.Models.OutputReader.md)

 [VM.Models.Post](VM.Models.Post.md)

### Enums

 [AnalysisResultType](VM.Models.AnalysisResultType.md)

Identifies the analysis category of a result document, used to select which [`IAnalysisResultViewModel`](VM.ViewModels.Post.IAnalysisResultViewModel.md) is retrieved with [`GetAnalysisResultViewModel(AnalysisResultType)`](VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md).

 [ContourMappingType](VM.Models.ContourMappingType.md)

Identifies how result values are mapped to the color scale of a contour created with [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

 [FileFormatType](VM.Models.FileFormatType.md)

Specifies the file encoding used when exporting result values.

 [PlotDataType](VM.Models.PlotDataType.md)

Specifies which result data source supplies values for plotting and curve generation.

 [StressStrainCombinationType](VM.Models.StressStrainCombinationType.md)

Specifies how stress or strain components are combined for fatigue result calculations.
