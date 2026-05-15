# Method OpenExistingBuilderUI

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## OpenExistingBuilderUI(IHarnessBuilderUISession)

Loads a component into the control that already has an existing builder UI session.
The builder session will now be managed by this object.
TrySavingExistingSessionAsync(IHarnessRunnerSession) should be called before this to ensure
changes are applied and the user is given a chance to cancel.

```csharp
public Task OpenExistingBuilderUI(IHarnessBuilderUISession session)

```

### Parameters

`session` IHarnessBuilderUISession

The session to use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

Task of the running operation.
