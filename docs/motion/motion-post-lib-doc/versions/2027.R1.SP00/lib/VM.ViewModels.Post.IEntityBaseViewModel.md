# Interface IEntityBaseViewModel
<div align="right"><a href="/lib/VM.ViewModels.Post.IEntityBaseViewModel.md" download="VM.ViewModels.Post.IEntityBaseViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
