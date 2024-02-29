# <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase"></a> Class MarkerManagerBase

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public abstract class MarkerManagerBase : MarkupModel, IMarkerManager, ISelectionManager, IAnimationManager, IManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
MarkupModel ← 
[MarkerManagerBase](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md)

#### Derived

[GeneralMarkerManager](VM.Models.Post.VisualizationImpl.Visualization.GeneralMarkerManager.md), 
[ResultMarkerManager](VM.Models.Post.VisualizationImpl.Visualization.ResultMarkerManager.md)

#### Implements

IMarkerManager, 
ISelectionManager, 
IAnimationManager, 
IManager

#### Inherited Members

MarkupModel.getCPtr\(MarkupModel\), 
MarkupModel.Dispose\(\), 
MarkupModel.ToString\(\), 
MarkupModel.partIndex\(MarkupPart\), 
MarkupModel.part\(uint\), 
MarkupModel.addPart\(MarkupPart\), 
MarkupModel.removePart\(MarkupPart\), 
MarkupModel.removeAllParts\(\), 
MarkupModel.rayIntersect\(Ray, View\), 
MarkupModel.rayIntersect\(Ray, View, MarkupModelHitItem\), 
MarkupModel.rayIntersectAllHits\(Ray, View, MarkupModelHitItemCollection\), 
MarkupModel.isViewClippingIgnored\(\), 
MarkupModel.setIgnoreViewClipping\(bool\), 
MarkupModel.castFromBaseClass\(Model\), 
MarkupModel.PartCount, 
Model.getCPtr\(Model\), 
Model.Dispose\(\), 
Model.Name, 
Model.BoundingBox, 
Model.Use2dPixelProjection, 
Model.ModelInfo, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase__ctor_System_String_"></a> MarkerManagerBase\(string\)

```csharp
public MarkerManagerBase(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_BoundingBox"></a> BoundingBox

```csharp
public BoundingBox BoundingBox { get; }
```

#### Property Value

 BoundingBox

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Markers"></a> Markers

```csharp
protected IList<IMarkerAnimation> Markers { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IMarkerAnimation\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Add_VM_Models_Post_IMarkerAnimation_"></a> Add\(IMarkerAnimation\)

```csharp
public void Add(IMarkerAnimation marker)
```

#### Parameters

`marker` IMarkerAnimation

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_ClearAllSelection"></a> ClearAllSelection\(\)

```csharp
public void ClearAllSelection()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Find_System_UInt32_"></a> Find\(uint\)

```csharp
public IMarkerAnimation Find(uint partindex)
```

#### Parameters

`partindex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 IMarkerAnimation

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Find_System_String_"></a> Find\(string\)

```csharp
public virtual IMarkerAnimation Find(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 IMarkerAnimation

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_GetSelectedItems"></a> GetSelectedItems\(\)

```csharp
public IList<HitItemInfo> GetSelectedItems()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_RayIntersect_Ceetron_CeetronDesktopComponents_Ray_Ceetron_CeetronDesktopComponents_Visualization_View_"></a> RayIntersect\(Ray, View\)

```csharp
public HitItemInfo RayIntersect(Ray ray, View view)
```

#### Parameters

`ray` Ray

`view` View

#### Returns

 HitItemInfo

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_RayIntersectAllHits_Ceetron_CeetronDesktopComponents_Ray_Ceetron_CeetronDesktopComponents_Visualization_View_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> RayIntersectAllHits\(Ray, View, IList<HitItemInfo\>\)

```csharp
public bool RayIntersectAllHits(Ray ray, View view, IList<HitItemInfo> hitItems)
```

#### Parameters

`ray` Ray

`view` View

`hitItems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_RegionIntersect_Ceetron_CeetronDesktopComponents_Visualization_Camera_System_Drawing_Point_System_Int32_System_Int32_"></a> RegionIntersect\(Camera, Point, int, int\)

```csharp
public IList<HitItemInfo> RegionIntersect(Camera camera, Point leftbottom, int width, int height)
```

#### Parameters

`camera` Camera

`leftbottom` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Remove_VM_Models_Post_IMarkerAnimation_"></a> Remove\(IMarkerAnimation\)

```csharp
public abstract void Remove(IMarkerAnimation markerData)
```

#### Parameters

`markerData` IMarkerAnimation

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
public abstract void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_Trajectory_System_Boolean_System_String_"></a> Trajectory\(bool, string\)

```csharp
public void Trajectory(bool show, string name)
```

#### Parameters

`show` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerManagerBase_UpdateAnimation_System_Int32_"></a> UpdateAnimation\(int\)

```csharp
public void UpdateAnimation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

