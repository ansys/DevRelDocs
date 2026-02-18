# <a id="OpenTD_Results_Dataset_Browser"></a> Class Browser

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Factory for creating a Browser.

```csharp
public static class Browser
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Browser](OpenTD.Results.Dataset.Browser.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTD_Results_Dataset_Browser_Create_OpenTD_Results_Dataset_IDataset_OpenTD_Results_Dataset_Topology_IDatasetTopology_System_Int64_"></a> Create\(IDataset, IDatasetTopology, long\)

Loads an IBrowser.

```csharp
public static IBrowser Create(IDataset dataset, IDatasetTopology datasetTopology, long recordNumber)
```

#### Parameters

`dataset` [IDataset](OpenTD.Results.Dataset.IDataset.md)

The Dataset to browse.

`datasetTopology` [IDatasetTopology](OpenTD.Results.Dataset.Topology.IDatasetTopology.md)

Dataset topology to browse.

`recordNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [IBrowser](OpenTD.Results.Dataset.IBrowser.md)

An IBrowser object

