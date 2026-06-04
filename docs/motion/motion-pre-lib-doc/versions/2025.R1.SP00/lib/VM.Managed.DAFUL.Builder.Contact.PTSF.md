#  Class PTSF

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class PTSF : ContactConstraint<PTSF, PropertyPTSF>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PTSF\> ← 
BuilderSymmetric<PTSF\> ← 
BuilderNamed<PTSF\> ← 
[ContactConstraint<PTSF, PropertyPTSF\>](VM.Managed.DAFUL.Builder.Contact.ContactConstraint\-2.md) ← 
[PTSF](VM.Managed.DAFUL.Builder.Contact.PTSF.md)

#### Implements

IBuilder

#### Inherited Members

[ContactConstraint<PTSF, PropertyPTSF\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.Contact.ContactConstraint\-2.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ContactConstraint\_2\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
BuilderNamed<PTSF\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PTSF\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PTSF\>.Name, 
BuilderSymmetric<PTSF\>.Build\(Document\), 
BuilderSymmetric<PTSF\>.Symmetric, 
BuilderSymmetric<PTSF\>.CurrentSymmetric, 
BuilderBase<PTSF\>.m\_bSuccess, 
BuilderBase<PTSF\>.Build\(Document\), 
BuilderBase<PTSF\>.Build\(Document, List<string\>\), 
BuilderBase<PTSF\>.Validate\(IList<string\>\), 
BuilderBase<PTSF\>.Success\(\), 
BuilderBase<PTSF\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PTSF\>.OnFinalBuild\(string, Document\), 
BuilderBase<PTSF\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PTSF\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PTSF\>.Parameters, 
BuilderBase<PTSF\>.AddToDoc, 
BuilderBase<PTSF\>.UseChangedObject, 
BuilderBase<PTSF\>.SetPointKey, 
BuilderBase<PTSF\>.BuildObject, 
BuilderBase<PTSF\>.BuildDocument, 
BuilderBase<PTSF\>.UseInterface, 
BuilderBase<PTSF\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_PTSF__ctor"></a> PTSF\(\)

```csharp
public PTSF()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_PTSF_ActionContactable"></a> ActionContactable

```csharp
public IConnectable ActionContactable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Contact_PTSF_ActionPoint"></a> ActionPoint

```csharp
public PointBase ActionPoint { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_Contact_PTSF_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid3D BaseContactable { get; }
```

#### Property Value

 IContactableRigid3D

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_PTSF_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

