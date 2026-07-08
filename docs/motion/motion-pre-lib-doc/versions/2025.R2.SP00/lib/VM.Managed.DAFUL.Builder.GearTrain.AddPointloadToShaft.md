#  Class AddPointloadToShaft

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddPointloadToShaft : AddPointEntityToShaft<PseudoPointLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoPointLoad\> ← 
BuilderSymmetric<PseudoPointLoad\> ← 
BuilderNamed<PseudoPointLoad\> ← 
[AddPointEntityToShaft<PseudoPointLoad\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md) ← 
[AddPointloadToShaft](VM.Managed.DAFUL.Builder.GearTrain.AddPointloadToShaft.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToShaft<PseudoPointLoad\>.m\_dOffset](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dOffset), 
[AddPointEntityToShaft<PseudoPointLoad\>.m\_dReferPoint](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dReferPoint), 
[AddPointEntityToShaft<PseudoPointLoad\>.m\_dWitdh](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dWitdh), 
[AddPointEntityToShaft<PseudoPointLoad\>.m\_typeRef](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_typeRef), 
[AddPointEntityToShaft<PseudoPointLoad\>.CheckOnShaftSet\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckOnShaftSet\_VM\_Managed\_Document\_), 
[AddPointEntityToShaft<PseudoPointLoad\>.CheckContainsEntity\(HiddenShaftSetDocument\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckContainsEntity\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_), 
[AddPointEntityToShaft<PseudoPointLoad\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[AddPointEntityToShaft<PseudoPointLoad\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_InputArray), 
BuilderNamed<PseudoPointLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoPointLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoPointLoad\>.Name, 
BuilderSymmetric<PseudoPointLoad\>.Build\(Document\), 
BuilderSymmetric<PseudoPointLoad\>.Symmetric, 
BuilderSymmetric<PseudoPointLoad\>.CurrentSymmetric, 
BuilderBase<PseudoPointLoad\>.m\_bSuccess, 
BuilderBase<PseudoPointLoad\>.Build\(Document\), 
BuilderBase<PseudoPointLoad\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoPointLoad\>.Validate\(IList<string\>\), 
BuilderBase<PseudoPointLoad\>.Success\(\), 
BuilderBase<PseudoPointLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoPointLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoPointLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoPointLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoPointLoad\>.Parameters, 
BuilderBase<PseudoPointLoad\>.AddToDoc, 
BuilderBase<PseudoPointLoad\>.UseChangedObject, 
BuilderBase<PseudoPointLoad\>.SetPointKey, 
BuilderBase<PseudoPointLoad\>.BuildObject, 
BuilderBase<PseudoPointLoad\>.BuildDocument, 
BuilderBase<PseudoPointLoad\>.UseInterface, 
BuilderBase<PseudoPointLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft__ctor"></a> AddPointloadToShaft\(\)

```csharp
public AddPointloadToShaft()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft_CheckContainsEntity_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_"></a> CheckContainsEntity\(HiddenShaftSetDocument\)

```csharp
protected override bool CheckContainsEntity(HiddenShaftSetDocument hiddenDoc)
```

#### Parameters

`hiddenDoc` HiddenShaftSetDocument

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointloadToShaft_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

