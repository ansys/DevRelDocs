#  Class SolidRoller

Namespace: [VM.Managed.DAFUL.Builder.Roller](VM.Managed.DAFUL.Builder.Roller.md)  
Assembly: VMBldRoller.dll  

```csharp
public abstract class SolidRoller : BuilderBase<BodyRoller>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BodyRoller\> ← 
[SolidRoller](VM.Managed.DAFUL.Builder.Roller.SolidRoller.md)

#### Derived

[SolidRollerCenter](VM.Managed.DAFUL.Builder.Roller.SolidRollerCenter.md), 
[SolidRollerDouble](VM.Managed.DAFUL.Builder.Roller.SolidRollerDouble.md), 
[SolidRollerFlat](VM.Managed.DAFUL.Builder.Roller.SolidRollerFlat.md), 
[SolidRollerGeneral](VM.Managed.DAFUL.Builder.Roller.SolidRollerGeneral.md), 
[SolidRollerSingle](VM.Managed.DAFUL.Builder.Roller.SolidRollerSingle.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBase<BodyRoller\>.m\_bSuccess, 
BuilderBase<BodyRoller\>.Build\(Document\), 
BuilderBase<BodyRoller\>.Build\(Document, List<string\>\), 
BuilderBase<BodyRoller\>.Validate\(IList<string\>\), 
BuilderBase<BodyRoller\>.Success\(\), 
BuilderBase<BodyRoller\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BodyRoller\>.OnFinalBuild\(string, Document\), 
BuilderBase<BodyRoller\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BodyRoller\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BodyRoller\>.Parameters, 
BuilderBase<BodyRoller\>.AddToDoc, 
BuilderBase<BodyRoller\>.UseChangedObject, 
BuilderBase<BodyRoller\>.SetPointKey, 
BuilderBase<BodyRoller\>.BuildObject, 
BuilderBase<BodyRoller\>.BuildDocument, 
BuilderBase<BodyRoller\>.UseInterface, 
BuilderBase<BodyRoller\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller__ctor"></a> SolidRoller\(\)

```csharp
protected SolidRoller()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_m_TreadRadius"></a> m\_TreadRadius

```csharp
protected double m_TreadRadius
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_GetCurrentBuilder"></a> GetCurrentBuilder\(\)

```csharp
protected virtual Builder GetCurrentBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidRoller_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override sealed bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

