# Class ColorFaceSet

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class ColorFaceSet : BuilderNamed<SetFace>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SetFace\> ← 
BuilderSymmetric<SetFace\> ← 
BuilderNamed<SetFace\> ← 
[ColorFaceSet](VM.Managed.DAFUL.Builder.Contact.ColorFaceSet.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SetFace\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SetFace\>.Name, 
BuilderSymmetric<SetFace\>.Build\(Document\), 
BuilderSymmetric<SetFace\>.Symmetric, 
BuilderSymmetric<SetFace\>.CurrentSymmetric, 
BuilderBase<SetFace\>.m\_bSuccess, 
BuilderBase<SetFace\>.Build\(Document\), 
BuilderBase<SetFace\>.Build\(Document, List<string\>\), 
BuilderBase<SetFace\>.Validate\(IList<string\>\), 
BuilderBase<SetFace\>.Success\(\), 
BuilderBase<SetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SetFace\>.OnFinalBuild\(string, Document\), 
BuilderBase<SetFace\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SetFace\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SetFace\>.Parameters, 
BuilderBase<SetFace\>.AddToDoc, 
BuilderBase<SetFace\>.UseChangedObject, 
BuilderBase<SetFace\>.SetPointKey, 
BuilderBase<SetFace\>.BuildObject, 
BuilderBase<SetFace\>.BuildDocument, 
BuilderBase<SetFace\>.UseInterface, 
BuilderBase<SetFace\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ColorFaceSet\(\)

```csharp
public ColorFaceSet()
```

## Properties

### AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

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


