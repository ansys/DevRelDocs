# Class BuilderBeamGroupMultiplePointsBase<T\>

Namespace: [VM.Managed.DAFUL.Builder.Beam](VM.Managed.DAFUL.Builder.Beam.md)  
Assembly: VMBldBeamGroup.dll  

```csharp
public abstract class BuilderBeamGroupMultiplePointsBase<T> : BuilderNamed<T>, IBuilder where T : BeamGroup, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
BuilderNamed<T\> ← 
[BuilderBeamGroupMultiplePointsBase<T\>](VM.Managed.DAFUL.Builder.Beam.BuilderBeamGroupMultiplePointsBase\-1.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<T\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<T\>.Name, 
BuilderSymmetric<T\>.Build\(Document\), 
BuilderSymmetric<T\>.Symmetric, 
BuilderSymmetric<T\>.CurrentSymmetric, 
BuilderBase<T\>.m\_bSuccess, 
BuilderBase<T\>.Build\(Document\), 
BuilderBase<T\>.Build\(Document, List<string\>\), 
BuilderBase<T\>.Validate\(IList<string\>\), 
BuilderBase<T\>.Success\(\), 
BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<T\>.OnFinalBuild\(string, Document\), 
BuilderBase<T\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<T\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<T\>.Parameters, 
BuilderBase<T\>.AddToDoc, 
BuilderBase<T\>.UseChangedObject, 
BuilderBase<T\>.SetPointKey, 
BuilderBase<T\>.BuildObject, 
BuilderBase<T\>.BuildDocument, 
BuilderBase<T\>.UseInterface, 
BuilderBase<T\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BuilderBeamGroupMultiplePointsBase\(\)

```csharp
public BuilderBeamGroupMultiplePointsBase()
```

## Properties

### AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BeamCrossSection

```csharp
public BeamSectionInfo[] BeamCrossSection { get; set; }
```

#### Property Value

 [BeamSectionInfo](VM.Managed.DAFUL.Builder.Beam.BeamSectionInfo.md)\[\]

### BeamGroupInfo

```csharp
public BeamInfo[] BeamGroupInfo { get; set; }
```

#### Property Value

 [BeamInfo](VM.Managed.DAFUL.Builder.Beam.BeamInfo.md)\[\]

### Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialProperty

```csharp
public string MaterialProperty { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NoOfElements

```csharp
public int NoOfElements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ResultBeamGroup

```csharp
public BeamGroup ResultBeamGroup { get; set; }
```

#### Property Value

 BeamGroup

### ResultSolidBodies

```csharp
public List<SolidBody> ResultSolidBodies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SolidBody\>

### UseCustomize

```csharp
public bool UseCustomize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bldrBeamInfoAry

```csharp
protected BuilderBeamGroupInfo[] m_bldrBeamInfoAry { get; set; }
```

#### Property Value

 [BuilderBeamGroupInfo](VM.Managed.DAFUL.Builder.Beam.BuilderBeamGroupInfo.md)\[\]

## Methods

### GetBeamGroupBodyName\(Document, string, int\)

```csharp
protected virtual string GetBeamGroupBodyName(Document document, string beamGroupName, int index)
```

#### Parameters

`document` Document

`beamGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetInputResultData\(\)

```csharp
protected virtual bool SetInputResultData()
```

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


