# Interface IPointLoad

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Point load interface

```csharp
public interface IPointLoad : IPointEntity
```

#### Implements

[IPointEntity](VM.Managed.DAFUL.GearTrain.IPointEntity.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Direction

Gets the direction.

```csharp
VectorBase Direction { get; }
```

#### Property Value

 VectorBase

### ForceX

Gets the force x.

```csharp
ExpressionValueVariable ForceX { get; }
```

#### Property Value

 ExpressionValueVariable

### ForceY

Gets the force y.

```csharp
ExpressionValueVariable ForceY { get; }
```

#### Property Value

 ExpressionValueVariable

### ForceZ

Gets the force z.

```csharp
ExpressionValueVariable ForceZ { get; }
```

#### Property Value

 ExpressionValueVariable

### TorqueX

Gets the torque x.

```csharp
ExpressionValueVariable TorqueX { get; }
```

#### Property Value

 ExpressionValueVariable

### TorqueY

Gets the torque y.

```csharp
ExpressionValueVariable TorqueY { get; }
```

#### Property Value

 ExpressionValueVariable


