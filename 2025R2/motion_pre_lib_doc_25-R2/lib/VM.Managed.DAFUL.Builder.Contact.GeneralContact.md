#  Class GeneralContact

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class GeneralContact : BuilderNamed<GeneralContact>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<GeneralContact\> ← 
BuilderSymmetric<GeneralContact\> ← 
BuilderNamed<GeneralContact\> ← 
[GeneralContact](VM.Managed.DAFUL.Builder.Contact.GeneralContact.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<GeneralContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<GeneralContact\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<GeneralContact\>.Name, 
BuilderSymmetric<GeneralContact\>.Build\(Document\), 
BuilderSymmetric<GeneralContact\>.Symmetric, 
BuilderSymmetric<GeneralContact\>.CurrentSymmetric, 
BuilderBase<GeneralContact\>.m\_bSuccess, 
BuilderBase<GeneralContact\>.Build\(Document\), 
BuilderBase<GeneralContact\>.Build\(Document, List<string\>\), 
BuilderBase<GeneralContact\>.Validate\(IList<string\>\), 
BuilderBase<GeneralContact\>.Success\(\), 
BuilderBase<GeneralContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<GeneralContact\>.OnFinalBuild\(string, Document\), 
BuilderBase<GeneralContact\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<GeneralContact\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<GeneralContact\>.Parameters, 
BuilderBase<GeneralContact\>.AddToDoc, 
BuilderBase<GeneralContact\>.UseChangedObject, 
BuilderBase<GeneralContact\>.SetPointKey, 
BuilderBase<GeneralContact\>.BuildObject, 
BuilderBase<GeneralContact\>.BuildDocument, 
BuilderBase<GeneralContact\>.UseInterface, 
BuilderBase<GeneralContact\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_GeneralContact__ctor"></a> GeneralContact\(\)

```csharp
public GeneralContact()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_GeneralContact_ActionObject"></a> ActionObject

```csharp
public ObjectBase ActionObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Contact_GeneralContact_BaseObject"></a> BaseObject

```csharp
public ObjectBase BaseObject { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_GeneralContact_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

