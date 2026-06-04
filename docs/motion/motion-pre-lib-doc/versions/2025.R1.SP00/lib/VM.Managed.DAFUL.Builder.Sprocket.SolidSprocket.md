#  Class SolidSprocket

Namespace: [VM.Managed.DAFUL.Builder.Sprocket](VM.Managed.DAFUL.Builder.Sprocket.md)  
Assembly: VMBldSprocket.dll  

```csharp
public class SolidSprocket : BuilderBase<BodySprocket>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BodySprocket\> ← 
[SolidSprocket](VM.Managed.DAFUL.Builder.Sprocket.SolidSprocket.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBase<BodySprocket\>.m\_bSuccess, 
BuilderBase<BodySprocket\>.Build\(Document\), 
BuilderBase<BodySprocket\>.Build\(Document, List<string\>\), 
BuilderBase<BodySprocket\>.Validate\(IList<string\>\), 
BuilderBase<BodySprocket\>.Success\(\), 
BuilderBase<BodySprocket\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BodySprocket\>.OnFinalBuild\(string, Document\), 
BuilderBase<BodySprocket\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BodySprocket\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BodySprocket\>.Parameters, 
BuilderBase<BodySprocket\>.AddToDoc, 
BuilderBase<BodySprocket\>.UseChangedObject, 
BuilderBase<BodySprocket\>.SetPointKey, 
BuilderBase<BodySprocket\>.BuildObject, 
BuilderBase<BodySprocket\>.BuildDocument, 
BuilderBase<BodySprocket\>.UseInterface, 
BuilderBase<BodySprocket\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket__ctor"></a> SolidSprocket\(\)

```csharp
public SolidSprocket()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket_ProfileType"></a> ProfileType

```csharp
public ToothProfileType ProfileType { get; set; }
```

#### Property Value

 ToothProfileType

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket_SprocketType"></a> SprocketType

```csharp
public SprocketType SprocketType { get; set; }
```

#### Property Value

 SprocketType

## Methods

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidSprocket_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override sealed bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

