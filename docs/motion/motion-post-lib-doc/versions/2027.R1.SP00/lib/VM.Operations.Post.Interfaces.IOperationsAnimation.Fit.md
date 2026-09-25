# Method Fit
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_Fit"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_Fit"></a> Fit\(\)

Fits all visible entities inside the animation viewport.

```csharp
void Fit()
```

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

# Fit visible entities in the viewport.
animation_view.Fit()
```

### Remarks

Camera framing is recalculated from entities currently visible in [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md). Hidden entities are not included.
