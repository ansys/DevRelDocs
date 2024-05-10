# Class CommandStepItem

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public abstract class CommandStepItem : ObservableObject, IObservableObject, IDisposableObject, IStepItem, IHasParent<IStep>, IHasName, IVisible, IEnabled
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[CommandStepItem](VM.Models.CommandStepItem.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IStepItem](VM.Models.IStepItem.md), 
IHasParent<IStep\>, 
IHasName, 
IVisible, 
IEnabled

#### Inherited Members

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

### CommandStepItem\(\)

```csharp
protected CommandStepItem()
```

## Properties

### Command

```csharp
public ICommand Command { get; protected set; }
```

#### Property Value

 [ICommand](https://learn.microsoft.com/dotnet/api/system.windows.input.icommand)

### DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Icon

```csharp
public object Icon { get; protected set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### IsEnabled

```csharp
public bool IsEnabled { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVisible

```csharp
public bool IsVisible { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parent

```csharp
public IStep Parent { get; protected set; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### ToolTip

```csharp
public string ToolTip { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### Initialize\(\)

```csharp
public abstract void Initialize()
```


