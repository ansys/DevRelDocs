# Class DataMapper

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Client-side representation of a data mapper in a TD instance.
Implements <xref href="OpenTD.MeshDisplayer" data-throw-if-not-resolved="false"></xref>
Implements <xref href="OpenTD.IUpdatable" data-throw-if-not-resolved="false"></xref>
Implements <xref href="OpenTD.IReassignable" data-throw-if-not-resolved="false"></xref>

```csharp
[MessagePackObject(true)]
public class DataMapper : MeshDisplayer, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[MeshDisplayer](OpenTD.MeshDisplayer.md) ← 
[DataMapper](OpenTD.PostProcessing.DataMapper.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

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
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DataMapper\(\)

```csharp
public DataMapper()
```

## Properties

### AcadGroupName

```csharp
public string AcadGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### AcadGroupNameGrad

```csharp
public string AcadGroupNameGrad { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CreatePoints

```csharp
public int CreatePoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CurrentPPDataset

```csharp
public string CurrentPPDataset { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Enabled

```csharp
public int Enabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EnabledExp

```csharp
public ExpressionData EnabledExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### EndTime

```csharp
public Dimensional<Time> EndTime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### EndTimeExp

```csharp
public ExpressionData EndTimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### InputFile

```csharp
public string InputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InputFileFormat

```csharp
public DataMapper.FileFormats InputFileFormat { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[FileFormats](OpenTD.PostProcessing.DataMapper.FileFormats.md)

### InputFileModelLengthUnits

```csharp
public int InputFileModelLengthUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastReadInputFile

```csharp
public string LastReadInputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LastReadPatranNeutralFile

```csharp
public string LastReadPatranNeutralFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LastReadTimeStampInputFile

```csharp
public string LastReadTimeStampInputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LastReadTimeStampPatranNeutralFile

```csharp
public string LastReadTimeStampPatranNeutralFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LoadGroupsFromPatran

```csharp
public int LoadGroupsFromPatran { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapBeams

```csharp
public int MapBeams { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapConstantOrVariableTol

```csharp
public int MapConstantOrVariableTol { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapCurrentAllOrSelectedPP

```csharp
public int MapCurrentAllOrSelectedPP { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapObjectsOption

```csharp
public DataMapper.MapObjectsOptions MapObjectsOption { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[MapObjectsOptions](OpenTD.PostProcessing.DataMapper.MapObjectsOptions.md)

### MapObjectsOptionGrad

```csharp
public DataMapper.MapObjectsOptions MapObjectsOptionGrad { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[MapObjectsOptions](OpenTD.PostProcessing.DataMapper.MapObjectsOptions.md)

### MapOutputGradients

```csharp
public int MapOutputGradients { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapTolerance

```csharp
public double MapTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MapToleranceArray

```csharp
public DimensionalList<ModelLength> MapToleranceArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### MapUnspecifiedGroupsToAllEntities

```csharp
public int MapUnspecifiedGroupsToAllEntities { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapUnspecifiedGroupsToAllEntitiesGrad

```csharp
public int MapUnspecifiedGroupsToAllEntitiesGrad { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxTolerance

```csharp
public Dimensional<ModelLength> MaxTolerance { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### MaxToleranceExp

```csharp
public ExpressionData MaxToleranceExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputFile

```csharp
public string OutputFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputFileFormat

```csharp
public DataMapper.FileFormats OutputFileFormat { get; set; }
```

#### Property Value

 [DataMapper](OpenTD.PostProcessing.DataMapper.md).[FileFormats](OpenTD.PostProcessing.DataMapper.FileFormats.md)

### PatranNeutralFile

```csharp
public string PatranNeutralFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReadInModelLengthUnits

```csharp
public int ReadInModelLengthUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedTimesForMapping

```csharp
public List<int> SelectedTimesForMapping { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### SingleOrMultipleFiles

```csharp
public int SingleOrMultipleFiles { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartTime

```csharp
public Dimensional<Time> StartTime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### StartTimeExp

```csharp
public ExpressionData StartTimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TempDeltaK

```csharp
public Dimensional<Temp> TempDeltaK { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### TempDeltaKExp

```csharp
public ExpressionData TempDeltaKExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TrackMultiMapTempDiff

```csharp
public int TrackMultiMapTempDiff { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseAdvancedMapMethod

```csharp
public int UseAdvancedMapMethod { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseStructuralThicknessForGradientCalcs

```csharp
public int UseStructuralThicknessForGradientCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseUCS

```csharp
[IgnoreMember]
public bool UseUCS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### Map\(\)

```csharp
public void Map()
```

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[MeshDisplayer](OpenTD.MeshDisplayer.md), 
[IUpdatable](OpenTD.IUpdatable.md), 
IReassignable


