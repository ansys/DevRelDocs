# Method CreateNode
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsFEBody.CreateNode.md" download="VM.Operations.Post.Interfaces.IOperationsFEBody.CreateNode.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateNode_System_Int32_VM_Models_PlotDataType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateNode_System_Int32_VM_Models_PlotDataType_"></a> CreateNode\(int, PlotDataType\)

Creates a node selection for a node ID in the current finite-element data.

For a complete operations, see [Operation API Example - Create Node &amp; Element](../document/operation-api/example/example_animation_for_operation_api.md#create-node--element).

```csharp
IOperationsNodeViewModel CreateNode(int nodeID, PlotDataType fileType = PlotDataType.DEFAULT)
```

### Parameters

`nodeID` int

Node ID that exists in the current finite-element data part.

<Danger>
The ID must identify an existing node. An invalid ID cannot be resolved into a node selection.
</Danger>

`fileType` [PlotDataType](VM.Models.PlotDataType.md)

Plot data type associated with the node selection. The default is `DEFAULT`.

<Note>
The current implementation creates the node selection with `DEFAULT` regardless of the supplied value.
</Note>

### Returns

 [IOperationsNodeViewModel](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md)

Created [`IOperationsNodeViewModel`](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md), or `null` when the node selection cannot be resolved.

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

# Create a node selection.
# The ID of the node.
node_id = 754
# The plot data type of the node.
plot_data_type = PlotDataType.DEFAULT
# The node selection created for the node ID.
node = febody.CreateNode(node_id, plot_data_type)
```

### Remarks

The operation resolves the node index and part from the current analysis result, adds the node selection to the available node entries, and selects the returned node.
