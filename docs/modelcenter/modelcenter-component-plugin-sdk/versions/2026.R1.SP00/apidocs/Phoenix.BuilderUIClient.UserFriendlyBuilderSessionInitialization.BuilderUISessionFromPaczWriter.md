# Method BuilderUISessionFromPaczWriter

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## BuilderUISessionFromPaczWriter(IHarnessBuilderUIClient, IPaczWriter, IRunnerSessionOptions)

A utility function to create a builder UI session from an existing `Phoenix.PaczAPI.IPaczWriter`.

```csharp
public static Task<IHarnessBuilderUISession> BuilderUISessionFromPaczWriter(IHarnessBuilderUIClient camClient, IPaczWriter paczWriter, IRunnerSessionOptions sessionOptions)

```

### Parameters

`camClient` IHarnessBuilderUIClient

The CAM client to use.

`paczWriter` IPaczWriter

The writer to open a builder UI session for.

`sessionOptions` IRunnerSessionOptions

The options for creating the session.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IHarnessBuilderUISession>

A new builder UI session for the writer.

### Remarks

See `Phoenix.ComponentAPI.IRunnerSessionOptions` for more information on determining a safe value for
`sessionOptions`.
