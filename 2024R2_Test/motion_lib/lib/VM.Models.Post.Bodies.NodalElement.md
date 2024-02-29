# <a id="VM_Models_Post_Bodies_NodalElement"></a> Class NodalElement

Namespace: [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class NodalElement : ElementBase, IObservableObject, IDisposableObject, IPlottable, INodalElement, IElement, IBodyComponent, IComponent, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[BodyComponent](VM.Models.Post.Bodies.BodyComponent.md) ← 
[ElementBase](VM.Models.Post.Bodies.ElementBase.md) ← 
[NodalElement](VM.Models.Post.Bodies.NodalElement.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IPlottable](VM.Models.Post.IPlottable.md), 
[INodalElement](VM.Models.Post.INodalElement.md), 
[IElement](VM.Models.Post.IElement.md), 
[IBodyComponent](VM.Models.Post.IBodyComponent.md), 
[IComponent](VM.Models.Post.IComponent.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[ElementBase.CategoryType](VM.Models.Post.Bodies.ElementBase.md\#VM\_Models\_Post\_Bodies\_ElementBase\_CategoryType), 
[ElementBase.DisplayName](VM.Models.Post.Bodies.ElementBase.md\#VM\_Models\_Post\_Bodies\_ElementBase\_DisplayName), 
[ElementBase.ElementType](VM.Models.Post.Bodies.ElementBase.md\#VM\_Models\_Post\_Bodies\_ElementBase\_ElementType), 
[ElementBase.EntityType](VM.Models.Post.Bodies.ElementBase.md\#VM\_Models\_Post\_Bodies\_ElementBase\_EntityType), 
[ElementBase.PlotDataType](VM.Models.Post.Bodies.ElementBase.md\#VM\_Models\_Post\_Bodies\_ElementBase\_PlotDataType), 
[ElementBase.PlottableType](VM.Models.Post.Bodies.ElementBase.md\#VM\_Models\_Post\_Bodies\_ElementBase\_PlottableType), 
[BodyComponent.ChangeIdInfo\(int, int\)](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_ChangeIdInfo\_System\_Int32\_System\_Int32\_), 
[BodyComponent.ComponentID](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_ComponentID), 
[BodyComponent.Parent](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_Parent), 
[BodyComponent.ParentBodyIndex](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_ParentBodyIndex), 
[BodyComponent.Source](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_Source), 
[BodyComponent.SubPath](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_SubPath), 
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

