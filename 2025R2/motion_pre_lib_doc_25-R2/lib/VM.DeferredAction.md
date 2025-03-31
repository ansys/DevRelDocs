# Class DeferredAction

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class DeferredAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DeferredAction](VM.DeferredAction.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

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


