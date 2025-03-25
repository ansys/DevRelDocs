# <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementSingle"></a> Class ColorRigidBodyElementSingle

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class ColorRigidBodyElementSingle : BuilderNamed<RigidBodyElementSingle>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RigidBodyElementSingle\> ← 
BuilderSymmetric<RigidBodyElementSingle\> ← 
BuilderNamed<RigidBodyElementSingle\> ← 
[ColorRigidBodyElementSingle](VM.Managed.DAFUL.Builder.MeshFree.ColorRigidBodyElementSingle.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<RigidBodyElementSingle\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<RigidBodyElementSingle\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<RigidBodyElementSingle\>.Name, 
BuilderSymmetric<RigidBodyElementSingle\>.Build\(Document\), 
BuilderSymmetric<RigidBodyElementSingle\>.Symmetric, 
BuilderSymmetric<RigidBodyElementSingle\>.CurrentSymmetric, 
BuilderBase<RigidBodyElementSingle\>.m\_bSuccess, 
BuilderBase<RigidBodyElementSingle\>.Build\(Document\), 
BuilderBase<RigidBodyElementSingle\>.Build\(Document, List<string\>\), 
BuilderBase<RigidBodyElementSingle\>.Validate\(IList<string\>\), 
BuilderBase<RigidBodyElementSingle\>.Success\(\), 
BuilderBase<RigidBodyElementSingle\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<RigidBodyElementSingle\>.OnFinalBuild\(string, Document\), 
BuilderBase<RigidBodyElementSingle\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<RigidBodyElementSingle\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<RigidBodyElementSingle\>.Parameters, 
BuilderBase<RigidBodyElementSingle\>.AddToDoc, 
BuilderBase<RigidBodyElementSingle\>.UseChangedObject, 
BuilderBase<RigidBodyElementSingle\>.SetPointKey, 
BuilderBase<RigidBodyElementSingle\>.BuildObject, 
BuilderBase<RigidBodyElementSingle\>.BuildDocument, 
BuilderBase<RigidBodyElementSingle\>.UseInterface, 
BuilderBase<RigidBodyElementSingle\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementSingle__ctor"></a> ColorRigidBodyElementSingle\(\)

```csharp
public ColorRigidBodyElementSingle()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementSingle_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementSingle_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementSingle_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementSingle_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

