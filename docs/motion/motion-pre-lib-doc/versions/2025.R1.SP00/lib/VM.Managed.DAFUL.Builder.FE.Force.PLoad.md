#  Class PLoad

Namespace: [VM.Managed.DAFUL.Builder.FE.Force](VM.Managed.DAFUL.Builder.FE.Force.md)  
Assembly: VMBldFE.dll  

```csharp
public class PLoad : BuilderNamed<PLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PLoad\> ← 
BuilderSymmetric<PLoad\> ← 
BuilderNamed<PLoad\> ← 
[PLoad](VM.Managed.DAFUL.Builder.FE.Force.PLoad.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<PLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PLoad\>.Name, 
BuilderSymmetric<PLoad\>.Build\(Document\), 
BuilderSymmetric<PLoad\>.Symmetric, 
BuilderSymmetric<PLoad\>.CurrentSymmetric, 
BuilderBase<PLoad\>.m\_bSuccess, 
BuilderBase<PLoad\>.Build\(Document\), 
BuilderBase<PLoad\>.Build\(Document, List<string\>\), 
BuilderBase<PLoad\>.Validate\(IList<string\>\), 
BuilderBase<PLoad\>.Success\(\), 
BuilderBase<PLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<PLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PLoad\>.Parameters, 
BuilderBase<PLoad\>.AddToDoc, 
BuilderBase<PLoad\>.UseChangedObject, 
BuilderBase<PLoad\>.SetPointKey, 
BuilderBase<PLoad\>.BuildObject, 
BuilderBase<PLoad\>.BuildDocument, 
BuilderBase<PLoad\>.UseInterface, 
BuilderBase<PLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_Force_PLoad__ctor"></a> PLoad\(\)

```csharp
public PLoad()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_Force_PLoad_PLoadComponent"></a> PLoadComponent

```csharp
public IPLoadComponent PLoadComponent { get; }
```

#### Property Value

 IPLoadComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_Force_PLoad_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

