# <a id="OpenTD_Results_Dataset_Topology_ITieInfo"></a> Interface ITieInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents tie information.

```csharp
public interface ITieInfo : IObjectInfoBase
```

#### Implements

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Properties

### <a id="OpenTD_Results_Dataset_Topology_ITieInfo_FromNode"></a> FromNode

```csharp
INodeInfo FromNode { get; }
```

#### Property Value

 [INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)

### <a id="OpenTD_Results_Dataset_Topology_ITieInfo_Offset"></a> Offset

```csharp
int Offset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_Topology_ITieInfo_TieType"></a> TieType

```csharp
TieType TieType { get; }
```

#### Property Value

 [TieType](OpenTD.Results.Dataset.Topology.TieType.md)

### <a id="OpenTD_Results_Dataset_Topology_ITieInfo_ToLump"></a> ToLump

```csharp
ILumpInfo ToLump { get; }
```

#### Property Value

 [ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)

## See Also

[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

