# <a id="OpenTD_RadCAD_FEModel_Domain"></a> Class Domain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight domain for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class Domain
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Domain](OpenTD.RadCAD.FEModel.Domain.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_FEModel_Domain__ctor"></a> Domain\(\)

```csharp
public Domain()
```

## Fields

### <a id="OpenTD_RadCAD_FEModel_Domain_Nodes"></a> Nodes

```csharp
public IdDomain Nodes
```

#### Field Value

 [IdDomain](OpenTD.RadCAD.FEModel.IdDomain.md)

### <a id="OpenTD_RadCAD_FEModel_Domain_SolidElements"></a> SolidElements

```csharp
public IdDomain SolidElements
```

#### Field Value

 [IdDomain](OpenTD.RadCAD.FEModel.IdDomain.md)

### <a id="OpenTD_RadCAD_FEModel_Domain_SurfaceElementEdges"></a> SurfaceElementEdges

```csharp
public EdgeDomain SurfaceElementEdges
```

#### Field Value

 [EdgeDomain](OpenTD.RadCAD.FEModel.EdgeDomain.md)

### <a id="OpenTD_RadCAD_FEModel_Domain_SurfaceElementFaces"></a> SurfaceElementFaces

```csharp
public FaceDomain SurfaceElementFaces
```

#### Field Value

 [FaceDomain](OpenTD.RadCAD.FEModel.FaceDomain.md)

