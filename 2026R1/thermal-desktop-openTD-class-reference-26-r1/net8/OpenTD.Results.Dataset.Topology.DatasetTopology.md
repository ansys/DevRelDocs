# <a id="OpenTD_Results_Dataset_Topology_DatasetTopology"></a> Class DatasetTopology

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Factory for creating Dataset topologies.

```csharp
public static class DatasetTopology
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatasetTopology](OpenTD.Results.Dataset.Topology.DatasetTopology.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTD_Results_Dataset_Topology_DatasetTopology_Load_OpenTD_Results_Dataset_IDataset_System_Int64_System_String_"></a> Load\(IDataset, long, string\)

Loads an IDatasetTopology.

```csharp
public static IDatasetTopology Load(IDataset dataset, long datasetRecordNumber, string pcsPath = null)
```

#### Parameters

`dataset` [IDataset](OpenTD.Results.Dataset.IDataset.md)

The Dataset corresponding to the PCS file.

`datasetRecordNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The Dataset record number for the topology.

`pcsPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the PCS file. Ignored for savex datasets.

#### Returns

 [IDatasetTopology](OpenTD.Results.Dataset.Topology.IDatasetTopology.md)

An IDatasetTopology object

#### Exceptions

 OpenTDException

Unable to parse or read PCS file.

