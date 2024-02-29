# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel"></a> Class ContourUnstructGridModel

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public abstract class ContourUnstructGridModel : UnstructGridModel, IContourUnstructGridModel, IUnstructGridModel, IModel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
UnstructGridModel ← 
[UnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md) ← 
[ContourUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md)

#### Derived

[DynamicUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.DynamicUnstructGridModel.md), 
[EigenvalueUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.EigenvalueUnstructGridModel.md), 
[ModeContributionUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.ModeContributionUnstructGridModel.md)

#### Implements

IContourUnstructGridModel, 
IUnstructGridModel, 
IModel

#### Inherited Members

[UnstructGridModel.DisplacementID](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DisplacementID), 
[UnstructGridModel.AddAnimationInfoToDirectory\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddAnimationInfoToDirectory\_System\_Int32\_), 
[UnstructGridModel.AddPartInfoToDirectory\(int, string\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddPartInfoToDirectory\_System\_Int32\_System\_String\_), 
[UnstructGridModel.AddResultInfoToDirectory\(ResultType, int, string, ResultMapping\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddResultInfoToDirectory\_VM\_Models\_Post\_ResultType\_System\_Int32\_System\_String\_VM\_Models\_Post\_ResultMapping\_), 
[UnstructGridModel.AddState\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddState\_System\_Int32\_), 
[UnstructGridModel.AddState\(IDataState\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddState\_VM\_Models\_Post\_IDataState\_), 
[UnstructGridModel.AddStateInfoToDirectory\(int, string, double\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddStateInfoToDirectory\_System\_Int32\_System\_String\_System\_Double\_), 
[UnstructGridModel.AddStatesToDataSource\(int\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddStatesToDataSource\_System\_Int32\_\_\_), 
[UnstructGridModel.CreateDataState\(int, bool\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CreateDataState\_System\_Int32\_System\_Boolean\_), 
[UnstructGridModel.CreateGeneralMarkerAnimation\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CreateGeneralMarkerAnimation), 
[UnstructGridModel.CreateHitItem\(HitItemInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CreateHitItem\_VM\_Models\_Post\_HitItemInfo\_), 
[UnstructGridModel.CurrentStateInfoText\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CurrentStateInfoText), 
[UnstructGridModel.Dispose\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Dispose), 
[UnstructGridModel.GetBoundingBox\(bool\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetBoundingBox\_System\_Boolean\_), 
[UnstructGridModel.GetCurrentFrameIndex\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetCurrentFrameIndex), 
[UnstructGridModel.GetCurrentScalarResultID\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetCurrentScalarResultID), 
[UnstructGridModel.GetCurrentStateID\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetCurrentStateID), 
[UnstructGridModel.GetDataPartName\(uint\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetDataPartName\_System\_UInt32\_), 
[UnstructGridModel.GetDataStates\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetDataStates), 
[UnstructGridModel.GetFrameCount\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetFrameCount), 
[UnstructGridModel.GetLargeExtentOfBoundingBox\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetLargeExtentOfBoundingBox), 
[UnstructGridModel.GetPartColor\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetPartColor\_System\_Int32\_), 
[UnstructGridModel.GetReferenceTime\(uint\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetReferenceTime\_System\_UInt32\_), 
[UnstructGridModel.GetResultDescription\(ResultType, int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetResultDescription\_VM\_Models\_Post\_ResultType\_System\_Int32\_), 
[UnstructGridModel.GetStateID\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetStateID), 
[UnstructGridModel.GetVisibleTriangles\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetVisibleTriangles\_System\_Int32\_), 
[UnstructGridModel.Initialze\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Initialze\_VM\_Models\_Post\_MetaInfo\_), 
[UnstructGridModel.InitStateInfos\(int\[\], double\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_InitStateInfos\_System\_Int32\_\_\_System\_Double\_\_\_), 
[UnstructGridModel.PartBoundingBox\(uint, uint, int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_PartBoundingBox\_System\_UInt32\_System\_UInt32\_System\_Int32\_), 
[UnstructGridModel.RegistCuttingPlaneInputCallback\(CallbackSetInformMode\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RegistCuttingPlaneInputCallback\_VM\_Models\_Post\_CallbackSetInformMode\_), 
[UnstructGridModel.RemoveAllStateInfos\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RemoveAllStateInfos), 
[UnstructGridModel.RemoveAllStates\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RemoveAllStates), 
[UnstructGridModel.SetCurrentStateInfos\(int\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetCurrentStateInfos\_System\_Int32\_\_\_), 
[UnstructGridModel.SetCuttingPlaneUserInputData\(IAnimationViewer, double\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetCuttingPlaneUserInputData\_VM\_Models\_Post\_IAnimationViewer\_System\_Double\_\_\_), 
[UnstructGridModel.SetDisplacementResultIDToModelSpec\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetDisplacementResultIDToModelSpec\_System\_Int32\_), 
[UnstructGridModel.SetFrame\(uint\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetFrame\_System\_UInt32\_), 
[UnstructGridModel.SetPartColor\(int, Color\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetPartColor\_System\_Int32\_System\_Drawing\_Color\_), 
[UnstructGridModel.SetResultMarkersInfo\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetResultMarkersInfo\_VM\_Models\_Post\_MetaInfo\_), 
[UnstructGridModel.SetTransformationResultToModelSpec\(bool\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetTransformationResultToModelSpec\_System\_Boolean\_), 
[UnstructGridModel.SetVectorResultIDToModelSpec\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetVectorResultIDToModelSpec\_System\_Int32\_), 
[UnstructGridModel.UpdateAnimation\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateAnimation), 
[UnstructGridModel.UpdatePartFringeVisibility\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdatePartFringeVisibility), 
[UnstructGridModel.UpdateVisualization\(UpdateActionType\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateVisualization\_VM\_Models\_Post\_UpdateActionType\_), 
[UnstructGridModel.OnMouseEventForCuttingPlane\(IAnimationViewer, int, int, int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_OnMouseEventForCuttingPlane\_VM\_Models\_Post\_IAnimationViewer\_System\_Int32\_System\_Int32\_System\_Int32\_), 
[UnstructGridModel.ToggleCuttingPlane\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ToggleCuttingPlane), 
[UnstructGridModel.UpdateCuttingPlane\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateCuttingPlane), 
[UnstructGridModel.UpdateMapScalarOnCuttingPlane\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateMapScalarOnCuttingPlane), 
[UnstructGridModel.SetElementSets\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetElementSets\_VM\_Models\_Post\_MetaInfo\_), 
[UnstructGridModel.UpdateVisibleElementSets\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateVisibleElementSets), 
[UnstructGridModel.GetVisibleElementSetIds\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetVisibleElementSetIds), 
[UnstructGridModel.RemoveAllElementSets\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RemoveAllElementSets), 
[UnstructGridModel.ClearAllSelection\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ClearAllSelection), 
[UnstructGridModel.GetSelectedItems\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetSelectedItems), 
[UnstructGridModel.HitTestOnRectangle\(Point, int, int, View\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_HitTestOnRectangle\_System\_Drawing\_Point\_System\_Int32\_System\_Int32\_Ceetron\_CeetronDesktopComponents\_Visualization\_View\_), 
[UnstructGridModel.HitTestOnSinglePoint\(Ray, View\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_HitTestOnSinglePoint\_Ceetron\_CeetronDesktopComponents\_Ray\_Ceetron\_CeetronDesktopComponents\_Visualization\_View\_), 
[UnstructGridModel.Select\(IList<HitItemInfo\>\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Select\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_HitItemInfo\_\_), 
[UnstructGridModel.CurrentStateIDs](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CurrentStateIDs), 
[UnstructGridModel.DataGeometry](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DataGeometry), 
[UnstructGridModel.GeneralMarkerManager](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GeneralMarkerManager), 
[UnstructGridModel.Geometry](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Geometry), 
[UnstructGridModel.GlobalGeometryIndex](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GlobalGeometryIndex), 
[UnstructGridModel.Managers](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Managers), 
[UnstructGridModel.ReferenceValues](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ReferenceValues), 
[UnstructGridModel.ResultMarkerManager](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ResultMarkerManager), 
[UnstructGridModel.StateIDs](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_StateIDs), 
[UnstructGridModel.WhenStateIdsChanged](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_WhenStateIdsChanged), 
[UnstructGridModel.DataSourceMemory](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DataSourceMemory), 
[UnstructGridModel.IsCuttingPlaneMode](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_IsCuttingPlaneMode), 
[UnstructGridModel.IsCuttingPlanePicked](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_IsCuttingPlanePicked), 
[UnstructGridModel.DataElementSets](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DataElementSets), 
UnstructGridModel.getCPtr\(UnstructGridModel\), 
UnstructGridModel.Dispose\(\), 
UnstructGridModel.dataSource\(\), 
UnstructGridModel.setDataSource\(DataSource\), 
UnstructGridModel.updateVisualization\(UnstructGridModel.UpdateAction, Progress, Error\), 
UnstructGridModel.updateVisualization\(UnstructGridModel.UpdateAction, Progress\), 
UnstructGridModel.updateVisualization\(UnstructGridModel.UpdateAction\), 
UnstructGridModel.updateVisualization\(\), 
UnstructGridModel.clearVisualization\(\), 
UnstructGridModel.startUpdateVisualizationPerFrame\(Error\), 
UnstructGridModel.startUpdateVisualizationPerFrame\(\), 
UnstructGridModel.updateVisualizationForFrame\(uint, Error\), 
UnstructGridModel.updateVisualizationForFrame\(uint\), 
UnstructGridModel.rayIntersect\(int, int, View, HitItem\), 
UnstructGridModel.rayIntersectAllHits\(int, int, View, HitItemCollection\), 
UnstructGridModel.regionIntersect\(int, int, uint, uint, View, bool, bool, PartHitItemsArr\), 
UnstructGridModel.polygonIntersect\(Vec2fArr, View, bool, bool, PartHitItemsArr\), 
UnstructGridModel.rayIntersect\(Ray, HitItem\), 
UnstructGridModel.rayIntersectAllHits\(Ray, HitItemCollection\), 
UnstructGridModel.frameBoundingBox\(uint\), 
UnstructGridModel.partBoundingBox\(uint, uint, int\), 
UnstructGridModel.partSettings\(uint, int\), 
UnstructGridModel.existingPartSettings\(uint, int\), 
UnstructGridModel.scalarSettings\(int\), 
UnstructGridModel.existingScalarSettings\(int\), 
UnstructGridModel.vectorSettings\(int\), 
UnstructGridModel.existingVectorSettings\(int\), 
UnstructGridModel.displacementSettings\(int\), 
UnstructGridModel.existingDisplacementSettings\(int\), 
UnstructGridModel.cuttingPlane\(uint\), 
UnstructGridModel.addCuttingPlane\(CuttingPlane\), 
UnstructGridModel.removeCuttingPlane\(CuttingPlane\), 
UnstructGridModel.removeAllCuttingPlanes\(\), 
UnstructGridModel.isosurface\(uint\), 
UnstructGridModel.addIsosurface\(Isosurface\), 
UnstructGridModel.removeIsosurface\(Isosurface\), 
UnstructGridModel.removeAllIsosurfaces\(\), 
UnstructGridModel.isovolume\(uint\), 
UnstructGridModel.addIsovolume\(Isovolume\), 
UnstructGridModel.removeIsovolume\(Isovolume\), 
UnstructGridModel.removeAllIsovolumes\(\), 
UnstructGridModel.particleTraceGroup\(uint\), 
UnstructGridModel.addParticleTraceGroup\(ParticleTraceGroup\), 
UnstructGridModel.removeParticleTraceGroup\(ParticleTraceGroup\), 
UnstructGridModel.removeAllParticleTraceGroups\(\), 
UnstructGridModel.particleTraceTimeRange\(uint, out double, out double\), 
UnstructGridModel.scalarRange\(int, out double, out double\), 
UnstructGridModel.vectorRange\(int, out double, out double\), 
UnstructGridModel.displacementRange\(out double, out double\), 
UnstructGridModel.elementSetColor\(int\), 
UnstructGridModel.setElementSetColor\(int, Color3f\), 
UnstructGridModel.internal\_debug\(int\), 
UnstructGridModel.castFromBaseClass\(Model\), 
UnstructGridModel.ModelSpec, 
UnstructGridModel.ModelSettings, 
UnstructGridModel.FrameCount, 
UnstructGridModel.CurrentStateId, 
UnstructGridModel.CurrentFrameIndex, 
UnstructGridModel.ParticleTraceTime, 
UnstructGridModel.CuttingPlaneCount, 
UnstructGridModel.IsosurfaceCount, 
UnstructGridModel.IsovolumeCount, 
UnstructGridModel.ParticleTraceGroupCount, 
UnstructGridModel.MirrorSettings, 
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

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel__ctor"></a> ContourUnstructGridModel\(\)

```csharp
protected ContourUnstructGridModel()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_AutoRange"></a> AutoRange

```csharp
public bool AutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_Continuous"></a> Continuous

```csharp
public bool Continuous { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_CurrentColorScheme"></a> CurrentColorScheme

```csharp
public IList<Color> CurrentColorScheme { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_ExtremalValueType"></a> ExtremalValueType

```csharp
public ExtremalValueType ExtremalValueType { get; set; }
```

#### Property Value

 ExtremalValueType

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_LegendColorScheme"></a> LegendColorScheme

```csharp
public ColorSchemeType LegendColorScheme { get; set; }
```

#### Property Value

 ColorSchemeType

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_LegendCustomTitle"></a> LegendCustomTitle

```csharp
public string LegendCustomTitle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_LegendFontColor"></a> LegendFontColor

```csharp
public Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_LegendVisibility"></a> LegendVisibility

```csharp
public bool LegendVisibility { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_LogScale"></a> LogScale

```csharp
public bool LogScale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_ScalarRange"></a> ScalarRange

```csharp
public Range ScalarRange { get; set; }
```

#### Property Value

 Range

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_ClearContourData"></a> ClearContourData\(\)

```csharp
public void ClearContourData()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_InitializePartSettings_VM_Models_Post_MetaInfo_"></a> InitializePartSettings\(MetaInfo\)

```csharp
public void InitializePartSettings(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_LoadDynamicAnimation_VM_Models_Post_SourceData_VM_Models_Post_AnalysisResult_System_Int32___"></a> LoadDynamicAnimation\(SourceData, AnalysisResult, int\[\]\)

```csharp
public void LoadDynamicAnimation(SourceData sourceData, AnalysisResult analysisResult, int[] stateIDs)
```

#### Parameters

`sourceData` SourceData

`analysisResult` AnalysisResult

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_SetFringeResultIDToModelSpec_System_Int32_"></a> SetFringeResultIDToModelSpec\(int\)

```csharp
public void SetFringeResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_SetPartInfoToDirectory_VM_Models_Post_MetaInfo_"></a> SetPartInfoToDirectory\(MetaInfo\)

```csharp
public void SetPartInfoToDirectory(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_SetScalarSettings_VM_Models_Post_Contour_"></a> SetScalarSettings\(Contour\)

```csharp
public void SetScalarSettings(Contour contour)
```

#### Parameters

`contour` Contour

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_UpdateExtremalValues_System_UInt32_VM_Models_Post_VisualizationImpl_UnstructGrid_MarkupPartExtremLabels_VM_Models_Post_VisualizationImpl_UnstructGrid_MarkupPartExtremLabels_"></a> UpdateExtremalValues\(uint, MarkupPartExtremLabels, MarkupPartExtremLabels\)

```csharp
public void UpdateExtremalValues(uint iframe, MarkupPartExtremLabels minLabels, MarkupPartExtremLabels maxLabels)
```

#### Parameters

`iframe` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`minLabels` [MarkupPartExtremLabels](VM.Models.Post.VisualizationImpl.UnstructGrid.MarkupPartExtremLabels.md)

`maxLabels` [MarkupPartExtremLabels](VM.Models.Post.VisualizationImpl.UnstructGrid.MarkupPartExtremLabels.md)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ContourUnstructGridModel_UpdateFEPropertyElementSets_VM_Models_Post_MetaInfo_"></a> UpdateFEPropertyElementSets\(MetaInfo\)

```csharp
public void UpdateFEPropertyElementSets(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

