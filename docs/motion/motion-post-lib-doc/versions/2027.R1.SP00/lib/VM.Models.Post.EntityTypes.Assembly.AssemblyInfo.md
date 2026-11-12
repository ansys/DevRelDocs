# Class AssemblyInfo
<div align="right"><a href="/lib/VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.md" download="VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_EntityTypes_Assembly_AssemblyInfo"></a>

Namespace: [VM.Models.Post.EntityTypes.Assembly](VM.Models.Post.EntityTypes.Assembly.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

Represents assembly information reported by a result document.

```csharp
public class AssemblyInfo : EntityBase, IHasGuid
```

#### Inherited Members

EntityBase.CategoryType, 
EntityBase.EntityType, 
ObjectBase.FullName

## Constructors

 [AssemblyInfo\(ResultDocument, Guid, string\)](VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.\-ctor.md\#VM\_Models\_Post\_EntityTypes\_Assembly\_AssemblyInfo\_\_ctor\_VM\_Models\_Post\_ResultDocument\_System\_Guid\_System\_String\_)

Initializes a new instance of the `AssemblyInfo` class.

## Properties

 [CategoryType](VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.CategoryType.md\#VM\_Models\_Post\_EntityTypes\_Assembly\_AssemblyInfo\_CategoryType)

Gets `Unknown` because assembly information is not assigned to a Postprocessor category.

 [EntityType](VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.EntityType.md\#VM\_Models\_Post\_EntityTypes\_Assembly\_AssemblyInfo\_EntityType)

Gets `AssemblyInfo` to identify this entity as assembly information.

 [Type](VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.Type.md\#VM\_Models\_Post\_EntityTypes\_Assembly\_AssemblyInfo\_Type)

Gets or sets the assembly category reported for this assembly information.
