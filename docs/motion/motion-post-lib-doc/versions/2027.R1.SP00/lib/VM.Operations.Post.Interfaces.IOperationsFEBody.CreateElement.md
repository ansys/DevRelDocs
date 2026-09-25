# Method CreateElement
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateElement_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateElement_System_Int32_"></a> CreateElement\(int\)

Creates an element selection for an element ID in the current finite-element data.

```csharp
IOperationsElementViewModel CreateElement(int elementID)
```

### Parameters

`elementID` int

Element ID that exists in the current finite-element data part.

> [!IMPORTANT]
> The ID must identify an existing element. An invalid ID cannot be resolved into an element selection.

### Returns

 [IOperationsElementViewModel](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md)

Created [`IOperationsElementViewModel`](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md), or `null` when the element selection cannot be resolved.

### Examples

```python
# Get an FE body from the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)
body_name = "FEBody_01"
febody = dynamic_analysis.GetViewModel(body_name)

# Create an element selection.
element_id = 2343
element = febody.CreateElement(element_id)
```

### Remarks

The operation uses the current analysis frame and state to create the element selection, adds it to the available element entries, and selects the returned element.
