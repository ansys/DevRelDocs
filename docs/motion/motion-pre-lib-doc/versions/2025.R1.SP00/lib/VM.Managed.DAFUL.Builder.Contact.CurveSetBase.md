#  Class CurveSetBase

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class CurveSetBase : BuilderNamed<SetCurveBase>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SetCurveBase\> ← 
BuilderSymmetric<SetCurveBase\> ← 
BuilderNamed<SetCurveBase\> ← 
[CurveSetBase](VM.Managed.DAFUL.Builder.Contact.CurveSetBase.md)

#### Derived

[CurveSetForEdges](VM.Managed.DAFUL.Builder.Contact.CurveSetForEdges.md), 
[CurveSetForImport](VM.Managed.DAFUL.Builder.Contact.CurveSetForImport.md)

#### Implements

IBuilder

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetBase__ctor"></a> CurveSetBase\(\)

```csharp
public CurveSetBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_CurveSetBase_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

