#  Class FTF3D

Namespace: [VM.Managed.DAFUL.Builder.FE.Contact](VM.Managed.DAFUL.Builder.FE.Contact.md)  
Assembly: VMBldFECt.dll  

```csharp
public class FTF3D : BuilderNamed<FTF3D>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<FTF3D\> ← 
BuilderSymmetric<FTF3D\> ← 
BuilderNamed<FTF3D\> ← 
[FTF3D](VM.Managed.DAFUL.Builder.FE.Contact.FTF3D.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<FTF3D\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<FTF3D\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<FTF3D\>.Name, 
BuilderSymmetric<FTF3D\>.Build\(Document\), 
BuilderSymmetric<FTF3D\>.Symmetric, 
BuilderSymmetric<FTF3D\>.CurrentSymmetric, 
BuilderBase<FTF3D\>.m\_bSuccess, 
BuilderBase<FTF3D\>.Build\(Document\), 
BuilderBase<FTF3D\>.Build\(Document, List<string\>\), 
BuilderBase<FTF3D\>.Validate\(IList<string\>\), 
BuilderBase<FTF3D\>.Success\(\), 
BuilderBase<FTF3D\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<FTF3D\>.OnFinalBuild\(string, Document\), 
BuilderBase<FTF3D\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<FTF3D\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<FTF3D\>.Parameters, 
BuilderBase<FTF3D\>.AddToDoc, 
BuilderBase<FTF3D\>.UseChangedObject, 
BuilderBase<FTF3D\>.SetPointKey, 
BuilderBase<FTF3D\>.BuildObject, 
BuilderBase<FTF3D\>.BuildDocument, 
BuilderBase<FTF3D\>.UseInterface, 
BuilderBase<FTF3D\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTF3D__ctor"></a> FTF3D\(\)

```csharp
public FTF3D()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTF3D_ActionContactable"></a> ActionContactable

```csharp
public IContactableFlex3D ActionContactable { get; }
```

#### Property Value

 IContactableFlex3D

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTF3D_BaseContactable"></a> BaseContactable

```csharp
public IContactableFlex3D BaseContactable { get; }
```

#### Property Value

 IContactableFlex3D

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_Contact_FTF3D_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

