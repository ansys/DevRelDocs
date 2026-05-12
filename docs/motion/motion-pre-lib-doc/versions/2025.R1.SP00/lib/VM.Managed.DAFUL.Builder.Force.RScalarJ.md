#  Class RScalarJ

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFP.dll  

```csharp
public class RScalarJ : BuilderJoint<RScalar>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RScalar\> ← 
BuilderSymmetric<RScalar\> ← 
BuilderNamed<RScalar\> ← 
BuilderJoint<RScalar\> ← 
[RScalarJ](VM.Managed.DAFUL.Builder.Force.RScalarJ.md)

#### Implements

IBuilder

#### Inherited Members

BuilderJoint<RScalar\>.OnPostBuild\(ObjectBase, Document\), 
BuilderJoint<RScalar\>.FindReferenceParent\(IConnectable, Document\), 
BuilderJoint<RScalar\>.GetJointForReference\(IRSpringDamperComponent\), 
BuilderNamed<RScalar\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<RScalar\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<RScalar\>.Name, 
BuilderSymmetric<RScalar\>.Build\(Document\), 
BuilderSymmetric<RScalar\>.Symmetric, 
BuilderSymmetric<RScalar\>.CurrentSymmetric, 
BuilderBase<RScalar\>.m\_bSuccess, 
BuilderBase<RScalar\>.Build\(Document\), 
BuilderBase<RScalar\>.Build\(Document, List<string\>\), 
BuilderBase<RScalar\>.Validate\(IList<string\>\), 
BuilderBase<RScalar\>.Success\(\), 
BuilderBase<RScalar\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<RScalar\>.OnFinalBuild\(string, Document\), 
BuilderBase<RScalar\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<RScalar\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<RScalar\>.Parameters, 
BuilderBase<RScalar\>.AddToDoc, 
BuilderBase<RScalar\>.UseChangedObject, 
BuilderBase<RScalar\>.SetPointKey, 
BuilderBase<RScalar\>.BuildObject, 
BuilderBase<RScalar\>.BuildDocument, 
BuilderBase<RScalar\>.UseInterface, 
BuilderBase<RScalar\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_RScalarJ__ctor"></a> RScalarJ\(\)

```csharp
public RScalarJ()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Force_RScalarJ_Joints"></a> Joints

```csharp
public ObjectBase Joints { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_RScalarJ_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

