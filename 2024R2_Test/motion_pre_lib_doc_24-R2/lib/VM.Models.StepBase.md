# Class StepBase

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public abstract class StepBase : ProjectObjectBase, IObservableObject, IStep, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IScenario>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

### StepBase\(IScenario\)

```csharp
public StepBase(IScenario parent)
```

#### Parameters

`parent` [IScenario](VM.Models.IScenario.md)

## Properties

### DefaultCommand

```csharp
[Browsable(false)]
public ICommand DefaultCommand { get; protected set; }
```

#### Property Value

 [ICommand](https://learn.microsoft.com/dotnet/api/system.windows.input.icommand)

### FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsSelected

```csharp
[Browsable(false)]
public bool IsSelected { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Items

```csharp
public IEnumerable<IStepItem> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>

### Parent

```csharp
[Browsable(false)]
public IScenario Parent { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### ParentDocument

```csharp
[Browsable(false)]
public IProjectDocument ParentDocument { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### Source

```csharp
[Browsable(false)]
public IStep Source { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### State

```csharp
public StepState State { get; protected set; }
```

#### Property Value

 [StepState](VM.Models.StepState.md)

### StepItemService

```csharp
protected IStepItemService StepItemService { get; }
```

#### Property Value

 [IStepItemService](VM.Models.IStepItemService.md)

### TargetApplicationType

```csharp
public abstract ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### Type

```csharp
[Browsable(false)]
public abstract StepType Type { get; }
```

#### Property Value

 [StepType](VM.Models.StepType.md)

### this\[int\]

```csharp
public IStepItem this[int index] { get; }
```

#### Property Value

 [IStepItem](VM.Models.IStepItem.md)

## Methods

### Add\(IStepItem\)

```csharp
public void Add(IStepItem item)
```

#### Parameters

`item` [IStepItem](VM.Models.IStepItem.md)

### AddTarget\(IStep\)

```csharp
public void AddTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### CanRelation\(IStep\)

```csharp
public virtual bool CanRelation(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsTarget\(IStep\)

```csharp
public bool ContainsTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### OnDeserialization\(object\)

```csharp
public override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

### RemoveTarget\(IStep\)

```csharp
public void RemoveTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### ResetSource\(\)

```csharp
public virtual void ResetSource()
```

### SetSource\(IStep\)

```csharp
public virtual void SetSource(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)


