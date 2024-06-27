# Class Thrust

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class Thrust : BuilderNamed<Thrust>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Thrust\> ← 
BuilderSymmetric<Thrust\> ← 
BuilderNamed<Thrust\> ← 
[Thrust](VM.Managed.DAFUL.Builder.Track.Thrust.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Thrust\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Thrust\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Thrust\>.Name, 
BuilderSymmetric<Thrust\>.Build\(Document\), 
BuilderSymmetric<Thrust\>.Symmetric, 
BuilderSymmetric<Thrust\>.CurrentSymmetric, 
BuilderBase<Thrust\>.m\_bSuccess, 
BuilderBase<Thrust\>.Build\(Document\), 
BuilderBase<Thrust\>.Build\(Document, List<string\>\), 
BuilderBase<Thrust\>.Validate\(IList<string\>\), 
BuilderBase<Thrust\>.Success\(\), 
BuilderBase<Thrust\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Thrust\>.OnFinalBuild\(string, Document\), 
BuilderBase<Thrust\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Thrust\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Thrust\>.Parameters, 
BuilderBase<Thrust\>.AddToDoc, 
BuilderBase<Thrust\>.UseChangedObject, 
BuilderBase<Thrust\>.SetPointKey, 
BuilderBase<Thrust\>.BuildObject, 
BuilderBase<Thrust\>.BuildDocument, 
BuilderBase<Thrust\>.UseInterface, 
BuilderBase<Thrust\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Thrust\(\)

```csharp
public Thrust()
```

## Properties

### ActionBody

```csharp
public IConnectable ActionBody { get; }
```

#### Property Value

 IConnectable

### BaseWater

```csharp
public IWater BaseWater { get; }
```

#### Property Value

 IWater

### Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### ThrustingAxis

```csharp
public DirectionBase ThrustingAxis { get; }
```

#### Property Value

 DirectionBase

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


