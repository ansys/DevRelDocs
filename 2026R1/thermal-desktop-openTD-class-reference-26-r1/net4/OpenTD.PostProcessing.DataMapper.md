# <a id="OpenTD_PostProcessing_DataMapper"></a> Class DataMapper

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Client-side representation of a data mapper in a TD instance.
Implements <xref href="OpenTD.MeshDisplayer" data-throw-if-not-resolved="false"></xref>
Implements <xref href="OpenTD.IUpdatable" data-throw-if-not-resolved="false"></xref>
Implements <xref href="OpenTD.IReassignable" data-throw-if-not-resolved="false"></xref>

```csharp
[DataContract]
public class DataMapper : MeshDisplayer, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[MeshDisplayer](OpenTD.MeshDisplayer.md) ← 
[DataMapper](OpenTD.PostProcessing.DataMapper.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[MeshDisplayer.LocalToWorldTransformation](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_LocalToWorldTransformation), 
[MeshDisplayer.TransformBy\(Matrix3d\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_TransformBy\_OpenTD\_Matrix3d\_), 
[MeshDisplayer.BaseTrans](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_BaseTrans), 
[MeshDisplayer.PostProcessingDisplayMode](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_PostProcessingDisplayMode), 
[MeshDisplayer.ModelViewDisplayMode](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_ModelViewDisplayMode), 
[MeshDisplayer.Label](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_Label), 
[MeshDisplayer.StressThermalGroupMap](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_StressThermalGroupMap), 
[MeshDisplayer.SetThermalStressAssociation\(string, string\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_SetThermalStressAssociation\_System\_String\_System\_String\_), 
[MeshDisplayer.SetThermalStressGradAssociation\(string, string\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_SetThermalStressGradAssociation\_System\_String\_System\_String\_), 
[MeshDisplayer.GetThermalStressAssociations\(\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_GetThermalStressAssociations), 
[TdDbEntityData.SetFrom\(TdDbEntityData\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_SetFrom\_OpenTD\_TdDbEntityData\_), 
[TdDbEntityData.Layer](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_Layer), 
[TdDbEntityData.ColorIndex](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ColorIndex), 
[TdDbEntityData.ToString\(string, string, string\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString\_System\_String\_System\_String\_System\_String\_), 
[TdDbEntityData.ToString\(string, int, string\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString\_System\_String\_System\_Int32\_System\_String\_), 
[TdDbEntityData.ToString\(\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString), 
[DbObject.SetFrom\(DbObject\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_SetFrom\_OpenTD\_DbObject\_), 
[DbObject.Update\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_Update), 
[DbObject.UpdateFromTD\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_UpdateFromTD), 
[DbObject.CreateIn\(ThermalDesktop\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[DbObject.Handle](OpenTD.DbObject.md\#OpenTD\_DbObject\_Handle), 
[DbObject.TypeName](OpenTD.DbObject.md\#OpenTD\_DbObject\_TypeName), 
[DbObject.Equals\(object\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_Equals\_System\_Object\_), 
[DbObject.GetHashCode\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_GetHashCode), 
[OpenTDObject.SetFrom\(OpenTDObject\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_SetFrom\_OpenTD\_OpenTDObject\_), 
[OpenTDObject.Update\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_Update), 
[OpenTDObject.UpdateFromTD\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateFromTD), 
[OpenTDObject.UpdateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.CreateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.TdProxy](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_TdProxy), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_PostProcessing_DataMapper__ctor"></a> DataMapper\(\)

```csharp
public DataMapper()
```

## Properties

### <a id="OpenTD_PostProcessing_DataMapper_AcadGroupName"></a> AcadGroupName

```csharp
[DataMember]
public string AcadGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_AcadGroupNameGrad"></a> AcadGroupNameGrad

```csharp
[DataMember]
public string AcadGroupNameGrad { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_CreatePoints"></a> CreatePoints

```csharp
[DataMember]
public int CreatePoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_CurrentPPDataset"></a> CurrentPPDataset

```csharp
[DataMember]
public string CurrentPPDataset { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_Enabled"></a> Enabled

```csharp
[DataMember]
public int Enabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_EnabledExp"></a> EnabledExp

```csharp
[DataMember]
public ExpressionData EnabledExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_PostProcessing_DataMapper_EndTime"></a> EndTime

```csharp
[DataMember]
public Dimensional<Time> EndTime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_PostProcessing_DataMapper_EndTimeExp"></a> EndTimeExp

```csharp
[DataMember]
public ExpressionData EndTimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_PostProcessing_DataMapper_InputFile"></a> InputFile

```csharp
[DataMember]
public string InputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_InputFileFormat"></a> InputFileFormat

```csharp
[DataMember]
public DataMapper.FileFormats InputFileFormat { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[FileFormats](OpenTD.PostProcessing.DataMapper.FileFormats.md)

### <a id="OpenTD_PostProcessing_DataMapper_InputFileModelLengthUnits"></a> InputFileModelLengthUnits

```csharp
[DataMember]
public int InputFileModelLengthUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_LastReadInputFile"></a> LastReadInputFile

```csharp
[DataMember]
public string LastReadInputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_LastReadPatranNeutralFile"></a> LastReadPatranNeutralFile

```csharp
[DataMember]
public string LastReadPatranNeutralFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_LastReadTimeStampInputFile"></a> LastReadTimeStampInputFile

