# <a id="VM_Models_Post_DataSource_DFGReader"></a> Class DFGReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFGReader : BaseReader, IDFGReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFGReader](VM.Models.Post.DataSource.DFGReader.md)

#### Derived

[DFGReader12](VM.Models.Post.DataSource.DFGReader12.md), 
[DFGReader13](VM.Models.Post.DataSource.DFGReader13.md), 
[DFGReader14](VM.Models.Post.DataSource.DFGReader14.md), 
[DFGReader15](VM.Models.Post.DataSource.DFGReader15.md), 
[DFGReader16](VM.Models.Post.DataSource.DFGReader16.md), 
[DFGReader17](VM.Models.Post.DataSource.DFGReader17.md), 
[DFGReader18](VM.Models.Post.DataSource.DFGReader18.md), 
[DFGReader19](VM.Models.Post.DataSource.DFGReader19.md), 
[DFGReader20](VM.Models.Post.DataSource.DFGReader20.md), 
[DFGReader21](VM.Models.Post.DataSource.DFGReader21.md), 
[DFGReader22](VM.Models.Post.DataSource.DFGReader22.md), 
[DFGReader23](VM.Models.Post.DataSource.DFGReader23.md), 
[DFGReader24](VM.Models.Post.DataSource.DFGReader24.md)

#### Implements

IDFGReader

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

### <a id="VM_Models_Post_DataSource_DFGReader__ctor"></a> DFGReader\(\)

```csharp
public DFGReader()
```

## Fields

### <a id="VM_Models_Post_DataSource_DFGReader_DoubleColor255"></a> DoubleColor255

```csharp
protected const double DoubleColor255 = 255
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFGReader_StrColorInfo"></a> StrColorInfo

```csharp
protected const string StrColorInfo = "COLORINFO"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFGReader_StrDFPostGeometry"></a> StrDFPostGeometry

```csharp
protected const string StrDFPostGeometry = "DFPOST_GEOMETRY"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFGReader_StrFlexBody"></a> StrFlexBody

```csharp
protected const string StrFlexBody = "FLEXBODY"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFGReader_StrModalBody"></a> StrModalBody

```csharp
protected const string StrModalBody = "MODALBODY"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DFGReader_StrRigidBody"></a> StrRigidBody

```csharp
protected const string StrRigidBody = "RIGIDBODY"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DataSource_DFGReader_AllBytes"></a> AllBytes

```csharp
protected byte[] AllBytes { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="VM_Models_Post_DataSource_DFGReader_MajorVersion"></a> MajorVersion

```csharp
protected int MajorVersion { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_MinorVersion"></a> MinorVersion

```csharp
protected int MinorVersion { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Models_Post_DataSource_DFGReader_GenerateBeamGroupGeometryData_VM_Models_Post_MetaInfo_System_Int32__"></a> GenerateBeamGroupGeometryData\(MetaInfo, ref int\)

```csharp
protected void GenerateBeamGroupGeometryData(MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_GenerateFEBeamGroupGeometryData_VM_Models_Post_MetaInfo_System_Int32__"></a> GenerateFEBeamGroupGeometryData\(MetaInfo, ref int\)

```csharp
protected void GenerateFEBeamGroupGeometryData(MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_GenerateGeneralMarkerGeometryData_VM_Models_Post_MetaInfo_"></a> GenerateGeneralMarkerGeometryData\(MetaInfo\)

```csharp
protected void GenerateGeneralMarkerGeometryData(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFGReader_GenerateSeaLevelGeometryData_VM_Models_Post_MetaInfo_System_Int32__"></a> GenerateSeaLevelGeometryData\(MetaInfo, ref int\)

```csharp
protected void GenerateSeaLevelGeometryData(MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_GenerateSpringGeometryData_VM_Models_Post_MetaInfo_System_Int32__"></a> GenerateSpringGeometryData\(MetaInfo, ref int\)

```csharp
protected void GenerateSpringGeometryData(MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_GetElementNode_VM_Models_Post_ElementType_"></a> GetElementNode\(ElementType\)

```csharp
public static int GetElementNode(ElementType type)
```

#### Parameters

`type` ElementType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_ReadColorInfo_System_Int32__VM_Models_Post_MetaInfo_"></a> ReadColorInfo\(ref int, MetaInfo\)

```csharp
protected virtual void ReadColorInfo(ref int filePosition, MetaInfo metaInfo)
```

#### Parameters

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFGReader_ReadElementInfo_VM_Models_Post_MetaInfo_System_Int32__System_Int32_VM_Models_Post_ElementType_VM_Models_Post_Bodies_BodyBase_System_Collections_Generic_Dictionary_VM_Models_Post_ElementType_System_Tuple_System_Int32___System_UInt32___System_Int32______"></a> ReadElementInfo\(MetaInfo, ref int, int, ElementType, BodyBase, ref Dictionary<ElementType, Tuple<int\[\], uint\[\], int\[\]\>\>\)

```csharp
protected virtual void ReadElementInfo(MetaInfo metaInfo, ref int filePosition, int elementCount, ElementType elementType, BodyBase body, ref Dictionary<ElementType, Tuple<int[], uint[], int[]>> elementgroupInfos)
```

#### Parameters

`metaInfo` MetaInfo

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`elementCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`elementType` ElementType

`body` BodyBase

`elementgroupInfos` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<ElementType, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-3)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\[\], [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\], [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]\>\>

### <a id="VM_Models_Post_DataSource_DFGReader_ReadFileVersion_System_Int32__"></a> ReadFileVersion\(ref int\)

```csharp
protected void ReadFileVersion(ref int filePosition)
```

#### Parameters

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_ReadFlexElementGroup_VM_Models_Post_MetaInfo_System_Int32__VM_Models_Post_Bodies_BodyBase_"></a> ReadFlexElementGroup\(MetaInfo, ref int, BodyBase\)

```csharp
protected virtual void ReadFlexElementGroup(MetaInfo metaInfo, ref int filePosition, BodyBase body)
```

#### Parameters

`metaInfo` MetaInfo

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`body` BodyBase

### <a id="VM_Models_Post_DataSource_DFGReader_ReadGeometry_System_String_VM_Models_Post_MetaInfo_"></a> ReadGeometry\(string, MetaInfo\)

```csharp
public virtual void ReadGeometry(string path, MetaInfo metaInfo)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`metaInfo` MetaInfo

### <a id="VM_Models_Post_DataSource_DFGReader_ReadModalGeometryData_System_Int32__VM_Models_Post_MetaInfo_System_Int32__"></a> ReadModalGeometryData\(ref int, MetaInfo, ref int\)

```csharp
protected virtual void ReadModalGeometryData(ref int filePosition, MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_ReadNodalGeometryData_System_Int32__VM_Models_Post_MetaInfo_System_Int32__"></a> ReadNodalGeometryData\(ref int, MetaInfo, ref int\)

```csharp
protected virtual void ReadNodalGeometryData(ref int filePosition, MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_DFGReader_ReadRigidGeometryData_System_Int32__VM_Models_Post_MetaInfo_System_Int32__"></a> ReadRigidGeometryData\(ref int, MetaInfo, ref int\)

```csharp
protected virtual void ReadRigidGeometryData(ref int filePosition, MetaInfo metaInfo, ref int partCount)
```

#### Parameters

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`metaInfo` MetaInfo

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

