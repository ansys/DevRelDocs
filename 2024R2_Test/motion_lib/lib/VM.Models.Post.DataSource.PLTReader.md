# <a id="VM_Models_Post_DataSource_PLTReader"></a> Class PLTReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class PLTReader : BaseReader, IPLTReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[PLTReader](VM.Models.Post.DataSource.PLTReader.md)

#### Derived

[PLTReader12](VM.Models.Post.DataSource.PLTReader12.md), 
[PLTReader13](VM.Models.Post.DataSource.PLTReader13.md), 
[PLTReader14](VM.Models.Post.DataSource.PLTReader14.md), 
[PLTReader15](VM.Models.Post.DataSource.PLTReader15.md), 
[PLTReader16](VM.Models.Post.DataSource.PLTReader16.md), 
[PLTReader17](VM.Models.Post.DataSource.PLTReader17.md), 
[PLTReader18](VM.Models.Post.DataSource.PLTReader18.md), 
[PLTReader19](VM.Models.Post.DataSource.PLTReader19.md), 
[PLTReader20](VM.Models.Post.DataSource.PLTReader20.md), 
[PLTReader21](VM.Models.Post.DataSource.PLTReader21.md), 
[PLTReader22](VM.Models.Post.DataSource.PLTReader22.md), 
[PLTReader23](VM.Models.Post.DataSource.PLTReader23.md), 
[PLTReader24](VM.Models.Post.DataSource.PLTReader24.md)

#### Implements

IPLTReader

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

### <a id="VM_Models_Post_DataSource_PLTReader__ctor_System_String_"></a> PLTReader\(string\)

```csharp
public PLTReader(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DataSource_PLTReader_ContactBlocksSize"></a> ContactBlocksSize

```csharp
protected IList<long> ContactBlocksSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_ContactGapBlocksSize"></a> ContactGapBlocksSize

```csharp
protected IList<long> ContactGapBlocksSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_EFBCBlocksSize"></a> EFBCBlocksSize

```csharp
protected IList<long> EFBCBlocksSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_EFCLoadBlockSize"></a> EFCLoadBlockSize

```csharp
protected IList<long> EFCLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_EFPLoadBlockSize"></a> EFPLoadBlockSize

```csharp
protected IList<long> EFPLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_ExternalForceBlockSize"></a> ExternalForceBlockSize

```csharp
protected IList<long> ExternalForceBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_FEBodyContactBlockSize"></a> FEBodyContactBlockSize

```csharp
protected IList<long> FEBodyContactBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_FEBodyReferenceFrames"></a> FEBodyReferenceFrames

```csharp
public IDictionary<int, double[]> FEBodyReferenceFrames { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_PLTReader_FECLoadBlockSize"></a> FECLoadBlockSize

```csharp
protected IList<long> FECLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_FEPLoadBlockSize"></a> FEPLoadBlockSize

```csharp
protected IList<long> FEPLoadBlockSize { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="VM_Models_Post_DataSource_PLTReader_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_PLTReader_MarkersPositions"></a> MarkersPositions

```csharp
public IDictionary<int, double[]> MarkersPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_PLTReader_MaxFebodyBlockSize"></a> MaxFebodyBlockSize

