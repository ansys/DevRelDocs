# Class SurfaceWithCurvesetsBuilder

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBldBallPlacing.dll  

```csharp
public class SurfaceWithCurvesetsBuilder : BuilderNamed<SurfaceWithCurvesets>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SurfaceWithCurvesets\> ← 
BuilderSymmetric<SurfaceWithCurvesets\> ← 
BuilderNamed<SurfaceWithCurvesets\> ← 
[SurfaceWithCurvesetsBuilder](VM.Managed.DAFUL.Builder.SurfaceWithCurvesetsBuilder.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SurfaceWithCurvesets\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SurfaceWithCurvesets\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SurfaceWithCurvesets\>.Name, 
BuilderSymmetric<SurfaceWithCurvesets\>.Build\(Document\), 
BuilderSymmetric<SurfaceWithCurvesets\>.Symmetric, 
BuilderSymmetric<SurfaceWithCurvesets\>.CurrentSymmetric, 
BuilderBase<SurfaceWithCurvesets\>.m\_bSuccess, 
BuilderBase<SurfaceWithCurvesets\>.Build\(Document\), 
BuilderBase<SurfaceWithCurvesets\>.Build\(Document, List<string\>\), 
BuilderBase<SurfaceWithCurvesets\>.Validate\(IList<string\>\), 
BuilderBase<SurfaceWithCurvesets\>.Success\(\), 
BuilderBase<SurfaceWithCurvesets\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SurfaceWithCurvesets\>.OnFinalBuild\(string, Document\), 
BuilderBase<SurfaceWithCurvesets\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SurfaceWithCurvesets\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SurfaceWithCurvesets\>.Parameters, 
BuilderBase<SurfaceWithCurvesets\>.AddToDoc, 
BuilderBase<SurfaceWithCurvesets\>.UseChangedObject, 
BuilderBase<SurfaceWithCurvesets\>.SetPointKey, 
BuilderBase<SurfaceWithCurvesets\>.BuildObject, 
BuilderBase<SurfaceWithCurvesets\>.BuildDocument, 
BuilderBase<SurfaceWithCurvesets\>.UseInterface, 
BuilderBase<SurfaceWithCurvesets\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SurfaceWithCurvesetsBuilder\(\)

```csharp
public SurfaceWithCurvesetsBuilder()
```

## Properties

### CuttingPlaneRadius

```csharp
public Variable CuttingPlaneRadius { get; set; }
```

#### Property Value

 Variable

### EndCurveset

```csharp
public SetCurveForEdges EndCurveset { get; }
```

#### Property Value

 SetCurveForEdges

### Faceset

```csharp
public SetFace Faceset { get; }
```

#### Property Value

 SetFace

### NumberOfSlice

```csharp
public Variable NumberOfSlice { get; set; }
```

#### Property Value

 Variable

### Path

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StartCurveset

```csharp
public SetCurveForEdges StartCurveset { get; }
```

#### Property Value

 SetCurveForEdges

## Methods

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase created, Document doc)
```

#### Parameters

`created` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


