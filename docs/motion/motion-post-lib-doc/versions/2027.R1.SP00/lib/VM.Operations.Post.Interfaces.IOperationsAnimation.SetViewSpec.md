# Method SetViewSpec
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.SetViewSpec.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.SetViewSpec.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetViewSpec_VM_Operations_Post_Interfaces_IViewSpec_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_SetViewSpec_VM_Operations_Post_Interfaces_IViewSpec_"></a> SetViewSpec\(IViewSpec\)

Applies camera information from [`IViewSpec`](VM.Operations.Post.Interfaces.IViewSpec.md) to the current animation frame.

```csharp
void SetViewSpec(IViewSpec viewSpec)
```

### Parameters

`viewSpec` [IViewSpec](VM.Operations.Post.Interfaces.IViewSpec.md)

[`IViewSpec`](VM.Operations.Post.Interfaces.IViewSpec.md) containing changed [`Eye`](VM.Operations.Post.Interfaces.IViewSpec.Eye.md), [`Target`](VM.Operations.Post.Interfaces.IViewSpec.Target.md), and [`UpVector`](VM.Operations.Post.Interfaces.IViewSpec.UpVector.md) values. Prepare it before calling this method, or obtain a frame-specific value from [GetViewSpecs\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md).

<Note>
A `null` or unchanged `viewSpec` has no effect.
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

# Prepare and apply the camera specification.
# The X coordinate of the camera position.
eye_x = 10
# The Y coordinate of the camera position.
eye_y = 20
# The Z coordinate of the camera position.
eye_z = 30
# The X coordinate of the point the camera looks at.
target_x = 5
# The Y coordinate of the point the camera looks at.
target_y = 10
# The Z coordinate of the point the camera looks at.
target_z = 15
# The X component of the camera up vector.
up_vector_x = 0
# The Y component of the camera up vector.
up_vector_y = 1
# The Z component of the camera up vector.
up_vector_z = 0
# The camera specification applied to the animation view.
view_spec = ViewSpec()
view_spec.Eye = Vector(eye_x, eye_y, eye_z)
view_spec.Target = Vector(target_x, target_y, target_z)
view_spec.UpVector = Vector(up_vector_x, up_vector_y, up_vector_z)
animation_view.SetViewSpec(view_spec)
```

### Remarks

The camera information for the current animation frame is updated when `viewSpec` contains changed camera values.
