# Class EdgeDomain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight edge domain for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
[DataContract]
public class EdgeDomain
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EdgeDomain](OpenTD.RadCAD.FEModel.EdgeDomain.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### EdgeDomain\(\)

```csharp
public EdgeDomain()
```

## Fields

### edgeSpecs

```csharp
[DataMember]
public SortedDictionary<int, EdgeSpec> edgeSpecs
```

#### Field Value

 [SortedDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)\>

## Properties

### EdgeSpecs

```csharp
public ICollection<EdgeSpec> EdgeSpecs { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)\>

## Methods

### Add\(EdgeSpec\)

```csharp
public void Add(EdgeSpec edgeSpec)
```

#### Parameters

`edgeSpec` [EdgeSpec](OpenTD.RadCAD.FEModel.EdgeSpec.md)


