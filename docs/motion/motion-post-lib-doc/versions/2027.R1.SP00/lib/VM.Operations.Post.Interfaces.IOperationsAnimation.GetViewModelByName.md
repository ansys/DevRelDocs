# Method GetViewModelByName
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

> [!NOTE]
> The return value is `null` when `name` does not identify an entity or when no analysis result is associated with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

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

# Find the entity by its full name.
entity_full_name = "FEBody_01"
entity = animation_view.GetViewModelByName(entity_full_name)
```

### Remarks

The lookup compares `name` with entity full names in the analysis result associated with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).
