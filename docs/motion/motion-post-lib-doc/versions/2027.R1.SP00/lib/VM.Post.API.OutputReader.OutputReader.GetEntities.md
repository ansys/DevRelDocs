# Method GetEntities
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetEntities.md" download="VM.Post.API.OutputReader.OutputReader.GetEntities.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetEntities_VM_Models_Post_EntityType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetEntities_VM_Models_Post_EntityType_"></a> GetEntities\(EntityType\)

Gets result entities classified by [`EntityType`](VM.Models.Post.EntityType.md).

```csharp
public IEnumerable<EntityBase> GetEntities(EntityType entityType)
```

### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

Entity category used to filter the opened result document.

### Returns

 IEnumerable<[EntityBase](VM.Models.Post.EntityBase.md)\>

Entities whose category matches `entityType`.

### Remarks

An empty sequence is returned when the opened result document has no entities in the selected category.
