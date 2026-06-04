# Interface ITieInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents tie information.

```csharp
public interface ITieInfo : IObjectInfoBase
```

## Implements

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Properties

### FromNode

```csharp
INodeInfo FromNode { get; }
```

#### Property Value

 [INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)

### Offset

```csharp
int Offset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TieType

```csharp
TieType TieType { get; }
```

#### Property Value

 [TieType](OpenTD.Results.Dataset.Topology.TieType.md)

### ToLump

```csharp
ILumpInfo ToLump { get; }
```

#### Property Value

 [ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)


