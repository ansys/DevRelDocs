# <a id="VM_Models_Post_ElementSet"></a> Class ElementSet

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ElementSet : EntityBase, IObservableObject, IDisposableObject, IEntity, IObject, IHasName, IHasIndex, IHasID, IVisible
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[ElementSet](VM.Models.Post.ElementSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID, 
IVisible

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

### <a id="VM_Models_Post_ElementSet__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> ElementSet\(ResultDocument, Identifier, string\)

```csharp
public ElementSet(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_ElementSet_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ElementSet_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ElementSet_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_ElementSet_DataElementSetID"></a> DataElementSetID

```csharp
public Identifier DataElementSetID { get; init; }
```

#### Property Value

 Identifier

### <a id="VM_Models_Post_ElementSet_DisplayName"></a> DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ElementSet_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_ElementSet_IsVisible"></a> IsVisible

```csharp
[SaveProperty(false)]
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ElementSet_ParentBodyIndex"></a> ParentBodyIndex

```csharp
public int ParentBodyIndex { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

