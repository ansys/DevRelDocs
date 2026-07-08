#  Class ObservableObject

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

### <a id="VM_ObservableObject__ctor"></a> ObservableObject\(\)

```csharp
protected ObservableObject()
```

## Properties

### <a id="VM_ObservableObject_IsDisposed"></a> IsDisposed

```csharp
[Browsable(false)]
public bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_ObservableObject_TryDisposing"></a> TryDisposing

```csharp
[Browsable(false)]
public bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_ObservableObject_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_ObservableObject_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_ObservableObject_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected virtual void DisposeManagedResources()
```

### <a id="VM_ObservableObject_DisposeUnmanagedResources"></a> DisposeUnmanagedResources\(\)

```csharp
protected virtual void DisposeUnmanagedResources()
```

### <a id="VM_ObservableObject_RaisePropertyChanged_System_String_"></a> RaisePropertyChanged\(string\)

```csharp
public virtual void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_ObservableObject_RaisePropertyChanged_System_String_System_Object_System_Object_"></a> RaisePropertyChanged\(string, object, object\)

```csharp
public virtual void RaisePropertyChanged(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`oldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

`newValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_ObservableObject_Disposed"></a> Disposed

```csharp
public event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_ObservableObject_Disposing"></a> Disposing

```csharp
public event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_ObservableObject_PropertyChanged"></a> PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

