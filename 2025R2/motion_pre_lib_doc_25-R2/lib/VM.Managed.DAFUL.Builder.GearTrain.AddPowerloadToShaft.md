#  Class AddPowerloadToShaft

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddPowerloadToShaft : AddPointEntityToShaft<PseudoPowerLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoPowerLoad\> ← 
BuilderSymmetric<PseudoPowerLoad\> ← 
BuilderNamed<PseudoPowerLoad\> ← 
[AddPointEntityToShaft<PseudoPowerLoad\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md) ← 
[AddPowerloadToShaft](VM.Managed.DAFUL.Builder.GearTrain.AddPowerloadToShaft.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToShaft<PseudoPowerLoad\>.m\_dOffset](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dOffset), 
[AddPointEntityToShaft<PseudoPowerLoad\>.m\_dReferPoint](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dReferPoint), 
[AddPointEntityToShaft<PseudoPowerLoad\>.m\_dWitdh](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dWitdh), 
[AddPointEntityToShaft<PseudoPowerLoad\>.m\_typeRef](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_typeRef), 
[AddPointEntityToShaft<PseudoPowerLoad\>.CheckOnShaftSet\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckOnShaftSet\_VM\_Managed\_Document\_), 
[AddPointEntityToShaft<PseudoPowerLoad\>.CheckContainsEntity\(HiddenShaftSetDocument\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckContainsEntity\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_), 
[AddPointEntityToShaft<PseudoPowerLoad\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[AddPointEntityToShaft<PseudoPowerLoad\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_InputArray), 
BuilderNamed<PseudoPowerLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoPowerLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoPowerLoad\>.Name, 
BuilderSymmetric<PseudoPowerLoad\>.Build\(Document\), 
BuilderSymmetric<PseudoPowerLoad\>.Symmetric, 
BuilderSymmetric<PseudoPowerLoad\>.CurrentSymmetric, 
BuilderBase<PseudoPowerLoad\>.m\_bSuccess, 
BuilderBase<PseudoPowerLoad\>.Build\(Document\), 
BuilderBase<PseudoPowerLoad\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoPowerLoad\>.Validate\(IList<string\>\), 
BuilderBase<PseudoPowerLoad\>.Success\(\), 
BuilderBase<PseudoPowerLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoPowerLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoPowerLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoPowerLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoPowerLoad\>.Parameters, 
BuilderBase<PseudoPowerLoad\>.AddToDoc, 
BuilderBase<PseudoPowerLoad\>.UseChangedObject, 
BuilderBase<PseudoPowerLoad\>.SetPointKey, 
BuilderBase<PseudoPowerLoad\>.BuildObject, 
BuilderBase<PseudoPowerLoad\>.BuildDocument, 
BuilderBase<PseudoPowerLoad\>.UseInterface, 
BuilderBase<PseudoPowerLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPowerloadToShaft__ctor"></a> AddPowerloadToShaft\(\)

```csharp
public AddPowerloadToShaft()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPowerloadToShaft_CheckContainsEntity_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_"></a> CheckContainsEntity\(HiddenShaftSetDocument\)

```csharp
protected override bool CheckContainsEntity(HiddenShaftSetDocument hiddenDoc)
```

#### Parameters

`hiddenDoc` HiddenShaftSetDocument

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPowerloadToShaft_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

