# Class GearShapeCustomBase.Profile
<a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the profile.

```csharp
public class GearShapeCustomBase.Profile
```

#### Inheritance

object ← 
[GearShapeCustomBase.Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile__ctor"></a> Profile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Profile()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_Distance"></a> Distance

The distance from the base profile

```csharp
public double Distance { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_PointCount"></a> PointCount

The number of profile points.

```csharp
public int PointCount { get; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_PointList"></a> PointList

The profile points.

```csharp
public List<GearShapeCustomBase.Point2D> PointList { get; set; }
```

#### Property Value

 List<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_Equals_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_"></a> Equals\(Profile\)

<p>Check equality of two objects</p>

```csharp
public bool Equals(GearShapeCustomBase.Profile other)
```

#### Parameters

`other` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

<p>Object to compare</p>

#### Returns

 bool

<p>true if two objects are equal. Otherwise false.</p>

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_GetToothProfile_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_System_UInt32_"></a> GetToothProfile\(Profile, uint\)

Get the profile of a gear tooth.

```csharp
public static List<GearShapeCustomBase.Point2D> GetToothProfile(GearShapeCustomBase.Profile pf, uint nTooth)
```

#### Parameters

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

`nTooth` uint

The number of tooth.

#### Returns

 List<[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)\>

The profile of a gear tooth.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_MaxDistance_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Point2D_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile__System_Double__"></a> MaxDistance\(Point2D, ref Profile, ref double\)

Get the maximum distance from center point.

```csharp
public static double MaxDistance(GearShapeCustomBase.Point2D ptCenter, ref GearShapeCustomBase.Profile pf, ref double dAngle)
```

#### Parameters

`ptCenter` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)

The center point.

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

`dAngle` double

The angle of maximum distance point.

#### Returns

 double

The maximum distance.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_MinDistance_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Point2D_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile__"></a> MinDistance\(Point2D, ref Profile\)

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

 double

The minimum distance.

### <a id="VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile_MinDistance_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Point2D_VM_Managed_DAFUL_GearTrain_GearShapeCustomBase_Profile__System_Double__"></a> MinDistance\(Point2D, ref Profile, ref double\)

Get the minimum distance from center point.

```csharp
public static double MinDistance(GearShapeCustomBase.Point2D ptCenter, ref GearShapeCustomBase.Profile pf, ref double dAngle)
```

#### Parameters

`ptCenter` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Point2D](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Point2D.md)

The center point.

`pf` [GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md).[Profile](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.Profile.md)

The target profile.

`dAngle` double

The angle of maximum distance point.

#### Returns

 double

The minimum distance.

