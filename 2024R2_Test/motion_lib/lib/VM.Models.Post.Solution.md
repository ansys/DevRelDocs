# <a id="VM_Models_Post_Solution"></a> Class Solution

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class Solution : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[Solution](VM.Models.Post.Solution.md)

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

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_Solution_ActiveSlot"></a> ActiveSlot

```csharp
public Slot ActiveSlot { get; }
```

#### Property Value

 [Slot](VM.Models.Post.Slot.md)

### <a id="VM_Models_Post_Solution_Default"></a> Default

```csharp
public static Solution Default { get; }
```

#### Property Value

 [Solution](VM.Models.Post.Solution.md)

### <a id="VM_Models_Post_Solution_GetLayout"></a> GetLayout

```csharp
public Func<string> GetLayout { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_Solution_IsDocumentRefreshing"></a> IsDocumentRefreshing

```csharp
public bool IsDocumentRefreshing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_IsFunctionalityLimited"></a> IsFunctionalityLimited

```csharp
public static bool IsFunctionalityLimited { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_IsUpdatingLayout"></a> IsUpdatingLayout

```csharp
public bool IsUpdatingLayout { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_Layout"></a> Layout

```csharp
public string Layout { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Solution_ResultDocumentCount"></a> ResultDocumentCount

```csharp
public int ResultDocumentCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Solution_ResultDocuments"></a> ResultDocuments

```csharp
public IEnumerable<ResultDocument> ResultDocuments { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ResultDocument](VM.Models.Post.ResultDocument.md)\>

### <a id="VM_Models_Post_Solution_SummarizedEntityPausing"></a> SummarizedEntityPausing

```csharp
public IObservable<bool> SummarizedEntityPausing { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="VM_Models_Post_Solution_WhenActiveSlotChanged"></a> WhenActiveSlotChanged

```csharp
public IObservable<(int OldID, int NewID, ActiveSlotChangeReason Reason)> WhenActiveSlotChanged { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<\([int](https://learn.microsoft.com/dotnet/api/system.int32) [OldID](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,vm.models.post.activeslotchangereason\-.oldid), [int](https://learn.microsoft.com/dotnet/api/system.int32) [NewID](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,vm.models.post.activeslotchangereason\-.newid), [ActiveSlotChangeReason](VM.Models.Post.ActiveSlotChangeReason.md) [Reason](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,vm.models.post.activeslotchangereason\-.reason)\)\>

### <a id="VM_Models_Post_Solution_WhenDefaultChanged"></a> WhenDefaultChanged

```csharp
public static IObservable<Solution> WhenDefaultChanged { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[Solution](VM.Models.Post.Solution.md)\>

### <a id="VM_Models_Post_Solution_WhenThrowException"></a> WhenThrowException

```csharp
public IObservable<Exception> WhenThrowException { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception)\>

## Methods

### <a id="VM_Models_Post_Solution_AddResultDocument_System_String_System_Boolean_"></a> AddResultDocument\(string, bool\)

```csharp
public ResultDocument AddResultDocument(string path, bool initializePython = true)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`initializePython` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ResultDocument](VM.Models.Post.ResultDocument.md)

### <a id="VM_Models_Post_Solution_CreateAnimationSlot_VM_Identifier_VM_Identifier_System_Nullable_System_Int32__System_String_VM_Models_Post_IAnimationViewer_System_Boolean_"></a> CreateAnimationSlot\(Identifier, Identifier, int?, string, IAnimationViewer, bool\)

```csharp
public AnimationSlot CreateAnimationSlot(Identifier resultDocumentID, Identifier analysisResultID, int? id, string fullName, IAnimationViewer viewer, bool addAfterCreate = true)
```

#### Parameters

`resultDocumentID` Identifier

`analysisResultID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`viewer` [IAnimationViewer](VM.Models.Post.IAnimationViewer.md)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [AnimationSlot](VM.Models.Post.AnimationSlot.md)

### <a id="VM_Models_Post_Solution_CreateDeformation2D_System_Nullable_System_Int32__System_String_System_String_System_Boolean_"></a> CreateDeformation2D\(int?, string, string, bool\)

```csharp
public Deformation2D CreateDeformation2D(int? id, string fullName, string title, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Deformation2D](VM.Models.Post.Deformation2D.md)

### <a id="VM_Models_Post_Solution_CreateDriveTrainSTFT_VM_Identifier_System_Nullable_System_Int32__System_String_System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Boolean_"></a> CreateDriveTrainSTFT\(Identifier, int?, string, string, int?, int?, bool\)

```csharp
public DriveTrainSTFT CreateDriveTrainSTFT(Identifier parentDocumentID, int? id, string fullName, string title, int? stft2DID = null, int? stft3DID = null, bool addAfterCreate = true)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`stft2DID` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`stft3DID` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DriveTrainSTFT](VM.Models.Post.DriveTrainSTFT.md)

### <a id="VM_Models_Post_Solution_CreateDriveTrainSTFT2D_VM_Identifier_System_Nullable_System_Int32__System_String_System_Boolean_"></a> CreateDriveTrainSTFT2D\(Identifier, int?, string, bool\)

```csharp
public DriveTrainSTFT2D CreateDriveTrainSTFT2D(Identifier parentDocumentID, int? id, string fullName, bool addAfterCreate = true)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DriveTrainSTFT2D](VM.Models.Post.DriveTrainSTFT2D.md)

### <a id="VM_Models_Post_Solution_CreateDriveTrainSTFT3D_VM_Identifier_System_Nullable_System_Int32__System_String_System_Boolean_"></a> CreateDriveTrainSTFT3D\(Identifier, int?, string, bool\)

```csharp
public DriveTrainSTFT3D CreateDriveTrainSTFT3D(Identifier parentDocumentID, int? id, string fullName, bool addAfterCreate = true)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DriveTrainSTFT3D](VM.Models.Post.DriveTrainSTFT3D.md)

### <a id="VM_Models_Post_Solution_CreateDynamicPPTE2D_System_Nullable_System_Int32__System_String_System_String_System_Boolean_"></a> CreateDynamicPPTE2D\(int?, string, string, bool\)

```csharp
public DynamicPPTE2D CreateDynamicPPTE2D(int? id, string fullName, string title, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DynamicPPTE2D](VM.Models.Post.DynamicPPTE2D.md)

### <a id="VM_Models_Post_Solution_CreateHarmonicTE2D_System_Nullable_System_Int32__System_String_System_String_System_Boolean_"></a> CreateHarmonicTE2D\(int?, string, string, bool\)

```csharp
public HarmonicTE2D CreateHarmonicTE2D(int? id, string fullName, string title, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [HarmonicTE2D](VM.Models.Post.HarmonicTE2D.md)

### <a id="VM_Models_Post_Solution_CreateHeatMapSTFT_VM_Identifier_System_Nullable_System_Int32__System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Boolean_"></a> CreateHeatMapSTFT\(Identifier, int?, string, int?, int?, bool\)

```csharp
public HeatMapSTFT CreateHeatMapSTFT(Identifier parentDocumentID, int? id, string fullName, int? stft2DID = null, int? stft3DID = null, bool addAfterCreate = true)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`stft2DID` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`stft3DID` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [HeatMapSTFT](VM.Models.Post.HeatMapSTFT.md)

### <a id="VM_Models_Post_Solution_CreateHitItemInfo_VM_Models_Post_HitItemInfoType_VM_Models_Post_IHitItem_"></a> CreateHitItemInfo\(HitItemInfoType, IHitItem\)

```csharp
public static HitItemInfo CreateHitItemInfo(HitItemInfoType type, IHitItem hitItem)
```

#### Parameters

`type` [HitItemInfoType](VM.Models.Post.HitItemInfoType.md)

`hitItem` [IHitItem](VM.Models.Post.IHitItem.md)

#### Returns

 [HitItemInfo](VM.Models.Post.HitItemInfo.md)

### <a id="VM_Models_Post_Solution_CreateLine2D_System_Nullable_System_Int32__System_String_System_Boolean_"></a> CreateLine2D\(int?, string, bool\)

```csharp
public Line2D CreateLine2D(int? id, string fullName, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Line2D](VM.Models.Post.Line2D.md)

### <a id="VM_Models_Post_Solution_CreateModeContribution2D_System_Nullable_System_Int32__System_String_System_Boolean_"></a> CreateModeContribution2D\(int?, string, bool\)

```csharp
public ModeContribution2D CreateModeContribution2D(int? id, string fullName, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ModeContribution2D](VM.Models.Post.ModeContribution2D.md)

### <a id="VM_Models_Post_Solution_CreatePressure2D_System_Nullable_System_Int32__System_String_System_String_System_Boolean_"></a> CreatePressure2D\(int?, string, string, bool\)

```csharp
public Pressure2D CreatePressure2D(int? id, string fullName, string title, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Pressure2D](VM.Models.Post.Pressure2D.md)

### <a id="VM_Models_Post_Solution_CreateSTFT2D_System_Nullable_System_Int32__System_Boolean_"></a> CreateSTFT2D\(int?, bool\)

```csharp
public STFT2D CreateSTFT2D(int? id, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [STFT2D](VM.Models.Post.STFT2D.md)

### <a id="VM_Models_Post_Solution_CreateSTFT3D_System_Nullable_System_Int32__System_Boolean_"></a> CreateSTFT3D\(int?, bool\)

```csharp
public STFT3D CreateSTFT3D(int? id, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [STFT3D](VM.Models.Post.STFT3D.md)

### <a id="VM_Models_Post_Solution_CreateSlotGroup_System_Nullable_System_Guid__System_String_"></a> CreateSlotGroup\(Guid?, string\)

```csharp
public SlotGroup CreateSlotGroup(Guid? id = null, string fullName = null)
```

#### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SlotGroup](VM.Models.Post.SlotGroup.md)

### <a id="VM_Models_Post_Solution_CreateSuttlingForce2D_System_Nullable_System_Int32__System_String_System_String_System_Boolean_"></a> CreateSuttlingForce2D\(int?, string, string, bool\)

```csharp
public ShuttlingForce2D CreateSuttlingForce2D(int? id, string fullName, string title, bool addAfterCreate = true)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ShuttlingForce2D](VM.Models.Post.ShuttlingForce2D.md)

### <a id="VM_Models_Post_Solution_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_Solution_GetResultDocumentConnectableObservable_System_Boolean_"></a> GetResultDocumentConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<ResultDocument, Identifier>> GetResultDocumentConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[ResultDocument](VM.Models.Post.ResultDocument.md), Identifier\>\>

### <a id="VM_Models_Post_Solution_GetSeries__1_System_String_"></a> GetSeries<T\>\(string\)

```csharp
public T GetSeries<T>(string id) where T : class, ISeries
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="VM_Models_Post_Solution_GetSeriesConnectableObservable_System_Boolean_"></a> GetSeriesConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<ISeries, string>> GetSeriesConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[ISeries](VM.Models.Post.ISeries.md), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="VM_Models_Post_Solution_GetSeriesFullName_System_String_VM_Models_Post_DimensionType_"></a> GetSeriesFullName\(string, DimensionType\)

```csharp
public string GetSeriesFullName(string name, DimensionType dimensionType)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dimensionType` [DimensionType](VM.Models.Post.DimensionType.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Solution_GetSeriesFullName_System_String_System_String_"></a> GetSeriesFullName\(string, string\)

```csharp
public string GetSeriesFullName(string name, string unit)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Solution_GetSeriesFullName_System_String_"></a> GetSeriesFullName\(string\)

```csharp
public string GetSeriesFullName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Solution_GetSeriesFullName"></a> GetSeriesFullName\(\)

```csharp
public string GetSeriesFullName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Solution_GetSlotConnectableObservable_System_Boolean_"></a> GetSlotConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<Slot, int>> GetSlotConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[Slot](VM.Models.Post.Slot.md), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>\>

### <a id="VM_Models_Post_Solution_GetSlotGroupConnectableObservable_System_Boolean_"></a> GetSlotGroupConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<SlotGroup, Guid>> GetSlotGroupConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[SlotGroup](VM.Models.Post.SlotGroup.md), [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\>\>

### <a id="VM_Models_Post_Solution_Initialize_System_Boolean_"></a> Initialize\(bool\)

```csharp
public static void Initialize(bool useFatigueMaterial = true)
```

#### Parameters

`useFatigueMaterial` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_NewGuid"></a> NewGuid\(\)

```csharp
public Guid NewGuid()
```

#### Returns

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### <a id="VM_Models_Post_Solution_RemoveResultDocument_VM_Identifier_"></a> RemoveResultDocument\(Identifier\)

```csharp
public void RemoveResultDocument(Identifier id)
```

#### Parameters

`id` Identifier

### <a id="VM_Models_Post_Solution_RemoveSeries_System_String___"></a> RemoveSeries\(params string\[\]\)

```csharp
public void RemoveSeries(params string[] id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Models_Post_Solution_RemoveSlot_System_Int32___"></a> RemoveSlot\(params int\[\]\)

```csharp
public void RemoveSlot(params int[] id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_Solution_RemoveSlotGroup_System_Guid___"></a> RemoveSlotGroup\(params Guid\[\]\)

```csharp
public void RemoveSlotGroup(params Guid[] values)
```

#### Parameters

`values` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\[\]

### <a id="VM_Models_Post_Solution_ThrowException_System_Exception_"></a> ThrowException\(Exception\)

```csharp
public void ThrowException(Exception exception)
```

#### Parameters

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="VM_Models_Post_Solution_TryGetResultDocument_System_String_VM_Models_Post_ResultDocument__"></a> TryGetResultDocument\(string, out ResultDocument\)

```csharp
public bool TryGetResultDocument(string filePath, out ResultDocument resultDocument)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`resultDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_TryGetResultDocument_VM_Identifier_VM_Models_Post_ResultDocument__"></a> TryGetResultDocument\(Identifier, out ResultDocument\)

```csharp
public bool TryGetResultDocument(Identifier resultDocumentID, out ResultDocument resultDocument)
```

#### Parameters

`resultDocumentID` Identifier

`resultDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_TryGetSeriesByFullName_System_String_VM_Models_Post_ISeries__"></a> TryGetSeriesByFullName\(string, out ISeries\)

```csharp
public bool TryGetSeriesByFullName(string fullName, out ISeries series)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`series` [ISeries](VM.Models.Post.ISeries.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Solution_TryGetSlot__1_System_Int32___0__"></a> TryGetSlot<T\>\(int, out T\)

```csharp
public bool TryGetSlot<T>(int id, out T slot) where T : Slot
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`slot` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

