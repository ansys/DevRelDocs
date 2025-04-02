#  Class ExternalLoad

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFP.dll  

```csharp
public class ExternalLoad : BuilderNamed<ExternalLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ExternalLoad\> ← 
BuilderSymmetric<ExternalLoad\> ← 
BuilderNamed<ExternalLoad\> ← 
[ExternalLoad](VM.Managed.DAFUL.Builder.Force.ExternalLoad.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ExternalLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ExternalLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ExternalLoad\>.Name, 
BuilderSymmetric<ExternalLoad\>.Build\(Document\), 
BuilderSymmetric<ExternalLoad\>.Symmetric, 
BuilderSymmetric<ExternalLoad\>.CurrentSymmetric, 
BuilderBase<ExternalLoad\>.m\_bSuccess, 
BuilderBase<ExternalLoad\>.Build\(Document\), 
BuilderBase<ExternalLoad\>.Build\(Document, List<string\>\), 
BuilderBase<ExternalLoad\>.Validate\(IList<string\>\), 
BuilderBase<ExternalLoad\>.Success\(\), 
BuilderBase<ExternalLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ExternalLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<ExternalLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ExternalLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ExternalLoad\>.Parameters, 
BuilderBase<ExternalLoad\>.AddToDoc, 
BuilderBase<ExternalLoad\>.UseChangedObject, 
BuilderBase<ExternalLoad\>.SetPointKey, 
BuilderBase<ExternalLoad\>.BuildObject, 
BuilderBase<ExternalLoad\>.BuildDocument, 
BuilderBase<ExternalLoad\>.UseInterface, 
BuilderBase<ExternalLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_ExternalLoad__ctor"></a> ExternalLoad\(\)

```csharp
public ExternalLoad()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Force_ExternalLoad_TargetBody"></a> TargetBody

```csharp
public ObjectBase TargetBody { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_ExternalLoad_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

