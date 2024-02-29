# <a id="VM_Models_Post_IPLTReader"></a> Interface IPLTReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IPLTReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IPLTReader_FEBodyReferenceFrames"></a> FEBodyReferenceFrames

```csharp
IDictionary<int, double[]> FEBodyReferenceFrames { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IPLTReader_FilePath"></a> FilePath

```csharp
string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IPLTReader_ModalNodesbehavior"></a> ModalNodesbehavior

```csharp
IDictionary<int, IDictionary<int, double[]>> ModalNodesbehavior { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

### <a id="VM_Models_Post_IPLTReader_RigidBodiesPositions"></a> RigidBodiesPositions

```csharp
IDictionary<int, double[]> RigidBodiesPositions { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IPLTReader_Size_PLT_RBody"></a> Size\_PLT\_RBody

```csharp
long Size_PLT_RBody { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Methods

### <a id="VM_Models_Post_IPLTReader_CreateResultInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CreateResultInfo\(ResultInfo, MetaInfo\)

```csharp
bool CreateResultInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IPLTReader_GetCurveInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_ValueTuple_VM_Models_Post_IEntity_System_Collections_Generic_IEnumerable_System_String___System_Collections_Generic_IDictionary_System_String_System_Double____System_Object_VM_Models_Post_HitItemInfo_"></a> GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, \(IEntity Target, IEnumerable<string\> Paths\), IDictionary<string, double\[\]\>, object, HitItemInfo\)

```csharp
bool GetCurveInfo(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, (IEntity Target, IEnumerable<string> Paths) targetPaths, IDictionary<string, double[]> curveInfo, object coordsys, HitItemInfo hitItem = null)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`targetPaths` \([IEntity](VM.Models.Post.IEntity.md) [Target](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.models.post.ientity,system.collections.generic.ienumerable\-system.string\-\-.target), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\> [Paths](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.models.post.ientity,system.collections.generic.ienumerable\-system.string\-\-.paths)\)

`curveInfo` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`coordsys` [object](https://learn.microsoft.com/dotnet/api/system.object)

`hitItem` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IPLTReader_InitializePostSolver_VM_Models_Post_MetaInfo_"></a> InitializePostSolver\(MetaInfo\)

```csharp
void InitializePostSolver(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IPLTReader_ReadFlexibleBodyReferenceFrames_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_IFEBody_System_Collections_Generic_IList_System_Double_____"></a> ReadFlexibleBodyReferenceFrames\(ResultInfo, MetaInfo, IFEBody, ref IList<double\[\]\>\)

```csharp
bool ReadFlexibleBodyReferenceFrames(ResultInfo resultInfo, MetaInfo metaInfo, IFEBody febody, ref IList<double[]> referenceframes)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`febody` [IFEBody](VM.Models.Post.IFEBody.md)

`referenceframes` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IPLTReader_ReadModalCoordinates_VM_Models_Post_MetaInfo_VM_Models_Post_ResultInfo_VM_Models_Post_IModal_System_Collections_Generic_IList_System_Double____"></a> ReadModalCoordinates\(MetaInfo, ResultInfo, IModal, IList<double\[\]\>\)

```csharp
void ReadModalCoordinates(MetaInfo metainfo, ResultInfo resultInfo, IModal modal, IList<double[]> coordinates)
```

#### Parameters

`metainfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`modal` [IModal](VM.Models.Post.IModal.md)

`coordinates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

