# <a id="VM_Models_Post_ResultDocument"></a> Class ResultDocument

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ResultDocument : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ResultDocument](VM.Models.Post.ResultDocument.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[ResultDocumentExtension.CreateCurve\(ResultDocument, string, IEnumerable<string\>\)](VM.Models.Post.ResultDocumentExtension.md\#VM\_Models\_Post\_ResultDocumentExtension\_CreateCurve\_VM\_Models\_Post\_ResultDocument\_System\_String\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_), 
[ResultDocumentExtension.CreateCurve\(ResultDocument, PlotDataType, IEnumerable<string\>, object, object, string\)](VM.Models.Post.ResultDocumentExtension.md\#VM\_Models\_Post\_ResultDocumentExtension\_CreateCurve\_VM\_Models\_Post\_ResultDocument\_VM\_Models\_PlotDataType\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Object\_System\_Object\_System\_String\_), 
[ResultDocumentExtension.CreateCurve\(ResultDocument, PlotDataType, string, IEnumerable<string\>, object\)](VM.Models.Post.ResultDocumentExtension.md\#VM\_Models\_Post\_ResultDocumentExtension\_CreateCurve\_VM\_Models\_Post\_ResultDocument\_VM\_Models\_PlotDataType\_System\_String\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Object\_), 
[ResultDocumentExtension.CreateCurve\(ResultDocument, PlotDataType, IEnumerable<string\>, HitItemInfo, object\)](VM.Models.Post.ResultDocumentExtension.md\#VM\_Models\_Post\_ResultDocumentExtension\_CreateCurve\_VM\_Models\_Post\_ResultDocument\_VM\_Models\_PlotDataType\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_VM\_Models\_Post\_HitItemInfo\_System\_Object\_), 
[ResultDocumentExtension.GetCurves\(ResultDocument, PlotParameters\)](VM.Models.Post.ResultDocumentExtension.md\#VM\_Models\_Post\_ResultDocumentExtension\_GetCurves\_VM\_Models\_Post\_ResultDocument\_VM\_Models\_OutputReader\_PlotParameters\_), 
[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_ResultDocument_AnalysisResults"></a> AnalysisResults

```csharp
public IEnumerable<AnalysisResult> AnalysisResults { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[AnalysisResult](VM.Models.Post.AnalysisResult.md)\>

### <a id="VM_Models_Post_ResultDocument_CanLoad"></a> CanLoad

```csharp
public bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultDocument_CanSave"></a> CanSave

```csharp
public bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultDocument_FatigueName"></a> FatigueName

```csharp
[SaveProperty(false)]
public string FatigueName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultDocument_FilePath"></a> FilePath

```csharp
public string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultDocument_ID"></a> ID

```csharp
public Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_Post_ResultDocument_IsPLT"></a> IsPLT

```csharp
public bool IsPLT { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultDocument_PlotDataType"></a> PlotDataType

```csharp
[SaveProperty(false)]
public PlotDataType PlotDataType { get; set; }
```

#### Property Value

 PlotDataType

### <a id="VM_Models_Post_ResultDocument_PyMotion"></a> PyMotion

```csharp
public PyMotion PyMotion { get; }
```

#### Property Value

 PyMotion

### <a id="VM_Models_Post_ResultDocument_ReplacementCount"></a> ReplacementCount

```csharp
public int ReplacementCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultDocument_SecondaryAnalysisResultTypes"></a> SecondaryAnalysisResultTypes

```csharp
public AnalysisResultType[] SecondaryAnalysisResultTypes { get; }
```

#### Property Value

 AnalysisResultType\[\]

### <a id="VM_Models_Post_ResultDocument_SourceData"></a> SourceData

```csharp
public SourceData SourceData { get; }
```

#### Property Value

 [SourceData](VM.Models.Post.SourceData.md)

### <a id="VM_Models_Post_ResultDocument_SystemUnit"></a> SystemUnit

```csharp
public ExtendedUnit SystemUnit { get; }
```

#### Property Value

 [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

### <a id="VM_Models_Post_ResultDocument_WhenAnalysisResultAdded"></a> WhenAnalysisResultAdded

```csharp
public IObservable<AnalysisResult> WhenAnalysisResultAdded { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[AnalysisResult](VM.Models.Post.AnalysisResult.md)\>

## Methods

### <a id="VM_Models_Post_ResultDocument_Add_VM_Models_Post_EntityBase_"></a> Add\(EntityBase\)

```csharp
public void Add(EntityBase entity)
```

#### Parameters

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_ResultDocument_AddModeContributionAnalysisResult"></a> AddModeContributionAnalysisResult\(\)

```csharp
public AnalysisResult AddModeContributionAnalysisResult()
```

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_ResultDocument_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_ResultDocument_GetAnalysisResult_VM_Models_AnalysisResultType_"></a> GetAnalysisResult\(AnalysisResultType\)

```csharp
public AnalysisResult GetAnalysisResult(AnalysisResultType analysisResultType)
```

#### Parameters

`analysisResultType` AnalysisResultType

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_ResultDocument_GetAnalysisResult__1_VM_Models_AnalysisResultType_"></a> GetAnalysisResult<TAnalysisResult\>\(AnalysisResultType\)

```csharp
public TAnalysisResult GetAnalysisResult<TAnalysisResult>(AnalysisResultType analysisResultType) where TAnalysisResult : AnalysisResult
```

#### Parameters

`analysisResultType` AnalysisResultType

#### Returns

 TAnalysisResult

#### Type Parameters

`TAnalysisResult` 

### <a id="VM_Models_Post_ResultDocument_GetAnalysisResult_VM_Identifier_"></a> GetAnalysisResult\(Identifier\)

```csharp
public AnalysisResult GetAnalysisResult(Identifier id)
```

#### Parameters

`id` Identifier

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_ResultDocument_GetAnalysisResult__1_VM_Identifier_"></a> GetAnalysisResult<TAnalysisResult\>\(Identifier\)

```csharp
public TAnalysisResult GetAnalysisResult<TAnalysisResult>(Identifier id) where TAnalysisResult : AnalysisResult
```

#### Parameters

`id` Identifier

#### Returns

 TAnalysisResult

#### Type Parameters

`TAnalysisResult` 

### <a id="VM_Models_Post_ResultDocument_GetAnalysisResultConnectableObservable_System_Boolean_"></a> GetAnalysisResultConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<AnalysisResult, Identifier>> GetAnalysisResultConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[AnalysisResult](VM.Models.Post.AnalysisResult.md), Identifier\>\>

### <a id="VM_Models_Post_ResultDocument_GetCharacteristics_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_System_Object_"></a> GetCharacteristics\(AnalysisResultType, ContourMappingType, object\)

```csharp
public IEnumerable<string> GetCharacteristics(AnalysisResultType analysisResultType, ContourMappingType mappingType, object obj)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultDocument_GetComponentIndex_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_VM_Models_Post_EntityBase_System_String_System_String_"></a> GetComponentIndex\(AnalysisResultType, ContourMappingType, EntityBase, string, string\)

```csharp
public int? GetComponentIndex(AnalysisResultType analysisResultType, ContourMappingType mappingType, EntityBase entity, string characteristic, string component)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="VM_Models_Post_ResultDocument_GetComponentUnitType_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_System_Object_System_String_System_String_"></a> GetComponentUnitType\(AnalysisResultType, ContourMappingType, object, string, string\)

```csharp
public string GetComponentUnitType(AnalysisResultType analysisResultType, ContourMappingType mappingType, object target, string characteristic, string component)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ResultDocument_GetComponents_VM_Models_AnalysisResultType_VM_Models_ContourMappingType_VM_Models_Post_IObject_System_String_"></a> GetComponents\(AnalysisResultType, ContourMappingType, IObject, string\)

```csharp
public IList<string> GetComponents(AnalysisResultType analysisResultType, ContourMappingType mappingType, IObject obj, string characteristic)
```

#### Parameters

`analysisResultType` AnalysisResultType

`mappingType` ContourMappingType

`obj` [IObject](VM.Models.Post.IObject.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_ResultDocument_GetConnectors_System_String_"></a> GetConnectors\(string\)

```csharp
public IList<(ConnectorType, ActionType, string)> GetConnectors(string bodyFullName)
```

#### Parameters

`bodyFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<\([ConnectorType](VM.Models.Post.ConnectorType.md), [ActionType](VM.Models.Post.ActionType.md), [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

### <a id="VM_Models_Post_ResultDocument_GetEntities_VM_Models_Post_EntityType_"></a> GetEntities\(EntityType\)

```csharp
public IEnumerable<EntityBase> GetEntities(EntityType entityType)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EntityBase](VM.Models.Post.EntityBase.md)\>

### <a id="VM_Models_Post_ResultDocument_GetEntities__1_VM_Models_Post_EntityType_"></a> GetEntities<TEntity\>\(EntityType\)

```csharp
public IEnumerable<TEntity> GetEntities<TEntity>(EntityType entityType) where TEntity : IEntity
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TEntity\>

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_ResultDocument_GetEntity_System_String_"></a> GetEntity\(string\)

```csharp
public EntityBase GetEntity(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_ResultDocument_GetEntity__1_System_String_"></a> GetEntity<TEntity\>\(string\)

```csharp
public TEntity GetEntity<TEntity>(string name) where TEntity : EntityBase
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 TEntity

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_ResultDocument_GetEntity_VM_Models_Post_EntityType_System_Int32_"></a> GetEntity\(EntityType, int\)

```csharp
public EntityBase GetEntity(EntityType entityType, int index)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_ResultDocument_GetEntity__1_VM_Models_Post_EntityType_System_Int32_"></a> GetEntity<TEntity\>\(EntityType, int\)

```csharp
public TEntity GetEntity<TEntity>(EntityType entityType, int index) where TEntity : EntityBase
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 TEntity

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_ResultDocument_GetPlottableAnalysisResult"></a> GetPlottableAnalysisResult\(\)

```csharp
public AnalysisResult GetPlottableAnalysisResult()
```

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_ResultDocument_GetPrimaryAnalysisResult"></a> GetPrimaryAnalysisResult\(\)

```csharp
public AnalysisResult GetPrimaryAnalysisResult()
```

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_ResultDocument_GetStateIds_System_Boolean_VM_Models_AnalysisResultType_"></a> GetStateIds\(bool, AnalysisResultType\)

```csharp
public IList<int> GetStateIds(bool fullFrame, AnalysisResultType analysisResultType)
```

#### Parameters

`fullFrame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`analysisResultType` AnalysisResultType

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_ResultDocument_GetTimeCount_VM_Models_PlotDataType_"></a> GetTimeCount\(PlotDataType\)

```csharp
public int GetTimeCount(PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`plotDataType` PlotDataType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultDocument_GetTimes_VM_Models_PlotDataType_"></a> GetTimes\(PlotDataType\)

```csharp
public double[] GetTimes(PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`plotDataType` PlotDataType

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ResultDocument_Remove_VM_Models_Post_EntityBase_"></a> Remove\(EntityBase\)

```csharp
public void Remove(EntityBase entity)
```

#### Parameters

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_ResultDocument_RemoveAnimationSlot"></a> RemoveAnimationSlot\(\)

```csharp
public void RemoveAnimationSlot()
```

### <a id="VM_Models_Post_ResultDocument_RemoveModeContributionAnalysisResult_VM_Identifier_"></a> RemoveModeContributionAnalysisResult\(Identifier\)

```csharp
public void RemoveModeContributionAnalysisResult(Identifier id)
```

#### Parameters

`id` Identifier

### <a id="VM_Models_Post_ResultDocument_TryGetContourMappingType_VM_Models_AnalysisResultType_VM_Models_Post_IContourable_System_String__"></a> TryGetContourMappingType\(AnalysisResultType, IContourable, out string\)

```csharp
public bool TryGetContourMappingType(AnalysisResultType analysisResultType, IContourable contourable, out string contourMappingType)
```

#### Parameters

`analysisResultType` AnalysisResultType

`contourable` [IContourable](VM.Models.Post.IContourable.md)

`contourMappingType` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

