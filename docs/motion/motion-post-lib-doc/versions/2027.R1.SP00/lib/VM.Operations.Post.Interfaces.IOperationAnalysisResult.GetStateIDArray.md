# Method GetStateIDArray
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
# The IDs of the states in the result file.
state_ids = analysis_result.GetStateIDArray()
```

### Remarks

Each state ID corresponds by array index to the time value at the same index in [GetReferenceTimeArray\(\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md).

The returned state IDs reflect every state stored in the analysis result, not only the animation frames currently loaded for playback.
