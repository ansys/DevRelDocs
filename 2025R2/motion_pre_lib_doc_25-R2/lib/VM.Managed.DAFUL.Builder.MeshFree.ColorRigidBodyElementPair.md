# Class ColorRigidBodyElementPair

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

### ColorRigidBodyElementPair\(\)

```csharp
public ColorRigidBodyElementPair()
```

## Properties

### ColorArray

```csharp
public string[] ColorArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### ColorArray2

```csharp
public string[] ColorArray2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### Connectable2

```csharp
public ObjectBase Connectable2 { get; }
```

#### Property Value

 ObjectBase

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

### Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


