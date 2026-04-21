# Interface IHarnessRunnerClient

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

This interface provides a client the ability to host and utilize pre-existing
harnesses within their program.

This interface is thread safe and asynchronous. It uses the task-based asynchronous
pattern ([https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) )

```csharp
public interface IHarnessRunnerClient : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Extension Methods

[Extensions.StartSessionForLocalExtractedOrCompressedPaczAsync(IHarnessRunnerClient, string, IRunnerSessionOptions)](Phoenix.Pacz.Impl.Extensions.StartSessionForLocalExtractedOrCompressedPaczAsync.md#Phoenix_Pacz_Impl_Extensions_StartSessionForLocalExtractedOrCompressedPaczAsync_Phoenix_ComponentAPI_IHarnessRunnerClient_System_String_Phoenix_ComponentAPI_IRunnerSessionOptions_)

## Methods

[InitializeAsync()](Phoenix.ComponentAPI.IHarnessRunnerClient.InitializeAsync.md#Phoenix_ComponentAPI_IHarnessRunnerClient_InitializeAsync)

Allows the client to initialize itself.

[StartSessionForLocalExtractedPaczAsync(string, IRunnerSessionOptions)](Phoenix.ComponentAPI.IHarnessRunnerClient.StartSessionForLocalExtractedPaczAsync.md#Phoenix_ComponentAPI_IHarnessRunnerClient_StartSessionForLocalExtractedPaczAsync_System_String_Phoenix_ComponentAPI_IRunnerSessionOptions_)

Creates a session for a component.pacj file and the related files associated with it

[StartSessionForLocalPaczAsync(string, IRunnerSessionOptions)](Phoenix.ComponentAPI.IHarnessRunnerClient.StartSessionForLocalPaczAsync.md#Phoenix_ComponentAPI_IHarnessRunnerClient_StartSessionForLocalPaczAsync_System_String_Phoenix_ComponentAPI_IRunnerSessionOptions_)

Creates a session for a Pacz file.

[StartSessionForLocalPaczAsync(IPaczWriter, IRunnerSessionOptions)](Phoenix.ComponentAPI.IHarnessRunnerClient.StartSessionForLocalPaczAsync.md#Phoenix_ComponentAPI_IHarnessRunnerClient_StartSessionForLocalPaczAsync_Phoenix_PaczAPI_IPaczWriter_Phoenix_ComponentAPI_IRunnerSessionOptions_)

Creates a session for an already opened IPacz
