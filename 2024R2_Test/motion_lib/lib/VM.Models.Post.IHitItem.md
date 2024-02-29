# <a id="VM_Models_Post_IHitItem"></a> Interface IHitItem

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IHitItem
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IHitItem_ElementIndex"></a> ElementIndex

```csharp
uint ElementIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IHitItem_FrameIndex"></a> FrameIndex

```csharp
uint FrameIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IHitItem_GeometryIndex"></a> GeometryIndex

```csharp
uint GeometryIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IHitItem_ItemIndex"></a> ItemIndex

```csharp
uint ItemIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IHitItem_NodeIndex"></a> NodeIndex

```csharp
uint NodeIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IHitItem_PartId"></a> PartId

```csharp
int PartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IHitItem_StateId"></a> StateId

```csharp
int StateId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IHitItem_Type"></a> Type

```csharp
HitItemType Type { get; }
```

#### Property Value

 [HitItemType](VM.Models.Post.HitItemType.md)

## Methods

### <a id="VM_Models_Post_IHitItem_Copy"></a> Copy\(\)

```csharp
IHitItem Copy()
```

#### Returns

 [IHitItem](VM.Models.Post.IHitItem.md)

### <a id="VM_Models_Post_IHitItem_GetSource"></a> GetSource\(\)

```csharp
IDisposable GetSource()
```

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### <a id="VM_Models_Post_IHitItem_SetIntersectionPoint_VM_Vector_"></a> SetIntersectionPoint\(Vector\)

```csharp
void SetIntersectionPoint(Vector point)
```

#### Parameters

`point` Vector

