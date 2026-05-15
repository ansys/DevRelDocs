# Class RadkDatabase

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Dataset representing data stored in a radk database.

```csharp
public sealed class RadkDatabase : IDisposable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadkDatabase](OpenTD.Results.Dataset.RadkDatabase.md)

## Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### RadkDatabase\(string, uint, int?\)

```csharp
public RadkDatabase(string radkPathName, uint position = 0, int? band = null)
```

#### Parameters

`radkPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`position` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`band` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Properties

### Band

```csharp
public int? Band { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### Position

```csharp
public uint Position { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### \~RadkDatabase\(\)

```csharp
protected ~RadkDatabase()
```

### GetBijFromNode\(string, IEnumerable<string\>\)

The radk (Bij) result from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetBijFromNode(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetBijInactiveSum\(IEnumerable<string\>\)

The sum of all radks for each inactive node name provided

```csharp
public DataArray GetBijInactiveSum(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetBijSum\(IEnumerable<string\>\)

The sum of all radks for each node name provided

```csharp
public DataArray GetBijSum(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetBijToSpace\(IEnumerable<string\>\)

The Bij (radk) to space per volume for the nodes provided

```csharp
public DataArray GetBijToSpace(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetExchangeFactorFromNode\(string, IEnumerable<string\>\)

The exchange factor from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetExchangeFactorFromNode(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetExchangeFactorFromNodePerAreaJ\(string, IEnumerable<string\>\)

The exchange factor per area from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetExchangeFactorFromNodePerAreaJ(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetExchangeFactorFromNodePerVolume\(string, IEnumerable<string\>\)

The exchange factor per volume from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetExchangeFactorFromNodePerVolume(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetExchangeFactorToSpace\(IEnumerable<string\>\)

The Exchange Factors (Xij) to space value for the nodes provided

```csharp
public DataArray GetExchangeFactorToSpace(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetExchangeFactorToSpacePerVolume\(IEnumerable<string\>\)

The Exchange Factor (Xij) to space per volume for the nodes provided

```csharp
public DataArray GetExchangeFactorToSpacePerVolume(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetHeatFluxFromNode\(string, IEnumerable<string\>\)

The radk as heat flux result from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetHeatFluxFromNode(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetHeatPerVolumeFromNode\(string, IEnumerable<string\>\)

The radk as heat rate per volume result from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetHeatPerVolumeFromNode(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetHeatRateFromNode\(string, IEnumerable<string\>\)

The radk as heatrate result from one node (i) to multiple nodes (j) declared

```csharp
public DataArray GetHeatRateFromNode(string fromNode, IEnumerable<string> toNodes)
```

#### Parameters

`fromNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The "from" node i

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The target nodes (j) for the exchange factors

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the toNode names provided

### GetHemisphericalEmissivity\(IEnumerable<string\>\)

The Hemispherical Emissivity of the node names provided

```csharp
public DataArray GetHemisphericalEmissivity(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetNumOfRays\(IEnumerable<string\>\)

The number of rays shot for each node name provided

```csharp
public DataArray GetNumOfRays(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided

### GetRadkNodeNames\(\)

Returns all node names in SINDA order, could be useful?

```csharp
public List<string> GetRadkNodeNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetWeightedError\(IEnumerable<string\>\)

THe weighted error for each node name provided

```csharp
public DataArray GetWeightedError(IEnumerable<string> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

array of nodes names to get the results for

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

DataArray of values in the order of the node names provided


