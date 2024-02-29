# <a id="VM_Models_Post_HitItemInfo"></a> Class HitItemInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class HitItemInfo : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[HitItemInfo](VM.Models.Post.HitItemInfo.md)

#### Derived

[HitItemElementInfo](VM.Models.Post.HitItemElementInfo.md), 
[HitItemMarkerInfo](VM.Models.Post.HitItemMarkerInfo.md), 
[HitItemNodeInfo](VM.Models.Post.HitItemNodeInfo.md), 
[HitItemPartInfo](VM.Models.Post.HitItemPartInfo.md), 
[HitItemPointInfo](VM.Models.Post.HitItemPointInfo.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_HitItemInfo__ctor_VM_Models_Post_IHitItem_"></a> HitItemInfo\(IHitItem\)

```csharp
public HitItemInfo(IHitItem hitItem)
```

#### Parameters

`hitItem` [IHitItem](VM.Models.Post.IHitItem.md)

## Properties

### <a id="VM_Models_Post_HitItemInfo_DistanceAlongRay"></a> DistanceAlongRay

```csharp
[SaveProperty(false)]
public double DistanceAlongRay { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_HitItemInfo_ElementID"></a> ElementID

```csharp
[SaveProperty(false)]
public int ElementID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_HitItemInfo_ElementIndex"></a> ElementIndex

```csharp
[SaveProperty(false)]
public int ElementIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_HitItemInfo_HitItem"></a> HitItem

```csharp
[JsonIgnore]
public IHitItem HitItem { get; }
```

#### Property Value

 [IHitItem](VM.Models.Post.IHitItem.md)

### <a id="VM_Models_Post_HitItemInfo_HitItemType"></a> HitItemType

```csharp
[SaveProperty(false)]
public HitItemType HitItemType { get; set; }
```

#### Property Value

 [HitItemType](VM.Models.Post.HitItemType.md)

### <a id="VM_Models_Post_HitItemInfo_IntersectionPoint"></a> IntersectionPoint

```csharp
[SaveProperty(false)]
public Vector IntersectionPoint { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Models_Post_HitItemInfo_IsSelected"></a> IsSelected

```csharp
public bool IsSelected { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_HitItemInfo_NodeID"></a> NodeID

```csharp
[SaveProperty(false)]
public int NodeID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_HitItemInfo_NodeIndex"></a> NodeIndex

```csharp
[SaveProperty(false)]
public int NodeIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_HitItemInfo_PartID"></a> PartID

```csharp
[SaveProperty(false)]
public int PartID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_HitItemInfo_PartIndex"></a> PartIndex

```csharp
[SaveProperty(false)]
public int PartIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_HitItemInfo_TypeOfHitItemInfo"></a> TypeOfHitItemInfo

```csharp
[SaveProperty(false)]
public abstract HitItemInfoType TypeOfHitItemInfo { get; }
```

#### Property Value

 [HitItemInfoType](VM.Models.Post.HitItemInfoType.md)

## Methods

### <a id="VM_Models_Post_HitItemInfo_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_HitItemInfo_SetHitItem_VM_Models_Post_IHitItem_"></a> SetHitItem\(IHitItem\)

```csharp
public void SetHitItem(IHitItem hitItem)
```

#### Parameters

`hitItem` [IHitItem](VM.Models.Post.IHitItem.md)

