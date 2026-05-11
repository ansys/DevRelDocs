# Class MCTMC

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class MCTMC : BuilderNamed<MCTMC>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<MCTMC\> ← 
BuilderSymmetric<MCTMC\> ← 
BuilderNamed<MCTMC\> ← 
[MCTMC](VM.Managed.DAFUL.Builder.Contact.MCTMC.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<MCTMC\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<MCTMC\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<MCTMC\>.Name, 
BuilderSymmetric<MCTMC\>.Build\(Document\), 
BuilderSymmetric<MCTMC\>.Symmetric, 
BuilderSymmetric<MCTMC\>.CurrentSymmetric, 
BuilderBase<MCTMC\>.m\_bSuccess, 
BuilderBase<MCTMC\>.Build\(Document\), 
BuilderBase<MCTMC\>.Build\(Document, List<string\>\), 
BuilderBase<MCTMC\>.Validate\(IList<string\>\), 
BuilderBase<MCTMC\>.Success\(\), 
BuilderBase<MCTMC\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<MCTMC\>.OnFinalBuild\(string, Document\), 
BuilderBase<MCTMC\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<MCTMC\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<MCTMC\>.Parameters, 
BuilderBase<MCTMC\>.AddToDoc, 
BuilderBase<MCTMC\>.UseChangedObject, 
BuilderBase<MCTMC\>.SetPointKey, 
BuilderBase<MCTMC\>.BuildObject, 
BuilderBase<MCTMC\>.BuildDocument, 
BuilderBase<MCTMC\>.UseInterface, 
BuilderBase<MCTMC\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### MCTMC\(\)

```csharp
public MCTMC()
```

## Properties

### ActionContactable

```csharp
public IContactable3D ActionContactable { get; }
```

#### Property Value

 IContactable3D

### ActionCurveset

```csharp
public PickedCurveset ActionCurveset { get; set; }
```

#### Property Value

 [PickedCurveset](VM.Managed.DAFUL.Builder.Contact.PickedCurveset.md)

### BaseCurveset

```csharp
public PickedCurveset BaseCurveset { get; set; }
```

#### Property Value

 [PickedCurveset](VM.Managed.DAFUL.Builder.Contact.PickedCurveset.md)

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


