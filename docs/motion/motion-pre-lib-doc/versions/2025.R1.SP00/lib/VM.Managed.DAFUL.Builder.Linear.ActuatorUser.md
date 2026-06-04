#  Class ActuatorUser

Namespace: [VM.Managed.DAFUL.Builder.Linear](VM.Managed.DAFUL.Builder.Linear.md)  
Assembly: VMBldLinear.dll  

```csharp
public class ActuatorUser : Actuator<ActuatorUser, PropertyActuatorUser>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ActuatorUser\> ← 
BuilderSymmetric<ActuatorUser\> ← 
BuilderNamed<ActuatorUser\> ← 
[Actuator<ActuatorUser, PropertyActuatorUser\>](VM.Managed.DAFUL.Builder.Linear.Actuator\-2.md) ← 
[ActuatorUser](VM.Managed.DAFUL.Builder.Linear.ActuatorUser.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ActuatorUser\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ActuatorUser\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ActuatorUser\>.Name, 
BuilderSymmetric<ActuatorUser\>.Build\(Document\), 
BuilderSymmetric<ActuatorUser\>.Symmetric, 
BuilderSymmetric<ActuatorUser\>.CurrentSymmetric, 
BuilderBase<ActuatorUser\>.m\_bSuccess, 
BuilderBase<ActuatorUser\>.Build\(Document\), 
BuilderBase<ActuatorUser\>.Build\(Document, List<string\>\), 
BuilderBase<ActuatorUser\>.Validate\(IList<string\>\), 
BuilderBase<ActuatorUser\>.Success\(\), 
BuilderBase<ActuatorUser\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ActuatorUser\>.OnFinalBuild\(string, Document\), 
BuilderBase<ActuatorUser\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ActuatorUser\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ActuatorUser\>.Parameters, 
BuilderBase<ActuatorUser\>.AddToDoc, 
BuilderBase<ActuatorUser\>.UseChangedObject, 
BuilderBase<ActuatorUser\>.SetPointKey, 
BuilderBase<ActuatorUser\>.BuildObject, 
BuilderBase<ActuatorUser\>.BuildDocument, 
BuilderBase<ActuatorUser\>.UseInterface, 
BuilderBase<ActuatorUser\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorUser__ctor"></a> ActuatorUser\(\)

```csharp
public ActuatorUser()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorUser_F"></a> F

```csharp
public Variable F { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorUser_PhaseAngle"></a> PhaseAngle

```csharp
public Variable PhaseAngle { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorUser_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

