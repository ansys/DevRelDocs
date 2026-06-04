# Method CreateNewComponentAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## CreateNewComponentAsync(Guid, IRunnerSessionOptions)

Creates a new instance of a builder using the Id of the plug-in.
This creates both the Builder UI and the Runner. You must Dispose() both
the returned object as well as the IHarnessBuilderUISession.Runner separately.
This allows the Runner to outlive the builder UI if you so desire.

```csharp
Task<IHarnessBuilderUISession> CreateNewComponentAsync(Guid builderUIId, IRunnerSessionOptions options)

```

### Parameters

`builderUIId` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The Id of the builder UI to instantiate.

`options` [IRunnerSessionOptions](Phoenix.ComponentAPI.IRunnerSessionOptions.md)

Options for creating the runner session that supports the builder. See `Phoenix.ComponentAPI.IRunnerSessionOptions`
for more information on determining a safe value or for how to use this parameter as an implementer.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessBuilderUISession](Phoenix.ComponentAPI.IHarnessBuilderUISession.md)>

A task that returns a new IHarnessBuilderUISession.
