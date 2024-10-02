#  Class HousingFE

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class HousingFE : HousingFEBase<HousingFE>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HousingFE\> ← 
BuilderSymmetric<HousingFE\> ← 
BuilderNamed<HousingFE\> ← 
[OpenDesigner<HousingFE\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[HousingBase<HousingFE\>](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md) ← 
[HousingFEBase<HousingFE\>](VM.Managed.DAFUL.Builder.GearTrain.HousingFEBase\-1.md) ← 
[HousingFE](VM.Managed.DAFUL.Builder.GearTrain.HousingFE.md)

#### Implements

IBuilder

#### Inherited Members

[HousingFEBase<HousingFE\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.HousingFEBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingFEBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[HousingBase<HousingFE\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[HousingBase<HousingFE\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<HousingFE\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<HousingFE\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<HousingFE\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<HousingFE\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<HousingFE\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<HousingFE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<HousingFE\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<HousingFE\>.Name, 
BuilderSymmetric<HousingFE\>.Build\(Document\), 
BuilderSymmetric<HousingFE\>.Symmetric, 
BuilderSymmetric<HousingFE\>.CurrentSymmetric, 
BuilderBase<HousingFE\>.m\_bSuccess, 
BuilderBase<HousingFE\>.Build\(Document\), 
BuilderBase<HousingFE\>.Build\(Document, List<string\>\), 
BuilderBase<HousingFE\>.Validate\(IList<string\>\), 
BuilderBase<HousingFE\>.Success\(\), 
BuilderBase<HousingFE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HousingFE\>.OnFinalBuild\(string, Document\), 
BuilderBase<HousingFE\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HousingFE\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HousingFE\>.Parameters, 
BuilderBase<HousingFE\>.AddToDoc, 
BuilderBase<HousingFE\>.UseChangedObject, 
BuilderBase<HousingFE\>.SetPointKey, 
BuilderBase<HousingFE\>.BuildObject, 
BuilderBase<HousingFE\>.BuildDocument, 
BuilderBase<HousingFE\>.UseInterface, 
BuilderBase<HousingFE\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingFE__ctor"></a> HousingFE\(\)

```csharp
public HousingFE()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingFE_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

