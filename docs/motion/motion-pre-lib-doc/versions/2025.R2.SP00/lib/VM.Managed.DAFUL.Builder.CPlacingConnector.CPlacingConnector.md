#  Class CPlacingConnector

Namespace: [VM.Managed.DAFUL.Builder.CPlacingConnector](VM.Managed.DAFUL.Builder.CPlacingConnector.md)  
Assembly: VMBldCPlacingConnector.dll  

```csharp
public class CPlacingConnector : BuilderNamed<CPlacingConnector>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<CPlacingConnector\> ← 
BuilderSymmetric<CPlacingConnector\> ← 
BuilderNamed<CPlacingConnector\> ← 
[CPlacingConnector](VM.Managed.DAFUL.Builder.CPlacingConnector.CPlacingConnector.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<CPlacingConnector\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<CPlacingConnector\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<CPlacingConnector\>.Name, 
BuilderSymmetric<CPlacingConnector\>.Build\(Document\), 
BuilderSymmetric<CPlacingConnector\>.Symmetric, 
BuilderSymmetric<CPlacingConnector\>.CurrentSymmetric, 
BuilderBase<CPlacingConnector\>.m\_bSuccess, 
BuilderBase<CPlacingConnector\>.Build\(Document\), 
BuilderBase<CPlacingConnector\>.Build\(Document, List<string\>\), 
BuilderBase<CPlacingConnector\>.Validate\(IList<string\>\), 
BuilderBase<CPlacingConnector\>.Success\(\), 
BuilderBase<CPlacingConnector\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<CPlacingConnector\>.OnFinalBuild\(string, Document\), 
BuilderBase<CPlacingConnector\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<CPlacingConnector\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<CPlacingConnector\>.Parameters, 
BuilderBase<CPlacingConnector\>.AddToDoc, 
BuilderBase<CPlacingConnector\>.UseChangedObject, 
BuilderBase<CPlacingConnector\>.SetPointKey, 
BuilderBase<CPlacingConnector\>.BuildObject, 
BuilderBase<CPlacingConnector\>.BuildDocument, 
BuilderBase<CPlacingConnector\>.UseInterface, 
BuilderBase<CPlacingConnector\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CPlacingConnector_CPlacingConnector__ctor"></a> CPlacingConnector\(\)

```csharp
public CPlacingConnector()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_CPlacingConnector_CPlacingConnector_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

