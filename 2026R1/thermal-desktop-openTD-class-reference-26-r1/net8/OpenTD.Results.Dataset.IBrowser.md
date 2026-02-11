# <a id="OpenTD_Results_Dataset_IBrowser"></a> Interface IBrowser

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

<code>IBrowser</code> interface providing methods for 
<em>Heatmap</em> and <em>HeatBetween</em> nodes and node collecions.

```csharp
public interface IBrowser
```

## Methods

### <a id="OpenTD_Results_Dataset_IBrowser_GetHeatBetween_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_Topology_INodeInfo__System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_Topology_INodeInfo__"></a> GetHeatBetween\(IEnumerable<INodeInfo\>, IEnumerable<INodeInfo\>\)

Gets the heat between two <code>INodeInfo</code> collections.
Positive for fromNodes -&gt; toNodes.

```csharp
HeatratesBetween GetHeatBetween(IEnumerable<INodeInfo> fromNodes, IEnumerable<INodeInfo> toNodes)
```

#### Parameters

`fromNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)\>

<em>From</em> nodes.

`toNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)\>

<em>To</em> nodes.

#### Returns

 [HeatratesBetween](OpenTD.Results.Dataset.HeatratesBetween.md)

The <code>HeatRatesBetween</code> object with comparison results.

### <a id="OpenTD_Results_Dataset_IBrowser_GetHeatBetween_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_Topology_INodeInfo__System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_Topology_ITieInfo__"></a> GetHeatBetween\(IEnumerable<INodeInfo\>, IEnumerable<ITieInfo\>\)

Gets the heat between a <code>INodeInfo</code> collection and a <code>ITieInfo</code> collection.
Positive for fromNodes -&gt; toTies.

```csharp
HeatratesBetween GetHeatBetween(IEnumerable<INodeInfo> fromNodes, IEnumerable<ITieInfo> toTies)
```

#### Parameters

`fromNodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)\>

<em>From</em> nodes.

`toTies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)\>

<em>To</em> ties.

#### Returns

 [HeatratesBetween](OpenTD.Results.Dataset.HeatratesBetween.md)

The <code>HeatRatesBetween</code> object with comparison results.

### <a id="OpenTD_Results_Dataset_IBrowser_GetHeatBetweenSubmodels_System_String_System_String_"></a> GetHeatBetweenSubmodels\(string, string\)

Gets the heatrates between submodels. Positive for fromSubmodel -&gt; toSubmodel.

```csharp
HeatratesBetween GetHeatBetweenSubmodels(string fromSubmodel, string toSubmodel)
```

#### Parameters

`fromSubmodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

From submodel name. Case insensitive.

`toSubmodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

To submodel name. Case insensitive.

#### Returns

 [HeatratesBetween](OpenTD.Results.Dataset.HeatratesBetween.md)

The <code>HeatRatesBetween</code> object with comparison results.

#### Remarks

At least one of the submodels must be a thermal submodel.

#### Exceptions

 OpenTDException

Thrown if both input submodel name refer to fluid submodels, or if any submodels
don't exist.

### <a id="OpenTD_Results_Dataset_IBrowser_GetHeatMap_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_Topology_INodeInfo__"></a> GetHeatMap\(IEnumerable<INodeInfo\>\)

Gets the collection of <code>NodeHeatrates</code> for each input node.

```csharp
List<NodeHeatrates> GetHeatMap(IEnumerable<INodeInfo> nodes)
```

#### Parameters

`nodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)\>

A collection of <code>INodeInfo</code> 
    objects for which to map heatrates.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[NodeHeatrates](OpenTD.Results.Dataset.NodeHeatrates.md)\>

A collection of <code>NodeHeatrates</code>, one for each of the input nodes.

### <a id="OpenTD_Results_Dataset_IBrowser_GetHeatMap_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_Topology_SindaName__"></a> GetHeatMap\(IEnumerable<SindaName\>\)

Gets the collection of <code>NodeHeatrates</code> corresponding to each input node name.

```csharp
List<NodeHeatrates> GetHeatMap(IEnumerable<SindaName> nodeNames)
```

#### Parameters

`nodeNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)\>

A collection of <code>INodeInfo</code> <code>SindaName</code>s.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[NodeHeatrates](OpenTD.Results.Dataset.NodeHeatrates.md)\>

A collection of <code>NodeHeatrates</code>, one for each of the input node names.

