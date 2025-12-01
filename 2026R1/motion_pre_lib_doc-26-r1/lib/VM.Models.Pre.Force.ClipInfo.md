# Class ClipInfo
<a id="VM_Models_Pre_Force_ClipInfo"></a>

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.LeafSpring.dll  

```csharp
public class ClipInfo
```

#### Inheritance

object ← 
[ClipInfo](VM.Models.Pre.Force.ClipInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Force_ClipInfo__ctor_System_Int32_System_Int32_System_Double_System_Double_"></a> ClipInfo\(int, int, double, double\)

```csharp
public ClipInfo(int LeafNumberOfTop, int LeafNumberofBottom, double DistanceFromCenter, double VerticalHeight)
```

#### Parameters

`LeafNumberOfTop` int

`LeafNumberofBottom` int

`DistanceFromCenter` double

`VerticalHeight` double

## Properties

### <a id="VM_Models_Pre_Force_ClipInfo_FixedBodySeq"></a> FixedBodySeq

```csharp
public int FixedBodySeq { get; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_Force_ClipInfo_ListContactSeq"></a> ListContactSeq

```csharp
public List<(int body, int leaf)> ListContactSeq { get; }
```

#### Property Value

 List<\(int body, int leaf\)\>

### <a id="VM_Models_Pre_Force_ClipInfo_Position"></a> Position

```csharp
public Point3D Position { get; }
```

#### Property Value

 [Point3D](VM.Models.Pre.Force.Point3D.md)

### <a id="VM_Models_Pre_Force_ClipInfo_UpperPosition"></a> UpperPosition

```csharp
public Point3D UpperPosition { get; }
```

#### Property Value

 [Point3D](VM.Models.Pre.Force.Point3D.md)

