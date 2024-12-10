#  Class PartColorFaceSet

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class PartColorFaceSet : BuilderNamed<PartSetFace>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PartSetFace\> ← 
BuilderSymmetric<PartSetFace\> ← 
BuilderNamed<PartSetFace\> ← 
[PartColorFaceSet](VM.Managed.DAFUL.Builder.Contact.PartColorFaceSet.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<PartSetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PartSetFace\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PartSetFace\>.Name, 
BuilderSymmetric<PartSetFace\>.Build\(Document\), 
BuilderSymmetric<PartSetFace\>.Symmetric, 
BuilderSymmetric<PartSetFace\>.CurrentSymmetric, 
BuilderBase<PartSetFace\>.m\_bSuccess, 
BuilderBase<PartSetFace\>.Build\(Document\), 
BuilderBase<PartSetFace\>.Build\(Document, List<string\>\), 
BuilderBase<PartSetFace\>.Validate\(IList<string\>\), 
BuilderBase<PartSetFace\>.Success\(\), 
BuilderBase<PartSetFace\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PartSetFace\>.OnFinalBuild\(string, Document\), 
BuilderBase<PartSetFace\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PartSetFace\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PartSetFace\>.Parameters, 
BuilderBase<PartSetFace\>.AddToDoc, 
BuilderBase<PartSetFace\>.UseChangedObject, 
BuilderBase<PartSetFace\>.SetPointKey, 
BuilderBase<PartSetFace\>.BuildObject, 
BuilderBase<PartSetFace\>.BuildDocument, 
BuilderBase<PartSetFace\>.UseInterface, 
BuilderBase<PartSetFace\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorFaceSet__ctor"></a> PartColorFaceSet\(\)

```csharp
public PartColorFaceSet()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorFaceSet_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorFaceSet_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorFaceSet_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorFaceSet_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

