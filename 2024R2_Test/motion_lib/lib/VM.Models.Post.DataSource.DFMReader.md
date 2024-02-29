# <a id="VM_Models_Post_DataSource_DFMReader"></a> Class DFMReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFMReader : BaseReader, IDFMReader, IDFMInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFMReader](VM.Models.Post.DataSource.DFMReader.md)

#### Derived

[DFMReader12](VM.Models.Post.DataSource.DFMReader12.md), 
[DFMReader13](VM.Models.Post.DataSource.DFMReader13.md), 
[DFMReader14](VM.Models.Post.DataSource.DFMReader14.md), 
[DFMReader15](VM.Models.Post.DataSource.DFMReader15.md), 
[DFMReader16](VM.Models.Post.DataSource.DFMReader16.md), 
[DFMReader17](VM.Models.Post.DataSource.DFMReader17.md), 
[DFMReader18](VM.Models.Post.DataSource.DFMReader18.md), 
[DFMReader19](VM.Models.Post.DataSource.DFMReader19.md), 
[DFMReader20](VM.Models.Post.DataSource.DFMReader20.md), 
[DFMReader21](VM.Models.Post.DataSource.DFMReader21.md), 
[DFMReader22](VM.Models.Post.DataSource.DFMReader22.md), 
[DFMReader23](VM.Models.Post.DataSource.DFMReader23.md), 
[DFMReader24](VM.Models.Post.DataSource.DFMReader24.md)

#### Implements

IDFMReader, 
IDFMInfo

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

### <a id="VM_Models_Post_DataSource_DFMReader__ctor"></a> DFMReader\(\)

```csharp
public DFMReader()
```

## Fields

### <a id="VM_Models_Post_DataSource_DFMReader_VectorDisplayActionForceName"></a> VectorDisplayActionForceName

