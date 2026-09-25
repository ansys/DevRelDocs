# Interface IEntityBaseViewModel
<a id="VM_ViewModels_Post_IEntityBaseViewModel"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Defines the identity, category, availability, and result metadata exposed for a result entity.

```csharp
public interface IEntityBaseViewModel : IViewModel, IHasGuid
```

## Properties

 [EntityType](VM.ViewModels.Post.IEntityBaseViewModel.EntityType.md\#VM\_ViewModels\_Post\_IEntityBaseViewModel\_EntityType)

Gets the [`EntityType`](VM.Models.Post.EntityType.md) that classifies which kind of result entity is represented. The value reflects the loaded result data and does not change after the entity becomes available.
