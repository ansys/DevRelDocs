# Class NodalBody

Namespace: [VM.Managed.DAFUL.Builder.FE](VM.Managed.DAFUL.Builder.FE.md)  
Assembly: VMBldFE.dll  

```csharp
public class NodalBody : BuilderNamed<NodalBody>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<NodalBody\> ← 
BuilderSymmetric<NodalBody\> ← 
BuilderNamed<NodalBody\> ← 
[NodalBody](VM.Managed.DAFUL.Builder.FE.NodalBody.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<NodalBody\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<NodalBody\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<NodalBody\>.Name, 
BuilderSymmetric<NodalBody\>.Build\(Document\), 
BuilderSymmetric<NodalBody\>.Symmetric, 
BuilderSymmetric<NodalBody\>.CurrentSymmetric, 
BuilderBase<NodalBody\>.m\_bSuccess, 
BuilderBase<NodalBody\>.Build\(Document\), 
BuilderBase<NodalBody\>.Build\(Document, List<string\>\), 
BuilderBase<NodalBody\>.Validate\(IList<string\>\), 
BuilderBase<NodalBody\>.Success\(\), 
BuilderBase<NodalBody\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<NodalBody\>.OnFinalBuild\(string, Document\), 
BuilderBase<NodalBody\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<NodalBody\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<NodalBody\>.Parameters, 
BuilderBase<NodalBody\>.AddToDoc, 
BuilderBase<NodalBody\>.UseChangedObject, 
BuilderBase<NodalBody\>.SetPointKey, 
BuilderBase<NodalBody\>.BuildObject, 
BuilderBase<NodalBody\>.BuildDocument, 
BuilderBase<NodalBody\>.UseInterface, 
BuilderBase<NodalBody\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### NodalBody\(\)

```csharp
public NodalBody()
```

## Properties

### PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


