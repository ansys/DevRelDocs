#  Class SolidLink

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public abstract class SolidLink : BuilderBase<BodyLink>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BodyLink\> ← 
[SolidLink](VM.Managed.DAFUL.Builder.Track.SolidLink.md)

#### Derived

[SolidLinkLMSimple](VM.Managed.DAFUL.Builder.Track.SolidLinkLMSimple.md), 
[SolidLinkLMV](VM.Managed.DAFUL.Builder.Track.SolidLinkLMV.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBase<BodyLink\>.m\_bSuccess, 
BuilderBase<BodyLink\>.Build\(Document\), 
BuilderBase<BodyLink\>.Build\(Document, List<string\>\), 
BuilderBase<BodyLink\>.Validate\(IList<string\>\), 
BuilderBase<BodyLink\>.Success\(\), 
BuilderBase<BodyLink\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BodyLink\>.OnFinalBuild\(string, Document\), 
BuilderBase<BodyLink\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BodyLink\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BodyLink\>.Parameters, 
BuilderBase<BodyLink\>.AddToDoc, 
BuilderBase<BodyLink\>.UseChangedObject, 
BuilderBase<BodyLink\>.SetPointKey, 
BuilderBase<BodyLink\>.BuildObject, 
BuilderBase<BodyLink\>.BuildDocument, 
BuilderBase<BodyLink\>.UseInterface, 
BuilderBase<BodyLink\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink__ctor"></a> SolidLink\(\)

```csharp
protected SolidLink()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink_LDForLinkSombination"></a> LDForLinkSombination

```csharp
protected double LDForLinkSombination { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink_GetCurrentBuilder"></a> GetCurrentBuilder\(\)

```csharp
protected virtual Builder GetCurrentBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Track_SolidLink_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override sealed bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

