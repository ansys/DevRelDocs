# Class Tie

Namespace: [VM.Managed.DAFUL.Builder.FE.Contact](VM.Managed.DAFUL.Builder.FE.Contact.md)  
Assembly: VMBldFECt.dll  

```csharp
public class Tie : BuilderNamed<Tie>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Tie\> ← 
BuilderSymmetric<Tie\> ← 
BuilderNamed<Tie\> ← 
[Tie](VM.Managed.DAFUL.Builder.FE.Contact.Tie.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Tie\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Tie\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Tie\>.Name, 
BuilderSymmetric<Tie\>.Build\(Document\), 
BuilderSymmetric<Tie\>.Symmetric, 
BuilderSymmetric<Tie\>.CurrentSymmetric, 
BuilderBase<Tie\>.m\_bSuccess, 
BuilderBase<Tie\>.Build\(Document\), 
BuilderBase<Tie\>.Build\(Document, List<string\>\), 
BuilderBase<Tie\>.Validate\(IList<string\>\), 
BuilderBase<Tie\>.Success\(\), 
BuilderBase<Tie\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Tie\>.OnFinalBuild\(string, Document\), 
BuilderBase<Tie\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Tie\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Tie\>.Parameters, 
BuilderBase<Tie\>.AddToDoc, 
BuilderBase<Tie\>.UseChangedObject, 
BuilderBase<Tie\>.SetPointKey, 
BuilderBase<Tie\>.BuildObject, 
BuilderBase<Tie\>.BuildDocument, 
BuilderBase<Tie\>.UseInterface, 
BuilderBase<Tie\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Tie\(\)

```csharp
public Tie()
```

## Properties

### ActionContactable

```csharp
public IContactable ActionContactable { get; }
```

#### Property Value

 IContactable

### BaseContactable

```csharp
public IContactable BaseContactable { get; }
```

#### Property Value

 IContactable

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


