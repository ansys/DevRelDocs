# Enum AnalysisResultType
<div align="right"><a href="/lib/VM.Models.AnalysisResultType.md" download="VM.Models.AnalysisResultType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
