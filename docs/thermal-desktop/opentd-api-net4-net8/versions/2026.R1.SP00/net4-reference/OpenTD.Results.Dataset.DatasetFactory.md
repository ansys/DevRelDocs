# Class DatasetFactory

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Use to load various datasets from disk.

```csharp
public static class DatasetFactory
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatasetFactory](OpenTD.Results.Dataset.DatasetFactory.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### Load\(string\)

With the supplied pathname, this method will determine whether
it is a savX, CSR, or sav and return an IDataset that can
be used to access it.

```csharp
public static IDataset Load(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

#### Exceptions

 OpenTDException


