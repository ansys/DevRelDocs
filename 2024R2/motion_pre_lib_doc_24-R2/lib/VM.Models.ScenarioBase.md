# Class ScenarioBase

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public abstract class ScenarioBase : ProjectObjectBase, IObservableObject, IScenario, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ProjectObjectBase](VM.Models.ProjectObjectBase.md) ← 
[ScenarioBase](VM.Models.ScenarioBase.md)

#### Implements

IObservableObject, 
[IScenario](VM.Models.IScenario.md), 
[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IProjectDocument\>

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

### ScenarioBase\(IProjectDocument, string\)

```csharp
public ScenarioBase(IProjectDocument parent, string name)
```

#### Parameters

`parent` [IProjectDocument](VM.Models.IProjectDocument.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### CategoryName

```csharp
[Browsable(false)]
public abstract string CategoryName { get; }
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
public IEnumerable<IStep> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStep](VM.Models.IStep.md)\>

### Left

```csharp
[Browsable(false)]
public double Left { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Name

```csharp
public override string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parent

```csharp
[Browsable(false)]
public IProjectDocument Parent { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### ParentDocument

```csharp
[Browsable(false)]
public IProjectDocument ParentDocument { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### Top

```csharp
[Browsable(false)]
public double Top { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Identifier\]

```csharp
public IStep this[Identifier identifier] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### this\[int\]

```csharp
public IStep this[int index] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

## Methods

### Add\(IStep\)

```csharp
public void Add(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### Clear\(\)

```csharp
public void Clear()
```

### DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### Remove\(IStep\)

```csharp
public void Remove(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### TryGetItem\(Identifier, out IStep\)

```csharp
public bool TryGetItem(Identifier identifier, out IStep item)
```

#### Parameters

`identifier` Identifier

`item` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


