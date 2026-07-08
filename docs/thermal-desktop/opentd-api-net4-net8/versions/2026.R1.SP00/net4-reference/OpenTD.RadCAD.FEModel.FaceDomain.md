# Class FaceDomain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight face domain for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
[DataContract]
public class FaceDomain
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FaceDomain](OpenTD.RadCAD.FEModel.FaceDomain.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### FaceDomain\(\)

```csharp
public FaceDomain()
```

## Fields

### faceSpecs

```csharp
[DataMember]
public SortedDictionary<int, FaceSpec> faceSpecs
```

#### Field Value

 [SortedDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)\>

## Properties

### FaceSpecs

```csharp
public ICollection<FaceSpec> FaceSpecs { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)\>

## Methods

### Add\(FaceSpec\)

```csharp
public void Add(FaceSpec faceSpec)
```

#### Parameters

`faceSpec` [FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)


