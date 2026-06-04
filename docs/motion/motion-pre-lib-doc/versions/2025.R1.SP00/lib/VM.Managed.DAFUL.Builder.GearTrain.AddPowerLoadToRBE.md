#  Class AddPowerLoadToRBE

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddPowerLoadToRBE : AddPointEntityToRBE<PseudoPowerLoadOnRBE>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoPowerLoadOnRBE\> ← 
BuilderSymmetric<PseudoPowerLoadOnRBE\> ← 
BuilderNamed<PseudoPowerLoadOnRBE\> ← 
[AddPointEntityToRBE<PseudoPowerLoadOnRBE\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md) ← 
[AddPowerLoadToRBE](VM.Managed.DAFUL.Builder.GearTrain.AddPowerLoadToRBE.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToRBE<PseudoPowerLoadOnRBE\>.RBEName\(HiddenDocumentMeshBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_RBEName\_VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentMeshBase\_), 
[AddPointEntityToRBE<PseudoPowerLoadOnRBE\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[AddPointEntityToRBE<PseudoPowerLoadOnRBE\>.RBEConnectable](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_RBEConnectable), 
[AddPointEntityToRBE<PseudoPowerLoadOnRBE\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_InputArray), 
BuilderNamed<PseudoPowerLoadOnRBE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoPowerLoadOnRBE\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoPowerLoadOnRBE\>.Name, 
BuilderSymmetric<PseudoPowerLoadOnRBE\>.Build\(Document\), 
BuilderSymmetric<PseudoPowerLoadOnRBE\>.Symmetric, 
BuilderSymmetric<PseudoPowerLoadOnRBE\>.CurrentSymmetric, 
BuilderBase<PseudoPowerLoadOnRBE\>.m\_bSuccess, 
BuilderBase<PseudoPowerLoadOnRBE\>.Build\(Document\), 
BuilderBase<PseudoPowerLoadOnRBE\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoPowerLoadOnRBE\>.Validate\(IList<string\>\), 
BuilderBase<PseudoPowerLoadOnRBE\>.Success\(\), 
BuilderBase<PseudoPowerLoadOnRBE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoPowerLoadOnRBE\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoPowerLoadOnRBE\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoPowerLoadOnRBE\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoPowerLoadOnRBE\>.Parameters, 
BuilderBase<PseudoPowerLoadOnRBE\>.AddToDoc, 
BuilderBase<PseudoPowerLoadOnRBE\>.UseChangedObject, 
BuilderBase<PseudoPowerLoadOnRBE\>.SetPointKey, 
BuilderBase<PseudoPowerLoadOnRBE\>.BuildObject, 
BuilderBase<PseudoPowerLoadOnRBE\>.BuildDocument, 
BuilderBase<PseudoPowerLoadOnRBE\>.UseInterface, 
BuilderBase<PseudoPowerLoadOnRBE\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPowerLoadToRBE__ctor"></a> AddPowerLoadToRBE\(\)

```csharp
public AddPowerLoadToRBE()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPowerLoadToRBE_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

