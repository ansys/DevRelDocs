# Enum AnalysisResultType
<a id="VM_Models_AnalysisResultType"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.dll  

Identifies the analysis category of a result document, used to select which [`IAnalysisResultViewModel`](VM.ViewModels.Post.IAnalysisResultViewModel.md) is retrieved with [`GetAnalysisResultViewModel(AnalysisResultType)`](VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md).

```csharp
public enum AnalysisResultType
```

## Fields

`Dynamics = 0` 

Description: "Dynamics"

Selects the analysis results calculated by a dynamic, time-domain simulation.



`Eigenvalue = 1` 

Description: "Eigenvalue"

Selects the analysis results calculated by an eigenvalue, frequency-domain analysis.



`Nothing = 7` 

Description: "Nothing"

Indicates that no analysis result is available for the requested category.



`Statics = 4` 

Description: "Statics"

Selects the analysis results calculated by a static simulation.

<a href="/lib/VM.Models.AnalysisResultType.md" download="VM.Models.AnalysisResultType.md">Download this page as Markdown</a>
