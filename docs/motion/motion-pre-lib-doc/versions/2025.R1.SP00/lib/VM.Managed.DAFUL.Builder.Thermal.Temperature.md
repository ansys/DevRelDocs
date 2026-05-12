#  Class Temperature

Namespace: [VM.Managed.DAFUL.Builder.Thermal](VM.Managed.DAFUL.Builder.Thermal.md)  
Assembly: VMBldThermal.dll  

```csharp
public class Temperature : BuilderNamed<Temperature>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Temperature\> ← 
BuilderSymmetric<Temperature\> ← 
BuilderNamed<Temperature\> ← 
[Temperature](VM.Managed.DAFUL.Builder.Thermal.Temperature.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Temperature\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Temperature\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Temperature\>.Name, 
BuilderSymmetric<Temperature\>.Build\(Document\), 
BuilderSymmetric<Temperature\>.Symmetric, 
BuilderSymmetric<Temperature\>.CurrentSymmetric, 
BuilderBase<Temperature\>.m\_bSuccess, 
BuilderBase<Temperature\>.Build\(Document\), 
BuilderBase<Temperature\>.Build\(Document, List<string\>\), 
BuilderBase<Temperature\>.Validate\(IList<string\>\), 
BuilderBase<Temperature\>.Success\(\), 
BuilderBase<Temperature\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Temperature\>.OnFinalBuild\(string, Document\), 
BuilderBase<Temperature\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Temperature\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Temperature\>.Parameters, 
BuilderBase<Temperature\>.AddToDoc, 
BuilderBase<Temperature\>.UseChangedObject, 
BuilderBase<Temperature\>.SetPointKey, 
BuilderBase<Temperature\>.BuildObject, 
BuilderBase<Temperature\>.BuildDocument, 
BuilderBase<Temperature\>.UseInterface, 
BuilderBase<Temperature\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Thermal_Temperature__ctor"></a> Temperature\(\)

```csharp
public Temperature()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Thermal_Temperature_Target"></a> Target

```csharp
public ObjectBase Target { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Thermal_Temperature_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

