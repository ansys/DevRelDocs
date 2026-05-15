# Method OpenBuilderUIForComponentAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## OpenBuilderUIForComponentAsync(IHarnessRunnerSession)

Creates the builder UI to edit the given instantiated IHarnessSession. No IPaczWriter
local session may be open on this runner when calling this method.

```csharp
Task<IHarnessBuilderUISession> OpenBuilderUIForComponentAsync(IHarnessRunnerSession session)

```

### Parameters

`session` [IHarnessRunnerSession](Phoenix.ComponentAPI.IHarnessRunnerSession.md)

The session to instantiate a builder UI for. The session must have been
created by this client object. It is illegal to call this function more than once
without calling Dispose on the returned IHarnessBuilderUISession first.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessBuilderUISession](Phoenix.ComponentAPI.IHarnessBuilderUISession.md)>

A task that returns a new IHarnessBuilderUISession.

### Exceptions

[InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

If a builder or local edit session
is already open for the given runner session
