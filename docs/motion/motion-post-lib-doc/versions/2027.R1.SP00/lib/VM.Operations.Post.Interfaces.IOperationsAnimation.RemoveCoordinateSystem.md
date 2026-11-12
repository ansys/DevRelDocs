# Method RemoveCoordinateSystem
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.RemoveCoordinateSystem.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.RemoveCoordinateSystem.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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

<Note>
The built-in `Inertia` coordinate system cannot be removed.
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

# Create and remove the coordinate system by name.
# The name of the new coordinate system.
coordinate_system_name = "Example_CSYS"
# The full name of the entity that owns the coordinate system.
parent_full_name = "Ground"
animation_view.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
animation_view.RemoveCoordinateSystem(coordinate_system_name)
```

### Remarks

If `name` does not identify a removable coordinate system, this method has no effect.
