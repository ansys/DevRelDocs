# Interface IDirectionContainer

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the information of direction(x,y,z direction and name) as Design Frame.
Design Frame is casting as IDirectionContainer.

```csharp
public interface IDirectionContainer : IDesignParameter
```

#### Implements

[IDesignParameter](VM.Managed.IDesignParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Position

Gets the position for design frame.

```csharp
VectorBase Position { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

## Methods

### GetDirection\(Coordinate\)

Gets the direction.

```csharp
VectorBase GetDirection(Coordinate DirectionType)
```

#### Parameters

`DirectionType` Coordinate

Direction type(x, y, z).

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)


