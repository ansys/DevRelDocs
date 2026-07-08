#  Class ShaftSetFE

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class ShaftSetFE : HousingFEBase<ShaftSetFE>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ShaftSetFE\> ← 
BuilderSymmetric<ShaftSetFE\> ← 
BuilderNamed<ShaftSetFE\> ← 
[OpenDesigner<ShaftSetFE\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[HousingBase<ShaftSetFE\>](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md) ← 
[HousingFEBase<ShaftSetFE\>](VM.Managed.DAFUL.Builder.GearTrain.HousingFEBase\-1.md) ← 
[ShaftSetFE](VM.Managed.DAFUL.Builder.GearTrain.ShaftSetFE.md)

#### Implements

IBuilder

#### Inherited Members

[HousingFEBase<ShaftSetFE\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.HousingFEBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingFEBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[HousingBase<ShaftSetFE\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[HousingBase<ShaftSetFE\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_HousingBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<ShaftSetFE\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<ShaftSetFE\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<ShaftSetFE\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<ShaftSetFE\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<ShaftSetFE\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<ShaftSetFE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ShaftSetFE\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ShaftSetFE\>.Name, 
BuilderSymmetric<ShaftSetFE\>.Build\(Document\), 
BuilderSymmetric<ShaftSetFE\>.Symmetric, 
BuilderSymmetric<ShaftSetFE\>.CurrentSymmetric, 
BuilderBase<ShaftSetFE\>.m\_bSuccess, 
BuilderBase<ShaftSetFE\>.Build\(Document\), 
BuilderBase<ShaftSetFE\>.Build\(Document, List<string\>\), 
BuilderBase<ShaftSetFE\>.Validate\(IList<string\>\), 
BuilderBase<ShaftSetFE\>.Success\(\), 
BuilderBase<ShaftSetFE\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ShaftSetFE\>.OnFinalBuild\(string, Document\), 
BuilderBase<ShaftSetFE\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ShaftSetFE\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ShaftSetFE\>.Parameters, 
BuilderBase<ShaftSetFE\>.AddToDoc, 
BuilderBase<ShaftSetFE\>.UseChangedObject, 
BuilderBase<ShaftSetFE\>.SetPointKey, 
BuilderBase<ShaftSetFE\>.BuildObject, 
BuilderBase<ShaftSetFE\>.BuildDocument, 
BuilderBase<ShaftSetFE\>.UseInterface, 
BuilderBase<ShaftSetFE\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetFE__ctor"></a> ShaftSetFE\(\)

```csharp
public ShaftSetFE()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetFE_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

