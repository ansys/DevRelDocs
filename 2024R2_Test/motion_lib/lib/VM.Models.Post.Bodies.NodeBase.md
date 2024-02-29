# <a id="VM_Models_Post_Bodies_NodeBase"></a> Class NodeBase

Namespace: [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class NodeBase : BodyComponent, IObservableObject, IDisposableObject, INode, IBodyComponent, IComponent, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[BodyComponent](VM.Models.Post.Bodies.BodyComponent.md) ← 
[NodeBase](VM.Models.Post.Bodies.NodeBase.md)

#### Derived

[EFModalNode](VM.Models.Post.Bodies.EFModalNode.md), 
[EFNodalNode](VM.Models.Post.Bodies.EFNodalNode.md), 
[ModalNode](VM.Models.Post.Bodies.ModalNode.md), 
[NodalNode](VM.Models.Post.Bodies.NodalNode.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[INode](VM.Models.Post.INode.md), 
[IBodyComponent](VM.Models.Post.IBodyComponent.md), 
[IComponent](VM.Models.Post.IComponent.md), 
[IPlottable](VM.Models.Post.IPlottable.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[BodyComponent.ChangeIdInfo\(int, int\)](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_ChangeIdInfo\_System\_Int32\_System\_Int32\_), 
[BodyComponent.DisposeManagedResources\(\)](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_DisposeManagedResources), 
[BodyComponent.ComponentID](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_ComponentID), 
[BodyComponent.Parent](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_Parent), 
[BodyComponent.ParentBodyIndex](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_ParentBodyIndex), 
[BodyComponent.Source](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_Source), 
[BodyComponent.SubPath](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_SubPath), 
[BodyComponent.CanLoad](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_CanLoad), 
[BodyComponent.CanSave](VM.Models.Post.Bodies.BodyComponent.md\#VM\_Models\_Post\_Bodies\_BodyComponent\_CanSave), 
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

### <a id="VM_Models_Post_Bodies_NodeBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_VM_Models_Post_HitItemNodeInfo_"></a> NodeBase\(ResultDocument, Identifier, string, HitItemNodeInfo\)

```csharp
protected NodeBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName, HitItemNodeInfo hitItemNodeInfo)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`hitItemNodeInfo` [HitItemNodeInfo](VM.Models.Post.HitItemNodeInfo.md)

## Properties

### <a id="VM_Models_Post_Bodies_NodeBase_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_NodeBase_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_Bodies_NodeBase_DisplayName"></a> DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Bodies_NodeBase_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_Bodies_NodeBase_IsSupportedGeneralMode"></a> IsSupportedGeneralMode

```csharp
protected override bool IsSupportedGeneralMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_NodeBase_PlotDataType"></a> PlotDataType

```csharp
public PlotDataType PlotDataType { get; init; }
```

#### Property Value

 PlotDataType

### <a id="VM_Models_Post_Bodies_NodeBase_PlottableType"></a> PlottableType

```csharp
public PlottableType PlottableType { get; }
```

#### Property Value

 [PlottableType](VM.Models.Post.PlottableType.md)

## Methods

### <a id="VM_Models_Post_Bodies_NodeBase_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

