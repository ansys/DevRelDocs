

# RAMpiSettings

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMpiSettings"></a>

### *class* RAMpiSettings

Rocky PrePost Scripting wrapper for the MPI Execution Settings.

Access it from the [`RASimulatorRun`](RASimulatorRun.md#generated.RASimulatorRun) with:

```python
simulator_run = study.GetSimulatorRun()
mpi_settings = simulator_run.GetMpiSettings()
mpi_settings.GetNumberOfProcessors()
```

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`DisableHeterogeneous`](#generated.RAMpiSettings.DisableHeterogeneous)()                      | Set the value of "Heterogeneous" to False.                 |
| [`EnableHeterogeneous`](#generated.RAMpiSettings.EnableHeterogeneous)()                        | Set the value of "Heterogeneous" to True.                  |
| [`GetExtraParams`](#generated.RAMpiSettings.GetExtraParams)()                                  | Get the value of "Extra Params".                           |
| [`GetHeterogeneous`](#generated.RAMpiSettings.GetHeterogeneous)()                              | Get the value of "Heterogeneous".                          |
| [`GetHostfile`](#generated.RAMpiSettings.GetHostfile)()                                        | Get the value of "Hostfile".                               |
| [`GetNumberOfProcessors`](#generated.RAMpiSettings.GetNumberOfProcessors)()                    | Get the value of "Number of Processors".                   |
| [`GetNumberOfThreadsPerProcess`](#generated.RAMpiSettings.GetNumberOfThreadsPerProcess)()      | Get the value of "Number of Threads Per Process".          |
| [`GetProcessingUnit`](#generated.RAMpiSettings.GetProcessingUnit)()                            | Get "Processing Unit" as a string.                         |
| [`GetSlicingDirection`](#generated.RAMpiSettings.GetSlicingDirection)()                        | Get "Slicing Direction" as a string.                       |
| [`GetTargetGpu`](#generated.RAMpiSettings.GetTargetGpu)()                                      | Get the value of "Target Gpu".                             |
| [`GetValidProcessingUnitValues`](#generated.RAMpiSettings.GetValidProcessingUnitValues)()      | Get a list of all possible values for "Processing Unit".   |
| [`GetValidSlicingDirectionValues`](#generated.RAMpiSettings.GetValidSlicingDirectionValues)()  | Get a list of all possible values for "Slicing Direction". |
| [`IsHeterogeneousEnabled`](#generated.RAMpiSettings.IsHeterogeneousEnabled)()                  | Check if the "Heterogeneous" is enabled.                   |
| [`SetExtraParams`](#generated.RAMpiSettings.SetExtraParams)(value)                             | Set the value of "Extra Params".                           |
| [`SetHeterogeneous`](#generated.RAMpiSettings.SetHeterogeneous)(value)                         | Set the value of "Heterogeneous".                          |
| [`SetHostfile`](#generated.RAMpiSettings.SetHostfile)(value)                                   | Set the value of "Hostfile".                               |
| [`SetNumberOfProcessors`](#generated.RAMpiSettings.SetNumberOfProcessors)(value)               | Set the value of "Number of Processors".                   |
| [`SetNumberOfThreadsPerProcess`](#generated.RAMpiSettings.SetNumberOfThreadsPerProcess)(value) | Set the value of "Number of Threads Per Process".          |
| [`SetProcessingUnit`](#generated.RAMpiSettings.SetProcessingUnit)(value)                       | Set the value of "Processing Unit".                        |
| [`SetSlicingDirection`](#generated.RAMpiSettings.SetSlicingDirection)(value)                   | Set the value of "Slicing Direction".                      |
| [`SetTargetGpu`](#generated.RAMpiSettings.SetTargetGpu)(value)                                 | Set the value of "Target Gpu".                             |

<a id="generated.RAMpiSettings.DisableHeterogeneous"></a>

#### DisableHeterogeneous()

Set the value of “Heterogeneous” to False.

<a id="generated.RAMpiSettings.EnableHeterogeneous"></a>

#### EnableHeterogeneous()

Set the value of “Heterogeneous” to True.

<a id="generated.RAMpiSettings.GetExtraParams"></a>

#### GetExtraParams()

Get the value of “Extra Params”.

<a id="generated.RAMpiSettings.GetHeterogeneous"></a>

#### GetHeterogeneous()

Get the value of “Heterogeneous”.

<a id="generated.RAMpiSettings.GetHostfile"></a>

#### GetHostfile()

Get the value of “Hostfile”.

<a id="generated.RAMpiSettings.GetNumberOfProcessors"></a>

#### GetNumberOfProcessors()

Get the value of “Number of Processors”.

<a id="generated.RAMpiSettings.GetNumberOfThreadsPerProcess"></a>

#### GetNumberOfThreadsPerProcess()

Get the value of “Number of Threads Per Process”.

<a id="generated.RAMpiSettings.GetProcessingUnit"></a>

#### GetProcessingUnit()

Get “Processing Unit” as a string.

* **Returns:**
  The returned value will be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

<a id="generated.RAMpiSettings.GetSlicingDirection"></a>

#### GetSlicingDirection()

Get “Slicing Direction” as a string.

* **Returns:**
  The returned value will be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

<a id="generated.RAMpiSettings.GetTargetGpu"></a>

#### GetTargetGpu()

Get the value of “Target Gpu”.

<a id="generated.RAMpiSettings.GetValidProcessingUnitValues"></a>

#### GetValidProcessingUnitValues()

Get a list of all possible values for “Processing Unit”.

* **Returns:**
  The returned list is [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

<a id="generated.RAMpiSettings.GetValidSlicingDirectionValues"></a>

#### GetValidSlicingDirectionValues()

Get a list of all possible values for “Slicing Direction”.

* **Returns:**
  The returned list is [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

<a id="generated.RAMpiSettings.IsHeterogeneousEnabled"></a>

#### IsHeterogeneousEnabled()

Check if the “Heterogeneous” is enabled.

<a id="generated.RAMpiSettings.SetExtraParams"></a>

#### SetExtraParams(value: str)

Set the value of “Extra Params”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMpiSettings.SetHeterogeneous"></a>

#### SetHeterogeneous(value: bool)

Set the value of “Heterogeneous”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMpiSettings.SetHostfile"></a>

#### SetHostfile(value: str)

Set the value of “Hostfile”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMpiSettings.SetNumberOfProcessors"></a>

#### SetNumberOfProcessors(value: str | int)

Set the value of “Number of Processors”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAMpiSettings.SetNumberOfThreadsPerProcess"></a>

#### SetNumberOfThreadsPerProcess(value: str | int)

Set the value of “Number of Threads Per Process”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAMpiSettings.SetProcessingUnit"></a>

#### SetProcessingUnit(value: str)

Set the value of “Processing Unit”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Processing Unit” option.

<a id="generated.RAMpiSettings.SetSlicingDirection"></a>

#### SetSlicingDirection(value: str)

Set the value of “Slicing Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Slicing Direction” option.

<a id="generated.RAMpiSettings.SetTargetGpu"></a>

#### SetTargetGpu(value: str | int)

Set the value of “Target Gpu”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.
