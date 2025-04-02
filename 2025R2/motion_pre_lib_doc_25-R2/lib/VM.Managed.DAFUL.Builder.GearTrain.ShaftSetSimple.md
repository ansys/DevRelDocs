#  Class ShaftSetSimple

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class ShaftSetSimple : ShaftSetBase, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ShaftSet\> ← 
BuilderSymmetric<ShaftSet\> ← 
BuilderNamed<ShaftSet\> ← 
[OpenDesigner<ShaftSet\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[ShaftSetBase](VM.Managed.DAFUL.Builder.GearTrain.ShaftSetBase.md) ← 
[ShaftSetSimple](VM.Managed.DAFUL.Builder.GearTrain.ShaftSetSimple.md)

#### Implements

IBuilder

#### Inherited Members

[OpenDesigner<ShaftSet\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<ShaftSet\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<ShaftSet\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<ShaftSet\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<ShaftSet\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<ShaftSet\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ShaftSet\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ShaftSet\>.Name, 
BuilderSymmetric<ShaftSet\>.Build\(Document\), 
BuilderSymmetric<ShaftSet\>.Symmetric, 
BuilderSymmetric<ShaftSet\>.CurrentSymmetric, 
BuilderBase<ShaftSet\>.m\_bSuccess, 
BuilderBase<ShaftSet\>.Build\(Document\), 
BuilderBase<ShaftSet\>.Build\(Document, List<string\>\), 
BuilderBase<ShaftSet\>.Validate\(IList<string\>\), 
BuilderBase<ShaftSet\>.Success\(\), 
BuilderBase<ShaftSet\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ShaftSet\>.OnFinalBuild\(string, Document\), 
BuilderBase<ShaftSet\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ShaftSet\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ShaftSet\>.Parameters, 
BuilderBase<ShaftSet\>.AddToDoc, 
BuilderBase<ShaftSet\>.UseChangedObject, 
BuilderBase<ShaftSet\>.SetPointKey, 
BuilderBase<ShaftSet\>.BuildObject, 
BuilderBase<ShaftSet\>.BuildDocument, 
BuilderBase<ShaftSet\>.UseInterface, 
BuilderBase<ShaftSet\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetSimple__ctor"></a> ShaftSetSimple\(\)

```csharp
public ShaftSetSimple()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetSimple_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetSimple_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetSimple_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_ShaftSetSimple_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

