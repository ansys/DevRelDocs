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

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

### LoadRadkDatabase\(string, string, bool\)

With the supplied radk path
This method will generate a radk class instance

```csharp
public static RadkDatabase LoadRadkDatabase(string directoryPath, string fileName, bool isHeatrate)
```

#### Parameters

`directoryPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isHeatrate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [RadkDatabase](OpenTD.Results.Dataset.RadkDatabase.md)

#### Exceptions

 OpenTDException


