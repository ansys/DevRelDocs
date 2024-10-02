#  Class HousingMeshFree

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class HousingMeshFree : HousingMeshFreeBase<HousingMeshFree>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HousingMeshFree\> ← 
BuilderSymmetric<HousingMeshFree\> ← 
BuilderNamed<HousingMeshFree\> ← 
[OpenDesigner<HousingMeshFree\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[HousingBase<HousingMeshFree\>](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md) ← 
[HousingMeshFreeBase<HousingMeshFree\>](VM.Managed.DAFUL.Builder.GearTrain.HousingMeshFreeBase\-1.md) ← 
[HousingMeshFree](VM.Managed.DAFUL.Builder.GearTrain.HousingMeshFree.md)

#### Implements

IBuilder

#### Inherited Members

[HousingMeshFreeBase<HousingMeshFree\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.HousingMeshFreeBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingMeshFreeBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[HousingBase<HousingMeshFree\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[HousingBase<HousingMeshFree\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<HousingMeshFree\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<HousingMeshFree\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<HousingMeshFree\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<HousingMeshFree\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<HousingMeshFree\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<HousingMeshFree\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<HousingMeshFree\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<HousingMeshFree\>.Name, 
BuilderSymmetric<HousingMeshFree\>.Build\(Document\), 
BuilderSymmetric<HousingMeshFree\>.Symmetric, 
BuilderSymmetric<HousingMeshFree\>.CurrentSymmetric, 
BuilderBase<HousingMeshFree\>.m\_bSuccess, 
BuilderBase<HousingMeshFree\>.Build\(Document\), 
BuilderBase<HousingMeshFree\>.Build\(Document, List<string\>\), 
BuilderBase<HousingMeshFree\>.Validate\(IList<string\>\), 
BuilderBase<HousingMeshFree\>.Success\(\), 
BuilderBase<HousingMeshFree\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HousingMeshFree\>.OnFinalBuild\(string, Document\), 
BuilderBase<HousingMeshFree\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HousingMeshFree\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HousingMeshFree\>.Parameters, 
BuilderBase<HousingMeshFree\>.AddToDoc, 
BuilderBase<HousingMeshFree\>.UseChangedObject, 
BuilderBase<HousingMeshFree\>.SetPointKey, 
BuilderBase<HousingMeshFree\>.BuildObject, 
BuilderBase<HousingMeshFree\>.BuildDocument, 
BuilderBase<HousingMeshFree\>.UseInterface, 
BuilderBase<HousingMeshFree\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingMeshFree__ctor"></a> HousingMeshFree\(\)

```csharp
public HousingMeshFree()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingMeshFree_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

