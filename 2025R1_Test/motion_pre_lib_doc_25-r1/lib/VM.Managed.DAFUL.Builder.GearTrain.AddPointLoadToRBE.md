#  Class AddPointLoadToRBE

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddPointLoadToRBE : AddPointEntityToRBE<PseudoPointLoadOnRBE>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PseudoPointLoadOnRBE\> ← 
BuilderSymmetric<PseudoPointLoadOnRBE\> ← 
BuilderNamed<PseudoPointLoadOnRBE\> ← 
[AddPointEntityToRBE<PseudoPointLoadOnRBE\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md) ← 
[AddPointLoadToRBE](VM.Managed.DAFUL.Builder.GearTrain.AddPointLoadToRBE.md)

#### Implements

IBuilder

#### Inherited Members

[AddPointEntityToRBE<PseudoPointLoadOnRBE\>.RBEName\(HiddenDocumentMeshBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_RBEName\_VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentMeshBase\_), 
[AddPointEntityToRBE<PseudoPointLoadOnRBE\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[AddPointEntityToRBE<PseudoPointLoadOnRBE\>.RBEConnectable](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_RBEConnectable), 
[AddPointEntityToRBE<PseudoPointLoadOnRBE\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddPointEntityToRBE\_1\_InputArray), 
BuilderNamed<PseudoPointLoadOnRBE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PseudoPointLoadOnRBE\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PseudoPointLoadOnRBE\>.Name, 
BuilderSymmetric<PseudoPointLoadOnRBE\>.Build\(Document\), 
BuilderSymmetric<PseudoPointLoadOnRBE\>.Symmetric, 
BuilderSymmetric<PseudoPointLoadOnRBE\>.CurrentSymmetric, 
BuilderBase<PseudoPointLoadOnRBE\>.m\_bSuccess, 
BuilderBase<PseudoPointLoadOnRBE\>.Build\(Document\), 
BuilderBase<PseudoPointLoadOnRBE\>.Build\(Document, List<string\>\), 
BuilderBase<PseudoPointLoadOnRBE\>.Validate\(IList<string\>\), 
BuilderBase<PseudoPointLoadOnRBE\>.Success\(\), 
BuilderBase<PseudoPointLoadOnRBE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PseudoPointLoadOnRBE\>.OnFinalBuild\(string, Document\), 
BuilderBase<PseudoPointLoadOnRBE\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PseudoPointLoadOnRBE\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PseudoPointLoadOnRBE\>.Parameters, 
BuilderBase<PseudoPointLoadOnRBE\>.AddToDoc, 
BuilderBase<PseudoPointLoadOnRBE\>.UseChangedObject, 
BuilderBase<PseudoPointLoadOnRBE\>.SetPointKey, 
BuilderBase<PseudoPointLoadOnRBE\>.BuildObject, 
BuilderBase<PseudoPointLoadOnRBE\>.BuildDocument, 
BuilderBase<PseudoPointLoadOnRBE\>.UseInterface, 
BuilderBase<PseudoPointLoadOnRBE\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointLoadToRBE__ctor"></a> AddPointLoadToRBE\(\)

```csharp
public AddPointLoadToRBE()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointLoadToRBE_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