```csharp
protected long MaxFebodyBlockSize { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_ModalNodesbehavior"></a> ModalNodesbehavior

```csharp
public IDictionary<int, IDictionary<int, double[]>> ModalNodesbehavior { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_DataSource_PLTReader_NUM_OF_FLEX_NODE_RESULT_3"></a> NUM\_OF\_FLEX\_NODE\_RESULT\_3

```csharp
public int NUM_OF_FLEX_NODE_RESULT_3 { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_PLTReader_NUM_OF_FLEX_NODE_RESULT_6"></a> NUM\_OF\_FLEX\_NODE\_RESULT\_6

```csharp
public int NUM_OF_FLEX_NODE_RESULT_6 { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_PLTReader_NUM_OF_POSITION"></a> NUM\_OF\_POSITION

```csharp
public int NUM_OF_POSITION { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_PLTReader_PLTPath"></a> PLTPath

```csharp
public string PLTPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_PLTReader_PLT_NUM_OF_FLEX_NODE_RESULT"></a> PLT\_NUM\_OF\_FLEX\_NODE\_RESULT

```csharp
public int PLT_NUM_OF_FLEX_NODE_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_PLTReader_PLT_NUM_OF_RIGID_RESULT"></a> PLT\_NUM\_OF\_RIGID\_RESULT

```csharp
public int PLT_NUM_OF_RIGID_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_PLTReader_PltReader"></a> PltReader

```csharp
protected BinaryReader PltReader { get; set; }
```

#### Property Value

 [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

### <a id="VM_Models_Post_DataSource_PLTReader_PostSlv"></a> PostSlv

```csharp
protected PostSlv PostSlv { get; set; }
```

#### Property Value

 PostSlv

### <a id="VM_Models_Post_DataSource_PLTReader_RigidBodiesPositions"></a> RigidBodiesPositions

```csharp
public IDictionary<int, double[]> RigidBodiesPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_PLTReader_Size_PLT_RBody"></a> Size\_PLT\_RBody

```csharp
public long Size_PLT_RBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_Step"></a> Step

```csharp
public int Step { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_PLTReader_Time"></a> Time

```csharp
public IList<double> Time { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_DataSource_PLTReader_VariableBlockSizeTo"></a> VariableBlockSizeTo

```csharp
protected IList<long> VariableBlockSizeTo { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

## Methods

### <a id="VM_Models_Post_DataSource_PLTReader_CalculateBaseOffset_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IEntity_System_Int32_System_Int64__"></a> CalculateBaseOffset\(ResultInfo, MetaInfo, IEntity, int, ref long\)

```csharp
protected virtual bool CalculateBaseOffset(ResultInfo resultInfo, MetaInfo metaInfo, IEntity obj, int nodeIdx, ref long offset)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`obj` IEntity

`nodeIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`offset` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_PLTReader_CreateResultInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CreateResultInfo\(ResultInfo, MetaInfo\)

```csharp
public virtual bool CreateResultInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_PLTReader_GetCurveInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_ValueTuple_VM_Models_Post_IEntity_System_Collections_Generic_IEnumerable_System_String___System_Collections_Generic_IDictionary_System_String_System_Double____System_Object_VM_Models_Post_HitItemInfo_"></a> GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, \(IEntity Target, IEnumerable<string\> Paths\), IDictionary<string, double\[\]\>, object, HitItemInfo\)

```csharp
public virtual bool GetCurveInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, (IEntity Target, IEnumerable<string> Paths) targetPaths, IDictionary<string, double[]> curveInfo, object coordsys, HitItemInfo hitItem = null)
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

### <a id="VM_Models_Post_DataSource_PLTReader_GetNodalOutputNode_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_Bodies_NodeBase_"></a> GetNodalOutputNode\(ResultInfo, MetaInfo, int, NodeBase\)

```csharp
protected double[] GetNodalOutputNode(ResultInfo resultInfo, MetaInfo metaInfo, int stateid, NodeBase node)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_PLTReader_GetVariableBlockSize_System_Int32_"></a> GetVariableBlockSize\(int\)

```csharp
protected virtual long GetVariableBlockSize(int frameIdx)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_GetVariableBlockSize_System_Int32_VM_Models_Post_ObjectType_"></a> GetVariableBlockSize\(int, ObjectType\)

```csharp
protected long GetVariableBlockSize(int frameIdx, ObjectType type)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ObjectType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_GetVariableBlockSizeTo_System_Int32_"></a> GetVariableBlockSizeTo\(int\)

```csharp
protected long GetVariableBlockSizeTo(int toFrameIdx)
```

#### Parameters

`toFrameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_GetVariableLocalBlockSize_System_Int32_VM_Models_Post_ObjectType_"></a> GetVariableLocalBlockSize\(int, ObjectType\)

```csharp
protected long GetVariableLocalBlockSize(int frameIdx, ObjectType type)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ObjectType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_InitializePostSolver_VM_Models_Post_MetaInfo_"></a> InitializePostSolver\(MetaInfo\)

```csharp
public void InitializePostSolver(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_PLTReader_ReadAX_AY_AZ_PROJECTION_ANGLE_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadAX\_AY\_AZ\_PROJECTION\_ANGLE\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadBallFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadBallFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadCDampingCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCDampingCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadCDampingCoefficient(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadCSYSAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadCSYSAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSAngularAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadCSYSAngularVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSAngularVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadCSYSDisplacement_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSDisplacement\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadCSYSVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadCSYSVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsDpenetraion_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsDpenetraion\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsNormalForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsNormalForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsPenetration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsPoint_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsPoint\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadConstraintsTangentVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadConstraintsTangentVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactGapBlocksize_System_IO_BinaryReader_System_Collections_Generic_IEnumerable_VM_Models_Post_Contacts_ContactBase__System_Boolean_"></a> ReadContactGapBlocksize\(BinaryReader, IEnumerable<ContactBase\>, bool\)

```csharp
protected virtual long ReadContactGapBlocksize(BinaryReader br, IEnumerable<ContactBase> contacts, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`contacts` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ContactBase\>

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactGapResult_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactGapResult\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactResult_VM_Models_CharacteristicType_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_System_Int64_"></a> ReadContactResult\(CharacteristicType, int, ConnectorBase, ResultInfo, long\)

```csharp
protected virtual double ReadContactResult(CharacteristicType characteristicType, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, long globalStartPosition)
```

#### Parameters

`characteristicType` CharacteristicType

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`connector` ConnectorBase

`resultInfo` ResultInfo

`globalStartPosition` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsArea_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsArea\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsArea(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsContactLoss_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsContactLoss\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsContactLoss(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsCreep_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsCreep\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsCreep(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsDPenetration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsDPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsDPenetration(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsDampingForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsDampingForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsDampingForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsForceMagnitude_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsForceMagnitude\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsForceMagnitude(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsFrictionCoefficient(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsFrictionForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsNormalForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsNormalForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsNormalForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsPenetration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsPenetration(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsPoint_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsPoint\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsPoint(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsPotentialEnergy_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsPotentialEnergy\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsPotentialEnergy(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsSlidingLoss_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlidingLoss\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlidingLoss(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsSlipFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlipFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlipFrictionCoefficient(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsSlipFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlipFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlipFrictionForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsSlipRatio_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSlipRatio\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSlipRatio(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsSpringForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsSpringForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsSpringForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsStictionFrictionCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsStictionFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsStictionFrictionCoefficient(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsStictionFrictionForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsStictionFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsStictionFrictionForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsStictionSlip_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsStictionSlip\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsStictionSlip(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadContactsTangentVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadContactsTangentVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadContactsTangentVelocity(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadExpressionValue_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadExpressionValue\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadExpressionValue(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFEBodyNodeBottomContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadFEBodyNodeBottomContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected virtual double ReadFEBodyNodeBottomContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFEBodyNodeContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadFEBodyNodeContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected virtual double ReadFEBodyNodeContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFEBodyNodeTopContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadFEBodyNodeTopContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
protected virtual double ReadFEBodyNodeTopContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFirstOrderDiffEqBeta_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadFirstOrderDiffEqBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadFirstOrderDiffEqBeta(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFirstOrderDiffEqBetaDot_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadFirstOrderDiffEqBetaDot\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadFirstOrderDiffEqBetaDot(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFlexibleBodyReferenceFrames_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IEntity_"></a> ReadFlexibleBodyReferenceFrames\(ResultInfo, MetaInfo, IEntity\)

```csharp
public bool ReadFlexibleBodyReferenceFrames(ResultInfo resultInfo, MetaInfo metaInfo, IEntity entity)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`entity` IEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFlexibleBodyReferenceFrames_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_System_Collections_Generic_IList_System_Double_____"></a> ReadFlexibleBodyReferenceFrames\(ResultInfo, MetaInfo, IFEBody, ref IList<double\[\]\>\)

```csharp
public bool ReadFlexibleBodyReferenceFrames(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody febody, ref IList<double[]> referenceframes)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`febody` IFEBody

`referenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceBaseMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceBaseMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceDeformation_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceDeformation\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceOnActionMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnActionMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceOnActionMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnActionMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceOnBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceOnBaseMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceOnBaseMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadForceRelativeVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadForceRelativeVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadGeneralMarkerAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadGeneralMarkerAcceleration(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadGeneralMarkerAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerAngularAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadGeneralMarkerAngularAcceleration(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadGeneralMarkerAngularVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerAngularVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadGeneralMarkerAngularVelocity(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadGeneralMarkerDisplacement_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerDisplacement\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadGeneralMarkerDisplacement(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadGeneralMarkerVelocity_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadGeneralMarkerVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadGeneralMarkerVelocity(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadJointClearance_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadJointClearance\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementBottomEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementBottomEStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementBottomEStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementBottomPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementBottomPStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementBottomPStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementBottomStress_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementBottomStress\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementBottomStress(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementBottomTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementBottomTStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementBottomTStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementTopEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementTopEStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementTopEStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementTopPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementTopPStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementTopPStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementTopStress_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementTopStress\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementTopStress(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyElementTopTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_ElementBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyElementTopTStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyElementTopTStrain(int stateid, int componentIndex, ElementBase element, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeAcceleration_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeAcceleration(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeAngularAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeAngularAcceleration(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeAngularVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeAngularVelocity(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeBottomEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeBottomEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomEStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeBottomPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeBottomPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomPStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeBottomStress_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeBottomStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomStress(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeBottomTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeBottomTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeBottomTStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeDeformation_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeDeformation\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeDeformation(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeDisplacement_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeDisplacement\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeDisplacement(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeTopEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeTopEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeTopEStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeTopPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeTopPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeTopPStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeTopStress_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeTopStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeTopStress(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeTopTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeTopTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeTopTStrain(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalBodyNodeVelocity_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadModalBodyNodeVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

```csharp
public double ReadModalBodyNodeVelocity(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalCoordinates_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_IModal_System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinates\(MetaInfo, ResultInfo, IModal, IList<double\[\]\>\)

```csharp
public void ReadModalCoordinates(MetaInfo metainfo, ResultInfo resultInfo, IModal modal, IList<double[]> coordinates)
```

#### Parameters

`metainfo` MetaInfo

`resultInfo` ResultInfo

`modal` IModal

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_PLTReader_ReadModalSelectedModes_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> ReadModalSelectedModes\(int, int, EntityBase, ResultInfo, MetaInfo\)

```csharp
public double ReadModalSelectedModes(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`obj` EntityBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeAcceleration_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeAngularAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeAngularVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeBottomEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeBottomPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeBottomStress_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeBottomTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeBottomTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeDeformation_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeDeformation\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeDisplacement_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeDisplacement\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeThermal_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeThermal\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeTopEStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeTopPStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeTopStress_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeTopTStrain_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeTopTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadNodalBodyNodeVelocity_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_"></a> ReadNodalBodyNodeVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRelativeAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeAngularAcceleration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRelativeAngularVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeAngularVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRelativeTranslationalAcceleration_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeTranslationalAcceleration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRelativeTranslationalVelocity_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRelativeTranslationalVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRequestBase_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRequestBase\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadRequestBase(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRigidAngularAcceleration_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidAngularAcceleration\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRigidBodyAcceleration_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyAcceleration\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRigidBodyAngularVelocity_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyAngularVelocity\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRigidBodyDisplacement_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyDisplacement\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRigidBodyVelocity_System_Int32_System_Int32_VM_Models_Post_ObjectBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRigidBodyVelocity\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadRotationalFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadRotationalFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadSInput_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSInput\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadSInput(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadSOutput_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSOutput\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadSOutput(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadSecondOrderDiffEqBeta_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSecondOrderDiffEqBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadSecondOrderDiffEqBeta(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadSecondOrderDiffEqBetaDot_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSecondOrderDiffEqBetaDot\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadSecondOrderDiffEqBetaDot(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadSecondOrderDiffEqDoubleBeta_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadSecondOrderDiffEqDoubleBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadSecondOrderDiffEqDoubleBeta(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadStatesInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> ReadStatesInfo\(ResultInfo, MetaInfo\)

```csharp
protected virtual bool ReadStatesInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadStiffnessCoefficient_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadStiffnessCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadStiffnessCoefficient(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTireForce_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTireForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
protected double ReadTireForce(int stateid, int componentIndex, ConnectorBase connector, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnActionMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnActionMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnActionMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnActionMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnBaseMarkerMeasuredInActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnBaseMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnBaseMarkerMeasuredInBaseMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnBaseMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTorqueOnMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTorqueOnMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTranslationalDeformation_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTranslationalDeformation\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadTranslationalFrictionOnActionMarker_System_Int32_System_Int32_VM_Models_Post_ConnectorBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadTranslationalFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadUserSubroutineValue_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadUserSubroutineValue\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadUserSubroutineValue(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadVariableBlockSize_System_IO_BinaryReader_System_Int32_System_Int32_System_Boolean_"></a> ReadVariableBlockSize\(BinaryReader, int, int, bool\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadVariableBlockSize_System_IO_BinaryReader_System_Int32_System_Int32_System_Boolean_System_Int64__"></a> ReadVariableBlockSize\(BinaryReader, int, int, bool, ref long\)

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

### <a id="VM_Models_Post_DataSource_PLTReader_ReadVariableBlocks_System_IO_BinaryReader_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Boolean_"></a> ReadVariableBlocks\(BinaryReader, ResultInfo, MetaInfo, bool\)

```csharp
protected virtual void ReadVariableBlocks(BinaryReader br, ResultInfo resultInfo, MetaInfo metaInfo, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_PLTReader_ReadVariableEq_System_Int32_System_Int32_VM_Models_Post_EntityBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Int32_VM_Models_Post_GeneralMarker_System_Int64_"></a> ReadVariableEq\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)

```csharp
public virtual double ReadVariableEq(int stateid, int componentIndex, EntityBase obj, ResultInfo resultInfo, MetaInfo metaInfo, int nodeID, GeneralMarker csys, long globalStartPosition)
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

