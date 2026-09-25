# Method MoveToAnimationFrame
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_MoveToAnimationFrame_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_MoveToAnimationFrame_System_Int32_"></a> MoveToAnimationFrame\(int\)

Moves the currently displayed frame of the analysis result to a loaded animation frame.

```csharp
void MoveToAnimationFrame(int frame)
```

### Parameters

`frame` int

Zero-based index into the animation frames already loaded for the analysis result, such as the frames loaded through [`SetAnimationFrame(int)`](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md) or [`SetAnimationFrame(IEnumerable<int>)`](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md).

> [!IMPORTANT]
> `frame` is converted to an unsigned frame index before it is applied. A negative value converts to a large unsigned number and moves to the highest loaded frame instead of causing an exception.

### Examples

```python
# Get the dynamic analysis result and load animation frames.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
frame_count = 10
analysis_result.SetAnimationFrame(frame_count)

# Move the animation result to a loaded frame.
frame = 0
analysis_result.MoveToAnimationFrame(frame)
```

### Remarks

The requested frame is clamped to the loaded frame range, so a value above the highest loaded frame moves to that highest frame instead of causing an exception.

> [!IMPORTANT]
> No loaded frame exists until animation frames have been loaded through the related analysis-result API. Calling this method before frames are loaded has no visible effect.
