# Class FEFilm

Namespace: [VM.Managed.DAFUL.Builder.FEFilm](VM.Managed.DAFUL.Builder.FEFilm.md)  
Assembly: VMBldFEFilm.dll  

```csharp
public class FEFilm : BuilderNamed<FEFilm>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<FEFilm\> ← 
BuilderSymmetric<FEFilm\> ← 
BuilderNamed<FEFilm\> ← 
[FEFilm](VM.Managed.DAFUL.Builder.FEFilm.FEFilm.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<FEFilm\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<FEFilm\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<FEFilm\>.Name, 
BuilderSymmetric<FEFilm\>.Build\(Document\), 
BuilderSymmetric<FEFilm\>.Symmetric, 
BuilderSymmetric<FEFilm\>.CurrentSymmetric, 
BuilderBase<FEFilm\>.m\_bSuccess, 
BuilderBase<FEFilm\>.Build\(Document\), 
BuilderBase<FEFilm\>.Build\(Document, List<string\>\), 
BuilderBase<FEFilm\>.Validate\(IList<string\>\), 
BuilderBase<FEFilm\>.Success\(\), 
BuilderBase<FEFilm\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<FEFilm\>.OnFinalBuild\(string, Document\), 
BuilderBase<FEFilm\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<FEFilm\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<FEFilm\>.Parameters, 
BuilderBase<FEFilm\>.AddToDoc, 
BuilderBase<FEFilm\>.UseChangedObject, 
BuilderBase<FEFilm\>.SetPointKey, 
BuilderBase<FEFilm\>.BuildObject, 
BuilderBase<FEFilm\>.BuildDocument, 
BuilderBase<FEFilm\>.UseInterface, 
BuilderBase<FEFilm\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### FEFilm\(\)

```csharp
public FEFilm()
```

## Properties

### PathList

```csharp
public string[] PathList { get; set; }
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


