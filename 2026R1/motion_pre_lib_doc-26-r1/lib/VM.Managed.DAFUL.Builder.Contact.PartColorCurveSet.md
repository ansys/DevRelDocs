#  Class PartColorCurveSet

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class PartColorCurveSet : BuilderNamed<PartSetCurveForEdges>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<PartSetCurveForEdges\> ← 
BuilderSymmetric<PartSetCurveForEdges\> ← 
BuilderNamed<PartSetCurveForEdges\> ← 
[PartColorCurveSet](VM.Managed.DAFUL.Builder.Contact.PartColorCurveSet.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<PartSetCurveForEdges\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<PartSetCurveForEdges\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<PartSetCurveForEdges\>.Name, 
BuilderSymmetric<PartSetCurveForEdges\>.Build\(Document\), 
BuilderSymmetric<PartSetCurveForEdges\>.Symmetric, 
BuilderSymmetric<PartSetCurveForEdges\>.CurrentSymmetric, 
BuilderBase<PartSetCurveForEdges\>.m\_bSuccess, 
BuilderBase<PartSetCurveForEdges\>.Build\(Document\), 
BuilderBase<PartSetCurveForEdges\>.Build\(Document, List<string\>\), 
BuilderBase<PartSetCurveForEdges\>.Validate\(IList<string\>\), 
BuilderBase<PartSetCurveForEdges\>.Success\(\), 
BuilderBase<PartSetCurveForEdges\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<PartSetCurveForEdges\>.OnFinalBuild\(string, Document\), 
BuilderBase<PartSetCurveForEdges\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<PartSetCurveForEdges\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<PartSetCurveForEdges\>.Parameters, 
BuilderBase<PartSetCurveForEdges\>.AddToDoc, 
BuilderBase<PartSetCurveForEdges\>.UseChangedObject, 
BuilderBase<PartSetCurveForEdges\>.SetPointKey, 
BuilderBase<PartSetCurveForEdges\>.BuildObject, 
BuilderBase<PartSetCurveForEdges\>.BuildDocument, 
BuilderBase<PartSetCurveForEdges\>.UseInterface, 
BuilderBase<PartSetCurveForEdges\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorCurveSet__ctor"></a> PartColorCurveSet\(\)

```csharp
public PartColorCurveSet()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorCurveSet_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorCurveSet_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorCurveSet_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_PartColorCurveSet_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

