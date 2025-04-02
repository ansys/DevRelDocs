#  Class DeferredAction

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public class DeferredAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DeferredAction](VM.DeferredAction.md)

## Methods

### <a id="VM_DeferredAction_Cancel"></a> Cancel\(\)

```python
public void Cancel()
```

### <a id="VM_DeferredAction_Create_System_Action_"></a> Create\(Action\)

```python
public static DeferredAction Create(Action action)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [DeferredAction](VM.DeferredAction.md)

### <a id="VM_DeferredAction_Defer_System_TimeSpan_"></a> Defer\(TimeSpan\)

```python
public void Defer(TimeSpan delay)
```

#### Parameters

`delay` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="VM_DeferredAction_Dispose"></a> Dispose\(\)

```python
public void Dispose()
```

### <a id="VM_DeferredAction_Dispose_System_Boolean_"></a> Dispose\(bool\)

```python
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_DeferredAction_Finalize"></a> \~DeferredAction\(\)

```python
protected ~DeferredAction()
```


