# <a id="VM_Models_Post_PointsWithScalarsDisplayInfo"></a> Class PointsWithScalarsDisplayInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class PointsWithScalarsDisplayInfo : ReportableUSubDisplayInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReportableUSubDisplayInfo](VM.Models.Post.ReportableUSubDisplayInfo.md) ← 
[PointsWithScalarsDisplayInfo](VM.Models.Post.PointsWithScalarsDisplayInfo.md)

#### Inherited Members

[ReportableUSubDisplayInfo.DisplayType](VM.Models.Post.ReportableUSubDisplayInfo.md\#VM\_Models\_Post\_ReportableUSubDisplayInfo\_DisplayType), 
[ReportableUSubDisplayInfo.Name](VM.Models.Post.ReportableUSubDisplayInfo.md\#VM\_Models\_Post\_ReportableUSubDisplayInfo\_Name)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_PointsWithScalarsDisplayInfo__ctor_System_String_System_Int32_____System_Int32___System_Int32_____"></a> PointsWithScalarsDisplayInfo\(string, int\[\]\[\], int\[\], int\[\]\[\]\)

```csharp
public PointsWithScalarsDisplayInfo(string name, int[][] nodeIndexesGroups, int[] parentIndexes, int[][] scalarIndexesGroups)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nodeIndexesGroups` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\[\]

`parentIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`scalarIndexesGroups` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\[\]

## Properties

### <a id="VM_Models_Post_PointsWithScalarsDisplayInfo_NodeIndexesGroups"></a> NodeIndexesGroups

```csharp
public int[][] NodeIndexesGroups { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\[\]

### <a id="VM_Models_Post_PointsWithScalarsDisplayInfo_ParentIndexes"></a> ParentIndexes

```csharp
public int[] ParentIndexes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_PointsWithScalarsDisplayInfo_ScalarIndexesGroups"></a> ScalarIndexesGroups

```csharp
public int[][] ScalarIndexesGroups { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\[\]

