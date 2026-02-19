# Class DatasetManager

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Represents the TD Dataset Manager, used to interact with datasets (solution results)
within TD.

```csharp
public class DatasetManager : TdConnected
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[DatasetManager](OpenTD.PostProcessing.DatasetManager.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### DatasetManager\(ThermalDesktop\)

```csharp
public DatasetManager(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### CreateDataset\(string, string, DataSourceTypes\)

Creates a new Dataset using defaults from this TD instance.

```csharp
public Dataset CreateDataset(string name, string pathname, Dataset.DataSourceTypes type = DataSourceTypes.SF)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [Dataset](OpenTD.PostProcessing.Dataset.md).[DataSourceTypes](OpenTD.PostProcessing.Dataset.DataSourceTypes.md)

#### Returns

 [Dataset](OpenTD.PostProcessing.Dataset.md)

#### See Also

[Dataset](OpenTD.PostProcessing.Dataset.md)

### DeleteDataset\(string\)

```csharp
public void DeleteDataset(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetCurrentDataset\(\)

Gets the currently-activated Dataset from this TD instance.

```csharp
public Dataset GetCurrentDataset()
```

#### Returns

 [Dataset](OpenTD.PostProcessing.Dataset.md)

#### See Also

[Dataset](OpenTD.PostProcessing.Dataset.md)

### GetDataset\(string\)

Gets an existing Dataset from this TD instance.

```csharp
public Dataset GetDataset(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Dataset](OpenTD.PostProcessing.Dataset.md)

#### See Also

[Dataset](OpenTD.PostProcessing.Dataset.md)

### GetDatasets\(\)

Gets all the Datasets in this TD instance.

```csharp
public List<Dataset> GetDatasets()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dataset](OpenTD.PostProcessing.Dataset.md)\>

#### See Also

[Dataset](OpenTD.PostProcessing.Dataset.md)

## See Also

[Dataset](OpenTD.PostProcessing.Dataset.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md)


