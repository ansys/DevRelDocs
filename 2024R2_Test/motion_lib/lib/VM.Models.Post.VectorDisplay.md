# <a id="VM_Models_Post_VectorDisplay"></a> Class VectorDisplay

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class VectorDisplay : VectorDisplayBase, IObservableObject, IDisposableObject, IVectorDisplay, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[VectorDisplayBase](VM.Models.Post.VectorDisplayBase.md) ← 
[VectorDisplay](VM.Models.Post.VectorDisplay.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IVectorDisplay](VM.Models.Post.IVectorDisplay.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[VectorDisplayBase.GetVectorDisplayKey\(\)](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_GetVectorDisplayKey), 
[VectorDisplayBase.UpdateCharacteristic\(string\)](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_UpdateCharacteristic\_System\_String\_), 
[VectorDisplayBase.CategoryType](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_CategoryType), 
[VectorDisplayBase.Characteristic](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_Characteristic), 
[VectorDisplayBase.EntityType](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_EntityType), 
[VectorDisplayBase.FullName](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_FullName), 
[VectorDisplayBase.IsLabel](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_IsLabel), 
[VectorDisplayBase.IsVisible](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_IsVisible), 
[VectorDisplayBase.LabelBackGroundColor](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_LabelBackGroundColor), 
[VectorDisplayBase.LabelTextColor](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_LabelTextColor), 
[VectorDisplayBase.ParentCategoryName](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_ParentCategoryName), 
[VectorDisplayBase.ParentCategoryType](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_ParentCategoryType), 
[VectorDisplayBase.Target](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_Target), 
[VectorDisplayBase.Type](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_Type), 
[VectorDisplayBase.VectorDisplayBaseData](VM.Models.Post.VectorDisplayBase.md\#VM\_Models\_Post\_VectorDisplayBase\_VectorDisplayBaseData), 
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

### <a id="VM_Models_Post_VectorDisplay__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_VM_Models_Post_IVectorDisplayable_System_String_"></a> VectorDisplay\(ResultDocument, Identifier, string, IVectorDisplayable, string\)

```csharp
public VectorDisplay(ResultDocument parentDocument, Identifier analysisResultID, string fullName, IVectorDisplayable target, string characteristic)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`target` [IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_VectorDisplay_Color"></a> Color

```csharp
[SaveProperty(false)]
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VectorDisplay_IsLog"></a> IsLog

```csharp
[SaveProperty(false)]
public bool IsLog { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VectorDisplay_Scale"></a> Scale

```csharp
[SaveProperty(false)]
public double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

