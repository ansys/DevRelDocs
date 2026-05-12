#  Class ChainedPlacing

Namespace: [VM.Managed.DAFUL.Builder.Chained](VM.Managed.DAFUL.Builder.Chained.md)  
Assembly: VMBldChained.dll  

```csharp
public class ChainedPlacing : BuilderNamed<ChainedPlacing>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ChainedPlacing\> ← 
BuilderSymmetric<ChainedPlacing\> ← 
BuilderNamed<ChainedPlacing\> ← 
[ChainedPlacing](VM.Managed.DAFUL.Builder.Chained.ChainedPlacing.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ChainedPlacing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ChainedPlacing\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ChainedPlacing\>.Name, 
BuilderSymmetric<ChainedPlacing\>.Build\(Document\), 
BuilderSymmetric<ChainedPlacing\>.Symmetric, 
BuilderSymmetric<ChainedPlacing\>.CurrentSymmetric, 
BuilderBase<ChainedPlacing\>.m\_bSuccess, 
BuilderBase<ChainedPlacing\>.Build\(Document\), 
BuilderBase<ChainedPlacing\>.Build\(Document, List<string\>\), 
BuilderBase<ChainedPlacing\>.Validate\(IList<string\>\), 
BuilderBase<ChainedPlacing\>.Success\(\), 
BuilderBase<ChainedPlacing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ChainedPlacing\>.OnFinalBuild\(string, Document\), 
BuilderBase<ChainedPlacing\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ChainedPlacing\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ChainedPlacing\>.Parameters, 
BuilderBase<ChainedPlacing\>.AddToDoc, 
BuilderBase<ChainedPlacing\>.UseChangedObject, 
BuilderBase<ChainedPlacing\>.SetPointKey, 
BuilderBase<ChainedPlacing\>.BuildObject, 
BuilderBase<ChainedPlacing\>.BuildDocument, 
BuilderBase<ChainedPlacing\>.UseInterface, 
BuilderBase<ChainedPlacing\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Chained_ChainedPlacing__ctor"></a> ChainedPlacing\(\)

```csharp
public ChainedPlacing()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Chained_ChainedPlacing_ObjectNames"></a> ObjectNames

```csharp
public string[] ObjectNames { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_Chained_ChainedPlacing_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

