# <a id="VM_Models_Post_IComponent"></a> Interface IComponent

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IComponent : IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

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

### <a id="VM_Models_Post_IComponent_Parent"></a> Parent

```csharp
IEntity Parent { get; }
```

#### Property Value

 [IEntity](VM.Models.Post.IEntity.md)

### <a id="VM_Models_Post_IComponent_SubPath"></a> SubPath

```csharp
string SubPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

