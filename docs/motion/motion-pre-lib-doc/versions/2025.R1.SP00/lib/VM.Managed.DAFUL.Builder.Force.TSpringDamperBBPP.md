#  Class TSpringDamperBBPP

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFB.dll  

```csharp
public class TSpringDamperBBPP : Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<TSpringDamper\> ← 
BuilderSymmetric<TSpringDamper\> ← 
BuilderNamed<TSpringDamper\> ← 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\> ← 
[TSpringDamperBBPP](VM.Managed.DAFUL.Builder.Force.TSpringDamperBBPP.md)

#### Implements

IBuilder

#### Inherited Members

Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable, 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable, 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc, 
Connector<TSpringDamper, PropertyTSpringDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<TSpringDamper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<TSpringDamper\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<TSpringDamper\>.Name, 
BuilderSymmetric<TSpringDamper\>.Build\(Document\), 
BuilderSymmetric<TSpringDamper\>.Symmetric, 
BuilderSymmetric<TSpringDamper\>.CurrentSymmetric, 
BuilderBase<TSpringDamper\>.m\_bSuccess, 
BuilderBase<TSpringDamper\>.Build\(Document\), 
BuilderBase<TSpringDamper\>.Build\(Document, List<string\>\), 
BuilderBase<TSpringDamper\>.Validate\(IList<string\>\), 
BuilderBase<TSpringDamper\>.Success\(\), 
BuilderBase<TSpringDamper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<TSpringDamper\>.OnFinalBuild\(string, Document\), 
BuilderBase<TSpringDamper\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<TSpringDamper\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<TSpringDamper\>.Parameters, 
BuilderBase<TSpringDamper\>.AddToDoc, 
BuilderBase<TSpringDamper\>.UseChangedObject, 
BuilderBase<TSpringDamper\>.SetPointKey, 
BuilderBase<TSpringDamper\>.BuildObject, 
BuilderBase<TSpringDamper\>.BuildDocument, 
BuilderBase<TSpringDamper\>.UseInterface, 
BuilderBase<TSpringDamper\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_TSpringDamperBBPP__ctor"></a> TSpringDamperBBPP\(\)

```csharp
public TSpringDamperBBPP()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_TSpringDamperBBPP_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

