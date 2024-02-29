# <a id="VM_Models_Post_VectorDisplayInfo"></a> Class VectorDisplayInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class VectorDisplayInfo : ReportableUSubDisplayInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReportableUSubDisplayInfo](VM.Models.Post.ReportableUSubDisplayInfo.md) ← 
[VectorDisplayInfo](VM.Models.Post.VectorDisplayInfo.md)

#### Inherited Members

[ReportableUSubDisplayInfo.DisplayType](VM.Models.Post.ReportableUSubDisplayInfo.md\#VM\_Models\_Post\_ReportableUSubDisplayInfo\_DisplayType), 
[ReportableUSubDisplayInfo.Name](VM.Models.Post.ReportableUSubDisplayInfo.md\#VM\_Models\_Post\_ReportableUSubDisplayInfo\_Name)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VectorDisplayInfo__ctor_System_String_VM_Models_Post_ForceDirectionType_VM_Models_Post_VectorDisplayInfo_VectorIndexData___"></a> VectorDisplayInfo\(string, ForceDirectionType, VectorIndexData\[\]\)

```csharp
public VectorDisplayInfo(string name, ForceDirectionType forceDirectionType, VectorDisplayInfo.VectorIndexData[] vectorIndexDatas)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`forceDirectionType` [ForceDirectionType](VM.Models.Post.ForceDirectionType.md)

`vectorIndexDatas` [VectorDisplayInfo](VM.Models.Post.VectorDisplayInfo.md).[VectorIndexData](VM.Models.Post.VectorDisplayInfo.VectorIndexData.md)\[\]

## Properties

### <a id="VM_Models_Post_VectorDisplayInfo_ForceDirectionType"></a> ForceDirectionType

```csharp
public ForceDirectionType ForceDirectionType { get; }
```

#### Property Value

 [ForceDirectionType](VM.Models.Post.ForceDirectionType.md)

### <a id="VM_Models_Post_VectorDisplayInfo_VectorIndexDatas"></a> VectorIndexDatas

```csharp
public VectorDisplayInfo.VectorIndexData[] VectorIndexDatas { get; }
```

#### Property Value

 [VectorDisplayInfo](VM.Models.Post.VectorDisplayInfo.md).[VectorIndexData](VM.Models.Post.VectorDisplayInfo.VectorIndexData.md)\[\]

