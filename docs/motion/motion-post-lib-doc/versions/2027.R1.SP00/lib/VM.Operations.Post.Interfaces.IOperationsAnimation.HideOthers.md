# Method HideOthers
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.HideOthers.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.HideOthers.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_HideOthers_System_String___"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_HideOthers_System_String___"></a> HideOthers\(params string\[\]\)

Shows entities identified by full name and hides other entities.

For a complete operations, see [Operation API Example - View Entity Management: Show, Hide, and Fit](../document/operation-api/example/example_animation_for_operation_api.md#view-entity-management-show-hide-and-fit).

```csharp
void HideOthers(params string[] names)
```

### Parameters

`names` string\[\]

Full names already available for entities in the analysis result. Obtain each name from a public entity property or lookup result; this method does not produce or enumerate entity names.

<Danger>
`names` must contain at least one value. A `null` or empty array causes an exception.
</Danger>

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

# Keep the named entity visible.
# The full name of the entity.
entity_full_name = "FEBody_01"
animation_view.HideOthers(entity_full_name)
```

### Remarks

Matching entities remain visible, and other entities are hidden.

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_HideOthers_System_Guid___"></a> HideOthers\(params Guid\[\]\)

Shows entities identified by GUID and hides other entities.

For a complete operations, see [Operation API Example - View Entity Management: Show, Hide, and Fit](../document/operation-api/example/example_animation_for_operation_api.md#view-entity-management-show-hide-and-fit).

```csharp
void HideOthers(params Guid[] entityIDs)
```

### Parameters

`entityIDs` Guid\[\]

Values of [`ID`](VM.Models.Post.IHasGuid.ID.md) from entities that should remain visible. Obtain the entities before passing their IDs to this overload.

<Danger>
`entityIDs` must contain at least one value. A `null` or empty array causes an exception.
</Danger>

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

# Keep the entity identified by its ID visible.
animation_view.HideOthers(entity.ID)
```

### Remarks

Entities matching the supplied IDs remain visible, and other entities are hidden.
