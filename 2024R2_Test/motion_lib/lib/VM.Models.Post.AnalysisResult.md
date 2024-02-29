# <a id="VM_Models_Post_AnalysisResult"></a> Class AnalysisResult

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class AnalysisResult : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[AnalysisResult](VM.Models.Post.AnalysisResult.md)

#### Derived

[EigenvalueAnalysisResult](VM.Models.Post.EigenvalueAnalysisResult.md), 
[ModeContributionAnalysisResult](VM.Models.Post.ModeContributionAnalysisResult.md), 
[StaticAnalysisResult](VM.Models.Post.StaticAnalysisResult.md), 
[TransientAnalysisResult](VM.Models.Post.TransientAnalysisResult.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[AnalysisResultExtension.GetStateIDs\(AnalysisResult, int?\)](VM.Models.Post.AnalysisResultExtension.md\#VM\_Models\_Post\_AnalysisResultExtension\_GetStateIDs\_VM\_Models\_Post\_AnalysisResult\_System\_Nullable\_System\_Int32\_\_)

## Constructors

### <a id="VM_Models_Post_AnalysisResult__ctor_VM_Models_Post_ResultDocument_VM_Models_AnalysisResultType_VM_Models_Post_IUnstructGridModel_VM_Models_Post_MetaInfo_"></a> AnalysisResult\(ResultDocument, AnalysisResultType, IUnstructGridModel, MetaInfo\)

```csharp
public AnalysisResult(ResultDocument parentDocument, AnalysisResultType analysisResultType, IUnstructGridModel unstructGridModel, MetaInfo metaInfo)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultType` AnalysisResultType

`unstructGridModel` [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

## Properties

### <a id="VM_Models_Post_AnalysisResult_ActiveContour"></a> ActiveContour

```csharp
public Contour ActiveContour { get; }
```

#### Property Value

 [Contour](VM.Models.Post.Contour.md)

### <a id="VM_Models_Post_AnalysisResult_CanPlay"></a> CanPlay

```csharp
public bool CanPlay { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_ContourCount"></a> ContourCount

```csharp
public int ContourCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_AnalysisResult_Contours"></a> Contours

```csharp
public IEnumerable<Contour> Contours { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Contour](VM.Models.Post.Contour.md)\>

### <a id="VM_Models_Post_AnalysisResult_CurrentFrame"></a> CurrentFrame

```csharp
public uint CurrentFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_FrameRange"></a> FrameRange

```csharp
[SaveProperty(false)]
public string FrameRange { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_AnalysisResult_Frames"></a> Frames

```csharp
[SaveProperty(false)]
public uint? Frames { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)?

### <a id="VM_Models_Post_AnalysisResult_FromFrame"></a> FromFrame

```csharp
[SaveProperty(false)]
public uint FromFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_ID"></a> ID

```csharp
[SaveProperty(false)]
public Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_Post_AnalysisResult_IsAnimationLoaded"></a> IsAnimationLoaded

```csharp
[SaveProperty(false)]
public bool IsAnimationLoaded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_LoadingFrameType"></a> LoadingFrameType

```csharp
[SaveProperty(false)]
public LoadingFrameType LoadingFrameType { get; set; }
```

#### Property Value

 [LoadingFrameType](VM.Models.Post.LoadingFrameType.md)

### <a id="VM_Models_Post_AnalysisResult_LowerFrame"></a> LowerFrame

```csharp
public uint LowerFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_MaximumFrame"></a> MaximumFrame

```csharp
public uint MaximumFrame { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_MetaInfo"></a> MetaInfo

```csharp
public MetaInfo MetaInfo { get; }
```

#### Property Value

 [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_AnalysisResult_MinimumFrame"></a> MinimumFrame

```csharp
public uint MinimumFrame { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_ParentDocument"></a> ParentDocument

```csharp
public ResultDocument ParentDocument { get; }
```

#### Property Value

 [ResultDocument](VM.Models.Post.ResultDocument.md)

### <a id="VM_Models_Post_AnalysisResult_SkipBy"></a> SkipBy

```csharp
[SaveProperty(false)]
public uint? SkipBy { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)?

### <a id="VM_Models_Post_AnalysisResult_SkipByFromFrame"></a> SkipByFromFrame

```csharp
[SaveProperty(false)]
public uint SkipByFromFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_SkipByToFrame"></a> SkipByToFrame

```csharp
[SaveProperty(false)]
public uint SkipByToFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_ToFrame"></a> ToFrame

```csharp
[SaveProperty(false)]
public uint ToFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_TotalFrames"></a> TotalFrames

```csharp
public int TotalFrames { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_AnalysisResult_Type"></a> Type

```csharp
public AnalysisResultType Type { get; }
```

#### Property Value

 AnalysisResultType

### <a id="VM_Models_Post_AnalysisResult_UnstructGridModel"></a> UnstructGridModel

```csharp
public IUnstructGridModel UnstructGridModel { get; }
```

#### Property Value

 [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

### <a id="VM_Models_Post_AnalysisResult_UpperFrame"></a> UpperFrame

```csharp
public uint UpperFrame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnalysisResult_WhenAnimationUpdateRequested"></a> WhenAnimationUpdateRequested

```csharp
public IObservable<UpdateActionType?> WhenAnimationUpdateRequested { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[UpdateActionType](VM.Models.Post.UpdateActionType.md)?\>

## Methods

### <a id="VM_Models_Post_AnalysisResult_Add_VM_Models_Post_EntityBase_"></a> Add\(EntityBase\)

```csharp
public void Add(EntityBase entity)
```

#### Parameters

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_AnalysisResult_Add_System_Collections_Generic_IEnumerable_VM_Models_Post_EntityBase__"></a> Add\(IEnumerable<EntityBase\>\)

```csharp
public void Add(IEnumerable<EntityBase> entities)
```

#### Parameters

`entities` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EntityBase](VM.Models.Post.EntityBase.md)\>

### <a id="VM_Models_Post_AnalysisResult_AddFatigueMaterials_System_Collections_Generic_IEnumerable_System_Object__System_Boolean_"></a> AddFatigueMaterials\(IEnumerable<object\>, bool\)

```csharp
public void AddFatigueMaterials(IEnumerable<object> materials, bool createMaterialLibrary = true)
```

#### Parameters

`materials` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

`createMaterialLibrary` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_BuildContour_VM_Models_Post_IEntity___VM_Models_ContourMappingType_System_String_System_String_System_Collections_Generic_IEnumerable_System_String__System_Boolean_System_String_"></a> BuildContour\(IEntity\[\], ContourMappingType, string, string, IEnumerable<string\>, bool, string\)

```csharp
public Contour BuildContour(IEntity[] targets, ContourMappingType mappingType, string charicteristic, string component, IEnumerable<string> componentList, bool enabled, string name = "")
```

#### Parameters

`targets` [IEntity](VM.Models.Post.IEntity.md)\[\]

`mappingType` ContourMappingType

`charicteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

`componentList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Contour](VM.Models.Post.Contour.md)

### <a id="VM_Models_Post_AnalysisResult_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_DeactiveContour"></a> DeactiveContour\(\)

```csharp
public void DeactiveContour()
```

### <a id="VM_Models_Post_AnalysisResult_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_AnalysisResult_GenerateContour"></a> GenerateContour\(\)

```csharp
protected bool GenerateContour()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_GetEntities__1_VM_Models_Post_EntityType_"></a> GetEntities<TEntity\>\(EntityType\)

```csharp
public IEnumerable<TEntity> GetEntities<TEntity>(EntityType entityType) where TEntity : IEntity
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TEntity\>

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_AnalysisResult_GetEntity_System_String_"></a> GetEntity\(string\)

```csharp
public EntityBase GetEntity(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_AnalysisResult_GetFrames"></a> GetFrames\(\)

```csharp
public (uint Minimum, uint Maximum, uint Lower, uint Upper, uint Position) GetFrames()
```

#### Returns

 \([uint](https://learn.microsoft.com/dotnet/api/system.uint32) [Minimum](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32,system.uint32,system.uint32\-.minimum), [uint](https://learn.microsoft.com/dotnet/api/system.uint32) [Maximum](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32,system.uint32,system.uint32\-.maximum), [uint](https://learn.microsoft.com/dotnet/api/system.uint32) [Lower](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32,system.uint32,system.uint32\-.lower), [uint](https://learn.microsoft.com/dotnet/api/system.uint32) [Upper](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32,system.uint32,system.uint32\-.upper), [uint](https://learn.microsoft.com/dotnet/api/system.uint32) [Position](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32,system.uint32,system.uint32\-.position)\)

### <a id="VM_Models_Post_AnalysisResult_GetFrequencySequence_System_Int32_"></a> GetFrequencySequence\(int\)

```csharp
public IFrequencySequence GetFrequencySequence(int sequence)
```

#### Parameters

`sequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IFrequencySequence](VM.Models.Post.IFrequencySequence.md)

### <a id="VM_Models_Post_AnalysisResult_GetFrequencyTime_System_Double_"></a> GetFrequencyTime\(double\)

```csharp
public IFrequencyTime GetFrequencyTime(double time)
```

#### Parameters

`time` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [IFrequencyTime](VM.Models.Post.IFrequencyTime.md)

### <a id="VM_Models_Post_AnalysisResult_GetGround"></a> GetGround\(\)

```csharp
public Ground GetGround()
```

#### Returns

 [Ground](VM.Models.Post.Bodies.Ground.md)

### <a id="VM_Models_Post_AnalysisResult_GetInertia"></a> GetInertia\(\)

```csharp
public GeneralMarker GetInertia()
```

#### Returns

 [GeneralMarker](VM.Models.Post.GeneralMarker.md)

### <a id="VM_Models_Post_AnalysisResult_LoadAnimationFrames_System_Collections_Generic_IEnumerable_System_Int32__"></a> LoadAnimationFrames\(IEnumerable<int\>\)

```csharp
public void LoadAnimationFrames(IEnumerable<int> stateIDs)
```

#### Parameters

`stateIDs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_AnalysisResult_LoadAnimationFrames"></a> LoadAnimationFrames\(\)

```csharp
public void LoadAnimationFrames()
```

### <a id="VM_Models_Post_AnalysisResult_Remove_VM_Models_Post_EntityType_"></a> Remove\(EntityType\)

```csharp
public void Remove(EntityType entityType)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_AnalysisResult_Remove_VM_Identifier___"></a> Remove\(params Identifier\[\]\)

```csharp
public void Remove(params Identifier[] identifiers)
```

#### Parameters

`identifiers` Identifier\[\]

### <a id="VM_Models_Post_AnalysisResult_Remove_VM_Models_Post_EntityBase___"></a> Remove\(params EntityBase\[\]\)

```csharp
public void Remove(params EntityBase[] entities)
```

#### Parameters

`entities` [EntityBase](VM.Models.Post.EntityBase.md)\[\]

### <a id="VM_Models_Post_AnalysisResult_TryGetEntity_System_String_VM_Models_Post_EntityBase__"></a> TryGetEntity\(string, out EntityBase\)

```csharp
public bool TryGetEntity(string fullName, out EntityBase entity)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_TryGetEntity__1_System_String___0__"></a> TryGetEntity<TEntity\>\(string, out TEntity\)

```csharp
public bool TryGetEntity<TEntity>(string fullName, out TEntity entity) where TEntity : class, IEntity
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entity` TEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_AnalysisResult_TryGetEntity_VM_Models_Post_EntityType_System_Int32_VM_Models_Post_EntityBase__"></a> TryGetEntity\(EntityType, int, out EntityBase\)

```csharp
public bool TryGetEntity(EntityType entityType, int index, out EntityBase entity)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_TryGetEntity__1_VM_Identifier___0__"></a> TryGetEntity<TEntity\>\(Identifier, out TEntity\)

```csharp
public bool TryGetEntity<TEntity>(Identifier id, out TEntity entity) where TEntity : IEntity
```

#### Parameters

`id` Identifier

`entity` TEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_AnalysisResult_TryGetEntity__1_VM_Models_Post_EntityType_System_Int32___0__"></a> TryGetEntity<TEntity\>\(EntityType, int, out TEntity\)

```csharp
public bool TryGetEntity<TEntity>(EntityType entityType, int index, out TEntity entity) where TEntity : class, IEntity
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`entity` TEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_AnalysisResult_TryGetEntity_VM_Identifier_VM_Models_Post_EntityBase__"></a> TryGetEntity\(Identifier, out EntityBase\)

```csharp
public bool TryGetEntity(Identifier id, out EntityBase entity)
```

#### Parameters

`id` Identifier

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnalysisResult_UpdateAnimation_System_Nullable_VM_Models_Post_UpdateActionType__"></a> UpdateAnimation\(UpdateActionType?\)

```csharp
public void UpdateAnimation(UpdateActionType? updateActionType)
```

#### Parameters

`updateActionType` [UpdateActionType](VM.Models.Post.UpdateActionType.md)?

### <a id="VM_Models_Post_AnalysisResult_UpdateDeformationScale_VM_Models_Post_EntityBase_"></a> UpdateDeformationScale\(EntityBase\)

```csharp
public void UpdateDeformationScale(EntityBase target)
```

#### Parameters

`target` [EntityBase](VM.Models.Post.EntityBase.md)

