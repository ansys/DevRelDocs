# <a id="VM_Models_Post_DataSource_DFEIGReader"></a> Class DFEIGReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFEIGReader : BaseReader, IDFEIGReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFEIGReader](VM.Models.Post.DataSource.DFEIGReader.md)

#### Derived

[DFEIGBinaryReader](VM.Models.Post.DataSource.DFEIGBinaryReader.md), 
[DFEIGTextReader](VM.Models.Post.DataSource.DFEIGTextReader.md)

#### Implements

IDFEIGReader

#### Inherited Members

[BaseReader.ReadDoubleArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadDoubleArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadDoubleArray\(BinaryReader, int, bool\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadDoubleArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Boolean\_), 
[BaseReader.ReadByteArray\(BinaryReader, int, bool\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadByteArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Boolean\_), 
[BaseReader.ReadByteIntArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadByteIntArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadByteDoubleArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadByteDoubleArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadStreamDoubleArray\(BinaryReader, int, byte\[\]\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadStreamDoubleArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Byte\_\_\_), 
[BaseReader.ReadIntArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadIntArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadUIntArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadUIntArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadIntArray\(BinaryReader, int, bool\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadIntArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Boolean\_), 
[BaseReader.ReadSignature\(byte\[\], ref int, string\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadSignature\_System\_Byte\_\_\_System\_Int32\_\_System\_String\_), 
[BaseReader.ReadString\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadString\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.CreateListArray\(int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_CreateListArray\_System\_Int32\_System\_Int32\_), 
[BaseReader.GetValueFromDescription<T\>\(string\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_GetValueFromDescription\_\_1\_System\_String\_), 
[BaseReader.ReadAllBytes\(string\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadAllBytes\_System\_String\_), 
[BaseReader.FilePath](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_FilePath)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_DFEIGReader__ctor"></a> DFEIGReader\(\)

```csharp
public DFEIGReader()
```

## Properties

### <a id="VM_Models_Post_DataSource_DFEIGReader_FilePath"></a> FilePath

```csharp
public string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFEIGReader_InternalRScale"></a> InternalRScale

```csharp
protected double InternalRScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFEIGReader_InternalTScale"></a> InternalTScale

```csharp
protected double InternalTScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFEIGReader_LargeExtendOfBoundingBox"></a> LargeExtendOfBoundingBox

```csharp
public double LargeExtendOfBoundingBox { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFEIGReader_ModalRawdataGroup"></a> ModalRawdataGroup

```csharp
protected IList<double[]> ModalRawdataGroup { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_ModalTranslationalSpGroup"></a> ModalTranslationalSpGroup

```csharp
protected IList<double[]> ModalTranslationalSpGroup { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_NodalRawdataGroup"></a> NodalRawdataGroup

```csharp
protected IList<double[]> NodalRawdataGroup { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReferenceframeRawdataGroup"></a> ReferenceframeRawdataGroup

```csharp
protected IList<double[]> ReferenceframeRawdataGroup { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_RigidRawdataGroup"></a> RigidRawdataGroup

```csharp
protected IList<double[]> RigidRawdataGroup { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

## Methods

### <a id="VM_Models_Post_DataSource_DFEIGReader_BuildContentsSize_VM_Models_Post_MetaInfo_"></a> BuildContentsSize\(MetaInfo\)

```csharp
protected virtual Dictionary<DFEIGBlock, long> BuildContentsSize(MetaInfo metainfo)
```

#### Parameters

`metainfo` MetaInfo

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<DFEIGBlock, [long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_CalculateInternalScale_System_Double_System_Double_"></a> CalculateInternalScale\(double, double\)

```csharp
protected double CalculateInternalScale(double reference, double maxvalue)
```

#### Parameters

`reference` [double](https://learn.microsoft.com/dotnet/api/system.double)

`maxvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFEIGReader_GetFrameScaleFactor_System_Int32_System_Int32_"></a> GetFrameScaleFactor\(int, int\)

```csharp
protected double GetFrameScaleFactor(int istate, int nstates)
```

#### Parameters

`istate` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nstates` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFEIGReader_GetRotationalDeformation_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_VM_Models_ComponentType_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Collections_Generic_List_System_Collections_Generic_List_System_Double_____"></a> GetRotationalDeformation\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int, ComponentType, IList<IDataState\>, IEnumerable<IEntity\>, bool, List<List<double\[\]\>\>\)

```csharp
protected bool GetRotationalDeformation(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, FrequenciesInfo frequenciesinfo, int resultID, ComponentType component, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, List<List<double[]>> resultsData)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`component` ComponentType

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`resultsData` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFEIGReader_GetRotationalDeformationsAtEndState_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_"></a> GetRotationalDeformationsAtEndState\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int\)

```csharp
protected virtual List<double[]> GetRotationalDeformationsAtEndState(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, FrequenciesInfo frequenciesinfo, int ifrequency)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_LoadModeshapeAnimation_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> LoadModeshapeAnimation\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)

```csharp
public virtual void LoadModeshapeAnimation(MetaInfo metainfo, ResultInfo resultinfo, ModeShapeInfo modeshapeinfo, FrequenciesInfo frequenciesinfo, int ifrequency, IList<IDataState> datastates)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`modeshapeinfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_PrepareAnimationRawData_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_"></a> PrepareAnimationRawData\(MetaInfo, ModeShapeInfo, FrequenciesInfo, int\)

```csharp
protected virtual void PrepareAnimationRawData(MetaInfo metainfo, ModeShapeInfo modeshapeinfo, FrequenciesInfo frequenciesinfo, int ifrequency)
```

#### Parameters

`metainfo` MetaInfo

`modeshapeinfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadAdditoryGeometriesModeShapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> ReadAdditoryGeometriesModeShapeAnimationData\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)

```csharp
protected void ReadAdditoryGeometriesModeShapeAnimationData(MetaInfo metainfo, ResultInfo resultinfo, ModeShapeInfo modeshapeinfo, FrequenciesInfo frequenciesinfo, int ifrequency, IList<IDataState> datastates)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`modeshapeinfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadBeamGroupModeShapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix__VM_Models_Post_IDataState_"></a> ReadBeamGroupModeShapeAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)

```csharp
protected void ReadBeamGroupModeShapeAnimationData(MetaInfo metainfo, ResultInfo resultinfo, Dictionary<int, TMatrix> markers, IDataState datastate)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadContourData_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_VM_Models_ContourMappingType_System_String_System_String_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Collections_Generic_List_System_Collections_Generic_List_System_Double_____"></a> ReadContourData\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int, ContourMappingType, string, string, IList<IDataState\>, IEnumerable<IEntity\>, bool, List<List<double\[\]\>\>\)

```csharp
public virtual bool ReadContourData(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, FrequenciesInfo frequenciesinfo, int resultID, ContourMappingType mappingType, string characteristic, string component, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, List<List<double[]>> resultsData)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mappingType` ContourMappingType

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`resultsData` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadFEBeamGroupModeShapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_List_System_Collections_Generic_List_VM_TMatrix_____VM_Models_Post_IDataState_"></a> ReadFEBeamGroupModeShapeAnimationData\(MetaInfo, ResultInfo, List<List<TMatrix\[\]\>\>, IDataState\)

```csharp
protected void ReadFEBeamGroupModeShapeAnimationData(MetaInfo metainfo, ResultInfo resultinfo, List<List<TMatrix[]>> nodesgroups, IDataState datastate)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`nodesgroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TMatrix\[\]\>\>

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadFrequencyInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_Double___"></a> ReadFrequencyInfo\(ResultDocument, Identifier, MetaInfo, double\[\]\)

```csharp
public virtual void ReadFrequencyInfo(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, double[] times)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadFrequencyInfo_VM_Models_Post_MetaInfo_VM_Models_Post_FrequenciesInfo_"></a> ReadFrequencyInfo\(MetaInfo, FrequenciesInfo\)

```csharp
protected virtual void ReadFrequencyInfo(MetaInfo metainfo, FrequenciesInfo frequenciesinfo)
```

#### Parameters

`metainfo` MetaInfo

`frequenciesinfo` FrequenciesInfo

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadMarkerParentModeShapes_VM_Models_Post_MetaInfo_VM_Models_Post_FrequenciesInfo_System_Collections_Generic_IList_System_String__VM_Models_Post_IResultMarker_"></a> ReadMarkerParentModeShapes\(MetaInfo, FrequenciesInfo, IList<string\>, IResultMarker\)

```csharp
public virtual double[] ReadMarkerParentModeShapes(MetaInfo metaInfo, FrequenciesInfo frequenciesInfo, IList<string> frequencies, IResultMarker marker)
```

#### Parameters

`metaInfo` MetaInfo

`frequenciesInfo` FrequenciesInfo

`frequencies` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`marker` IResultMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadModalBodiesModeShapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_FrequenciesInfo_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> ReadModalBodiesModeShapeAnimationData\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)

```csharp
protected void ReadModalBodiesModeShapeAnimationData(MetaInfo metainfo, ResultInfo resultinfo, ModeShapeInfo modeshapeinfo, FrequenciesInfo frequenciesinfo, int ifrequency, IList<IDataState> datastates)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`modeshapeinfo` ModeShapeInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadModeShapeForBody_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_IBodyBase_VM_Models_Post_ISystemModeShapes_VM_Models_Post_FrequenciesInfo_"></a> ReadModeShapeForBody\(MetaInfo, int, IBodyBase, ISystemModeShapes, FrequenciesInfo\)

```csharp
public virtual void ReadModeShapeForBody(MetaInfo metaInfo, int ifrequency, IBodyBase target, ISystemModeShapes systemModeShapes, FrequenciesInfo frequenciesInfo)
```

#### Parameters

`metaInfo` MetaInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`target` IBodyBase

`systemModeShapes` ISystemModeShapes

`frequenciesInfo` FrequenciesInfo

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadNodalBodiesModeShapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_FrequenciesInfo_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> ReadNodalBodiesModeShapeAnimationData\(MetaInfo, ResultInfo, FrequenciesInfo, int, IList<IDataState\>\)

```csharp
protected void ReadNodalBodiesModeShapeAnimationData(MetaInfo metainfo, ResultInfo resultInfo, FrequenciesInfo frequenciesinfo, int ifrequency, IList<IDataState> datastates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadNodesForFEBeamGroupAnimation_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_List_System_Collections_Generic_List_System_Collections_Generic_List_VM_TMatrix_______"></a> ReadNodesForFEBeamGroupAnimation\(MetaInfo, ResultInfo, IList<IDataState\>, ref List<List<List<TMatrix\[\]\>\>\>\)

```csharp
protected bool ReadNodesForFEBeamGroupAnimation(MetaInfo metainfo, ResultInfo resultinfo, IList<IDataState> datastates, ref List<List<List<TMatrix[]>>> allfebeamgroupssnodes)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`allfebeamgroupssnodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TMatrix\[\]\>\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadRigidBodiesModeShapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_FrequenciesInfo_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> ReadRigidBodiesModeShapeAnimationData\(MetaInfo, ResultInfo, FrequenciesInfo, int, IList<IDataState\>\)

```csharp
protected void ReadRigidBodiesModeShapeAnimationData(MetaInfo metainfo, ResultInfo resultInfo, FrequenciesInfo frequenciesinfo, int ifrequency, IList<IDataState> datastates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`frequenciesinfo` FrequenciesInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadSpringModeshapeAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix__VM_Models_Post_IDataState_"></a> ReadSpringModeshapeAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)

```csharp
protected void ReadSpringModeshapeAnimationData(MetaInfo metainfo, ResultInfo resultinfo, Dictionary<int, TMatrix> markers, IDataState datastate)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_DFEIGReader_ReadSystemModeShapes_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_ISystemModeShapes_VM_Models_Post_FrequenciesInfo_"></a> ReadSystemModeShapes\(MetaInfo, int, ISystemModeShapes, FrequenciesInfo\)

```csharp
public virtual void ReadSystemModeShapes(MetaInfo metaInfo, int ifrequency, ISystemModeShapes systemModeShapes, FrequenciesInfo frequenciesInfo)
```

#### Parameters

`metaInfo` MetaInfo

`ifrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`systemModeShapes` ISystemModeShapes

`frequenciesInfo` FrequenciesInfo

### <a id="VM_Models_Post_DataSource_DFEIGReader_UpdateFEBeamGroupParentsInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> UpdateFEBeamGroupParentsInfo\(MetaInfo, ResultInfo, IList<IDataState\>\)

```csharp
protected void UpdateFEBeamGroupParentsInfo(MetaInfo metainfo, ResultInfo resultinfo, IList<IDataState> datastates)
```

#### Parameters

`metainfo` MetaInfo

`resultinfo` ResultInfo

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

