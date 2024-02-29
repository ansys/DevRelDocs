# <a id="VM_Models_Post_Bodies_Ground"></a> Class Ground

Namespace: [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class Ground : BodyBase, IObservableObject, IDisposableObject, IBody, IBodyBase, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[BodyBase](VM.Models.Post.Bodies.BodyBase.md) ← 
[Ground](VM.Models.Post.Bodies.Ground.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IBody](VM.Models.Post.IBody.md), 
[IBodyBase](VM.Models.Post.IBodyBase.md), 
[IPlottable](VM.Models.Post.IPlottable.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[BodyBase.ContainsMarker\(int\)](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_ContainsMarker\_System\_Int32\_), 
[BodyBase.ContainsPartIndex\(int\)](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_ContainsPartIndex\_System\_Int32\_), 
[BodyBase.AssociatedParts](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_AssociatedParts), 
[BodyBase.BodyType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_BodyType), 
[BodyBase.Color](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_Color), 
[BodyBase.CoordinateSystem](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_CoordinateSystem), 
[BodyBase.DataParts](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_DataParts), 
[BodyBase.DisplacementVisible](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_DisplacementVisible), 
[BodyBase.DisplayName](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_DisplayName), 
[BodyBase.EntityType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_EntityType), 
[BodyBase.FringeVisible](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_FringeVisible), 
[BodyBase.IsVisible](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_IsVisible), 
[BodyBase.PlottableType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_PlottableType), 
[BodyBase.PointSize](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_PointSize), 
[BodyBase.RenderType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_RenderType), 
[BodyBase.SmoothShading](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_SmoothShading), 
[BodyBase.TextureImage](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_TextureImage), 
[BodyBase.Transparency](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_Transparency), 
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

### <a id="VM_Models_Post_Bodies_Ground__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> Ground\(ResultDocument, Identifier, string, int\[\]\)

```csharp
public Ground(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Bodies_Ground_BodyType"></a> BodyType

```csharp
public override BodyType BodyType { get; }
```

#### Property Value

 [BodyType](VM.Models.Post.BodyType.md)

### <a id="VM_Models_Post_Bodies_Ground_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_Ground_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_Ground_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_Bodies_Ground_HasGeometry"></a> HasGeometry

```csharp
public override bool HasGeometry { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_Ground_PlottableType"></a> PlottableType

```csharp
public override PlottableType PlottableType { get; }
```

#### Property Value

 [PlottableType](VM.Models.Post.PlottableType.md)

