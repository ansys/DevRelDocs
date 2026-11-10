# Class EntityBase
<div align="right"><a href="/lib/VM.Models.Post.EntityBase.md" download="VM.Models.Post.EntityBase.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_EntityBase"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Defines the base class for entities loaded from a result document.

```csharp
public abstract class EntityBase : ObjectBase, IHasGuid
```

#### Derived

[BodyBase](VM.Models.Post.Bodies.BodyBase.md), 
[NamedSelection](VM.Models.Post.EntityTypes.NamedSelection.md)

#### Inherited Members

[ObjectBase.FullName](VM.Models.Post.ObjectBase.FullName.md\#VM\_Models\_Post\_ObjectBase\_FullName)

## Properties

 [CategoryType](VM.Models.Post.EntityBase.CategoryType.md\#VM\_Models\_Post\_EntityBase\_CategoryType)

Gets the category used to group this entity in the Postprocessor.

 [EntityType](VM.Models.Post.EntityBase.EntityType.md\#VM\_Models\_Post\_EntityBase\_EntityType)

Gets the entity type that identifies the concrete entity represented by this base class.
