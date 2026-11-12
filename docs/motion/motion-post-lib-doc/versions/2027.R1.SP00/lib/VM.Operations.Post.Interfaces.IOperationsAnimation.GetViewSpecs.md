# Method GetViewSpecs
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewSpecs"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewSpecs"></a> GetViewSpecs\(\)

Creates an array of view specifications corresponding to the number of loaded animation frames.

```csharp
IViewSpec[] GetViewSpecs()
```

### Returns

 [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)\[\]

An array of [`IViewSpec`](VM.Operations.Post.Interfaces.IViewSpec.md) values initialized with default camera settings, with one entry for each loaded animation frame.

<Note>
The returned array is empty when no animation frames are loaded.
</Note>

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

# Create the animation view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Load multiple frames before preparing frame-specific camera specifications.
# The number of animation frames.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)

# Get default camera specifications for loaded frames.
view_specs = animation_view.GetViewSpecs()

# Redefine the camera specification for every frame to create a smooth camera path.
# The X coordinate of the camera position at the first frame.
start_eye_x = -100.0
# The X coordinate of the camera position at the last frame.
end_eye_x = 100.0
for frame_index in range(frame_count):
    # The progress of the current frame within the recording range, from 0 to 1.
    progress = frame_index / (frame_count - 1)
    # The X coordinate of the camera position at the current frame.
    eye_x = start_eye_x + (end_eye_x - start_eye_x) * progress
    view_specs[frame_index].Eye = Vector(eye_x, 0, 100)
    view_specs[frame_index].Target = Vector(0, 0, 0)
    view_specs[frame_index].UpVector = Vector(0, 1, 0)
```

### Remarks

The returned entries are newly created camera specifications in loaded-frame order. They are not snapshots of the current camera position. Redefine the [`Eye`](VM.Operations.Post.Interfaces.IViewSpec.Eye.md), [`Target`](VM.Operations.Post.Interfaces.IViewSpec.Target.md), and [`UpVector`](VM.Operations.Post.Interfaces.IViewSpec.UpVector.md) values in different entries to create a frame-by-frame camera path before using the array with [`RecordingAnimation(string, RecordingType, RecordingRangeType, int, IViewSpec[])`](VM.Operations.Post.Interfaces.IOperationsAnimation.RecordingAnimation.md).
