#  Class HeatGeneration

Namespace: [VM.Managed.DAFUL.Builder.Thermal](VM.Managed.DAFUL.Builder.Thermal.md)  
Assembly: VMBldThermal.dll  

```csharp
public class HeatGeneration : BuilderNamed<HeatGeneration>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<HeatGeneration\> ← 
BuilderSymmetric<HeatGeneration\> ← 
BuilderNamed<HeatGeneration\> ← 
[HeatGeneration](VM.Managed.DAFUL.Builder.Thermal.HeatGeneration.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<HeatGeneration\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<HeatGeneration\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<HeatGeneration\>.Name, 
BuilderSymmetric<HeatGeneration\>.Build\(Document\), 
BuilderSymmetric<HeatGeneration\>.Symmetric, 
BuilderSymmetric<HeatGeneration\>.CurrentSymmetric, 
BuilderBase<HeatGeneration\>.m\_bSuccess, 
BuilderBase<HeatGeneration\>.Build\(Document\), 
BuilderBase<HeatGeneration\>.Build\(Document, List<string\>\), 
BuilderBase<HeatGeneration\>.Validate\(IList<string\>\), 
BuilderBase<HeatGeneration\>.Success\(\), 
BuilderBase<HeatGeneration\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<HeatGeneration\>.OnFinalBuild\(string, Document\), 
BuilderBase<HeatGeneration\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<HeatGeneration\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<HeatGeneration\>.Parameters, 
BuilderBase<HeatGeneration\>.AddToDoc, 
BuilderBase<HeatGeneration\>.UseChangedObject, 
BuilderBase<HeatGeneration\>.SetPointKey, 
BuilderBase<HeatGeneration\>.BuildObject, 
BuilderBase<HeatGeneration\>.BuildDocument, 
BuilderBase<HeatGeneration\>.UseInterface, 
BuilderBase<HeatGeneration\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatGeneration__ctor"></a> HeatGeneration\(\)

```csharp
public HeatGeneration()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatGeneration_Target"></a> Target

```csharp
public ObjectBase Target { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Thermal_HeatGeneration_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

