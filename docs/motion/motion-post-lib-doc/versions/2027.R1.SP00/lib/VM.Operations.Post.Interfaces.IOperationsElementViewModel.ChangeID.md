# Method ChangeID
<a id="VM_Operations_Post_Interfaces_IOperationsElementViewModel_ChangeID_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsElementViewModel_ChangeID_System_Int32_"></a> ChangeID\(int\)

Changes the element ID and refreshes the element's displayed identifier.

```csharp
void ChangeID(int id)
```

### Parameters

`id` int

Existing element ID to assign within the parent finite-element data part.

> [!IMPORTANT]
> The ID must identify an element in the current finite-element data. The operation uses that element's index and type when updating the selection.

### Examples

```python
# Get an FE body from the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)
body_name = "FEBody_01"
febody = dynamic_analysis.GetViewModel(body_name)

# Create an element and change its ID.
element_id = 2343
element = febody.CreateElement(element_id)
new_element_id = 2601
element.ChangeID(new_element_id)
```

### Remarks

The operation updates the element's stored ID, index, and type information, then refreshes the displayed identifier so subsequent reads show the new ID.
