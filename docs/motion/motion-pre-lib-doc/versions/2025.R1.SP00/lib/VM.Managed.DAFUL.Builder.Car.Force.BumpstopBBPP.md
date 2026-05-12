#  Class BumpstopBBPP

Namespace: [VM.Managed.DAFUL.Builder.Car.Force](VM.Managed.DAFUL.Builder.Car.Force.md)  
Assembly: VMBldCar.dll  

```csharp
public class BumpstopBBPP : Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Bumpstop\> ← 
BuilderSymmetric<Bumpstop\> ← 
BuilderNamed<Bumpstop\> ← 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\> ← 
[BumpstopBBPP](VM.Managed.DAFUL.Builder.Car.Force.BumpstopBBPP.md)

#### Implements

IBuilder

#### Inherited Members

Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable, 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable, 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc, 
Connector<Bumpstop, PropertyBumpstop, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<Bumpstop\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Bumpstop\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Bumpstop\>.Name, 
BuilderSymmetric<Bumpstop\>.Build\(Document\), 
BuilderSymmetric<Bumpstop\>.Symmetric, 
BuilderSymmetric<Bumpstop\>.CurrentSymmetric, 
BuilderBase<Bumpstop\>.m\_bSuccess, 
BuilderBase<Bumpstop\>.Build\(Document\), 
BuilderBase<Bumpstop\>.Build\(Document, List<string\>\), 
BuilderBase<Bumpstop\>.Validate\(IList<string\>\), 
BuilderBase<Bumpstop\>.Success\(\), 
BuilderBase<Bumpstop\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Bumpstop\>.OnFinalBuild\(string, Document\), 
BuilderBase<Bumpstop\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Bumpstop\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Bumpstop\>.Parameters, 
BuilderBase<Bumpstop\>.AddToDoc, 
BuilderBase<Bumpstop\>.UseChangedObject, 
BuilderBase<Bumpstop\>.SetPointKey, 
BuilderBase<Bumpstop\>.BuildObject, 
BuilderBase<Bumpstop\>.BuildDocument, 
BuilderBase<Bumpstop\>.UseInterface, 
BuilderBase<Bumpstop\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Car_Force_BumpstopBBPP__ctor"></a> BumpstopBBPP\(\)

```csharp
public BumpstopBBPP()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Car_Force_BumpstopBBPP_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Car_Force_BumpstopBBPP_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

