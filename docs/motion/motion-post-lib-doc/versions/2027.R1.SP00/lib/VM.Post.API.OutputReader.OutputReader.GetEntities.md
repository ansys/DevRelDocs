# Method GetEntities
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
