# Class PressureLoad\_Faces

Namespace: [VM.Managed.DAFUL.Builder.MeshFree.Force](VM.Managed.DAFUL.Builder.MeshFree.Force.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class PressureLoad_Faces : BuilderNamed<PressureLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PressureLoad\> ← 
BuilderSymmetric<PressureLoad\> ← 
BuilderNamed<PressureLoad\> ← 
[PressureLoad\_Faces](VM.Managed.DAFUL.Builder.MeshFree.Force.PressureLoad\_Faces.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<PressureLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PressureLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PressureLoad\>.Name, 
BuilderSymmetric<PressureLoad\>.Build\(Document\), 
BuilderSymmetric<PressureLoad\>.Symmetric, 
BuilderSymmetric<PressureLoad\>.CurrentSymmetric, 
BuilderBase<PressureLoad\>.m\_bSuccess, 
BuilderBase<PressureLoad\>.Build\(Document\), 
BuilderBase<PressureLoad\>.Build\(Document, List<string\>\), 
BuilderBase<PressureLoad\>.Validate\(IList<string\>\), 
BuilderBase<PressureLoad\>.Success\(\), 
BuilderBase<PressureLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PressureLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<PressureLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PressureLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PressureLoad\>.Parameters, 
BuilderBase<PressureLoad\>.AddToDoc, 
BuilderBase<PressureLoad\>.UseChangedObject, 
BuilderBase<PressureLoad\>.SetPointKey, 
BuilderBase<PressureLoad\>.BuildObject, 
BuilderBase<PressureLoad\>.BuildDocument, 
BuilderBase<PressureLoad\>.UseInterface, 
BuilderBase<PressureLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PressureLoad\_Faces\(\)

```csharp
public PressureLoad_Faces()
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


