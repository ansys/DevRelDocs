# Class AutoContact

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class AutoContact : BuilderNamed<AutoContact>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<AutoContact\> ← 
BuilderSymmetric<AutoContact\> ← 
BuilderNamed<AutoContact\> ← 
[AutoContact](VM.Managed.DAFUL.Builder.Contact.AutoContact.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<AutoContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<AutoContact\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<AutoContact\>.Name, 
BuilderSymmetric<AutoContact\>.Build\(Document\), 
BuilderSymmetric<AutoContact\>.Symmetric, 
BuilderSymmetric<AutoContact\>.CurrentSymmetric, 
BuilderBase<AutoContact\>.m\_bSuccess, 
BuilderBase<AutoContact\>.Build\(Document\), 
BuilderBase<AutoContact\>.Build\(Document, List<string\>\), 
BuilderBase<AutoContact\>.Validate\(IList<string\>\), 
BuilderBase<AutoContact\>.Success\(\), 
BuilderBase<AutoContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<AutoContact\>.OnFinalBuild\(string, Document\), 
BuilderBase<AutoContact\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<AutoContact\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<AutoContact\>.Parameters, 
BuilderBase<AutoContact\>.AddToDoc, 
BuilderBase<AutoContact\>.UseChangedObject, 
BuilderBase<AutoContact\>.SetPointKey, 
BuilderBase<AutoContact\>.BuildObject, 
BuilderBase<AutoContact\>.BuildDocument, 
BuilderBase<AutoContact\>.UseInterface, 
BuilderBase<AutoContact\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AutoContact\(\)

```csharp
public AutoContact()
```

## Properties

### MaximumDistance

```csharp
public Variable MaximumDistance { get; set; }
```

#### Property Value

 Variable

### ObjectList

```csharp
public string[] ObjectList { get; set; }
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


