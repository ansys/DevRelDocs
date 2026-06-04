# Class PartFaceSet

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class PartFaceSet : BuilderNamed<PartSetFace>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PartSetFace\> ← 
BuilderSymmetric<PartSetFace\> ← 
BuilderNamed<PartSetFace\> ← 
[PartFaceSet](VM.Managed.DAFUL.Builder.Contact.PartFaceSet.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<PartSetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PartSetFace\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PartSetFace\>.Name, 
BuilderSymmetric<PartSetFace\>.Build\(Document\), 
BuilderSymmetric<PartSetFace\>.Symmetric, 
BuilderSymmetric<PartSetFace\>.CurrentSymmetric, 
BuilderBase<PartSetFace\>.m\_bSuccess, 
BuilderBase<PartSetFace\>.Build\(Document\), 
BuilderBase<PartSetFace\>.Build\(Document, List<string\>\), 
BuilderBase<PartSetFace\>.Validate\(IList<string\>\), 
BuilderBase<PartSetFace\>.Success\(\), 
BuilderBase<PartSetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PartSetFace\>.OnFinalBuild\(string, Document\), 
BuilderBase<PartSetFace\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PartSetFace\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PartSetFace\>.Parameters, 
BuilderBase<PartSetFace\>.AddToDoc, 
BuilderBase<PartSetFace\>.UseChangedObject, 
BuilderBase<PartSetFace\>.SetPointKey, 
BuilderBase<PartSetFace\>.BuildObject, 
BuilderBase<PartSetFace\>.BuildDocument, 
BuilderBase<PartSetFace\>.UseInterface, 
BuilderBase<PartSetFace\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PartFaceSet\(\)

```csharp
public PartFaceSet()
```

## Properties

### AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ObjectKey

```csharp
public string[] ObjectKey { get; set; }
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


