#  Class HeatFlux

Namespace: [VM.Managed.DAFUL.Builder.Thermal](VM.Managed.DAFUL.Builder.Thermal.md)  
Assembly: VMBldThermal.dll  

```csharp
public class HeatFlux : BuilderNamed<HeatFlux>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HeatFlux\> ← 
BuilderSymmetric<HeatFlux\> ← 
BuilderNamed<HeatFlux\> ← 
[HeatFlux](VM.Managed.DAFUL.Builder.Thermal.HeatFlux.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<HeatFlux\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<HeatFlux\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<HeatFlux\>.Name, 
BuilderSymmetric<HeatFlux\>.Build\(Document\), 
BuilderSymmetric<HeatFlux\>.Symmetric, 
BuilderSymmetric<HeatFlux\>.CurrentSymmetric, 
BuilderBase<HeatFlux\>.m\_bSuccess, 
BuilderBase<HeatFlux\>.Build\(Document\), 
BuilderBase<HeatFlux\>.Build\(Document, List<string\>\), 
BuilderBase<HeatFlux\>.Validate\(IList<string\>\), 
BuilderBase<HeatFlux\>.Success\(\), 
BuilderBase<HeatFlux\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HeatFlux\>.OnFinalBuild\(string, Document\), 
BuilderBase<HeatFlux\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HeatFlux\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HeatFlux\>.Parameters, 
BuilderBase<HeatFlux\>.AddToDoc, 
BuilderBase<HeatFlux\>.UseChangedObject, 
BuilderBase<HeatFlux\>.SetPointKey, 
BuilderBase<HeatFlux\>.BuildObject, 
BuilderBase<HeatFlux\>.BuildDocument, 
BuilderBase<HeatFlux\>.UseInterface, 
BuilderBase<HeatFlux\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatFlux__ctor"></a> HeatFlux\(\)

```csharp
public HeatFlux()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatFlux_Target"></a> Target

```csharp
public IHeatFluxComponent Target { get; }
```

#### Property Value

 IHeatFluxComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatFlux_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

