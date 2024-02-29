# <a id="VM_Models_Post_EntityBase"></a> Class EntityBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class EntityBase : ObjectBase, IObservableObject, IDisposableObject, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md)

#### Derived

[ActuatorBase](VM.Models.Post.ActuatorBase.md), 
[BodyBase](VM.Models.Post.Bodies.BodyBase.md), 
[BodyComponent](VM.Models.Post.Bodies.BodyComponent.md), 
[Contour](VM.Models.Post.Contour.md), 
[ElementSet](VM.Models.Post.ElementSet.md), 
[Expression](VM.Models.Post.Expression.md), 
[FEPropertyBase](VM.Models.Post.FEProperties.FEPropertyBase.md), 
[FODEquation](VM.Models.Post.FODEquation.md), 
[FatigueMaterial](VM.Models.Post.FatigueMaterial.md), 
[Frequency](VM.Models.Post.Frequency.md), 
[FrequencySequence](VM.Models.Post.FrequencySequence.md), 
[FrequencyTime](VM.Models.Post.FrequencyTime.md), 
[InputChannel](VM.Models.Post.InputChannel.md), 
[MarkerBase](VM.Models.Post.MarkerBase.md), 
[MaterialBase](VM.Models.Post.Materials.MaterialBase.md), 
[NamedSelection](VM.Models.Post.EntityTypes.NamedSelection.md), 
[OutputChannel](VM.Models.Post.OutputChannel.md), 
[PythonExpression](VM.Models.Post.PythonExpression.md), 
[RequestBase](VM.Models.Post.RequestBase.md), 
[SInput](VM.Models.Post.SInput.md), 
[SODEquation](VM.Models.Post.SODEquation.md), 
[SOutput](VM.Models.Post.SOutput.md), 
[Spline](VM.Models.Post.Spline.md), 
[UserSubroutine](VM.Models.Post.UserSubroutine.md), 
[VariableEquation](VM.Models.Post.VariableEquation.md), 
[VectorDisplayBase](VM.Models.Post.VectorDisplayBase.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

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

### <a id="VM_Models_Post_EntityBase__ctor"></a> EntityBase\(\)

```csharp
protected EntityBase()
```

### <a id="VM_Models_Post_EntityBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> EntityBase\(ResultDocument, Identifier, string\)

```csharp
protected EntityBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_EntityBase__ctor_System_String_"></a> EntityBase\(string\)

```csharp
protected EntityBase(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_EntityBase_CategoryType"></a> CategoryType

```csharp
public abstract CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_EntityBase_EntityType"></a> EntityType

```csharp
[SaveProperty(false)]
public abstract EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_EntityBase_HasGeometry"></a> HasGeometry

```csharp
public virtual bool HasGeometry { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EntityBase_ID"></a> ID

```csharp
public Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_Post_EntityBase_Index"></a> Index

```csharp
public int Index { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_EntityBase_InitialValues"></a> InitialValues

```csharp
public double[] InitialValues { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_EntityBase_IsDummy"></a> IsDummy

```csharp
public bool IsDummy { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EntityBase_IsPlottable"></a> IsPlottable

```csharp
public bool IsPlottable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EntityBase_IsSupportedGeneralMode"></a> IsSupportedGeneralMode

```csharp
protected virtual bool IsSupportedGeneralMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EntityBase_IsSupportedVectorDisplayMode"></a> IsSupportedVectorDisplayMode

```csharp
protected virtual bool IsSupportedVectorDisplayMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_EntityBase_IsSupported_VM_Models_Post_EntityFilterMode_"></a> IsSupported\(EntityFilterMode\)

```csharp
public bool IsSupported(EntityFilterMode mode)
```

#### Parameters

`mode` [EntityFilterMode](VM.Models.Post.EntityFilterMode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