```csharp
[DataMember]
public string LastReadTimeStampInputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_LastReadTimeStampPatranNeutralFile"></a> LastReadTimeStampPatranNeutralFile

```csharp
[DataMember]
public string LastReadTimeStampPatranNeutralFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_LoadGroupsFromPatran"></a> LoadGroupsFromPatran

```csharp
[DataMember]
public int LoadGroupsFromPatran { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MapBeams"></a> MapBeams

```csharp
[DataMember]
public int MapBeams { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MapConstantOrVariableTol"></a> MapConstantOrVariableTol

```csharp
[DataMember]
public int MapConstantOrVariableTol { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MapCurrentAllOrSelectedPP"></a> MapCurrentAllOrSelectedPP

```csharp
[DataMember]
public int MapCurrentAllOrSelectedPP { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MapObjectsOption"></a> MapObjectsOption

```csharp
[DataMember]
public DataMapper.MapObjectsOptions MapObjectsOption { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[MapObjectsOptions](OpenTD.PostProcessing.DataMapper.MapObjectsOptions.md)

### <a id="OpenTD_PostProcessing_DataMapper_MapObjectsOptionGrad"></a> MapObjectsOptionGrad

```csharp
[DataMember]
public DataMapper.MapObjectsOptions MapObjectsOptionGrad { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[MapObjectsOptions](OpenTD.PostProcessing.DataMapper.MapObjectsOptions.md)

### <a id="OpenTD_PostProcessing_DataMapper_MapOutputGradients"></a> MapOutputGradients

```csharp
[DataMember]
public int MapOutputGradients { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MapTolerance"></a> MapTolerance

```csharp
[DataMember]
public double MapTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_PostProcessing_DataMapper_MapToleranceArray"></a> MapToleranceArray

```csharp
[DataMember]
public DimensionalList<ModelLength> MapToleranceArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_PostProcessing_DataMapper_MapUnspecifiedGroupsToAllEntities"></a> MapUnspecifiedGroupsToAllEntities

```csharp
[DataMember]
public int MapUnspecifiedGroupsToAllEntities { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MapUnspecifiedGroupsToAllEntitiesGrad"></a> MapUnspecifiedGroupsToAllEntitiesGrad

```csharp
[DataMember]
public int MapUnspecifiedGroupsToAllEntitiesGrad { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_MaxTolerance"></a> MaxTolerance

```csharp
[DataMember]
public Dimensional<ModelLength> MaxTolerance { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_PostProcessing_DataMapper_MaxToleranceExp"></a> MaxToleranceExp

```csharp
[DataMember]
public ExpressionData MaxToleranceExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_PostProcessing_DataMapper_Name"></a> Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_OutputFile"></a> OutputFile

```csharp
[DataMember]
public string OutputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_OutputFileFormat"></a> OutputFileFormat

```csharp
[DataMember]
public DataMapper.FileFormats OutputFileFormat { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[FileFormats](OpenTD.PostProcessing.DataMapper.FileFormats.md)

### <a id="OpenTD_PostProcessing_DataMapper_PatranNeutralFile"></a> PatranNeutralFile

```csharp
[DataMember]
public string PatranNeutralFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_DataMapper_ReadInModelLengthUnits"></a> ReadInModelLengthUnits

```csharp
[DataMember]
public int ReadInModelLengthUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_SelectedTimesForMapping"></a> SelectedTimesForMapping

```csharp
[DataMember]
public List<int> SelectedTimesForMapping { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_PostProcessing_DataMapper_SingleOrMultipleFiles"></a> SingleOrMultipleFiles

```csharp
[DataMember]
public int SingleOrMultipleFiles { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_StartTime"></a> StartTime

```csharp
[DataMember]
public Dimensional<Time> StartTime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_PostProcessing_DataMapper_StartTimeExp"></a> StartTimeExp

```csharp
[DataMember]
public ExpressionData StartTimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_PostProcessing_DataMapper_TempDeltaK"></a> TempDeltaK

```csharp
[DataMember]
public Dimensional<Temp> TempDeltaK { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_PostProcessing_DataMapper_TempDeltaKExp"></a> TempDeltaKExp

```csharp
[DataMember]
public ExpressionData TempDeltaKExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_PostProcessing_DataMapper_TrackMultiMapTempDiff"></a> TrackMultiMapTempDiff

```csharp
[DataMember]
public int TrackMultiMapTempDiff { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_UseAdvancedMapMethod"></a> UseAdvancedMapMethod

```csharp
[DataMember]
public int UseAdvancedMapMethod { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_UseStructuralThicknessForGradientCalcs"></a> UseStructuralThicknessForGradientCalcs

```csharp
[DataMember]
public int UseStructuralThicknessForGradientCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_DataMapper_UseUCS"></a> UseUCS

```csharp
public bool UseUCS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTD_PostProcessing_DataMapper_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_PostProcessing_DataMapper_Map"></a> Map\(\)

```csharp
public void Map()
```

### <a id="OpenTD_PostProcessing_DataMapper_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_PostProcessing_DataMapper_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[MeshDisplayer](OpenTD.MeshDisplayer.md), 
[IUpdatable](OpenTD.IUpdatable.md), 
IReassignable

