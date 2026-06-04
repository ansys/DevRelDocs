# Interface IExecutionInstance

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

An instance of an execution context which allows the client to register for events,
query for available processes, and start the run.

```csharp
public interface IExecutionInstance

```

## Remarks

Unless otherwise noted, the methods of this class are not thread safe. This extends to the
IHarnessRunnerSession that created this instance and you should not interleave calls between
the two objects.

Note that the API is written this way to eventually support multiple execution requests in
flight at once, though none of the existing implementations support that at this time.

## Methods

[ExecuteAsync(ComponentRunRequest, CancellationToken?)](Phoenix.ComponentAPI.IExecutionInstance.ExecuteAsync.md#Phoenix_ComponentAPI_IExecutionInstance_ExecuteAsync_Phoenix_ComponentAPI_ComponentRunRequest_System_Nullable_System_Threading_CancellationToken__)

Requests a run of the pacz.

Depending on the implementation, the actual run may be serialized or parallelized.

Clients should always send all input variables to every run and not assume that state
will be maintained between calls to ExecuteAsync.

[GetProcessesAsync()](Phoenix.ComponentAPI.IExecutionInstance.GetProcessesAsync.md#Phoenix_ComponentAPI_IExecutionInstance_GetProcessesAsync)

Gets a list of processes that the component has started.

[DebugDataUpdated](Phoenix.ComponentAPI.IExecutionInstance.DebugDataUpdated.md#Phoenix_ComponentAPI_IExecutionInstance_DebugDataUpdated)

This event is raised any time debug information is updated by the CAM framework or the plug-in.
The CAM framework will supply some information at reserved keys, even if the plug-in never does.
The plug-in should supply data using appropriate display names as keys in the map.
See `Phoenix.ComponentAPI.DebugDataKeyConstants` for more information and utility functions for dealing with this map.
Implementations of this interface must never raise this event with a dictionary containing any value which is null.
