# <a id="VM_Models_Post_DataSource_DFMReader23"></a> Class DFMReader23

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DFMReader23 : DFMReader, IDFMReader, IDFMInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[DFMReader](VM.Models.Post.DataSource.DFMReader.md) ← 
[DFMReader23](VM.Models.Post.DataSource.DFMReader23.md)

#### Implements

IDFMReader, 
IDFMInfo

#### Inherited Members

[DFMReader.VectorDisplayActionForceName](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_VectorDisplayActionForceName), 
[DFMReader.ReadAssembly\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadAssembly\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadBC\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadBC\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadBeamGroup\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadBeamGroup\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadBodyType\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadBodyType\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadChainedSystem\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadChainedSystem\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.BuildBodyConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildBodyConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildConstraintConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildConstraintConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildContactConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildContactConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildControlConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildControlConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildEFEntityConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildEFEntityConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildEquationConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildEquationConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildForceConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildForceConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildFrequencyResponseConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildFrequencyResponseConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildFunctionConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildFunctionConfiguration\_System\_Int32\_\_\_), 
[DFMReader.BuildRequestConfiguration\(int\[\]\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildRequestConfiguration\_System\_Int32\_\_\_), 
[DFMReader.ReadConfiguration\(string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadConfiguration\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadContactModel\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadContactModel\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.BuildModels\(ResultDocument, string, IDFRReader, Identifier\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildModels\_VM\_Models\_Post\_ResultDocument\_System\_String\_VM\_Models\_Post\_IDFRReader\_VM\_Identifier\_), 
[DFMReader.CreateMetaInfo\(ResultDocument, Identifier\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_CreateMetaInfo\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_), 
[DFMReader.ReadHeaderInfo\(ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadHeaderInfo\_System\_Int32\_\_), 
[DFMReader.SetRepotableVectorDisplayCharacteristics\(MetaInfo\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_SetRepotableVectorDisplayCharacteristics\_VM\_Models\_Post\_MetaInfo\_), 
[DFMReader.SetUserDefinedVectorDisplayCharacteristics\(MetaInfo\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_SetUserDefinedVectorDisplayCharacteristics\_VM\_Models\_Post\_MetaInfo\_), 
[DFMReader.SetVectorDisplayCharacteristics\(MetaInfo\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_SetVectorDisplayCharacteristics\_VM\_Models\_Post\_MetaInfo\_), 
[DFMReader.UpdateAllParametersToModel\(MetaInfo\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_UpdateAllParametersToModel\_VM\_Models\_Post\_MetaInfo\_), 
[DFMReader.UpdateParts\(MetaInfo\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_UpdateParts\_VM\_Models\_Post\_MetaInfo\_), 
[DFMReader.GetAbsolutePath\(string, string\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_GetAbsolutePath\_System\_String\_System\_String\_), 
[DFMReader.ReadDriveTrain\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadDriveTrain\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadEigenvalueAnalysis\(MetaInfo, IDFRReader, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadEigenvalueAnalysis\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IDFRReader\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadElementSet\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadElementSet\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.CreateObjectInfo\(ObjectType, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_CreateObjectInfo\_VM\_Models\_Post\_ObjectType\_System\_Int32\_\_), 
[DFMReader.GetPartIndex\(IEnumerable<BodyBase\>, int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_GetPartIndex\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_Bodies\_BodyBase\_\_System\_Int32\_), 
[DFMReader.ReadEntity\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadEntity\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.SetObjectInfo\(ObjectInfo, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_SetObjectInfo\_VM\_Models\_Post\_ObjectInfo\_System\_Int32\_\_), 
[DFMReader.SetParentIndexes\(IEnumerable<BodyBase\>, IEnumerable<ConnectorBase\>\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_SetParentIndexes\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_Bodies\_BodyBase\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_ConnectorBase\_\_), 
[DFMReader.ReadFEMaterial\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadFEMaterial\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadFEProperty\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadFEProperty\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadFRA\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadFRA\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadMarker\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadMarker\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadNamedSelection\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadNamedSelection\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadNodalOutput\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadNodalOutput\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadReportableUserSubroutine\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadReportableUserSubroutine\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadRequest\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadRequest\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadRoad\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadRoad\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadSeaLevel\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadSeaLevel\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadSpline\(ResultDocument, Identifier, MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadSpline\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadSpring\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadSpring\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.ReadUnit\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadUnit\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.BuildSystemUnit\(MetaInfo, IDictionary<string, double\>\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BuildSystemUnit\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IDictionary\_System\_String\_System\_Double\_\_), 
[DFMReader.ReadUserDefinedVector\(MetaInfo, string, ref int\)](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ReadUserDefinedVector\_VM\_Models\_Post\_MetaInfo\_System\_String\_System\_Int32\_\_), 
[DFMReader.BodyCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BodyCounts), 
[DFMReader.ConstraintCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ConstraintCounts), 
[DFMReader.ContactCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ContactCounts), 
[DFMReader.ControlCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ControlCounts), 
[DFMReader.EFEntityCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_EFEntityCounts), 
[DFMReader.EquationCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_EquationCounts), 
[DFMReader.ForceCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ForceCounts), 
[DFMReader.FrequencyResponseCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_FrequencyResponseCounts), 
[DFMReader.FunctionCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_FunctionCounts), 
[DFMReader.RequestCounts](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_RequestCounts), 
[DFMReader.Version](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_Version), 
[DFMReader.AllBytes](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_AllBytes), 
[DFMReader.BCInfos](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BCInfos), 
[DFMReader.BlockInfos](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BlockInfos), 
[DFMReader.Bodies](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_Bodies), 
[DFMReader.BodyTypes](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_BodyTypes), 
[DFMReader.ContactModelInfos](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ContactModelInfos), 
[DFMReader.DummyCount](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_DummyCount), 
[DFMReader.ModelNamePrefix](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_ModelNamePrefix), 
[DFMReader.NodeSets](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NodeSets), 
[DFMReader.NumBodyType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumBodyType), 
[DFMReader.NumConstraintType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumConstraintType), 
[DFMReader.NumContactType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumContactType), 
[DFMReader.NumControlType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumControlType), 
[DFMReader.NumEFEntityType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumEFEntityType), 
[DFMReader.NumEquationType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumEquationType), 
[DFMReader.NumForceType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumForceType), 
[DFMReader.NumFrequencyResponseType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumFrequencyResponseType), 
[DFMReader.NumFunctionType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumFunctionType), 
[DFMReader.NumRequestType](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NumRequestType), 
[DFMReader.RequestObjects](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_RequestObjects), 
[DFMReader.SpringInfos](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_SpringInfos), 
[DFMReader.TSpringDamperCount](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_TSpringDamperCount), 
[DFMReader.Units](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_Units), 
[DFMReader.UserDefinedVectorEntityInfos](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_UserDefinedVectorEntityInfos), 
[DFMReader.Markers](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_Markers), 
[DFMReader.UserDefinedVectorIndexes](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_UserDefinedVectorIndexes), 
[DFMReader.NUM\_OF\_FIXJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_FIXJOINT\_RESULT), 
[DFMReader.NUM\_OF\_REVJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_REVJOINT\_RESULT), 
[DFMReader.NUM\_OF\_TRAJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_TRAJOINT\_RESULT), 
[DFMReader.NUM\_OF\_SCRJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_SCRJOINT\_RESULT), 
[DFMReader.NUM\_OF\_CYLJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_CYLJOINT\_RESULT), 
[DFMReader.NUM\_OF\_UNIJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_UNIJOINT\_RESULT), 
[DFMReader.NUM\_OF\_COVJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_COVJOINT\_RESULT), 
[DFMReader.NUM\_OF\_PLAJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_PLAJOINT\_RESULT), 
[DFMReader.NUM\_OF\_BALJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_BALJOINT\_RESULT), 
[DFMReader.NUM\_OF\_ORIJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_ORIJOINT\_RESULT), 
[DFMReader.NUM\_OF\_PARJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_PARJOINT\_RESULT), 
[DFMReader.NUM\_OF\_INLJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_INLJOINT\_RESULT), 
[DFMReader.NUM\_OF\_PERJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_PERJOINT\_RESULT), 
[DFMReader.NUM\_OF\_INPJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_INPJOINT\_RESULT), 
[DFMReader.NUM\_OF\_DISJOINT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_DISJOINT\_RESULT), 
[DFMReader.NUM\_OF\_PTCV\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_PTCV\_RESULT), 
[DFMReader.NUM\_OF\_CVCV\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_CVCV\_RESULT), 
[DFMReader.NUM\_OF\_PTS\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_PTS\_RESULT), 
[DFMReader.NUM\_OF\_BC\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_BC\_RESULT), 
[DFMReader.NUM\_OF\_CONTACT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_CONTACT\_RESULT), 
[DFMReader.NUM\_OF\_FORCE\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_FORCE\_RESULT), 
[DFMReader.NUM\_OF\_EXTERNAL\_LOAD\_FORCE\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_EXTERNAL\_LOAD\_FORCE\_RESULT), 
[DFMReader.NUM\_OF\_TIRE\_FORCE\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_TIRE\_FORCE\_RESULT), 
[DFMReader.NUM\_OF\_EFENTITY\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_EFENTITY\_RESULT), 
[DFMReader.NUM\_OF\_VARIABLEBLOCK\_CONTACT\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_VARIABLEBLOCK\_CONTACT\_RESULT), 
[DFMReader.NUM\_OF\_VARIABLEBLOCK\_CONTACT\_GAP\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_VARIABLEBLOCK\_CONTACT\_GAP\_RESULT), 
[DFMReader.NUM\_OF\_VARIABLEBLOCK\_EFENTITY\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_VARIABLEBLOCK\_EFENTITY\_RESULT), 
[DFMReader.NUM\_OF\_VARIABLEBLOCK\_FE\_C\_LOAD\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_VARIABLEBLOCK\_FE\_C\_LOAD\_RESULT), 
[DFMReader.NUM\_OF\_VARIABLEBLOCK\_FE\_P\_LOAD\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_VARIABLEBLOCK\_FE\_P\_LOAD\_RESULT), 
[DFMReader.NUM\_OF\_VARIABLEBLOCK\_EXTERNAL\_LOAD\_RESULT](VM.Models.Post.DataSource.DFMReader.md\#VM\_Models\_Post\_DataSource\_DFMReader\_NUM\_OF\_VARIABLEBLOCK\_EXTERNAL\_LOAD\_RESULT), 
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

### <a id="VM_Models_Post_DataSource_DFMReader23__ctor"></a> DFMReader23\(\)

```csharp
public DFMReader23()
```

## Methods

### <a id="VM_Models_Post_DataSource_DFMReader23_SetVectorDisplayCharacteristics_VM_Models_Post_MetaInfo_"></a> SetVectorDisplayCharacteristics\(MetaInfo\)

```csharp
protected override void SetVectorDisplayCharacteristics(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` MetaInfo