```csharp
public static readonly string VectorDisplayActionForceName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DataSource_DFMReader_AllBytes"></a> AllBytes

```csharp
protected byte[] AllBytes { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BCInfos"></a> BCInfos

```csharp
protected IList<NodesInfo> BCInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<NodesInfo\>

### <a id="VM_Models_Post_DataSource_DFMReader_BlockInfos"></a> BlockInfos

```csharp
protected IDictionary<string, int> BlockInfos { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_Bodies"></a> Bodies

```csharp
protected IList<ObjectInfo> Bodies { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectInfo\>

### <a id="VM_Models_Post_DataSource_DFMReader_BodyCounts"></a> BodyCounts

```csharp
protected IDictionary<ObjectType, int> BodyCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_BodyTypes"></a> BodyTypes

```csharp
protected BodyType[] BodyTypes { get; set; }
```

#### Property Value

 BodyType\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_ConstraintCounts"></a> ConstraintCounts

```csharp
protected IDictionary<ObjectType, int> ConstraintCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_ContactCounts"></a> ContactCounts

```csharp
protected IDictionary<ObjectType, int> ContactCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_ContactModelInfos"></a> ContactModelInfos

```csharp
protected IList<DFMReader.ContactModelInfo> ContactModelInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[DFMReader](VM.Models.Post.DataSource.DFMReader.md).[ContactModelInfo](VM.Models.Post.DataSource.DFMReader.ContactModelInfo.md)\>

### <a id="VM_Models_Post_DataSource_DFMReader_ControlCounts"></a> ControlCounts

```csharp
protected IDictionary<ObjectType, int> ControlCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_DummyCount"></a> DummyCount

```csharp
protected int DummyCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_EFEntityCounts"></a> EFEntityCounts

```csharp
protected IDictionary<ObjectType, int> EFEntityCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_EquationCounts"></a> EquationCounts

```csharp
protected IDictionary<ObjectType, int> EquationCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_ForceCounts"></a> ForceCounts

```csharp
protected IDictionary<ObjectType, int> ForceCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_FrequencyResponseCounts"></a> FrequencyResponseCounts

```csharp
protected IDictionary<ObjectType, int> FrequencyResponseCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_FunctionCounts"></a> FunctionCounts

```csharp
protected IDictionary<ObjectType, int> FunctionCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_Markers"></a> Markers

```csharp
protected Dictionary<int, ResultMarker> Markers { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), ResultMarker\>

### <a id="VM_Models_Post_DataSource_DFMReader_ModelNamePrefix"></a> ModelNamePrefix

```csharp
protected string ModelNamePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_BALJOINT_RESULT"></a> NUM\_OF\_BALJOINT\_RESULT

```csharp
public int NUM_OF_BALJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_BC_RESULT"></a> NUM\_OF\_BC\_RESULT

```csharp
public int NUM_OF_BC_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_CONTACT_RESULT"></a> NUM\_OF\_CONTACT\_RESULT

```csharp
public int NUM_OF_CONTACT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_COVJOINT_RESULT"></a> NUM\_OF\_COVJOINT\_RESULT

```csharp
public int NUM_OF_COVJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_CVCV_RESULT"></a> NUM\_OF\_CVCV\_RESULT

```csharp
public int NUM_OF_CVCV_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_CYLJOINT_RESULT"></a> NUM\_OF\_CYLJOINT\_RESULT

```csharp
public int NUM_OF_CYLJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_DISJOINT_RESULT"></a> NUM\_OF\_DISJOINT\_RESULT

```csharp
public int NUM_OF_DISJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_EFENTITY_RESULT"></a> NUM\_OF\_EFENTITY\_RESULT

```csharp
public int NUM_OF_EFENTITY_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_EXTERNAL_LOAD_FORCE_RESULT"></a> NUM\_OF\_EXTERNAL\_LOAD\_FORCE\_RESULT

```csharp
public int NUM_OF_EXTERNAL_LOAD_FORCE_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_FIXJOINT_RESULT"></a> NUM\_OF\_FIXJOINT\_RESULT

```csharp
public int NUM_OF_FIXJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_FORCE_RESULT"></a> NUM\_OF\_FORCE\_RESULT

```csharp
public int NUM_OF_FORCE_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_INLJOINT_RESULT"></a> NUM\_OF\_INLJOINT\_RESULT

```csharp
public int NUM_OF_INLJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_INPJOINT_RESULT"></a> NUM\_OF\_INPJOINT\_RESULT

```csharp
public int NUM_OF_INPJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_ORIJOINT_RESULT"></a> NUM\_OF\_ORIJOINT\_RESULT

```csharp
public int NUM_OF_ORIJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_PARJOINT_RESULT"></a> NUM\_OF\_PARJOINT\_RESULT

```csharp
public int NUM_OF_PARJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_PERJOINT_RESULT"></a> NUM\_OF\_PERJOINT\_RESULT

```csharp
public int NUM_OF_PERJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_PLAJOINT_RESULT"></a> NUM\_OF\_PLAJOINT\_RESULT

```csharp
public int NUM_OF_PLAJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_PTCV_RESULT"></a> NUM\_OF\_PTCV\_RESULT

```csharp
public int NUM_OF_PTCV_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_PTS_RESULT"></a> NUM\_OF\_PTS\_RESULT

```csharp
public int NUM_OF_PTS_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_REVJOINT_RESULT"></a> NUM\_OF\_REVJOINT\_RESULT

```csharp
public int NUM_OF_REVJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_SCRJOINT_RESULT"></a> NUM\_OF\_SCRJOINT\_RESULT

```csharp
public int NUM_OF_SCRJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_TIRE_FORCE_RESULT"></a> NUM\_OF\_TIRE\_FORCE\_RESULT

```csharp
public int NUM_OF_TIRE_FORCE_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_TRAJOINT_RESULT"></a> NUM\_OF\_TRAJOINT\_RESULT

```csharp
public int NUM_OF_TRAJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_UNIJOINT_RESULT"></a> NUM\_OF\_UNIJOINT\_RESULT

```csharp
public int NUM_OF_UNIJOINT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_VARIABLEBLOCK_CONTACT_GAP_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_CONTACT\_GAP\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_CONTACT_GAP_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_VARIABLEBLOCK_CONTACT_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_CONTACT\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_CONTACT_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_VARIABLEBLOCK_EFENTITY_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_EFENTITY\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_EFENTITY_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_VARIABLEBLOCK_EXTERNAL_LOAD_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_EXTERNAL\_LOAD\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_EXTERNAL_LOAD_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_VARIABLEBLOCK_FE_C_LOAD_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_FE\_C\_LOAD\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_FE_C_LOAD_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NUM_OF_VARIABLEBLOCK_FE_P_LOAD_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_FE\_P\_LOAD\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_FE_P_LOAD_RESULT { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NodeSets"></a> NodeSets

```csharp
protected Dictionary<int, List<NodesInfo>> NodeSets { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<NodesInfo\>\>

### <a id="VM_Models_Post_DataSource_DFMReader_NumBodyType"></a> NumBodyType

```csharp
protected int NumBodyType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumConstraintType"></a> NumConstraintType

```csharp
protected int NumConstraintType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumContactType"></a> NumContactType

```csharp
protected int NumContactType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumControlType"></a> NumControlType

```csharp
protected int NumControlType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumEFEntityType"></a> NumEFEntityType

```csharp
protected int NumEFEntityType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumEquationType"></a> NumEquationType

```csharp
protected int NumEquationType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumForceType"></a> NumForceType

```csharp
protected int NumForceType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumFrequencyResponseType"></a> NumFrequencyResponseType

```csharp
protected int NumFrequencyResponseType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumFunctionType"></a> NumFunctionType

```csharp
protected int NumFunctionType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_NumRequestType"></a> NumRequestType

```csharp
protected int NumRequestType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_RequestCounts"></a> RequestCounts

```csharp
protected IDictionary<ObjectType, int> RequestCounts { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<ObjectType, [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_RequestObjects"></a> RequestObjects

```csharp
protected IList<ObjectInfo> RequestObjects { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectInfo\>

### <a id="VM_Models_Post_DataSource_DFMReader_SpringInfos"></a> SpringInfos

```csharp
protected IList<DFMReader.SpringInfo> SpringInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[DFMReader](VM.Models.Post.DataSource.DFMReader.md).[SpringInfo](VM.Models.Post.DataSource.DFMReader.SpringInfo.md)\>

### <a id="VM_Models_Post_DataSource_DFMReader_TSpringDamperCount"></a> TSpringDamperCount

```csharp
protected int TSpringDamperCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_Units"></a> Units

```csharp
protected IDictionary<string, double> Units { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_DataSource_DFMReader_UserDefinedVectorEntityInfos"></a> UserDefinedVectorEntityInfos

```csharp
protected IList<UserDefinedVectorEntityInfo> UserDefinedVectorEntityInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<UserDefinedVectorEntityInfo\>

### <a id="VM_Models_Post_DataSource_DFMReader_UserDefinedVectorIndexes"></a> UserDefinedVectorIndexes

```csharp
protected IDictionary<string, int> UserDefinedVectorIndexes { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFMReader_Version"></a> Version

```csharp
public Version Version { get; set; }
```

#### Property Value

 [Version](https://learn.microsoft.com/dotnet/api/system.version)

## Methods

### <a id="VM_Models_Post_DataSource_DFMReader_BuildBodyConfiguration_System_Int32___"></a> BuildBodyConfiguration\(int\[\]\)

```csharp
protected virtual void BuildBodyConfiguration(int[] bodies)
```

#### Parameters

`bodies` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildConstraintConfiguration_System_Int32___"></a> BuildConstraintConfiguration\(int\[\]\)

```csharp
protected virtual void BuildConstraintConfiguration(int[] constraints)
```

#### Parameters

`constraints` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildContactConfiguration_System_Int32___"></a> BuildContactConfiguration\(int\[\]\)

```csharp
protected virtual void BuildContactConfiguration(int[] contacts)
```

#### Parameters

`contacts` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildControlConfiguration_System_Int32___"></a> BuildControlConfiguration\(int\[\]\)

```csharp
protected virtual void BuildControlConfiguration(int[] controls)
```

#### Parameters

`controls` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildEFEntityConfiguration_System_Int32___"></a> BuildEFEntityConfiguration\(int\[\]\)

```csharp
protected virtual void BuildEFEntityConfiguration(int[] efentities)
```

#### Parameters

`efentities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildEquationConfiguration_System_Int32___"></a> BuildEquationConfiguration\(int\[\]\)

```csharp
protected virtual void BuildEquationConfiguration(int[] equations)
```

#### Parameters

`equations` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildForceConfiguration_System_Int32___"></a> BuildForceConfiguration\(int\[\]\)

```csharp
protected virtual void BuildForceConfiguration(int[] forces)
```

#### Parameters

`forces` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildFrequencyResponseConfiguration_System_Int32___"></a> BuildFrequencyResponseConfiguration\(int\[\]\)

```csharp
protected virtual void BuildFrequencyResponseConfiguration(int[] frequencyresponse)
```

#### Parameters

`frequencyresponse` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildFunctionConfiguration_System_Int32___"></a> BuildFunctionConfiguration\(int\[\]\)

```csharp
protected virtual void BuildFunctionConfiguration(int[] functions)
```

#### Parameters

`functions` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildModels_VM_Models_Post_ResultDocument_System_String_VM_Models_Post_IDFRReader_VM_Identifier_"></a> BuildModels\(ResultDocument, string, IDFRReader, Identifier\)

```csharp
public virtual MetaInfo BuildModels(ResultDocument parentDocument, string filepath, IDFRReader dFRInfo, Identifier analysisResultID)
```

#### Parameters

`parentDocument` ResultDocument

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dFRInfo` IDFRReader

`analysisResultID` Identifier

#### Returns

 MetaInfo

### <a id="VM_Models_Post_DataSource_DFMReader_BuildRequestConfiguration_System_Int32___"></a> BuildRequestConfiguration\(int\[\]\)

```csharp
protected virtual void BuildRequestConfiguration(int[] requests)
```

#### Parameters

`requests` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_DFMReader_BuildSystemUnit_VM_Models_Post_MetaInfo_System_Collections_Generic_IDictionary_System_String_System_Double__"></a> BuildSystemUnit\(MetaInfo, IDictionary<string, double\>\)

```csharp
protected void BuildSystemUnit(MetaInfo metaInfo, IDictionary<string, double> units)
```

#### Parameters

`metaInfo` MetaInfo

`units` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_DataSource_DFMReader_CreateMetaInfo_VM_Models_Post_ResultDocument_VM_Identifier_"></a> CreateMetaInfo\(ResultDocument, Identifier\)

```csharp
protected virtual MetaInfo CreateMetaInfo(ResultDocument document, Identifier analysisResultID)
```

#### Parameters

`document` ResultDocument

`analysisResultID` Identifier

#### Returns

 MetaInfo

### <a id="VM_Models_Post_DataSource_DFMReader_CreateObjectInfo_VM_Models_Post_ObjectType_System_Int32__"></a> CreateObjectInfo\(ObjectType, ref int\)

```csharp
protected virtual ObjectInfo CreateObjectInfo(ObjectType type, ref int index)
```

#### Parameters

`type` ObjectType

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ObjectInfo

### <a id="VM_Models_Post_DataSource_DFMReader_GetAbsolutePath_System_String_System_String_"></a> GetAbsolutePath\(string, string\)

```csharp
protected string GetAbsolutePath(string refPath, string ext)
```

#### Parameters

`refPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ext` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFMReader_GetPartIndex_System_Collections_Generic_IEnumerable_VM_Models_Post_Bodies_BodyBase__System_Int32_"></a> GetPartIndex\(IEnumerable<BodyBase\>, int\)

```csharp
protected int GetPartIndex(IEnumerable<BodyBase> bodies, int markerIndex)
```

#### Parameters

`bodies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BodyBase\>

`markerIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadAssembly_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadAssembly\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadAssembly(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadBC_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadBC\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadBC(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadBeamGroup_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadBeamGroup\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadBeamGroup(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadBodyType_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadBodyType\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadBodyType(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadChainedSystem_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadChainedSystem\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadChainedSystem(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadConfiguration_System_String_System_Int32__"></a> ReadConfiguration\(string, ref int\)

```csharp
protected virtual void ReadConfiguration(string key, ref int index)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadContactModel_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadContactModel\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadContactModel(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadDriveTrain_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadDriveTrain\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadDriveTrain(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadEigenvalueAnalysis_VM_Models_Post_MetaInfo_VM_Models_Post_IDFRReader_System_String_System_Int32__"></a> ReadEigenvalueAnalysis\(MetaInfo, IDFRReader, string, ref int\)

```csharp
protected virtual void ReadEigenvalueAnalysis(MetaInfo metaInfo, IDFRReader dFRInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`dFRInfo` IDFRReader

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadElementSet_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadElementSet\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadElementSet(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadEntity_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadEntity\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected void ReadEntity(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadFEMaterial_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadFEMaterial\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadFEMaterial(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadFEProperty_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadFEProperty\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadFEProperty(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadFRA_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadFRA\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadFRA(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadHeaderInfo_System_Int32__"></a> ReadHeaderInfo\(ref int\)

```csharp
protected void ReadHeaderInfo(ref int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadMarker_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadMarker\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadMarker(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadNamedSelection_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadNamedSelection\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected void ReadNamedSelection(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadNodalOutput_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadNodalOutput\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadNodalOutput(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadReportableUserSubroutine_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadReportableUserSubroutine\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadReportableUserSubroutine(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadRequest_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadRequest\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadRequest(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadRoad_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadRoad\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected void ReadRoad(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadSeaLevel_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadSeaLevel\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadSeaLevel(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadSpline_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadSpline\(ResultDocument, Identifier, MetaInfo, string, ref int\)

```csharp
protected virtual void ReadSpline(ResultDocument parentDocument, Identifier analysisResultID, MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadSpring_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadSpring\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadSpring(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadUnit_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadUnit\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadUnit(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_ReadUserDefinedVector_VM_Models_Post_MetaInfo_System_String_System_Int32__"></a> ReadUserDefinedVector\(MetaInfo, string, ref int\)

```csharp
protected virtual void ReadUserDefinedVector(MetaInfo metaInfo, string key, ref int index)
```

#### Parameters

`metaInfo` MetaInfo

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_SetObjectInfo_VM_Models_Post_ObjectInfo_System_Int32__"></a> SetObjectInfo\(ObjectInfo, ref int\)

```csharp
protected virtual void SetObjectInfo(ObjectInfo objectInfo, ref int index)
```

#### Parameters

`objectInfo` ObjectInfo

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFMReader_SetParentIndexes_System_Collections_Generic_IEnumerable_VM_Models_Post_Bodies_BodyBase__System_Collections_Generic_IEnumerable_VM_Models_Post_ConnectorBase__"></a> SetParentIndexes\(IEnumerable<BodyBase\>, IEnumerable<ConnectorBase\>\)

```csharp
protected void SetParentIndexes(IEnumerable<BodyBase> bodies, IEnumerable<ConnectorBase> connectors)
```

#### Parameters

`bodies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BodyBase\>

`connectors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ConnectorBase\>

### <a id="VM_Models_Post_DataSource_DFMReader_SetRepotableVectorDisplayCharacteristics_VM_Models_Post_MetaInfo_"></a> SetRepotableVectorDisplayCharacteristics\(MetaInfo\)

```csharp
protected virtual void SetRepotableVectorDisplayCharacteristics(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFMReader_SetUserDefinedVectorDisplayCharacteristics_VM_Models_Post_MetaInfo_"></a> SetUserDefinedVectorDisplayCharacteristics\(MetaInfo\)

```csharp
protected virtual void SetUserDefinedVectorDisplayCharacteristics(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFMReader_SetVectorDisplayCharacteristics_VM_Models_Post_MetaInfo_"></a> SetVectorDisplayCharacteristics\(MetaInfo\)

```csharp
protected virtual void SetVectorDisplayCharacteristics(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFMReader_UpdateAllParametersToModel_VM_Models_Post_MetaInfo_"></a> UpdateAllParametersToModel\(MetaInfo\)

```csharp
protected void UpdateAllParametersToModel(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFMReader_UpdateParts_VM_Models_Post_MetaInfo_"></a> UpdateParts\(MetaInfo\)

```csharp
protected void UpdateParts(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

