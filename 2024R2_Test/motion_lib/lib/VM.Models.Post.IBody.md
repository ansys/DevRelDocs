# <a id="VM_Models_Post_IBody"></a> Interface IBody

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IBody : IBodyBase, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IBodyBase](VM.Models.Post.IBodyBase.md), 
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

### <a id="VM_Models_Post_IBody_BodyType"></a> BodyType

```csharp
BodyType BodyType { get; }
```

#### Property Value

 [BodyType](VM.Models.Post.BodyType.md)

### <a id="VM_Models_Post_IBody_CoordinateSystem"></a> CoordinateSystem

```csharp
IGeneralMarker CoordinateSystem { get; }
```

#### Property Value

 [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

