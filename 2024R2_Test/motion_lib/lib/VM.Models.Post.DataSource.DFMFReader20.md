# <a id="VM_Models_Post_DataSource_DFMFReader20"></a> Class DFMFReader20

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFMFReader20 : DFMFReader, IDFMFReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFMFReader](VM.Models.Post.DataSource.DFMFReader.md) ← 
[DFMFReader20](VM.Models.Post.DataSource.DFMFReader20.md)

#### Implements

IDFMFReader

#### Inherited Members

[DFMFReader.ReadHeaderInfo\(MetaInfo, ModeShapeInfo\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadHeaderInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_), 
[DFMFReader.ReadRModeShapeForBody\(IDataPart, ModeShapeFileInfo, int, ref double\[\]\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadRModeShapeForBody\_VM\_Models\_Post\_IDataPart\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Int32\_System\_Double\_\_\_\_), 
[DFMFReader.ReadRModeShapesForNode\(List<int\>, IDataPart, ModeShapeFileInfo, int, ref List<double\[\]\>\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadRModeShapesForNode\_System\_Collections\_Generic\_List\_System\_Int32\_\_VM\_Models\_Post\_IDataPart\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Int32\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_\_), 
[DFMFReader.ReadRModeShapesForNodes\(List<int\>, IDataPart, ModeShapeFileInfo, int\[\], ref List<double\[\]\>\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadRModeShapesForNodes\_System\_Collections\_Generic\_List\_System\_Int32\_\_VM\_Models\_Post\_IDataPart\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Int32\_\_\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_\_), 
[DFMFReader.ReadTModeShapeForBody\(IDataPart, ModeShapeFileInfo, int, ref double\[\]\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadTModeShapeForBody\_VM\_Models\_Post\_IDataPart\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Int32\_System\_Double\_\_\_\_), 
[DFMFReader.ReadTModeShapesForNode\(List<int\>, IDataPart, ModeShapeFileInfo, int, ref List<double\[\]\>\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadTModeShapesForNode\_System\_Collections\_Generic\_List\_System\_Int32\_\_VM\_Models\_Post\_IDataPart\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Int32\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_\_), 
[DFMFReader.ReadTModeShapesForNodes\(List<int\>, IDataPart, ModeShapeFileInfo, int\[\], ref List<double\[\]\>\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadTModeShapesForNodes\_System\_Collections\_Generic\_List\_System\_Int32\_\_VM\_Models\_Post\_IDataPart\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Int32\_\_\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_\_), 
[DFMFReader.ReadTotalRModeShapesForBody\(IModal, ModeShapeFileInfo, ref IList<double\[\]\>\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadTotalRModeShapesForBody\_VM\_Models\_Post\_IModal\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[DFMFReader.ReadTotalTModeShapesForBody\(IModal, ModeShapeFileInfo, ref IList<double\[\]\>\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadTotalTModeShapesForBody\_VM\_Models\_Post\_IModal\_VM\_Models\_Post\_ModeShapeFileInfo\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[DFMFReader.ReadNodeMass\(int, ModeShapeInfo, IModal, int\)](VM.Models.Post.DataSource.DFMFReader.md\#VM\_Models\_Post\_DataSource\_DFMFReader\_ReadNodeMass\_System\_Int32\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IModal\_System\_Int32\_), 
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

### <a id="VM_Models_Post_DataSource_DFMFReader20__ctor"></a> DFMFReader20\(\)

```csharp
public DFMFReader20()
```

