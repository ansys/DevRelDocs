#  Class SolidBodyLink

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public abstract class SolidBodyLink : BuilderNamed<SolidBodyLink>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SolidBodyLink\> ← 
BuilderSymmetric<SolidBodyLink\> ← 
BuilderNamed<SolidBodyLink\> ← 
[SolidBodyLink](VM.Managed.DAFUL.Builder.Track.SolidBodyLink.md)

#### Derived

[SolidBodyLinkLMSimple](VM.Managed.DAFUL.Builder.Track.SolidBodyLinkLMSimple.md), 
[SolidBodyLinkLMV](VM.Managed.DAFUL.Builder.Track.SolidBodyLinkLMV.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SolidBodyLink\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SolidBodyLink\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SolidBodyLink\>.Name, 
BuilderSymmetric<SolidBodyLink\>.Build\(Document\), 
BuilderSymmetric<SolidBodyLink\>.Symmetric, 
BuilderSymmetric<SolidBodyLink\>.CurrentSymmetric, 
BuilderBase<SolidBodyLink\>.m\_bSuccess, 
BuilderBase<SolidBodyLink\>.Build\(Document\), 
BuilderBase<SolidBodyLink\>.Build\(Document, List<string\>\), 
BuilderBase<SolidBodyLink\>.Validate\(IList<string\>\), 
BuilderBase<SolidBodyLink\>.Success\(\), 
BuilderBase<SolidBodyLink\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SolidBodyLink\>.OnFinalBuild\(string, Document\), 
BuilderBase<SolidBodyLink\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SolidBodyLink\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SolidBodyLink\>.Parameters, 
BuilderBase<SolidBodyLink\>.AddToDoc, 
BuilderBase<SolidBodyLink\>.UseChangedObject, 
BuilderBase<SolidBodyLink\>.SetPointKey, 
BuilderBase<SolidBodyLink\>.BuildObject, 
BuilderBase<SolidBodyLink\>.BuildDocument, 
BuilderBase<SolidBodyLink\>.UseInterface, 
BuilderBase<SolidBodyLink\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink__ctor"></a> SolidBodyLink\(\)

```csharp
protected SolidBodyLink()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_Interface"></a> Interface

```csharp
public bool Interface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_LDForLinkSombination"></a> LDForLinkSombination

```csharp
protected double LDForLinkSombination { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_GetCurrentSolidBuilder"></a> GetCurrentSolidBuilder\(\)

```csharp
protected virtual Builder GetCurrentSolidBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyLink_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

