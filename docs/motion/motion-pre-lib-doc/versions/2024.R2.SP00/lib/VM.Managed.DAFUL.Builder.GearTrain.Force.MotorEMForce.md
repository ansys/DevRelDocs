# Class MotorEMForce

Namespace: [VM.Managed.DAFUL.Builder.GearTrain.Force](VM.Managed.DAFUL.Builder.GearTrain.Force.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class MotorEMForce : BuilderNamed<MotorEMForce>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<MotorEMForce\> ← 
BuilderSymmetric<MotorEMForce\> ← 
BuilderNamed<MotorEMForce\> ← 
[MotorEMForce](VM.Managed.DAFUL.Builder.GearTrain.Force.MotorEMForce.md)

#### Derived

[MotorEMForceForAM](VM.Managed.DAFUL.Builder.GearTrain.Force.MotorEMForceForAM.md), 
[MotorEMForceForJMAG](VM.Managed.DAFUL.Builder.GearTrain.Force.MotorEMForceForJMAG.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<MotorEMForce\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<MotorEMForce\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<MotorEMForce\>.Name, 
BuilderSymmetric<MotorEMForce\>.Build\(Document\), 
BuilderSymmetric<MotorEMForce\>.Symmetric, 
BuilderSymmetric<MotorEMForce\>.CurrentSymmetric, 
BuilderBase<MotorEMForce\>.m\_bSuccess, 
BuilderBase<MotorEMForce\>.Build\(Document\), 
BuilderBase<MotorEMForce\>.Build\(Document, List<string\>\), 
BuilderBase<MotorEMForce\>.Validate\(IList<string\>\), 
BuilderBase<MotorEMForce\>.Success\(\), 
BuilderBase<MotorEMForce\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<MotorEMForce\>.OnFinalBuild\(string, Document\), 
BuilderBase<MotorEMForce\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<MotorEMForce\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<MotorEMForce\>.Parameters, 
BuilderBase<MotorEMForce\>.AddToDoc, 
BuilderBase<MotorEMForce\>.UseChangedObject, 
BuilderBase<MotorEMForce\>.SetPointKey, 
BuilderBase<MotorEMForce\>.BuildObject, 
BuilderBase<MotorEMForce\>.BuildDocument, 
BuilderBase<MotorEMForce\>.UseInterface, 
BuilderBase<MotorEMForce\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### MotorEMForce\(\)

```csharp
public MotorEMForce()
```

## Properties

### FileFormatType

```csharp
protected virtual PropertyMotorEMForce.FileFormatType FileFormatType { get; }
```

#### Property Value

 PropertyMotorEMForce.FileFormatType

### Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### ReferenceOfRotational

```csharp
public ObjectBase ReferenceOfRotational { get; }
```

#### Property Value

 ObjectBase

### Rotor

```csharp
public ObjectBase Rotor { get; }
```

#### Property Value

 ObjectBase

### Stator

```csharp
public ObjectBase Stator { get; }
```

#### Property Value

 ObjectBase

### XAxis

```csharp
public DirectionBase XAxis { get; }
```

#### Property Value

 DirectionBase

### ZAxis

```csharp
public DirectionBase ZAxis { get; }
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


