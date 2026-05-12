#  Class CVCV

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class CVCV : ContactConstraint<CVCV, PropertyCVCV>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<CVCV\> ← 
BuilderSymmetric<CVCV\> ← 
BuilderNamed<CVCV\> ← 
[ContactConstraint<CVCV, PropertyCVCV\>](VM.Managed.DAFUL.Builder.Contact.ContactConstraint\-2.md) ← 
[CVCV](VM.Managed.DAFUL.Builder.Contact.CVCV.md)

#### Implements

IBuilder

#### Inherited Members

[ContactConstraint<CVCV, PropertyCVCV\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.Contact.ContactConstraint\-2.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ContactConstraint\_2\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
BuilderNamed<CVCV\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<CVCV\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<CVCV\>.Name, 
BuilderSymmetric<CVCV\>.Build\(Document\), 
BuilderSymmetric<CVCV\>.Symmetric, 
BuilderSymmetric<CVCV\>.CurrentSymmetric, 
BuilderBase<CVCV\>.m\_bSuccess, 
BuilderBase<CVCV\>.Build\(Document\), 
BuilderBase<CVCV\>.Build\(Document, List<string\>\), 
BuilderBase<CVCV\>.Validate\(IList<string\>\), 
BuilderBase<CVCV\>.Success\(\), 
BuilderBase<CVCV\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<CVCV\>.OnFinalBuild\(string, Document\), 
BuilderBase<CVCV\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<CVCV\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<CVCV\>.Parameters, 
BuilderBase<CVCV\>.AddToDoc, 
BuilderBase<CVCV\>.UseChangedObject, 
BuilderBase<CVCV\>.SetPointKey, 
BuilderBase<CVCV\>.BuildObject, 
BuilderBase<CVCV\>.BuildDocument, 
BuilderBase<CVCV\>.UseInterface, 
BuilderBase<CVCV\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_CVCV__ctor"></a> CVCV\(\)

```csharp
public CVCV()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_CVCV_ActionContactable"></a> ActionContactable

```csharp
public IContactableRigid2D ActionContactable { get; }
```

#### Property Value

 IContactableRigid2D

### <a id="VM_Managed_DAFUL_Builder_Contact_CVCV_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid2D BaseContactable { get; }
```

#### Property Value

 IContactableRigid2D

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_CVCV_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

