# Method MoveToAnimationFrame
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md" download="VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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

<Danger>
`frame` is converted to an unsigned frame index before it is applied. A negative value converts to a large unsigned number and moves to the highest loaded frame instead of causing an exception.
</Danger>

### Examples

```python
# Get the dynamic analysis result and load animation frames.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The analysis result of the document.
analysis_result = document.GetAnalysisResultViewModel(analysis_result_type)
# The number of animation frames.
frame_count = 10
analysis_result.SetAnimationFrame(frame_count)

# Move the animation result to a loaded frame.
# The index of the loaded frame to move to.
frame = 0
analysis_result.MoveToAnimationFrame(frame)
```

### Remarks

The requested frame is clamped to the loaded frame range, so a value above the highest loaded frame moves to that highest frame instead of causing an exception.

<Danger>
No loaded frame exists until animation frames have been loaded through the related analysis-result API. Calling this method before frames are loaded has no visible effect.
</Danger>
