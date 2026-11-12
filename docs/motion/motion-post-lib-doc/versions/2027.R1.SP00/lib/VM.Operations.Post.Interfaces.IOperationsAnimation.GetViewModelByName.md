# Method GetViewModelByName
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewModelByName.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewModelByName.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewModelByName_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetViewModelByName_System_String_"></a> GetViewModelByName\(string\)

Finds an entity by its full name.

```csharp
IEntityBaseViewModel GetViewModelByName(string name)
```

### Parameters

`name` string

Full name already available for an entity in the analysis result. This method uses the value to retrieve the matching entity; it does not produce or enumerate entity names.

### Returns

 [IEntityBaseViewModel](VM.ViewModels.Post.IEntityBaseViewModel.md)

Matching [`IEntityBaseViewModel`](VM.ViewModels.Post.IEntityBaseViewModel.md).

<Note>
The return value is `null` when `name` does not identify an entity or when no analysis result is associated with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).
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

# Find the entity by its full name.
# The full name of the entity.
entity_full_name = "FEBody_01"
# The entity with the specified full name.
entity = animation_view.GetViewModelByName(entity_full_name)
```

### Remarks

The lookup compares `name` with entity full names in the analysis result associated with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).
