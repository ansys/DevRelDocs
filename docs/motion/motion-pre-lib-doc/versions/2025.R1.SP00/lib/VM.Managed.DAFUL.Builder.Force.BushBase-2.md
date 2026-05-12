#  Class BushBase<TSetDirection, TSetOrientation\>

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFB.dll  

```csharp
public class BushBase<TSetDirection, TSetOrientation> : Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation>, IBuilder where TSetDirection : IConnectorDirection, new() where TSetOrientation : IConnectorOrientation, new()
```

#### Type Parameters

`TSetDirection` 

`TSetOrientation` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Bush\> ← 
BuilderSymmetric<Bush\> ← 
BuilderNamed<Bush\> ← 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\> ← 
[BushBase<TSetDirection, TSetOrientation\>](VM.Managed.DAFUL.Builder.Force.BushBase\-2.md)

#### Implements

IBuilder

#### Inherited Members

Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.HookBeforeReplace\(Property\), 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.BaseConnectable, 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.ActionConnectable, 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.AddToDoc, 
Connector<Bush, PropertyBush, OnePointPosition, TSetDirection, TSetOrientation\>.BuildObject, 
BuilderNamed<Bush\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Bush\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Bush\>.Name, 
BuilderSymmetric<Bush\>.Build\(Document\), 
BuilderSymmetric<Bush\>.Symmetric, 
BuilderSymmetric<Bush\>.CurrentSymmetric, 
BuilderBase<Bush\>.m\_bSuccess, 
BuilderBase<Bush\>.Build\(Document\), 
BuilderBase<Bush\>.Build\(Document, List<string\>\), 
BuilderBase<Bush\>.Validate\(IList<string\>\), 
BuilderBase<Bush\>.Success\(\), 
BuilderBase<Bush\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Bush\>.OnFinalBuild\(string, Document\), 
BuilderBase<Bush\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Bush\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Bush\>.Parameters, 
BuilderBase<Bush\>.AddToDoc, 
BuilderBase<Bush\>.UseChangedObject, 
BuilderBase<Bush\>.SetPointKey, 
BuilderBase<Bush\>.BuildObject, 
BuilderBase<Bush\>.BuildDocument, 
BuilderBase<Bush\>.UseInterface, 
BuilderBase<Bush\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_BushBase_2__ctor"></a> BushBase\(\)

```csharp
public BushBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Force_BushBase_2_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_BushBase_2_HookBeforeReplace_VM_Managed_Property_"></a> HookBeforeReplace\(Property\)

```csharp
protected override void HookBeforeReplace(Property propertyOriginal)
```

#### Parameters

`propertyOriginal` Property

### <a id="VM_Managed_DAFUL_Builder_Force_BushBase_2_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

