# <a id="VM_Models_Post_GeneralMarker"></a> Class GeneralMarker

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class GeneralMarker : MarkerBase, IObservableObject, IDisposableObject, IGeneralMarker, IMarker, IVisible, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[MarkerBase](VM.Models.Post.MarkerBase.md) ← 
[GeneralMarker](VM.Models.Post.GeneralMarker.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IGeneralMarker](VM.Models.Post.IGeneralMarker.md), 
[IMarker](VM.Models.Post.IMarker.md), 
IVisible, 
[IPlottable](VM.Models.Post.IPlottable.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[MarkerBase.DisplayName](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_DisplayName), 
[MarkerBase.IsVisible](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_IsVisible), 
[MarkerBase.IsVisibleLabel](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_IsVisibleLabel), 
[MarkerBase.IsVisibleLabelBackground](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_IsVisibleLabelBackground), 
[MarkerBase.IsVisibleTrajectory](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_IsVisibleTrajectory), 
[MarkerBase.LabelBackGroundColor](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_LabelBackGroundColor), 
[MarkerBase.LabelTextColor](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_LabelTextColor), 
[MarkerBase.MarkerAnimation](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_MarkerAnimation), 
[MarkerBase.MarkerSize](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_MarkerSize), 
[MarkerBase.Orientation](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_Orientation), 
[MarkerBase.PlottableType](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_PlottableType), 
[MarkerBase.Position](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_Position), 
[MarkerBase.PositionAndOrientation](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_PositionAndOrientation), 
[MarkerBase.TrajectoryColor](VM.Models.Post.MarkerBase.md\#VM\_Models\_Post\_MarkerBase\_TrajectoryColor), 
[EntityBase.IsSupported\(EntityFilterMode\)](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupported\_VM\_Models\_Post\_EntityFilterMode\_), 
[EntityBase.CategoryType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[EntityBase.HasGeometry](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_HasGeometry), 
[EntityBase.ID](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_ID), 
[EntityBase.Index](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_Index), 
[EntityBase.InitialValues](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_InitialValues), 
[EntityBase.IsDummy](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsDummy), 
[EntityBase.IsPlottable](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsPlottable), 
[ObjectBase.GetUnstructGridModel\(\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_GetUnstructGridModel), 
[ObjectBase.SetName\(string\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_SetName\_System\_String\_), 
[ObjectBase.UpdateAnimation\(UpdateActionType\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_UpdateAnimation\_VM\_Models\_Post\_UpdateActionType\_), 
[ObjectBase.AnalysisResult](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResult), 
[ObjectBase.AnalysisResultID](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultID), 
[ObjectBase.AnalysisResultType](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultType), 
[ObjectBase.DisplayName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_DisplayName), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_FullName), 
[ObjectBase.Name](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_Name), 
[ObjectBase.ParentDocument](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_ParentDocument), 
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

## Constructors

### <a id="VM_Models_Post_GeneralMarker__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_String_"></a> GeneralMarker\(ResultDocument, Identifier, string, string\)

```csharp
public GeneralMarker(ResultDocument parentDocument, Identifier analysisResultID, string fullName, string parentName)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`parentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_GeneralMarker_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_GeneralMarker_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_GeneralMarker_GeneralMarkerAnimation"></a> GeneralMarkerAnimation

```csharp
public IGeneralMarkerAnimation GeneralMarkerAnimation { get; }
```

#### Property Value

 [IGeneralMarkerAnimation](VM.Models.Post.IGeneralMarkerAnimation.md)

### <a id="VM_Models_Post_GeneralMarker_GeneralMarkerType"></a> GeneralMarkerType

```csharp
[SaveProperty(false)]
public GeneralMarkerType GeneralMarkerType { get; set; }
```

#### Property Value

 [GeneralMarkerType](VM.Models.Post.GeneralMarkerType.md)

### <a id="VM_Models_Post_GeneralMarker_MarkerAnimation"></a> MarkerAnimation

```csharp
public override IMarkerAnimation MarkerAnimation { get; set; }
```

#### Property Value

 [IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

### <a id="VM_Models_Post_GeneralMarker_Orientation"></a> Orientation

```csharp
public override string Orientation { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_GeneralMarker_ParentName"></a> ParentName

```csharp
[SaveProperty(false)]
public string ParentName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_GeneralMarker_PlottableType"></a> PlottableType

```csharp
public override PlottableType PlottableType { get; }
```

#### Property Value

 [PlottableType](VM.Models.Post.PlottableType.md)

### <a id="VM_Models_Post_GeneralMarker_Position"></a> Position

```csharp
public override string Position { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_GeneralMarker_PrimaryAxis"></a> PrimaryAxis

```csharp
[SaveProperty(false)]
public CoordinateType PrimaryAxis { get; set; }
```

#### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### <a id="VM_Models_Post_GeneralMarker_SecondaryAxis"></a> SecondaryAxis

```csharp
[SaveProperty(false)]
public CoordinateType SecondaryAxis { get; set; }
```

#### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

## Methods

### <a id="VM_Models_Post_GeneralMarker_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_GeneralMarker_TransformChanged"></a> TransformChanged

```csharp
public event EventHandler TransformChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

