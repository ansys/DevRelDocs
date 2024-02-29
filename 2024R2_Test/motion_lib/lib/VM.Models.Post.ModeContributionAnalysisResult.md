# <a id="VM_Models_Post_ModeContributionAnalysisResult"></a> Class ModeContributionAnalysisResult

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ModeContributionAnalysisResult : AnalysisResult, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[AnalysisResult](VM.Models.Post.AnalysisResult.md) ← 
[ModeContributionAnalysisResult](VM.Models.Post.ModeContributionAnalysisResult.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

[AnalysisResult.GetFrames\(\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetFrames), 
[AnalysisResult.Add\(EntityBase\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Add\_VM\_Models\_Post\_EntityBase\_), 
[AnalysisResult.Add\(IEnumerable<EntityBase\>\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Add\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_EntityBase\_\_), 
[AnalysisResult.AddFatigueMaterials\(IEnumerable<object\>, bool\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_AddFatigueMaterials\_System\_Collections\_Generic\_IEnumerable\_System\_Object\_\_System\_Boolean\_), 
[AnalysisResult.BuildContour\(IEntity\[\], ContourMappingType, string, string, IEnumerable<string\>, bool, string\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_BuildContour\_VM\_Models\_Post\_IEntity\_\_\_VM\_Models\_ContourMappingType\_System\_String\_System\_String\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Boolean\_System\_String\_), 
[AnalysisResult.Contains\(string\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Contains\_System\_String\_), 
[AnalysisResult.DeactiveContour\(\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_DeactiveContour), 
[AnalysisResult.GetEntities<TEntity\>\(EntityType\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetEntities\_\_1\_VM\_Models\_Post\_EntityType\_), 
[AnalysisResult.GetEntity\(string\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetEntity\_System\_String\_), 
[AnalysisResult.GetFrequencySequence\(int\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetFrequencySequence\_System\_Int32\_), 
[AnalysisResult.GetFrequencyTime\(double\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetFrequencyTime\_System\_Double\_), 
[AnalysisResult.GetGround\(\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetGround), 
[AnalysisResult.GetInertia\(\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_GetInertia), 
[AnalysisResult.LoadAnimationFrames\(IEnumerable<int\>\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_LoadAnimationFrames\_System\_Collections\_Generic\_IEnumerable\_System\_Int32\_\_), 
[AnalysisResult.LoadAnimationFrames\(\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_LoadAnimationFrames), 
[AnalysisResult.Remove\(EntityType\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Remove\_VM\_Models\_Post\_EntityType\_), 
[AnalysisResult.Remove\(params Identifier\[\]\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Remove\_VM\_Identifier\_\_\_), 
[AnalysisResult.Remove\(params EntityBase\[\]\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Remove\_VM\_Models\_Post\_EntityBase\_\_\_), 
[AnalysisResult.TryGetEntity\(string, out EntityBase\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TryGetEntity\_System\_String\_VM\_Models\_Post\_EntityBase\_\_), 
[AnalysisResult.TryGetEntity<TEntity\>\(string, out TEntity\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TryGetEntity\_\_1\_System\_String\_\_\_0\_\_), 
[AnalysisResult.TryGetEntity\(EntityType, int, out EntityBase\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TryGetEntity\_VM\_Models\_Post\_EntityType\_System\_Int32\_VM\_Models\_Post\_EntityBase\_\_), 
[AnalysisResult.TryGetEntity<TEntity\>\(Identifier, out TEntity\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TryGetEntity\_\_1\_VM\_Identifier\_\_\_0\_\_), 
[AnalysisResult.TryGetEntity<TEntity\>\(EntityType, int, out TEntity\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TryGetEntity\_\_1\_VM\_Models\_Post\_EntityType\_System\_Int32\_\_\_0\_\_), 
[AnalysisResult.TryGetEntity\(Identifier, out EntityBase\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TryGetEntity\_VM\_Identifier\_VM\_Models\_Post\_EntityBase\_\_), 
[AnalysisResult.UpdateAnimation\(UpdateActionType?\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_UpdateAnimation\_System\_Nullable\_VM\_Models\_Post\_UpdateActionType\_\_), 
[AnalysisResult.UpdateDeformationScale\(EntityBase\)](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_UpdateDeformationScale\_VM\_Models\_Post\_EntityBase\_), 
[AnalysisResult.CanPlay](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_CanPlay), 
[AnalysisResult.LowerFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_LowerFrame), 
[AnalysisResult.MaximumFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_MaximumFrame), 
[AnalysisResult.MinimumFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_MinimumFrame), 
[AnalysisResult.CurrentFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_CurrentFrame), 
[AnalysisResult.UpperFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_UpperFrame), 
[AnalysisResult.ActiveContour](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_ActiveContour), 
[AnalysisResult.ContourCount](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_ContourCount), 
[AnalysisResult.Contours](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Contours), 
[AnalysisResult.FrameRange](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_FrameRange), 
[AnalysisResult.Frames](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Frames), 
[AnalysisResult.FromFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_FromFrame), 
[AnalysisResult.ID](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_ID), 
[AnalysisResult.IsAnimationLoaded](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_IsAnimationLoaded), 
[AnalysisResult.LoadingFrameType](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_LoadingFrameType), 
[AnalysisResult.MetaInfo](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_MetaInfo), 
[AnalysisResult.ParentDocument](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_ParentDocument), 
[AnalysisResult.SkipBy](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_SkipBy), 
[AnalysisResult.SkipByFromFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_SkipByFromFrame), 
[AnalysisResult.SkipByToFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_SkipByToFrame), 
[AnalysisResult.ToFrame](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_ToFrame), 
[AnalysisResult.TotalFrames](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_TotalFrames), 
[AnalysisResult.Type](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_Type), 
[AnalysisResult.UnstructGridModel](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_UnstructGridModel), 
[AnalysisResult.WhenAnimationUpdateRequested](VM.Models.Post.AnalysisResult.md\#VM\_Models\_Post\_AnalysisResult\_WhenAnimationUpdateRequested), 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[AnalysisResultExtension.GetStateIDs\(AnalysisResult, int?\)](VM.Models.Post.AnalysisResultExtension.md\#VM\_Models\_Post\_AnalysisResultExtension\_GetStateIDs\_VM\_Models\_Post\_AnalysisResult\_System\_Nullable\_System\_Int32\_\_)

## Constructors

### <a id="VM_Models_Post_ModeContributionAnalysisResult__ctor_VM_Models_Post_ResultDocument_VM_Models_AnalysisResultType_VM_Models_Post_IUnstructGridModel_VM_Models_Post_MetaInfo_"></a> ModeContributionAnalysisResult\(ResultDocument, AnalysisResultType, IUnstructGridModel, MetaInfo\)

```csharp
public ModeContributionAnalysisResult(ResultDocument parentDocument, AnalysisResultType analysisResultType, IUnstructGridModel unstructGridModel, MetaInfo metaInfo)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultType` AnalysisResultType

`unstructGridModel` [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

