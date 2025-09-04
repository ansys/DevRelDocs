#  Class ColorRigidBodyElementPair

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class ColorRigidBodyElementPair : BuilderNamed<RigidBodyElementPair>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RigidBodyElementPair\> ← 
BuilderSymmetric<RigidBodyElementPair\> ← 
BuilderNamed<RigidBodyElementPair\> ← 
[ColorRigidBodyElementPair](VM.Managed.DAFUL.Builder.MeshFree.ColorRigidBodyElementPair.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<RigidBodyElementPair\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<RigidBodyElementPair\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<RigidBodyElementPair\>.Name, 
BuilderSymmetric<RigidBodyElementPair\>.Build\(Document\), 
BuilderSymmetric<RigidBodyElementPair\>.Symmetric, 
BuilderSymmetric<RigidBodyElementPair\>.CurrentSymmetric, 
BuilderBase<RigidBodyElementPair\>.m\_bSuccess, 
BuilderBase<RigidBodyElementPair\>.Build\(Document\), 
BuilderBase<RigidBodyElementPair\>.Build\(Document, List<string\>\), 
BuilderBase<RigidBodyElementPair\>.Validate\(IList<string\>\), 
BuilderBase<RigidBodyElementPair\>.Success\(\), 
BuilderBase<RigidBodyElementPair\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<RigidBodyElementPair\>.OnFinalBuild\(string, Document\), 
BuilderBase<RigidBodyElementPair\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<RigidBodyElementPair\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<RigidBodyElementPair\>.Parameters, 
BuilderBase<RigidBodyElementPair\>.AddToDoc, 
BuilderBase<RigidBodyElementPair\>.UseChangedObject, 
BuilderBase<RigidBodyElementPair\>.SetPointKey, 
BuilderBase<RigidBodyElementPair\>.BuildObject, 
BuilderBase<RigidBodyElementPair\>.BuildDocument, 
BuilderBase<RigidBodyElementPair\>.UseInterface, 
BuilderBase<RigidBodyElementPair\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair__ctor"></a> ColorRigidBodyElementPair\(\)

```csharp
public ColorRigidBodyElementPair()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair_ColorArray"></a> ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair_ColorArray2"></a> ColorArray2

```csharp
public string[] ColorArray2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair_Connectable"></a> Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair_Connectable2"></a> Connectable2

```csharp
public ObjectBase Connectable2 { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_MeshFree_ColorRigidBodyElementPair_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

