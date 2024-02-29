# <a id="VM_Models_Post_VisualizationImpl_Visualization_ResultMarkerManager"></a> Class ResultMarkerManager

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class ResultMarkerManager : MarkerManagerBase, IResultMarkerManager, IMarkerManager, ISelectionManager, IAnimationManager, IManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
MarkupModel ← 
[MarkerManagerBase](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md) ← 
[ResultMarkerManager](VM.Models.Post.VisualizationImpl.Visualization.ResultMarkerManager.md)

#### Implements

IResultMarkerManager, 
IMarkerManager, 
ISelectionManager, 
IAnimationManager, 
IManager

#### Inherited Members

[MarkerManagerBase.Add\(IMarkerAnimation\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Add\_VM\_Models\_Post\_IMarkerAnimation\_), 
[MarkerManagerBase.ClearAllSelection\(\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_ClearAllSelection), 
[MarkerManagerBase.Find\(uint\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Find\_System\_UInt32\_), 
[MarkerManagerBase.Find\(string\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Find\_System\_String\_), 
[MarkerManagerBase.GetSelectedItems\(\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_GetSelectedItems), 
[MarkerManagerBase.RayIntersect\(Ray, View\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_RayIntersect\_Ceetron\_CeetronDesktopComponents\_Ray\_Ceetron\_CeetronDesktopComponents\_Visualization\_View\_), 
[MarkerManagerBase.RayIntersectAllHits\(Ray, View, IList<HitItemInfo\>\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_RayIntersectAllHits\_Ceetron\_CeetronDesktopComponents\_Ray\_Ceetron\_CeetronDesktopComponents\_Visualization\_View\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_HitItemInfo\_\_), 
[MarkerManagerBase.RegionIntersect\(Camera, Point, int, int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_RegionIntersect\_Ceetron\_CeetronDesktopComponents\_Visualization\_Camera\_System\_Drawing\_Point\_System\_Int32\_System\_Int32\_), 
[MarkerManagerBase.Remove\(IMarkerAnimation\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Remove\_VM\_Models\_Post\_IMarkerAnimation\_), 
[MarkerManagerBase.Select\(IList<HitItemInfo\>\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Select\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_HitItemInfo\_\_), 
[MarkerManagerBase.Trajectory\(bool, string\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Trajectory\_System\_Boolean\_System\_String\_), 
[MarkerManagerBase.UpdateAnimation\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_UpdateAnimation\_System\_Int32\_), 
[MarkerManagerBase.BoundingBox](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_BoundingBox), 
[MarkerManagerBase.Name](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Name), 
[MarkerManagerBase.Markers](VM.Models.Post.VisualizationImpl.Visualization.MarkerManagerBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerManagerBase\_Markers), 
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

### <a id="VM_Models_Post_VisualizationImpl_Visualization_ResultMarkerManager__ctor_System_String_"></a> ResultMarkerManager\(string\)

```csharp
public ResultMarkerManager(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_ResultMarkerManager_Remove_VM_Models_Post_IMarkerAnimation_"></a> Remove\(IMarkerAnimation\)

```csharp
public override void Remove(IMarkerAnimation marker)
```

#### Parameters

`marker` IMarkerAnimation

### <a id="VM_Models_Post_VisualizationImpl_Visualization_ResultMarkerManager_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
public override void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

