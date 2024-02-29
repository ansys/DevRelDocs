# <a id="VM_Models_Post_DataSource_DFGReader24"></a> Class DFGReader24

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFGReader24 : DFGReader, IDFGReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFGReader](VM.Models.Post.DataSource.DFGReader.md) ← 
[DFGReader24](VM.Models.Post.DataSource.DFGReader24.md)

#### Implements

IDFGReader

#### Inherited Members

[DFGReader.DoubleColor255](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_DoubleColor255), 
[DFGReader.StrColorInfo](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_StrColorInfo), 
[DFGReader.StrDFPostGeometry](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_StrDFPostGeometry), 
[DFGReader.StrFlexBody](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_StrFlexBody), 
[DFGReader.StrModalBody](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_StrModalBody), 
[DFGReader.StrRigidBody](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_StrRigidBody), 
[DFGReader.GenerateBeamGroupGeometryData\(MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_GenerateBeamGroupGeometryData\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.GenerateFEBeamGroupGeometryData\(MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_GenerateFEBeamGroupGeometryData\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.GenerateGeneralMarkerGeometryData\(MetaInfo\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_GenerateGeneralMarkerGeometryData\_VM\_Models\_Post\_MetaInfo\_), 
[DFGReader.GenerateSeaLevelGeometryData\(MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_GenerateSeaLevelGeometryData\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.GenerateSpringGeometryData\(MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_GenerateSpringGeometryData\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.ReadGeometry\(string, MetaInfo\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadGeometry\_System\_String\_VM\_Models\_Post\_MetaInfo\_), 
[DFGReader.ReadFileVersion\(ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadFileVersion\_System\_Int32\_\_), 
[DFGReader.GetElementNode\(ElementType\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_GetElementNode\_VM\_Models\_Post\_ElementType\_), 
[DFGReader.ReadColorInfo\(ref int, MetaInfo\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadColorInfo\_System\_Int32\_\_VM\_Models\_Post\_MetaInfo\_), 
[DFGReader.ReadElementInfo\(MetaInfo, ref int, int, ElementType, BodyBase, ref Dictionary<ElementType, Tuple<int\[\], uint\[\], int\[\]\>\>\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadElementInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_System\_Int32\_VM\_Models\_Post\_ElementType\_VM\_Models\_Post\_Bodies\_BodyBase\_System\_Collections\_Generic\_Dictionary\_VM\_Models\_Post\_ElementType\_System\_Tuple\_System\_Int32\_\_\_System\_UInt32\_\_\_System\_Int32\_\_\_\_\_\_), 
[DFGReader.ReadFlexElementGroup\(MetaInfo, ref int, BodyBase\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadFlexElementGroup\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_VM\_Models\_Post\_Bodies\_BodyBase\_), 
[DFGReader.ReadModalGeometryData\(ref int, MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadModalGeometryData\_System\_Int32\_\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.ReadNodalGeometryData\(ref int, MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadNodalGeometryData\_System\_Int32\_\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.ReadRigidGeometryData\(ref int, MetaInfo, ref int\)](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_ReadRigidGeometryData\_System\_Int32\_\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_\_), 
[DFGReader.AllBytes](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_AllBytes), 
[DFGReader.MajorVersion](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_MajorVersion), 
[DFGReader.MinorVersion](VM.Models.Post.DataSource.DFGReader.md\#VM\_Models\_Post\_DataSource\_DFGReader\_MinorVersion), 
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

### <a id="VM_Models_Post_DataSource_DFGReader24__ctor"></a> DFGReader24\(\)

```csharp
public DFGReader24()
```

