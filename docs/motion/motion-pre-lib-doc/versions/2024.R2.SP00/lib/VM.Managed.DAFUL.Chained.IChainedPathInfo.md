# Interface IChainedPathInfo

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This interface is the gateway that gets or sets ChainedPath data.

```csharp
public interface IChainedPathInfo
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### GetAssembledRadius\(\)

Gets the assemble radius

```csharp
Variable GetAssembledRadius()
```

#### Returns

 Variable

The assemble radius

### GetCenterPosition\(\)

Gets the center position.

```csharp
PointBase GetCenterPosition()
```

#### Returns

 PointBase

The center position.

### GetPathRotationAxis\(\)

Gets the rotation axis of path.

```csharp
DirectionBase GetPathRotationAxis()
```

#### Returns

 DirectionBase

The rotation axis.

### Get\_WorkPlane\(\)

Get work plane.

```csharp
Plane Get_WorkPlane()
```

#### Returns

 Plane

The plane

### SetAssembledRadius\(Variable\)

Sets the assemble radius.

```csharp
void SetAssembledRadius(Variable _assembledradius)
```

#### Parameters

`_assembledradius` Variable

The assemble radius

### SetCenterPosition\(PointBase\)

Sets the center position.

```csharp
void SetCenterPosition(PointBase _centerposition)
```

#### Parameters

`_centerposition` PointBase

The center position.

### SetPathRotationAxis\(DirectionBase\)

Sets the rotation axis of path.

```csharp
void SetPathRotationAxis(DirectionBase _rotationaxis)
```

#### Parameters

`_rotationaxis` DirectionBase

The boolean value.


