# <a id="VM_Models_Post_IBodyComponent"></a> Interface IBodyComponent

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IBodyComponent : IComponent, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

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

### <a id="VM_Models_Post_IBodyComponent_ComponentID"></a> ComponentID

```csharp
int ComponentID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IBodyComponent_ParentBodyIndex"></a> ParentBodyIndex

```csharp
int ParentBodyIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IBodyComponent_Source"></a> Source

```csharp
HitItemInfo Source { get; }
```

#### Property Value

 [HitItemInfo](VM.Models.Post.HitItemInfo.md)

## Methods

### <a id="VM_Models_Post_IBodyComponent_ChangeIdInfo_System_Int32_System_Int32_"></a> ChangeIdInfo\(int, int\)

```csharp
void ChangeIdInfo(int id, int index)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

