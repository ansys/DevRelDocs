# Method PlayAnimation
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Load a frame before creating the animation view.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)

# Create the animation view.
page_name = "Page"
page = application_handler.GetPage(page_name)
animation_view_name = "ResultAnimation"
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Start animation playback.
animation_view.PlayAnimation()
```

### Remarks

This method starts timed playback when at least two animation frames are available. Playback advances through the frames and returns to the first frame after the last frame.

For a dynamic analysis result, this method loads the full animation when no animation frames have been loaded yet.

> [!IMPORTANT]
> - [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) must be the active view before this method is called.
> - At least two animation frames must be available for playback.
>
> Playback does not start when either condition is not met.
