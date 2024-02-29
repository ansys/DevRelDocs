# <a id="VM_Models_Post_DataSource_RESReader"></a> Class RESReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class RESReader : BaseReader, IRESReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[RESReader](VM.Models.Post.DataSource.RESReader.md)

#### Derived

[RESReader12](VM.Models.Post.DataSource.RESReader12.md), 
[RESReader13](VM.Models.Post.DataSource.RESReader13.md), 
[RESReader14](VM.Models.Post.DataSource.RESReader14.md), 
[RESReader15](VM.Models.Post.DataSource.RESReader15.md), 
[RESReader16](VM.Models.Post.DataSource.RESReader16.md), 
[RESReader17](VM.Models.Post.DataSource.RESReader17.md), 
[RESReader18](VM.Models.Post.DataSource.RESReader18.md), 
[RESReader19](VM.Models.Post.DataSource.RESReader19.md), 
[RESReader20](VM.Models.Post.DataSource.RESReader20.md), 
[RESReader21](VM.Models.Post.DataSource.RESReader21.md), 
[RESReader22](VM.Models.Post.DataSource.RESReader22.md), 
[RESReader23](VM.Models.Post.DataSource.RESReader23.md), 
[RESReader24](VM.Models.Post.DataSource.RESReader24.md)

#### Implements

IRESReader

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

### <a id="VM_Models_Post_DataSource_RESReader__ctor_System_String_"></a> RESReader\(string\)

