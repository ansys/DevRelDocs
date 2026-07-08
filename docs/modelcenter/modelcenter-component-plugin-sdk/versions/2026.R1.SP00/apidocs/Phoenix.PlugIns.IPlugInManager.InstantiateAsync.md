# Method InstantiateAsync<T>

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## InstantiateAsync<T>(Guid)

Instantiates a particular plug-in

```csharp
Task<T> InstantiateAsync<T>(Guid id)

```

### Parameters

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The Id of the desired plug-in

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T>

A task that when complete will contain the new instance

### Type Parameters

`T`

The type of plug-in to instantiate

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If the desired plug-in is not found or cannot be
instantiated. Note that the exception may be thrown synchronously or asynchronously.
