# Class CommandBase

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public abstract class CommandBase : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[ObservableObject](VM.ObservableObject.md) ??
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

## Constructors

### CommandBase\(Func<object, bool\>\)

```python
public CommandBase(Func<object, bool> canExecute)
```

#### Parameters

`canExecute` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[object](https://learn.microsoft.com/dotnet/api/system.object), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Properties

### Description

```python
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsExecuting

```python
protected bool IsExecuting { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CanExecute\(object\)

```python
public bool CanExecute(object parameter)
```

#### Parameters

`parameter` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnCanExecuteChanged\(\)

```python
protected void OnCanExecuteChanged()
```

### OnShouldExecute\(\)

```python
protected void OnShouldExecute()
```

### CanExecuteChanged

```python
public virtual event EventHandler CanExecuteChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### ShouldExecute

```python
public event EventHandler ShouldExecute
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)


