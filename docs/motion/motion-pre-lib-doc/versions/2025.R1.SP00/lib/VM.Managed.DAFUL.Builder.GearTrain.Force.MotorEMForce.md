#  Class MotorEMForce

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

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce__ctor"></a> MotorEMForce\(\)

```csharp
public MotorEMForce()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_FileFormatType"></a> FileFormatType

```csharp
protected virtual PropertyMotorEMForce.FileFormatType FileFormatType { get; }
```

#### Property Value

 PropertyMotorEMForce.FileFormatType

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_Position"></a> Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_ReferenceOfRotational"></a> ReferenceOfRotational

```csharp
public ObjectBase ReferenceOfRotational { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_Rotor"></a> Rotor

```csharp
public ObjectBase Rotor { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_Stator"></a> Stator

```csharp
public ObjectBase Stator { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_XAxis"></a> XAxis

```csharp
public DirectionBase XAxis { get; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_ZAxis"></a> ZAxis

```csharp
public DirectionBase ZAxis { get; }
```

#### Property Value

 DirectionBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_Force_MotorEMForce_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

