# Interface IHarnessBuilderUISession

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

This interface represents a single instance of a builder UI that can be used to create
or edit a harness.

Instances of this interface are typically not thread safe. It uses the task-based asynchronous
pattern ([https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) )

```csharp
public interface IHarnessBuilderUISession : IDisposableAndAsync, IDisposable, IHarnessSaveOperations

```

#### Implements

IDisposableAndAsync,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable),
[IHarnessSaveOperations](Phoenix.ComponentAPI.IHarnessSaveOperations.md)

## Properties

[Runner](Phoenix.ComponentAPI.IHarnessBuilderUISession.Runner.md#Phoenix_ComponentAPI_IHarnessBuilderUISession_Runner)

Gets the Runner associated with this builder.

## Methods

[ShowAsync()](Phoenix.ComponentAPI.IHarnessBuilderUISession.ShowAsync.md#Phoenix_ComponentAPI_IHarnessBuilderUISession_ShowAsync)

Tell the builder UI to be shown to the user.

[TrySaveAsync()](Phoenix.ComponentAPI.IHarnessBuilderUISession.TrySaveAsync.md#Phoenix_ComponentAPI_IHarnessBuilderUISession_TrySaveAsync)

Inform any open builder windows to ask the user to save.

[ComponentChanged](Phoenix.ComponentAPI.IHarnessBuilderUISession.ComponentChanged.md#Phoenix_ComponentAPI_IHarnessBuilderUISession_ComponentChanged)

This event is fired whenever the user applies changes to the harness.

[TestRunRequested](Phoenix.ComponentAPI.IHarnessBuilderUISession.TestRunRequested.md#Phoenix_ComponentAPI_IHarnessBuilderUISession_TestRunRequested)

This event is fired whenever the user requests a test run of the component.

[WindowClosed](Phoenix.ComponentAPI.IHarnessBuilderUISession.WindowClosed.md#Phoenix_ComponentAPI_IHarnessBuilderUISession_WindowClosed)

This event is fired whenever the builder window is closed.
