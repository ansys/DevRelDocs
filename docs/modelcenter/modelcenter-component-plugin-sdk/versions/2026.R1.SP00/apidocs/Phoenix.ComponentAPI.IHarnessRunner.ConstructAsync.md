# Method ConstructAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## ConstructAsync(IHarnessRunnerHost)

Will always be called first to allow the runner to instantiate itself.

```csharp
Task ConstructAsync(IHarnessRunnerHost host)

```

### Parameters

`host` [IHarnessRunnerHost](Phoenix.ComponentAPI.IHarnessRunnerHost.md)

The harness will be provided with a host that gives it context of its environment.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating the completion
