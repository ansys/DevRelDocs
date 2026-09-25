# Method GetViewSpecs
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

> [!NOTE]
> The returned array is empty when no animation frames are loaded.

### Examples

```python
# Get the document and dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create the animation view.
page_name = "Page"
page = application_handler.GetPage(page_name)
animation_view_name = "ResultAnimation"
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Load multiple frames before preparing frame-specific camera specifications.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)

# Get default camera specifications for loaded frames.
view_specs = animation_view.GetViewSpecs()

# Redefine the camera specification for every frame to create a smooth camera path.
start_eye_x = -100.0
end_eye_x = 100.0
for frame_index in range(frame_count):
    progress = frame_index / (frame_count - 1)
    eye_x = start_eye_x + (end_eye_x - start_eye_x) * progress
    view_specs[frame_index].Eye = Vector(eye_x, 0, 100)
    view_specs[frame_index].Target = Vector(0, 0, 0)
    view_specs[frame_index].UpVector = Vector(0, 1, 0)
```

### Remarks

The returned entries are newly created camera specifications in loaded-frame order. They are not snapshots of the current camera position. Redefine the [`Eye`](VM.Operations.Post.Interfaces.IViewSpec.Eye.md), [`Target`](VM.Operations.Post.Interfaces.IViewSpec.Target.md), and [`UpVector`](VM.Operations.Post.Interfaces.IViewSpec.UpVector.md) values in different entries to create a frame-by-frame camera path before using the array with [`RecordingAnimation(string, RecordingType, RecordingRangeType, int, IViewSpec[])`](VM.Operations.Post.Interfaces.IOperationsAnimation.RecordingAnimation.md).
