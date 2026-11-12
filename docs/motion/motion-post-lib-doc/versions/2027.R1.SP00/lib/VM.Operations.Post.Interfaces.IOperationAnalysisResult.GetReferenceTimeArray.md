# Method GetReferenceTimeArray
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetReferenceTimeArray"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetReferenceTimeArray"></a> GetReferenceTimeArray\(\)

Gets the reference times stored in the analysis result.

```csharp
double[] GetReferenceTimeArray()
```

### Returns

 double\[\]

Array of time values in the order used by the analysis result frames.

### Examples

```python
# Get the dynamic analysis result and its reference times.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
# The reference time of each state.
reference_times = analysis_result.GetReferenceTimeArray()
```

### Remarks

Each time value corresponds by array index to the state ID at the same index in [GetStateIDArray\(\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md).

The returned times reflect every state stored in the analysis result, not only the animation frames currently loaded through [MoveToAnimationFrame\(int\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md) and the related analysis-result loading operations.
