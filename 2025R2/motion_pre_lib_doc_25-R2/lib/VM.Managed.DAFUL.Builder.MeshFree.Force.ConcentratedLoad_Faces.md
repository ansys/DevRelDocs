# Class ConcentratedLoad\_Faces

Namespace: [VM.Managed.DAFUL.Builder.MeshFree.Force](VM.Managed.DAFUL.Builder.MeshFree.Force.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class ConcentratedLoad_Faces : BuilderNamed<ConcentratedLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ConcentratedLoad\> ← 
BuilderSymmetric<ConcentratedLoad\> ← 
BuilderNamed<ConcentratedLoad\> ← 
[ConcentratedLoad\_Faces](VM.Managed.DAFUL.Builder.MeshFree.Force.ConcentratedLoad\_Faces.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ConcentratedLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ConcentratedLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ConcentratedLoad\>.Name, 
BuilderSymmetric<ConcentratedLoad\>.Build\(Document\), 
BuilderSymmetric<ConcentratedLoad\>.Symmetric, 
BuilderSymmetric<ConcentratedLoad\>.CurrentSymmetric, 
BuilderBase<ConcentratedLoad\>.m\_bSuccess, 
BuilderBase<ConcentratedLoad\>.Build\(Document\), 
BuilderBase<ConcentratedLoad\>.Build\(Document, List<string\>\), 
BuilderBase<ConcentratedLoad\>.Validate\(IList<string\>\), 
BuilderBase<ConcentratedLoad\>.Success\(\), 
BuilderBase<ConcentratedLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ConcentratedLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<ConcentratedLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ConcentratedLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ConcentratedLoad\>.Parameters, 
BuilderBase<ConcentratedLoad\>.AddToDoc, 
BuilderBase<ConcentratedLoad\>.UseChangedObject, 
BuilderBase<ConcentratedLoad\>.SetPointKey, 
BuilderBase<ConcentratedLoad\>.BuildObject, 
BuilderBase<ConcentratedLoad\>.BuildDocument, 
BuilderBase<ConcentratedLoad\>.UseInterface, 
BuilderBase<ConcentratedLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ConcentratedLoad\_Faces\(\)

```csharp
public ConcentratedLoad_Faces()
```

## Properties

### BaseGeometry

```csharp
public string[] BaseGeometry { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


