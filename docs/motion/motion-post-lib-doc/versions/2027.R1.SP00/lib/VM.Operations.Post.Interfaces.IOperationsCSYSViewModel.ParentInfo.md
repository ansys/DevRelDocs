# Property ParentInfo
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.ParentInfo.md" download="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.ParentInfo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_ParentInfo"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_ParentInfo"></a> ParentInfo

Gets or sets the full name of the body, node, or coordinate system whose motion defines the coordinate-system parent.

```csharp
string ParentInfo { get; set; }
```

### Property Value

 string

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

# Get the page and create an animation view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Set a body as the coordinate-system parent.
# The name of the new coordinate system whose parent is a body.
body_coordinate_system_name = "BodyParent_CSYS"
# The full name of the body that owns the coordinate system.
body_full_name = "Crank"
animation_view.CreateCoordinateSystem(body_coordinate_system_name, body_full_name)

# Set a node as the coordinate-system parent.
# The name of the new coordinate system whose parent is a node.
node_coordinate_system_name = "NodeParent_CSYS"
# The path of the finite-element node that owns the coordinate system.
node_full_name = "FEBody_01/Node/487"
animation_view.CreateCoordinateSystem(node_coordinate_system_name, node_full_name)

# Set a marker as the coordinate-system parent.
# The name of the new coordinate system whose parent is a marker.
marker_coordinate_system_name = "MarkerParent_CSYS"
# The path of the marker that owns the coordinate system.
marker_full_name = "Crank/CM"
animation_view.CreateCoordinateSystem(marker_coordinate_system_name, marker_full_name)

# Set a coordinate system as the coordinate-system parent.
# The name of the new coordinate system.
coordinate_system_name = "CoordinateSystemParent_CSYS"
# The full name of the Inertia coordinate system.
inertia_full_name = "Inertia"
animation_view.CreateCoordinateSystem(coordinate_system_name, inertia_full_name)
```

### Remarks

Changing this value changes the entity whose frame motion the coordinate system follows, which changes its position and orientation over animation frames.

The value can identify:
- a body full name.
- a marker full name.
- a coordinate-system full name.
- a node path in the form `body full name/Node/NodeID`.
