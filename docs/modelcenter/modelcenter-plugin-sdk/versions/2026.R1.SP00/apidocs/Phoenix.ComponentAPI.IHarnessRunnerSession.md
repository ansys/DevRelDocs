# Interface IHarnessRunnerSession

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

This interface represents an open session to a harness allowing execution of the
component.

Session objects are informational to the infrastructure. It is not guaranteed that
instances of the harness map one to one to session objects, though that will generally be
true.

Additionally, clients should not assume that input values are maintained between calls to
ExecuteAsync. Each call should send all input variable values.

This object is not thread safe. It uses the task-based asynchronous pattern.

```csharp
public interface IHarnessRunnerSession : IDisposableAndAsync, IDisposable

```

#### Implements

IDisposableAndAsync,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[PlugInInstance](Phoenix.ComponentAPI.IHarnessRunnerSession.PlugInInstance.md#Phoenix_ComponentAPI_IHarnessRunnerSession_PlugInInstance)

Gets the metadata about the plug-in that is responsible for this pacz instance.

## Methods

[CreateExecutionInstance()](Phoenix.ComponentAPI.IHarnessRunnerSession.CreateExecutionInstance.md#Phoenix_ComponentAPI_IHarnessRunnerSession_CreateExecutionInstance)

Creates an instance of `Phoenix.ComponentAPI.IExecutionInstance` which will allow the client
to listen for events and start the run.

[GetPaczAsync()](Phoenix.ComponentAPI.IHarnessRunnerSession.GetPaczAsync.md#Phoenix_ComponentAPI_IHarnessRunnerSession_GetPaczAsync)

Gets the IPacz instance for this instance.

[SetMetadataAsync(IReadOnlyDictionary<string, string>)](Phoenix.ComponentAPI.IHarnessRunnerSession.SetMetadataAsync.md#Phoenix_ComponentAPI_IHarnessRunnerSession_SetMetadataAsync_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__)

Sets the metadata dictionary that is presented to the runner on the
`Phoenix.ComponentAPI.IHarnessRunnerHost.Metadata` property. Note, the system may
add additional metadata items as appropriate.

If the dictionary contains keys that begin with "phx:logscope:", the
prefix will be removed and the key value pairs added to a logger scope on
`Phoenix.ComponentAPI.IHarnessRunnerHost.Logger` before execution. Clients may use
this to associate logs from execution back to the given execution request.
