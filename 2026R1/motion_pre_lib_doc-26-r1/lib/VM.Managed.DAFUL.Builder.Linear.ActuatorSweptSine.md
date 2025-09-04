#  Class ActuatorSweptSine

Namespace: [VM.Managed.DAFUL.Builder.Linear](VM.Managed.DAFUL.Builder.Linear.md)  
Assembly: VMBldLinear.dll  

```csharp
public class ActuatorSweptSine : Actuator<ActuatorSweptSine, PropertyActuatorSweptSine>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ActuatorSweptSine\> ← 
BuilderSymmetric<ActuatorSweptSine\> ← 
BuilderNamed<ActuatorSweptSine\> ← 
[Actuator<ActuatorSweptSine, PropertyActuatorSweptSine\>](VM.Managed.DAFUL.Builder.Linear.Actuator\-2.md) ← 
[ActuatorSweptSine](VM.Managed.DAFUL.Builder.Linear.ActuatorSweptSine.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ActuatorSweptSine\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ActuatorSweptSine\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ActuatorSweptSine\>.Name, 
BuilderSymmetric<ActuatorSweptSine\>.Build\(Document\), 
BuilderSymmetric<ActuatorSweptSine\>.Symmetric, 
BuilderSymmetric<ActuatorSweptSine\>.CurrentSymmetric, 
BuilderBase<ActuatorSweptSine\>.m\_bSuccess, 
BuilderBase<ActuatorSweptSine\>.Build\(Document\), 
BuilderBase<ActuatorSweptSine\>.Build\(Document, List<string\>\), 
BuilderBase<ActuatorSweptSine\>.Validate\(IList<string\>\), 
BuilderBase<ActuatorSweptSine\>.Success\(\), 
BuilderBase<ActuatorSweptSine\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ActuatorSweptSine\>.OnFinalBuild\(string, Document\), 
BuilderBase<ActuatorSweptSine\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ActuatorSweptSine\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ActuatorSweptSine\>.Parameters, 
BuilderBase<ActuatorSweptSine\>.AddToDoc, 
BuilderBase<ActuatorSweptSine\>.UseChangedObject, 
BuilderBase<ActuatorSweptSine\>.SetPointKey, 
BuilderBase<ActuatorSweptSine\>.BuildObject, 
BuilderBase<ActuatorSweptSine\>.BuildDocument, 
BuilderBase<ActuatorSweptSine\>.UseInterface, 
BuilderBase<ActuatorSweptSine\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorSweptSine__ctor"></a> ActuatorSweptSine\(\)

```csharp
public ActuatorSweptSine()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorSweptSine_Magnitude"></a> Magnitude

```csharp
public Variable Magnitude { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorSweptSine_PhaseAngle"></a> PhaseAngle

```csharp
public Variable PhaseAngle { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorSweptSine_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

