# <a id="VM_Models_Post_IDFEIGReader"></a> Interface IDFEIGReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDFEIGReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDFEIGReader_LargeExtendOfBoundingBox"></a> LargeExtendOfBoundingBox

```csharp
double LargeExtendOfBoundingBox { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Post_IDFEIGReader_LoadModeshapeAnimation_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> LoadModeshapeAnimation\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)

```csharp
void LoadModeshapeAnimation(MetaInfo metainfo, ResultInfo resultinfo, ModeShapeInfo modeshapeinfo, FrequenciesInfo frequenciesinfo, int ifrequency, IList<IDataState> datastates)
```

#### Parameters

`metainfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`resultinfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`modeshapeinfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`frequenciesinfo` [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

### <a id="VM_Models_Post_IDFEIGReader_ReadContourData_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_VM_Models_ContourMappingType_System_String_System_String_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Collections_Generic_List_System_Collections_Generic_List_System_Double_____"></a> ReadContourData\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int, ContourMappingType, string, string, IList<IDataState\>, IEnumerable<IEntity\>, bool, List<List<double\[\]\>\>\)

```csharp
bool ReadContourData(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, FrequenciesInfo frequenciesinfo, int resultID, ContourMappingType mappingType, string characteristic, string component, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, List<List<double[]>> resultsData)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`frequenciesinfo` [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mappingType` ContourMappingType

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IEntity](VM.Models.Post.IEntity.md)\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`resultsData` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFEIGReader_ReadFrequencyInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_Double___"></a> ReadFrequencyInfo\(ResultDocument, Identifier, MetaInfo, double\[\]\)

```csharp
void ReadFrequencyInfo(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, double[] times)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDFEIGReader_ReadMarkerParentModeShapes_VM_Models_Post_MetaInfo_VM_Models_Post_FrequenciesInfo_System_Collections_Generic_IList_System_String__VM_Models_Post_IResultMarker_"></a> ReadMarkerParentModeShapes\(MetaInfo, FrequenciesInfo, IList<string\>, IResultMarker\)

```csharp
double[] ReadMarkerParentModeShapes(MetaInfo metainfo, FrequenciesInfo frequenciesinfo, IList<string> frequencies, IResultMarker marker)
```

#### Parameters

`metainfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`frequenciesinfo` [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

`frequencies` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`marker` [IResultMarker](VM.Models.Post.IResultMarker.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDFEIGReader_ReadModeShapeForBody_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_IBodyBase_VM_Models_Post_ISystemModeShapes_VM_Models_Post_FrequenciesInfo_"></a> ReadModeShapeForBody\(MetaInfo, int, IBodyBase, ISystemModeShapes, FrequenciesInfo\)

```csharp
void ReadModeShapeForBody(MetaInfo metaInfo, int ifrequency, IBodyBase target, ISystemModeShapes systemModeShapes, FrequenciesInfo frequenciesInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`target` [IBodyBase](VM.Models.Post.IBodyBase.md)

`systemModeShapes` [ISystemModeShapes](VM.Models.Post.ISystemModeShapes.md)

`frequenciesInfo` [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

### <a id="VM_Models_Post_IDFEIGReader_ReadSystemModeShapes_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_ISystemModeShapes_VM_Models_Post_FrequenciesInfo_"></a> ReadSystemModeShapes\(MetaInfo, int, ISystemModeShapes, FrequenciesInfo\)

```csharp
void ReadSystemModeShapes(MetaInfo metaInfo, int ifrequency, ISystemModeShapes systemModeShapes, FrequenciesInfo frequenciesInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`systemModeShapes` [ISystemModeShapes](VM.Models.Post.ISystemModeShapes.md)

`frequenciesInfo` [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

