# Method GetClient

Namespace: [Phoenix.ComponentClient](Phoenix.ComponentClient.md)  
Assembly: Phoenix.ComponentClient.dll

## GetClient()

Retrieve a new instance of IHarnessRunnerClient. It will be pre-initialized and ready
to do work. If you use this method, you do not need to call ConfigureServiceCollection or
ConfigureWithDefaultRepositories.

```csharp
public static Task<IHarnessRunnerClient> GetClient()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessRunnerClient](Phoenix.ComponentAPI.IHarnessRunnerClient.md)>

A task that upon completion returns a new IHarnessRunnerClient object.
