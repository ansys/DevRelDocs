# Class ChamferInfoEdge

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Champer information of specific edge for the extrude geometry

```csharp
public class ChamferInfoEdge : ChamferInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChamferInfo](VM.CAD.Builders.ChamferInfo.md) ← 
[ChamferInfoEdge](VM.CAD.Builders.ChamferInfoEdge.md)

#### Inherited Members

[ChamferInfo.Radius](VM.CAD.Builders.ChamferInfo.md\#VM\_CAD\_Builders\_ChamferInfo\_Radius), 
[ChamferInfo.LeftRange](VM.CAD.Builders.ChamferInfo.md\#VM\_CAD\_Builders\_ChamferInfo\_LeftRange), 
[ChamferInfo.RightRange](VM.CAD.Builders.ChamferInfo.md\#VM\_CAD\_Builders\_ChamferInfo\_RightRange)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ChamferInfoEdge\(\)

```csharp
public ChamferInfoEdge()
```

## Properties

### Point

Point of the champer

```csharp
public Vector Point { get; set; }
```

#### Property Value

 Vector

### Vector

Vector of the champer

```csharp
public Vector Vector { get; set; }
```

#### Property Value

 Vector


