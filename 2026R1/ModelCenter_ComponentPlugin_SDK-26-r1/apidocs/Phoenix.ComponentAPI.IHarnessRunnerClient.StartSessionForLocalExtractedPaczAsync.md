# Method StartSessionForLocalExtractedPaczAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## StartSessionForLocalExtractedPaczAsync(string, IRunnerSessionOptions)

Creates a session for a component.pacj file and the related files associated with it

```csharp
Task<IHarnessRunnerSession> StartSessionForLocalExtractedPaczAsync(string filename, IRunnerSessionOptions options)

```

### Parameters

`filename` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to a directory containing a component.pacj file on a local disk.

`options` [IRunnerSessionOptions](Phoenix.ComponentAPI.IRunnerSessionOptions.md)

Options for creating the session. See the documentation on `Phoenix.ComponentAPI.IRunnerSessionOptions`
for more information about choosing a safe value for this parameter, and for how to use it as an implementer.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IHarnessRunnerSession](Phoenix.ComponentAPI.IHarnessRunnerSession.md)>

A task that returns the IHarnessRunnerSession for the instantiated object.
