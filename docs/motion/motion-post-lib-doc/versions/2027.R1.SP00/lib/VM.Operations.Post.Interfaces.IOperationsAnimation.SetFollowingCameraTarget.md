# Method SetFollowingCameraTarget
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetFollowingCameraTarget_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetFollowingCameraTarget_System_String_"></a> SetFollowingCameraTarget\(string\)

Sets a body, marker, node, or coordinate system as the camera-follow target.

For a complete operations, see [Operation API Example - Following Camera](../document/operation-api/example/example_animation_for_operation_api.md#following-camera).

```csharp
void SetFollowingCameraTarget(string targetName)
```

### Parameters

`targetName` string

Full name already available in the analysis result. The value can identify:
- a body full name.
- a marker full name.
- a coordinate-system full name.
- a node path in the form `body full name/Node/NodeID`.

To target a node, use the containing body full name followed by `/Node/` and the node ID, such as `body full name/Node/42`.

<Note>
If `targetName` does not identify a supported target, the camera-follow target is not changed.
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

# Set a body as the camera target.
# The full name of the body that owns the coordinate system.
body_full_name = "Crank"
animation_view.SetFollowingCameraTarget(body_full_name)

# Set a marker as the camera target.
# The path of the marker that owns the coordinate system.
marker_full_name = "Crank/CM"
animation_view.SetFollowingCameraTarget(marker_full_name)

# Set a coordinate system as the camera target.
# The full name of the coordinate system.
coordinate_system_full_name = "Ground"
animation_view.SetFollowingCameraTarget(coordinate_system_full_name)

# Set a node as the camera target.
# The path of the finite-element node that owns the coordinate system.
node_full_name = "FEBody_01/Node/487"
animation_view.SetFollowingCameraTarget(node_full_name)
```

### Remarks

After a target is found, camera-follow updates use the target entity's position and orientation.
