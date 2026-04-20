# Method OpenComponentWithLocalEditSession

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## OpenComponentWithLocalEditSession(IHarnessRunnerSession)

Loads a component into the control, and opens a local edit session for it.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

```csharp
public Task<IHarnessLocalEditSession> OpenComponentWithLocalEditSession(IHarnessRunnerSession session)

```

### Parameters

`session` IHarnessRunnerSession

The session to use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<IHarnessLocalEditSession>

Task of the running operation whose result is the created edit session.
The edit session will be null if editing the component is not supported.
