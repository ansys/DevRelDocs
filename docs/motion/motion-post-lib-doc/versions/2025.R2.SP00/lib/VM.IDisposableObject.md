#  Interface IDisposableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public interface IDisposableObject
```

## Properties

### <a id="VM_IDisposableObject_IsDisposed"></a> IsDisposed

```python
bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_IDisposableObject_TryDisposing"></a> TryDisposing

```python
bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_IDisposableObject_Disposed"></a> Disposed

```python
event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_IDisposableObject_Disposing"></a> Disposing

```python
event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)


