# Method GetVectorDisplayCharacteristics
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetVectorDisplayCharacteristics_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetVectorDisplayCharacteristics_System_String_"></a> GetVectorDisplayCharacteristics\(string\)

Gets vector-display characteristic names supported by an entity in the dynamic result.

```csharp
IEnumerable<string> GetVectorDisplayCharacteristics(string entityName)
```

### Parameters

`entityName` string

Full name of an entity in the dynamic result. Obtain the name from [GetViewModelByName\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewModelByName.md) or another public entity lookup before calling this method.

### Returns

 IEnumerable<string\>

Characteristic names supported by the entity. An empty collection is returned when the entity is missing or does not support vector display.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Read characteristics supported by an entity.
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The characteristics available for the vector display of the entity.
characteristics = dynamic_analysis.GetVectorDisplayCharacteristics(entity_name)
```
