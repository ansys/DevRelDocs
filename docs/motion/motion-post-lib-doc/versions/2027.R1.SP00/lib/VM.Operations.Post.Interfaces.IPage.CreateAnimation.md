# Method CreateAnimation
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IPage.CreateAnimation.md" download="VM.Operations.Post.Interfaces.IPage.CreateAnimation.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IPage_CreateAnimation_VM_ViewModels_Post_IAnalysisResultViewModel_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_CreateAnimation_VM_ViewModels_Post_IAnalysisResultViewModel_System_String_"></a> CreateAnimation\(IAnalysisResultViewModel, string\)

Creates [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) with an analysis result on this page.

For a complete operations, see [Operation API Example - Create an AnimationView corresponding to the Analysis type](../document/operation-api/example/example_animation_for_operation_api.md#create-an-animationview-corresponding-to-the-analysis-type).

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

Newly created [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md). The method returns `default` when `ResultDocumentViewModel` does not expose VM.ViewModels.Post.ResultDocumentViewModel.

### Examples

```python
# Get the dynamic analysis result from the imported document.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Get the page that will hold the animation.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)

# Create the animation on the page.
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)
```

### Remarks

The returned `IOperationsAnimation` is kept with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and becomes active immediately. Activating the new view deactivates the previously active view.

<Danger>
`analysis` must expose VM.ViewModels.Post.ResultDocumentViewModel through `ResultDocumentViewModel`. Otherwise, this method returns `default`.
</Danger>
