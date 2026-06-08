# Method TrySavingExistingSessionAsync

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## TrySavingExistingSessionAsync(FutureOperation, IHarnessRunnerSession, bool, bool)

Checks the current builder or writer session for changes, prompts the user if they want to save and continue,
and if so, saves and closes that session. Call this before calls to
`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenComponentWithLocalEditSession(Phoenix.ComponentAPI.IHarnessRunnerSession)`, see `Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenBuilderUIForComponent(Phoenix.ComponentAPI.IHarnessRunnerSession)`,
`Phoenix.BuilderUIClient.ComponentInfoSessionManager.OpenExistingBuilderUI(Phoenix.ComponentAPI.IHarnessBuilderUISession)`, and `Phoenix.BuilderUIClient.ComponentInfoSessionManager.UnloadComponent`.
Does nothing if it is determined the current sessions can be reused via the provided arguments.

```csharp
public Task<bool> TrySavingExistingSessionAsync(ComponentInfoSessionManager.FutureOperation operation, IHarnessRunnerSession newSession, bool silent = false, bool closeExistingSessions = true)

```

### Parameters

`operation` [ComponentInfoSessionManager](Phoenix.BuilderUIClient.ComponentInfoSessionManager.md).[FutureOperation](Phoenix.BuilderUIClient.ComponentInfoSessionManager.FutureOperation.md)

The future operation that will be performed.

`newSession` IHarnessRunnerSession

The new `Phoenix.ComponentAPI.IHarnessRunnerSession` that will be switched to.
Not the builder UI or local edit session.

`silent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, the user will not be prompted to apply or cancel changes, and false will be
returned if there are changes. (default: false)

`closeExistingSessions` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, will close any existing builder UI session if opening a local
edit session and vice-versa. If false, will return that the operation is not possible in those cases.
(default: true)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

Task whose result will be true if the operation should continue, and false if the user cancelled the
operation.
