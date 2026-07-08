# Class ClipInfo

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.LeafSpring.dll  

```csharp
public class ClipInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClipInfo](VM.Models.Pre.Force.ClipInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ClipInfo\(int, int, double, double\)

```csharp
public ClipInfo(int LeafNumberOfTop, int LeafNumberofBottom, double DistanceFromCenter, double VerticalHeight)
```

#### Parameters

`LeafNumberOfTop` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`LeafNumberofBottom` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`DistanceFromCenter` [double](https://learn.microsoft.com/dotnet/api/system.double)

`VerticalHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### FixedBodySeq

```csharp
public int FixedBodySeq { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ListContactSeq

```csharp
public List<(int body, int leaf)> ListContactSeq { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<\([int](https://learn.microsoft.com/dotnet/api/system.int32) [body](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.body), [int](https://learn.microsoft.com/dotnet/api/system.int32) [leaf](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.leaf)\)\>

### Position

```csharp
public Point3D Position { get; }
```

#### Property Value

 [Point3D](VM.Models.Pre.Force.Point3D.md)

### UpperPosition

```csharp
public Point3D UpperPosition { get; }
```

#### Property Value

 [Point3D](VM.Models.Pre.Force.Point3D.md)


