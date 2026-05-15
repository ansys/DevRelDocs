# Class DeferredAction
<a id="VM_DeferredAction"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class DeferredAction
```

#### Inheritance

object ← 
[DeferredAction](VM.DeferredAction.md)

## Methods

### <a id="VM_DeferredAction_Cancel"></a> Cancel\(\)

```csharp
public void Cancel()
```

### <a id="VM_DeferredAction_Create_System_Action_"></a> Create\(Action\)

```csharp
public static DeferredAction Create(Action action)
```

#### Parameters

`action` Action

#### Returns

 [DeferredAction](VM.DeferredAction.md)

### <a id="VM_DeferredAction_Defer_System_TimeSpan_"></a> Defer\(TimeSpan\)

```csharp
public void Defer(TimeSpan delay)
```

#### Parameters

`delay` TimeSpan

### <a id="VM_DeferredAction_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_DeferredAction_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` bool

### <a id="VM_DeferredAction_Finalize"></a> \~DeferredAction\(\)

```csharp
protected ~DeferredAction()
```

