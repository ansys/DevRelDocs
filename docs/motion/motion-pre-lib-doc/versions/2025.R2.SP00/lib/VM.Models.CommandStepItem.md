#  Class CommandStepItem

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

### <a id="VM_Models_CommandStepItem__ctor"></a> CommandStepItem\(\)

```csharp
protected CommandStepItem()
```

## Properties

### <a id="VM_Models_CommandStepItem_Command"></a> Command

```csharp
public ICommand Command { get; protected set; }
```

#### Property Value

 [ICommand](https://learn.microsoft.com/dotnet/api/system.windows.input.icommand)

### <a id="VM_Models_CommandStepItem_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_CommandStepItem_Icon"></a> Icon

```csharp
public object Icon { get; protected set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Models_CommandStepItem_IsEnabled"></a> IsEnabled

```csharp
public bool IsEnabled { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_CommandStepItem_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_CommandStepItem_Name"></a> Name

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_CommandStepItem_Parent"></a> Parent

```csharp
public IStep Parent { get; protected set; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### <a id="VM_Models_CommandStepItem_ToolTip"></a> ToolTip

```csharp
public string ToolTip { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_CommandStepItem_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_CommandStepItem_Initialize"></a> Initialize\(\)

```csharp
public abstract void Initialize()
```

