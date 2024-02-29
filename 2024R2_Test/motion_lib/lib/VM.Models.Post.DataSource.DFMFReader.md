# <a id="VM_Models_Post_DataSource_DFMFReader"></a> Class DFMFReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFMFReader : BaseReader, IDFMFReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFMFReader](VM.Models.Post.DataSource.DFMFReader.md)

#### Derived

[DFMFReader12](VM.Models.Post.DataSource.DFMFReader12.md), 
[DFMFReader13](VM.Models.Post.DataSource.DFMFReader13.md), 
[DFMFReader14](VM.Models.Post.DataSource.DFMFReader14.md), 
[DFMFReader15](VM.Models.Post.DataSource.DFMFReader15.md), 
[DFMFReader16](VM.Models.Post.DataSource.DFMFReader16.md), 
[DFMFReader17](VM.Models.Post.DataSource.DFMFReader17.md), 
[DFMFReader18](VM.Models.Post.DataSource.DFMFReader18.md), 
[DFMFReader19](VM.Models.Post.DataSource.DFMFReader19.md), 
[DFMFReader20](VM.Models.Post.DataSource.DFMFReader20.md), 
[DFMFReader21](VM.Models.Post.DataSource.DFMFReader21.md), 
[DFMFReader22](VM.Models.Post.DataSource.DFMFReader22.md), 
[DFMFReader23](VM.Models.Post.DataSource.DFMFReader23.md), 
[DFMFReader24](VM.Models.Post.DataSource.DFMFReader24.md)

#### Implements

IDFMFReader

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

### <a id="VM_Models_Post_DataSource_DFMFReader__ctor"></a> DFMFReader\(\)

```csharp
public DFMFReader()
```

## Methods

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadHeaderInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_"></a> ReadHeaderInfo\(MetaInfo, ModeShapeInfo\)

```csharp
public virtual void ReadHeaderInfo(MetaInfo metainfo, ModeShapeInfo modeshapeinfo)
```

#### Parameters

`metainfo` MetaInfo

`modeshapeinfo` ModeShapeInfo

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadNodeMass_System_Int32_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IModal_System_Int32_"></a> ReadNodeMass\(int, ModeShapeInfo, IModal, int\)

```csharp
public virtual double ReadNodeMass(int nodalBodyCount, ModeShapeInfo modeShapeInfo, IModal body, int iNode)
```

#### Parameters

`nodalBodyCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeShapeInfo` ModeShapeInfo

`body` IModal

`iNode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadRModeShapeForBody_VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Double____"></a> ReadRModeShapeForBody\(IDataPart, ModeShapeFileInfo, int, ref double\[\]\)

```csharp
public virtual bool ReadRModeShapeForBody(IDataPart datapart, ModeShapeFileInfo fileinfo, int indexselectedmode, ref double[] modeshape)
```

#### Parameters

`datapart` IDataPart

`fileinfo` ModeShapeFileInfo

`indexselectedmode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshape` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadRModeShapesForNode_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Collections_Generic_List_System_Double_____"></a> ReadRModeShapesForNode\(List<int\>, IDataPart, ModeShapeFileInfo, int, ref List<double\[\]\>\)

```csharp
public virtual bool ReadRModeShapesForNode(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int indexnode, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` IDataPart

`fileinfo` ModeShapeFileInfo

`indexnode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadRModeShapesForNodes_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32___System_Collections_Generic_List_System_Double_____"></a> ReadRModeShapesForNodes\(List<int\>, IDataPart, ModeShapeFileInfo, int\[\], ref List<double\[\]\>\)

```csharp
public virtual bool ReadRModeShapesForNodes(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int[] nodesindex, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` IDataPart

`fileinfo` ModeShapeFileInfo

`nodesindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadTModeShapeForBody_VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Double____"></a> ReadTModeShapeForBody\(IDataPart, ModeShapeFileInfo, int, ref double\[\]\)

```csharp
public virtual bool ReadTModeShapeForBody(IDataPart datapart, ModeShapeFileInfo fileinfo, int indexselectedmode, ref double[] modeshape)
```

#### Parameters

`datapart` IDataPart

`fileinfo` ModeShapeFileInfo

`indexselectedmode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshape` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadTModeShapesForNode_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Collections_Generic_List_System_Double_____"></a> ReadTModeShapesForNode\(List<int\>, IDataPart, ModeShapeFileInfo, int, ref List<double\[\]\>\)

```csharp
public virtual bool ReadTModeShapesForNode(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int indexnode, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` IDataPart

`fileinfo` ModeShapeFileInfo

`indexnode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadTModeShapesForNodes_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32___System_Collections_Generic_List_System_Double_____"></a> ReadTModeShapesForNodes\(List<int\>, IDataPart, ModeShapeFileInfo, int\[\], ref List<double\[\]\>\)

```csharp
public virtual bool ReadTModeShapesForNodes(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int[] nodesindex, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` IDataPart

`fileinfo` ModeShapeFileInfo

`nodesindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadTotalRModeShapesForBody_VM_Models_Post_IModal_VM_Models_Post_ModeShapeFileInfo_System_Collections_Generic_IList_System_Double_____"></a> ReadTotalRModeShapesForBody\(IModal, ModeShapeFileInfo, ref IList<double\[\]\>\)

```csharp
public virtual bool ReadTotalRModeShapesForBody(IModal modal, ModeShapeFileInfo fileinfo, ref IList<double[]> modeshapesGroup)
```

#### Parameters

`modal` IModal

`fileinfo` ModeShapeFileInfo

`modeshapesGroup` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFMFReader_ReadTotalTModeShapesForBody_VM_Models_Post_IModal_VM_Models_Post_ModeShapeFileInfo_System_Collections_Generic_IList_System_Double_____"></a> ReadTotalTModeShapesForBody\(IModal, ModeShapeFileInfo, ref IList<double\[\]\>\)

```csharp
public virtual bool ReadTotalTModeShapesForBody(IModal modal, ModeShapeFileInfo fileinfo, ref IList<double[]> modeshapesGroup)
```

#### Parameters

`modal` IModal

`fileinfo` ModeShapeFileInfo

`modeshapesGroup` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

