# Class Range

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class Range : BuilderNamed<Range>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Range\> ← 
BuilderSymmetric<Range\> ← 
BuilderNamed<Range\> ← 
[Range](VM.Managed.DAFUL.Builder.MeshFree.Range.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Range\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Range\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Range\>.Name, 
BuilderSymmetric<Range\>.Build\(Document\), 
BuilderSymmetric<Range\>.Symmetric, 
BuilderSymmetric<Range\>.CurrentSymmetric, 
BuilderBase<Range\>.m\_bSuccess, 
BuilderBase<Range\>.Build\(Document\), 
BuilderBase<Range\>.Build\(Document, List<string\>\), 
BuilderBase<Range\>.Validate\(IList<string\>\), 
BuilderBase<Range\>.Success\(\), 
BuilderBase<Range\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Range\>.OnFinalBuild\(string, Document\), 
BuilderBase<Range\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Range\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Range\>.Parameters, 
BuilderBase<Range\>.AddToDoc, 
BuilderBase<Range\>.UseChangedObject, 
BuilderBase<Range\>.SetPointKey, 
BuilderBase<Range\>.BuildObject, 
BuilderBase<Range\>.BuildDocument, 
BuilderBase<Range\>.UseInterface, 
BuilderBase<Range\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Range\(\)

```csharp
public Range()
```

## Properties

### AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Connectable

```csharp
public ObjectBase Connectable { get; }
```

#### Property Value

 ObjectBase

### Radius

```csharp
public Variable Radius { get; set; }
```

#### Property Value

 Variable

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


