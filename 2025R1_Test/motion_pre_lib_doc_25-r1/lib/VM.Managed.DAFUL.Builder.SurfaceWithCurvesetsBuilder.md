#  Class SurfaceWithCurvesetsBuilder

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

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder__ctor"></a> SurfaceWithCurvesetsBuilder\(\)

```csharp
public SurfaceWithCurvesetsBuilder()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_CuttingPlaneRadius"></a> CuttingPlaneRadius

```csharp
public Variable CuttingPlaneRadius { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_EndCurveset"></a> EndCurveset

```csharp
public SetCurveForEdges EndCurveset { get; }
```

#### Property Value

 SetCurveForEdges

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_Faceset"></a> Faceset

```csharp
public SetFace Faceset { get; }
```

#### Property Value

 SetFace

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_NumberOfSlice"></a> NumberOfSlice

```csharp
public Variable NumberOfSlice { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_Path"></a> Path

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_StartCurveset"></a> StartCurveset

```csharp
public SetCurveForEdges StartCurveset { get; }
```

#### Property Value

 SetCurveForEdges

## Methods

### <a id="VM_Managed_DAFUL_Builder_SurfaceWithCurvesetsBuilder_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase created, Document doc)
```

#### Parameters

`created` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

