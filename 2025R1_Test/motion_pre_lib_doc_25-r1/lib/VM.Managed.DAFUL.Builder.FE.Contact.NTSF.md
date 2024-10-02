#  Class NTSF

Namespace: [VM.Managed.DAFUL.Builder.FE.Contact](VM.Managed.DAFUL.Builder.FE.Contact.md)  
Assembly: VMBldFECt.dll  

```csharp
public class NTSF : BuilderNamed<NTSF>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<NTSF\> ← 
BuilderSymmetric<NTSF\> ← 
BuilderNamed<NTSF\> ← 
[NTSF](VM.Managed.DAFUL.Builder.FE.Contact.NTSF.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<NTSF\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<NTSF\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<NTSF\>.Name, 
BuilderSymmetric<NTSF\>.Build\(Document\), 
BuilderSymmetric<NTSF\>.Symmetric, 
BuilderSymmetric<NTSF\>.CurrentSymmetric, 
BuilderBase<NTSF\>.m\_bSuccess, 
BuilderBase<NTSF\>.Build\(Document\), 
BuilderBase<NTSF\>.Build\(Document, List<string\>\), 
BuilderBase<NTSF\>.Validate\(IList<string\>\), 
BuilderBase<NTSF\>.Success\(\), 
BuilderBase<NTSF\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<NTSF\>.OnFinalBuild\(string, Document\), 
BuilderBase<NTSF\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<NTSF\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<NTSF\>.Parameters, 
BuilderBase<NTSF\>.AddToDoc, 
BuilderBase<NTSF\>.UseChangedObject, 
BuilderBase<NTSF\>.SetPointKey, 
BuilderBase<NTSF\>.BuildObject, 
BuilderBase<NTSF\>.BuildDocument, 
BuilderBase<NTSF\>.UseInterface, 
BuilderBase<NTSF\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_NTSF__ctor"></a> NTSF\(\)

```csharp
public NTSF()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_NTSF_ActionContactable"></a> ActionContactable

```csharp
public INTSFContactable ActionContactable { get; }
```

#### Property Value

 INTSFContactable

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_NTSF_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid3D BaseContactable { get; }
```

#### Property Value

 IContactableRigid3D

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_NTSF_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

