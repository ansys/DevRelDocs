# Class SolidLink

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public abstract class SolidLink : BuilderBase<BodyLink>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BodyLink\> ← 
[SolidLink](VM.Managed.DAFUL.Builder.Track.SolidLink.md)

#### Derived

[SolidLinkLMSimple](VM.Managed.DAFUL.Builder.Track.SolidLinkLMSimple.md), 
[SolidLinkLMV](VM.Managed.DAFUL.Builder.Track.SolidLinkLMV.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBase<BodyLink\>.m\_bSuccess, 
BuilderBase<BodyLink\>.Build\(Document\), 
BuilderBase<BodyLink\>.Build\(Document, List<string\>\), 
BuilderBase<BodyLink\>.Validate\(IList<string\>\), 
BuilderBase<BodyLink\>.Success\(\), 
BuilderBase<BodyLink\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BodyLink\>.OnFinalBuild\(string, Document\), 
BuilderBase<BodyLink\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BodyLink\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BodyLink\>.Parameters, 
BuilderBase<BodyLink\>.AddToDoc, 
BuilderBase<BodyLink\>.UseChangedObject, 
BuilderBase<BodyLink\>.SetPointKey, 
BuilderBase<BodyLink\>.BuildObject, 
BuilderBase<BodyLink\>.BuildDocument, 
BuilderBase<BodyLink\>.UseInterface, 
BuilderBase<BodyLink\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SolidLink\(\)

```csharp
protected SolidLink()
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

### LDForLinkSombination

```csharp
protected double LDForLinkSombination { get; set; }
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


