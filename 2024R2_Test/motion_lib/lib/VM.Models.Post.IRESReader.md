# <a id="VM_Models_Post_IRESReader"></a> Interface IRESReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IRESReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IRESReader_FENodalBodyInfos"></a> FENodalBodyInfos

```csharp
IList<FEBodyInfo> FENodalBodyInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[FEBodyInfo](VM.Models.Post.FEBodyInfo.md)\>

### <a id="VM_Models_Post_IRESReader_FilePath"></a> FilePath

```csharp
string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IRESReader_IncludeStressStrainFile"></a> IncludeStressStrainFile

```csharp
bool IncludeStressStrainFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_MarkersPositions"></a> MarkersPositions

```csharp
IDictionary<int, double[]> MarkersPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_RigidBodiesPositions"></a> RigidBodiesPositions

```csharp
IDictionary<int, double[]> RigidBodiesPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

## Methods

### <a id="VM_Models_Post_IRESReader_AllocatePartsScalar_VM_Models_Post_MetaInfo_"></a> AllocatePartsScalar\(MetaInfo\)

```csharp
List<double[]> AllocatePartsScalar(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_CanContour_VM_Models_Post_IContact_"></a> CanContour\(IContact\)

```csharp
bool CanContour(IContact contact)
```

#### Parameters

`contact` [IContact](VM.Models.Post.IContact.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_CreateResultInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CreateResultInfo\(ResultInfo, MetaInfo\)

```csharp
bool CreateResultInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ExportAcousticRawDataToFile_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_String_VM_Models_Post_IFEBody_VM_Models_Post_ModeShapeInfo_VM_Models_Post_BehaviorType_System_UInt32___VM_Models_Post_IFFTParameters_"></a> ExportAcousticRawDataToFile\(ResultInfo, MetaInfo, string, IFEBody, ModeShapeInfo, BehaviorType, uint\[\], IFFTParameters\)

```csharp
void ExportAcousticRawDataToFile(ResultInfo resultInfo, MetaInfo metaInfo, string filepath, IFEBody target, ModeShapeInfo modeShapeInfo, BehaviorType behaviorType, uint[] outersurface, IFFTParameters parameters)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`target` [IFEBody](VM.Models.Post.IFEBody.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`behaviorType` [BehaviorType](VM.Models.Post.BehaviorType.md)

`outersurface` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`parameters` [IFFTParameters](VM.Models.Post.IFFTParameters.md)

### <a id="VM_Models_Post_IRESReader_ExportModalBodyRawDataToFile_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_String_VM_Models_Post_IModal_System_Boolean_System_Boolean_"></a> ExportModalBodyRawDataToFile\(ResultInfo, MetaInfo, ModeShapeInfo, string, IModal, bool, bool\)

```csharp
void ExportModalBodyRawDataToFile(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, string filepath, IModal modal, bool includeGeometry, bool includeModeShape)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`modal` [IModal](VM.Models.Post.IModal.md)

`includeGeometry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`includeModeShape` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ExportNodalBodyPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_String_VM_Models_Post_INodal_System_Int32_"></a> ExportNodalBodyPosition\(ResultInfo, MetaInfo, string, INodal, int\)

```csharp
void ExportNodalBodyPosition(ResultInfo resultInfo, MetaInfo metaInfo, string filepath, INodal nodal, int stateid)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nodal` [INodal](VM.Models.Post.INodal.md)

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IRESReader_FinishSPLRecovery"></a> FinishSPLRecovery\(\)

```csharp
void FinishSPLRecovery()
```

### <a id="VM_Models_Post_IRESReader_GenerateReportableVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_VectorDisplayInfos_"></a> GenerateReportableVectorDisplay\(ResultInfo, MetaInfo, VectorDisplayInfos\)

```csharp
bool GenerateReportableVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, VectorDisplayInfos reportableResults)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`reportableResults` [VectorDisplayInfos](VM.Models.Post.VectorDisplayInfos.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_GenerateVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IVectorDisplayable_System_Collections_Generic_Dictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData___"></a> GenerateVectorDisplay\(ResultInfo, MetaInfo, ModeShapeInfo, IVectorDisplayable, ref Dictionary<string, IVectorDisplayAnimationData\>\)

```csharp
bool GenerateVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeshapInfo, IVectorDisplayable targetObjectBase, ref Dictionary<string, IVectorDisplayAnimationData> aniResults)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeshapInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`targetObjectBase` [IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md)

`aniResults` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_GetContactGapResult_System_Double___VM_Models_CharacteristicType_"></a> GetContactGapResult\(double\[\], CharacteristicType\)

```csharp
double GetContactGapResult(double[] contactResult, CharacteristicType characteristic)
```

#### Parameters

`contactResult` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`characteristic` CharacteristicType

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_GetContactLocalSequenceInVariableBlock_VM_Models_CharacteristicType_"></a> GetContactLocalSequenceInVariableBlock\(CharacteristicType\)

```csharp
int GetContactLocalSequenceInVariableBlock(CharacteristicType characteristic)
```

#### Parameters

`characteristic` CharacteristicType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IRESReader_GetContactResult_System_Double___VM_Models_CharacteristicType_"></a> GetContactResult\(double\[\], CharacteristicType\)

```csharp
double GetContactResult(double[] contactResult, CharacteristicType characteristic)
```

#### Parameters

`contactResult` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`characteristic` CharacteristicType

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_GetCurveInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_ValueTuple_VM_Models_Post_IEntity_System_Collections_Generic_IEnumerable_System_String___System_Collections_Generic_IDictionary_System_String_System_Double____System_Object_VM_Models_Post_HitItemInfo_"></a> GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, \(IEntity Target, IEnumerable<string\> Paths\), IDictionary<string, double\[\]\>, object, HitItemInfo\)

```csharp
bool GetCurveInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, (IEntity Target, IEnumerable<string> Paths) targetPaths, IDictionary<string, double[]> curveInfo, object coordsys, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`targetPaths` \([IEntity](VM.Models.Post.IEntity.md) [Target](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.models.post.ientity,system.collections.generic.ienumerable\-system.string\-\-.target), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\> [Paths](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.models.post.ientity,system.collections.generic.ienumerable\-system.string\-\-.paths)\)

`curveInfo` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`coordsys` [object](https://learn.microsoft.com/dotnet/api/system.object)

`hitItem` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_GetCurveInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_String_VM_Models_Post_IEntity_System_Collections_Generic_IDictionary_System_String_System_Collections_Generic_IList_System_Double_____System_Object_VM_Models_Post_HitItemInfo_"></a> GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, string, IEntity, IDictionary<string, IList<double\[\]\>\>, object, HitItemInfo\)

```csharp
bool GetCurveInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, string path, IEntity entity, IDictionary<string, IList<double[]>> curveInfo, object coordsys, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entity` [IEntity](VM.Models.Post.IEntity.md)

`curveInfo` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`coordsys` [object](https://learn.microsoft.com/dotnet/api/system.object)

`hitItem` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_GetDeformationIndex_VM_Models_ComponentType_"></a> GetDeformationIndex\(ComponentType\)

```csharp
int GetDeformationIndex(ComponentType type)
```

#### Parameters

`type` ComponentType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IRESReader_GetInitialFENodeDistanceGroupsFromCSYS_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_System_Double___"></a> GetInitialFENodeDistanceGroupsFromCSYS\(ResultInfo, MetaInfo, IFEBody, double\[\]\)

```csharp
double[] GetInitialFENodeDistanceGroupsFromCSYS(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody febody, double[] csys)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`febody` [IFEBody](VM.Models.Post.IFEBody.md)

`csys` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IRESReader_GetInitialFENodeDistanceGroupsFromCSYS_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> GetInitialFENodeDistanceGroupsFromCSYS\(ResultInfo, MetaInfo\)

```csharp
List<double[]> GetInitialFENodeDistanceGroupsFromCSYS(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_GetMarkerInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IEntity_VM_Models_Post_HitItemInfo_"></a> GetMarkerInfo\(ResultInfo, MetaInfo, ModeShapeInfo, IEntity, HitItemInfo\)

```csharp
IList<double[]> GetMarkerInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IEntity entity, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`entity` [IEntity](VM.Models.Post.IEntity.md)

`hitItem` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_GetModalElementStress_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__VM_Models_Post_FatigueAnalysisParameter_System_Collections_Generic_IList_System_Double____"></a> GetModalElementStress\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IDataState\>, FatigueAnalysisParameter, IList<double\[\]\>\)

```csharp
void GetModalElementStress(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<IDataState> datastates, FatigueAnalysisParameter parameter, IList<double[]> elementStressHistory)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`parameter` [FatigueAnalysisParameter](VM.Models.Post.FatigueAnalysisParameter.md)

`elementStressHistory` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_GetNodalElementStress_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__VM_Models_Post_FatigueAnalysisParameter_System_Collections_Generic_IList_System_Double____"></a> GetNodalElementStress\(ResultInfo, MetaInfo, IList<IDataState\>, FatigueAnalysisParameter, IList<double\[\]\>\)

```csharp
void GetNodalElementStress(ResultInfo resultInfo, MetaInfo metaInfo, IList<IDataState> datastates, FatigueAnalysisParameter parameter, IList<double[]> elementStressHistory)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`parameter` [FatigueAnalysisParameter](VM.Models.Post.FatigueAnalysisParameter.md)

`elementStressHistory` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_InitializePostSolver_VM_Models_Post_MetaInfo_"></a> InitializePostSolver\(MetaInfo\)

```csharp
void InitializePostSolver(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IRESReader_PrepareSPLRecovery_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_VM_Models_Post_IBodyBase__"></a> PrepareSPLRecovery\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IBodyBase\>\)

```csharp
void PrepareSPLRecovery(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<IBodyBase> targets)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IBodyBase](VM.Models.Post.IBodyBase.md)\>

### <a id="VM_Models_Post_IRESReader_ReadAnimationData_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> ReadAnimationData\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IDataState\>\)

```csharp
bool ReadAnimationData(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeshapeInfo, IList<IDataState> datastates)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeshapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ReadBeamGroupAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix__VM_Models_Post_IDataState_"></a> ReadBeamGroupAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)

```csharp
void ReadBeamGroupAnimationData(MetaInfo metaInfo, ResultInfo resultInfo, Dictionary<int, TMatrix> markers, IDataState datastate)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>

`datastate` [IDataState](VM.Models.Post.IDataState.md)

### <a id="VM_Models_Post_IRESReader_ReadCSYSInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_EntityBase_System_Object_"></a> ReadCSYSInfo\(ResultInfo, MetaInfo, EntityBase, object\)

```csharp
IList<double[]> ReadCSYSInfo(ResultInfo resultInfo, MetaInfo metaInfo, EntityBase obj, object csys)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`obj` [EntityBase](VM.Models.Post.EntityBase.md)

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_ReadContourData_VM_Models_Post_ResultDocument_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IUnstructGridModel_VM_Models_AnalysisResultType_System_Int32_VM_Models_ContourMappingType_System_String_System_String_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____System_Boolean_"></a> ReadContourData\(ResultDocument, ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, AnalysisResultType, int, ContourMappingType, string, string, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>, bool\)

```csharp
bool ReadContourData(ResultDocument resultDocument, ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IUnstructGridModel unstructGridModel, AnalysisResultType analysisResultType, int resultID, ContourMappingType mappingType, string characteristic, string component, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback, bool skipDeforamtionScale = false)
```

#### Parameters

`resultDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`unstructGridModel` [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

`analysisResultType` AnalysisResultType

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mappingType` ContourMappingType

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IEntity](VM.Models.Post.IEntity.md)\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`skipDeforamtionScale` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ReadFEBeamGroupAnimationData_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_List_System_Collections_Generic_List_VM_TMatrix_____VM_Models_Post_IDataState_"></a> ReadFEBeamGroupAnimationData\(ResultInfo, MetaInfo, List<List<TMatrix\[\]\>\>, IDataState\)

```csharp
void ReadFEBeamGroupAnimationData(ResultInfo resultInfo, MetaInfo metaInfo, List<List<TMatrix[]>> nodesgroups, IDataState datastate)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`nodesgroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TMatrix\[\]\>\>

`datastate` [IDataState](VM.Models.Post.IDataState.md)

### <a id="VM_Models_Post_IRESReader_ReadFlexibleBodyReferenceFramesFromDisp_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Double____"></a> ReadFlexibleBodyReferenceFramesFromDisp\(ResultInfo, MetaInfo, IList<int\>, IList<double\[\]\>\)

```csharp
bool ReadFlexibleBodyReferenceFramesFromDisp(ResultInfo resultInfo, MetaInfo metaInfo, IList<int> stateids, IList<double[]> flexiblebodyreferenceframes)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`flexiblebodyreferenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ReadGeneralMarkerInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_EntityBase_"></a> ReadGeneralMarkerInfo\(ResultInfo, MetaInfo, EntityBase\)

```csharp
IList<double[]> ReadGeneralMarkerInfo(ResultInfo resultInfo, MetaInfo metaInfo, EntityBase obj)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`obj` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_ReadMarkerTransformation_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_IResultMarker_"></a> ReadMarkerTransformation\(ResultInfo, MetaInfo, int, IResultMarker\)

```csharp
TMatrix ReadMarkerTransformation(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, IResultMarker marker)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`marker` [IResultMarker](VM.Models.Post.IResultMarker.md)

#### Returns

 TMatrix

### <a id="VM_Models_Post_IRESReader_ReadMarkersForLoadingAnimation_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_List_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix____"></a> ReadMarkersForLoadingAnimation\(ResultInfo, MetaInfo, IList<IDataState\>, ref List<Dictionary<int, TMatrix\>\>\)

```csharp
void ReadMarkersForLoadingAnimation(ResultInfo resultInfo, MetaInfo metaInfo, IList<IDataState> datastates, ref List<Dictionary<int, TMatrix>> makers)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`makers` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>\>

### <a id="VM_Models_Post_IRESReader_ReadMarkersPositions_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IResultMarker___"></a> ReadMarkersPositions\(ResultInfo, MetaInfo, IResultMarker\[\]\)

```csharp
bool ReadMarkersPositions(ResultInfo resultInfo, MetaInfo metaInfo, IResultMarker[] markers)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`markers` [IResultMarker](VM.Models.Post.IResultMarker.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementBottomEStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomEStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementBottomEStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementBottomPStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomPStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementBottomPStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementBottomStress_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomStress\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementBottomStress(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementBottomTStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomTStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementBottomTStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementTopEStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopEStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementTopEStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementTopPStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopPStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementTopPStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementTopStress_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopStress\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementTopStress(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyElementTopTStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopTStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyElementTopTStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` [IElement](VM.Models.Post.IElement.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeAcceleration_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeAcceleration\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeAcceleration(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeAngularAcceleration\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeAngularAcceleration(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeAngularVelocity\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeAngularVelocity(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeBottomEStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomEStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeBottomEStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeBottomPStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomPStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeBottomPStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeBottomStress_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomStress\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeBottomStress(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeBottomTStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomTStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeBottomTStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeDeformation_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeDeformation\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeDeformation(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeDisplacement_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeDisplacement\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeDisplacement(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeTopEStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopEStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeTopEStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeTopPStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopPStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeTopPStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeTopStress_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopStress\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeTopStress(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeTopTStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopTStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeTopTStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalBodyNodeVelocity_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeVelocity\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double ReadModalBodyNodeVelocity(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` [INode](VM.Models.Post.INode.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IRESReader_ReadModalCoordinatesFromRes_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_IModal_System_Int32_System_Double____"></a> ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IModal, int, ref double\[\]\)

```csharp
void ReadModalCoordinatesFromRes(MetaInfo metainfo, ResultInfo resultInfo, IModal modal, int stateid, ref double[] coordinates)
```

#### Parameters

`metainfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`modal` [IModal](VM.Models.Post.IModal.md)

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`coordinates` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IRESReader_ReadNodalBodiesNodesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_System_Collections_Generic_List_System_Double____"></a> ReadNodalBodiesNodesPosition\(ResultInfo, MetaInfo, int, List<double\[\]\>\)

```csharp
void ReadNodalBodiesNodesPosition(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, List<double[]> positions)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`positions` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IRESReader_ReadNodeBehavior_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IGeneralMarker_"></a> ReadNodeBehavior\(ResultInfo, MetaInfo, ModeShapeInfo, IGeneralMarker\)

```csharp
double[] ReadNodeBehavior(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeshapInfo, IGeneralMarker csys)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeshapInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IRESReader_ReadResultMarkerBehavior_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadResultMarkerBehavior\(ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
double[] ReadResultMarkerBehavior(ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IRESReader_ReadRigidBodiesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_List_System_Int32__System_Collections_Generic_List_System_Collections_Generic_List_VM_Models_Post_ITransformMatrix____"></a> ReadRigidBodiesPosition\(ResultInfo, MetaInfo, List<int\>, ref List<List<ITransformMatrix\>\>\)

```csharp
void ReadRigidBodiesPosition(ResultInfo resultInfo, MetaInfo metaInfo, List<int> stateids, ref List<List<ITransformMatrix>> results)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`stateids` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformMatrix](VM.Models.Post.ITransformMatrix.md)\>\>

### <a id="VM_Models_Post_IRESReader_ReadRigidBodiesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_System_Collections_Generic_List_VM_Models_Post_ITransformMatrix___"></a> ReadRigidBodiesPosition\(ResultInfo, MetaInfo, int, ref List<ITransformMatrix\>\)

```csharp
void ReadRigidBodiesPosition(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, ref List<ITransformMatrix> results)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformMatrix](VM.Models.Post.ITransformMatrix.md)\>

### <a id="VM_Models_Post_IRESReader_ReadRigidBodyBehavior_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_System_Boolean_"></a> ReadRigidBodyBehavior\(ResultInfo, MetaInfo, IGeneralMarker, bool\)

```csharp
double[] ReadRigidBodyBehavior(ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker marker, bool isNode = false)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`marker` [IGeneralMarker](VM.Models.Post.IGeneralMarker.md)

`isNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IRESReader_ReadSpringAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix__VM_Models_Post_IDataState_"></a> ReadSpringAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)

```csharp
void ReadSpringAnimationData(MetaInfo metaInfo, ResultInfo resultInfo, Dictionary<int, TMatrix> markers, IDataState datastate)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>

`datastate` [IDataState](VM.Models.Post.IDataState.md)

### <a id="VM_Models_Post_IRESReader_ReadTranslationalAcclerations_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32___System_Collections_Generic_IList_VM_Models_Post_IBodyBase__System_Collections_Generic_IList_System_Collections_Generic_IList_System_Double_____System_Boolean_"></a> ReadTranslationalAcclerations\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>, bool\)

```csharp
void ReadTranslationalAcclerations(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<int> states, IList<IDictionary<uint, uint>> keyValuePairGroups, IList<IBodyBase> targets, IList<IList<double[]>> resultGroups, bool excuteParallel = true)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`states` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`keyValuePairGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IBodyBase](VM.Models.Post.IBodyBase.md)\>

`resultGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`excuteParallel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IRESReader_ReadTranslationalDisplacements_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32___System_Collections_Generic_IList_VM_Models_Post_IBodyBase__System_Collections_Generic_IList_System_Collections_Generic_IList_System_Double_____"></a> ReadTranslationalDisplacements\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>\)

```csharp
void ReadTranslationalDisplacements(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<int> states, IList<IDictionary<uint, uint>> keyValuePairGroups, IList<IBodyBase> targets, IList<IList<double[]>> resultGroups)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`states` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`keyValuePairGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IBodyBase](VM.Models.Post.IBodyBase.md)\>

`resultGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_IRESReader_ReadTranslationalVelocities_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32___System_Collections_Generic_IList_VM_Models_Post_IBodyBase__System_Collections_Generic_IList_System_Collections_Generic_IList_System_Double_____"></a> ReadTranslationalVelocities\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>\)

```csharp
void ReadTranslationalVelocities(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<int> states, IList<IDictionary<uint, uint>> keyValuePairGroups, IList<IBodyBase> targets, IList<IList<double[]>> resultGroups)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`states` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`keyValuePairGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IBodyBase](VM.Models.Post.IBodyBase.md)\>

`resultGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_IRESReader_RunFatigueAnalysis_System_String_"></a> RunFatigueAnalysis\(string\)

```csharp
void RunFatigueAnalysis(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IRESReader_SetRDeformation_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> SetRDeformation\(double\[\], int, double\[\], int, double\[\], int, double\[\], int\)

```csharp
void SetRDeformation(double[] a_i, int offsetA_i, double[] a_c, int offsetA_c, double[] a_i0, int offsetA_i0, double[] l_Euler_XYZ, int offsetEuler_XYZ)
```

#### Parameters

`a_i` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA_i` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`a_c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA_c` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`a_i0` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA_i0` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`l_Euler_XYZ` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetEuler_XYZ` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IRESReader_SetTDeformation_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> SetTDeformation\(double\[\], int, double\[\], int, double\[\], int, double\[\], int, double\[\], int\)

```csharp
void SetTDeformation(double[] r_i, int offsetR_i, double[] r_c, int offsetR_c, double[] a_c, int offsetA_c, double[] si_0, int offsetSi_0, double[] deformation, int offsetDeformation)
```

#### Parameters

`r_i` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetR_i` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`r_c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetR_c` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`a_c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA_c` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`si_0` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetSi_0` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`deformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetDeformation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IRESReader_UpdateDeformationScale_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_VM_Vector_VM_Vector_System_Collections_Generic_IEnumerable_VM_Models_Post_IDataState__System_Boolean_"></a> UpdateDeformationScale\(ResultInfo, MetaInfo, IFEBody, Vector, Vector, IEnumerable<IDataState\>, bool\)

```csharp
void UpdateDeformationScale(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody target, Vector oldScale, Vector newScale, IEnumerable<IDataState> dataStates, bool recoverOrignalScale = true)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`target` [IFEBody](VM.Models.Post.IFEBody.md)

`oldScale` Vector

`newScale` Vector

`dataStates` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`recoverOrignalScale` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

