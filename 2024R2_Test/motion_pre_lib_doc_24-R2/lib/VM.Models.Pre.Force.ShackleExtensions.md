# Class ShackleExtensions

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.LeafSpring.dll  

```csharp
public class ShackleExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShackleExtensions](VM.Models.Pre.Force.ShackleExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ShackleExtensions\(\)

```csharp
public ShackleExtensions()
```

## Methods

### GetOffsetXAtShackeToFramePosition\(\(double X, double Z\), ShackleLocationType, Point2D, Point2D\)

```csharp
public static double GetOffsetXAtShackeToFramePosition((double X, double Z) shacketoframepos, ShackleLocationType ShackleLocation, Point2D calculatedfronteyepos, Point2D calculatedreareyepos)
```

#### Parameters

`shacketoframepos` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`ShackleLocation` [ShackleLocationType](VM.Models.Pre.Force.ShackleLocationType.md)

`calculatedfronteyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

`calculatedreareyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetPositontypAtShackeToFramePosition\(\(double X, double Z\), ShackleLocationType, Point2D, Point2D\)

```csharp
public static ShacklePositonType GetPositontypAtShackeToFramePosition((double X, double Z) shacketoframepos, ShackleLocationType ShackleLocation, Point2D calculatedfronteyepos, Point2D calculatedreareyepos)
```

#### Parameters

`shacketoframepos` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`ShackleLocation` [ShackleLocationType](VM.Models.Pre.Force.ShackleLocationType.md)

`calculatedfronteyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

`calculatedreareyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

#### Returns

 [ShacklePositonType](VM.Models.Pre.Force.ShacklePositonType.md)

### GetSelectedPosBasedOnLocalRF\(Point3D, double\[\]\)

```csharp
public static (double X, double Z) GetSelectedPosBasedOnLocalRF(Point3D selectedpos, double[] ATranspos_ref_frame)
```

#### Parameters

`selectedpos` [Point3D](VM.Models.Pre.Force.Point3D.md)

`ATranspos_ref_frame` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

### GetShackeLength\(\(double X, double Z\), ShackleLocationType, Point2D, Point2D\)

```csharp
public static double GetShackeLength((double X, double Z) shacketoframepos, ShackleLocationType ShackleLocation, Point2D calculatedfronteyepos, Point2D calculatedreareyepos)
```

#### Parameters

`shacketoframepos` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`ShackleLocation` [ShackleLocationType](VM.Models.Pre.Force.ShackleLocationType.md)

`calculatedfronteyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

`calculatedreareyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetShackeToFramePosition\(\(double X, double Z\), \(double X, double Z\), Point2D, Point2D\)

```csharp
public static (double X, double Z) GetShackeToFramePosition((double X, double Z) localrfselectedeyepos, (double X, double Z) localrfselectedshackletoframepos, Point2D calculatedfronteyepos, Point2D calculatedreareyepos)
```

#### Parameters

`localrfselectedeyepos` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`localrfselectedshackletoframepos` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`calculatedfronteyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

`calculatedreareyepos` [Point2D](VM.Models.Pre.Force.Point2D.md)

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

### GetWhereOfShackeToFramePosition\(double, double\)

```csharp
public static ShackleLocationType GetWhereOfShackeToFramePosition(double localrfselectedeyeposX, double localrfselectedshackletoframeposX)
```

#### Parameters

`localrfselectedeyeposX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`localrfselectedshackletoframeposX` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [ShackleLocationType](VM.Models.Pre.Force.ShackleLocationType.md)

### GetshackleInertia\(double, double, double, double\)

```csharp
public static double[] GetshackleInertia(double mainleafwidth, double outerradius, double length, double mass)
```

#### Parameters

`mainleafwidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`outerradius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`length` [double](https://learn.microsoft.com/dotnet/api/system.double)

`mass` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetshackleMass\(double, double, double, double\)

```csharp
public static double GetshackleMass(double density, double mainleafwidth, double outerradius, double length)
```

#### Parameters

`density` [double](https://learn.microsoft.com/dotnet/api/system.double)

`mainleafwidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`outerradius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`length` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)


