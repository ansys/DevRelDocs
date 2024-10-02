#  Class FTR3D

Namespace: [VM.Managed.DAFUL.Builder.FE.Contact](VM.Managed.DAFUL.Builder.FE.Contact.md)  
Assembly: VMBldFECt.dll  

```csharp
public class FTR3D : BuilderNamed<FTR3D>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<FTR3D\> ← 
BuilderSymmetric<FTR3D\> ← 
BuilderNamed<FTR3D\> ← 
[FTR3D](VM.Managed.DAFUL.Builder.FE.Contact.FTR3D.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<FTR3D\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<FTR3D\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<FTR3D\>.Name, 
BuilderSymmetric<FTR3D\>.Build\(Document\), 
BuilderSymmetric<FTR3D\>.Symmetric, 
BuilderSymmetric<FTR3D\>.CurrentSymmetric, 
BuilderBase<FTR3D\>.m\_bSuccess, 
BuilderBase<FTR3D\>.Build\(Document\), 
BuilderBase<FTR3D\>.Build\(Document, List<string\>\), 
BuilderBase<FTR3D\>.Validate\(IList<string\>\), 
BuilderBase<FTR3D\>.Success\(\), 
BuilderBase<FTR3D\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<FTR3D\>.OnFinalBuild\(string, Document\), 
BuilderBase<FTR3D\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<FTR3D\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<FTR3D\>.Parameters, 
BuilderBase<FTR3D\>.AddToDoc, 
BuilderBase<FTR3D\>.UseChangedObject, 
BuilderBase<FTR3D\>.SetPointKey, 
BuilderBase<FTR3D\>.BuildObject, 
BuilderBase<FTR3D\>.BuildDocument, 
BuilderBase<FTR3D\>.UseInterface, 
BuilderBase<FTR3D\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTR3D__ctor"></a> FTR3D\(\)

```csharp
public FTR3D()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTR3D_ActionContactable"></a> ActionContactable

```csharp
public IContactableFlex3D ActionContactable { get; }
```

#### Property Value

 IContactableFlex3D

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTR3D_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid3D BaseContactable { get; }
```

#### Property Value

 IContactableRigid3D

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTR3D_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

