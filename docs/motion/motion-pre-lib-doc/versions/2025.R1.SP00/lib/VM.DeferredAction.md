#  Class DeferredAction

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

### <a id="VM_DeferredAction_Cancel"></a> Cancel\(\)

```csharp
public void Cancel()
```

### <a id="VM_DeferredAction_Create_System_Action_"></a> Create\(Action\)

```csharp
public static DeferredAction Create(Action action)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [DeferredAction](VM.DeferredAction.md)

### <a id="VM_DeferredAction_Defer_System_TimeSpan_"></a> Defer\(TimeSpan\)

```csharp
public void Defer(TimeSpan delay)
```

#### Parameters

`delay` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="VM_DeferredAction_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_DeferredAction_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_DeferredAction_Finalize"></a> \~DeferredAction\(\)

```csharp
protected ~DeferredAction()
```

