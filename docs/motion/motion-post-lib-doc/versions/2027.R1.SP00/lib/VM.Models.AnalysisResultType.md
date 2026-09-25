# Enum AnalysisResultType
<a id="VM_Models_AnalysisResultType"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.dll  

Identifies the analysis category of a result document, used to select which [`IAnalysisResultViewModel`](VM.ViewModels.Post.IAnalysisResultViewModel.md) is retrieved with [`GetAnalysisResultViewModel(AnalysisResultType)`](VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md).

```csharp
public enum AnalysisResultType
```

## Fields

`Dynamics` 

Selects the analysis results calculated by a dynamic, time-domain simulation.



`Eigenvalue` 

Selects the analysis results calculated by an eigenvalue, frequency-domain analysis.



`Nothing` 

Indicates that no analysis result is available for the requested category.


