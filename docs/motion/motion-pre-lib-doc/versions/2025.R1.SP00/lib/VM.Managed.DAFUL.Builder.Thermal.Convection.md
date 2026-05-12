#  Class Convection

Namespace: [VM.Managed.DAFUL.Builder.Thermal](VM.Managed.DAFUL.Builder.Thermal.md)  
Assembly: VMBldThermal.dll  

```csharp
public class Convection : BuilderNamed<Convection>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Convection\> ← 
BuilderSymmetric<Convection\> ← 
BuilderNamed<Convection\> ← 
[Convection](VM.Managed.DAFUL.Builder.Thermal.Convection.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Convection\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Convection\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Convection\>.Name, 
BuilderSymmetric<Convection\>.Build\(Document\), 
BuilderSymmetric<Convection\>.Symmetric, 
BuilderSymmetric<Convection\>.CurrentSymmetric, 
BuilderBase<Convection\>.m\_bSuccess, 
BuilderBase<Convection\>.Build\(Document\), 
BuilderBase<Convection\>.Build\(Document, List<string\>\), 
BuilderBase<Convection\>.Validate\(IList<string\>\), 
BuilderBase<Convection\>.Success\(\), 
BuilderBase<Convection\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Convection\>.OnFinalBuild\(string, Document\), 
BuilderBase<Convection\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Convection\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Convection\>.Parameters, 
BuilderBase<Convection\>.AddToDoc, 
BuilderBase<Convection\>.UseChangedObject, 
BuilderBase<Convection\>.SetPointKey, 
BuilderBase<Convection\>.BuildObject, 
BuilderBase<Convection\>.BuildDocument, 
BuilderBase<Convection\>.UseInterface, 
BuilderBase<Convection\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Thermal_Convection__ctor"></a> Convection\(\)

```csharp
public Convection()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Thermal_Convection_Target"></a> Target

```csharp
public IConvectionComponent Target { get; }
```

#### Property Value

 IConvectionComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_Thermal_Convection_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

