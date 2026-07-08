# Class Water

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class Water : BuilderNamed<Water>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Water\> ← 
BuilderSymmetric<Water\> ← 
BuilderNamed<Water\> ← 
[Water](VM.Managed.DAFUL.Builder.Track.Water.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Water\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Water\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Water\>.Name, 
BuilderSymmetric<Water\>.Build\(Document\), 
BuilderSymmetric<Water\>.Symmetric, 
BuilderSymmetric<Water\>.CurrentSymmetric, 
BuilderBase<Water\>.m\_bSuccess, 
BuilderBase<Water\>.Build\(Document\), 
BuilderBase<Water\>.Build\(Document, List<string\>\), 
BuilderBase<Water\>.Validate\(IList<string\>\), 
BuilderBase<Water\>.Success\(\), 
BuilderBase<Water\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Water\>.OnFinalBuild\(string, Document\), 
BuilderBase<Water\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Water\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Water\>.Parameters, 
BuilderBase<Water\>.AddToDoc, 
BuilderBase<Water\>.UseChangedObject, 
BuilderBase<Water\>.SetPointKey, 
BuilderBase<Water\>.BuildObject, 
BuilderBase<Water\>.BuildDocument, 
BuilderBase<Water\>.UseInterface, 
BuilderBase<Water\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Water\(\)

```csharp
public Water()
```

## Properties

### BodyConnectable

```csharp
public IConnectable BodyConnectable { get; }
```

#### Property Value

 IConnectable

### DepthOfDeepWater

```csharp
public Variable DepthOfDeepWater { get; set; }
```

#### Property Value

 Variable

### DirectionX

```csharp
public DirectionBase DirectionX { get; }
```

#### Property Value

 DirectionBase

### DirectionZ

```csharp
public DirectionBase DirectionZ { get; }
```

#### Property Value

 DirectionBase

### LengthInXAxis

```csharp
public Variable LengthInXAxis { get; set; }
```

#### Property Value

 Variable

### Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### WidthInYAxis

```csharp
public Variable WidthInYAxis { get; set; }
```

#### Property Value

 Variable

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


