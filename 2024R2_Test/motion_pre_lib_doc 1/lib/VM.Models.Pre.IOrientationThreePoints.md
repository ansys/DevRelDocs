# Interface IOrientationThreePoints

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IOrientationThreePoints : IOrientationBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Implements

[IOrientationBase](VM.Models.Pre.IOrientationBase.md), 
[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### OriginPoint

```csharp
IPointBase OriginPoint { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)

### XPoint

```csharp
IPointBase XPoint { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)

### ZPoint

```csharp
IPointBase ZPoint { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)


