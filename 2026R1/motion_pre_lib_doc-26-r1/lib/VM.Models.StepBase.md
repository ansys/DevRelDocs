# Class StepBase
<a id="VM_Models_StepBase"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public abstract class StepBase : ProjectObjectBase, IObservableObject, IStep, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IScenario>
```

#### Inheritance

object ← 
ObservableObject ← 
[ProjectObjectBase](VM.Models.ProjectObjectBase.md) ← 
[StepBase](VM.Models.StepBase.md)

#### Implements

IObservableObject, 
[IStep](VM.Models.IStep.md), 
[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IScenario\>

#### Inherited Members

[ProjectObjectBase.OnDeserialization\(object\)](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_OnDeserialization\_System\_Object\_), 
[ProjectObjectBase.DisposeManagedResources\(\)](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_DisposeManagedResources), 
[ProjectObjectBase.DisplayName](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_DisplayName), 
[ProjectObjectBase.ID](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_ID), 
[ProjectObjectBase.Name](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_Name), 
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

### <a id="VM_Models_StepBase__ctor_VM_Models_IScenario_"></a> StepBase\(IScenario\)

```csharp
public StepBase(IScenario parent)
```

#### Parameters

`parent` [IScenario](VM.Models.IScenario.md)

## Properties

### <a id="VM_Models_StepBase_DefaultCommand"></a> DefaultCommand

```csharp
[Browsable(false)]
public ICommand DefaultCommand { get; protected set; }
```

#### Property Value

 ICommand

### <a id="VM_Models_StepBase_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_StepBase_IsSelected"></a> IsSelected

```csharp
[Browsable(false)]
public bool IsSelected { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_StepBase_Items"></a> Items

```csharp
public IEnumerable<IStepItem> Items { get; }
```

#### Property Value

 IEnumerable<[IStepItem](VM.Models.IStepItem.md)\>

### <a id="VM_Models_StepBase_Parent"></a> Parent

```csharp
[Browsable(false)]
public IScenario Parent { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### <a id="VM_Models_StepBase_ParentDocument"></a> ParentDocument

```csharp
[Browsable(false)]
public IProjectDocument ParentDocument { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### <a id="VM_Models_StepBase_Source"></a> Source

```csharp
[Browsable(false)]
public IStep Source { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### <a id="VM_Models_StepBase_State"></a> State

```csharp
public StepState State { get; protected set; }
```

#### Property Value

 [StepState](VM.Models.StepState.md)

### <a id="VM_Models_StepBase_StepItemService"></a> StepItemService

```csharp
protected IStepItemService StepItemService { get; }
```

#### Property Value

 [IStepItemService](VM.Models.IStepItemService.md)

### <a id="VM_Models_StepBase_TargetApplicationType"></a> TargetApplicationType

```csharp
public abstract ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### <a id="VM_Models_StepBase_Type"></a> Type

```csharp
[Browsable(false)]
public abstract StepType Type { get; }
```

#### Property Value

 [StepType](VM.Models.StepType.md)

### <a id="VM_Models_StepBase_Item_System_Int32_"></a> this\[int\]

```csharp
public IStepItem this[int index] { get; }
```

#### Property Value

 [IStepItem](VM.Models.IStepItem.md)

## Methods

### <a id="VM_Models_StepBase_Add_VM_Models_IStepItem_"></a> Add\(IStepItem\)

```csharp
public void Add(IStepItem item)
```

#### Parameters

`item` [IStepItem](VM.Models.IStepItem.md)

### <a id="VM_Models_StepBase_AddTarget_VM_Models_IStep_"></a> AddTarget\(IStep\)

```csharp
public void AddTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_StepBase_CanRelation_VM_Models_IStep_"></a> CanRelation\(IStep\)

```csharp
public virtual bool CanRelation(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)

#### Returns

 bool

### <a id="VM_Models_StepBase_ContainsTarget_VM_Models_IStep_"></a> ContainsTarget\(IStep\)

```csharp
public bool ContainsTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

#### Returns

 bool

### <a id="VM_Models_StepBase_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_StepBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

```csharp
public override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

### <a id="VM_Models_StepBase_RemoveTarget_VM_Models_IStep_"></a> RemoveTarget\(IStep\)

```csharp
public void RemoveTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_StepBase_ResetSource"></a> ResetSource\(\)

```csharp
public virtual void ResetSource()
```

### <a id="VM_Models_StepBase_SetSource_VM_Models_IStep_"></a> SetSource\(IStep\)

```csharp
public virtual void SetSource(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)

