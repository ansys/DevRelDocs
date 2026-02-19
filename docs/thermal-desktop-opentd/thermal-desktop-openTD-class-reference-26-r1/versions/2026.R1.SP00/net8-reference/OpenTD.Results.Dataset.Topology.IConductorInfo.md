# Interface IConductorInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents conductor information.

```csharp
public interface IConductorInfo : IObjectInfoBase
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

### IsRad

Checks if this is a radiation conductor.

```csharp
bool IsRad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Offset

```csharp
int Offset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToNode

```csharp
INodeInfo ToNode { get; }
```

#### Property Value

 [INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)


