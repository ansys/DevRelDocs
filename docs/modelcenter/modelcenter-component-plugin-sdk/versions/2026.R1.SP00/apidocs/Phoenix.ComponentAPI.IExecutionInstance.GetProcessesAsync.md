# Method GetProcessesAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## GetProcessesAsync()

Gets a list of processes that the component has started.

```csharp
Task<IEnumerable<IProcessInfo>> GetProcessesAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IProcessInfo](Phoenix.ComponentAPI.IProcessInfo.md)>>

A Task that when complete will include a list of processes

### Remarks

This method is thread safe and is intended to be called while ExecuteAsync is in-flight.
Calling it at other times will return an empty list.
