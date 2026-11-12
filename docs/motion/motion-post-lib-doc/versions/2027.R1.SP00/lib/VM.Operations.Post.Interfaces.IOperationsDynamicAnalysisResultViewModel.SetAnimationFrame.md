# Method SetAnimationFrame
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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

<Danger>
The value is converted to an unsigned frame count before it is applied. A negative value does not represent a valid frame count.
</Danger>

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Load a selected number of animation frames.
# The number of animation frames.
frame_count = 10
dynamic_analysis.SetAnimationFrame(frame_count)
```

### Remarks

Loading frames changes the frames available to [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) playback, frame-dependent camera operations, and recording.

<Danger>
If the selected range produces fewer than two frames, animation playback is unavailable.
</Danger>

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Collections_Generic_IEnumerable_System_Int32__"></a> SetAnimationFrame\(IEnumerable<int\>\)

Loads dynamic animation frames identified by their States.

```csharp
void SetAnimationFrame(IEnumerable<int> stateIDs)
```

### Parameters

`stateIDs` IEnumerable<int\>

States from GetStateIDArray() that identify the frames to load.

<Danger>
Each ID is converted to an unsigned value before loading. A negative ID is invalid and causes the conversion to fail.
</Danger>

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Select state IDs for animation frames.
state_ids = dynamic_analysis.GetStateIDArray()
# The IDs of the states to load as animation frames.
selected_state_ids = List[int]()
for state_id in state_ids:
    selected_state_ids.Add(state_id)
dynamic_analysis.SetAnimationFrame(selected_state_ids)
```

### Remarks

Only the selected states become available to [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) playback and frame-dependent operations.

If the selection produces fewer than two frames, animation playback is unavailable. States that are not present in the dynamic result do not produce valid loaded frames.
