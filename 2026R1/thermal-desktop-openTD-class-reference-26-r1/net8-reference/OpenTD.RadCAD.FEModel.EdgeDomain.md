# <a id="OpenTD_RadCAD_FEModel_EdgeDomain"></a> Class EdgeDomain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight edge domain for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class EdgeDomain
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EdgeDomain](OpenTD.RadCAD.FEModel.EdgeDomain.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_FEModel_EdgeDomain__ctor"></a> EdgeDomain\(\)

```csharp
public EdgeDomain()
```

## Fields

### <a id="OpenTD_RadCAD_FEModel_EdgeDomain_edgeSpecs"></a> edgeSpecs

```csharp
public SortedDictionary<int, EdgeSpec> edgeSpecs
```

#### Field Value

 [SortedDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)\>

## Properties

### <a id="OpenTD_RadCAD_FEModel_EdgeDomain_EdgeSpecs"></a> EdgeSpecs

```csharp
public ICollection<EdgeSpec> EdgeSpecs { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)\>

## Methods

### <a id="OpenTD_RadCAD_FEModel_EdgeDomain_Add_OpenTD_RadCAD_FEModel_EdgeSpec_"></a> Add\(EdgeSpec\)

```csharp
public void Add(EdgeSpec edgeSpec)
```

#### Parameters

`edgeSpec` [EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)

