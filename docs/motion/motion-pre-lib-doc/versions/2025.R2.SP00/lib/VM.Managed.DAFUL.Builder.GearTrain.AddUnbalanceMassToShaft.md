#  Class AddUnbalanceMassToShaft

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddUnbalanceMassToShaft : AddPointEntityToShaft<PseudoUnbalanceMass>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoUnbalanceMass\> ← 
BuilderSymmetric<PseudoUnbalanceMass\> ← 
BuilderNamed<PseudoUnbalanceMass\> ← 
[AddPointEntityToShaft<PseudoUnbalanceMass\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md) ← 
[AddUnbalanceMassToShaft](VM.Managed.DAFUL.Builder.GearTrain.AddUnbalanceMassToShaft.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToShaft<PseudoUnbalanceMass\>.m\_dOffset](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dOffset), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.m\_dReferPoint](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dReferPoint), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.m\_dWitdh](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_dWitdh), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.m\_typeRef](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_m\_typeRef), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.CheckOnShaftSet\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckOnShaftSet\_VM\_Managed\_Document\_), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.CheckContainsEntity\(HiddenShaftSetDocument\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_CheckContainsEntity\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[AddPointEntityToShaft<PseudoUnbalanceMass\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToShaft\_1\_InputArray), 
BuilderNamed<PseudoUnbalanceMass\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoUnbalanceMass\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoUnbalanceMass\>.Name, 
BuilderSymmetric<PseudoUnbalanceMass\>.Build\(Document\), 
BuilderSymmetric<PseudoUnbalanceMass\>.Symmetric, 
BuilderSymmetric<PseudoUnbalanceMass\>.CurrentSymmetric, 
BuilderBase<PseudoUnbalanceMass\>.m\_bSuccess, 
BuilderBase<PseudoUnbalanceMass\>.Build\(Document\), 
BuilderBase<PseudoUnbalanceMass\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoUnbalanceMass\>.Validate\(IList<string\>\), 
BuilderBase<PseudoUnbalanceMass\>.Success\(\), 
BuilderBase<PseudoUnbalanceMass\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoUnbalanceMass\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoUnbalanceMass\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoUnbalanceMass\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoUnbalanceMass\>.Parameters, 
BuilderBase<PseudoUnbalanceMass\>.AddToDoc, 
BuilderBase<PseudoUnbalanceMass\>.UseChangedObject, 
BuilderBase<PseudoUnbalanceMass\>.SetPointKey, 
BuilderBase<PseudoUnbalanceMass\>.BuildObject, 
BuilderBase<PseudoUnbalanceMass\>.BuildDocument, 
BuilderBase<PseudoUnbalanceMass\>.UseInterface, 
BuilderBase<PseudoUnbalanceMass\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddUnbalanceMassToShaft__ctor"></a> AddUnbalanceMassToShaft\(\)

```csharp
public AddUnbalanceMassToShaft()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddUnbalanceMassToShaft_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

