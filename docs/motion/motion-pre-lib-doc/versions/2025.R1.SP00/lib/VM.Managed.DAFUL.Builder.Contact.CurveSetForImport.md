#  Class CurveSetForImport

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class CurveSetForImport : CurveSetBase, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SetCurveBase\> ← 
BuilderSymmetric<SetCurveBase\> ← 
BuilderNamed<SetCurveBase\> ← 
[CurveSetBase](VM.Managed.DAFUL.Builder.Contact.CurveSetBase.md) ← 
[CurveSetForImport](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md)

#### Derived

[CurveSetForImportInPart](VM.Managed.DAFUL.Builder.Contact.CurveSetForImportInPart.md)

#### Implements

IBuilder

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImport__ctor"></a> CurveSetForImport\(\)

```csharp
public CurveSetForImport()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImport_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImport_Path"></a> Path

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImport_LoadPointDataFile_System_String_System_String_"></a> LoadPointDataFile\(string, string\)

```csharp
protected List<string[]> LoadPointDataFile(string loadStr, string extStr)
```

#### Parameters

`loadStr` [string](https://learn.microsoft.com/dotnet/api/system.string)

`extStr` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\[\]\>

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImport_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetForImport_ReadPointDataFile_System_String_"></a> ReadPointDataFile\(string\)

```csharp
protected string ReadPointDataFile(string fileName)
```

#### Parameters

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

