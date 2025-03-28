# Class ObservableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides a base class implementing INotifyPropertyChanged

```python
public abstract class ObservableObject : IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[ObservableObject](VM.ObservableObject.md)

#### Derived

[CommandBase](VM.CommandBase.md), 
[DataPoint](VM.DataPoint.md), 
[KeyValue<TKey, TValue\>](VM.KeyValue\-2.md)

#### Implements

[IObservableObject](VM.IObservableObject.md), 
[IDisposableObject](VM.IDisposableObject.md)

## Constructors

### ObservableObject\(\)

```python
protected ObservableObject()
```

## Properties

### IsDisposed

```python
[Browsable(false)]
public bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryDisposing

```python
[Browsable(false)]
public bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Dispose\(\)

```python
public void Dispose()
```

### Dispose\(bool\)

```python
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisposeManagedResources\(\)

```python
protected virtual void DisposeManagedResources()
```

### DisposeUnmanagedResources\(\)

```python
protected virtual void DisposeUnmanagedResources()
```

### RaisePropertyChanged\(string\)

```python
public virtual void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### RaisePropertyChanged\(string, object, object\)

```python
public virtual void RaisePropertyChanged(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`oldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

`newValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

### Disposed

```python
public event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### Disposing

```python
public event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### PropertyChanged

```python
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)


