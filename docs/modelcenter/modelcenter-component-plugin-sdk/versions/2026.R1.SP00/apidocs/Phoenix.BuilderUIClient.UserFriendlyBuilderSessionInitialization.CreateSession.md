# Method CreateSession

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## CreateSession(UserFriendlyBuilderSessionInitialization, Guid, IHarnessBuilderUIClient, IPaczClient, IRunnerSessionOptions)

Create a new builder UI session.

```csharp
public static Task<IHarnessBuilderUISession> CreateSession(UserFriendlyBuilderSessionInitialization init, Guid plugInId, IHarnessBuilderUIClient camClient, IPaczClient paczClient, IRunnerSessionOptions sessionOptions)

```

### Parameters

`init` [UserFriendlyBuilderSessionInitialization](Phoenix.BuilderUIClient.UserFriendlyBuilderSessionInitialization.md)

The results from the initialization dialog.

`plugInId` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

The plug-in ID.

`camClient` IHarnessBuilderUIClient

The CAM client to use.

`paczClient` IPaczClient

The PACZ client to use.

`sessionOptions` IRunnerSessionOptions

The options to pass to the client when creating sessions.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IHarnessBuilderUISession>

The newly created session.

### Remarks

See the documentation on `Phoenix.ComponentAPI.IRunnerSessionOptions` for more information on determining a safe value for
`sessionOptions`.
