# Interface IHarnessRunner

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

The interface that a harness runner must implement. The implementing class should use the
following attributes:

- System.Runtime.InteropServices.GuidAttribute
- Phoenix.Plugins.PlugInTypesAttribute(typeof(IHarnessRunner))
- Phoenix.Plugins.PlugInDisplayName

A harness does not need to be thread safe and will never be called from more than one thread.

If the harness runner implements IDisposable, it will be disposed at an appropriate time.

```csharp
[PlugInInterfaceName("Phoenix::IHarnessRunner")]
public interface IHarnessRunner

```

## Methods

[ConstructAsync(IHarnessRunnerHost)](Phoenix.ComponentAPI.IHarnessRunner.ConstructAsync.md#Phoenix_ComponentAPI_IHarnessRunner_ConstructAsync_Phoenix_ComponentAPI_IHarnessRunnerHost_)

Will always be called first to allow the runner to instantiate itself.

[RunAsync(IReadOnlyDictionary<string, VariableState>, VariableValueScope, CancellationToken)](Phoenix.ComponentAPI.IHarnessRunner.RunAsync.md#Phoenix_ComponentAPI_IHarnessRunner_RunAsync_System_Collections_Generic_IReadOnlyDictionary_System_String_Phoenix_ModelCenter_Common_Types_VariableState__Phoenix_ModelCenter_Common_Types_VariableValueScope_System_Threading_CancellationToken_)

Tells this harness to run.
