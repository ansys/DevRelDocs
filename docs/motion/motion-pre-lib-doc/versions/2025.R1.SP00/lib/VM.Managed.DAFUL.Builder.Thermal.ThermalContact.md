#  Class ThermalContact

Namespace: [VM.Managed.DAFUL.Builder.Thermal](VM.Managed.DAFUL.Builder.Thermal.md)  
Assembly: VMBldThermal.dll  

```csharp
public class ThermalContact : BuilderNamed<ThermalContact>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ThermalContact\> ← 
BuilderSymmetric<ThermalContact\> ← 
BuilderNamed<ThermalContact\> ← 
[ThermalContact](VM.Managed.DAFUL.Builder.Thermal.ThermalContact.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ThermalContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ThermalContact\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ThermalContact\>.Name, 
BuilderSymmetric<ThermalContact\>.Build\(Document\), 
BuilderSymmetric<ThermalContact\>.Symmetric, 
BuilderSymmetric<ThermalContact\>.CurrentSymmetric, 
BuilderBase<ThermalContact\>.m\_bSuccess, 
BuilderBase<ThermalContact\>.Build\(Document\), 
BuilderBase<ThermalContact\>.Build\(Document, List<string\>\), 
BuilderBase<ThermalContact\>.Validate\(IList<string\>\), 
BuilderBase<ThermalContact\>.Success\(\), 
BuilderBase<ThermalContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ThermalContact\>.OnFinalBuild\(string, Document\), 
BuilderBase<ThermalContact\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ThermalContact\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ThermalContact\>.Parameters, 
BuilderBase<ThermalContact\>.AddToDoc, 
BuilderBase<ThermalContact\>.UseChangedObject, 
BuilderBase<ThermalContact\>.SetPointKey, 
BuilderBase<ThermalContact\>.BuildObject, 
BuilderBase<ThermalContact\>.BuildDocument, 
BuilderBase<ThermalContact\>.UseInterface, 
BuilderBase<ThermalContact\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Thermal_ThermalContact__ctor"></a> ThermalContact\(\)

```csharp
public ThermalContact()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Thermal_ThermalContact_Target"></a> Target

```csharp
public ObjectBase Target { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Thermal_ThermalContact_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

