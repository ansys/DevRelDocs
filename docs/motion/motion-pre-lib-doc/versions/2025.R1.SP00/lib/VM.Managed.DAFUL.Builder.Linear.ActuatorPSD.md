#  Class ActuatorPSD

Namespace: [VM.Managed.DAFUL.Builder.Linear](VM.Managed.DAFUL.Builder.Linear.md)  
Assembly: VMBldLinear.dll  

```csharp
public class ActuatorPSD : Actuator<ActuatorPSD, PropertyActuatorPSD>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ActuatorPSD\> ← 
BuilderSymmetric<ActuatorPSD\> ← 
BuilderNamed<ActuatorPSD\> ← 
[Actuator<ActuatorPSD, PropertyActuatorPSD\>](VM.Managed.DAFUL.Builder.Linear.Actuator\-2.md) ← 
[ActuatorPSD](VM.Managed.DAFUL.Builder.Linear.ActuatorPSD.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ActuatorPSD\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ActuatorPSD\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ActuatorPSD\>.Name, 
BuilderSymmetric<ActuatorPSD\>.Build\(Document\), 
BuilderSymmetric<ActuatorPSD\>.Symmetric, 
BuilderSymmetric<ActuatorPSD\>.CurrentSymmetric, 
BuilderBase<ActuatorPSD\>.m\_bSuccess, 
BuilderBase<ActuatorPSD\>.Build\(Document\), 
BuilderBase<ActuatorPSD\>.Build\(Document, List<string\>\), 
BuilderBase<ActuatorPSD\>.Validate\(IList<string\>\), 
BuilderBase<ActuatorPSD\>.Success\(\), 
BuilderBase<ActuatorPSD\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ActuatorPSD\>.OnFinalBuild\(string, Document\), 
BuilderBase<ActuatorPSD\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ActuatorPSD\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ActuatorPSD\>.Parameters, 
BuilderBase<ActuatorPSD\>.AddToDoc, 
BuilderBase<ActuatorPSD\>.UseChangedObject, 
BuilderBase<ActuatorPSD\>.SetPointKey, 
BuilderBase<ActuatorPSD\>.BuildObject, 
BuilderBase<ActuatorPSD\>.BuildDocument, 
BuilderBase<ActuatorPSD\>.UseInterface, 
BuilderBase<ActuatorPSD\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorPSD__ctor"></a> ActuatorPSD\(\)

```csharp
public ActuatorPSD()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorPSD_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorPSD_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Linear_ActuatorPSD_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

