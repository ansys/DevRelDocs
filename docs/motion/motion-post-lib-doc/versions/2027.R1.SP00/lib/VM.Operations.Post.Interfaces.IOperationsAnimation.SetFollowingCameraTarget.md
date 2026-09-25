# Method SetFollowingCameraTarget
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetFollowingCameraTarget_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetFollowingCameraTarget_System_String_"></a> SetFollowingCameraTarget\(string\)

Sets a body, marker, node, or coordinate system as the camera-follow target.

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

> [!NOTE]
> If `targetName` does not identify a supported target, the camera-follow target is not changed.

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

# Set a body as the camera target.
body_full_name = "Crank"
animation_view.SetFollowingCameraTarget(body_full_name)

# Set a marker as the camera target.
marker_full_name = "Crank/CM"
animation_view.SetFollowingCameraTarget(marker_full_name)

# Set a coordinate system as the camera target.
coordinate_system_full_name = "Ground"
animation_view.SetFollowingCameraTarget(coordinate_system_full_name)

# Set a node as the camera target.
node_full_name = "FEBody_01/Node/487"
animation_view.SetFollowingCameraTarget(node_full_name)
```

### Remarks

After a target is found, camera-follow updates use the target entity's position and orientation.
