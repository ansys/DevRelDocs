#  Class SpringBBPP

Namespace: [VM.Managed.DAFUL.Builder.Car.Force](VM.Managed.DAFUL.Builder.Car.Force.md)  
Assembly: VMBldCar.dll  

```csharp
public class SpringBBPP : Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Spring\> ← 
BuilderSymmetric<Spring\> ← 
BuilderNamed<Spring\> ← 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\> ← 
[SpringBBPP](VM.Managed.DAFUL.Builder.Car.Force.SpringBBPP.md)

#### Implements

IBuilder

#### Inherited Members

Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable, 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable, 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc, 
Connector<Spring, PropertySpring, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<Spring\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Spring\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Spring\>.Name, 
BuilderSymmetric<Spring\>.Build\(Document\), 
BuilderSymmetric<Spring\>.Symmetric, 
BuilderSymmetric<Spring\>.CurrentSymmetric, 
BuilderBase<Spring\>.m\_bSuccess, 
BuilderBase<Spring\>.Build\(Document\), 
BuilderBase<Spring\>.Build\(Document, List<string\>\), 
BuilderBase<Spring\>.Validate\(IList<string\>\), 
BuilderBase<Spring\>.Success\(\), 
BuilderBase<Spring\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Spring\>.OnFinalBuild\(string, Document\), 
BuilderBase<Spring\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Spring\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Spring\>.Parameters, 
BuilderBase<Spring\>.AddToDoc, 
BuilderBase<Spring\>.UseChangedObject, 
BuilderBase<Spring\>.SetPointKey, 
BuilderBase<Spring\>.BuildObject, 
BuilderBase<Spring\>.BuildDocument, 
BuilderBase<Spring\>.UseInterface, 
BuilderBase<Spring\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Car_Force_SpringBBPP__ctor"></a> SpringBBPP\(\)

```csharp
public SpringBBPP()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Car_Force_SpringBBPP_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Car_Force_SpringBBPP_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

