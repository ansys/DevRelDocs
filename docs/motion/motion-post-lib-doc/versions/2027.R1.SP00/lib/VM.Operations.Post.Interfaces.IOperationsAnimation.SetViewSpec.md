# Method SetViewSpec
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

> [!NOTE]
> A `null` or unchanged `viewSpec` has no effect.

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

# Prepare and apply the camera specification.
eye_x = 10
eye_y = 20
eye_z = 30
target_x = 5
target_y = 10
target_z = 15
up_vector_x = 0
up_vector_y = 1
up_vector_z = 0
view_spec = ViewSpec()
view_spec.Eye = Vector(eye_x, eye_y, eye_z)
view_spec.Target = Vector(target_x, target_y, target_z)
view_spec.UpVector = Vector(up_vector_x, up_vector_y, up_vector_z)
animation_view.SetViewSpec(view_spec)
```

### Remarks

The camera information for the current animation frame is updated when `viewSpec` contains changed camera values.
