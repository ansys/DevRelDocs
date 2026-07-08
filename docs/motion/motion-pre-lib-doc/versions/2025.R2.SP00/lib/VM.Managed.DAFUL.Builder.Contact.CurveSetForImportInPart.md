#  Class CurveSetForImportInPart

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class CurveSetForImportInPart : CurveSetForImport, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SetCurveBase\> ← 
BuilderSymmetric<SetCurveBase\> ← 
BuilderNamed<SetCurveBase\> ← 
[CurveSetBase](VM.Managed.DAFUL.Builder.Contact.CurveSetBase.md) ← 
[CurveSetForImport](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md) ← 
[CurveSetForImportInPart](VM.Managed.DAFUL.Builder.Contact.CurveSetForImportInPart.md)

#### Implements

IBuilder

#### Inherited Members

[CurveSetForImport.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_CurveSetForImport\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[CurveSetForImport.LoadPointDataFile\(string, string\)](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_CurveSetForImport\_LoadPointDataFile\_System\_String\_System\_String\_), 
[CurveSetForImport.ReadPointDataFile\(string\)](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_CurveSetForImport\_ReadPointDataFile\_System\_String\_), 
[CurveSetForImport.Path](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_CurveSetForImport\_Path), 
[CurveSetForImport.Connectable](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_CurveSetForImport\_Connectable), 
[CurveSetBase.AddToDoc](VM.Managed.DAFUL.Builder.Contact.CurveSetBase.md\#VM\_Managed\_DAFUL\_Builder\_Contact\_CurveSetBase\_AddToDoc), 
BuilderNamed<SetCurveBase\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SetCurveBase\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SetCurveBase\>.Name, 
BuilderSymmetric<SetCurveBase\>.Build\(Document\), 
BuilderSymmetric<SetCurveBase\>.Symmetric, 
BuilderSymmetric<SetCurveBase\>.CurrentSymmetric, 
BuilderBase<SetCurveBase\>.m\_bSuccess, 
BuilderBase<SetCurveBase\>.Build\(Document\), 
BuilderBase<SetCurveBase\>.Build\(Document, List<string\>\), 
BuilderBase<SetCurveBase\>.Validate\(IList<string\>\), 
BuilderBase<SetCurveBase\>.Success\(\), 
BuilderBase<SetCurveBase\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SetCurveBase\>.OnFinalBuild\(string, Document\), 
BuilderBase<SetCurveBase\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SetCurveBase\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SetCurveBase\>.Parameters, 
BuilderBase<SetCurveBase\>.AddToDoc, 
BuilderBase<SetCurveBase\>.UseChangedObject, 
BuilderBase<SetCurveBase\>.SetPointKey, 
BuilderBase<SetCurveBase\>.BuildObject, 
BuilderBase<SetCurveBase\>.BuildDocument, 
BuilderBase<SetCurveBase\>.UseInterface, 
BuilderBase<SetCurveBase\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImportInPart__ctor"></a> CurveSetForImportInPart\(\)

```csharp
public CurveSetForImportInPart()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImportInPart_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

