# Method OpenBuilderUIForComponent

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## OpenBuilderUIForComponent(IHarnessRunnerSession)

Loads a component into the control, and opens a builder UI session for it.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

```csharp
public Task<IHarnessBuilderUISession> OpenBuilderUIForComponent(IHarnessRunnerSession session)

```

### Parameters

`session` IHarnessRunnerSession

The session to use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IHarnessBuilderUISession>

Task of the running operation whose result is the created UI session.
