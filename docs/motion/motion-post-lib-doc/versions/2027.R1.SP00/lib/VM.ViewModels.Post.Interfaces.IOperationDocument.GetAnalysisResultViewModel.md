# Method GetAnalysisResultViewModel
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Get an analysis result and use its ID for lookup.
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
analysis_result_id = analysis_result.ID
result_by_id = document.GetAnalysisResultViewModel(analysis_result_id)
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)

# Get the analysis result by category.
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
```
