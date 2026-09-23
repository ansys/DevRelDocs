# Method SetAnimationFrame
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Int32_"></a> SetAnimationFrame\(int\)

Loads a specified number of frames from the dynamic analysis result.

```csharp
void SetAnimationFrame(int nFrames)
```

### Parameters

`nFrames` int

Number of frames to request from the dynamic result.

> [!IMPORTANT]
> The value is converted to an unsigned frame count before it is applied. A negative value does not represent a valid frame count.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Load a selected number of animation frames.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)
```

### Remarks

Loading frames changes the frames available to [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) playback, frame-dependent camera operations, and recording.

> [!IMPORTANT]
> If the selected range produces fewer than two frames, animation playback is unavailable.

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Collections_Generic_IEnumerable_System_Int32__"></a> SetAnimationFrame\(IEnumerable<int\>\)

Loads dynamic animation frames identified by their States.

```csharp
void SetAnimationFrame(IEnumerable<int> stateIDs)
```

### Parameters

`stateIDs` IEnumerable<int\>

States from GetStateIDArray() that identify the frames to load.

> [!IMPORTANT]
> Each ID is converted to an unsigned value before loading. A negative ID is invalid and causes the conversion to fail.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select state IDs for animation frames.
state_ids = dynamic_analysis.GetStateIDArray()
selected_state_ids = List[int]()
for state_id in state_ids:
    selected_state_ids.Add(state_id)
dynamic_analysis.SetAnimationFrame(selected_state_ids)
```

### Remarks

Only the selected states become available to [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) playback and frame-dependent operations.

If the selection produces fewer than two frames, animation playback is unavailable. States that are not present in the dynamic result do not produce valid loaded frames.
