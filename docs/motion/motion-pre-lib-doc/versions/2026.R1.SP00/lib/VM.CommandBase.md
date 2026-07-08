# Class CommandBase
<a id="VM_CommandBase"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public abstract class CommandBase : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

object ← 
[ObservableObject](VM.ObservableObject.md) ← 
[CommandBase](VM.CommandBase.md)

#### Implements

[IObservableObject](VM.IObservableObject.md), 
[IDisposableObject](VM.IDisposableObject.md)

#### Inherited Members

[ObservableObject.Dispose\(\)](VM.ObservableObject.md\#VM\_ObservableObject\_Dispose), 
[ObservableObject.RaisePropertyChanged\(string\)](VM.ObservableObject.md\#VM\_ObservableObject\_RaisePropertyChanged\_System\_String\_), 
[ObservableObject.RaisePropertyChanged\(string, object, object\)](VM.ObservableObject.md\#VM\_ObservableObject\_RaisePropertyChanged\_System\_String\_System\_Object\_System\_Object\_), 
[ObservableObject.Dispose\(bool\)](VM.ObservableObject.md\#VM\_ObservableObject\_Dispose\_System\_Boolean\_), 
[ObservableObject.DisposeManagedResources\(\)](VM.ObservableObject.md\#VM\_ObservableObject\_DisposeManagedResources), 
[ObservableObject.DisposeUnmanagedResources\(\)](VM.ObservableObject.md\#VM\_ObservableObject\_DisposeUnmanagedResources), 
[ObservableObject.IsDisposed](VM.ObservableObject.md\#VM\_ObservableObject\_IsDisposed), 
[ObservableObject.TryDisposing](VM.ObservableObject.md\#VM\_ObservableObject\_TryDisposing), 
[ObservableObject.Disposed](VM.ObservableObject.md\#VM\_ObservableObject\_Disposed), 
[ObservableObject.Disposing](VM.ObservableObject.md\#VM\_ObservableObject\_Disposing), 
[ObservableObject.PropertyChanged](VM.ObservableObject.md\#VM\_ObservableObject\_PropertyChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CommandBase__ctor_System_Func_System_Object_System_Boolean__"></a> CommandBase\(Func<object, bool\>\)

```csharp
public CommandBase(Func<object, bool> canExecute)
```

#### Parameters

`canExecute` Func<object, bool\>

## Properties

### <a id="VM_CommandBase_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="VM_CommandBase_IsExecuting"></a> IsExecuting

```csharp
protected bool IsExecuting { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_CommandBase_CanExecute_System_Object_"></a> CanExecute\(object\)

```csharp
public bool CanExecute(object parameter)
```

#### Parameters

`parameter` object

#### Returns

 bool

### <a id="VM_CommandBase_OnCanExecuteChanged"></a> OnCanExecuteChanged\(\)

```csharp
protected void OnCanExecuteChanged()
```

### <a id="VM_CommandBase_OnShouldExecute"></a> OnShouldExecute\(\)

```csharp
protected void OnShouldExecute()
```

### <a id="VM_CommandBase_CanExecuteChanged"></a> CanExecuteChanged

```csharp
public virtual event EventHandler CanExecuteChanged
```

#### Event Type

 EventHandler

### <a id="VM_CommandBase_ShouldExecute"></a> ShouldExecute

```csharp
public event EventHandler ShouldExecute
```

#### Event Type

 EventHandler

