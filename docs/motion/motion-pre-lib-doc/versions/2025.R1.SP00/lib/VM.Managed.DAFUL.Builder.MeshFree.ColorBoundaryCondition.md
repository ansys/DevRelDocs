#  Class ColorBoundaryCondition

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class ColorBoundaryCondition : BuilderNamed<BoundaryCondition>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BoundaryCondition\> ← 
BuilderSymmetric<BoundaryCondition\> ← 
BuilderNamed<BoundaryCondition\> ← 
[ColorBoundaryCondition](VM.Managed.DAFUL.Builder.MeshFree.ColorBoundaryCondition.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<BoundaryCondition\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BoundaryCondition\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BoundaryCondition\>.Name, 
BuilderSymmetric<BoundaryCondition\>.Build\(Document\), 
BuilderSymmetric<BoundaryCondition\>.Symmetric, 
BuilderSymmetric<BoundaryCondition\>.CurrentSymmetric, 
BuilderBase<BoundaryCondition\>.m\_bSuccess, 
BuilderBase<BoundaryCondition\>.Build\(Document\), 
BuilderBase<BoundaryCondition\>.Build\(Document, List<string\>\), 
BuilderBase<BoundaryCondition\>.Validate\(IList<string\>\), 
BuilderBase<BoundaryCondition\>.Success\(\), 
BuilderBase<BoundaryCondition\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BoundaryCondition\>.OnFinalBuild\(string, Document\), 
BuilderBase<BoundaryCondition\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BoundaryCondition\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BoundaryCondition\>.Parameters, 
BuilderBase<BoundaryCondition\>.AddToDoc, 
BuilderBase<BoundaryCondition\>.UseChangedObject, 
BuilderBase<BoundaryCondition\>.SetPointKey, 
BuilderBase<BoundaryCondition\>.BuildObject, 
BuilderBase<BoundaryCondition\>.BuildDocument, 
BuilderBase<BoundaryCondition\>.UseInterface, 
BuilderBase<BoundaryCondition\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorBoundaryCondition__ctor"></a> ColorBoundaryCondition\(\)

```csharp
public ColorBoundaryCondition()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorBoundaryCondition_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorBoundaryCondition_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorBoundaryCondition_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorBoundaryCondition_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorBoundaryCondition_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

