#  Class LeafBeamGroupBuilder

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

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder__ctor_VM_Models_Pre_Force_Leaf_VM_Models_Pre_Force_LeafInfo_VM_Vector___VM_TMatrix_System_Boolean_"></a> LeafBeamGroupBuilder\(Leaf, LeafInfo, Vector\[\], TMatrix, bool\)

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

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder_Leaf"></a> Leaf

```csharp
public Leaf Leaf { get; }
```

#### Property Value

 Leaf

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder_LeafInfo"></a> LeafInfo

```csharp
public LeafInfo LeafInfo { get; }
```

#### Property Value

 LeafInfo

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder_Positions"></a> Positions

```csharp
public Vector[] Positions { get; }
```

#### Property Value

 Vector\[\]

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder_RepositionMatrix"></a> RepositionMatrix

```csharp
public TMatrix RepositionMatrix { get; }
```

#### Property Value

 TMatrix

## Methods

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder_GetBeamGroupBodyName_VM_Managed_Document_System_String_System_Int32_"></a> GetBeamGroupBodyName\(Document, string, int\)

```csharp
protected override string GetBeamGroupBodyName(Document document, string beamGroupName, int index)
```

#### Parameters

`document` Document

`beamGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Builders_Pre_Force_LeafBeamGroupBuilder_SetInputResultData"></a> SetInputResultData\(\)

```csharp
protected override bool SetInputResultData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

