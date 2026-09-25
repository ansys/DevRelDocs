# Method CreateAnimation
<a id="VM_Operations_Post_Interfaces_IPage_CreateAnimation_VM_ViewModels_Post_IAnalysisResultViewModel_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_CreateAnimation_VM_ViewModels_Post_IAnalysisResultViewModel_System_String_"></a> CreateAnimation\(IAnalysisResultViewModel, string\)

Creates [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) with an analysis result on this page.

```csharp
IOperationsAnimation CreateAnimation(IAnalysisResultViewModel analysis, string name = null)
```

### Parameters

`analysis` [IAnalysisResultViewModel](VM.ViewModels.Post.IAnalysisResultViewModel.md)

Analysis result obtained from an imported result file through [`GetAnalysisResultViewModel(AnalysisResultType)`](VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md).

`name` string

Initial name for the new view. If omitted, a default name is generated.

### Returns

 [IOperationsAnimation](VM.Operations.Post.Interfaces.IOperationsAnimation.md)

Newly created [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md). The method returns `default` when [`ResultDocumentViewModel`](VM.ViewModels.Post.IAnalysisResultViewModel.ResultDocumentViewModel.md) does not expose VM.ViewModels.Post.ResultDocumentViewModel.

### Examples

```python
# Get the dynamic analysis result from the imported document.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Get the page that will hold the animation.
page_name = "Page"
page = application_handler.GetPage(page_name)

# Create the animation on the page.
animation_view_name = "ResultAnimation"
animation = page.CreateAnimation(dynamic_analysis, animation_view_name)
```

### Remarks

The returned `IOperationsAnimation` is kept with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and becomes active immediately. Activating the new view deactivates the previously active view.

> [!IMPORTANT]
> `analysis` must expose VM.ViewModels.Post.ResultDocumentViewModel through `ResultDocumentViewModel`. Otherwise, this method returns `default`.
