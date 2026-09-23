# Method GetReferenceTimeArray
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
reference_times = analysis_result.GetReferenceTimeArray()
```

### Remarks

Each time value corresponds by array index to the state ID at the same index in [GetStateIDArray\(\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md).

The returned times reflect every state stored in the analysis result, not only the animation frames currently loaded through [MoveToAnimationFrame\(int\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md) and the related analysis-result loading operations.
