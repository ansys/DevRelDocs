#  Class ReboundstopBBPP

Namespace: [VM.Managed.DAFUL.Builder.Car.Force](VM.Managed.DAFUL.Builder.Car.Force.md)  
Assembly: VMBldCar.dll  

```csharp
public class ReboundstopBBPP : Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Reboundstop\> ← 
BuilderSymmetric<Reboundstop\> ← 
BuilderNamed<Reboundstop\> ← 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\> ← 
[ReboundstopBBPP](VM.Managed.DAFUL.Builder.Car.Force.ReboundstopBBPP.md)

#### Implements

IBuilder

#### Inherited Members

Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable, 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable, 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc, 
Connector<Reboundstop, PropertyReboundstop, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<Reboundstop\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Reboundstop\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Reboundstop\>.Name, 
BuilderSymmetric<Reboundstop\>.Build\(Document\), 
BuilderSymmetric<Reboundstop\>.Symmetric, 
BuilderSymmetric<Reboundstop\>.CurrentSymmetric, 
BuilderBase<Reboundstop\>.m\_bSuccess, 
BuilderBase<Reboundstop\>.Build\(Document\), 
BuilderBase<Reboundstop\>.Build\(Document, List<string\>\), 
BuilderBase<Reboundstop\>.Validate\(IList<string\>\), 
BuilderBase<Reboundstop\>.Success\(\), 
BuilderBase<Reboundstop\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Reboundstop\>.OnFinalBuild\(string, Document\), 
BuilderBase<Reboundstop\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Reboundstop\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Reboundstop\>.Parameters, 
BuilderBase<Reboundstop\>.AddToDoc, 
BuilderBase<Reboundstop\>.UseChangedObject, 
BuilderBase<Reboundstop\>.SetPointKey, 
BuilderBase<Reboundstop\>.BuildObject, 
BuilderBase<Reboundstop\>.BuildDocument, 
BuilderBase<Reboundstop\>.UseInterface, 
BuilderBase<Reboundstop\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Car_Force_ReboundstopBBPP__ctor"></a> ReboundstopBBPP\(\)

```csharp
public ReboundstopBBPP()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Car_Force_ReboundstopBBPP_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Car_Force_ReboundstopBBPP_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

