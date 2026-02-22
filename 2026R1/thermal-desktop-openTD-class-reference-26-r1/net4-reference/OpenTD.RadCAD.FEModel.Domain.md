# Class Domain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight domain for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class Domain
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Domain](OpenTD.RadCAD.FEModel.Domain.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### Domain\(\)

```csharp
public Domain()
```

## Fields

### Nodes

```csharp
public IdDomain Nodes
```

#### Field Value

 [IdDomain](OpenTD.RadCAD.FEModel.IdDomain.md)

### SolidElements

```csharp
public IdDomain SolidElements
```

#### Field Value

 [IdDomain](OpenTD.RadCAD.FEModel.IdDomain.md)

### SurfaceElementEdges

```csharp
public EdgeDomain SurfaceElementEdges
```

#### Field Value

 [EdgeDomain](OpenTD.RadCAD.FEModel.EdgeDomain.md)

### SurfaceElementFaces

```csharp
public FaceDomain SurfaceElementFaces
```

#### Field Value

 [FaceDomain](OpenTD.RadCAD.FEModel.FaceDomain.md)


