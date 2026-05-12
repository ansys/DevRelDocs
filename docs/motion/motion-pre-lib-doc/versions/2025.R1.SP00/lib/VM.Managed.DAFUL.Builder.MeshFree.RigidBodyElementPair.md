#  Class RigidBodyElementPair

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class RigidBodyElementPair : BuilderNamed<RigidBodyElementPair>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RigidBodyElementPair\> ← 
BuilderSymmetric<RigidBodyElementPair\> ← 
BuilderNamed<RigidBodyElementPair\> ← 
[RigidBodyElementPair](VM.Managed.DAFUL.Builder.MeshFree.RigidBodyElementPair.md)

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

### <a id="VM_Managed_DAFUL_Builder_MeshFree_RigidBodyElementPair__ctor"></a> RigidBodyElementPair\(\)

```csharp
public RigidBodyElementPair()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_MeshFree_RigidBodyElementPair_ActionGeometry"></a> ActionGeometry

```csharp
public IGeometricalComponent ActionGeometry { get; }
```

#### Property Value

 IGeometricalComponent

### <a id="VM_Managed_DAFUL_Builder_MeshFree_RigidBodyElementPair_BaseGeometry"></a> BaseGeometry

```csharp
public IGeometricalComponent BaseGeometry { get; }
```

#### Property Value

 IGeometricalComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_MeshFree_RigidBodyElementPair_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

