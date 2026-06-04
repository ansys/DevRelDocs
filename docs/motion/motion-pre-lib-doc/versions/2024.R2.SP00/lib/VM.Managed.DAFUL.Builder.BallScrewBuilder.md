# Class BallScrewBuilder

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBldBallPlacing.dll  

```csharp
public class BallScrewBuilder : BuilderNamed<BallScrew>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BallScrew\> ← 
BuilderSymmetric<BallScrew\> ← 
BuilderNamed<BallScrew\> ← 
[BallScrewBuilder](VM.Managed.DAFUL.Builder.BallScrewBuilder.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<BallScrew\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BallScrew\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BallScrew\>.Name, 
BuilderSymmetric<BallScrew\>.Build\(Document\), 
BuilderSymmetric<BallScrew\>.Symmetric, 
BuilderSymmetric<BallScrew\>.CurrentSymmetric, 
BuilderBase<BallScrew\>.m\_bSuccess, 
BuilderBase<BallScrew\>.Build\(Document\), 
BuilderBase<BallScrew\>.Build\(Document, List<string\>\), 
BuilderBase<BallScrew\>.Validate\(IList<string\>\), 
BuilderBase<BallScrew\>.Success\(\), 
BuilderBase<BallScrew\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BallScrew\>.OnFinalBuild\(string, Document\), 
BuilderBase<BallScrew\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BallScrew\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BallScrew\>.Parameters, 
BuilderBase<BallScrew\>.AddToDoc, 
BuilderBase<BallScrew\>.UseChangedObject, 
BuilderBase<BallScrew\>.SetPointKey, 
BuilderBase<BallScrew\>.BuildObject, 
BuilderBase<BallScrew\>.BuildDocument, 
BuilderBase<BallScrew\>.UseInterface, 
BuilderBase<BallScrew\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BallScrewBuilder\(\)

```csharp
public BallScrewBuilder()
```

## Properties

### BallDiameter

```csharp
public Variable BallDiameter { get; set; }
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

### HandOfScrew

```csharp
public string HandOfScrew { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Lead

```csharp
public Variable Lead { get; set; }
```

#### Property Value

 Variable

### NutLength

```csharp
public Variable NutLength { get; set; }
```

#### Property Value

 Variable

### NutOD

```csharp
public Variable NutOD { get; set; }
```

#### Property Value

 Variable

### NutPCD

```csharp
public Variable NutPCD { get; set; }
```

#### Property Value

 Variable

### NutScrewEndLength

```csharp
public Variable NutScrewEndLength { get; set; }
```

#### Property Value

 Variable

### NutScrewStartLength

```csharp
public Variable NutScrewStartLength { get; set; }
```

#### Property Value

 Variable

### NutStartLength

```csharp
public Variable NutStartLength { get; set; }
```

#### Property Value

 Variable

### ShaftLength

```csharp
public Variable ShaftLength { get; set; }
```

#### Property Value

 Variable

### ShaftPCD

```csharp
public Variable ShaftPCD { get; set; }
```

#### Property Value

 Variable

### ShaftReferencePosition

```csharp
public PointBase ShaftReferencePosition { get; }
```

#### Property Value

 PointBase

### ShaftScrewEndLength

```csharp
public Variable ShaftScrewEndLength { get; set; }
```

#### Property Value

 Variable

### ShaftScrewStartAngle

```csharp
public Variable ShaftScrewStartAngle { get; set; }
```

#### Property Value

 Variable

### ShaftScrewStartLength

```csharp
public Variable ShaftScrewStartLength { get; set; }
```

#### Property Value

 Variable

## Methods

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase created, Document doc)
```

#### Parameters

`created` ObjectBase

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


