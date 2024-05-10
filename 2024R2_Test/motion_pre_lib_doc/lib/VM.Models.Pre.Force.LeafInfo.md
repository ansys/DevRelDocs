# Class LeafInfo

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.LeafSpring.dll  

```csharp
public class LeafInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LeafInfo](VM.Models.Pre.Force.LeafInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### LeafInfo\(double, int, int, int, int, Leaf3D\[\]\)

```csharp
public LeafInfo(double LeafWidth, int NofContactFront, int NofContactRear, int NofEelementFront, int NofEelementRear, Leaf3D[] LeafProfiles)
```

#### Parameters

`LeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`NofContactFront` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`NofContactRear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`NofEelementFront` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`NofEelementRear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`LeafProfiles` [Leaf3D](VM.Models.Pre.Force.Leaf3D.md)\[\]

## Properties

### BeamProfiles

```csharp
public List<Leaf4D> BeamProfiles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Leaf4D](VM.Models.Pre.Force.Leaf4D.md)\>

### Profiles

```csharp
public Leaf3D[] Profiles { get; }
```

#### Property Value

 [Leaf3D](VM.Models.Pre.Force.Leaf3D.md)\[\]


