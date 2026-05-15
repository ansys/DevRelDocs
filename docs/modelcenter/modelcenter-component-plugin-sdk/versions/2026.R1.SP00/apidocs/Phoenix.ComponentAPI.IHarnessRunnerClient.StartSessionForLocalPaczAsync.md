# Method StartSessionForLocalPaczAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## StartSessionForLocalPaczAsync(string, IRunnerSessionOptions)

Creates a session for a Pacz file.

```csharp
Task<IHarnessRunnerSession> StartSessionForLocalPaczAsync(string paczFile, IRunnerSessionOptions options)

```

### Parameters

`paczFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to a pacz file on a local disk.

`options` [IRunnerSessionOptions](Phoenix.ComponentAPI.IRunnerSessionOptions.md)

Options for creating the session. See the documentation on `Phoenix.ComponentAPI.IRunnerSessionOptions`
for more information about choosing a safe value for this parameter, and for how to use it as an implementer.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessRunnerSession](Phoenix.ComponentAPI.IHarnessRunnerSession.md)>

A task that returns the IHarnessRunnerSession for the instantiated object.

## StartSessionForLocalPaczAsync(IPaczWriter, IRunnerSessionOptions)

Creates a session for an already opened IPacz

```csharp
Task<IHarnessRunnerSession> StartSessionForLocalPaczAsync(IPaczWriter pacz, IRunnerSessionOptions options)

```

### Parameters

`pacz` [IPaczWriter](Phoenix.PaczAPI.IPaczWriter.md)

The Pacz to open a session for. This will take ownership of the
passed in object and be responsible for calling .Dispose() on it when the session
is disposed. The provided Pacz must have a non-null `Phoenix.PaczAPI.IPacz.Config`.
Options for creating the session. See the documentation on `Phoenix.ComponentAPI.IRunnerSessionOptions`
for more information about choosing a safe value for this parameter, and for how to use it as an implementer.
Note that `Phoenix.PaczAPI.IPaczClient.CreateNewPaczFileAsync(System.String,System.Boolean)` implementations do not necessarily produce a
`Phoenix.PaczAPI.IPaczWriter` which meets this requirement on their own. Between creating the `Phoenix.PaczAPI.IPaczWriter` and
passing it into this function, calling code must populate the `Phoenix.PaczAPI.IPacz.Config` property.

`options` [IRunnerSessionOptions](Phoenix.ComponentAPI.IRunnerSessionOptions.md)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessRunnerSession](Phoenix.ComponentAPI.IHarnessRunnerSession.md)>

A task that returns the IHarnessRunnerSession for the instantiated object.
