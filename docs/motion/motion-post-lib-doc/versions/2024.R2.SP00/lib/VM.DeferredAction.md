# Class DeferredAction

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class DeferredAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DeferredAction](VM.DeferredAction.md)

## Methods

### Cancel\(\)

```csharp
public void Cancel()
```

### Create\(Action\)

```csharp
public static DeferredAction Create(Action action)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [DeferredAction](VM.DeferredAction.md)

### Defer\(TimeSpan\)

```csharp
public void Defer(TimeSpan delay)
```

#### Parameters

`delay` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

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

### \~DeferredAction\(\)

```csharp
protected ~DeferredAction()
```


