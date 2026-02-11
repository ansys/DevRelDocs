# <a id="OpenTD_Results_Dataset_NodeHeatrates"></a> Class NodeHeatrates

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Holds a node and heatrates for its connected conductors and ties.

```csharp
public class NodeHeatrates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NodeHeatrates](OpenTD.Results.Dataset.NodeHeatrates.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="OpenTD_Results_Dataset_NodeHeatrates_ConductorHeatrates"></a> ConductorHeatrates

```csharp
public NodeConductorHeatrates ConductorHeatrates { get; }
```

#### Property Value

 [NodeConductorHeatrates](OpenTD.Results.Dataset.NodeConductorHeatrates.md)

### <a id="OpenTD_Results_Dataset_NodeHeatrates_NodeInfo"></a> NodeInfo

```csharp
public INodeInfo NodeInfo { get; }
```

#### Property Value

 [INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)

### <a id="OpenTD_Results_Dataset_NodeHeatrates_TieHeatrates"></a> TieHeatrates

```csharp
public NodeTieHeatrates TieHeatrates { get; }
```

#### Property Value

 [NodeTieHeatrates](OpenTD.Results.Dataset.NodeTieHeatrates.md)

