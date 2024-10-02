#  Class DrawInfoTwoPoint

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Base class for the two-point progile geometry

```csharp
public abstract class DrawInfoTwoPoint : DrawInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DrawInfo](VM.CAD.Builders.DrawInfo.md) ← 
[DrawInfoTwoPoint](VM.CAD.Builders.DrawInfoTwoPoint.md)

#### Derived

[DrawInfoArc](VM.CAD.Builders.DrawInfoArc.md), 
[DrawInfoLine](VM.CAD.Builders.DrawInfoLine.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_DrawInfoTwoPoint__ctor"></a> DrawInfoTwoPoint\(\)

```csharp
protected DrawInfoTwoPoint()
```

## Properties

### <a id="VM_CAD_Builders_DrawInfoTwoPoint_Point1"></a> Point1

First point

```csharp
public Vector Point1 { get; set; }
```

#### Property Value

 Vector

### <a id="VM_CAD_Builders_DrawInfoTwoPoint_Point2"></a> Point2

Second point

```csharp
public Vector Point2 { get; set; }
```

#### Property Value

 Vector

