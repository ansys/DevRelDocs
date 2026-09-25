# Method RemoveCoordinateSystem
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_RemoveCoordinateSystem_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_RemoveCoordinateSystem_System_String_"></a> RemoveCoordinateSystem\(string\)

Removes a removable coordinate system identified by its full name.

```csharp
void RemoveCoordinateSystem(string name)
```

### Parameters

`name` string

Full name from [`FullName`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md) for a coordinate system returned by [CreateCoordinateSystem\(string, string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.CreateCoordinateSystem.md) or found through another public coordinate-system lookup.

> [!NOTE]
> The built-in `Inertia` coordinate system cannot be removed.

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

# Create and remove the coordinate system by name.
coordinate_system_name = "Example_CSYS"
parent_full_name = "Ground"
animation_view.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
animation_view.RemoveCoordinateSystem(coordinate_system_name)
```

### Remarks

If `name` does not identify a removable coordinate system, this method has no effect.
