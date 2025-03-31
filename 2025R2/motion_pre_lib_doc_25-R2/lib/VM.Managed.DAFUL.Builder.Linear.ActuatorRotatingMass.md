# Class ActuatorRotatingMass

Namespace: [VM.Managed.DAFUL.Builder.Linear](VM.Managed.DAFUL.Builder.Linear.md)  
Assembly: VMBldLinear.dll  

```csharp
public class ActuatorRotatingMass : Actuator<ActuatorRotatingMass, PropertyActuatorRotatingMass>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ActuatorRotatingMass\> ← 
BuilderSymmetric<ActuatorRotatingMass\> ← 
BuilderNamed<ActuatorRotatingMass\> ← 
[Actuator<ActuatorRotatingMass, PropertyActuatorRotatingMass\>](VM.Managed.DAFUL.Builder.Linear.Actuator\-2.md) ← 
[ActuatorRotatingMass](VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ActuatorRotatingMass\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ActuatorRotatingMass\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ActuatorRotatingMass\>.Name, 
BuilderSymmetric<ActuatorRotatingMass\>.Build\(Document\), 
BuilderSymmetric<ActuatorRotatingMass\>.Symmetric, 
BuilderSymmetric<ActuatorRotatingMass\>.CurrentSymmetric, 
BuilderBase<ActuatorRotatingMass\>.m\_bSuccess, 
BuilderBase<ActuatorRotatingMass\>.Build\(Document\), 
BuilderBase<ActuatorRotatingMass\>.Build\(Document, List<string\>\), 
BuilderBase<ActuatorRotatingMass\>.Validate\(IList<string\>\), 
BuilderBase<ActuatorRotatingMass\>.Success\(\), 
BuilderBase<ActuatorRotatingMass\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ActuatorRotatingMass\>.OnFinalBuild\(string, Document\), 
BuilderBase<ActuatorRotatingMass\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ActuatorRotatingMass\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ActuatorRotatingMass\>.Parameters, 
BuilderBase<ActuatorRotatingMass\>.AddToDoc, 
BuilderBase<ActuatorRotatingMass\>.UseChangedObject, 
BuilderBase<ActuatorRotatingMass\>.SetPointKey, 
BuilderBase<ActuatorRotatingMass\>.BuildObject, 
BuilderBase<ActuatorRotatingMass\>.BuildDocument, 
BuilderBase<ActuatorRotatingMass\>.UseInterface, 
BuilderBase<ActuatorRotatingMass\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ActuatorRotatingMass\(\)

```csharp
public ActuatorRotatingMass()
```

## Properties

### InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

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

### Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


