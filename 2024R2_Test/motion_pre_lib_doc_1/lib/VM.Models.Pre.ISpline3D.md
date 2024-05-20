# Interface ISpline3D

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent spline3D.

```csharp
public interface ISpline3D : ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment
```

#### Implements

[ISubEntity](VM.Models.Pre.ISubEntity.md), 
[IEntityBase](VM.Models.Pre.IEntityBase.md), 
[IObjectBase](VM.Models.Pre.IObjectBase.md), 
[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IHasKeyObject](VM.Models.Pre.IHasKeyObject.md), 
IHasName, 
IEnabled, 
IHasComment

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Points

```csharp
IList<string> Points { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### XScale

```csharp
IExpressionValue<double> XScale { get; set; }
```

#### Property Value

 [IExpressionValue](VM.Models.Pre.IExpressionValue\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### YScale

```csharp
IExpressionValue<double> YScale { get; set; }
```

#### Property Value

 [IExpressionValue](VM.Models.Pre.IExpressionValue\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### ZScale

```csharp
IExpressionValue<double> ZScale { get; set; }
```

#### Property Value

 [IExpressionValue](VM.Models.Pre.IExpressionValue\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>


