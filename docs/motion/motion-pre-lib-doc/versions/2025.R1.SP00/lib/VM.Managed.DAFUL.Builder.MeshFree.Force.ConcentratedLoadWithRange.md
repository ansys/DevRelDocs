#  Class ConcentratedLoadWithRange

Namespace: [VM.Managed.DAFUL.Builder.MeshFree.Force](VM.Managed.DAFUL.Builder.MeshFree.Force.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class ConcentratedLoadWithRange : BuilderNamed<ConcentratedLoad>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ConcentratedLoad\> ← 
BuilderSymmetric<ConcentratedLoad\> ← 
BuilderNamed<ConcentratedLoad\> ← 
[ConcentratedLoadWithRange](VM.Managed.DAFUL.Builder.MeshFree.Force.ConcentratedLoadWithRange.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ConcentratedLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ConcentratedLoad\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ConcentratedLoad\>.Name, 
BuilderSymmetric<ConcentratedLoad\>.Build\(Document\), 
BuilderSymmetric<ConcentratedLoad\>.Symmetric, 
BuilderSymmetric<ConcentratedLoad\>.CurrentSymmetric, 
BuilderBase<ConcentratedLoad\>.m\_bSuccess, 
BuilderBase<ConcentratedLoad\>.Build\(Document\), 
BuilderBase<ConcentratedLoad\>.Build\(Document, List<string\>\), 
BuilderBase<ConcentratedLoad\>.Validate\(IList<string\>\), 
BuilderBase<ConcentratedLoad\>.Success\(\), 
BuilderBase<ConcentratedLoad\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ConcentratedLoad\>.OnFinalBuild\(string, Document\), 
BuilderBase<ConcentratedLoad\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ConcentratedLoad\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ConcentratedLoad\>.Parameters, 
BuilderBase<ConcentratedLoad\>.AddToDoc, 
BuilderBase<ConcentratedLoad\>.UseChangedObject, 
BuilderBase<ConcentratedLoad\>.SetPointKey, 
BuilderBase<ConcentratedLoad\>.BuildObject, 
BuilderBase<ConcentratedLoad\>.BuildDocument, 
BuilderBase<ConcentratedLoad\>.UseInterface, 
BuilderBase<ConcentratedLoad\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Force_ConcentratedLoadWithRange__ctor"></a> ConcentratedLoadWithRange\(\)

```csharp
public ConcentratedLoadWithRange()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Force_ConcentratedLoadWithRange_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Force_ConcentratedLoadWithRange_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Force_ConcentratedLoadWithRange_Radius"></a> Radius

```csharp
public Variable Radius { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Force_ConcentratedLoadWithRange_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_MeshFree_Force_ConcentratedLoadWithRange_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

