# Method OpenComponent

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## OpenComponent(IHarnessRunnerSession)

Loads a component into the control. If there is any local edit session open for it, it is closed. Builder
sessions are not changed, and should remain open.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

```csharp
public Task OpenComponent(IHarnessRunnerSession session)

```

### Parameters

`session` IHarnessRunnerSession

The session to use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

Task of the running operation.
