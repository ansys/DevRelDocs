#  Class AddUnbalanceMassToRBE

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddUnbalanceMassToRBE : AddPointEntityToRBE<PseudoUnbalanceMassOnRBE>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoUnbalanceMassOnRBE\> ← 
BuilderSymmetric<PseudoUnbalanceMassOnRBE\> ← 
BuilderNamed<PseudoUnbalanceMassOnRBE\> ← 
[AddPointEntityToRBE<PseudoUnbalanceMassOnRBE\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md) ← 
[AddUnbalanceMassToRBE](VM.Managed.DAFUL.Builder.GearTrain.AddUnbalanceMassToRBE.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToRBE<PseudoUnbalanceMassOnRBE\>.RBEName\(HiddenDocumentMeshBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_RBEName\_VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentMeshBase\_), 
[AddPointEntityToRBE<PseudoUnbalanceMassOnRBE\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[AddPointEntityToRBE<PseudoUnbalanceMassOnRBE\>.RBEConnectable](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_RBEConnectable), 
[AddPointEntityToRBE<PseudoUnbalanceMassOnRBE\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_InputArray), 
BuilderNamed<PseudoUnbalanceMassOnRBE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoUnbalanceMassOnRBE\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoUnbalanceMassOnRBE\>.Name, 
BuilderSymmetric<PseudoUnbalanceMassOnRBE\>.Build\(Document\), 
BuilderSymmetric<PseudoUnbalanceMassOnRBE\>.Symmetric, 
BuilderSymmetric<PseudoUnbalanceMassOnRBE\>.CurrentSymmetric, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.m\_bSuccess, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.Build\(Document\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.Validate\(IList<string\>\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.Success\(\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoUnbalanceMassOnRBE\>.Parameters, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.AddToDoc, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.UseChangedObject, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.SetPointKey, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.BuildObject, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.BuildDocument, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.UseInterface, 
BuilderBase<PseudoUnbalanceMassOnRBE\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddUnbalanceMassToRBE__ctor"></a> AddUnbalanceMassToRBE\(\)

```csharp
public AddUnbalanceMassToRBE()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddUnbalanceMassToRBE_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

