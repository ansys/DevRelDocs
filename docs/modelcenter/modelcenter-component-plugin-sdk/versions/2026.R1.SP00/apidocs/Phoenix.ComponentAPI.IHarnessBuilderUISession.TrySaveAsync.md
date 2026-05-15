# Method TrySaveAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## TrySaveAsync()

Inform any open builder windows to ask the user to save.

```csharp
Task<bool> TrySaveAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

A task that returns True if the user did not cancel, false if it is canceled.
