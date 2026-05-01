# Method SetMetadataAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## SetMetadataAsync(IReadOnlyDictionary<string, string>)

Sets the metadata dictionary that is presented to the runner on the
`Phoenix.ComponentAPI.IHarnessRunnerHost.Metadata` property. Note, the system may
add additional metadata items as appropriate.

If the dictionary contains keys that begin with "phx:logscope:", the
prefix will be removed and the key value pairs added to a logger scope on
`Phoenix.ComponentAPI.IHarnessRunnerHost.Logger` before execution. Clients may use
this to associate logs from execution back to the given execution request.

```csharp
Task SetMetadataAsync(IReadOnlyDictionary<string, string> metadata)

```

### Parameters

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

The metadata to present to the runner

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that will indicate success or failure of the request
