#  Class DamperBBPP

Namespace: [VM.Managed.DAFUL.Builder.Car.Force](VM.Managed.DAFUL.Builder.Car.Force.md)  
Assembly: VMBldCar.dll  

```csharp
public class DamperBBPP : Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Damper\> ← 
BuilderSymmetric<Damper\> ← 
BuilderNamed<Damper\> ← 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\> ← 
[DamperBBPP](VM.Managed.DAFUL.Builder.Car.Force.DamperBBPP.md)

#### Implements

IBuilder

#### Inherited Members

Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable, 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable, 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc, 
Connector<Damper, PropertyDamper, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<Damper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Damper\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Damper\>.Name, 
BuilderSymmetric<Damper\>.Build\(Document\), 
BuilderSymmetric<Damper\>.Symmetric, 
BuilderSymmetric<Damper\>.CurrentSymmetric, 
BuilderBase<Damper\>.m\_bSuccess, 
BuilderBase<Damper\>.Build\(Document\), 
BuilderBase<Damper\>.Build\(Document, List<string\>\), 
BuilderBase<Damper\>.Validate\(IList<string\>\), 
BuilderBase<Damper\>.Success\(\), 
BuilderBase<Damper\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Damper\>.OnFinalBuild\(string, Document\), 
BuilderBase<Damper\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Damper\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Damper\>.Parameters, 
BuilderBase<Damper\>.AddToDoc, 
BuilderBase<Damper\>.UseChangedObject, 
BuilderBase<Damper\>.SetPointKey, 
BuilderBase<Damper\>.BuildObject, 
BuilderBase<Damper\>.BuildDocument, 
BuilderBase<Damper\>.UseInterface, 
BuilderBase<Damper\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Car_Force_DamperBBPP__ctor"></a> DamperBBPP\(\)

```csharp
public DamperBBPP()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Car_Force_DamperBBPP_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Car_Force_DamperBBPP_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

