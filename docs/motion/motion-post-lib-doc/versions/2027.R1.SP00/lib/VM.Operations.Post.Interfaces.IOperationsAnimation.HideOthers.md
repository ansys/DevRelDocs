# Method HideOthers
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_HideOthers_System_String___"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_HideOthers_System_String___"></a> HideOthers\(params string\[\]\)

Shows entities identified by full name and hides other entities.

```csharp
void HideOthers(params string[] names)
```

### Parameters

`names` string\[\]

Full names already available for entities in the analysis result. Obtain each name from a public entity property or lookup result; this method does not produce or enumerate entity names.

> [!IMPORTANT]
> `names` must contain at least one value. A `null` or empty array causes an exception.

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

# Keep the named entity visible.
entity_full_name = "FEBody_01"
animation_view.HideOthers(entity_full_name)
```

### Remarks

Matching entities remain visible, and other entities are hidden.

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_HideOthers_System_Guid___"></a> HideOthers\(params Guid\[\]\)

Shows entities identified by GUID and hides other entities.

```csharp
void HideOthers(params Guid[] entityIDs)
```

### Parameters

`entityIDs` Guid\[\]

Values of [`ID`](VM.Models.Post.IHasGuid.ID.md) from entities that should remain visible. Obtain the entities before passing their IDs to this overload.

> [!IMPORTANT]
> `entityIDs` must contain at least one value. A `null` or empty array causes an exception.

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

# Keep the entity identified by its ID visible.
animation_view.HideOthers(entity.ID)
```

### Remarks

Entities matching the supplied IDs remain visible, and other entities are hidden.