```csharp
public RESReader(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DataSource_RESReader_ContactBlocksConfigurations"></a> ContactBlocksConfigurations

```csharp
protected IList<IList<KeyValuePair<int, long>>> ContactBlocksConfigurations { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [long](https://learn.microsoft.com/dotnet/api/system.int64)\>\>\>

### <a id="VM_Models_Post_DataSource_RESReader_ContactBlocksSize"></a> ContactBlocksSize

```csharp
protected IList<long> ContactBlocksSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_ContactGapBlocksConfigurations"></a> ContactGapBlocksConfigurations

```csharp
protected IList<IList<KeyValuePair<int, long>>> ContactGapBlocksConfigurations { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [long](https://learn.microsoft.com/dotnet/api/system.int64)\>\>\>

### <a id="VM_Models_Post_DataSource_RESReader_ContactGapBlocksSize"></a> ContactGapBlocksSize

```csharp
protected IList<long> ContactGapBlocksSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_DispReader"></a> DispReader

```csharp
protected BinaryReader DispReader { get; set; }
```

#### Property Value

 [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

### <a id="VM_Models_Post_DataSource_RESReader_EFBCBlocksSize"></a> EFBCBlocksSize

```csharp
protected IList<long> EFBCBlocksSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_EFCLoadBlockSize"></a> EFCLoadBlockSize

```csharp
protected IList<long> EFCLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_EFPLoadBlockSize"></a> EFPLoadBlockSize

```csharp
protected IList<long> EFPLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_ExternalForceBlockSize"></a> ExternalForceBlockSize

```csharp
protected IList<long> ExternalForceBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_FEBodyContactBlockSize"></a> FEBodyContactBlockSize

```csharp
protected IList<long> FEBodyContactBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_FEBodyReferenceFrames"></a> FEBodyReferenceFrames

```csharp
protected IDictionary<int, double[]> FEBodyReferenceFrames { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_FECLoadBlockSize"></a> FECLoadBlockSize

```csharp
protected IList<long> FECLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_FENodalBodyInfos"></a> FENodalBodyInfos

```csharp
public IList<FEBodyInfo> FENodalBodyInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<FEBodyInfo\>

### <a id="VM_Models_Post_DataSource_RESReader_FEPLoadBlockSize"></a> FEPLoadBlockSize

```csharp
protected IList<long> FEPLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_RESReader_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_RESReader_IncludeStressStrainFile"></a> IncludeStressStrainFile

```csharp
public bool IncludeStressStrainFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_MarkersPositions"></a> MarkersPositions

```csharp
public IDictionary<int, double[]> MarkersPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_MaxFebodyBlockSize"></a> MaxFebodyBlockSize

```csharp
protected long MaxFebodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_ModalNodesbehavior"></a> ModalNodesbehavior

```csharp
protected IDictionary<int, IDictionary<int, double[]>> ModalNodesbehavior { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_DataSource_RESReader_NodalNodesPosition"></a> NodalNodesPosition

```csharp
protected IDictionary<int, IDictionary<int, double[]>> NodalNodesPosition { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_DataSource_RESReader_NumFODEqResult"></a> NumFODEqResult

```csharp
protected int NumFODEqResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumFlexNodeResult"></a> NumFlexNodeResult

```csharp
protected int NumFlexNodeResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumFunctionResult"></a> NumFunctionResult

```csharp
protected int NumFunctionResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumNodeContactResult"></a> NumNodeContactResult

```csharp
protected int NumNodeContactResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumRigidResult"></a> NumRigidResult

```csharp
protected int NumRigidResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumSInputResult"></a> NumSInputResult

```csharp
protected int NumSInputResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumSODEqResult"></a> NumSODEqResult

```csharp
protected int NumSODEqResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumSOutputResult"></a> NumSOutputResult

```csharp
protected int NumSOutputResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_NumVariableEqResult"></a> NumVariableEqResult

```csharp
protected int NumVariableEqResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_PostSlv"></a> PostSlv

```csharp
protected PostSlv PostSlv { get; set; }
```

#### Property Value

 PostSlv

### <a id="VM_Models_Post_DataSource_RESReader_ReaderableMarkers"></a> ReaderableMarkers

```csharp
protected IList<MarkerBase> ReaderableMarkers { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<MarkerBase\>

### <a id="VM_Models_Post_DataSource_RESReader_ResReader"></a> ResReader

```csharp
protected BinaryReader ResReader { get; set; }
```

#### Property Value

 [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

### <a id="VM_Models_Post_DataSource_RESReader_RigidBodiesPositions"></a> RigidBodiesPositions

```csharp
public IDictionary<int, double[]> RigidBodiesPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_StrainReader"></a> StrainReader

```csharp
protected BinaryReader StrainReader { get; set; }
```

#### Property Value

 [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

### <a id="VM_Models_Post_DataSource_RESReader_StressReader"></a> StressReader

```csharp
protected BinaryReader StressReader { get; set; }
```

#### Property Value

 [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

### <a id="VM_Models_Post_DataSource_RESReader_VariableBlockSizeTo"></a> VariableBlockSizeTo

```csharp
protected IList<long> VariableBlockSizeTo { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

## Methods

### <a id="VM_Models_Post_DataSource_RESReader_AllocatePartsScalar_VM_Models_Post_MetaInfo_"></a> AllocatePartsScalar\(MetaInfo\)

```csharp
public List<double[]> AllocatePartsScalar(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_CalculateBaseOffset_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IEntity_System_Int32_VM_Enums_Post_FileType_System_Int64__"></a> CalculateBaseOffset\(ResultInfo, MetaInfo, IEntity, int, FileType, ref long\)

```csharp
protected virtual bool CalculateBaseOffset(ResultInfo resultInfo, MetaInfo meta, IEntity obj, int nodeIdx, FileType fileType, ref long offset)
```

#### Parameters

`resultInfo` ResultInfo

`meta` MetaInfo

`obj` IEntity

`nodeIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`fileType` FileType

`offset` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CalculateBaseOffset_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IEntity_System_Int32_System_Int64__"></a> CalculateBaseOffset\(ResultInfo, MetaInfo, IEntity, int, ref long\)

```csharp
protected virtual bool CalculateBaseOffset(ResultInfo resultInfo, MetaInfo metaInfo, IEntity obj, int index, ref long offset)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`obj` IEntity

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`offset` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CalculateConstraintsSize_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CalculateConstraintsSize\(ResultInfo, MetaInfo\)

```csharp
protected virtual bool CalculateConstraintsSize(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CalculateContactSize_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CalculateContactSize\(ResultInfo, MetaInfo\)

```csharp
protected virtual bool CalculateContactSize(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CalculateEFEntitiesSize_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CalculateEFEntitiesSize\(ResultInfo, MetaInfo\)

```csharp
protected virtual bool CalculateEFEntitiesSize(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CalculateFEEntityOffset_VM_Models_Post_MetaInfo_"></a> CalculateFEEntityOffset\(MetaInfo\)

```csharp
protected void CalculateFEEntityOffset(MetaInfo meta)
```

#### Parameters

`meta` MetaInfo

### <a id="VM_Models_Post_DataSource_RESReader_CalculateForcesSize_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CalculateForcesSize\(ResultInfo, MetaInfo\)

```csharp
protected virtual bool CalculateForcesSize(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CalculateUsubSize_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CalculateUsubSize\(ResultInfo, MetaInfo\)

```csharp
protected bool CalculateUsubSize(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CanContour_VM_Models_Post_IContact_"></a> CanContour\(IContact\)

```csharp
public virtual bool CanContour(IContact contact)
```

#### Parameters

`contact` IContact

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_CreateResultInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CreateResultInfo\(ResultInfo, MetaInfo\)

```csharp
public virtual bool CreateResultInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_Deformation_vector_System_Double___System_Double___System_Double___System_Double___"></a> Deformation\_vector\(double\[\], double\[\], double\[\], double\[\]\)

```csharp
public static extern void Deformation_vector(double[] ri, double[] i_r_i, double[] r_ref, double[] l_Deformation)
```

#### Parameters

`ri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`i_r_i` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`r_ref` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`l_Deformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ExportAcousticRawDataToFile_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_String_VM_Models_Post_IFEBody_VM_Models_Post_ModeShapeInfo_VM_Models_Post_BehaviorType_System_UInt32___VM_Models_Post_IFFTParameters_"></a> ExportAcousticRawDataToFile\(ResultInfo, MetaInfo, string, IFEBody, ModeShapeInfo, BehaviorType, uint\[\], IFFTParameters\)

```csharp
public void ExportAcousticRawDataToFile(ResultInfo resultInfo, MetaInfo metaInfo, string filepath, IFEBody target, ModeShapeInfo modeShapeInfo, BehaviorType behaviorType, uint[] outersurface, IFFTParameters parameters)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`target` IFEBody

`modeShapeInfo` ModeShapeInfo

`behaviorType` BehaviorType

`outersurface` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`parameters` IFFTParameters

### <a id="VM_Models_Post_DataSource_RESReader_ExportModalBodyRawDataToFile_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_String_VM_Models_Post_IModal_System_Boolean_System_Boolean_"></a> ExportModalBodyRawDataToFile\(ResultInfo, MetaInfo, ModeShapeInfo, string, IModal, bool, bool\)

```csharp
public void ExportModalBodyRawDataToFile(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, string filepath, IModal modal, bool includeGeometry, bool includeModeShape)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`modal` IModal

`includeGeometry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`includeModeShape` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ExportNodalBodyPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_String_VM_Models_Post_INodal_System_Int32_"></a> ExportNodalBodyPosition\(ResultInfo, MetaInfo, string, INodal, int\)

```csharp
public void ExportNodalBodyPosition(ResultInfo resultInfo, MetaInfo metaInfo, string filepath, INodal nodal, int stateid)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nodal` INodal

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_FindTargetObject_VM_Models_Post_EntityBase_System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__"></a> FindTargetObject\(EntityBase, IEnumerable<IEntity\>\)

```csharp
protected bool FindTargetObject(EntityBase target, IEnumerable<IEntity> targetModels)
```

#### Parameters

`target` EntityBase

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_FinishSPLRecovery"></a> FinishSPLRecovery\(\)

```csharp
public void FinishSPLRecovery()
```

### <a id="VM_Models_Post_DataSource_RESReader_GenarateContactGapResultVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IDictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__System_Collections_Generic_Dictionary_System_String_VM_Models_CharacteristicType__System_Int32_System_IO_BinaryReader_System_Int32_"></a> GenarateContactGapResultVectorDisplay\(ResultInfo, MetaInfo, IDictionary<string, IVectorDisplayAnimationData\>, Dictionary<string, CharacteristicType\>, int, BinaryReader, int\)

```csharp
protected virtual bool GenarateContactGapResultVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, IDictionary<string, IVectorDisplayAnimationData> contactGapResults, Dictionary<string, CharacteristicType> dicContactGapResultType, int nsteps, BinaryReader resBinaryReader, int entityLocalSeq)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`contactGapResults` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

`dicContactGapResultType` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), CharacteristicType\>

`nsteps` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`resBinaryReader` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`entityLocalSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GenarateContactResultVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IDictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__System_Collections_Generic_Dictionary_System_String_VM_Models_CharacteristicType__System_Int32_System_IO_BinaryReader_System_Int32_"></a> GenarateContactResultVectorDisplay\(ResultInfo, MetaInfo, IDictionary<string, IVectorDisplayAnimationData\>, Dictionary<string, CharacteristicType\>, int, BinaryReader, int\)

```csharp
protected virtual bool GenarateContactResultVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, IDictionary<string, IVectorDisplayAnimationData> contactResults, Dictionary<string, CharacteristicType> dicContactResultType, int nsteps, BinaryReader resBinaryReader, int entityLocalSeq)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`contactResults` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

`dicContactResultType` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), CharacteristicType\>

`nsteps` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`resBinaryReader` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`entityLocalSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GenarateContactVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_Dictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__System_Int32_System_IO_BinaryReader_System_Int32_"></a> GenarateContactVectorDisplay\(ResultInfo, MetaInfo, Dictionary<string, IVectorDisplayAnimationData\>, int, BinaryReader, int\)

```csharp
protected virtual bool GenarateContactVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, Dictionary<string, IVectorDisplayAnimationData> vectorResults, int nsteps, BinaryReader resBinaryReader, int entityLocalSeq)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`vectorResults` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

`nsteps` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`resBinaryReader` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`entityLocalSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GenarateSeaLevelVectorDisplay_VM_Models_Post_SeaLevel_System_Int32_System_Collections_Generic_Dictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData___"></a> GenarateSeaLevelVectorDisplay\(SeaLevel, int, ref Dictionary<string, IVectorDisplayAnimationData\>\)

```csharp
protected bool GenarateSeaLevelVectorDisplay(SeaLevel sealevel, int nsteps, ref Dictionary<string, IVectorDisplayAnimationData> vectorResults)
```

#### Parameters

`sealevel` SeaLevel

`nsteps` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vectorResults` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GenerateReportableVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_VectorDisplayInfos_"></a> GenerateReportableVectorDisplay\(ResultInfo, MetaInfo, VectorDisplayInfos\)

```csharp
public virtual bool GenerateReportableVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, VectorDisplayInfos reportableResults)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`reportableResults` VectorDisplayInfos

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GenerateVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IVectorDisplayable_System_Collections_Generic_Dictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData___"></a> GenerateVectorDisplay\(ResultInfo, MetaInfo, ModeShapeInfo, IVectorDisplayable, ref Dictionary<string, IVectorDisplayAnimationData\>\)

```csharp
public bool GenerateVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeshapInfo, IVectorDisplayable entity, ref Dictionary<string, IVectorDisplayAnimationData> vectorResults)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeshapInfo` ModeShapeInfo

`entity` IVectorDisplayable

`vectorResults` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GetContactComponentIndexForPlot_VM_Models_CharacteristicType_System_Int32_"></a> GetContactComponentIndexForPlot\(CharacteristicType, int\)

```csharp
public static ComponentType GetContactComponentIndexForPlot(CharacteristicType characteristic, int componentIdx)
```

#### Parameters

`characteristic` CharacteristicType

`componentIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ComponentType

### <a id="VM_Models_Post_DataSource_RESReader_GetContactComponentValue_System_Double__System_Int32_VM_Models_CharacteristicType_VM_Models_ComponentType_"></a> GetContactComponentValue\(ref double, int, CharacteristicType, ComponentType\)

```csharp
public static void GetContactComponentValue(ref double contactSumValues, int points, CharacteristicType characteristic, ComponentType componentType)
```

#### Parameters

`contactSumValues` [double](https://learn.microsoft.com/dotnet/api/system.double)

`points` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`characteristic` CharacteristicType

`componentType` ComponentType

### <a id="VM_Models_Post_DataSource_RESReader_GetContactGapResult_System_Double___VM_Models_CharacteristicType_"></a> GetContactGapResult\(double\[\], CharacteristicType\)

```csharp
public double GetContactGapResult(double[] contactGapResult, CharacteristicType characteristic)
```

#### Parameters

`contactGapResult` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`characteristic` CharacteristicType

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_GetContactLocalSequenceInVariableBlock_VM_Models_CharacteristicType_"></a> GetContactLocalSequenceInVariableBlock\(CharacteristicType\)

```csharp
public virtual int GetContactLocalSequenceInVariableBlock(CharacteristicType characteristic)
```

#### Parameters

`characteristic` CharacteristicType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_GetContactResult_System_Double___VM_Models_CharacteristicType_"></a> GetContactResult\(double\[\], CharacteristicType\)

```csharp
public double GetContactResult(double[] contactResult, CharacteristicType characteristic)
```

#### Parameters

`contactResult` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`characteristic` CharacteristicType

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_GetContactValues_System_IO_BinaryReader_VM_Models_Post_Bodies_BodyBase_System_Int32_VM_Models_CharacteristicType_System_Int32_"></a> GetContactValues\(BinaryReader, BodyBase, int, CharacteristicType, int\)

```csharp
protected double[] GetContactValues(BinaryReader resfile, BodyBase bodyBase, int npoints, CharacteristicType characteristicType, int index)
```

#### Parameters

`resfile` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`bodyBase` BodyBase

`npoints` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`characteristicType` CharacteristicType

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_GetContourBodyOfContact_VM_Models_Post_MetaInfo_VM_Models_CharacteristicType_System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__"></a> GetContourBodyOfContact\(MetaInfo, CharacteristicType, IEnumerable<IEntity\>\)

```csharp
protected Dictionary<int, List<ContactBase>> GetContourBodyOfContact(MetaInfo metaInfo, CharacteristicType characteristic, IEnumerable<IEntity> targetModels)
```

#### Parameters

`metaInfo` MetaInfo

`characteristic` CharacteristicType

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ContactBase\>\>

### <a id="VM_Models_Post_DataSource_RESReader_GetCurveInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_ValueTuple_VM_Models_Post_IEntity_System_Collections_Generic_IEnumerable_System_String___System_Collections_Generic_IDictionary_System_String_System_Double____System_Object_VM_Models_Post_HitItemInfo_"></a> GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, \(IEntity Target, IEnumerable<string\> Paths\), IDictionary<string, double\[\]\>, object, HitItemInfo\)

```csharp
public bool GetCurveInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, (IEntity Target, IEnumerable<string> Paths) targetPaths, IDictionary<string, double[]> curveInfo, object coordsys, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`targetPaths` \(IEntity [Target](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.models.post.ientity,system.collections.generic.ienumerable\-system.string\-\-.target), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\> [Paths](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.models.post.ientity,system.collections.generic.ienumerable\-system.string\-\-.paths)\)

`curveInfo` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`coordsys` [object](https://learn.microsoft.com/dotnet/api/system.object)

`hitItem` HitItemInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GetCurveInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_String_VM_Models_Post_IEntity_System_Collections_Generic_IDictionary_System_String_System_Collections_Generic_IList_System_Double_____System_Object_VM_Models_Post_HitItemInfo_"></a> GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, string, IEntity, IDictionary<string, IList<double\[\]\>\>, object, HitItemInfo\)

```csharp
public bool GetCurveInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, string path, IEntity entity, IDictionary<string, IList<double[]>> curveInfo, object coordsys, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entity` IEntity

`curveInfo` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`coordsys` [object](https://learn.microsoft.com/dotnet/api/system.object)

`hitItem` HitItemInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GetDeformationIndex_VM_Models_ComponentType_"></a> GetDeformationIndex\(ComponentType\)

```csharp
public int GetDeformationIndex(ComponentType type)
```

#### Parameters

`type` ComponentType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_GetElementStrainUintBlockSize_VM_Models_Post_ElementType_"></a> GetElementStrainUintBlockSize\(ElementType\)

```csharp
protected virtual long GetElementStrainUintBlockSize(ElementType type)
```

#### Parameters

`type` ElementType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_GetElementStressUintBlockSize_VM_Models_Post_ElementType_"></a> GetElementStressUintBlockSize\(ElementType\)

```csharp
protected virtual long GetElementStressUintBlockSize(ElementType type)
```

#### Parameters

`type` ElementType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_GetElementTypes"></a> GetElementTypes\(\)

```csharp
public static IList<ElementType> GetElementTypes()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ElementType\>

### <a id="VM_Models_Post_DataSource_RESReader_GetInitialFENodeDistanceGroupsFromCSYS_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> GetInitialFENodeDistanceGroupsFromCSYS\(ResultInfo, MetaInfo\)

```csharp
public List<double[]> GetInitialFENodeDistanceGroupsFromCSYS(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_GetInitialFENodeDistanceGroupsFromCSYS_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_System_Double___"></a> GetInitialFENodeDistanceGroupsFromCSYS\(ResultInfo, MetaInfo, IFEBody, double\[\]\)

```csharp
public double[] GetInitialFENodeDistanceGroupsFromCSYS(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody febody, double[] csys)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`febody` IFEBody

`csys` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_GetMarkerInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IEntity_VM_Models_Post_HitItemInfo_"></a> GetMarkerInfo\(ResultInfo, MetaInfo, ModeShapeInfo, IEntity, HitItemInfo\)

```csharp
public IList<double[]> GetMarkerInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IEntity entity, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`entity` IEntity

`hitItem` HitItemInfo

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_GetModalElementStress_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__VM_Models_Post_FatigueAnalysisParameter_System_Collections_Generic_IList_System_Double____"></a> GetModalElementStress\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IDataState\>, FatigueAnalysisParameter, IList<double\[\]\>\)

```csharp
public void GetModalElementStress(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<IDataState> dataStates, FatigueAnalysisParameter parameter, IList<double[]> elementStressHistory)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`parameter` FatigueAnalysisParameter

`elementStressHistory` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_GetNodalElementStress_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__VM_Models_Post_FatigueAnalysisParameter_System_Collections_Generic_IList_System_Double____"></a> GetNodalElementStress\(ResultInfo, MetaInfo, IList<IDataState\>, FatigueAnalysisParameter, IList<double\[\]\>\)

```csharp
public void GetNodalElementStress(ResultInfo resultInfo, MetaInfo metaInfo, IList<IDataState> dataStates, FatigueAnalysisParameter parameter, IList<double[]> elementStressHistory)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`parameter` FatigueAnalysisParameter

`elementStressHistory` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_GetPlasticElementMaterialDataSize_VM_Models_Post_ElementType_"></a> GetPlasticElementMaterialDataSize\(ElementType\)

```csharp
protected virtual int GetPlasticElementMaterialDataSize(ElementType enType)
```

#### Parameters

`enType` ElementType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_GetPotentialEnergy_System_Double___"></a> GetPotentialEnergy\(double\[\]\)

```csharp
protected virtual double GetPotentialEnergy(double[] contactResult)
```

#### Parameters

`contactResult` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_GetReaderableMarkerInfo_VM_Models_Post_MetaInfo_"></a> GetReaderableMarkerInfo\(MetaInfo\)

```csharp
protected IList<MarkerBase> GetReaderableMarkerInfo(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<MarkerBase\>

### <a id="VM_Models_Post_DataSource_RESReader_GetStrainComponent_System_Double___System_Int32_"></a> GetStrainComponent\(double\[\], int\)

```csharp
public static double GetStrainComponent(double[] results, int componentIndex)
```

#### Parameters

`results` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_GetStressComponent_System_Double___System_Int32_"></a> GetStressComponent\(double\[\], int\)

```csharp
public static double GetStressComponent(double[] results, int componentIndex)
```

#### Parameters

`results` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_GetTotalModeShape_VM_Models_Post_MetaInfo_"></a> GetTotalModeShape\(MetaInfo\)

```csharp
protected int GetTotalModeShape(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader_GetTranslationalDeformation_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Int32_VM_Models_ComponentType_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____"></a> GetTranslationalDeformation\(ResultInfo, MetaInfo, ModeShapeInfo, int, ComponentType, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)

```csharp
public bool GetTranslationalDeformation(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, int resultID, ComponentType component, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`component` ComponentType

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_GetVariableBlockSize_System_Int32_"></a> GetVariableBlockSize\(int\)

```csharp
protected long GetVariableBlockSize(int frameIdx)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_GetVariableBlockSize_System_Int32_VM_Models_Post_ObjectType_"></a> GetVariableBlockSize\(int, ObjectType\)

```csharp
protected long GetVariableBlockSize(int frameIdx, ObjectType type)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ObjectType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_GetVariableBlockSizeTo_System_Int32_"></a> GetVariableBlockSizeTo\(int\)

```csharp
protected long GetVariableBlockSizeTo(int toFrameIdx)
```

#### Parameters

`toFrameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_GetVariableLocalBlockSize_System_Int32_VM_Models_Post_ObjectType_"></a> GetVariableLocalBlockSize\(int, ObjectType\)

```csharp
protected virtual long GetVariableLocalBlockSize(int frameIdx, ObjectType type)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ObjectType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_InitContactResultMapping_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_PostSlv_"></a> InitContactResultMapping\(NodeBase, ResultInfo, MetaInfo, ModeShapeInfo, PostSlv\)

```csharp
protected virtual void InitContactResultMapping(NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, PostSlv postSlv)
```

#### Parameters

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`postSlv` PostSlv

### <a id="VM_Models_Post_DataSource_RESReader_InitializePostSolver_VM_Models_Post_MetaInfo_"></a> InitializePostSolver\(MetaInfo\)

```csharp
public void InitializePostSolver(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_RESReader_PrepareSPLRecovery_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_VM_Models_Post_IBodyBase__"></a> PrepareSPLRecovery\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IBodyBase\>\)

```csharp
public void PrepareSPLRecovery(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<IBodyBase> targets)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IBodyBase\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadAX_AY_AZ_PROJECTION_ANGLE_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadAX\_AY\_AZ\_PROJECTION\_ANGLE\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadAX_AY_AZ_PROJECTION_ANGLE(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadAnimationData_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__"></a> ReadAnimationData\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IDataState\>\)

```csharp
public bool ReadAnimationData(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeshapeInfo, IList<IDataState> datastates)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeshapeInfo` ModeShapeInfo

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadBallFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadBallFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadBallFrictionOnActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int indexmarker, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`indexmarker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadBeamGroupAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix__VM_Models_Post_IDataState_"></a> ReadBeamGroupAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)

```csharp
public void ReadBeamGroupAnimationData(MetaInfo metaInfo, ResultInfo resultInfo, Dictionary<int, TMatrix> markers, IDataState datastate)
```

#### Parameters

`metaInfo` MetaInfo

`resultInfo` ResultInfo

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_RESReader_ReadCDampingCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCDampingCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadCDampingCoefficient(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadCSYSAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadCSYSAcceleration(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadCSYSAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSAngularAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadCSYSAngularAcceleration(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadCSYSAngularVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSAngularVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadCSYSAngularVelocity(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadCSYSDisplacement_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSDisplacement\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadCSYSDisplacement(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadCSYSInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_EntityBase_System_Object_"></a> ReadCSYSInfo\(ResultInfo, MetaInfo, EntityBase, object\)

```csharp
public virtual IList<double[]> ReadCSYSInfo(ResultInfo resultInfo, MetaInfo metaInfo, EntityBase obj, object csys)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`obj` EntityBase

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadCSYSVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadCSYSVelocity(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsDpenetraion_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsDpenetraion\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsDpenetraion(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsFrictionCoefficient(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsFrictionForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsNormalForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsNormalForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsNormalForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsPenetration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsPenetration(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsPoint_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsPoint\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsPoint(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadConstraintsTangentVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsTangentVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadConstraintsTangentVelocity(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactGapBlocksize_System_IO_BinaryReader_System_Collections_Generic_IEnumerable_VM_Models_Post_Contacts_ContactBase__System_Boolean_"></a> ReadContactGapBlocksize\(BinaryReader, IEnumerable<ContactBase\>, bool\)

```csharp
protected virtual long ReadContactGapBlocksize(BinaryReader br, IEnumerable<ContactBase> contacts, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`contacts` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ContactBase\>

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactGapResult_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactGapResult\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactGapResult(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactPressureScalar_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IUnstructGridModel_VM_Models_CharacteristicType_VM_Models_ComponentType_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____"></a> ReadContactPressureScalar\(ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, CharacteristicType, ComponentType, int, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)

```csharp
protected virtual bool ReadContactPressureScalar(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IUnstructGridModel unstructGridModel, CharacteristicType characteristic, ComponentType componentType, int resultID, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`unstructGridModel` IUnstructGridModel

`characteristic` CharacteristicType

`componentType` ComponentType

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsArea_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsArea\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsArea(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsContactLoss_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsContactLoss\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsContactLoss(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsCreep_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsCreep\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsCreep(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsDPenetration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsDPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsDPenetration(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsDampingForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsDampingForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsDampingForce(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsForceMagnitude_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsForceMagnitude\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsForceMagnitude(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsFrictionCoefficient(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsFrictionForce(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsNormalForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsNormalForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsNormalForce(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsPenetration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsPenetration(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsPoint_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsPoint\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsPoint(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsPotentialEnergy_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsPotentialEnergy\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsPotentialEnergy(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsSlidingLoss_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlidingLoss\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlidingLoss(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsSlipFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlipFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlipFrictionCoefficient(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsSlipFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlipFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlipFrictionForce(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsSlipRatio_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlipRatio\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlipRatio(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsSpringForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSpringForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSpringForce(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsStictionFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsStictionFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsStictionFrictionCoefficient(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsStictionFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsStictionFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsStictionFrictionForce(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsStictionSlip_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsStictionSlip\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsStictionSlip(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContactsTangentVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsTangentVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsTangentVelocity(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadContourData_VM_Models_Post_ResultDocument_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IUnstructGridModel_VM_Models_AnalysisResultType_System_Int32_VM_Models_ContourMappingType_System_String_System_String_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____System_Boolean_"></a> ReadContourData\(ResultDocument, ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, AnalysisResultType, int, ContourMappingType, string, string, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>, bool\)

```csharp
public bool ReadContourData(ResultDocument resultDocument, ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IUnstructGridModel unstructGridModel, AnalysisResultType analysisResultType, int resultID, ContourMappingType mappingType, string characteristic, string component, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback, bool skipDeforamtionScale = false)
```

#### Parameters

`resultDocument` ResultDocument

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`unstructGridModel` IUnstructGridModel

`analysisResultType` AnalysisResultType

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mappingType` ContourMappingType

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`skipDeforamtionScale` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadExpressionValue_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadExpressionValue\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadExpressionValue(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFEBeamGroupAnimationData_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_List_System_Collections_Generic_List_VM_TMatrix_____VM_Models_Post_IDataState_"></a> ReadFEBeamGroupAnimationData\(ResultInfo, MetaInfo, List<List<TMatrix\[\]\>\>, IDataState\)

```csharp
public void ReadFEBeamGroupAnimationData(ResultInfo resultInfo, MetaInfo metaInfo, List<List<TMatrix[]>> nodesgroups, IDataState datastate)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodesgroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TMatrix\[\]\>\>

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_RESReader_ReadFEBodyNodeBottomContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_VM_Models_Post_DataSource_RESReader_CurveDataInfo_"></a> ReadFEBodyNodeBottomContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, CurveDataInfo\)

```csharp
protected virtual double ReadFEBodyNodeBottomContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys, RESReader.CurveDataInfo curveDataInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

`curveDataInfo` [RESReader](VM.Models.Post.DataSource.RESReader.md).[CurveDataInfo](VM.Models.Post.DataSource.RESReader.CurveDataInfo.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFEBodyNodeContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_VM_Models_Post_DataSource_RESReader_CurveDataInfo_"></a> ReadFEBodyNodeContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, CurveDataInfo\)

```csharp
protected virtual double ReadFEBodyNodeContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys, RESReader.CurveDataInfo curveDataInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

`curveDataInfo` [RESReader](VM.Models.Post.DataSource.RESReader.md).[CurveDataInfo](VM.Models.Post.DataSource.RESReader.CurveDataInfo.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFEBodyNodeTopContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_VM_Models_Post_DataSource_RESReader_CurveDataInfo_"></a> ReadFEBodyNodeTopContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, CurveDataInfo\)

```csharp
protected virtual double ReadFEBodyNodeTopContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys, RESReader.CurveDataInfo curveDataInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

`curveDataInfo` [RESReader](VM.Models.Post.DataSource.RESReader.md).[CurveDataInfo](VM.Models.Post.DataSource.RESReader.CurveDataInfo.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFirstOrderDiffEqBeta_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadFirstOrderDiffEqBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadFirstOrderDiffEqBeta(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFirstOrderDiffEqBetaDot_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadFirstOrderDiffEqBetaDot\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadFirstOrderDiffEqBetaDot(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFrameFromRes_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IBodyBase_System_UInt32_System_Double____"></a> ReadFlexibleBodyReferenceFrameFromRes\(ResultInfo, MetaInfo, IBodyBase, uint, ref double\[\]\)

```csharp
protected void ReadFlexibleBodyReferenceFrameFromRes(ResultInfo resultInfo, MetaInfo meta, IBodyBase obj, uint stateid, ref double[] referenceframe)
```

#### Parameters

`resultInfo` ResultInfo

`meta` MetaInfo

`obj` IBodyBase

`stateid` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`referenceframe` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFrameFromRes_System_IO_BinaryReader_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_System_Double____System_Boolean_"></a> ReadFlexibleBodyReferenceFrameFromRes\(BinaryReader, ResultInfo, MetaInfo, int, out double\[\], bool\)

```csharp
protected bool ReadFlexibleBodyReferenceFrameFromRes(BinaryReader resfile, ResultInfo resultInfo, MetaInfo meta, int partIdx, out double[] values, bool includetime = true)
```

#### Parameters

`resfile` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`resultInfo` ResultInfo

`meta` MetaInfo

`partIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`values` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`includetime` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromDisp_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Double____"></a> ReadFlexibleBodyReferenceFramesFromDisp\(ResultInfo, MetaInfo, IList<int\>, IList<double\[\]\>\)

```csharp
public bool ReadFlexibleBodyReferenceFramesFromDisp(ResultInfo resultInfo, MetaInfo metaInfo, IList<int> stateids, IList<double[]> flexiblebodyreferenceframes)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`flexiblebodyreferenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromDisp_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IList_System_Double____"></a> ReadFlexibleBodyReferenceFramesFromDisp\(ResultInfo, MetaInfo, IList<IDataState\>, IList<double\[\]\>\)

```csharp
protected bool ReadFlexibleBodyReferenceFramesFromDisp(ResultInfo resultInfo, MetaInfo metaInfo, IList<IDataState> datastates, IList<double[]> flexiblebodyreferenceframes)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`flexiblebodyreferenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromRes_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_System_Collections_Generic_IList_System_Double_____"></a> ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IFEBody, ref IList<double\[\]\>\)

```csharp
protected bool ReadFlexibleBodyReferenceFramesFromRes(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody febody, ref IList<double[]> referenceframes)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`febody` IFEBody

`referenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromRes_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IEntity_"></a> ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IEntity\)

```csharp
protected bool ReadFlexibleBodyReferenceFramesFromRes(ResultInfo resultInfo, MetaInfo metaInfo, IEntity entity)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`entity` IEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromRes_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_"></a> ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, int\)

```csharp
protected List<double[]> ReadFlexibleBodyReferenceFramesFromRes(ResultInfo resultInfo, MetaInfo metaInfo, int stateid)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromRes_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IList_System_Double____"></a> ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IList<IDataState\>, IList<double\[\]\>\)

```csharp
protected bool ReadFlexibleBodyReferenceFramesFromRes(ResultInfo resultInfo, MetaInfo metaInfo, IList<IDataState> dataStates, IList<double[]> flexiblebodyreferenceframes)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`flexiblebodyreferenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFlexibleBodyReferenceFramesFromRes_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Double____"></a> ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IList<int\>, IList<double\[\]\>\)

```csharp
protected void ReadFlexibleBodyReferenceFramesFromRes(ResultInfo resultInfo, MetaInfo metaInfo, IList<int> stateids, IList<double[]> flexiblebodyreferenceframes)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`flexiblebodyreferenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceBaseMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceBaseMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceBaseMarkerMeasuredInBaseMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceDeformation_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceDeformation\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceDeformation(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceOnActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceOnActionMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnActionMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceOnActionMarkerMeasuredInActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceOnActionMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnActionMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceOnActionMarkerMeasuredInBaseMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceOnBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceOnBaseMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceOnBaseMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnBaseMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceOnBaseMarkerMeasuredInActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadForceRelativeVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceRelativeVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadForceRelativeVelocity(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadFrictionOnActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int indexmarker, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`indexmarker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralContactScalar_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IUnstructGridModel_VM_Models_CharacteristicType_VM_Models_ComponentType_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____"></a> ReadGeneralContactScalar\(ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, CharacteristicType, ComponentType, int, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)

```csharp
protected virtual bool ReadGeneralContactScalar(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IUnstructGridModel unstructGridModel, CharacteristicType characteristic, ComponentType componentType, int resultID, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`unstructGridModel` IUnstructGridModel

`characteristic` CharacteristicType

`componentType` ComponentType

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadGeneralMarkerAcceleration(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerAngularAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadGeneralMarkerAngularAcceleration(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerAngularVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerAngularVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadGeneralMarkerAngularVelocity(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerDisplacement_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerDisplacement\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadGeneralMarkerDisplacement(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_EntityBase_"></a> ReadGeneralMarkerInfo\(ResultInfo, MetaInfo, EntityBase\)

```csharp
public IList<double[]> ReadGeneralMarkerInfo(ResultInfo resultInfo, MetaInfo metaInfo, EntityBase obj)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`obj` EntityBase

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerPositionAndOrientation_VM_Models_Post_IEntity_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> ReadGeneralMarkerPositionAndOrientation\(IEntity, ResultInfo, MetaInfo\)

```csharp
protected virtual double[] ReadGeneralMarkerPositionAndOrientation(IEntity entity, ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`entity` IEntity

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadGeneralMarkerVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadGeneralMarkerVelocity(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadJointClearance_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadJointClearance\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadJointClearance(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int indexmarker, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`indexmarker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadMarkerTransformation_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_IResultMarker_"></a> ReadMarkerTransformation\(ResultInfo, MetaInfo, int, IResultMarker\)

```csharp
public TMatrix ReadMarkerTransformation(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, IResultMarker marker)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`marker` IResultMarker

#### Returns

 TMatrix

### <a id="VM_Models_Post_DataSource_RESReader_ReadMarkersForLoadingAnimation_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_List_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix____"></a> ReadMarkersForLoadingAnimation\(ResultInfo, MetaInfo, IList<IDataState\>, ref List<Dictionary<int, TMatrix\>\>\)

```csharp
public void ReadMarkersForLoadingAnimation(ResultInfo resultInfo, MetaInfo metaInfo, IList<IDataState> datastates, ref List<Dictionary<int, TMatrix>> makers)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`makers` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadMarkersPositions_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IResultMarker___"></a> ReadMarkersPositions\(ResultInfo, MetaInfo, IResultMarker\[\]\)

```csharp
public bool ReadMarkersPositions(ResultInfo resultInfo, MetaInfo metaInfo, IResultMarker[] lstObj)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`lstObj` IResultMarker\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementBottomEStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomEStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementBottomEStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementBottomPStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomPStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementBottomPStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementBottomStress_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomStress\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementBottomStress(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementBottomTStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementBottomTStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementBottomTStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementTopEStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopEStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementTopEStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementTopPStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopPStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementTopPStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementTopStress_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopStress\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementTopStress(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyElementTopTStrain_System_Int32_System_Int32_VM_Models_Post_IElement_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyElementTopTStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyElementTopTStrain(int stateid, int componentIndex, IElement element, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` IElement

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeAcceleration_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeAcceleration\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeAcceleration(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeAngularAcceleration\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeAngularAcceleration(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeAngularVelocity\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeAngularVelocity(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeBottomEStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomEStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomEStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeBottomPStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomPStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomPStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeBottomStress_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomStress\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomStress(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeBottomTStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeBottomTStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomTStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeDeformation_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeDeformation\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeDeformation(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeDisplacement_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeDisplacement\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeDisplacement(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeTopEStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopEStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeTopEStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeTopPStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopPStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeTopPStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeTopStress_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopStress\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeTopStress(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeTopTStrain_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeTopTStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeTopTStrain(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalBodyNodeVelocity_System_Int32_System_Int32_VM_Models_Post_INode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadModalBodyNodeVelocity\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double ReadModalBodyNodeVelocity(int stateid, int componentIndex, INode node, ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` INode

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalCoordinatesFromDisp_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinatesFromDisp\(MetaInfo, ResultInfo, IList<IDataState\>, IList<double\[\]\>\)

```csharp
public void ReadModalCoordinatesFromDisp(MetaInfo metainfo, ResultInfo resultInfo, IList<IDataState> dataStates, IList<double[]> coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalCoordinatesFromDisp_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinatesFromDisp\(MetaInfo, ResultInfo, IList<int\>, IList<double\[\]\>\)

```csharp
public void ReadModalCoordinatesFromDisp(MetaInfo metainfo, ResultInfo resultInfo, IList<int> stateIDs, IList<double[]> coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`stateIDs` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalCoordinatesFromRes_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_IModal_System_Int32_System_Double____"></a> ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IModal, int, ref double\[\]\)

```csharp
public void ReadModalCoordinatesFromRes(MetaInfo metainfo, ResultInfo resultInfo, IModal modal, int stateid, ref double[] coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`modal` IModal

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`coordinates` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalCoordinatesFromRes_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_IModal_System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IModal, IList<double\[\]\>\)

```csharp
public void ReadModalCoordinatesFromRes(MetaInfo metainfo, ResultInfo resultInfo, IModal modal, IList<double[]> coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`modal` IModal

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalCoordinatesFromRes_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IList<int\>, IList<double\[\]\>\)

```csharp
public void ReadModalCoordinatesFromRes(MetaInfo metainfo, ResultInfo resultInfo, IList<int> stateIDs, IList<double[]> coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`stateIDs` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalCoordinatesFromRes_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IList<IDataState\>, IList<double\[\]\>\)

```csharp
public void ReadModalCoordinatesFromRes(MetaInfo metainfo, ResultInfo resultInfo, IList<IDataState> dataStates, IList<double[]> coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadModalSelectedModes_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> ReadModalSelectedModes\(int, int, EntityBase, ResultInfo, MetaInfo\)

```csharp
protected double ReadModalSelectedModes(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodiesNodesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_System_Collections_Generic_List_System_Double____"></a> ReadNodalBodiesNodesPosition\(ResultInfo, MetaInfo, int, List<double\[\]\>\)

```csharp
public void ReadNodalBodiesNodesPosition(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, List<double[]> positions)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`positions` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementBottomEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementBottomEStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementBottomEStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementBottomPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementBottomPStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementBottomPStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementBottomStress_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementBottomStress\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementBottomStress(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementBottomTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementBottomTStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementBottomTStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementTopEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementTopEStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementTopEStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementTopPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementTopPStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementTopPStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementTopStress_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementTopStress\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementTopStress(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyElementTopTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyElementTopTStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyElementTopTStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`element` ElementBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeAcceleration_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeAcceleration(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeAngularAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeAngularAcceleration(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeAngularVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeAngularVelocity(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeBottomEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeBottomEStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeBottomPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeBottomPStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeBottomStress_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeBottomStress(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeBottomTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeBottomTStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeDeformation_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeDeformation\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeDeformation(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeDisplacement_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeDisplacement\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeDisplacement(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeThermal_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeThermal\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeThermal(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeTopEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeTopEStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeTopPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeTopPStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeTopStress_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeTopStress(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeTopTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeTopTStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodeVelocity_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected double ReadNodalBodyNodeVelocity(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodalBodyNodesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_System_Int32_System_Double___"></a> ReadNodalBodyNodesPosition\(ResultInfo, MetaInfo, int, int, double\[\]\)

```csharp
public void ReadNodalBodyNodesPosition(ResultInfo resultInfo, MetaInfo metaInfo, int itargetnodal, int stateid, double[] positions)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`itargetnodal` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`positions` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodeBehavior_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IGeneralMarker_"></a> ReadNodeBehavior\(ResultInfo, MetaInfo, ModeShapeInfo, IGeneralMarker\)

```csharp
public double[] ReadNodeBehavior(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeshapInfo, IGeneralMarker csys)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeshapInfo` ModeShapeInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadNodeContact_System_Int32_VM_Models_CharacteristicType_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_VM_Models_Post_DataSource_RESReader_CurveDataInfo_"></a> ReadNodeContact\(int, CharacteristicType, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, CurveDataInfo\)

```csharp
protected virtual double ReadNodeContact(int stateid, CharacteristicType characteristicType, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys, RESReader.CurveDataInfo curveDataInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`characteristicType` CharacteristicType

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

`curveDataInfo` [RESReader](VM.Models.Post.DataSource.RESReader.md).[CurveDataInfo](VM.Models.Post.DataSource.RESReader.CurveDataInfo.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRelativeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeAngularAcceleration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadRelativeAngularAcceleration(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRelativeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeAngularVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadRelativeAngularVelocity(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRelativeTranslationalAcceleration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeTranslationalAcceleration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadRelativeTranslationalAcceleration(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRelativeTranslationalVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeTranslationalVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadRelativeTranslationalVelocity(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRequestBase_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRequestBase\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadRequestBase(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadResultMarkerBehavior_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_"></a> ReadResultMarkerBehavior\(ResultInfo, MetaInfo, IGeneralMarker\)

```csharp
public double[] ReadResultMarkerBehavior(ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker csys)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` IGeneralMarker

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidAngularAcceleration\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadRigidAngularAcceleration(int stateid, int componentIndex, ObjectBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` ObjectBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodiesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_List_System_Int32__System_Collections_Generic_List_System_Collections_Generic_List_VM_Models_Post_ITransformMatrix____"></a> ReadRigidBodiesPosition\(ResultInfo, MetaInfo, List<int\>, ref List<List<ITransformMatrix\>\>\)

```csharp
public void ReadRigidBodiesPosition(ResultInfo resultInfo, MetaInfo metaInfo, List<int> stateids, ref List<List<ITransformMatrix>> results)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateids` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ITransformMatrix\>\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodiesPosition_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_System_Collections_Generic_List_VM_Models_Post_ITransformMatrix___"></a> ReadRigidBodiesPosition\(ResultInfo, MetaInfo, int, ref List<ITransformMatrix\>\)

```csharp
public void ReadRigidBodiesPosition(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, ref List<ITransformMatrix> results)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ITransformMatrix\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodyAcceleration_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyAcceleration\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadRigidBodyAcceleration(int stateid, int componentIndex, ObjectBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` ObjectBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodyAngularVelocity_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyAngularVelocity\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadRigidBodyAngularVelocity(int sateid, int componentIndex, ObjectBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`sateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` ObjectBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodyBehavior_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IGeneralMarker_System_Boolean_"></a> ReadRigidBodyBehavior\(ResultInfo, MetaInfo, IGeneralMarker, bool\)

```csharp
public double[] ReadRigidBodyBehavior(ResultInfo resultInfo, MetaInfo metaInfo, IGeneralMarker marker, bool isNode = false)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`marker` IGeneralMarker

`isNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodyDisplacement_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyDisplacement\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadRigidBodyDisplacement(int stateid, int componentIndex, ObjectBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` ObjectBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRigidBodyVelocity_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyVelocity\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadRigidBodyVelocity(int stateid, int componentIndex, ObjectBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` ObjectBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadRotationalFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRotationalFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadRotationalFrictionOnActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int indexmarker, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`indexmarker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSInput_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSInput\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadSInput(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSOutput_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSOutput\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadSOutput(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSeaLevelAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_IDataState_"></a> ReadSeaLevelAnimationData\(MetaInfo, ResultInfo, IDataState\)

```csharp
public void ReadSeaLevelAnimationData(MetaInfo metaInfo, ResultInfo resultInfo, IDataState datastate)
```

#### Parameters

`metaInfo` MetaInfo

`resultInfo` ResultInfo

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_RESReader_ReadSealevelCurrentsData_VM_Models_Post_SeaLevel_"></a> ReadSealevelCurrentsData\(SeaLevel\)

```csharp
protected bool ReadSealevelCurrentsData(SeaLevel sealevel)
```

#### Parameters

`sealevel` SeaLevel

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSealevelHeightsData_VM_Models_Post_SeaLevel_"></a> ReadSealevelHeightsData\(SeaLevel\)

```csharp
protected bool ReadSealevelHeightsData(SeaLevel sealevel)
```

#### Parameters

`sealevel` SeaLevel

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSecondOrderDiffEqBeta_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSecondOrderDiffEqBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadSecondOrderDiffEqBeta(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSecondOrderDiffEqBetaDot_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSecondOrderDiffEqBetaDot\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadSecondOrderDiffEqBetaDot(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSecondOrderDiffEqDoubleBeta_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSecondOrderDiffEqDoubleBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadSecondOrderDiffEqDoubleBeta(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadSpringAnimationData_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_System_Collections_Generic_Dictionary_System_Int32_VM_TMatrix__VM_Models_Post_IDataState_"></a> ReadSpringAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)

```csharp
public void ReadSpringAnimationData(MetaInfo metaInfo, ResultInfo resultInfo, Dictionary<int, TMatrix> markers, IDataState datastate)
```

#### Parameters

`metaInfo` MetaInfo

`resultInfo` ResultInfo

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), TMatrix\>

`datastate` IDataState

### <a id="VM_Models_Post_DataSource_RESReader_ReadStatesInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> ReadStatesInfo\(ResultInfo, MetaInfo\)

```csharp
protected virtual bool ReadStatesInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadStiffnessCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadStiffnessCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadStiffnessCoefficient(int stateid, int componentIndex, ConnectorBase contact, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contact` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTireForce_System_Int32_System_Int32_VM_Models_Post_Forces_ForceBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTireForce\(int, int, ForceBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTireForce(int stateid, int componentIndex, ForceBase force, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`force` ForceBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnActionMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnActionMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnActionMarkerMeasuredInActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnActionMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnActionMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnActionMarkerMeasuredInBaseMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnBaseMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnBaseMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnBaseMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnBaseMarkerMeasuredInActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnBaseMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnBaseMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnBaseMarkerMeasuredInBaseMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTorqueOnMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTorqueOnMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int indexmarker, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`indexmarker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTranslationalAcclerations_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32___System_Collections_Generic_IList_VM_Models_Post_IBodyBase__System_Collections_Generic_IList_System_Collections_Generic_IList_System_Double_____System_Boolean_"></a> ReadTranslationalAcclerations\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>, bool\)

```csharp
public void ReadTranslationalAcclerations(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<int> stateids, IList<IDictionary<uint, uint>> keyValuePairsGroups, IList<IBodyBase> targets, IList<IList<double[]>> resultsGroups, bool excuteParallel)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`keyValuePairsGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IBodyBase\>

`resultsGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`excuteParallel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTranslationalDeformation_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTranslationalDeformation\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTranslationalDeformation(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTranslationalDisplacements_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32___System_Collections_Generic_IList_VM_Models_Post_IBodyBase__System_Collections_Generic_IList_System_Collections_Generic_IList_System_Double_____"></a> ReadTranslationalDisplacements\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>\)

```csharp
public void ReadTranslationalDisplacements(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<int> stateids, IList<IDictionary<uint, uint>> keyValuePairsGroups, IList<IBodyBase> targets, IList<IList<double[]>> resultsGroups)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`keyValuePairsGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IBodyBase\>

`resultsGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadTranslationalFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTranslationalFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTranslationalFrictionOnActionMarker(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int indexmarker, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`indexmarker` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadTranslationalVelocities_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32___System_Collections_Generic_IList_VM_Models_Post_IBodyBase__System_Collections_Generic_IList_System_Collections_Generic_IList_System_Double_____"></a> ReadTranslationalVelocities\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>\)

```csharp
public void ReadTranslationalVelocities(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IList<int> stateids, IList<IDictionary<uint, uint>> keyValuePairsGroups, IList<IBodyBase> targets, IList<IList<double[]>> resultsGroups)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`keyValuePairsGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

`targets` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IBodyBase\>

`resultsGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_DataSource_RESReader_ReadUserSubroutineValue_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadUserSubroutineValue\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadUserSubroutineValue(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_ReadVariableBlockSize_System_IO_BinaryReader_System_Int32_System_Int32_System_Boolean_"></a> ReadVariableBlockSize\(BinaryReader, int, int, bool\)

```csharp
protected virtual long ReadVariableBlockSize(BinaryReader br, int totalCount, int offset, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`totalCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_ReadVariableBlockSize_System_IO_BinaryReader_System_Int32_System_Int32_System_Boolean_System_Int64__"></a> ReadVariableBlockSize\(BinaryReader, int, int, bool, ref long\)

```csharp
protected virtual long ReadVariableBlockSize(BinaryReader br, int totalCount, int offset, bool bSkipping, ref long maxBuffer)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`totalCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`maxBuffer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader_ReadVariableBlocks_System_IO_BinaryReader_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Boolean_"></a> ReadVariableBlocks\(BinaryReader, ResultInfo, MetaInfo, bool\)

```csharp
protected virtual void ReadVariableBlocks(BinaryReader br, ResultInfo resultInfo, MetaInfo metaInfo, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader_ReadVariableEq_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadVariableEq\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected virtual double ReadVariableEq(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`csys` GeneralMarker

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader_RunFatigueAnalysis_System_String_"></a> RunFatigueAnalysis\(string\)

```csharp
public void RunFatigueAnalysis(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_RESReader_SetRDeformation_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> SetRDeformation\(double\[\], int, double\[\], int, double\[\], int, double\[\], int\)

```csharp
public void SetRDeformation(double[] a_i, int offsetA_i, double[] a_c, int offsetA_c, double[] a_i0, int offsetA_i0, double[] l_Euler_XYZ, int offsetEuler_XYZ)
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

### <a id="VM_Models_Post_DataSource_RESReader_SetTDeformation_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> SetTDeformation\(double\[\], int, double\[\], int, double\[\], int, double\[\], int, double\[\], int\)

```csharp
public void SetTDeformation(double[] r_i, int offsetR_i, double[] r_c, int offsetR_c, double[] a_c, int offsetA_c, double[] si_0, int offsetSi_0, double[] deformation, int offsetDeformation)
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

### <a id="VM_Models_Post_DataSource_RESReader_UpdateDeformationScale_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_VM_Vector_VM_Vector_System_Collections_Generic_IEnumerable_VM_Models_Post_IDataState__System_Boolean_"></a> UpdateDeformationScale\(ResultInfo, MetaInfo, IFEBody, Vector, Vector, IEnumerable<IDataState\>, bool\)

```csharp
public void UpdateDeformationScale(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody febody, Vector oldScale, Vector newScale, IEnumerable<IDataState> dataStates, bool recoverOrignalScale = true)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`febody` IFEBody

`oldScale` Vector

`newScale` Vector

`dataStates` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IDataState\>

`recoverOrignalScale` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

