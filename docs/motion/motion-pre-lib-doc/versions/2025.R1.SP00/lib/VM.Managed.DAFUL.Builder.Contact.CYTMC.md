#  Class CYTMC

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class CYTMC : BuilderNamed<CYTMC>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<CYTMC\> ← 
BuilderSymmetric<CYTMC\> ← 
BuilderNamed<CYTMC\> ← 
[CYTMC](VM.Managed.DAFUL.Builder.Contact.CYTMC.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<CYTMC\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<CYTMC\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<CYTMC\>.Name, 
BuilderSymmetric<CYTMC\>.Build\(Document\), 
BuilderSymmetric<CYTMC\>.Symmetric, 
BuilderSymmetric<CYTMC\>.CurrentSymmetric, 
BuilderBase<CYTMC\>.m\_bSuccess, 
BuilderBase<CYTMC\>.Build\(Document\), 
BuilderBase<CYTMC\>.Build\(Document, List<string\>\), 
BuilderBase<CYTMC\>.Validate\(IList<string\>\), 
BuilderBase<CYTMC\>.Success\(\), 
BuilderBase<CYTMC\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<CYTMC\>.OnFinalBuild\(string, Document\), 
BuilderBase<CYTMC\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<CYTMC\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<CYTMC\>.Parameters, 
BuilderBase<CYTMC\>.AddToDoc, 
BuilderBase<CYTMC\>.UseChangedObject, 
BuilderBase<CYTMC\>.SetPointKey, 
BuilderBase<CYTMC\>.BuildObject, 
BuilderBase<CYTMC\>.BuildDocument, 
BuilderBase<CYTMC\>.UseInterface, 
BuilderBase<CYTMC\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC__ctor"></a> CYTMC\(\)

```csharp
public CYTMC()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC_ActionGeometry"></a> ActionGeometry

```csharp
public ObjectBase ActionGeometry { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC_BaseCurveset"></a> BaseCurveset

```csharp
public string[] BaseCurveset { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC_BottomPosition"></a> BottomPosition

```csharp
public PointBase BottomPosition { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC_Radius"></a> Radius

```csharp
public Variable Radius { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC_TopPosition"></a> TopPosition

```csharp
public PointBase TopPosition { get; }
```

#### Property Value

 PointBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_CYTMC_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

