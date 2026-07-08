# Method InstantiateAsync<T>

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## InstantiateAsync<T>()

Instantiates the plug-in

```csharp
Task<T> InstantiateAsync<T>()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T>

A task that when complete will contain the new instance

### Type Parameters

`T`

The interface to instantiate

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If there are any failures when instantiating.
Note that the exception may be thrown synchronously or asynchronously.
