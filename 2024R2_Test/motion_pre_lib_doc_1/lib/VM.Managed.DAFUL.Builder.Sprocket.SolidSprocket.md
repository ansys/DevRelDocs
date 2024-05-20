# Class SolidSprocket

Namespace: [VM.Managed.DAFUL.Builder.Sprocket](VM.Managed.DAFUL.Builder.Sprocket.md)  
Assembly: VMBldSprocket.dll  

```csharp
public class SolidSprocket : BuilderBase<BodySprocket>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BodySprocket\> ← 
[SolidSprocket](VM.Managed.DAFUL.Builder.Sprocket.SolidSprocket.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBase<BodySprocket\>.m\_bSuccess, 
BuilderBase<BodySprocket\>.Build\(Document\), 
BuilderBase<BodySprocket\>.Build\(Document, List<string\>\), 
BuilderBase<BodySprocket\>.Validate\(IList<string\>\), 
BuilderBase<BodySprocket\>.Success\(\), 
BuilderBase<BodySprocket\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BodySprocket\>.OnFinalBuild\(string, Document\), 
BuilderBase<BodySprocket\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BodySprocket\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BodySprocket\>.Parameters, 
BuilderBase<BodySprocket\>.AddToDoc, 
BuilderBase<BodySprocket\>.UseChangedObject, 
BuilderBase<BodySprocket\>.SetPointKey, 
BuilderBase<BodySprocket\>.BuildObject, 
BuilderBase<BodySprocket\>.BuildDocument, 
BuilderBase<BodySprocket\>.UseInterface, 
BuilderBase<BodySprocket\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SolidSprocket\(\)

```csharp
public SolidSprocket()
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

### ProfileType

```csharp
public ToothProfileType ProfileType { get; set; }
```

#### Property Value

 ToothProfileType

### SprocketType

```csharp
public SprocketType SprocketType { get; set; }
```

#### Property Value

 SprocketType

## Methods

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


