# Interface ILumpInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents lump information.

```csharp
public interface ILumpInfo : IObjectInfoBase
```

## Implements

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Properties

### FTies

```csharp
IEnumerable<IFTieInfo> FTies { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IFTieInfo](OpenTD.Results.Dataset.Topology.IFTieInfo.md)\>

### IFaces

```csharp
IEnumerable<IIFaceInfo> IFaces { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IIFaceInfo](OpenTD.Results.Dataset.Topology.IIFaceInfo.md)\>

### LumpType

```csharp
LumpType LumpType { get; }
```

#### Property Value

 [LumpType](OpenTD.Results.Dataset.Topology.LumpType.md)

### Paths

```csharp
IEnumerable<IPathInfo> Paths { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IPathInfo](OpenTD.Results.Dataset.Topology.IPathInfo.md)\>

### Ties

```csharp
IEnumerable<ITieInfo> Ties { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)\>

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)


