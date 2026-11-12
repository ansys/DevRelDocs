# Method CreateCoordinateSystem
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.CreateCoordinateSystem.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.CreateCoordinateSystem.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateCoordinateSystem_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a coordinate system in the analysis result associated with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

For a complete operations, see [Operation API Example - Create a Coordinate System](../document/operation-api/example/example_animation_for_operation_api.md#create-a-coordinate-system).

```csharp
IOperationsCSYSViewModel CreateCoordinateSystem(string name, string parentInfo = "Ground")
```

### Parameters

`name` string

Name for the new coordinate system.

<Danger>
`name` must not identify an existing entity in the associated analysis result.
</Danger>

`parentInfo` string

Full name of the body, node, or coordinate system that will contain the new coordinate system. Obtain the full name from a public entity property or lookup result. If omitted, the ground entity is used. To specify a node, use the containing body full name followed by `/Node/` and the node ID, such as `body full name/Node/42`.

<Danger>
`parentInfo` must identify an existing body, node, or coordinate system in the associated analysis result.
</Danger>

### Returns

 [IOperationsCSYSViewModel](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md)

Created [`IOperationsCSYSViewModel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md). The return value is `null` when `name` or `parentInfo` does not identify a valid target.

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

# Create the coordinate system and read its returned name.
# The name of the new coordinate system.
coordinate_system_name = "Example_CSYS"
# The full name of the entity that owns the coordinate system.
parent_full_name = "Ground"
# The coordinate system created in the analysis result.
coordinate_system = animation_view.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
# The full name of the coordinate system.
coordinate_system_full_name = coordinate_system.FullName
```

### Remarks

The created [`IOperationsCSYSViewModel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md) can be configured through its properties. Pass its [`FullName`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md) to operations that accept a coordinate-system name.
