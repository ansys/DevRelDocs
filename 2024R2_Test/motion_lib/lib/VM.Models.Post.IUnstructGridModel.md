# <a id="VM_Models_Post_IUnstructGridModel"></a> Interface IUnstructGridModel

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IUnstructGridModel : IModel
```

#### Implements

[IModel](VM.Models.Post.IModel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IUnstructGridModel_DataGeometry"></a> DataGeometry

```csharp
IDataGeometry DataGeometry { get; }
```

#### Property Value

 [IDataGeometry](VM.Models.Post.IDataGeometry.md)

### <a id="VM_Models_Post_IUnstructGridModel_GeneralMarkerManager"></a> GeneralMarkerManager

```csharp
IGeneralMarkerManager GeneralMarkerManager { get; }
```

#### Property Value

 [IGeneralMarkerManager](VM.Models.Post.IGeneralMarkerManager.md)

### <a id="VM_Models_Post_IUnstructGridModel_IsCuttingPlaneMode"></a> IsCuttingPlaneMode

```csharp
bool IsCuttingPlaneMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IUnstructGridModel_IsCuttingPlanePicked"></a> IsCuttingPlanePicked

```csharp
bool IsCuttingPlanePicked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IUnstructGridModel_ReferenceValues"></a> ReferenceValues

```csharp
IList<double> ReferenceValues { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_IUnstructGridModel_ResultMarkerManager"></a> ResultMarkerManager

```csharp
IResultMarkerManager ResultMarkerManager { get; }
```

#### Property Value

 [IResultMarkerManager](VM.Models.Post.IResultMarkerManager.md)

### <a id="VM_Models_Post_IUnstructGridModel_WhenStateIdsChanged"></a> WhenStateIdsChanged

```csharp
IObservable<int[]> WhenStateIdsChanged { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\>

## Methods

### <a id="VM_Models_Post_IUnstructGridModel_AddAnimationInfoToDirectory_System_Int32_"></a> AddAnimationInfoToDirectory\(int\)

```csharp
void AddAnimationInfoToDirectory(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_AddPartInfoToDirectory_System_Int32_System_String_"></a> AddPartInfoToDirectory\(int, string\)

```csharp
void AddPartInfoToDirectory(int partindex, string name)
```

#### Parameters

`partindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IUnstructGridModel_AddResultInfoToDirectory_VM_Models_Post_ResultType_System_Int32_System_String_VM_Models_Post_ResultMapping_"></a> AddResultInfoToDirectory\(ResultType, int, string, ResultMapping\)

```csharp
void AddResultInfoToDirectory(ResultType resulttype, int resultid, string description, ResultMapping mapping)
```

#### Parameters

`resulttype` [ResultType](VM.Models.Post.ResultType.md)

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`mapping` [ResultMapping](VM.Models.Post.ResultMapping.md)

### <a id="VM_Models_Post_IUnstructGridModel_AddState_VM_Models_Post_IDataState_"></a> AddState\(IDataState\)

```csharp
void AddState(IDataState state)
```

#### Parameters

`state` [IDataState](VM.Models.Post.IDataState.md)

### <a id="VM_Models_Post_IUnstructGridModel_AddState_System_Int32_"></a> AddState\(int\)

```csharp
void AddState(int stateID)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_AddStateInfoToDirectory_System_Int32_System_String_System_Double_"></a> AddStateInfoToDirectory\(int, string, double\)

```csharp
void AddStateInfoToDirectory(int stateid, string description, double refvalue)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`refvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IUnstructGridModel_AddStatesToDataSource_System_Int32___"></a> AddStatesToDataSource\(int\[\]\)

```csharp
void AddStatesToDataSource(int[] stateids)
```

#### Parameters

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IUnstructGridModel_ClearAllSelection"></a> ClearAllSelection\(\)

```csharp
void ClearAllSelection()
```

### <a id="VM_Models_Post_IUnstructGridModel_CreateDataState_System_Int32_System_Boolean_"></a> CreateDataState\(int, bool\)

```csharp
IDataState CreateDataState(int stateID, bool hasOnlyFirstFrame = false)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`hasOnlyFirstFrame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IDataState](VM.Models.Post.IDataState.md)

### <a id="VM_Models_Post_IUnstructGridModel_CreateGeneralMarkerAnimation"></a> CreateGeneralMarkerAnimation\(\)

```csharp
IMarkerAnimation CreateGeneralMarkerAnimation()
```

#### Returns

 [IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

### <a id="VM_Models_Post_IUnstructGridModel_CreateHitItem_VM_Models_Post_HitItemInfo_"></a> CreateHitItem\(HitItemInfo\)

```csharp
IHitItem CreateHitItem(HitItemInfo hitItemInfo)
```

#### Parameters

`hitItemInfo` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

#### Returns

 [IHitItem](VM.Models.Post.IHitItem.md)

### <a id="VM_Models_Post_IUnstructGridModel_CurrentStateInfoText"></a> CurrentStateInfoText\(\)

```csharp
string CurrentStateInfoText()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IUnstructGridModel_GetCurrentFrameIndex"></a> GetCurrentFrameIndex\(\)

```csharp
uint GetCurrentFrameIndex()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IUnstructGridModel_GetCurrentScalarResultID"></a> GetCurrentScalarResultID\(\)

```csharp
int GetCurrentScalarResultID()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_GetCurrentStateID"></a> GetCurrentStateID\(\)

```csharp
int GetCurrentStateID()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_GetDataPartName_System_UInt32_"></a> GetDataPartName\(uint\)

```csharp
string GetDataPartName(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IUnstructGridModel_GetDataStates"></a> GetDataStates\(\)

```csharp
IList<IDataState> GetDataStates()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

### <a id="VM_Models_Post_IUnstructGridModel_GetFrameCount"></a> GetFrameCount\(\)

```csharp
uint GetFrameCount()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IUnstructGridModel_GetLargeExtentOfBoundingBox"></a> GetLargeExtentOfBoundingBox\(\)

```csharp
double GetLargeExtentOfBoundingBox()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IUnstructGridModel_GetReferenceTime_System_UInt32_"></a> GetReferenceTime\(uint\)

```csharp
double? GetReferenceTime(uint iframe)
```

#### Parameters

`iframe` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Models_Post_IUnstructGridModel_GetResultDescription_VM_Models_Post_ResultType_System_Int32_"></a> GetResultDescription\(ResultType, int\)

```csharp
string GetResultDescription(ResultType type, int resultid)
```

#### Parameters

`type` [ResultType](VM.Models.Post.ResultType.md)

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IUnstructGridModel_GetStateID"></a> GetStateID\(\)

```csharp
int GetStateID()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_GetVisibleTriangles_System_Int32_"></a> GetVisibleTriangles\(int\)

```csharp
uint[] GetVisibleTriangles(int partid)
```

#### Parameters

`partid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_IUnstructGridModel_InitStateInfos_System_Int32___System_Double___"></a> InitStateInfos\(int\[\], double\[\]\)

```csharp
void InitStateInfos(int[] stateIDs, double[] referenceValues)
```

#### Parameters

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`referenceValues` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IUnstructGridModel_Initialze_VM_Models_Post_MetaInfo_"></a> Initialze\(MetaInfo\)

```csharp
void Initialze(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IUnstructGridModel_RegistCuttingPlaneInputCallback_VM_Models_Post_CallbackSetInformMode_"></a> RegistCuttingPlaneInputCallback\(CallbackSetInformMode\)

```csharp
void RegistCuttingPlaneInputCallback(CallbackSetInformMode callbackInfomMode)
```

#### Parameters

`callbackInfomMode` [CallbackSetInformMode](VM.Models.Post.CallbackSetInformMode.md)

### <a id="VM_Models_Post_IUnstructGridModel_RemoveAllStateInfos"></a> RemoveAllStateInfos\(\)

```csharp
void RemoveAllStateInfos()
```

### <a id="VM_Models_Post_IUnstructGridModel_RemoveAllStates"></a> RemoveAllStates\(\)

```csharp
void RemoveAllStates()
```

### <a id="VM_Models_Post_IUnstructGridModel_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[HitItemInfo](VM.Models.Post.HitItemInfo.md)\>

### <a id="VM_Models_Post_IUnstructGridModel_SetCurrentStateInfos_System_Int32___"></a> SetCurrentStateInfos\(int\[\]\)

```csharp
void SetCurrentStateInfos(int[] currentStateIDs)
```

#### Parameters

`currentStateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IUnstructGridModel_SetDisplacementResultIDToModelSpec_System_Int32_"></a> SetDisplacementResultIDToModelSpec\(int\)

```csharp
void SetDisplacementResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_SetElementSets_VM_Models_Post_MetaInfo_"></a> SetElementSets\(MetaInfo\)

```csharp
void SetElementSets(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IUnstructGridModel_SetFrame_System_UInt32_"></a> SetFrame\(uint\)

```csharp
void SetFrame(uint frame)
```

#### Parameters

`frame` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IUnstructGridModel_SetResultMarkersInfo_VM_Models_Post_MetaInfo_"></a> SetResultMarkersInfo\(MetaInfo\)

```csharp
void SetResultMarkersInfo(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IUnstructGridModel_SetTransformationResultToModelSpec_System_Boolean_"></a> SetTransformationResultToModelSpec\(bool\)

```csharp
void SetTransformationResultToModelSpec(bool result)
```

#### Parameters

`result` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IUnstructGridModel_SetVectorResultIDToModelSpec_System_Int32_"></a> SetVectorResultIDToModelSpec\(int\)

```csharp
void SetVectorResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IUnstructGridModel_ToggleCuttingPlane"></a> ToggleCuttingPlane\(\)

```csharp
void ToggleCuttingPlane()
```

### <a id="VM_Models_Post_IUnstructGridModel_UpdateAnimation"></a> UpdateAnimation\(\)

```csharp
void UpdateAnimation()
```

### <a id="VM_Models_Post_IUnstructGridModel_UpdateCuttingPlane"></a> UpdateCuttingPlane\(\)

```csharp
bool UpdateCuttingPlane()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IUnstructGridModel_UpdateMapScalarOnCuttingPlane"></a> UpdateMapScalarOnCuttingPlane\(\)

```csharp
void UpdateMapScalarOnCuttingPlane()
```

### <a id="VM_Models_Post_IUnstructGridModel_UpdatePartFringeVisibility"></a> UpdatePartFringeVisibility\(\)

```csharp
void UpdatePartFringeVisibility()
```

### <a id="VM_Models_Post_IUnstructGridModel_UpdateVisibleElementSets"></a> UpdateVisibleElementSets\(\)

```csharp
void UpdateVisibleElementSets()
```

### <a id="VM_Models_Post_IUnstructGridModel_UpdateVisualization_VM_Models_Post_UpdateActionType_"></a> UpdateVisualization\(UpdateActionType\)

```csharp
void UpdateVisualization(UpdateActionType updateActionType)
```

#### Parameters

`updateActionType` [UpdateActionType](VM.Models.Post.UpdateActionType.md)

