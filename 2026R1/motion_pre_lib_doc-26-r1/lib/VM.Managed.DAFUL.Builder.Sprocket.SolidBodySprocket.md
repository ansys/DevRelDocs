#  Class SolidBodySprocket

Namespace: [VM.Managed.DAFUL.Builder.Sprocket](VM.Managed.DAFUL.Builder.Sprocket.md)  
Assembly: VMBldSprocket.dll  

```csharp
public class SolidBodySprocket : BuilderNamed<SolidBodySprocket>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SolidBodySprocket\> ← 
BuilderSymmetric<SolidBodySprocket\> ← 
BuilderNamed<SolidBodySprocket\> ← 
[SolidBodySprocket](VM.Managed.DAFUL.Builder.Sprocket.SolidBodySprocket.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SolidBodySprocket\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SolidBodySprocket\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SolidBodySprocket\>.Name, 
BuilderSymmetric<SolidBodySprocket\>.Build\(Document\), 
BuilderSymmetric<SolidBodySprocket\>.Symmetric, 
BuilderSymmetric<SolidBodySprocket\>.CurrentSymmetric, 
BuilderBase<SolidBodySprocket\>.m\_bSuccess, 
BuilderBase<SolidBodySprocket\>.Build\(Document\), 
BuilderBase<SolidBodySprocket\>.Build\(Document, List<string\>\), 
BuilderBase<SolidBodySprocket\>.Validate\(IList<string\>\), 
BuilderBase<SolidBodySprocket\>.Success\(\), 
BuilderBase<SolidBodySprocket\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SolidBodySprocket\>.OnFinalBuild\(string, Document\), 
BuilderBase<SolidBodySprocket\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SolidBodySprocket\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SolidBodySprocket\>.Parameters, 
BuilderBase<SolidBodySprocket\>.AddToDoc, 
BuilderBase<SolidBodySprocket\>.UseChangedObject, 
BuilderBase<SolidBodySprocket\>.SetPointKey, 
BuilderBase<SolidBodySprocket\>.BuildObject, 
BuilderBase<SolidBodySprocket\>.BuildDocument, 
BuilderBase<SolidBodySprocket\>.UseInterface, 
BuilderBase<SolidBodySprocket\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket__ctor"></a> SolidBodySprocket\(\)

```csharp
public SolidBodySprocket()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_Interface"></a> Interface

```csharp
public bool Interface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_ProfileType"></a> ProfileType

```csharp
public ToothProfileType ProfileType { get; set; }
```

#### Property Value

 ToothProfileType

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_SprocketType"></a> SprocketType

```csharp
public SprocketType SprocketType { get; set; }
```

#### Property Value

 SprocketType

## Methods

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Sprocket_SolidBodySprocket_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

