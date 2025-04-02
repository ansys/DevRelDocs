#  Class CLoad

Namespace: [VM.Managed.DAFUL.Builder.FE.Force](VM.Managed.DAFUL.Builder.FE.Force.md)  
Assembly: VMBldFE.dll  

```csharp
public class CLoad : BuilderNamed<CLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<CLoad\> ← 
BuilderSymmetric<CLoad\> ← 
BuilderNamed<CLoad\> ← 
[CLoad](VM.Managed.DAFUL.Builder.FE.Force.CLoad.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<CLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<CLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<CLoad\>.Name, 
BuilderSymmetric<CLoad\>.Build\(Document\), 
BuilderSymmetric<CLoad\>.Symmetric, 
BuilderSymmetric<CLoad\>.CurrentSymmetric, 
BuilderBase<CLoad\>.m\_bSuccess, 
BuilderBase<CLoad\>.Build\(Document\), 
BuilderBase<CLoad\>.Build\(Document, List<string\>\), 
BuilderBase<CLoad\>.Validate\(IList<string\>\), 
BuilderBase<CLoad\>.Success\(\), 
BuilderBase<CLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<CLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<CLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<CLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<CLoad\>.Parameters, 
BuilderBase<CLoad\>.AddToDoc, 
BuilderBase<CLoad\>.UseChangedObject, 
BuilderBase<CLoad\>.SetPointKey, 
BuilderBase<CLoad\>.BuildObject, 
BuilderBase<CLoad\>.BuildDocument, 
BuilderBase<CLoad\>.UseInterface, 
BuilderBase<CLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_Force_CLoad__ctor"></a> CLoad\(\)

```csharp
public CLoad()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_Force_CLoad_CLoadComponent"></a> CLoadComponent

```csharp
public ICLoadComponent CLoadComponent { get; }
```

#### Property Value

 ICLoadComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_Force_CLoad_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

