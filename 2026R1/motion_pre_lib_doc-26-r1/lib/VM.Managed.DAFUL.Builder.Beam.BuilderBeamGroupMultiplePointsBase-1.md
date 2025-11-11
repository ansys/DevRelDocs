# Class BuilderBeamGroupMultiplePointsBase<T\>
<a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1"></a>

Namespace: [VM.Managed.DAFUL.Builder.Beam](VM.Managed.DAFUL.Builder.Beam.md)  
Assembly: VMBldBeamGroup.dll  

```csharp
public abstract class BuilderBeamGroupMultiplePointsBase<T> : BuilderNamed<T>, IBuilder where T : BeamGroup, new()
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
[BuilderBase<T\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderSymmetric<T\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs) ← 
[BuilderNamed<T\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs) ← 
[BuilderBeamGroupMultiplePointsBase<T\>](VM.Managed.DAFUL.Builder.Beam.BuilderBeamGroupMultiplePointsBase\-1.md)

#### Implements

IBuilder

#### Inherited Members

[BuilderNamed<T\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<T\>.CheckUnit\(Document3D, Document3D, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderNamed<T\>.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderNamed.cs), 
[BuilderSymmetric<T\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<T\>.Symmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderSymmetric<T\>.CurrentSymmetric](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.m\_bSuccess](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.Build\(Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.Build\(Document, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.Validate\(IList<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.Success\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.OnFinalBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.OnObjectChangeBuild\(string, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.OnPostAddDoc\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.Parameters](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.AddToDoc](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.UseChangedObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.SetPointKey](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.BuildObject](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.BuildDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.UseInterface](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs), 
[BuilderBase<T\>.ErrorMessage](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Builders/VMBld/BuilderBase.cs)

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

 bool

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

 string

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_MaterialProperty"></a> MaterialProperty

```csharp
public string MaterialProperty { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_NoOfElements"></a> NoOfElements

```csharp
public int NoOfElements { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_ResultBeamGroup"></a> ResultBeamGroup

```csharp
public BeamGroup ResultBeamGroup { get; set; }
```

#### Property Value

 [BeamGroup](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDBeamGroup/BeamGroup.cs)

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_ResultSolidBodies"></a> ResultSolidBodies

```csharp
public List<SolidBody> ResultSolidBodies { get; set; }
```

#### Property Value

 List<[SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)\>

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_UseCustomize"></a> UseCustomize

```csharp
public bool UseCustomize { get; set; }
```

#### Property Value

 bool

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

`beamGroupName` string

`index` int

#### Returns

 string

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_SetInputResultData"></a> SetInputResultData\(\)

```csharp
protected virtual bool SetInputResultData()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_Beam_BuilderBeamGroupMultiplePointsBase_1_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

