# Method ExecuteAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## ExecuteAsync(ComponentRunRequest, CancellationToken?)

Requests a run of the pacz.

Depending on the implementation, the actual run may be serialized or parallelized.

Clients should always send all input variables to every run and not assume that state
will be maintained between calls to ExecuteAsync.

```csharp
Task<ComponentRunResults> ExecuteAsync(ComponentRunRequest request, CancellationToken? cancel)

```

### Parameters

`request` [ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

The object that defines the run.

`cancel` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)?

A cancellation token that may be used to cancel the run request.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ComponentRunResults](Phoenix.ComponentAPI.ComponentRunResults.md)>

A task that will return the run results when they are finished.
