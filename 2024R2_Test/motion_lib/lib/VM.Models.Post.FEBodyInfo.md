# <a id="VM_Models_Post_FEBodyInfo"></a> Class FEBodyInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class FEBodyInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FEBodyInfo](VM.Models.Post.FEBodyInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_FEBodyInfo__ctor"></a> FEBodyInfo\(\)

```csharp
public FEBodyInfo()
```

## Properties

### <a id="VM_Models_Post_FEBodyInfo_DISPNodalFEBodyBlockSize"></a> DISPNodalFEBodyBlockSize

```csharp
public long DISPNodalFEBodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FEBodyInfo_ElementCount"></a> ElementCount

```csharp
public IDictionary<ElementType, int> ElementCount { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[ElementType](VM.Models.Post.ElementType.md), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_FEBodyInfo_ElementInfos"></a> ElementInfos

```csharp
public IList<ElementInfo> ElementInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[ElementInfo](VM.Models.Post.ElementInfo.md)\>

### <a id="VM_Models_Post_FEBodyInfo_NodeInfos"></a> NodeInfos

```csharp
public IList<NodeInfo> NodeInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[NodeInfo](VM.Models.Post.NodeInfo.md)\>

### <a id="VM_Models_Post_FEBodyInfo_RESNodalFEBodyBlocksize"></a> RESNodalFEBodyBlocksize

```csharp
public long RESNodalFEBodyBlocksize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FEBodyInfo_StrainElementFEBodyBlockSize"></a> StrainElementFEBodyBlockSize

```csharp
public long StrainElementFEBodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FEBodyInfo_StrainNodeFEBodyBlockSize"></a> StrainNodeFEBodyBlockSize

```csharp
public long StrainNodeFEBodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FEBodyInfo_StressElementFEBodyBlockSize"></a> StressElementFEBodyBlockSize

```csharp
public long StressElementFEBodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_FEBodyInfo_StressNodeFEBodyBlockSize"></a> StressNodeFEBodyBlockSize

```csharp
public long StressNodeFEBodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

