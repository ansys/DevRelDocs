#  Class ColorTiePart

Namespace: [VM.Managed.DAFUL.Builder.MeshFree.Contact](VM.Managed.DAFUL.Builder.MeshFree.Contact.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class ColorTiePart : BuilderNamed<Tie>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Tie\> ← 
BuilderSymmetric<Tie\> ← 
BuilderNamed<Tie\> ← 
[ColorTiePart](VM.Managed.DAFUL.Builder.MeshFree.Contact.ColorTiePart.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Tie\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Tie\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Tie\>.Name, 
BuilderSymmetric<Tie\>.Build\(Document\), 
BuilderSymmetric<Tie\>.Symmetric, 
BuilderSymmetric<Tie\>.CurrentSymmetric, 
BuilderBase<Tie\>.m\_bSuccess, 
BuilderBase<Tie\>.Build\(Document\), 
BuilderBase<Tie\>.Build\(Document, List<string\>\), 
BuilderBase<Tie\>.Validate\(IList<string\>\), 
BuilderBase<Tie\>.Success\(\), 
BuilderBase<Tie\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Tie\>.OnFinalBuild\(string, Document\), 
BuilderBase<Tie\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Tie\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Tie\>.Parameters, 
BuilderBase<Tie\>.AddToDoc, 
BuilderBase<Tie\>.UseChangedObject, 
BuilderBase<Tie\>.SetPointKey, 
BuilderBase<Tie\>.BuildObject, 
BuilderBase<Tie\>.BuildDocument, 
BuilderBase<Tie\>.UseInterface, 
BuilderBase<Tie\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart__ctor"></a> ColorTiePart\(\)

```csharp
public ColorTiePart()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart_ColorArray2"></a> ColorArray2

```csharp
public string[] ColorArray2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart_Connectable2"></a> Connectable2

```csharp
public ObjectBase Connectable2 { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Contact_ColorTiePart_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

