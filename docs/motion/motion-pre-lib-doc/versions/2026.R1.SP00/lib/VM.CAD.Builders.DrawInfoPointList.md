# Class DrawInfoPointList
<a id="VM_CAD_Builders_DrawInfoPointList"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Polyline profile geometry

```csharp
public class DrawInfoPointList : DrawInfo
```

#### Inheritance

object ← 
[DrawInfo](VM.CAD.Builders.DrawInfo.md) ← 
[DrawInfoPointList](VM.CAD.Builders.DrawInfoPointList.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_DrawInfoPointList__ctor"></a> DrawInfoPointList\(\)

```csharp
public DrawInfoPointList()
```

## Properties

### <a id="VM_CAD_Builders_DrawInfoPointList_Closed"></a> Closed

Flag indicates whether the profile is closed polyline or not

```csharp
public bool Closed { get; set; }
```

#### Property Value

 bool

### <a id="VM_CAD_Builders_DrawInfoPointList_Points"></a> Points

Profile points

```csharp
public List<Vector> Points { get; set; }
```

#### Property Value

 List<Vector\>

