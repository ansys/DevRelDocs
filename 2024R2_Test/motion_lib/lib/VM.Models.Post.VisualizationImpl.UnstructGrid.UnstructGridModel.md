# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel"></a> Class UnstructGridModel

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public abstract class UnstructGridModel : UnstructGridModel, IUnstructGridModel, IModel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
UnstructGridModel ← 
[UnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md)

#### Derived

[ContourUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md)

#### Implements

IUnstructGridModel, 
IModel

#### Inherited Members

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

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel__ctor"></a> UnstructGridModel\(\)

```csharp
public UnstructGridModel()
```

## Fields

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_DisplacementID"></a> DisplacementID

```csharp
public const int DisplacementID = 100
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_CurrentStateIDs"></a> CurrentStateIDs

```csharp
public int[] CurrentStateIDs { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_DataElementSets"></a> DataElementSets

```csharp
protected IEnumerable<IDataElementSet> DataElementSets { get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IDataElementSet\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_DataGeometry"></a> DataGeometry

```csharp
public IDataGeometry DataGeometry { get; }
```

#### Property Value

 IDataGeometry

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_DataSourceMemory"></a> DataSourceMemory

```csharp
protected DataSourceMemory DataSourceMemory { get; }
```

#### Property Value

 DataSourceMemory

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GeneralMarkerManager"></a> GeneralMarkerManager

```csharp
public IGeneralMarkerManager GeneralMarkerManager { get; }
```

#### Property Value

 IGeneralMarkerManager

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_Geometry"></a> Geometry

```csharp
public DataGeometry Geometry { get; }
```

#### Property Value

 DataGeometry

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GlobalGeometryIndex"></a> GlobalGeometryIndex

```csharp
public uint GlobalGeometryIndex { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_IsCuttingPlaneMode"></a> IsCuttingPlaneMode

```csharp
public bool IsCuttingPlaneMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_IsCuttingPlanePicked"></a> IsCuttingPlanePicked

```csharp
public bool IsCuttingPlanePicked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_Managers"></a> Managers

```csharp
public IList<IManager> Managers { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IManager\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_ReferenceValues"></a> ReferenceValues

```csharp
public IList<double> ReferenceValues { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_ResultMarkerManager"></a> ResultMarkerManager

```csharp
public IResultMarkerManager ResultMarkerManager { get; }
```

#### Property Value

 IResultMarkerManager

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_StateIDs"></a> StateIDs

```csharp
public int[] StateIDs { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_WhenStateIdsChanged"></a> WhenStateIdsChanged

```csharp
public IObservable<int[]> WhenStateIdsChanged { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\>

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddAnimationInfoToDirectory_System_Int32_"></a> AddAnimationInfoToDirectory\(int\)

```csharp
public void AddAnimationInfoToDirectory(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddPartInfoToDirectory_System_Int32_System_String_"></a> AddPartInfoToDirectory\(int, string\)

```csharp
public void AddPartInfoToDirectory(int partindex, string name)
```

#### Parameters

`partindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddResultInfoToDirectory_VM_Models_Post_ResultType_System_Int32_System_String_VM_Models_Post_ResultMapping_"></a> AddResultInfoToDirectory\(ResultType, int, string, ResultMapping\)

```csharp
public void AddResultInfoToDirectory(ResultType resulttype, int resultid, string description, ResultMapping mapping)
```

#### Parameters

`resulttype` ResultType

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`mapping` ResultMapping

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddState_System_Int32_"></a> AddState\(int\)

```csharp
public void AddState(int stateID)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddState_VM_Models_Post_IDataState_"></a> AddState\(IDataState\)

```csharp
public void AddState(IDataState state)
```

#### Parameters

`state` IDataState

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddStateInfoToDirectory_System_Int32_System_String_System_Double_"></a> AddStateInfoToDirectory\(int, string, double\)

```csharp
public void AddStateInfoToDirectory(int stateid, string description, double refvalue)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`refvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_AddStatesToDataSource_System_Int32___"></a> AddStatesToDataSource\(int\[\]\)

```csharp
public void AddStatesToDataSource(int[] stateids)
```

#### Parameters

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_ClearAllSelection"></a> ClearAllSelection\(\)

```csharp
public void ClearAllSelection()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_CreateDataState_System_Int32_System_Boolean_"></a> CreateDataState\(int, bool\)

```csharp
public IDataState CreateDataState(int stateID, bool hasOnlyFirstFrame = false)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`hasOnlyFirstFrame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IDataState

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_CreateGeneralMarkerAnimation"></a> CreateGeneralMarkerAnimation\(\)

```csharp
public IMarkerAnimation CreateGeneralMarkerAnimation()
```

#### Returns

 IMarkerAnimation

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_CreateHitItem_VM_Models_Post_HitItemInfo_"></a> CreateHitItem\(HitItemInfo\)

```csharp
public IHitItem CreateHitItem(HitItemInfo hitItemInfo)
```

#### Parameters

`hitItemInfo` HitItemInfo

#### Returns

 IHitItem

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_CurrentStateInfoText"></a> CurrentStateInfoText\(\)

```csharp
public virtual string CurrentStateInfoText()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetBoundingBox_System_Boolean_"></a> GetBoundingBox\(bool\)

```csharp
public BoundingBox GetBoundingBox(bool visiblePartsOnly = false)
```

#### Parameters

`visiblePartsOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 BoundingBox

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetCurrentFrameIndex"></a> GetCurrentFrameIndex\(\)

```csharp
public uint GetCurrentFrameIndex()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetCurrentScalarResultID"></a> GetCurrentScalarResultID\(\)

```csharp
public int GetCurrentScalarResultID()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetCurrentStateID"></a> GetCurrentStateID\(\)

```csharp
public int GetCurrentStateID()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetDataPartName_System_UInt32_"></a> GetDataPartName\(uint\)

```csharp
public string GetDataPartName(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetDataStates"></a> GetDataStates\(\)

```csharp
public IList<IDataState> GetDataStates()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetFrameCount"></a> GetFrameCount\(\)

```csharp
public uint GetFrameCount()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetLargeExtentOfBoundingBox"></a> GetLargeExtentOfBoundingBox\(\)

```csharp
public double GetLargeExtentOfBoundingBox()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetPartColor_System_Int32_"></a> GetPartColor\(int\)

```csharp
public Color GetPartColor(int partindex)
```

#### Parameters

`partindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetReferenceTime_System_UInt32_"></a> GetReferenceTime\(uint\)

```csharp
public double? GetReferenceTime(uint iframe)
```

#### Parameters

`iframe` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetResultDescription_VM_Models_Post_ResultType_System_Int32_"></a> GetResultDescription\(ResultType, int\)

```csharp
public string GetResultDescription(ResultType type, int resultid)
```

#### Parameters

`type` ResultType

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetSelectedItems"></a> GetSelectedItems\(\)

```csharp
public IList<HitItemInfo> GetSelectedItems()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetStateID"></a> GetStateID\(\)

```csharp
public int GetStateID()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetVisibleElementSetIds"></a> GetVisibleElementSetIds\(\)

```csharp
protected IList<int> GetVisibleElementSetIds()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_GetVisibleTriangles_System_Int32_"></a> GetVisibleTriangles\(int\)

```csharp
public uint[] GetVisibleTriangles(int partid)
```

#### Parameters

`partid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_HitTestOnRectangle_System_Drawing_Point_System_Int32_System_Int32_Ceetron_CeetronDesktopComponents_Visualization_View_"></a> HitTestOnRectangle\(Point, int, int, View\)

```csharp
public IList<HitItemInfo> HitTestOnRectangle(Point leftbottom, int width, int height, View view)
```

#### Parameters

`leftbottom` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`view` View

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_HitTestOnSinglePoint_Ceetron_CeetronDesktopComponents_Ray_Ceetron_CeetronDesktopComponents_Visualization_View_"></a> HitTestOnSinglePoint\(Ray, View\)

```csharp
public IList<HitItemInfo> HitTestOnSinglePoint(Ray ray, View view)
```

#### Parameters

`ray` Ray

`view` View

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_InitStateInfos_System_Int32___System_Double___"></a> InitStateInfos\(int\[\], double\[\]\)

```csharp
public void InitStateInfos(int[] stateIDs, double[] referenceValues)
```

#### Parameters

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`referenceValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_Initialze_VM_Models_Post_MetaInfo_"></a> Initialze\(MetaInfo\)

```csharp
public void Initialze(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_OnMouseEventForCuttingPlane_VM_Models_Post_IAnimationViewer_System_Int32_System_Int32_System_Int32_"></a> OnMouseEventForCuttingPlane\(IAnimationViewer, int, int, int\)

```csharp
public bool OnMouseEventForCuttingPlane(IAnimationViewer view, int nType, int x, int y)
```

#### Parameters

`view` IAnimationViewer

`nType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_PartBoundingBox_System_UInt32_System_UInt32_System_Int32_"></a> PartBoundingBox\(uint, uint, int\)

```csharp
public BoundingBox PartBoundingBox(uint frameIndex, uint globalGeometryIndex, int partId)
```

#### Parameters

`frameIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`globalGeometryIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`partId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BoundingBox

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_RegistCuttingPlaneInputCallback_VM_Models_Post_CallbackSetInformMode_"></a> RegistCuttingPlaneInputCallback\(CallbackSetInformMode\)

```csharp
public void RegistCuttingPlaneInputCallback(CallbackSetInformMode callbackInfomMode)
```

#### Parameters

`callbackInfomMode` CallbackSetInformMode

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_RemoveAllElementSets"></a> RemoveAllElementSets\(\)

```csharp
protected void RemoveAllElementSets()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_RemoveAllStateInfos"></a> RemoveAllStateInfos\(\)

```csharp
public void RemoveAllStateInfos()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_RemoveAllStates"></a> RemoveAllStates\(\)

```csharp
public void RemoveAllStates()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
public void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetCurrentStateInfos_System_Int32___"></a> SetCurrentStateInfos\(int\[\]\)

```csharp
public void SetCurrentStateInfos(int[] currentStateIDs)
```

#### Parameters

`currentStateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetCuttingPlaneUserInputData_VM_Models_Post_IAnimationViewer_System_Double___"></a> SetCuttingPlaneUserInputData\(IAnimationViewer, double\[\]\)

```csharp
public bool SetCuttingPlaneUserInputData(IAnimationViewer view, double[] value)
```

#### Parameters

`view` IAnimationViewer

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetDisplacementResultIDToModelSpec_System_Int32_"></a> SetDisplacementResultIDToModelSpec\(int\)

```csharp
public void SetDisplacementResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetElementSets_VM_Models_Post_MetaInfo_"></a> SetElementSets\(MetaInfo\)

```csharp
public void SetElementSets(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetFrame_System_UInt32_"></a> SetFrame\(uint\)

```csharp
public void SetFrame(uint frame)
```

#### Parameters

`frame` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetPartColor_System_Int32_System_Drawing_Color_"></a> SetPartColor\(int, Color\)

```csharp
public void SetPartColor(int partindex, Color color)
```

#### Parameters

`partindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetResultMarkersInfo_VM_Models_Post_MetaInfo_"></a> SetResultMarkersInfo\(MetaInfo\)

```csharp
public void SetResultMarkersInfo(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetTransformationResultToModelSpec_System_Boolean_"></a> SetTransformationResultToModelSpec\(bool\)

```csharp
public void SetTransformationResultToModelSpec(bool result)
```

#### Parameters

`result` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_SetVectorResultIDToModelSpec_System_Int32_"></a> SetVectorResultIDToModelSpec\(int\)

```csharp
public void SetVectorResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_ToggleCuttingPlane"></a> ToggleCuttingPlane\(\)

```csharp
public void ToggleCuttingPlane()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_UpdateAnimation"></a> UpdateAnimation\(\)

```csharp
public virtual void UpdateAnimation()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_UpdateCuttingPlane"></a> UpdateCuttingPlane\(\)

```csharp
public bool UpdateCuttingPlane()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_UpdateMapScalarOnCuttingPlane"></a> UpdateMapScalarOnCuttingPlane\(\)

```csharp
public void UpdateMapScalarOnCuttingPlane()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_UpdatePartFringeVisibility"></a> UpdatePartFringeVisibility\(\)

```csharp
public void UpdatePartFringeVisibility()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_UpdateVisibleElementSets"></a> UpdateVisibleElementSets\(\)

```csharp
public void UpdateVisibleElementSets()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_UpdateVisualization_VM_Models_Post_UpdateActionType_"></a> UpdateVisualization\(UpdateActionType\)

```csharp
public void UpdateVisualization(UpdateActionType updateActionType)
```

#### Parameters

`updateActionType` UpdateActionType

