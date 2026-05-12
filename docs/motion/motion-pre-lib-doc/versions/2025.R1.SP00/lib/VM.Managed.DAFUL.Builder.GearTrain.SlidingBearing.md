#  Class SlidingBearing

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

Sliding Bearing

```csharp
public class SlidingBearing : BearingBase<SlidingBearing>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SlidingBearing\> ← 
BuilderSymmetric<SlidingBearing\> ← 
BuilderNamed<SlidingBearing\> ← 
[OpenDesigner<SlidingBearing\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[BearingBase<SlidingBearing\>](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md) ← 
[SlidingBearing](VM.Managed.DAFUL.Builder.GearTrain.SlidingBearing.md)

#### Implements

IBuilder

#### Inherited Members

[BearingBase<SlidingBearing\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_BearingBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[BearingBase<SlidingBearing\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_BearingBase\_1\_InputArray), 
[BearingBase<SlidingBearing\>.Color](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_BearingBase\_1\_Color), 
[OpenDesigner<SlidingBearing\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<SlidingBearing\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<SlidingBearing\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<SlidingBearing\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<SlidingBearing\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<SlidingBearing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SlidingBearing\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SlidingBearing\>.Name, 
BuilderSymmetric<SlidingBearing\>.Build\(Document\), 
BuilderSymmetric<SlidingBearing\>.Symmetric, 
BuilderSymmetric<SlidingBearing\>.CurrentSymmetric, 
BuilderBase<SlidingBearing\>.m\_bSuccess, 
BuilderBase<SlidingBearing\>.Build\(Document\), 
BuilderBase<SlidingBearing\>.Build\(Document, List<string\>\), 
BuilderBase<SlidingBearing\>.Validate\(IList<string\>\), 
BuilderBase<SlidingBearing\>.Success\(\), 
BuilderBase<SlidingBearing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SlidingBearing\>.OnFinalBuild\(string, Document\), 
BuilderBase<SlidingBearing\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SlidingBearing\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SlidingBearing\>.Parameters, 
BuilderBase<SlidingBearing\>.AddToDoc, 
BuilderBase<SlidingBearing\>.UseChangedObject, 
BuilderBase<SlidingBearing\>.SetPointKey, 
BuilderBase<SlidingBearing\>.BuildObject, 
BuilderBase<SlidingBearing\>.BuildDocument, 
BuilderBase<SlidingBearing\>.UseInterface, 
BuilderBase<SlidingBearing\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SlidingBearing__ctor"></a> SlidingBearing\(\)

```csharp
public SlidingBearing()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_SlidingBearing_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

Called when [post build].

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

The ob created.

`doc` Document

The document.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

