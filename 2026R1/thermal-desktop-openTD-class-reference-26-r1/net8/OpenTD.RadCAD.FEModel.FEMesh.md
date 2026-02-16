# <a id="OpenTD_RadCAD_FEModel_FEMesh"></a> Class FEMesh

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight mesh for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class FEMesh
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FEMesh](OpenTD.RadCAD.FEModel.FEMesh.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_FEModel_FEMesh__ctor"></a> FEMesh\(\)

```csharp
public FEMesh()
```

## Fields

### <a id="OpenTD_RadCAD_FEModel_FEMesh_domains"></a> domains

```csharp
public Dictionary<string, Domain> domains
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Domain](OpenTD.RadCAD.FEModel.Domain.md)\>

### <a id="OpenTD_RadCAD_FEModel_FEMesh_layers"></a> layers

```csharp
public List<LayerData> layers
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LayerData](OpenTD.RadCAD.FEModel.LayerData.md)\>

### <a id="OpenTD_RadCAD_FEModel_FEMesh_nodes"></a> nodes

```csharp
public List<Node> nodes
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.RadCAD.FEModel.Node.md)\>

### <a id="OpenTD_RadCAD_FEModel_FEMesh_radiationAnalysisGroups"></a> radiationAnalysisGroups

```csharp
public Dictionary<string, FaceDomain> radiationAnalysisGroups
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [FaceDomain](OpenTD.RadCAD.FEModel.FaceDomain.md)\>

### <a id="OpenTD_RadCAD_FEModel_FEMesh_solidElements"></a> solidElements

```csharp
public List<SolidElement> solidElements
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidElement](OpenTD.RadCAD.FEModel.SolidElement.md)\>

### <a id="OpenTD_RadCAD_FEModel_FEMesh_surfaceElements"></a> surfaceElements

```csharp
public List<SurfaceElement> surfaceElements
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SurfaceElement](OpenTD.RadCAD.FEModel.SurfaceElement.md)\>

## Methods

### <a id="OpenTD_RadCAD_FEModel_FEMesh_AddEdgeSpecToDomain_System_String_OpenTD_RadCAD_FEModel_EdgeSpec_"></a> AddEdgeSpecToDomain\(string, EdgeSpec\)

```csharp
public void AddEdgeSpecToDomain(string domainName, EdgeSpec edgeSpec)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`edgeSpec` [EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)

### <a id="OpenTD_RadCAD_FEModel_FEMesh_AddFaceSpecToDomain_System_String_OpenTD_RadCAD_FEModel_FaceSpec_"></a> AddFaceSpecToDomain\(string, FaceSpec\)

```csharp
public void AddFaceSpecToDomain(string domainName, FaceSpec faceSpec)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`faceSpec` [FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)

### <a id="OpenTD_RadCAD_FEModel_FEMesh_AddNodeToDomain_System_String_System_Int32_"></a> AddNodeToDomain\(string, int\)

```csharp
public void AddNodeToDomain(string domainName, int nodeId)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nodeId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FEModel_FEMesh_AddSolidElementToDomain_System_String_System_Int32_"></a> AddSolidElementToDomain\(string, int\)

```csharp
public void AddSolidElementToDomain(string domainName, int elementId)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`elementId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FEModel_FEMesh_Check"></a> Check\(\)

```csharp
public void Check()
```

