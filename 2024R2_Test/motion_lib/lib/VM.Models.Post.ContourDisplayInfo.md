# <a id="VM_Models_Post_ContourDisplayInfo"></a> Class ContourDisplayInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ContourDisplayInfo : ReportableUSubDisplayInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReportableUSubDisplayInfo](VM.Models.Post.ReportableUSubDisplayInfo.md) ← 
[ContourDisplayInfo](VM.Models.Post.ContourDisplayInfo.md)

#### Inherited Members

[ReportableUSubDisplayInfo.DisplayType](VM.Models.Post.ReportableUSubDisplayInfo.md\#VM\_Models\_Post\_ReportableUSubDisplayInfo\_DisplayType), 
[ReportableUSubDisplayInfo.Name](VM.Models.Post.ReportableUSubDisplayInfo.md\#VM\_Models\_Post\_ReportableUSubDisplayInfo\_Name)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ContourDisplayInfo__ctor_System_String_System_Int32___System_Int32___"></a> ContourDisplayInfo\(string, int\[\], int\[\]\)

```csharp
public ContourDisplayInfo(string name, int[] bodyIndexes, int[] usubParameterIndexes)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bodyIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`usubParameterIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_ContourDisplayInfo_BodyIndexes"></a> BodyIndexes

```csharp
public int[] BodyIndexes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_ContourDisplayInfo_UsubParameterIndexes"></a> UsubParameterIndexes

```csharp
public int[] UsubParameterIndexes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

