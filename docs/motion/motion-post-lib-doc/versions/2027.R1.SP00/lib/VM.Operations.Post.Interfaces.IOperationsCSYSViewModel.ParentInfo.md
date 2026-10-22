# Property ParentInfo
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
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Get the page and create an animation view.
page_name = "Page"
page = application_handler.GetPage(page_name)
animation_view_name = "ResultAnimation"
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Set a body as the coordinate-system parent.
body_coordinate_system_name = "BodyParent_CSYS"
body_full_name = "Crank"
body_coordinate_system = animation_view.CreateCoordinateSystem(body_coordinate_system_name, body_full_name)

# Set a node as the coordinate-system parent.
node_coordinate_system_name = "NodeParent_CSYS"
node_full_name = "FEBody_01/Node/487"
node_coordinate_system = animation_view.CreateCoordinateSystem(node_coordinate_system_name, node_full_name)

# Set a marker as the coordinate-system parent.
marker_coordinate_system_name = "MarkerParent_CSYS"
marker_full_name = "Crank/CM"
marker_coordinate_system = animation_view.CreateCoordinateSystem(marker_coordinate_system_name, marker_full_name)

# Set a coordinate system as the coordinate-system parent.
coordinate_system_name = "CoordinateSystemParent_CSYS"
inertia_full_name = "Inertia"
coordinate_system_parent = animation_view.CreateCoordinateSystem(coordinate_system_name, inertia_full_name)
```

### Remarks

Changing this value changes the entity whose frame motion the coordinate system follows, which changes its position and orientation over animation frames.

The value can identify:
- a body full name.
- a marker full name.
- a coordinate-system full name.
- a node path in the form `body full name/Node/NodeID`.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.ParentInfo.md" download="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.ParentInfo.md">Download this page as Markdown</a>
