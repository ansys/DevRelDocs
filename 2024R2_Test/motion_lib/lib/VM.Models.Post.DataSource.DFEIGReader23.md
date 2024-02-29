# <a id="VM_Models_Post_DataSource_DFEIGReader23"></a> Class DFEIGReader23

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFEIGReader23 : DFEIGTextReader, IDFEIGReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFEIGReader](VM.Models.Post.DataSource.DFEIGReader.md) ← 
[DFEIGTextReader](VM.Models.Post.DataSource.DFEIGTextReader.md) ← 
[DFEIGReader23](VM.Models.Post.DataSource.DFEIGReader23.md)

#### Implements

IDFEIGReader

#### Inherited Members

[DFEIGTextReader.PrepareAnimationRawData\(MetaInfo, ModeShapeInfo, FrequenciesInfo, int\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_PrepareAnimationRawData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_), 
[DFEIGTextReader.GetRotationalDeformationsAtEndState\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_GetRotationalDeformationsAtEndState\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_), 
[DFEIGTextReader.ReadFrequencyInfo\(MetaInfo, FrequenciesInfo\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_ReadFrequencyInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_FrequenciesInfo\_), 
[DFEIGTextReader.BuildContentsSize\(MetaInfo\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_BuildContentsSize\_VM\_Models\_Post\_MetaInfo\_), 
[DFEIGTextReader.GetFilePosition\(StreamReader\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_GetFilePosition\_System\_IO\_StreamReader\_), 
[DFEIGTextReader.ReadMarkerParentModeShapes\(MetaInfo, FrequenciesInfo, IList<string\>, IResultMarker\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_ReadMarkerParentModeShapes\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_Post\_IResultMarker\_), 
[DFEIGTextReader.ReadModeShapeForBody\(MetaInfo, int, IBodyBase, ISystemModeShapes, FrequenciesInfo\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_ReadModeShapeForBody\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_IBodyBase\_VM\_Models\_Post\_ISystemModeShapes\_VM\_Models\_Post\_FrequenciesInfo\_), 
[DFEIGTextReader.ReadSystemModeShapes\(MetaInfo, int, ISystemModeShapes, FrequenciesInfo\)](VM.Models.Post.DataSource.DFEIGTextReader.md\#VM\_Models\_Post\_DataSource\_DFEIGTextReader\_ReadSystemModeShapes\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_ISystemModeShapes\_VM\_Models\_Post\_FrequenciesInfo\_), 
[DFEIGReader.LoadModeshapeAnimation\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_LoadModeshapeAnimation\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[DFEIGReader.ReadAdditoryGeometriesModeShapeAnimationData\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadAdditoryGeometriesModeShapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[DFEIGReader.ReadBeamGroupModeShapeAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadBeamGroupModeShapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_Dictionary\_System\_Int32\_VM\_TMatrix\_\_VM\_Models\_Post\_IDataState\_), 
[DFEIGReader.ReadFEBeamGroupModeShapeAnimationData\(MetaInfo, ResultInfo, List<List<TMatrix\[\]\>\>, IDataState\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadFEBeamGroupModeShapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_VM\_TMatrix\_\_\_\_\_VM\_Models\_Post\_IDataState\_), 
[DFEIGReader.ReadModalBodiesModeShapeAnimationData\(MetaInfo, ResultInfo, ModeShapeInfo, FrequenciesInfo, int, IList<IDataState\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadModalBodiesModeShapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[DFEIGReader.ReadNodalBodiesModeShapeAnimationData\(MetaInfo, ResultInfo, FrequenciesInfo, int, IList<IDataState\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadNodalBodiesModeShapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[DFEIGReader.ReadNodesForFEBeamGroupAnimation\(MetaInfo, ResultInfo, IList<IDataState\>, ref List<List<List<TMatrix\[\]\>\>\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadNodesForFEBeamGroupAnimation\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_VM\_TMatrix\_\_\_\_\_\_\_), 
[DFEIGReader.ReadRigidBodiesModeShapeAnimationData\(MetaInfo, ResultInfo, FrequenciesInfo, int, IList<IDataState\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadRigidBodiesModeShapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[DFEIGReader.ReadSpringModeshapeAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadSpringModeshapeAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_Dictionary\_System\_Int32\_VM\_TMatrix\_\_VM\_Models\_Post\_IDataState\_), 
[DFEIGReader.UpdateFEBeamGroupParentsInfo\(MetaInfo, ResultInfo, IList<IDataState\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_UpdateFEBeamGroupParentsInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[DFEIGReader.PrepareAnimationRawData\(MetaInfo, ModeShapeInfo, FrequenciesInfo, int\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_PrepareAnimationRawData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_), 
[DFEIGReader.CalculateInternalScale\(double, double\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_CalculateInternalScale\_System\_Double\_System\_Double\_), 
[DFEIGReader.ReadContourData\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int, ContourMappingType, string, string, IList<IDataState\>, IEnumerable<IEntity\>, bool, List<List<double\[\]\>\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadContourData\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_VM\_Models\_ContourMappingType\_System\_String\_System\_String\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_System\_Boolean\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_\_), 
[DFEIGReader.GetRotationalDeformationsAtEndState\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_GetRotationalDeformationsAtEndState\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_), 
[DFEIGReader.GetRotationalDeformation\(ResultInfo, MetaInfo, ModeShapeInfo, FrequenciesInfo, int, ComponentType, IList<IDataState\>, IEnumerable<IEntity\>, bool, List<List<double\[\]\>\>\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_GetRotationalDeformation\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Int32\_VM\_Models\_ComponentType\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_System\_Boolean\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_\_), 
[DFEIGReader.ReadFrequencyInfo\(ResultDocument, Identifier, MetaInfo, double\[\]\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadFrequencyInfo\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_Double\_\_\_), 
[DFEIGReader.ReadFrequencyInfo\(MetaInfo, FrequenciesInfo\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadFrequencyInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_FrequenciesInfo\_), 
[DFEIGReader.BuildContentsSize\(MetaInfo\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_BuildContentsSize\_VM\_Models\_Post\_MetaInfo\_), 
[DFEIGReader.GetFrameScaleFactor\(int, int\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_GetFrameScaleFactor\_System\_Int32\_System\_Int32\_), 
[DFEIGReader.ReadMarkerParentModeShapes\(MetaInfo, FrequenciesInfo, IList<string\>, IResultMarker\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadMarkerParentModeShapes\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_FrequenciesInfo\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_Post\_IResultMarker\_), 
[DFEIGReader.ReadModeShapeForBody\(MetaInfo, int, IBodyBase, ISystemModeShapes, FrequenciesInfo\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadModeShapeForBody\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_IBodyBase\_VM\_Models\_Post\_ISystemModeShapes\_VM\_Models\_Post\_FrequenciesInfo\_), 
[DFEIGReader.ReadSystemModeShapes\(MetaInfo, int, ISystemModeShapes, FrequenciesInfo\)](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReadSystemModeShapes\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_ISystemModeShapes\_VM\_Models\_Post\_FrequenciesInfo\_), 
[DFEIGReader.FilePath](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_FilePath), 
[DFEIGReader.LargeExtendOfBoundingBox](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_LargeExtendOfBoundingBox), 
[DFEIGReader.InternalTScale](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_InternalTScale), 
[DFEIGReader.InternalRScale](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_InternalRScale), 
[DFEIGReader.ModalRawdataGroup](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ModalRawdataGroup), 
[DFEIGReader.ModalTranslationalSpGroup](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ModalTranslationalSpGroup), 
[DFEIGReader.NodalRawdataGroup](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_NodalRawdataGroup), 
[DFEIGReader.ReferenceframeRawdataGroup](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_ReferenceframeRawdataGroup), 
[DFEIGReader.RigidRawdataGroup](VM.Models.Post.DataSource.DFEIGReader.md\#VM\_Models\_Post\_DataSource\_DFEIGReader\_RigidRawdataGroup), 
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

### <a id="VM_Models_Post_DataSource_DFEIGReader23__ctor"></a> DFEIGReader23\(\)

```csharp
public DFEIGReader23()
```

