# Method ShowAll
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_ShowAll"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_ShowAll"></a> ShowAll\(\)

Shows all entities in the animation view.

```csharp
void ShowAll()
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

# Restore visibility for all entities.
animation_view.ShowAll()
```

### Remarks

Restores visibility for all entities in [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) after a visibility filter such as [`HideOthers(string[])`](VM.Operations.Post.Interfaces.IOperationsAnimation.HideOthers.md) or [`HideOthers(Guid[])`](VM.Operations.Post.Interfaces.IOperationsAnimation.HideOthers.md) has been applied.
