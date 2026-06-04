#  Class NCombinationContact

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class NCombinationContact : MultipleContactBase<NCombinationContact>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<NCombinationContact\> ← 
BuilderSymmetric<NCombinationContact\> ← 
BuilderNamed<NCombinationContact\> ← 
[MultipleContactBase<NCombinationContact\>](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md) ← 
[NCombinationContact](VM.Managed.DAFUL.Builder.Contact.NCombinationContact.md)

#### Implements

IBuilder

#### Inherited Members

[MultipleContactBase<NCombinationContact\>.GetPropType\(\)](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_GetPropType), 
[MultipleContactBase<NCombinationContact\>.GetContactType\(\)](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_GetContactType), 
[MultipleContactBase<NCombinationContact\>.GetMultipleInfoList\(List<IContactable\>\)](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_GetMultipleInfoList\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_IContactable\_\_), 
[MultipleContactBase<NCombinationContact\>.IsAllowSwitch](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_MultipleContactBase\_1\_IsAllowSwitch), 
BuilderNamed<NCombinationContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<NCombinationContact\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<NCombinationContact\>.Name, 
BuilderSymmetric<NCombinationContact\>.Build\(Document\), 
BuilderSymmetric<NCombinationContact\>.Symmetric, 
BuilderSymmetric<NCombinationContact\>.CurrentSymmetric, 
BuilderBase<NCombinationContact\>.m\_bSuccess, 
BuilderBase<NCombinationContact\>.Build\(Document\), 
BuilderBase<NCombinationContact\>.Build\(Document, List<string\>\), 
BuilderBase<NCombinationContact\>.Validate\(IList<string\>\), 
BuilderBase<NCombinationContact\>.Success\(\), 
BuilderBase<NCombinationContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<NCombinationContact\>.OnFinalBuild\(string, Document\), 
BuilderBase<NCombinationContact\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<NCombinationContact\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<NCombinationContact\>.Parameters, 
BuilderBase<NCombinationContact\>.AddToDoc, 
BuilderBase<NCombinationContact\>.UseChangedObject, 
BuilderBase<NCombinationContact\>.SetPointKey, 
BuilderBase<NCombinationContact\>.BuildObject, 
BuilderBase<NCombinationContact\>.BuildDocument, 
BuilderBase<NCombinationContact\>.UseInterface, 
BuilderBase<NCombinationContact\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_NCombinationContact__ctor"></a> NCombinationContact\(\)

```csharp
public NCombinationContact()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_NCombinationContact_ObjectList"></a> ObjectList

```csharp
public string[] ObjectList { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_NCombinationContact_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

