# Class SolidShoe

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public abstract class SolidShoe : BuilderBase<BodyShoe>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BodyShoe\> ← 
[SolidShoe](VM.Managed.DAFUL.Builder.Track.SolidShoe.md)

#### Derived

[SolidShoeLMDouble](VM.Managed.DAFUL.Builder.Track.SolidShoeLMDouble.md), 
[SolidShoeLMSingle](VM.Managed.DAFUL.Builder.Track.SolidShoeLMSingle.md), 
[SolidShoeLMTriple](VM.Managed.DAFUL.Builder.Track.SolidShoeLMTriple.md), 
[SolidShoeLMUserDefined](VM.Managed.DAFUL.Builder.Track.SolidShoeLMUserDefined.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBase<BodyShoe\>.m\_bSuccess, 
BuilderBase<BodyShoe\>.Build\(Document\), 
BuilderBase<BodyShoe\>.Build\(Document, List<string\>\), 
BuilderBase<BodyShoe\>.Validate\(IList<string\>\), 
BuilderBase<BodyShoe\>.Success\(\), 
BuilderBase<BodyShoe\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BodyShoe\>.OnFinalBuild\(string, Document\), 
BuilderBase<BodyShoe\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BodyShoe\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BodyShoe\>.Parameters, 
BuilderBase<BodyShoe\>.AddToDoc, 
BuilderBase<BodyShoe\>.UseChangedObject, 
BuilderBase<BodyShoe\>.SetPointKey, 
BuilderBase<BodyShoe\>.BuildObject, 
BuilderBase<BodyShoe\>.BuildDocument, 
BuilderBase<BodyShoe\>.UseInterface, 
BuilderBase<BodyShoe\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SolidShoe\(\)

```csharp
protected SolidShoe()
```

## Properties

### AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LDForShoeSombination

```csharp
protected double LDForShoeSombination { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### GetCurrentBuilder\(\)

```csharp
protected virtual Builder GetCurrentBuilder()
```

#### Returns

 Builder

### OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override sealed bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


