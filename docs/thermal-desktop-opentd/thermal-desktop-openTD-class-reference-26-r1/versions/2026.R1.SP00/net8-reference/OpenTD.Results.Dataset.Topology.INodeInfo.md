# Interface INodeInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents node information.

```csharp
public interface INodeInfo : IObjectInfoBase
```

## Implements

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Properties

### Conductors

```csharp
IEnumerable<IConductorInfo> Conductors { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)\>

### NodeType

```csharp
NodeType NodeType { get; }
```

#### Property Value

 [NodeType](OpenTD.Results.Dataset.Topology.NodeType.md)

### Offset

```csharp
int Offset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Ties

```csharp
IEnumerable<ITieInfo> Ties { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)\>

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)


