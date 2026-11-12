# Class NamedSelection
<div align="right"><a href="/lib/VM.Models.Post.EntityTypes.NamedSelection.md" download="VM.Models.Post.EntityTypes.NamedSelection.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_EntityTypes_NamedSelection"></a>

Namespace: [VM.Models.Post.EntityTypes](VM.Models.Post.EntityTypes.md)  
Assembly: VM.Models.Post.dll  

Represents a named selection loaded from a result document.

```csharp
public sealed class NamedSelection : EntityBase, IHasGuid
```

#### Inherited Members

[EntityBase.CategoryType](VM.Models.Post.EntityBase.CategoryType.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.EntityType.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.FullName.md\#VM\_Models\_Post\_ObjectBase\_FullName)

## Constructors

 [NamedSelection\(ResultDocument, Guid, string\)](VM.Models.Post.EntityTypes.NamedSelection.\-ctor.md\#VM\_Models\_Post\_EntityTypes\_NamedSelection\_\_ctor\_VM\_Models\_Post\_ResultDocument\_System\_Guid\_System\_String\_)

Initializes a new instance of the `NamedSelection` class.

## Properties

 [CategoryType](VM.Models.Post.EntityTypes.NamedSelection.CategoryType.md\#VM\_Models\_Post\_EntityTypes\_NamedSelection\_CategoryType)

Gets `Unknown` because a named selection is not assigned to a Postprocessor category.

 [EntityType](VM.Models.Post.EntityTypes.NamedSelection.EntityType.md\#VM\_Models\_Post\_EntityTypes\_NamedSelection\_EntityType)

Gets `NamedSelection` to identify this entity as a named selection loaded from a result document.

 [Ids](VM.Models.Post.EntityTypes.NamedSelection.Ids.md\#VM\_Models\_Post\_EntityTypes\_NamedSelection\_Ids)

Gets or sets the node or entity IDs contained in the named selection.

 [Location](VM.Models.Post.EntityTypes.NamedSelection.Location.md\#VM\_Models\_Post\_EntityTypes\_NamedSelection\_Location)

Gets or sets the location identifier associated with the named selection.
