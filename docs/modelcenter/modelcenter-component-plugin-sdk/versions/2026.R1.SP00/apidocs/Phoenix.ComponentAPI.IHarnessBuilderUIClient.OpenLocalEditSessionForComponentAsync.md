# Method OpenLocalEditSessionForComponentAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## OpenLocalEditSessionForComponentAsync(IHarnessRunnerSession)

Opens up the pacz for the given IHarnessRunnerSession for editing locally. Typically
used to create metadata editors in the main OEM UI. No IHarnessBuilderUISession may be
open on this runner when calling this method.

```csharp
Task<IHarnessLocalEditSession> OpenLocalEditSessionForComponentAsync(IHarnessRunnerSession session)

```

### Parameters

`session` [IHarnessRunnerSession](Phoenix.ComponentAPI.IHarnessRunnerSession.md)

The session to instantiate a local edit session for. The session
must have been created by this client object. It is illegal to call this function more
than once without calling Dispose on the returned IHarnessLocalEditSession first.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessLocalEditSession](Phoenix.ComponentAPI.IHarnessLocalEditSession.md)>

A task that returns a new IHarnessLocalEditSession object

### Exceptions

[InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

If a builder or local edit session
is already open for the given runner session
