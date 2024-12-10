#  Class HydroForce

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class HydroForce : BuilderNamed<HydroForce>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HydroForce\> ← 
BuilderSymmetric<HydroForce\> ← 
BuilderNamed<HydroForce\> ← 
[HydroForce](VM.Managed.DAFUL.Builder.Track.HydroForce.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<HydroForce\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<HydroForce\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<HydroForce\>.Name, 
BuilderSymmetric<HydroForce\>.Build\(Document\), 
BuilderSymmetric<HydroForce\>.Symmetric, 
BuilderSymmetric<HydroForce\>.CurrentSymmetric, 
BuilderBase<HydroForce\>.m\_bSuccess, 
BuilderBase<HydroForce\>.Build\(Document\), 
BuilderBase<HydroForce\>.Build\(Document, List<string\>\), 
BuilderBase<HydroForce\>.Validate\(IList<string\>\), 
BuilderBase<HydroForce\>.Success\(\), 
BuilderBase<HydroForce\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HydroForce\>.OnFinalBuild\(string, Document\), 
BuilderBase<HydroForce\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HydroForce\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HydroForce\>.Parameters, 
BuilderBase<HydroForce\>.AddToDoc, 
BuilderBase<HydroForce\>.UseChangedObject, 
BuilderBase<HydroForce\>.SetPointKey, 
BuilderBase<HydroForce\>.BuildObject, 
BuilderBase<HydroForce\>.BuildDocument, 
BuilderBase<HydroForce\>.UseInterface, 
BuilderBase<HydroForce\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_HydroForce__ctor"></a> HydroForce\(\)

```csharp
public HydroForce()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_HydroForce_ActionBodies"></a> ActionBodies

```csharp
public HydroForce.CheckedMultiBody ActionBodies { get; set; }
```

#### Property Value

 [HydroForce](VM.Managed.DAFUL.Builder.Track.HydroForce.md).[CheckedMultiBody](VM.Managed.DAFUL.Builder.Track.HydroForce.CheckedMultiBody.md)

### <a id="VM_Managed_DAFUL_Builder_Track_HydroForce_BaseWater"></a> BaseWater

```csharp
public IWater BaseWater { get; }
```

#### Property Value

 IWater

### <a id="VM_Managed_DAFUL_Builder_Track_HydroForce_HullBody"></a> HullBody

```csharp
public IConnectable HullBody { get; }
```

#### Property Value

 IConnectable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_HydroForce_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

