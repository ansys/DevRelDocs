# <a id="VM_Models_Post_ResultMarker"></a> Class ResultMarker

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ResultMarker : MarkerBase, IObservableObject, IDisposableObject, IResultMarker, IMarker, IVisible, IComponent, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[MarkerBase](VM.Models.Post.MarkerBase.md) ← 
[ResultMarker](VM.Models.Post.ResultMarker.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IResultMarker](VM.Models.Post.IResultMarker.md), 
[IMarker](VM.Models.Post.IMarker.md), 
IVisible, 
[IComponent](VM.Models.Post.IComponent.md), 
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

### <a id="VM_Models_Post_ResultMarker__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> ResultMarker\(ResultDocument, Identifier, string\)

```csharp
public ResultMarker(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_ResultMarker_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_ResultMarker_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_ResultMarker_IsVisible"></a> IsVisible

```csharp
public override bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultMarker_IsVisibleLabel"></a> IsVisibleLabel

```csharp
public override bool IsVisibleLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultMarker_IsVisibleTrajectory"></a> IsVisibleTrajectory

```csharp
public override bool IsVisibleTrajectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ResultMarker_Parent"></a> Parent

```csharp
public IEntity Parent { get; }
```

#### Property Value

 [IEntity](VM.Models.Post.IEntity.md)

### <a id="VM_Models_Post_ResultMarker_ParentBodyIndex"></a> ParentBodyIndex

```csharp
public int ParentBodyIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultMarker_ParentNodeIndex"></a> ParentNodeIndex

```csharp
public int ParentNodeIndex { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ResultMarker_ParentType"></a> ParentType

```csharp
public ParentType ParentType { get; init; }
```

#### Property Value

 [ParentType](VM.Models.Post.ParentType.md)

### <a id="VM_Models_Post_ResultMarker_PlottableType"></a> PlottableType

```csharp
public override PlottableType PlottableType { get; }
```

#### Property Value

 [PlottableType](VM.Models.Post.PlottableType.md)

### <a id="VM_Models_Post_ResultMarker_SubPath"></a> SubPath

```csharp
public string SubPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

