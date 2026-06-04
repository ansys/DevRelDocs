# Interface IHarnessBuilderUIHost<RUNNER>

Namespace: [Phoenix.ComponentBuilderAPI](Phoenix.ComponentBuilderAPI.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

A context object passed to builder UIs.

```csharp
public interface IHarnessBuilderUIHost<RUNNER> : ILicenseProvider, IDisposable where RUNNER : IHarnessRunner

```

#### Type Parameters

`RUNNER`

#### Implements

ILicenseProvider,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[ExtractedPacz](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.ExtractedPacz.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_ExtractedPacz)

The extracted pacz being edited. The plug-in is not responsible
for disposing the returned object.

[Logger](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.Logger.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_Logger)

Get a logger to use when writing messages.

## Methods

[CallRunnerAsync<T>(Func<IHarnessRunnerHost, RUNNER, T>)](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_CallRunnerAsync__1_System_Func_Phoenix_ComponentAPI_IHarnessRunnerHost__0___0__)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The function passed in will be invoked on the runner's thread and any return values
will be provided via the Task`T` return value.

Note: Do not access UI elements from the passed in function. Instead, collect results into the returned
object and use them from the return value.

[CallRunnerAsync<T>(Func<IHarnessRunnerHost, RUNNER, Task<T>>)](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_CallRunnerAsync__1_System_Func_Phoenix_ComponentAPI_IHarnessRunnerHost__0_System_Threading_Tasks_Task___0___)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The function passed in will be invoked on the runner's thread and any return values
will be provided via the Task`T` return value.

Note: Do not access UI elements from the passed in function. Instead, collect results into the returned
object and use them from the return value.

[CallRunnerAsync(Action<IHarnessRunnerHost, RUNNER>)](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_CallRunnerAsync_System_Action_Phoenix_ComponentAPI_IHarnessRunnerHost__0__)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The action passed in will be invoked on the runner's thread.

Note: Do not access UI elements from the passed in action. If you need results from the runner,
use the overload that returns a value. `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.CallRunnerAsync``1(System.Func{Phoenix.ComponentAPI.IHarnessRunnerHost,`0,``0})`

[CallRunnerAsync(Func<IHarnessRunnerHost, RUNNER, Task>)](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_CallRunnerAsync_System_Func_Phoenix_ComponentAPI_IHarnessRunnerHost__0_System_Threading_Tasks_Task__)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The action passed in will be invoked on the runner's thread.

Note: Do not access UI elements from the passed in action. If you need results from the runner,
use the overload that returns a value. `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.CallRunnerAsync``1(System.Func{Phoenix.ComponentAPI.IHarnessRunnerHost,`0,``0})`

[RaiseTestRunEvent()](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.RaiseTestRunEvent.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_RaiseTestRunEvent)

Raises an event requesting that the OEM client perform a test run and does not wait for the run to complete.
The test run will use the input values from the OEM, so `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.SaveAsync` should be called before
calling this if changes are present in the builder UI.

[SaveAsync()](Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.SaveAsync.md#Phoenix_ComponentBuilderAPI_IHarnessBuilderUIHost_1_SaveAsync)

Inform the host that the user has applied changes to the IHarness being edited. The changes will be applied
to the `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.ExtractedPacz` object.
