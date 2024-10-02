#  Class MbyNContact

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class MbyNContact : MultipleContactBase<MbyNContact>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<MbyNContact\> ← 
BuilderSymmetric<MbyNContact\> ← 
BuilderNamed<MbyNContact\> ← 
[MultipleContactBase<MbyNContact\>](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md) ← 
[MbyNContact](VM.Managed.DAFUL.Builder.Contact.MbyNContact.md)

#### Implements

IBuilder

#### Inherited Members

[MultipleContactBase<MbyNContact\>.GetPropType\(\)](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_GetPropType), 
[MultipleContactBase<MbyNContact\>.GetContactType\(\)](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_GetContactType), 
[MultipleContactBase<MbyNContact\>.GetMultipleInfoList\(List<IContactable\>\)](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_GetMultipleInfoList\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_IContactable\_\_), 
[MultipleContactBase<MbyNContact\>.IsAllowSwitch](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_IsAllowSwitch), 
BuilderNamed<MbyNContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<MbyNContact\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<MbyNContact\>.Name, 
BuilderSymmetric<MbyNContact\>.Build\(Document\), 
BuilderSymmetric<MbyNContact\>.Symmetric, 
BuilderSymmetric<MbyNContact\>.CurrentSymmetric, 
BuilderBase<MbyNContact\>.m\_bSuccess, 
BuilderBase<MbyNContact\>.Build\(Document\), 
BuilderBase<MbyNContact\>.Build\(Document, List<string\>\), 
BuilderBase<MbyNContact\>.Validate\(IList<string\>\), 
BuilderBase<MbyNContact\>.Success\(\), 
BuilderBase<MbyNContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<MbyNContact\>.OnFinalBuild\(string, Document\), 
BuilderBase<MbyNContact\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<MbyNContact\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<MbyNContact\>.Parameters, 
BuilderBase<MbyNContact\>.AddToDoc, 
BuilderBase<MbyNContact\>.UseChangedObject, 
BuilderBase<MbyNContact\>.SetPointKey, 
BuilderBase<MbyNContact\>.BuildObject, 
BuilderBase<MbyNContact\>.BuildDocument, 
BuilderBase<MbyNContact\>.UseInterface, 
BuilderBase<MbyNContact\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_MbyNContact__ctor"></a> MbyNContact\(\)

```csharp
public MbyNContact()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_MbyNContact_ActionList"></a> ActionList

```csharp
public string[] ActionList { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_MbyNContact_BaseList"></a> BaseList

```csharp
public string[] BaseList { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_MbyNContact_IsAllowSwitch"></a> IsAllowSwitch

```csharp
protected override bool IsAllowSwitch { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_MbyNContact_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

