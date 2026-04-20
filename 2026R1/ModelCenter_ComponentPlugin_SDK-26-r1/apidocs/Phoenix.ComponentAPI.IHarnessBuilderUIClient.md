# Interface IHarnessBuilderUIClient

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

This interface provides a client the ability to host builder UIs to create and
edit harnesses.

This interface is thread safe and asynchronous. It uses the task-based asynchronous
pattern ([https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) )

```csharp
public interface IHarnessBuilderUIClient : IHarnessRunnerClient, IDisposable

```

#### Implements

[IHarnessRunnerClient](Phoenix.ComponentAPI.IHarnessRunnerClient.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Extension Methods

[Extensions.StartSessionForLocalExtractedOrCompressedPaczAsync(IHarnessRunnerClient, string, IRunnerSessionOptions)](Phoenix.Pacz.Impl.Extensions.StartSessionForLocalExtractedOrCompressedPaczAsync.md#Phoenix_Pacz_Impl_Extensions_StartSessionForLocalExtractedOrCompressedPaczAsync_Phoenix_ComponentAPI_IHarnessRunnerClient_System_String_Phoenix_ComponentAPI_IRunnerSessionOptions_)

## Methods

[CreateNewComponentAsync(Guid, IRunnerSessionOptions)](Phoenix.ComponentAPI.IHarnessBuilderUIClient.CreateNewComponentAsync.md#Phoenix_ComponentAPI_IHarnessBuilderUIClient_CreateNewComponentAsync_System_Guid_Phoenix_ComponentAPI_IRunnerSessionOptions_)

Creates a new instance of a builder using the Id of the plug-in.
This creates both the Builder UI and the Runner. You must Dispose() both
the returned object as well as the IHarnessBuilderUISession.Runner separately.
This allows the Runner to outlive the builder UI if you so desire.

[OpenBuilderUIForComponentAsync(IHarnessRunnerSession)](Phoenix.ComponentAPI.IHarnessBuilderUIClient.OpenBuilderUIForComponentAsync.md#Phoenix_ComponentAPI_IHarnessBuilderUIClient_OpenBuilderUIForComponentAsync_Phoenix_ComponentAPI_IHarnessRunnerSession_)

Creates the builder UI to edit the given instantiated IHarnessSession. No IPaczWriter
local session may be open on this runner when calling this method.

[OpenLocalEditSessionForComponentAsync(IHarnessRunnerSession)](Phoenix.ComponentAPI.IHarnessBuilderUIClient.OpenLocalEditSessionForComponentAsync.md#Phoenix_ComponentAPI_IHarnessBuilderUIClient_OpenLocalEditSessionForComponentAsync_Phoenix_ComponentAPI_IHarnessRunnerSession_)

Opens up the pacz for the given IHarnessRunnerSession for editing locally. Typically
used to create metadata editors in the main OEM UI. No IHarnessBuilderUISession may be
open on this runner when calling this method.
