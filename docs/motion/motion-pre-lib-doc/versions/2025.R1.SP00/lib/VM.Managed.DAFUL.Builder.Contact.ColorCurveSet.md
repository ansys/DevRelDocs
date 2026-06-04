#  Class ColorCurveSet

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class ColorCurveSet : BuilderNamed<SetCurveForEdges>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SetCurveForEdges\> ← 
BuilderSymmetric<SetCurveForEdges\> ← 
BuilderNamed<SetCurveForEdges\> ← 
[ColorCurveSet](VM.Managed.DAFUL.Builder.Contact.ColorCurveSet.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SetCurveForEdges\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SetCurveForEdges\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SetCurveForEdges\>.Name, 
BuilderSymmetric<SetCurveForEdges\>.Build\(Document\), 
BuilderSymmetric<SetCurveForEdges\>.Symmetric, 
BuilderSymmetric<SetCurveForEdges\>.CurrentSymmetric, 
BuilderBase<SetCurveForEdges\>.m\_bSuccess, 
BuilderBase<SetCurveForEdges\>.Build\(Document\), 
BuilderBase<SetCurveForEdges\>.Build\(Document, List<string\>\), 
BuilderBase<SetCurveForEdges\>.Validate\(IList<string\>\), 
BuilderBase<SetCurveForEdges\>.Success\(\), 
BuilderBase<SetCurveForEdges\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SetCurveForEdges\>.OnFinalBuild\(string, Document\), 
BuilderBase<SetCurveForEdges\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SetCurveForEdges\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SetCurveForEdges\>.Parameters, 
BuilderBase<SetCurveForEdges\>.AddToDoc, 
BuilderBase<SetCurveForEdges\>.UseChangedObject, 
BuilderBase<SetCurveForEdges\>.SetPointKey, 
BuilderBase<SetCurveForEdges\>.BuildObject, 
BuilderBase<SetCurveForEdges\>.BuildDocument, 
BuilderBase<SetCurveForEdges\>.UseInterface, 
BuilderBase<SetCurveForEdges\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_ColorCurveSet__ctor"></a> ColorCurveSet\(\)

```csharp
public ColorCurveSet()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_ColorCurveSet_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Contact_ColorCurveSet_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_ColorCurveSet_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_ColorCurveSet_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

