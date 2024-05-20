# Class GearShapeCustomBase.Profile

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the profile.

```csharp
public class GearShapeCustomBase.Profile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GearShapeCustomBase.Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Profile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Profile()
```

## Properties

### Distance

The distance from the base profile

```csharp
public double Distance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PointCount

The number of profile points.

```csharp
public int PointCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PointList

The profile points.

```csharp
public List<GearShapeCustomBase.Point2D> PointList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)\>

## Methods

### Equals\(Profile\)

Check equality of two objects

```csharp
public bool Equals(GearShapeCustomBase.Profile other)
```

#### Parameters

`other` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

Object to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two objects are equal. Otherwise false.

### GetToothProfile\(Profile, uint\)

Get the profile of a gear tooth.

```csharp
public static List<GearShapeCustomBase.Point2D> GetToothProfile(GearShapeCustomBase.Profile pf, uint nTooth)
```

#### Parameters

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

`nTooth` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of tooth.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)\>

The profile of a gear tooth.

### MaxDistance\(Point2D, ref Profile, ref double\)

Get the maximum distance from center point.

```csharp
public static double MaxDistance(GearShapeCustomBase.Point2D ptCenter, ref GearShapeCustomBase.Profile pf, ref double dAngle)
```

#### Parameters

`ptCenter` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)

The center point.

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The angle of maximum distance point.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The maximum distance.

### MinDistance\(Point2D, ref Profile\)

Get the minimum distance from center point.

```csharp
public static double MinDistance(GearShapeCustomBase.Point2D ptCenter, ref GearShapeCustomBase.Profile pf)
```

#### Parameters

`ptCenter` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)

The center point.

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The minimum distance.

### MinDistance\(Point2D, ref Profile, ref double\)

Get the minimum distance from center point.

```csharp
public static double MinDistance(GearShapeCustomBase.Point2D ptCenter, ref GearShapeCustomBase.Profile pf, ref double dAngle)
```

#### Parameters

`ptCenter` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)

The center point.

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The angle of maximum distance point.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The minimum distance.


