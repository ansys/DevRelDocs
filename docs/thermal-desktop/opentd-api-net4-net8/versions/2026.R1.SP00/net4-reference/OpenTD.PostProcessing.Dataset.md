# Class Dataset

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Client-side representation of a dataset (solution results) in a TD instance.

```csharp
[DataContract]
public class Dataset : UniqueNameObject, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[UniqueNameObject](OpenTD.UniqueNameObject.md) ← 
[Dataset](OpenTD.PostProcessing.Dataset.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[UniqueNameObject.Name](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_Name), 
[UniqueNameObject.Rename\(string\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_Rename\_System\_String\_), 
[UniqueNameObject.ToString\(\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_ToString), 
[UniqueNameObject.ModifyName\(string\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_ModifyName\_System\_String\_), 
[UniqueNameObject.ProxyRename\(string, string\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_ProxyRename\_System\_String\_System\_String\_), 
[UniqueNameObject.\_n](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_\_n), 
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

### Dataset\(\)

```csharp
public Dataset()
```

## Properties

### AdditionalInfo

Type-specific information about the dataset.

```csharp
[DataMember]
public AdditionalDatasetInfoHolder AdditionalInfo { get; set; }
```

#### Property Value

 AdditionalDatasetInfoHolder

### Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CurrentTimeIndex

Set this to choose what timestep/record will be displayed when post-processed.

```csharp
[DataMember]
public int CurrentTimeIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OffsetTime

```csharp
[DataMember]
public Dimensional<Time> OffsetTime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### OffsetTimeExp

```csharp
[DataMember]
public ExpressionData OffsetTimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### OrbitName

```csharp
[DataMember]
public string OrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Pathname

```csharp
public string Pathname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PlotMLINodes

```csharp
[DataMember]
public Dataset.PlotMliNodes PlotMLINodes { get; set; }
```

#### Property Value

 [Dataset](OpenTD.PostProcessing.Dataset.md).[PlotMliNodes](OpenTD.PostProcessing.Dataset.PlotMliNodes.md)

### SmartColorBarCycle

```csharp
[DataMember]
public int SmartColorBarCycle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SourceType

Read only. The type of dataset. For example, SF for Sinda results.

```csharp
[DataMember]
public Dataset.DataSourceTypes SourceType { get; set; }
```

#### Property Value

 [Dataset](OpenTD.PostProcessing.Dataset.md).[DataSourceTypes](OpenTD.PostProcessing.Dataset.DataSourceTypes.md)

### Times

Read only. Time values associated with each timestep/record in the dataset,
in the current WorkingUnits.

```csharp
[DataMember]
public DimensionalList<Time> Times { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### UseOrbit

```csharp
[DataMember]
public int UseOrbit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### ProxyRename\(string, string\)

```csharp
protected override void ProxyRename(string from, string to)
```

#### Parameters

`from` [string](https://learn.microsoft.com/dotnet/api/system.string)

`to` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetCurrent\(\)

```csharp
public void SetCurrent()
```

### ShowContourPlot\(\)

```csharp
public void ShowContourPlot()
```

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### TrySetCurrentTimeIndex\(double, double\)

Use this to indirectly set CurrentTimeIndex by specifying a time in the
current WorkingUnits. Returns true if able to find a time in Times
within the percent tolerance specified (defaults to 1%).

```csharp
public bool TrySetCurrentTimeIndex(double time, double percentTolerance = 1)
```

#### Parameters

`time` [double](https://learn.microsoft.com/dotnet/api/system.double)

`percentTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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


