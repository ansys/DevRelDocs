# <a id="VM_Models_Post_IVectorDisplay"></a> Interface IVectorDisplay

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IVectorDisplay : IEntity, IObject, IHasName, IHasIndex, IHasID
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

### <a id="VM_Models_Post_IVectorDisplay_Characteristic"></a> Characteristic

```csharp
string Characteristic { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IVectorDisplay_Target"></a> Target

```csharp
IVectorDisplayable Target { get; }
```

#### Property Value

 [IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md)

### <a id="VM_Models_Post_IVectorDisplay_Type"></a> Type

```csharp
VectorDisplayType Type { get; }
```

#### Property Value

 [VectorDisplayType](VM.Models.Post.VectorDisplayType.md)

### <a id="VM_Models_Post_IVectorDisplay_VectorDisplayBaseData"></a> VectorDisplayBaseData

```csharp
IVectorDisplayAnimationBase VectorDisplayBaseData { get; }
```

#### Property Value

 [IVectorDisplayAnimationBase](VM.Models.Post.IVectorDisplayAnimationBase.md)

## Methods

### <a id="VM_Models_Post_IVectorDisplay_GetVectorDisplayKey"></a> GetVectorDisplayKey\(\)

```csharp
string GetVectorDisplayKey()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

