#  Class SolidBodyShoe

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public abstract class SolidBodyShoe : BuilderNamed<SolidBodyShoe>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SolidBodyShoe\> ← 
BuilderSymmetric<SolidBodyShoe\> ← 
BuilderNamed<SolidBodyShoe\> ← 
[SolidBodyShoe](VM.Managed.DAFUL.Builder.Track.SolidBodyShoe.md)

#### Derived

[SolidBodyShoeLMDouble](VM.Managed.DAFUL.Builder.Track.SolidBodyShoeLMDouble.md), 
[SolidBodyShoeLMSingle](VM.Managed.DAFUL.Builder.Track.SolidBodyShoeLMSingle.md), 
[SolidBodyShoeLMTriple](VM.Managed.DAFUL.Builder.Track.SolidBodyShoeLMTriple.md), 
[SolidBodyShoeLMUserDefined](VM.Managed.DAFUL.Builder.Track.SolidBodyShoeLMUserDefined.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SolidBodyShoe\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SolidBodyShoe\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SolidBodyShoe\>.Name, 
BuilderSymmetric<SolidBodyShoe\>.Build\(Document\), 
BuilderSymmetric<SolidBodyShoe\>.Symmetric, 
BuilderSymmetric<SolidBodyShoe\>.CurrentSymmetric, 
BuilderBase<SolidBodyShoe\>.m\_bSuccess, 
BuilderBase<SolidBodyShoe\>.Build\(Document\), 
BuilderBase<SolidBodyShoe\>.Build\(Document, List<string\>\), 
BuilderBase<SolidBodyShoe\>.Validate\(IList<string\>\), 
BuilderBase<SolidBodyShoe\>.Success\(\), 
BuilderBase<SolidBodyShoe\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SolidBodyShoe\>.OnFinalBuild\(string, Document\), 
BuilderBase<SolidBodyShoe\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SolidBodyShoe\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SolidBodyShoe\>.Parameters, 
BuilderBase<SolidBodyShoe\>.AddToDoc, 
BuilderBase<SolidBodyShoe\>.UseChangedObject, 
BuilderBase<SolidBodyShoe\>.SetPointKey, 
BuilderBase<SolidBodyShoe\>.BuildObject, 
BuilderBase<SolidBodyShoe\>.BuildDocument, 
BuilderBase<SolidBodyShoe\>.UseInterface, 
BuilderBase<SolidBodyShoe\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe__ctor"></a> SolidBodyShoe\(\)

```csharp
protected SolidBodyShoe()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_Interface"></a> Interface

```csharp
public bool Interface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_LDForShoeSombination"></a> LDForShoeSombination

```csharp
protected double LDForShoeSombination { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_GetCurrentBuilder"></a> GetCurrentBuilder\(\)

```csharp
protected virtual Builder GetCurrentBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Track_SolidBodyShoe_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

