# Property EntityType
<a id="VM_ViewModels_Post_IEntityBaseViewModel_EntityType"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IEntityBaseViewModel_EntityType"></a> EntityType

Gets the [`EntityType`](VM.Models.Post.EntityType.md) that classifies which kind of result entity is represented. The value reflects the loaded result data and does not change after the entity becomes available.

```csharp
EntityType EntityType { get; }
```

### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### Remarks

The matching display text is available from `EntityTypeName`.
