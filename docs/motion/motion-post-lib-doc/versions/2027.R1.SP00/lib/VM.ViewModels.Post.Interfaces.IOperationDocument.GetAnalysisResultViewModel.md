# Method GetAnalysisResultViewModel
<div align="right"><a href="/lib/VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md" download="VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_ViewModels_Post_Interfaces_IOperationDocument_GetAnalysisResultViewModel_System_Guid_"></a>

Namespace: [VM.ViewModels.Post.Interfaces](VM.ViewModels.Post.Interfaces.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_Interfaces_IOperationDocument_GetAnalysisResultViewModel_System_Guid_"></a> GetAnalysisResultViewModel\(Guid\)

Gets the analysis result identified by its unique identifier.

```csharp
IAnalysisResultViewModel GetAnalysisResultViewModel(Guid id)
```

### Parameters

`id` Guid

`ID` exposed by an analysis result loaded in this document.

### Returns

 [IAnalysisResultViewModel](VM.ViewModels.Post.IAnalysisResultViewModel.md)

Matching [`IAnalysisResultViewModel`](VM.ViewModels.Post.IAnalysisResultViewModel.md), or `null` when this document has no result with the identifier.

### Examples

```python
# Open the result document.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Get an analysis result and use its ID for lookup.
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
# The ID of the analysis result.
analysis_result_id = analysis_result.ID
# The analysis result found by its ID.
analysis_result_by_id = document.GetAnalysisResultViewModel(analysis_result_id)
```

## <a id="VM_ViewModels_Post_Interfaces_IOperationDocument_GetAnalysisResultViewModel_VM_Models_AnalysisResultType_"></a> GetAnalysisResultViewModel\(AnalysisResultType\)

Gets the analysis result that matches an analysis result type.

```csharp
IAnalysisResultViewModel GetAnalysisResultViewModel(AnalysisResultType analysisResultType)
```

### Parameters

`analysisResultType` [AnalysisResultType](VM.Models.AnalysisResultType.md)

Analysis result category to find in this document.

### Returns

 [IAnalysisResultViewModel](VM.ViewModels.Post.IAnalysisResultViewModel.md)

Matching [`IAnalysisResultViewModel`](VM.ViewModels.Post.IAnalysisResultViewModel.md), or `null` when this document does not contain the category.

### Examples

```python
# Open the result document.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Get the analysis result by category.
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
```
