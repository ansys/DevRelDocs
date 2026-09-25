# Method ChangeID
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

> [!IMPORTANT]
> The ID must identify a node in the current finite-element data so its index can be resolved.

### Examples

```python
# Get an FE body from the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)
body_name = "FEBody_01"
febody = dynamic_analysis.GetViewModel(body_name)

# Create a node and change its ID.
node_id = 754
node = febody.CreateNode(node_id, PlotDataType.DEFAULT)
new_node_id = 755
node.ChangeID(new_node_id)
```

### Remarks

The operation updates node source and selection metadata with the resolved ID and index, then raises a display-name change notification.
