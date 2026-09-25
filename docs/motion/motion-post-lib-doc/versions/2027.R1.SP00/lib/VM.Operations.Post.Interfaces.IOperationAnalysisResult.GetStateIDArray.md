# Method GetStateIDArray
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetStateIDArray"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetStateIDArray"></a> GetStateIDArray\(\)

Gets the state IDs stored in the analysis result.

```csharp
int[] GetStateIDArray()
```

### Returns

 int\[\]

Array of state IDs in the order used by the analysis result frames.

### Examples

```python
# Get the dynamic analysis result and its state IDs.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
state_ids = analysis_result.GetStateIDArray()
```

### Remarks

Each state ID corresponds by array index to the time value at the same index in [GetReferenceTimeArray\(\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md).

The returned state IDs reflect every state stored in the analysis result, not only the animation frames currently loaded for playback.
