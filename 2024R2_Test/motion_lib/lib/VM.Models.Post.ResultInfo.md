# <a id="VM_Models_Post_ResultInfo"></a> Class ResultInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class ResultInfo : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ResultInfo](VM.Models.Post.ResultInfo.md)

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

### <a id="VM_Models_Post_ResultInfo__ctor_System_String_VM_Models_Post_MetaInfo_VM_Models_Post_IDFRReader_System_Int32_"></a> ResultInfo\(string, MetaInfo, IDFRReader, int\)

```csharp
public ResultInfo(string strFilePath, MetaInfo metaInfo, IDFRReader dfrInfo, int majorVersion)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`dfrInfo` [IDFRReader](VM.Models.Post.IDFRReader.md)

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="VM_Models_Post_ResultInfo_CharacteristicTypesforRecoveringOrigin"></a> CharacteristicTypesforRecoveringOrigin

```csharp
public static IList<CharacteristicType> CharacteristicTypesforRecoveringOrigin { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<CharacteristicType\>

### <a id="VM_Models_Post_ResultInfo_DISPFrameSize"></a> DISPFrameSize

```csharp
public long DISPFrameSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_EIGInfo"></a> EIGInfo

```csharp
public IDFEIGReader EIGInfo { get; }
```

#### Property Value

 [IDFEIGReader](VM.Models.Post.IDFEIGReader.md)

### <a id="VM_Models_Post_ResultInfo_FEOuterConnectivities"></a> FEOuterConnectivities

```csharp
public IDictionary<int, uint[]> FEOuterConnectivities { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

### <a id="VM_Models_Post_ResultInfo_FILTERInfo"></a> FILTERInfo

```csharp
public ICategoryFilter FILTERInfo { get; }
```

#### Property Value

 [ICategoryFilter](VM.Models.Post.ICategoryFilter.md)

### <a id="VM_Models_Post_ResultInfo_HEADER_SIZE"></a> HEADER\_SIZE

```csharp
public long HEADER_SIZE { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_DISP_3DOF_NODE_RESULT"></a> NUM\_OF\_DISP\_3DOF\_NODE\_RESULT

```csharp
public int NUM_OF_DISP_3DOF_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_DISP_6DOF_NODE_RESULT"></a> NUM\_OF\_DISP\_6DOF\_NODE\_RESULT

```csharp
public int NUM_OF_DISP_6DOF_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_DISP_REF_NODE_RESULT"></a> NUM\_OF\_DISP\_REF\_NODE\_RESULT

```csharp
public int NUM_OF_DISP_REF_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_FLEX_CONTACTPRESSURE_RESULT"></a> NUM\_OF\_FLEX\_CONTACTPRESSURE\_RESULT

```csharp
public int NUM_OF_FLEX_CONTACTPRESSURE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_FLEX_NODE_RESULT"></a> NUM\_OF\_FLEX\_NODE\_RESULT

```csharp
public int NUM_OF_FLEX_NODE_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_FLEX_STRAIN_RESULT"></a> NUM\_OF\_FLEX\_STRAIN\_RESULT

```csharp
public int NUM_OF_FLEX_STRAIN_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_FLEX_STRESS_RESULT"></a> NUM\_OF\_FLEX\_STRESS\_RESULT

```csharp
public int NUM_OF_FLEX_STRESS_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_FODEQ_RESULT"></a> NUM\_OF\_FODEQ\_RESULT

```csharp
public int NUM_OF_FODEQ_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_FUNCTION_RESULT"></a> NUM\_OF\_FUNCTION\_RESULT

```csharp
public int NUM_OF_FUNCTION_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_MODAL_COORD_RESULT"></a> NUM\_OF\_MODAL\_COORD\_RESULT

```csharp
public int NUM_OF_MODAL_COORD_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_MODE_SHAPE_RESULT"></a> NUM\_OF\_MODE\_SHAPE\_RESULT

```csharp
public int NUM_OF_MODE_SHAPE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_NODE_CONTACT_RESULT"></a> NUM\_OF\_NODE\_CONTACT\_RESULT

```csharp
public int NUM_OF_NODE_CONTACT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_ORIENTATION_RESULT"></a> NUM\_OF\_ORIENTATION\_RESULT

```csharp
public int NUM_OF_ORIENTATION_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_POSITION"></a> NUM\_OF\_POSITION

```csharp
public int NUM_OF_POSITION { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_RBODY_ANIMATION_RESULT"></a> NUM\_OF\_RBODY\_ANIMATION\_RESULT

```csharp
public int NUM_OF_RBODY_ANIMATION_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_READABLE_MARKER"></a> NUM\_OF\_READABLE\_MARKER

```csharp
public int NUM_OF_READABLE_MARKER { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_REF_NODE_RESULT"></a> NUM\_OF\_REF\_NODE\_RESULT

```csharp
public int NUM_OF_REF_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_RES_3DOF_NODE_RESULT"></a> NUM\_OF\_RES\_3DOF\_NODE\_RESULT

```csharp
public int NUM_OF_RES_3DOF_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_RES_6DOF_NODE_RESULT"></a> NUM\_OF\_RES\_6DOF\_NODE\_RESULT

```csharp
public int NUM_OF_RES_6DOF_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_RIGID_RESULT"></a> NUM\_OF\_RIGID\_RESULT

```csharp
public int NUM_OF_RIGID_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_SINPUT_RESULT"></a> NUM\_OF\_SINPUT\_RESULT

```csharp
public int NUM_OF_SINPUT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_SODEQ_RESULT"></a> NUM\_OF\_SODEQ\_RESULT

```csharp
public int NUM_OF_SODEQ_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_SOUTPUT_RESULT"></a> NUM\_OF\_SOUTPUT\_RESULT

```csharp
public int NUM_OF_SOUTPUT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_STEP_INDEX"></a> NUM\_OF\_STEP\_INDEX

```csharp
public int NUM_OF_STEP_INDEX { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_TIME_RESULT"></a> NUM\_OF\_TIME\_RESULT

```csharp
public int NUM_OF_TIME_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_NUM_OF_VAREQ_RESULT"></a> NUM\_OF\_VAREQ\_RESULT

```csharp
public int NUM_OF_VAREQ_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_PLTFrameSize"></a> PLTFrameSize

```csharp
public long PLTFrameSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_PLTInfo"></a> PLTInfo

```csharp
public IPLTReader PLTInfo { get; }
```

#### Property Value

 [IPLTReader](VM.Models.Post.IPLTReader.md)

### <a id="VM_Models_Post_ResultInfo_PLTTime"></a> PLTTime

```csharp
public IList<double> PLTTime { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_ResultInfo_RESFrameSize"></a> RESFrameSize

```csharp
public long RESFrameSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_RESInfo"></a> RESInfo

```csharp
public IRESReader RESInfo { get; }
```

#### Property Value

 [IRESReader](VM.Models.Post.IRESReader.md)

### <a id="VM_Models_Post_ResultInfo_SizeContact"></a> SizeContact

```csharp
public long SizeContact { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeDISPMBody"></a> SizeDISPMBody

```csharp
public long SizeDISPMBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeDISPNBody"></a> SizeDISPNBody

```csharp
public long SizeDISPNBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeDISPRBody"></a> SizeDISPRBody

```csharp
public long SizeDISPRBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeEFEntity"></a> SizeEFEntity

```csharp
public long SizeEFEntity { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeFEInfo"></a> SizeFEInfo

```csharp
public long SizeFEInfo { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeFODEq"></a> SizeFODEq

```csharp
public long SizeFODEq { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeForce"></a> SizeForce

```csharp
public long SizeForce { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeFunction"></a> SizeFunction

```csharp
public long SizeFunction { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeJoint"></a> SizeJoint

```csharp
public long SizeJoint { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeMBody"></a> SizeMBody

```csharp
public long SizeMBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeNBody"></a> SizeNBody

```csharp
public long SizeNBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeNodeSet"></a> SizeNodeSet

```csharp
public long SizeNodeSet { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeRBody"></a> SizeRBody

```csharp
public long SizeRBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeReadableMarker"></a> SizeReadableMarker

```csharp
public long SizeReadableMarker { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeRequest"></a> SizeRequest

```csharp
public long SizeRequest { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeSInput"></a> SizeSInput

```csharp
public long SizeSInput { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeSODEq"></a> SizeSODEq

```csharp
public long SizeSODEq { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeSOutput"></a> SizeSOutput

```csharp
public long SizeSOutput { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeUsub"></a> SizeUsub

```csharp
public long SizeUsub { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_SizeVarEq"></a> SizeVarEq

```csharp
public long SizeVarEq { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_StateIDs"></a> StateIDs

```csharp
public int[] StateIDs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_ResultInfo_StrainFrameSize"></a> StrainFrameSize

```csharp
public long StrainFrameSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_StressFrameSize"></a> StressFrameSize

```csharp
public long StressFrameSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_ResultInfo_TSTEP"></a> TSTEP

```csharp
public string TSTEP { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultInfo_Times"></a> Times

```csharp
public double[] Times { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ResultInfo_UVECInfo"></a> UVECInfo

```csharp
public IUVECReader UVECInfo { get; }
```

#### Property Value

 [IUVECReader](VM.Models.Post.IUVECReader.md)

### <a id="VM_Models_Post_ResultInfo_Version"></a> Version

```csharp
public int Version { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Models_Post_ResultInfo_ClearEigenvalueAnalysisInfo"></a> ClearEigenvalueAnalysisInfo\(\)

```csharp
public void ClearEigenvalueAnalysisInfo()
```

### <a id="VM_Models_Post_ResultInfo_CreateCurve_VM_Models_PlotDataType_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IEnumerable_VM_Models_Post_EigenvalueAnalysisInfo__System_Object_System_Collections_Generic_IEnumerable_System_String__System_Object_"></a> CreateCurve\(PlotDataType, ModeShapeInfo, IEnumerable<EigenvalueAnalysisInfo\>, object, IEnumerable<string\>, object\)

```csharp
public IDictionary<string, Point2D[]> CreateCurve(PlotDataType resultFileType, ModeShapeInfo modeShapeInfo, IEnumerable<EigenvalueAnalysisInfo> eigenvalueAnalysisInfos, object @object, IEnumerable<string> paths, object csys)
```

#### Parameters

`resultFileType` PlotDataType

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`eigenvalueAnalysisInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)\>

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

`paths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_ResultInfo_CreateCurve_VM_Models_PlotDataType_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_HitItemInfo_System_Object_"></a> CreateCurve\(PlotDataType, ModeShapeInfo, IEnumerable<string\>, HitItemInfo, object\)

```csharp
public IDictionary<string, Point2D[]> CreateCurve(PlotDataType resultFileType, ModeShapeInfo modeShapeInfo, IEnumerable<string> path, HitItemInfo hitItemInfo, object csys)
```

#### Parameters

`resultFileType` PlotDataType

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`path` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`hitItemInfo` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_ResultInfo_CreateCurveOnFrequencySequence_System_UInt32_System_Collections_Generic_IEnumerable_VM_Models_Post_EigenvalueAnalysisInfo__"></a> CreateCurveOnFrequencySequence\(uint, IEnumerable<EigenvalueAnalysisInfo\>\)

```csharp
public IList<Point2D> CreateCurveOnFrequencySequence(uint targetSequence, IEnumerable<EigenvalueAnalysisInfo> eigenvalueAnalysisInfos)
```

#### Parameters

`targetSequence` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`eigenvalueAnalysisInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)\>

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<Point2D\>

### <a id="VM_Models_Post_ResultInfo_CreateCurveOnFrequencyTime_System_UInt32_System_Collections_Generic_IEnumerable_VM_Models_Post_EigenvalueAnalysisInfo__"></a> CreateCurveOnFrequencyTime\(uint, IEnumerable<EigenvalueAnalysisInfo\>\)

```csharp
public IList<Point2D> CreateCurveOnFrequencyTime(uint targetStateId, IEnumerable<EigenvalueAnalysisInfo> eigenvalueAnalysisInfos)
```

#### Parameters

`targetStateId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`eigenvalueAnalysisInfos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)\>

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<Point2D\>

### <a id="VM_Models_Post_ResultInfo_CreateResultInfo_System_String_VM_Models_Post_MetaInfo_VM_Models_Post_IDFRReader_System_Int32_"></a> CreateResultInfo\(string, MetaInfo, IDFRReader, int\)

```csharp
public void CreateResultInfo(string strFilePath, MetaInfo metaInfo, IDFRReader dfrInfo, int majorVersion)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`dfrInfo` [IDFRReader](VM.Models.Post.IDFRReader.md)

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultInfo_ExportAcousticRawDataToFile_System_String_VM_Models_Post_IFEBody_VM_Models_Post_ModeShapeInfo_VM_Models_Post_BehaviorType_System_UInt32___VM_Models_Post_IFFTParameters_"></a> ExportAcousticRawDataToFile\(string, IFEBody, ModeShapeInfo, BehaviorType, uint\[\], IFFTParameters\)

```csharp
public void ExportAcousticRawDataToFile(string filepath, IFEBody target, ModeShapeInfo modeShapeInfo, BehaviorType behaviorType, uint[] outersurface, IFFTParameters parameters)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`target` [IFEBody](VM.Models.Post.IFEBody.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`behaviorType` [BehaviorType](VM.Models.Post.BehaviorType.md)

`outersurface` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`parameters` [IFFTParameters](VM.Models.Post.IFFTParameters.md)

### <a id="VM_Models_Post_ResultInfo_ExportNodalBodyPosition_System_String_VM_Identifier_System_Int32_"></a> ExportNodalBodyPosition\(string, Identifier, int\)

```csharp
public void ExportNodalBodyPosition(string filepath, Identifier identifier, int stateid)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`identifier` Identifier

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_GetBodies_VM_Models_Post_BodyType_System_Boolean_"></a> GetBodies\(BodyType, bool\)

```csharp
public IEnumerable<(BodyType, string)> GetBodies(BodyType type, bool includeDuymmy)
```

#### Parameters

`type` [BodyType](VM.Models.Post.BodyType.md)

`includeDuymmy` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\([BodyType](VM.Models.Post.BodyType.md), [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

### <a id="VM_Models_Post_ResultInfo_GetBodyComponentType_System_Int32_System_Boolean_"></a> GetBodyComponentType\(int, bool\)

```csharp
public Type GetBodyComponentType(int parentID, bool isNode)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`isNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_Models_Post_ResultInfo_GetCSYSInfo_VM_Models_Post_EntityBase_VM_Models_Post_MetaInfo_System_Object_"></a> GetCSYSInfo\(EntityBase, MetaInfo, object\)

```csharp
public IList<double[]> GetCSYSInfo(EntityBase entity, MetaInfo metaInfo, object csys)
```

#### Parameters

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_ResultInfo_GetCharacteristics_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_System_Object_"></a> GetCharacteristics\(AnalysisResultType, ContourMappingType, object\)

```csharp
public List<string> GetCharacteristics(AnalysisResultType analysisResultType, ContourMappingType mappingType, object obj)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetCharacteristics_VM_Models_PlotDataType_System_String_"></a> GetCharacteristics\(PlotDataType, string\)

```csharp
public List<string> GetCharacteristics(PlotDataType type, string name)
```

#### Parameters

`type` PlotDataType

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetCharacteristics_VM_Models_PlotDataType_System_Object_"></a> GetCharacteristics\(PlotDataType, object\)

```csharp
public List<string> GetCharacteristics(PlotDataType type, object @object)
```

#### Parameters

`type` PlotDataType

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetComponentIndex_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_VM_Models_Post_IEntity_System_String_System_String_"></a> GetComponentIndex\(AnalysisResultType, ContourMappingType, IEntity, string, string\)

```csharp
public int GetComponentIndex(AnalysisResultType analysisResultType, ContourMappingType mappingType, IEntity entity, string characteristic, string component)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`entity` [IEntity](VM.Models.Post.IEntity.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_GetComponentIndex_VM_Models_Post_IObject_System_String_"></a> GetComponentIndex\(IObject, string\)

```csharp
public int GetComponentIndex(IObject @object, string path)
```

#### Parameters

`object` [IObject](VM.Models.Post.IObject.md)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_GetComponentUnitType_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_System_Object_System_String_System_String_"></a> GetComponentUnitType\(AnalysisResultType, ContourMappingType, object, string, string\)

```csharp
public string GetComponentUnitType(AnalysisResultType analysisResultType, ContourMappingType mappingType, object target, string characteristic, string component)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultInfo_GetComponentUnitType_System_Type_System_String_System_String_"></a> GetComponentUnitType\(Type, string, string\)

```csharp
public string GetComponentUnitType(Type targetType, string characteristic, string component)
```

#### Parameters

`targetType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultInfo_GetComponentUnitType_VM_Models_Post_IObject_System_String_System_String_"></a> GetComponentUnitType\(IObject, string, string\)

```csharp
public string GetComponentUnitType(IObject objectBase, string characteristic, string component)
```

#### Parameters

`objectBase` [IObject](VM.Models.Post.IObject.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultInfo_GetComponents_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_VM_Models_Post_IObject_System_String_"></a> GetComponents\(AnalysisResultType, ContourMappingType, IObject, string\)

```csharp
public List<string> GetComponents(AnalysisResultType analysisResultType, ContourMappingType mappingType, IObject objectBase, string characteristic)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`objectBase` [IObject](VM.Models.Post.IObject.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetComponents_VM_Models_PlotDataType_VM_Models_Post_IObject_System_String_"></a> GetComponents\(PlotDataType, IObject, string\)

```csharp
public List<string> GetComponents(PlotDataType type, IObject objectBase, string characteristic)
```

#### Parameters

`type` PlotDataType

`objectBase` [IObject](VM.Models.Post.IObject.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetContourMappingTypes_VM_Models_AnalysisResultType_"></a> GetContourMappingTypes\(AnalysisResultType\)

```csharp
public IEnumerable<ContourMappingType> GetContourMappingTypes(AnalysisResultType analysisResultType)
```

#### Parameters

`analysisResultType` AnalysisResultType

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ContourMappingType\>

### <a id="VM_Models_Post_ResultInfo_GetDriveTrainDataSeries_VM_Identifier_System_String_System_Double____System_Double____"></a> GetDriveTrainDataSeries\(Identifier, string, out double\[\], out double\[\]\)

```csharp
public bool GetDriveTrainDataSeries(Identifier identifier, string path, out double[] x, out double[] y)
```

#### Parameters

`identifier` Identifier

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultInfo_GetInputChannels"></a> GetInputChannels\(\)

```csharp
public IEnumerable<string> GetInputChannels()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetMarkerInfo_VM_Models_Post_EntityBase_"></a> GetMarkerInfo\(EntityBase\)

```csharp
public IList<double[]> GetMarkerInfo(EntityBase entity)
```

#### Parameters

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_ResultInfo_GetMarkerPositionAndOrientation_System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__VM_Models_Post_ModeShapeInfo_"></a> GetMarkerPositionAndOrientation\(IEnumerable<IEntity\>, ModeShapeInfo\)

```csharp
public IDictionary<string, IList<double[]>> GetMarkerPositionAndOrientation(IEnumerable<IEntity> entities, ModeShapeInfo modeShapeInfo)
```

#### Parameters

`entities` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IEntity](VM.Models.Post.IEntity.md)\>

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_ResultInfo_GetOutputChannels"></a> GetOutputChannels\(\)

```csharp
public IEnumerable<string> GetOutputChannels()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultInfo_GetResults_VM_Models_Post_IObject_System_String_"></a> GetResults\(IObject, string\)

```csharp
public string GetResults(IObject obj, string path)
```

#### Parameters

`obj` [IObject](VM.Models.Post.IObject.md)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultInfo_Initialize_System_Int32_"></a> Initialize\(int\)

```csharp
public void Initialize(int majorVersion)
```

#### Parameters

`majorVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultInfo_TryGetContourMappingType_VM_Models_AnalysisResultType_VM_Models_Post_IContourable_System_String__"></a> TryGetContourMappingType\(AnalysisResultType, IContourable, out string\)

```csharp
public bool TryGetContourMappingType(AnalysisResultType analysisResultType, IContourable contourable, out string contourMappingType)
```

#### Parameters

`analysisResultType` AnalysisResultType

`contourable` [IContourable](VM.Models.Post.IContourable.md)

`contourMappingType` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

