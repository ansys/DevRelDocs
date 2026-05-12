#  Class FaceSet

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class FaceSet : BuilderNamed<SetFace>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SetFace\> ← 
BuilderSymmetric<SetFace\> ← 
BuilderNamed<SetFace\> ← 
[FaceSet](VM.Managed.DAFUL.Builder.Contact.FaceSet.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SetFace\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SetFace\>.Name, 
BuilderSymmetric<SetFace\>.Build\(Document\), 
BuilderSymmetric<SetFace\>.Symmetric, 
BuilderSymmetric<SetFace\>.CurrentSymmetric, 
BuilderBase<SetFace\>.m\_bSuccess, 
BuilderBase<SetFace\>.Build\(Document\), 
BuilderBase<SetFace\>.Build\(Document, List<string\>\), 
BuilderBase<SetFace\>.Validate\(IList<string\>\), 
BuilderBase<SetFace\>.Success\(\), 
BuilderBase<SetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SetFace\>.OnFinalBuild\(string, Document\), 
BuilderBase<SetFace\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SetFace\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SetFace\>.Parameters, 
BuilderBase<SetFace\>.AddToDoc, 
BuilderBase<SetFace\>.UseChangedObject, 
BuilderBase<SetFace\>.SetPointKey, 
BuilderBase<SetFace\>.BuildObject, 
BuilderBase<SetFace\>.BuildDocument, 
BuilderBase<SetFace\>.UseInterface, 
BuilderBase<SetFace\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_FaceSet__ctor"></a> FaceSet\(\)

```csharp
public FaceSet()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_FaceSet_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Contact_FaceSet_ObjectKey"></a> ObjectKey

```csharp
public string[] ObjectKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_FaceSet_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

