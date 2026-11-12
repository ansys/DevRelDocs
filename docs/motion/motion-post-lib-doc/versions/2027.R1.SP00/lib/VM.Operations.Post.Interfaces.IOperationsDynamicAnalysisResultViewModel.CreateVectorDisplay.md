# Method CreateVectorDisplay
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateVectorDisplay.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateVectorDisplay.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateVectorDisplay_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateVectorDisplay_System_String_System_String_"></a> CreateVectorDisplay\(string, string\)

Creates a vector display for an entity and characteristic in the dynamic result.

For a complete operations, see [Operation API Example - Vector Display](../document/operation-api/example/example_animation_for_operation_api.md#vector-display).

```csharp
IOperationsVectorDisplayBaseViewModel CreateVectorDisplay(string entityName, string characteristic)
```

### Parameters

`entityName` string

Full name of an entity in the dynamic result that supports vector display. Verify the entity and its full name with [GetViewModelByName\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewModelByName.md) or another public entity lookup before calling this method.

`characteristic` string

Characteristic name returned by [GetVectorDisplayCharacteristics\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md) for `entityName`.

### Returns

 [IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

Created [`IOperationsVectorDisplayBaseViewModel`](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md), or `null` when the created display cannot be resolved after creation.

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

# Select a supported vector-display characteristic for the target entity.
# The name of the vector displayable entity.
entity_name = "TJ_01"
# The name of the characteristic.
characteristic_name = "Base Force"

# Create the vector display.
vector_display = dynamic_analysis.CreateVectorDisplay(entity_name, characteristic_name)
```

### Remarks

The created vector display is added to the dynamic analysis result and can then be configured through its public display properties.

<Danger>
A missing entity causes an exception. An entity that exists but does not support vector display also causes an exception.
</Danger>
