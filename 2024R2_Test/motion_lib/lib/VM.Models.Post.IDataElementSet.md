# <a id="VM_Models_Post_IDataElementSet"></a> Interface IDataElementSet

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDataElementSet : IEntity, IObject, IHasName, IHasIndex, IHasID, IExtremalValueVisible
```

#### Implements

[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID, 
[IExtremalValueVisible](VM.Models.Post.IExtremalValueVisible.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDataElementSet_ElementSetType"></a> ElementSetType

```csharp
ElementSetType ElementSetType { get; }
```

#### Property Value

 [ElementSetType](VM.Models.Post.ElementSetType.md)

## Methods

### <a id="VM_Models_Post_IDataElementSet_GetElementSetId"></a> GetElementSetId\(\)

```csharp
int GetElementSetId()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataElementSet_GetParentId"></a> GetParentId\(\)

```csharp
int GetParentId()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

