# <a id="VM_Models_Post_IResultMarker"></a> Interface IResultMarker

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IResultMarker : IMarker, IVisible, IComponent, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IMarker](VM.Models.Post.IMarker.md), 
IVisible, 
[IComponent](VM.Models.Post.IComponent.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IResultMarker_ParentBodyIndex"></a> ParentBodyIndex

```csharp
int ParentBodyIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IResultMarker_ParentNodeIndex"></a> ParentNodeIndex

```csharp
int ParentNodeIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IResultMarker_ParentType"></a> ParentType

```csharp
ParentType ParentType { get; }
```

#### Property Value

 [ParentType](VM.Models.Post.ParentType.md)

