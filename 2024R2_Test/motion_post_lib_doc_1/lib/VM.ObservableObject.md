# Class ObservableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides a base class implementing INotifyPropertyChanged

```csharp
public abstract class ObservableObject : IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

```csharp
protected ObservableObject()
```

## Properties

### IsDisposed

```csharp
[Browsable(false)]
public bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryDisposing

```csharp
[Browsable(false)]
public bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Dispose\(\)

```csharp
public void Dispose()
```

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisposeManagedResources\(\)

```csharp
protected virtual void DisposeManagedResources()
```

### DisposeUnmanagedResources\(\)

```csharp
protected virtual void DisposeUnmanagedResources()
```

### RaisePropertyChanged\(string\)

```csharp
public virtual void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### RaisePropertyChanged\(string, object, object\)

```csharp
public virtual void RaisePropertyChanged(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`oldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

`newValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

### Disposed

```csharp
public event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### Disposing

```csharp
public event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)


