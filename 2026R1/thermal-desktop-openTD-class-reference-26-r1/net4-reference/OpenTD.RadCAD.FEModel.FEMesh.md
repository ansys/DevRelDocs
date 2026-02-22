# Class FEMesh

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight mesh for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class FEMesh
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FEMesh](OpenTD.RadCAD.FEModel.FEMesh.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### FEMesh\(\)

```csharp
public FEMesh()
```

## Fields

### domains

```csharp
public Dictionary<string, Domain> domains
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Domain](OpenTD.RadCAD.FEModel.Domain.md)\>

### layers

```csharp
public List<LayerData> layers
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LayerData](OpenTD.RadCAD.FEModel.LayerData.md)\>

### nodes

```csharp
public List<Node> nodes
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.RadCAD.FEModel.Node.md)\>

### radiationAnalysisGroups

```csharp
public Dictionary<string, FaceDomain> radiationAnalysisGroups
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [FaceDomain](OpenTD.RadCAD.FEModel.FaceDomain.md)\>

### solidElements

```csharp
public List<SolidElement> solidElements
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidElement](OpenTD.RadCAD.FEModel.SolidElement.md)\>

### surfaceElements

```csharp
public List<SurfaceElement> surfaceElements
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SurfaceElement](OpenTD.RadCAD.FEModel.SurfaceElement.md)\>

## Methods

### AddEdgeSpecToDomain\(string, EdgeSpec\)

```csharp
public void AddEdgeSpecToDomain(string domainName, EdgeSpec edgeSpec)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`edgeSpec` [EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)

### AddFaceSpecToDomain\(string, FaceSpec\)

```csharp
public void AddFaceSpecToDomain(string domainName, FaceSpec faceSpec)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`faceSpec` [FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)

### AddNodeToDomain\(string, int\)

```csharp
public void AddNodeToDomain(string domainName, int nodeId)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nodeId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AddSolidElementToDomain\(string, int\)

```csharp
public void AddSolidElementToDomain(string domainName, int elementId)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`elementId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Check\(\)

```csharp
public void Check()
```


