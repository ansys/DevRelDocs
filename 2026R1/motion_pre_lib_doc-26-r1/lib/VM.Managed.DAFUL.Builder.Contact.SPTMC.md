#  Class SPTMC

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class SPTMC : BuilderNamed<SPTMC>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SPTMC\> ← 
BuilderSymmetric<SPTMC\> ← 
BuilderNamed<SPTMC\> ← 
[SPTMC](VM.Managed.DAFUL.Builder.Contact.SPTMC.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SPTMC\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SPTMC\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SPTMC\>.Name, 
BuilderSymmetric<SPTMC\>.Build\(Document\), 
BuilderSymmetric<SPTMC\>.Symmetric, 
BuilderSymmetric<SPTMC\>.CurrentSymmetric, 
BuilderBase<SPTMC\>.m\_bSuccess, 
BuilderBase<SPTMC\>.Build\(Document\), 
BuilderBase<SPTMC\>.Build\(Document, List<string\>\), 
BuilderBase<SPTMC\>.Validate\(IList<string\>\), 
BuilderBase<SPTMC\>.Success\(\), 
BuilderBase<SPTMC\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SPTMC\>.OnFinalBuild\(string, Document\), 
BuilderBase<SPTMC\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SPTMC\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SPTMC\>.Parameters, 
BuilderBase<SPTMC\>.AddToDoc, 
BuilderBase<SPTMC\>.UseChangedObject, 
BuilderBase<SPTMC\>.SetPointKey, 
BuilderBase<SPTMC\>.BuildObject, 
BuilderBase<SPTMC\>.BuildDocument, 
BuilderBase<SPTMC\>.UseInterface, 
BuilderBase<SPTMC\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_SPTMC__ctor"></a> SPTMC\(\)

```csharp
public SPTMC()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_SPTMC_ActionGeometry"></a> ActionGeometry

```csharp
public ObjectBase ActionGeometry { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Contact_SPTMC_BaseCurveset"></a> BaseCurveset

```csharp
public string[] BaseCurveset { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_SPTMC_Position"></a> Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_Contact_SPTMC_Radius"></a> Radius

```csharp
public Variable Radius { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_SPTMC_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

