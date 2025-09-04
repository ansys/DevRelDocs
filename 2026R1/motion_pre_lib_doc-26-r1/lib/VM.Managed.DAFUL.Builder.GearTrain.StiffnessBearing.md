#  Class StiffnessBearing

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

Stiffness Bearing

```csharp
public class StiffnessBearing : BearingBase<Bearing>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Bearing\> ← 
BuilderSymmetric<Bearing\> ← 
BuilderNamed<Bearing\> ← 
[OpenDesigner<Bearing\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[BearingBase<Bearing\>](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md) ← 
[StiffnessBearing](VM.Managed.DAFUL.Builder.GearTrain.StiffnessBearing.md)

#### Implements

IBuilder

#### Inherited Members

[BearingBase<Bearing\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_BearingBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[BearingBase<Bearing\>.InputArray](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_BearingBase\_1\_InputArray), 
[BearingBase<Bearing\>.Color](VM.Managed.DAFUL.Builder.GearTrain.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_BearingBase\_1\_Color), 
[OpenDesigner<Bearing\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<Bearing\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<Bearing\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<Bearing\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<Bearing\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<Bearing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Bearing\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Bearing\>.Name, 
BuilderSymmetric<Bearing\>.Build\(Document\), 
BuilderSymmetric<Bearing\>.Symmetric, 
BuilderSymmetric<Bearing\>.CurrentSymmetric, 
BuilderBase<Bearing\>.m\_bSuccess, 
BuilderBase<Bearing\>.Build\(Document\), 
BuilderBase<Bearing\>.Build\(Document, List<string\>\), 
BuilderBase<Bearing\>.Validate\(IList<string\>\), 
BuilderBase<Bearing\>.Success\(\), 
BuilderBase<Bearing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Bearing\>.OnFinalBuild\(string, Document\), 
BuilderBase<Bearing\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Bearing\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Bearing\>.Parameters, 
BuilderBase<Bearing\>.AddToDoc, 
BuilderBase<Bearing\>.UseChangedObject, 
BuilderBase<Bearing\>.SetPointKey, 
BuilderBase<Bearing\>.BuildObject, 
BuilderBase<Bearing\>.BuildDocument, 
BuilderBase<Bearing\>.UseInterface, 
BuilderBase<Bearing\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_StiffnessBearing__ctor"></a> StiffnessBearing\(\)

```csharp
public StiffnessBearing()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_StiffnessBearing_InnerRacewayColor"></a> InnerRacewayColor

```csharp
public string InnerRacewayColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_StiffnessBearing_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

