#  Class SectionModificationAdd

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class SectionModificationAdd : BuilderNamed<Section>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Section\> ← 
BuilderSymmetric<Section\> ← 
BuilderNamed<Section\> ← 
[SectionModificationAdd](VM.Managed.DAFUL.Builder.GearTrain.SectionModificationAdd.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Section\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Section\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Section\>.Name, 
BuilderSymmetric<Section\>.Build\(Document\), 
BuilderSymmetric<Section\>.Symmetric, 
BuilderSymmetric<Section\>.CurrentSymmetric, 
BuilderBase<Section\>.m\_bSuccess, 
BuilderBase<Section\>.Build\(Document\), 
BuilderBase<Section\>.Build\(Document, List<string\>\), 
BuilderBase<Section\>.Validate\(IList<string\>\), 
BuilderBase<Section\>.Success\(\), 
BuilderBase<Section\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Section\>.OnFinalBuild\(string, Document\), 
BuilderBase<Section\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Section\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Section\>.Parameters, 
BuilderBase<Section\>.AddToDoc, 
BuilderBase<Section\>.UseChangedObject, 
BuilderBase<Section\>.SetPointKey, 
BuilderBase<Section\>.BuildObject, 
BuilderBase<Section\>.BuildDocument, 
BuilderBase<Section\>.UseInterface, 
BuilderBase<Section\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd__ctor"></a> SectionModificationAdd\(\)

```csharp
public SectionModificationAdd()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd_GearTrainCrossSection"></a> GearTrainCrossSection

```csharp
public SectionInfo[] GearTrainCrossSection { get; set; }
```

#### Property Value

 [SectionInfo](VM.Managed.DAFUL.Builder.GearTrain.SectionInfo.md)\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd_Length"></a> Length

```csharp
public string Length { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd_CreateSection_VM_Managed_DAFUL_GearTrain_CAD_Section_VM_Managed_DAFUL_GearTrain_ShaftSet_"></a> CreateSection\(Section, ShaftSet\)

```csharp
public void CreateSection(Section section, ShaftSet shaftset)
```

#### Parameters

`section` Section

`shaftset` ShaftSet

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SectionModificationAdd_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

