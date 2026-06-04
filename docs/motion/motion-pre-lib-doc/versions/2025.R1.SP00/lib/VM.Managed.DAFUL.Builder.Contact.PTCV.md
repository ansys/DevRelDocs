#  Class PTCV

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class PTCV : ContactConstraint<PTCV, PropertyPTCV>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PTCV\> ← 
BuilderSymmetric<PTCV\> ← 
BuilderNamed<PTCV\> ← 
[ContactConstraint<PTCV, PropertyPTCV\>](VM.Managed.DAFUL.Builder.Contact.ContactConstraint\-2.md) ← 
[PTCV](VM.Managed.DAFUL.Builder.Contact.PTCV.md)

#### Implements

IBuilder

#### Inherited Members

[ContactConstraint<PTCV, PropertyPTCV\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.Contact.ContactConstraint\-2.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_ContactConstraint\_2\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
BuilderNamed<PTCV\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PTCV\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PTCV\>.Name, 
BuilderSymmetric<PTCV\>.Build\(Document\), 
BuilderSymmetric<PTCV\>.Symmetric, 
BuilderSymmetric<PTCV\>.CurrentSymmetric, 
BuilderBase<PTCV\>.m\_bSuccess, 
BuilderBase<PTCV\>.Build\(Document\), 
BuilderBase<PTCV\>.Build\(Document, List<string\>\), 
BuilderBase<PTCV\>.Validate\(IList<string\>\), 
BuilderBase<PTCV\>.Success\(\), 
BuilderBase<PTCV\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PTCV\>.OnFinalBuild\(string, Document\), 
BuilderBase<PTCV\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PTCV\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PTCV\>.Parameters, 
BuilderBase<PTCV\>.AddToDoc, 
BuilderBase<PTCV\>.UseChangedObject, 
BuilderBase<PTCV\>.SetPointKey, 
BuilderBase<PTCV\>.BuildObject, 
BuilderBase<PTCV\>.BuildDocument, 
BuilderBase<PTCV\>.UseInterface, 
BuilderBase<PTCV\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_PTCV__ctor"></a> PTCV\(\)

```csharp
public PTCV()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_PTCV_ActionContactable"></a> ActionContactable

```csharp
public IConnectable ActionContactable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Contact_PTCV_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid2D BaseContactable { get; }
```

#### Property Value

 IContactableRigid2D

### <a id="VM_Managed_DAFUL_Builder_Contact_PTCV_Position"></a> Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_PTCV_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

