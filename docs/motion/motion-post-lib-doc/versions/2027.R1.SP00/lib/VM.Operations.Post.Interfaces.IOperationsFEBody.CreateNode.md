# Method CreateNode
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateNode_System_Int32_VM_Models_PlotDataType_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateNode_System_Int32_VM_Models_PlotDataType_"></a> CreateNode\(int, PlotDataType\)

Creates a node selection for a node ID in the current finite-element data.

```csharp
IOperationsNodeViewModel CreateNode(int nodeID, PlotDataType fileType = PlotDataType.DEFAULT)
```

### Parameters

`nodeID` int

Node ID that exists in the current finite-element data part.

> [!IMPORTANT]
> The ID must identify an existing node. An invalid ID cannot be resolved into a node selection.

`fileType` [PlotDataType](VM.Models.PlotDataType.md)

Plot data type associated with the node selection. The default is `DEFAULT`.

> [!NOTE]
> The current implementation creates the node selection with `DEFAULT` regardless of the supplied value.

### Returns

 [IOperationsNodeViewModel](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md)

Created [`IOperationsNodeViewModel`](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md), or `null` when the node selection cannot be resolved.

### Examples

```python
# Get an FE body from the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)
body_name = "FEBody_01"
febody = dynamic_analysis.GetViewModel(body_name)

# Create a node selection.
node_id = 754
file_type = PlotDataType.DEFAULT
node = febody.CreateNode(node_id, file_type)
```

### Remarks

The operation resolves the node index and part from the current analysis result, adds the node selection to the available node entries, and selects the returned node.
