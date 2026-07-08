# Class ObservableObject
<a id="VM_ObservableObject"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides a base class implementing INotifyPropertyChanged

```csharp
public abstract class ObservableObject : IObservableObject, IDisposableObject
```

#### Inheritance

object ← 
[ObservableObject](VM.ObservableObject.md)

#### Derived

[CommandBase](VM.CommandBase.md), 
[DataPoint](VM.DataPoint.md), 
[KeyValue<TKey, TValue\>](VM.KeyValue\-2.md)

#### Implements

[IObservableObject](VM.IObservableObject.md), 
[IDisposableObject](VM.IDisposableObject.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

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

 bool

### <a id="VM_ObservableObject_TryDisposing"></a> TryDisposing

```csharp
[Browsable(false)]
public bool TryDisposing { get; }
```

#### Property Value

 bool

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

`disposing` bool

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

`propertyName` string

### <a id="VM_ObservableObject_RaisePropertyChanged_System_String_System_Object_System_Object_"></a> RaisePropertyChanged\(string, object, object\)

```csharp
public virtual void RaisePropertyChanged(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` string

`oldValue` object

`newValue` object

### <a id="VM_ObservableObject_Disposed"></a> Disposed

```csharp
public event EventHandler Disposed
```

#### Event Type

 EventHandler

### <a id="VM_ObservableObject_Disposing"></a> Disposing

```csharp
public event EventHandler Disposing
```

#### Event Type

 EventHandler

### <a id="VM_ObservableObject_PropertyChanged"></a> PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 PropertyChangedEventHandler

