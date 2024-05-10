# Class LeafBeamGroupBuilder

Namespace: [VM.Builders.Pre.Force](VM.Builders.Pre.Force.md)  
Assembly: VM.Operations.Pre.Force.dll  

```csharp
public class LeafBeamGroupBuilder : BuilderBeamGroupMultiplePoints, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BeamGroup\> ← 
BuilderSymmetric<BeamGroup\> ← 
BuilderNamed<BeamGroup\> ← 
BuilderBeamGroupMultiplePointsBase<BeamGroup\> ← 
BuilderBeamGroupMultiplePoints ← 
[LeafBeamGroupBuilder](VM.Builders.Pre.Force.LeafBeamGroupBuilder.md)

#### Implements

IBuilder

#### Inherited Members

BuilderBeamGroupMultiplePointsBase<BeamGroup\>.Validate\(IList<string\>\), 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.GetBeamGroupBodyName\(Document, string, int\), 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.SetInputResultData\(\), 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.BeamGroupInfo, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.BeamCrossSection, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.NoOfElements, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.MaterialProperty, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.Color, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.AddToDoc, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.m\_bldrBeamInfoAry, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.UseCustomize, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.ResultBeamGroup, 
BuilderBeamGroupMultiplePointsBase<BeamGroup\>.ResultSolidBodies, 
BuilderNamed<BeamGroup\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BeamGroup\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BeamGroup\>.Name, 
BuilderSymmetric<BeamGroup\>.Build\(Document\), 
BuilderSymmetric<BeamGroup\>.Symmetric, 
BuilderSymmetric<BeamGroup\>.CurrentSymmetric, 
BuilderBase<BeamGroup\>.m\_bSuccess, 
BuilderBase<BeamGroup\>.Build\(Document\), 
BuilderBase<BeamGroup\>.Build\(Document, List<string\>\), 
BuilderBase<BeamGroup\>.Validate\(IList<string\>\), 
BuilderBase<BeamGroup\>.Success\(\), 
BuilderBase<BeamGroup\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BeamGroup\>.OnFinalBuild\(string, Document\), 
BuilderBase<BeamGroup\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BeamGroup\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BeamGroup\>.Parameters, 
BuilderBase<BeamGroup\>.AddToDoc, 
BuilderBase<BeamGroup\>.UseChangedObject, 
BuilderBase<BeamGroup\>.SetPointKey, 
BuilderBase<BeamGroup\>.BuildObject, 
BuilderBase<BeamGroup\>.BuildDocument, 
BuilderBase<BeamGroup\>.UseInterface, 
BuilderBase<BeamGroup\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### LeafBeamGroupBuilder\(Leaf, LeafInfo, Vector\[\], TMatrix, bool\)

```csharp
public LeafBeamGroupBuilder(Leaf leaf, LeafInfo leafInfo, Vector[] positions = null, TMatrix repositionMatrix = default, bool useCustomize = false)
```

#### Parameters

`leaf` Leaf

`leafInfo` LeafInfo

`positions` Vector\[\]

`repositionMatrix` TMatrix

`useCustomize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Leaf

```csharp
public Leaf Leaf { get; }
```

#### Property Value

 Leaf

### LeafInfo

```csharp
public LeafInfo LeafInfo { get; }
```

#### Property Value

 LeafInfo

### Positions

```csharp
public Vector[] Positions { get; }
```

#### Property Value

 Vector\[\]

### RepositionMatrix

```csharp
public TMatrix RepositionMatrix { get; }
```

#### Property Value

 TMatrix

## Methods

### GetBeamGroupBodyName\(Document, string, int\)

```csharp
protected override string GetBeamGroupBodyName(Document document, string beamGroupName, int index)
```

#### Parameters

`document` Document

`beamGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetInputResultData\(\)

```csharp
protected override bool SetInputResultData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


