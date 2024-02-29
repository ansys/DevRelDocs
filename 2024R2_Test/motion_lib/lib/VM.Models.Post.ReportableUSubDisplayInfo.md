# <a id="VM_Models_Post_ReportableUSubDisplayInfo"></a> Class ReportableUSubDisplayInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class ReportableUSubDisplayInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReportableUSubDisplayInfo](VM.Models.Post.ReportableUSubDisplayInfo.md)

#### Derived

[ContourDisplayInfo](VM.Models.Post.ContourDisplayInfo.md), 
[LinesDisplayInfo](VM.Models.Post.LinesDisplayInfo.md), 
[PointDisplayInfo](VM.Models.Post.PointDisplayInfo.md), 
[PointWithScalarDisplayInfo](VM.Models.Post.PointWithScalarDisplayInfo.md), 
[PointWithScalarsDisplayInfo](VM.Models.Post.PointWithScalarsDisplayInfo.md), 
[PointsWithScalarsDisplayInfo](VM.Models.Post.PointsWithScalarsDisplayInfo.md), 
[VectorDisplayInfo](VM.Models.Post.VectorDisplayInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ReportableUSubDisplayInfo__ctor_VM_Models_Post_ReportableUSubDisplayType_System_String_"></a> ReportableUSubDisplayInfo\(ReportableUSubDisplayType, string\)

```csharp
public ReportableUSubDisplayInfo(ReportableUSubDisplayType displayType, string name)
```

#### Parameters

`displayType` [ReportableUSubDisplayType](VM.Models.Post.ReportableUSubDisplayType.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_ReportableUSubDisplayInfo_DisplayType"></a> DisplayType

```csharp
public ReportableUSubDisplayType DisplayType { get; }
```

#### Property Value

 [ReportableUSubDisplayType](VM.Models.Post.ReportableUSubDisplayType.md)

### <a id="VM_Models_Post_ReportableUSubDisplayInfo_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

