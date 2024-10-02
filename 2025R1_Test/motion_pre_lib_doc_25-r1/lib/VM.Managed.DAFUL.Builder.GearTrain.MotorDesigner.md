#  Class MotorDesigner

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class MotorDesigner : BuilderNamed<MotorDesigner>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<MotorDesigner\> ← 
BuilderSymmetric<MotorDesigner\> ← 
BuilderNamed<MotorDesigner\> ← 
[MotorDesigner](VM.Managed.DAFUL.Builder.GearTrain.MotorDesigner.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<MotorDesigner\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<MotorDesigner\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<MotorDesigner\>.Name, 
BuilderSymmetric<MotorDesigner\>.Build\(Document\), 
BuilderSymmetric<MotorDesigner\>.Symmetric, 
BuilderSymmetric<MotorDesigner\>.CurrentSymmetric, 
BuilderBase<MotorDesigner\>.m\_bSuccess, 
BuilderBase<MotorDesigner\>.Build\(Document\), 
BuilderBase<MotorDesigner\>.Build\(Document, List<string\>\), 
BuilderBase<MotorDesigner\>.Validate\(IList<string\>\), 
BuilderBase<MotorDesigner\>.Success\(\), 
BuilderBase<MotorDesigner\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<MotorDesigner\>.OnFinalBuild\(string, Document\), 
BuilderBase<MotorDesigner\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<MotorDesigner\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<MotorDesigner\>.Parameters, 
BuilderBase<MotorDesigner\>.AddToDoc, 
BuilderBase<MotorDesigner\>.UseChangedObject, 
BuilderBase<MotorDesigner\>.SetPointKey, 
BuilderBase<MotorDesigner\>.BuildObject, 
BuilderBase<MotorDesigner\>.BuildDocument, 
BuilderBase<MotorDesigner\>.UseInterface, 
BuilderBase<MotorDesigner\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_MotorDesigner__ctor"></a> MotorDesigner\(\)

```csharp
public MotorDesigner()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_MotorDesigner_Axis"></a> Axis

```csharp
public DirectionBase Axis { get; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_MotorDesigner_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_MotorDesigner_Position"></a> Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_MotorDesigner_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

