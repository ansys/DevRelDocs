# <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology"></a> Interface IDatasetTopology

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Provides access to the underlying logical topology for a dataset

```csharp
public interface IDatasetTopology
```

## Remarks

The individual 'Info' types correspond to model objects in Thermal Desktop.
and describe the connection between them.

## Properties

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_Conductors"></a> Conductors

```csharp
List<IConductorInfo> Conductors { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_FTies"></a> FTies

```csharp
List<IFTieInfo> FTies { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IFTieInfo](OpenTD.Results.Dataset.Topology.IFTieInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_IFaces"></a> IFaces

```csharp
List<IIFaceInfo> IFaces { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IIFaceInfo](OpenTD.Results.Dataset.Topology.IIFaceInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_Lumps"></a> Lumps

```csharp
List<ILumpInfo> Lumps { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_Nodes"></a> Nodes

```csharp
List<INodeInfo> Nodes { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_Paths"></a> Paths

```csharp
List<IPathInfo> Paths { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IPathInfo](OpenTD.Results.Dataset.Topology.IPathInfo.md)\>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_Ties"></a> Ties

```csharp
List<ITieInfo> Ties { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)\>

## Methods

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetConductorList_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetConductorList\(SindaName\)

Gets the list of IConductorInfo with the given SindaName.

```csharp
List<IConductorInfo> GetConductorList(SindaName conductorSindaName)
```

#### Parameters

`conductorSindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the conductor(s).

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)\>

A list of IConductorInfo or null if conductors with <code class="paramref">sindaName</code>
    do not exist.

#### Remarks

There can be two conductors with a single SindaName, one for
    each direction of the from and to nodes.

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetFTie_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetFTie\(SindaName\)

Gets the IFTieInfo with the given SindaName.

```csharp
IFTieInfo GetFTie(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the ftie.

#### Returns

 [IFTieInfo](OpenTD.Results.Dataset.Topology.IFTieInfo.md)

An IFTieInfo or null if an ftie with <code class="paramref">sindaName</code>
    does not exist.

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetIFace_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetIFace\(SindaName\)

Gets the IIFaceInfo with the given SindaName.

```csharp
IIFaceInfo GetIFace(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the IFace.

#### Returns

 [IIFaceInfo](OpenTD.Results.Dataset.Topology.IIFaceInfo.md)

An IIFaceInfo or null if an IFace with <code class="paramref">sindaName</code>
    does not exist.

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetLump_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetLump\(SindaName\)

Gets the ILumpInfo with the given SindaName.

```csharp
ILumpInfo GetLump(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the lump.

#### Returns

 [ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)

An ILumpInfo or null if a lump with <code class="paramref">sindaName</code>
    does not exist.

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetNode_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetNode\(SindaName\)

Gets the INodeInfo with the given SindaName.

```csharp
INodeInfo GetNode(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the node.

#### Returns

 [INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)

An INodeInfo or null if a node with <code class="paramref">sindaName</code>
    does not exist.

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetPath_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetPath\(SindaName\)

Gets the IPathInfo with the given SindaName.

```csharp
IPathInfo GetPath(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the path.

#### Returns

 [IPathInfo](OpenTD.Results.Dataset.Topology.IPathInfo.md)

An IPathInfo or null if a path with <code class="paramref">sindaName</code>
    does not exist.

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelConductors_System_String_"></a> GetSubmodelConductors\(string\)

Gets the IConductorInfo for the given Submodel.

```csharp
List<IConductorInfo> GetSubmodelConductors(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)\>

A list of IConductorInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelFTies_System_String_"></a> GetSubmodelFTies\(string\)

Gets the IFTieInfo for the given Submodel.

```csharp
List<IFTieInfo> GetSubmodelFTies(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IFTieInfo](OpenTD.Results.Dataset.Topology.IFTieInfo.md)\>

A list of IFTieInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelIFaces_System_String_"></a> GetSubmodelIFaces\(string\)

Gets the IIFaceInfo's for the given Submodel.

```csharp
List<IIFaceInfo> GetSubmodelIFaces(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IIFaceInfo](OpenTD.Results.Dataset.Topology.IIFaceInfo.md)\>

A list of IIFaceInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelLumps_System_String_"></a> GetSubmodelLumps\(string\)

Gets the ILumpInfo for the given Submodel.

```csharp
List<ILumpInfo> GetSubmodelLumps(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)\>

A list of ILumpInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelNodes_System_String_"></a> GetSubmodelNodes\(string\)

Gets the INodeInfo for the given Submodel.

```csharp
List<INodeInfo> GetSubmodelNodes(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md)\>

A list of INodeInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelPaths_System_String_"></a> GetSubmodelPaths\(string\)

Gets the IPathInfo for the given Submodel.

```csharp
List<IPathInfo> GetSubmodelPaths(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IPathInfo](OpenTD.Results.Dataset.Topology.IPathInfo.md)\>

A list of IPathInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetSubmodelTies_System_String_"></a> GetSubmodelTies\(string\)

Gets the ITieInfo for the given Submodel.

```csharp
List<ITieInfo> GetSubmodelTies(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel to filter upon.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)\>

A list of ITieInfo for <code class="paramref">submodel</code>

### <a id="OpenTD_Results_Dataset_Topology_IDatasetTopology_GetTie_OpenTD_Results_Dataset_Topology_SindaName_"></a> GetTie\(SindaName\)

Gets the ITieInfo with the given SindaName.

```csharp
ITieInfo GetTie(SindaName sindaName)
```

#### Parameters

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The SindaName of the tie.

#### Returns

 [ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)

An ITieInfo or null if a tie with <code class="paramref">sindaName</code>
    does not exist.

## See Also

[IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md), 
[IFTieInfo](OpenTD.Results.Dataset.Topology.IFTieInfo.md), 
[IIFaceInfo](OpenTD.Results.Dataset.Topology.IIFaceInfo.md), 
[ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md), 
[INodeInfo](OpenTD.Results.Dataset.Topology.INodeInfo.md), 
[IPathInfo](OpenTD.Results.Dataset.Topology.IPathInfo.md), 
[ITieInfo](OpenTD.Results.Dataset.Topology.ITieInfo.md)

