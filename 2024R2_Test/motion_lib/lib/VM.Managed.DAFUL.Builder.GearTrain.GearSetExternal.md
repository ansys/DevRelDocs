# <a id="VM_Managed_DAFUL_Builder_GearTrain_GearSetExternal"></a> Class GearSetExternal

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class GearSetExternal : GearSetBase<GearSet>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<GearSet\> ← 
BuilderSymmetric<GearSet\> ← 
BuilderNamed<GearSet\> ← 
[OpenDesigner<GearSet\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[GearSetBase<GearSet\>](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md) ← 
[GearSetExternal](VM.Managed.DAFUL.Builder.GearTrain.GearSetExternal.md)

#### Implements

IBuilder

#### Inherited Members

[GearSetBase<GearSet\>.m\_bUseKissSoftInterface](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_m\_bUseKissSoftInterface), 
[GearSetBase<GearSet\>.m\_bUseAdvanced](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_m\_bUseAdvanced), 
[GearSetBase<GearSet\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[GearSetBase<GearSet\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[GearSetBase<GearSet\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[GearSetBase<GearSet\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_InputArray), 
[GearSetBase<GearSet\>.Color](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_Color), 
[GearSetBase<GearSet\>.NumberOfGear](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_NumberOfGear), 
[GearSetBase<GearSet\>.CenterDistance](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_CenterDistance), 
[GearSetBase<GearSet\>.NumberOfTeeth](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_NumberOfTeeth), 
[GearSetBase<GearSet\>.ProfileShift](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_ProfileShift), 
[GearSetBase<GearSet\>.FaceWidth](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_FaceWidth), 
[GearSetBase<GearSet\>.GetName](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_GearSetBase\_1\_GetName), 
[OpenDesigner<GearSet\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<GearSet\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<GearSet\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<GearSet\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<GearSet\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<GearSet\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<GearSet\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<GearSet\>.Name, 
BuilderSymmetric<GearSet\>.Build\(Document\), 
BuilderSymmetric<GearSet\>.Symmetric, 
BuilderSymmetric<GearSet\>.CurrentSymmetric, 
BuilderBase<GearSet\>.m\_bSuccess, 
BuilderBase<GearSet\>.Build\(Document\), 
BuilderBase<GearSet\>.Build\(Document, List<string\>\), 
BuilderBase<GearSet\>.Validate\(IList<string\>\), 
BuilderBase<GearSet\>.Success\(\), 
BuilderBase<GearSet\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<GearSet\>.OnFinalBuild\(string, Document\), 
BuilderBase<GearSet\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<GearSet\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<GearSet\>.Parameters, 
BuilderBase<GearSet\>.AddToDoc, 
BuilderBase<GearSet\>.UseChangedObject, 
BuilderBase<GearSet\>.SetPointKey, 
BuilderBase<GearSet\>.BuildObject, 
BuilderBase<GearSet\>.BuildDocument, 
BuilderBase<GearSet\>.UseInterface, 
BuilderBase<GearSet\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_GearSetExternal__ctor"></a> GearSetExternal\(\)

```csharp
public GearSetExternal()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_GearSetExternal_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

