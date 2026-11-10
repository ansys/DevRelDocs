# Method ChangeID
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsNodeViewModel.ChangeID.md" download="VM.Operations.Post.Interfaces.IOperationsNodeViewModel.ChangeID.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsNodeViewModel_ChangeID_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsNodeViewModel_ChangeID_System_Int32_"></a> ChangeID\(int\)

Changes the node ID and refreshes the node's displayed identifier.

```csharp
void ChangeID(int id)
```

### Parameters

`id` int

Existing node ID to assign within the parent finite-element data part.

<Danger>
The ID must identify a node in the current finite-element data so its index can be resolved.
</Danger>

### Examples

```python
# Get an FE body from the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The finite-element body with the specified name.
febody = dynamic_analysis.GetViewModel(entity_name)

# Create a node and change its ID.
# The ID of the node.
node_id = 754
# The node selection created for the node ID.
node = febody.CreateNode(node_id, PlotDataType.DEFAULT)
# The new ID of the node.
new_node_id = 755
node.ChangeID(new_node_id)
```

### Remarks

The operation updates node source and selection metadata with the resolved ID and index, then raises a display-name change notification.
