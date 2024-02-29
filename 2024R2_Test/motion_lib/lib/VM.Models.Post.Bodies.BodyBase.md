# <a id="VM_Models_Post_Bodies_BodyBase"></a> Class BodyBase

Namespace: [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class BodyBase : EntityBase, IObservableObject, IDisposableObject, IBody, IBodyBase, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[BodyBase](VM.Models.Post.Bodies.BodyBase.md)

#### Derived

[FEBody](VM.Models.Post.Bodies.FEBody.md), 
[Ground](VM.Models.Post.Bodies.Ground.md), 
[Rigid](VM.Models.Post.Bodies.Rigid.md)

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

[EntityBase.IsSupported\(EntityFilterMode\)](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupported\_VM\_Models\_Post\_EntityFilterMode\_), 
[EntityBase.CategoryType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[EntityBase.HasGeometry](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_HasGeometry), 
[EntityBase.ID](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_ID), 
[EntityBase.Index](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_Index), 
[EntityBase.InitialValues](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_InitialValues), 
[EntityBase.IsDummy](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsDummy), 
[EntityBase.IsPlottable](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsPlottable), 
[EntityBase.IsSupportedGeneralMode](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupportedGeneralMode), 
[EntityBase.IsSupportedVectorDisplayMode](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupportedVectorDisplayMode), 
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
[ObjectBase.CanLoad](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanLoad), 
[ObjectBase.CanSave](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanSave), 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_Bodies_BodyBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> BodyBase\(ResultDocument, Identifier, string, int\[\]\)

```csharp
protected BodyBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Bodies_BodyBase_AssociatedParts"></a> AssociatedParts

```csharp
public IList<IDataPart> AssociatedParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataPart](VM.Models.Post.IDataPart.md)\>

### <a id="VM_Models_Post_Bodies_BodyBase_BodyType"></a> BodyType

```csharp
[SaveProperty(false)]
public abstract BodyType BodyType { get; }
```

#### Property Value

 [BodyType](VM.Models.Post.BodyType.md)

### <a id="VM_Models_Post_Bodies_BodyBase_Color"></a> Color

```csharp
[SaveProperty(false)]
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Bodies_BodyBase_CoordinateSystem"></a> CoordinateSystem

```csharp
[SaveProperty(false)]
public virtual GeneralMarker CoordinateSystem { get; set; }
```

#### Property Value

 [GeneralMarker](VM.Models.Post.GeneralMarker.md)

### <a id="VM_Models_Post_Bodies_BodyBase_DataParts"></a> DataParts

```csharp
public IList<IDataPart> DataParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataPart](VM.Models.Post.IDataPart.md)\>

### <a id="VM_Models_Post_Bodies_BodyBase_DisplacementVisible"></a> DisplacementVisible

```csharp
[SaveProperty(false)]
public bool DisplacementVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_BodyBase_DisplayName"></a> DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Bodies_BodyBase_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_Bodies_BodyBase_FringeVisible"></a> FringeVisible

```csharp
[SaveProperty(false)]
public bool FringeVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_BodyBase_IsVisible"></a> IsVisible

```csharp
[SaveProperty(false)]
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_BodyBase_PlottableType"></a> PlottableType

```csharp
public abstract PlottableType PlottableType { get; }
```

#### Property Value

 [PlottableType](VM.Models.Post.PlottableType.md)

### <a id="VM_Models_Post_Bodies_BodyBase_PointSize"></a> PointSize

```csharp
[SaveProperty(false)]
public double PointSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Bodies_BodyBase_RenderType"></a> RenderType

```csharp
[SaveProperty(false)]
public RenderingType RenderType { get; set; }
```

#### Property Value

 [RenderingType](VM.Models.Post.RenderingType.md)

### <a id="VM_Models_Post_Bodies_BodyBase_SmoothShading"></a> SmoothShading

```csharp
[SaveProperty(false)]
public bool SmoothShading { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_BodyBase_TextureImage"></a> TextureImage

```csharp
public Bitmap TextureImage { get; set; }
```

#### Property Value

 Bitmap

### <a id="VM_Models_Post_Bodies_BodyBase_Transparency"></a> Transparency

```csharp
[SaveProperty(false)]
public double Transparency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Post_Bodies_BodyBase_ContainsMarker_System_Int32_"></a> ContainsMarker\(int\)

```csharp
public bool ContainsMarker(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_BodyBase_ContainsPartIndex_System_Int32_"></a> ContainsPartIndex\(int\)

```csharp
public bool ContainsPartIndex(int partIndex)
```

#### Parameters

`partIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

