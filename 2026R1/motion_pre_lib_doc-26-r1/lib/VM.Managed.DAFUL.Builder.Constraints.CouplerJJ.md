#  Class CouplerJJ

Namespace: [VM.Managed.DAFUL.Builder.Constraints](VM.Managed.DAFUL.Builder.Constraints.md)  
Assembly: VMBldCP.dll  

```csharp
public class CouplerJJ : Coupler<Coupler, PropertyCoupler>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Coupler\> ← 
BuilderSymmetric<Coupler\> ← 
BuilderNamed<Coupler\> ← 
[Coupler<Coupler, PropertyCoupler\>](VM.Managed.DAFUL.Builder.Constraints.Coupler\-2.md) ← 
[CouplerJJ](VM.Managed.DAFUL.Builder.Constraints.CouplerJJ.md)

#### Implements

IBuilder

#### Inherited Members

[Coupler<Coupler, PropertyCoupler\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.Constraints.Coupler\-2.md\#VM\_Managed\_DAFUL\_Builder\_Constraints\_Coupler\_2\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[Coupler<Coupler, PropertyCoupler\>.CurrentJoint1](VM.Managed.DAFUL.Builder.Constraints.Coupler\-2.md\#VM\_Managed\_DAFUL\_Builder\_Constraints\_Coupler\_2\_CurrentJoint1), 
[Coupler<Coupler, PropertyCoupler\>.CurrentJoint2](VM.Managed.DAFUL.Builder.Constraints.Coupler\-2.md\#VM\_Managed\_DAFUL\_Builder\_Constraints\_Coupler\_2\_CurrentJoint2), 
BuilderNamed<Coupler\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Coupler\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Coupler\>.Name, 
BuilderSymmetric<Coupler\>.Build\(Document\), 
BuilderSymmetric<Coupler\>.Symmetric, 
BuilderSymmetric<Coupler\>.CurrentSymmetric, 
BuilderBase<Coupler\>.m\_bSuccess, 
BuilderBase<Coupler\>.Build\(Document\), 
BuilderBase<Coupler\>.Build\(Document, List<string\>\), 
BuilderBase<Coupler\>.Validate\(IList<string\>\), 
BuilderBase<Coupler\>.Success\(\), 
BuilderBase<Coupler\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Coupler\>.OnFinalBuild\(string, Document\), 
BuilderBase<Coupler\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Coupler\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Coupler\>.Parameters, 
BuilderBase<Coupler\>.AddToDoc, 
BuilderBase<Coupler\>.UseChangedObject, 
BuilderBase<Coupler\>.SetPointKey, 
BuilderBase<Coupler\>.BuildObject, 
BuilderBase<Coupler\>.BuildDocument, 
BuilderBase<Coupler\>.UseInterface, 
BuilderBase<Coupler\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Constraints_CouplerJJ__ctor"></a> CouplerJJ\(\)

```csharp
public CouplerJJ()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_Constraints_CouplerJJ_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

