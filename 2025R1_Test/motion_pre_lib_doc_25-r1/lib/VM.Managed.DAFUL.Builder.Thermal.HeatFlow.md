#  Class HeatFlow

Namespace: [VM.Managed.DAFUL.Builder.Thermal](VM.Managed.DAFUL.Builder.Thermal.md)  
Assembly: VMBldThermal.dll  

```csharp
public class HeatFlow : BuilderNamed<HeatFlow>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HeatFlow\> ← 
BuilderSymmetric<HeatFlow\> ← 
BuilderNamed<HeatFlow\> ← 
[HeatFlow](VM.Managed.DAFUL.Builder.Thermal.HeatFlow.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<HeatFlow\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<HeatFlow\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<HeatFlow\>.Name, 
BuilderSymmetric<HeatFlow\>.Build\(Document\), 
BuilderSymmetric<HeatFlow\>.Symmetric, 
BuilderSymmetric<HeatFlow\>.CurrentSymmetric, 
BuilderBase<HeatFlow\>.m\_bSuccess, 
BuilderBase<HeatFlow\>.Build\(Document\), 
BuilderBase<HeatFlow\>.Build\(Document, List<string\>\), 
BuilderBase<HeatFlow\>.Validate\(IList<string\>\), 
BuilderBase<HeatFlow\>.Success\(\), 
BuilderBase<HeatFlow\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HeatFlow\>.OnFinalBuild\(string, Document\), 
BuilderBase<HeatFlow\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HeatFlow\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HeatFlow\>.Parameters, 
BuilderBase<HeatFlow\>.AddToDoc, 
BuilderBase<HeatFlow\>.UseChangedObject, 
BuilderBase<HeatFlow\>.SetPointKey, 
BuilderBase<HeatFlow\>.BuildObject, 
BuilderBase<HeatFlow\>.BuildDocument, 
BuilderBase<HeatFlow\>.UseInterface, 
BuilderBase<HeatFlow\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatFlow__ctor"></a> HeatFlow\(\)

```csharp
public HeatFlow()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatFlow_Target"></a> Target

```csharp
public IHeatFlowComponent Target { get; }
```

#### Property Value

 IHeatFlowComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatFlow_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

