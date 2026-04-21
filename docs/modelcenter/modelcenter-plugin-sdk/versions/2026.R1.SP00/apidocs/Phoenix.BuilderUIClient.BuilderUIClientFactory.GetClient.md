# Method GetClient

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## GetClient()

Retrieve a new instance of IHarnessBuilderUIClient. It will be pre-initialized and ready
to do work. If you use this method, you do not need to call ConfigureServiceCollection or
ConfigureWithDefaultRepositories.

```csharp
public static Task<IHarnessBuilderUIClient> GetClient()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IHarnessBuilderUIClient>

A task that upon completion returns a new IHarnessRunnerClient object.
