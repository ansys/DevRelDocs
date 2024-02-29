# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem"></a> Class HitItem

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class HitItem : IHitItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HitItem](VM.Models.Post.VisualizationImpl.UnstructGrid.HitItem.md)

#### Implements

IHitItem

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem__ctor"></a> HitItem\(\)

```csharp
public HitItem()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem__ctor_Ceetron_CeetronDesktopComponents_UnstructGrid_HitItem_"></a> HitItem\(HitItem\)

```csharp
public HitItem(HitItem hitItem)
```

#### Parameters

`hitItem` HitItem

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_EdgeNodeEndIndex"></a> EdgeNodeEndIndex

```csharp
public uint EdgeNodeEndIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_EdgeNodeStartIndex"></a> EdgeNodeStartIndex

```csharp
public uint EdgeNodeStartIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_ElementIndex"></a> ElementIndex

```csharp
public uint ElementIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_ElementLocalNodeIndex"></a> ElementLocalNodeIndex

```csharp
public uint ElementLocalNodeIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_ElementLocalSurfaceIndex"></a> ElementLocalSurfaceIndex

```csharp
public uint ElementLocalSurfaceIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_FrameIndex"></a> FrameIndex

```csharp
public uint FrameIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_GeometryIndex"></a> GeometryIndex

```csharp
public uint GeometryIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_IntersectionPoint"></a> IntersectionPoint

```csharp
public Vec3d IntersectionPoint { get; set; }
```

#### Property Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_IntersectionPointNormal"></a> IntersectionPointNormal

```csharp
public Vec3d IntersectionPointNormal { get; set; }
```

#### Property Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_ItemId"></a> ItemId

```csharp
public int ItemId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_ItemIndex"></a> ItemIndex

```csharp
public uint ItemIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_NodeIndex"></a> NodeIndex

```csharp
public uint NodeIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_PartId"></a> PartId

```csharp
public int PartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_StateId"></a> StateId

```csharp
public int StateId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_TriangleIndex"></a> TriangleIndex

```csharp
public uint TriangleIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_Type"></a> Type

```csharp
public HitItem.ItemType Type { get; set; }
```

#### Property Value

 HitItem.ItemType

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_Copy"></a> Copy\(\)

```csharp
public IHitItem Copy()
```

#### Returns

 IHitItem

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_HitItem_SetIntersectionPoint_VM_Vector_"></a> SetIntersectionPoint\(Vector\)

```csharp
public void SetIntersectionPoint(Vector point)
```

#### Parameters

`point` Vector

