# Method CreateVectorDisplay
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateVectorDisplay_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateVectorDisplay_System_String_System_String_"></a> CreateVectorDisplay\(string, string\)

Creates a vector display for an entity and characteristic in the dynamic result.

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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select a supported vector-display characteristic for the target entity.
entity_name = "TJ_01"
characteristic_name = "Base Force"

# Create the vector display.
vector_display = dynamic_analysis.CreateVectorDisplay(entity_name, characteristic_name)
```

### Remarks

The created vector display is added to the dynamic analysis result and can then be configured through its public display properties.

> [!IMPORTANT]
> A missing entity causes an exception. An entity that exists but does not support vector display also causes an exception.
