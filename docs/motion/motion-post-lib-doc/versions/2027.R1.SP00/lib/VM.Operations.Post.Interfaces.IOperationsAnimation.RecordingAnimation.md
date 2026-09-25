# Method RecordingAnimation
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_RecordingAnimation_System_String_VM_Models_Post_RecordingType_VM_Models_Post_RecordingRangeType_System_Int32_VM_Operations_Post_Interfaces_IViewSpec___"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_RecordingAnimation_System_String_VM_Models_Post_RecordingType_VM_Models_Post_RecordingRangeType_System_Int32_VM_Operations_Post_Interfaces_IViewSpec___"></a> RecordingAnimation\(string, RecordingType, RecordingRangeType, int, IViewSpec\[\]\)

Records loaded animation frames to a file.

```csharp
void RecordingAnimation(string filePath, RecordingType recordingType, RecordingRangeType rangeType, int frameRate = 10, IViewSpec[] viewSpecs = null)
```

### Parameters

`filePath` string

Output file path without the extension. The extension is added from <code class="paramref">recordingType</code>.

`recordingType` [RecordingType](VM.Models.Post.RecordingType.md)

Format used to save the recording. The value determines the output encoding and file extension.

`rangeType` [RecordingRangeType](VM.Models.Post.RecordingRangeType.md)

Capture scope selected from [`RecordingRangeType`](VM.Models.Post.RecordingRangeType.md). The value determines whether the active view or its page is captured.

`frameRate` int

The recording frame rate in frames per second. The default value is 10.

`viewSpecs` [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)\[\]

An array of [`IViewSpec`](VM.Operations.Post.Interfaces.IViewSpec.md) values with one entry for each loaded frame. Obtain the default array from [GetViewSpecs\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md), redefine the camera properties in its entries for the required frames, and pass the modified array here. If `null`, the existing camera position is used for every frame.

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

# Prepare the recording output and redefine camera specifications across the recording.
# PATH : path to the folder where exported files are written
# RECORDING_OUTPUT_NAME : output filename for the recorded animation
recording_path = os.path.join(PATH, RECORDING_OUTPUT_NAME)
view_specs = animation_view.GetViewSpecs()
start_eye_x = -100.0
end_eye_x = 100.0
for frame_index in range(frame_count):
    progress = frame_index / (frame_count - 1)
    eye_x = start_eye_x + (end_eye_x - start_eye_x) * progress
    view_specs[frame_index].Eye = Vector(eye_x, 0, 100)
    view_specs[frame_index].Target = Vector(0, 0, 0)
    view_specs[frame_index].UpVector = Vector(0, 1, 0)
frame_rate = 10
recording_type = RecordingType.MP4
recording_range_type = RecordingRangeType.ActiveGroup
animation_view.RecordingAnimation(recording_path, recording_type, recording_range_type, frame_rate, view_specs)
```

### Remarks

This method records loaded animation frames using the selected file format, range, and frame rate. The output extension is added from <code class="paramref">recordingType</code>. When `viewSpecs` is supplied, each frame uses the corresponding camera specification.

If playback is running, this method stops it before capturing. Otherwise, capture starts at the first loaded frame. The selected range determines whether the active view or the active page is recorded.

> [!IMPORTANT]
> Animation frames must be loaded before this method is called. If no frames are loaded, no output file is created.
