# Interface IDisposableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public interface IDisposableObject
```

## Properties

### IsDisposed

```python
bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryDisposing

```python
bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Disposed

```python
event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### Disposing

```python
event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)


