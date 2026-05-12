#  Class SolidBodyRoller

Namespace: [VM.Managed.DAFUL.Builder.Roller](VM.Managed.DAFUL.Builder.Roller.md)  
Assembly: VMBldRoller.dll  

```csharp
public abstract class SolidBodyRoller : BuilderNamed<SolidBodyRoller>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SolidBodyRoller\> ← 
BuilderSymmetric<SolidBodyRoller\> ← 
BuilderNamed<SolidBodyRoller\> ← 
[SolidBodyRoller](VM.Managed.DAFUL.Builder.Roller.SolidBodyRoller.md)

#### Derived

[SolidBodyRollerCenter](VM.Managed.DAFUL.Builder.Roller.SolidBodyRollerCenter.md), 
[SolidBodyRollerDouble](VM.Managed.DAFUL.Builder.Roller.SolidBodyRollerDouble.md), 
[SolidBodyRollerFlat](VM.Managed.DAFUL.Builder.Roller.SolidBodyRollerFlat.md), 
[SolidBodyRollerGeneral](VM.Managed.DAFUL.Builder.Roller.SolidBodyRollerGeneral.md), 
[SolidBodyRollerSingle](VM.Managed.DAFUL.Builder.Roller.SolidBodyRollerSingle.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SolidBodyRoller\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SolidBodyRoller\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SolidBodyRoller\>.Name, 
BuilderSymmetric<SolidBodyRoller\>.Build\(Document\), 
BuilderSymmetric<SolidBodyRoller\>.Symmetric, 
BuilderSymmetric<SolidBodyRoller\>.CurrentSymmetric, 
BuilderBase<SolidBodyRoller\>.m\_bSuccess, 
BuilderBase<SolidBodyRoller\>.Build\(Document\), 
BuilderBase<SolidBodyRoller\>.Build\(Document, List<string\>\), 
BuilderBase<SolidBodyRoller\>.Validate\(IList<string\>\), 
BuilderBase<SolidBodyRoller\>.Success\(\), 
BuilderBase<SolidBodyRoller\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SolidBodyRoller\>.OnFinalBuild\(string, Document\), 
BuilderBase<SolidBodyRoller\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SolidBodyRoller\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SolidBodyRoller\>.Parameters, 
BuilderBase<SolidBodyRoller\>.AddToDoc, 
BuilderBase<SolidBodyRoller\>.UseChangedObject, 
BuilderBase<SolidBodyRoller\>.SetPointKey, 
BuilderBase<SolidBodyRoller\>.BuildObject, 
BuilderBase<SolidBodyRoller\>.BuildDocument, 
BuilderBase<SolidBodyRoller\>.UseInterface, 
BuilderBase<SolidBodyRoller\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller__ctor"></a> SolidBodyRoller\(\)

```csharp
protected SolidBodyRoller()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_m_TreadRadius"></a> m\_TreadRadius

```csharp
protected double m_TreadRadius
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_Interface"></a> Interface

```csharp
public bool Interface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_GetCurrentSolidBuilder"></a> GetCurrentSolidBuilder\(\)

```csharp
protected virtual Builder GetCurrentSolidBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Roller_SolidBodyRoller_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

