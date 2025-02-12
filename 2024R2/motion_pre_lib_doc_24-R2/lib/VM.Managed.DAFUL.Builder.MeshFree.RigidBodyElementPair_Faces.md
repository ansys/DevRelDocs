# Class RigidBodyElementPair\_Faces

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class RigidBodyElementPair_Faces : BuilderNamed<RigidBodyElementPair>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RigidBodyElementPair\> ← 
BuilderSymmetric<RigidBodyElementPair\> ← 
BuilderNamed<RigidBodyElementPair\> ← 
[RigidBodyElementPair\_Faces](VM.Managed.DAFUL.Builder.MeshFree.RigidBodyElementPair\_Faces.md)

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

### RigidBodyElementPair\_Faces\(\)

```csharp
public RigidBodyElementPair_Faces()
```

## Properties

### ActionGeometry

```csharp
public PickedFace ActionGeometry { get; set; }
```

#### Property Value

 PickedFace

### BaseGeometry

```csharp
public PickedFace BaseGeometry { get; set; }
```

#### Property Value

 PickedFace

## Methods

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


