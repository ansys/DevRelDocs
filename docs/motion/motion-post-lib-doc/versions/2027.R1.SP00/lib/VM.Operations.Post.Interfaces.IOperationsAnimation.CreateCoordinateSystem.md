# Method CreateCoordinateSystem
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateCoordinateSystem_System_String_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateCoordinateSystem_System_String_System_String_"></a> CreateCoordinateSystem\(string, string\)

Creates a coordinate system in the analysis result associated with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

```csharp
IOperationsCSYSViewModel CreateCoordinateSystem(string name, string parentInfo = "Ground")
```

### Parameters

`name` string

Name for the new coordinate system.

> [!IMPORTANT]
> `name` must not identify an existing entity in the associated analysis result.

`parentInfo` string

Full name of the body, node, or coordinate system that will contain the new coordinate system. Obtain the full name from a public entity property or lookup result. If omitted, the ground entity is used. To specify a node, use the containing body full name followed by `/Node/` and the node ID, such as `body full name/Node/42`.

> [!IMPORTANT]
> `parentInfo` must identify an existing body, node, or coordinate system in the associated analysis result.

### Returns

 [IOperationsCSYSViewModel](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md)

Created [`IOperationsCSYSViewModel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md). The return value is `null` when `name` or `parentInfo` does not identify a valid target.

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

# Create the coordinate system and read its returned name.
coordinate_system_name = "Example_CSYS"
parent_full_name = "Ground"
coordinate_system = animation_view.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
coordinate_system_full_name = coordinate_system.FullName
```

### Remarks

The created [`IOperationsCSYSViewModel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md) can be configured through its properties. Pass its [`FullName`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md) to operations that accept a coordinate-system name.
