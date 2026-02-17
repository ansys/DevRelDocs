# <a id="OpenTD_Results_Dataset_RadkDatabase"></a> Class RadkDatabase

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Dataset representing data stored in a radk database.

```csharp
public sealed class RadkDatabase : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadkDatabase](OpenTD.Results.Dataset.RadkDatabase.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_RadkDatabase__ctor_System_String_System_UInt32_System_Nullable_System_Int32__"></a> RadkDatabase\(string, uint, int?\)

```csharp
public RadkDatabase(string radkPathName, uint position = 0, int? band = null)
```

#### Parameters

`radkPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`position` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`band` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Properties

### <a id="OpenTD_Results_Dataset_RadkDatabase_Band"></a> Band

```csharp
public int? Band { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="OpenTD_Results_Dataset_RadkDatabase_Position"></a> Position

```csharp
public uint Position { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="OpenTD_Results_Dataset_RadkDatabase_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="OpenTD_Results_Dataset_RadkDatabase_Finalize"></a> \~RadkDatabase\(\)

```csharp
protected ~RadkDatabase()
```

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetBijFromNode_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetBijFromNode\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetBijInactiveSum_System_Collections_Generic_IEnumerable_System_String__"></a> GetBijInactiveSum\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetBijSum_System_Collections_Generic_IEnumerable_System_String__"></a> GetBijSum\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetBijToSpace_System_Collections_Generic_IEnumerable_System_String__"></a> GetBijToSpace\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetExchangeFactorFromNode_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetExchangeFactorFromNode\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetExchangeFactorFromNodePerAreaJ_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetExchangeFactorFromNodePerAreaJ\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetExchangeFactorFromNodePerVolume_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetExchangeFactorFromNodePerVolume\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetExchangeFactorToSpace_System_Collections_Generic_IEnumerable_System_String__"></a> GetExchangeFactorToSpace\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetExchangeFactorToSpacePerVolume_System_Collections_Generic_IEnumerable_System_String__"></a> GetExchangeFactorToSpacePerVolume\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetHeatFluxFromNode_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetHeatFluxFromNode\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetHeatPerVolumeFromNode_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetHeatPerVolumeFromNode\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetHeatRateFromNode_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> GetHeatRateFromNode\(string, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetHemisphericalEmissivity_System_Collections_Generic_IEnumerable_System_String__"></a> GetHemisphericalEmissivity\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetNumOfRays_System_Collections_Generic_IEnumerable_System_String__"></a> GetNumOfRays\(IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetRadkNodeNames"></a> GetRadkNodeNames\(\)

Returns all node names in SINDA order, could be useful?

```csharp
public List<string> GetRadkNodeNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_RadkDatabase_GetWeightedError_System_Collections_Generic_IEnumerable_System_String__"></a> GetWeightedError\(IEnumerable<string\>\)

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

