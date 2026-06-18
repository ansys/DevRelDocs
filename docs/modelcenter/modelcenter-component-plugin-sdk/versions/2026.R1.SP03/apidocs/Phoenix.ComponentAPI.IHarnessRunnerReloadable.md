# Interface IHarnessRunnerReloadable

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

An implementation of `Phoenix.ComponentAPI.IHarnessRunner` may additionally implement this interface if reloading is expensive
and they wish to avoid the cost when a Builder UI makes a change. By default, the infrastructure will Dispose the
IHarnessRunner and create a new one anytime the user saves a change to the pacz.

```csharp
public interface IHarnessRunnerReloadable

```

## Methods

[PaczUpdated()](Phoenix.ComponentAPI.IHarnessRunnerReloadable.PaczUpdated.md#Phoenix_ComponentAPI_IHarnessRunnerReloadable_PaczUpdated)

This method will be invoked when the builder has changed the pacz. The new pacz information can be loaded from
the IHarnessRunnerHost object
