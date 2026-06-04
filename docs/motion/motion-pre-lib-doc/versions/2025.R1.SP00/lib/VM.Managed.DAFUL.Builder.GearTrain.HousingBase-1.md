#  Class HousingBase<TProperty\>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public abstract class HousingBase<TProperty> : OpenDesigner<TProperty>, IBuilder where TProperty : ObjectBase, new()
```

#### Type Parameters

`TProperty` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<TProperty\> ← 
BuilderSymmetric<TProperty\> ← 
BuilderNamed<TProperty\> ← 
[OpenDesigner<TProperty\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[HousingBase<TProperty\>](VM.Managed.DAFUL.Builder.GearTrain.HousingBase\-1.md)

#### Implements

IBuilder

#### Inherited Members

[OpenDesigner<TProperty\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<TProperty\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<TProperty\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<TProperty\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<TProperty\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
BuilderNamed<TProperty\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<TProperty\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<TProperty\>.Name, 
BuilderSymmetric<TProperty\>.Build\(Document\), 
BuilderSymmetric<TProperty\>.Symmetric, 
BuilderSymmetric<TProperty\>.CurrentSymmetric, 
BuilderBase<TProperty\>.m\_bSuccess, 
BuilderBase<TProperty\>.Build\(Document\), 
BuilderBase<TProperty\>.Build\(Document, List<string\>\), 
BuilderBase<TProperty\>.Validate\(IList<string\>\), 
BuilderBase<TProperty\>.Success\(\), 
BuilderBase<TProperty\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<TProperty\>.OnFinalBuild\(string, Document\), 
BuilderBase<TProperty\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<TProperty\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<TProperty\>.Parameters, 
BuilderBase<TProperty\>.AddToDoc, 
BuilderBase<TProperty\>.UseChangedObject, 
BuilderBase<TProperty\>.SetPointKey, 
BuilderBase<TProperty\>.BuildObject, 
BuilderBase<TProperty\>.BuildDocument, 
BuilderBase<TProperty\>.UseInterface, 
BuilderBase<TProperty\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingBase_1__ctor"></a> HousingBase\(\)

```csharp
protected HousingBase()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingBase_1_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_HousingBase_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

