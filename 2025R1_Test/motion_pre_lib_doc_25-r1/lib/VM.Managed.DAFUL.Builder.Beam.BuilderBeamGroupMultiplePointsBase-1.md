#  Class BuilderBeamGroupMultiplePointsBase<T\>

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

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1__ctor"></a> BuilderBeamGroupMultiplePointsBase\(\)

```csharp
public BuilderBeamGroupMultiplePointsBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_BeamCrossSection"></a> BeamCrossSection

```csharp
public BeamSectionInfo[] BeamCrossSection { get; set; }
```

#### Property Value

 [BeamSectionInfo](VM.Managed.DAFUL.Builder.Beam.BeamSectionInfo.md)\[\]

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_BeamGroupInfo"></a> BeamGroupInfo

```csharp
public BeamInfo[] BeamGroupInfo { get; set; }
```

#### Property Value

 [BeamInfo](VM.Managed.DAFUL.Builder.Beam.BeamInfo.md)\[\]

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_Color"></a> Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_MaterialProperty"></a> MaterialProperty

```csharp
public string MaterialProperty { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_NoOfElements"></a> NoOfElements

```csharp
public int NoOfElements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_ResultBeamGroup"></a> ResultBeamGroup

```csharp
public BeamGroup ResultBeamGroup { get; set; }
```

#### Property Value

 BeamGroup

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_ResultSolidBodies"></a> ResultSolidBodies

```csharp
public List<SolidBody> ResultSolidBodies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SolidBody\>

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_UseCustomize"></a> UseCustomize

```csharp
public bool UseCustomize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_m_bldrBeamInfoAry"></a> m\_bldrBeamInfoAry

```csharp
protected BuilderBeamGroupInfo[] m_bldrBeamInfoAry { get; set; }
```

#### Property Value

 [BuilderBeamGroupInfo](VM.Managed.DAFUL.Builder.Beam.BuilderBeamGroupInfo.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_GetBeamGroupBodyName_VM_Managed_Document_System_String_System_Int32_"></a> GetBeamGroupBodyName\(Document, string, int\)

```csharp
protected virtual string GetBeamGroupBodyName(Document document, string beamGroupName, int index)
```

#### Parameters

`document` Document

`beamGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_SetInputResultData"></a> SetInputResultData\(\)

```csharp
protected virtual bool SetInputResultData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

