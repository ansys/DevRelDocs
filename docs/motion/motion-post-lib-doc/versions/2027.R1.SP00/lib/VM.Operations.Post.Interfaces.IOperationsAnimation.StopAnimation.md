# Method StopAnimation
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StopAnimation"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_StopAnimation"></a> StopAnimation\(\)

Stops animation playback.

```csharp
void StopAnimation()
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

# Start and stop playback.
animation_view.PlayAnimation()
animation_view.StopAnimation()
```

### Remarks

Stops playback of the current animation and changes its playback state to stopped. Calling this method when playback is already stopped does not start or reload animation frames.
