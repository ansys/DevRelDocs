# <a id="OpenTD_RadCAD_FEModel_FaceDomain"></a> Class FaceDomain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight face domain for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class FaceDomain
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FaceDomain](OpenTD.RadCAD.FEModel.FaceDomain.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_FEModel_FaceDomain__ctor"></a> FaceDomain\(\)

```csharp
public FaceDomain()
```

## Fields

### <a id="OpenTD_RadCAD_FEModel_FaceDomain_faceSpecs"></a> faceSpecs

```csharp
public SortedDictionary<int, FaceSpec> faceSpecs
```

#### Field Value

 [SortedDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)\>

## Properties

### <a id="OpenTD_RadCAD_FEModel_FaceDomain_FaceSpecs"></a> FaceSpecs

```csharp
public ICollection<FaceSpec> FaceSpecs { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)\>

## Methods

### <a id="OpenTD_RadCAD_FEModel_FaceDomain_Add_OpenTD_RadCAD_FEModel_FaceSpec_"></a> Add\(FaceSpec\)

```csharp
public void Add(FaceSpec faceSpec)
```

#### Parameters

`faceSpec` [FaceSpec](OpenTD.RadCAD.FEModel.FaceSpec.md)

