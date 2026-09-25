# Namespace VM.Models
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
