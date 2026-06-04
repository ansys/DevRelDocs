#  Class RSpringDamperJ

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFB.dll  

```csharp
public class RSpringDamperJ : BuilderJoint<RSpringDamper>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RSpringDamper\> ← 
BuilderSymmetric<RSpringDamper\> ← 
BuilderNamed<RSpringDamper\> ← 
BuilderJoint<RSpringDamper\> ← 
[RSpringDamperJ](VM.Managed.DAFUL.Builder.Force.RSpringDamperJ.md)

#### Implements

IBuilder

#### Inherited Members

BuilderJoint<RSpringDamper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderJoint<RSpringDamper\>.FindReferenceParent\(IConnectable, Document\), 
BuilderJoint<RSpringDamper\>.GetJointForReference\(IRSpringDamperComponent\), 
BuilderNamed<RSpringDamper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<RSpringDamper\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<RSpringDamper\>.Name, 
BuilderSymmetric<RSpringDamper\>.Build\(Document\), 
BuilderSymmetric<RSpringDamper\>.Symmetric, 
BuilderSymmetric<RSpringDamper\>.CurrentSymmetric, 
BuilderBase<RSpringDamper\>.m\_bSuccess, 
BuilderBase<RSpringDamper\>.Build\(Document\), 
BuilderBase<RSpringDamper\>.Build\(Document, List<string\>\), 
BuilderBase<RSpringDamper\>.Validate\(IList<string\>\), 
BuilderBase<RSpringDamper\>.Success\(\), 
BuilderBase<RSpringDamper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<RSpringDamper\>.OnFinalBuild\(string, Document\), 
BuilderBase<RSpringDamper\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<RSpringDamper\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<RSpringDamper\>.Parameters, 
BuilderBase<RSpringDamper\>.AddToDoc, 
BuilderBase<RSpringDamper\>.UseChangedObject, 
BuilderBase<RSpringDamper\>.SetPointKey, 
BuilderBase<RSpringDamper\>.BuildObject, 
BuilderBase<RSpringDamper\>.BuildDocument, 
BuilderBase<RSpringDamper\>.UseInterface, 
BuilderBase<RSpringDamper\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_RSpringDamperJ__ctor"></a> RSpringDamperJ\(\)

```csharp
public RSpringDamperJ()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Force_RSpringDamperJ_Joints"></a> Joints

```csharp
public ObjectBase Joints { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_RSpringDamperJ_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

