#  Class AddMeasurePointToShaft

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddMeasurePointToShaft : AddPointEntityToShaft<PseudoMeasurePoint>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoMeasurePoint\> ← 
BuilderSymmetric<PseudoMeasurePoint\> ← 
BuilderNamed<PseudoMeasurePoint\> ← 
[AddPointEntityToShaft<PseudoMeasurePoint\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md) ← 
[AddMeasurePointToShaft](VM.Managed.DAFUL.Builder.GearTrain.AddMeasurePointToShaft.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToShaft<PseudoMeasurePoint\>.m\_dOffset](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dOffset), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.m\_dReferPoint](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dReferPoint), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.m\_dWitdh](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dWitdh), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.m\_typeRef](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_typeRef), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.CheckOnShaftSet\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckOnShaftSet\_VM\_Managed\_Document\_), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.CheckContainsEntity\(HiddenShaftSetDocument\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckContainsEntity\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[AddPointEntityToShaft<PseudoMeasurePoint\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_InputArray), 
BuilderNamed<PseudoMeasurePoint\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoMeasurePoint\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoMeasurePoint\>.Name, 
BuilderSymmetric<PseudoMeasurePoint\>.Build\(Document\), 
BuilderSymmetric<PseudoMeasurePoint\>.Symmetric, 
BuilderSymmetric<PseudoMeasurePoint\>.CurrentSymmetric, 
BuilderBase<PseudoMeasurePoint\>.m\_bSuccess, 
BuilderBase<PseudoMeasurePoint\>.Build\(Document\), 
BuilderBase<PseudoMeasurePoint\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoMeasurePoint\>.Validate\(IList<string\>\), 
BuilderBase<PseudoMeasurePoint\>.Success\(\), 
BuilderBase<PseudoMeasurePoint\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoMeasurePoint\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoMeasurePoint\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoMeasurePoint\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoMeasurePoint\>.Parameters, 
BuilderBase<PseudoMeasurePoint\>.AddToDoc, 
BuilderBase<PseudoMeasurePoint\>.UseChangedObject, 
BuilderBase<PseudoMeasurePoint\>.SetPointKey, 
BuilderBase<PseudoMeasurePoint\>.BuildObject, 
BuilderBase<PseudoMeasurePoint\>.BuildDocument, 
BuilderBase<PseudoMeasurePoint\>.UseInterface, 
BuilderBase<PseudoMeasurePoint\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddMeasurePointToShaft__ctor"></a> AddMeasurePointToShaft\(\)

```csharp
public AddMeasurePointToShaft()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddMeasurePointToShaft_CheckContainsEntity_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_"></a> CheckContainsEntity\(HiddenShaftSetDocument\)

```csharp
protected override bool CheckContainsEntity(HiddenShaftSetDocument hiddenDoc)
```

#### Parameters

`hiddenDoc` HiddenShaftSetDocument

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddMeasurePointToShaft_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

