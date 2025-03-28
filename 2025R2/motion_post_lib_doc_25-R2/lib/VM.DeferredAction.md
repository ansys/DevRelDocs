# Class DeferredAction

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public class DeferredAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[DeferredAction](VM.DeferredAction.md)

## Methods

### Cancel\(\)

```python
public void Cancel()
```

### Create\(Action\)

```python
public static DeferredAction Create(Action action)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [DeferredAction](VM.DeferredAction.md)

### Defer\(TimeSpan\)

```python
public void Defer(TimeSpan delay)
```

#### Parameters

`delay` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

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

### \~DeferredAction\(\)

```python
protected ~DeferredAction()
```


