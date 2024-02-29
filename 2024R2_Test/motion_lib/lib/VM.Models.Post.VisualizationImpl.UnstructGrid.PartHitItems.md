# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems"></a> Class PartHitItems

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class PartHitItems : IHitItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PartHitItems](VM.Models.Post.VisualizationImpl.UnstructGrid.PartHitItems.md)

#### Implements

IHitItem

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems__ctor_Ceetron_CeetronDesktopComponents_UnstructGrid_PartHitItems_"></a> PartHitItems\(PartHitItems\)

```csharp
public PartHitItems(PartHitItems partHitItems)
```

#### Parameters

`partHitItems` PartHitItems

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_ElementCount"></a> ElementCount

```csharp
public int ElementCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_ElementIndex"></a> ElementIndex

```csharp
public uint ElementIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_ElementIndices"></a> ElementIndices

```csharp
public UIntArr ElementIndices { get; set; }
```

#### Property Value

 UIntArr

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_FrameIndex"></a> FrameIndex

```csharp
public uint FrameIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_GeometryIndex"></a> GeometryIndex

```csharp
public uint GeometryIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_ItemIndex"></a> ItemIndex

```csharp
public uint ItemIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_NodeIndex"></a> NodeIndex

```csharp
public uint NodeIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_PartId"></a> PartId

```csharp
public int PartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_PartIndex"></a> PartIndex

```csharp
public uint PartIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_StateId"></a> StateId

```csharp
public int StateId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_Type"></a> Type

```csharp
public HitItemType Type { get; }
```

#### Property Value

 HitItemType

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_Copy"></a> Copy\(\)

```csharp
public IHitItem Copy()
```

#### Returns

 IHitItem

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_GetSource"></a> GetSource\(\)

```csharp
public PartHitItems GetSource()
```

#### Returns

 PartHitItems

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_PartHitItems_SetIntersectionPoint_VM_Vector_"></a> SetIntersectionPoint\(Vector\)

```csharp
public void SetIntersectionPoint(Vector point)
```

#### Parameters

`point` Vector

