# <a id="OpenTD_Results_Dataset_Topology_INodeInfo"></a> Interface INodeInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents node information.

```csharp
public interface INodeInfo : IObjectInfoBase
```

#### Implements

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Properties

### <a id="OpenTD_Results_Dataset_Topology_INodeInfo_Conductors"></a> Conductors

```csharp
IEnumerable<IConductorInfo> Conductors { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_INodeInfo_NodeType"></a> NodeType

```csharp
NodeType NodeType { get; }
```

#### Property Value

 [NodeType](OpenTD.Results.Dataset.Topology.NodeType.md)

### <a id="OpenTD_Results_Dataset_Topology_INodeInfo_Offset"></a> Offset

```csharp
int Offset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_Topology_INodeInfo_Ties"></a> Ties

```csharp
IEnumerable<ITieInfo> Ties { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)\>

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

