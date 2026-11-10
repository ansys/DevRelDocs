# Method PlayAnimation
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.PlayAnimation.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.PlayAnimation.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_PlayAnimation"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_PlayAnimation"></a> PlayAnimation\(\)

Starts playback of animation frames in active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

```csharp
void PlayAnimation()
```

### Examples

```python
# Get the document and dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Load a frame before creating the animation view.
# The number of animation frames.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)

# Create the animation view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Start animation playback.
animation_view.PlayAnimation()
```

### Remarks

This method starts timed playback when at least two animation frames are available. Playback advances through the frames and returns to the first frame after the last frame.

For a dynamic analysis result, this method loads the full animation when no animation frames have been loaded yet.

<Danger>
- [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) must be the active view before this method is called.
- At least two animation frames must be available for playback.

Playback does not start when either condition is not met.
</Danger>
