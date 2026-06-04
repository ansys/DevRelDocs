#  Class ChamferInfo

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Champer information for the extrude geometry

```csharp
public abstract class ChamferInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChamferInfo](VM.CAD.Builders.ChamferInfo.md)

#### Derived

[ChamferInfoEdge](VM.CAD.Builders.ChamferInfoEdge.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_ChamferInfo__ctor"></a> ChamferInfo\(\)

```csharp
protected ChamferInfo()
```

## Properties

### <a id="VM_CAD_Builders_ChamferInfo_LeftRange"></a> LeftRange

Left range of the champer

```csharp
public double LeftRange { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_ChamferInfo_Radius"></a> Radius

Radius of the champer

```csharp
public double Radius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_ChamferInfo_RightRange"></a> RightRange

Right range of the champer

```csharp
public double RightRange { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

