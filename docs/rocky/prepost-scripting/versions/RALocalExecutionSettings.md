

# RALocalExecutionSettings

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RALocalExecutionSettings"></a>

### *class* RALocalExecutionSettings

Rocky PrePost Scripting wrapper for the Local Execution Settings.

Access it from the [`RASimulatorRun`](RASimulatorRun.md#generated.RASimulatorRun) with:

```python
simulator_run = study.GetSimulatorRun()
local_execution_settings = simulator_run.GetLocalExecutionSettings()
local_execution_settings.GetNumberOfProcessors()
```

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| [`GetMultiGpuSlicingDirection`](#generated.RALocalExecutionSettings.GetMultiGpuSlicingDirection)()                       | Get "Multi Gpu Slicing Direction" as a string.                                                                              |
| [`GetNumberOfProcessors`](#generated.RALocalExecutionSettings.GetNumberOfProcessors)()                                   | Get the value of "Number of Processors".                                                                                    |
| [`GetProcessingUnit`](#generated.RALocalExecutionSettings.GetProcessingUnit)()                                           | Get "Processing Unit" as a string.                                                                                          |
| [`GetTargetGpu`](#generated.RALocalExecutionSettings.GetTargetGpu)()                                                     | Get the value of "Target Gpu".                                                                                              |
| [`GetTargetGpus`](#generated.RALocalExecutionSettings.GetTargetGpus)()                                                   |                                                                                                                             |
| [`GetValidMultiGpuSlicingDirectionValues`](#generated.RALocalExecutionSettings.GetValidMultiGpuSlicingDirectionValues)() | Get a list of all possible values for "Multi Gpu Slicing Direction".                                                        |
| [`GetValidProcessingUnitValues`](#generated.RALocalExecutionSettings.GetValidProcessingUnitValues)()                     | Get a list of all possible values for "Processing Unit".                                                                    |
| [`SetMultiGpuSlicingDirection`](#generated.RALocalExecutionSettings.SetMultiGpuSlicingDirection)(value)                  | Set the value of "Multi Gpu Slicing Direction".                                                                             |
| [`SetNumberOfProcessors`](#generated.RALocalExecutionSettings.SetNumberOfProcessors)(value)                              | Set the value of "Number of Processors".                                                                                    |
| [`SetProcessingUnit`](#generated.RALocalExecutionSettings.SetProcessingUnit)(value)                                      | Set the value of "Processing Unit".                                                                                         |
| [`SetTargetGpu`](#generated.RALocalExecutionSettings.SetTargetGpu)(value)                                                | Set the value of "Target Gpu".                                                                                              |
| [`SetTargetGpus`](#generated.RALocalExecutionSettings.SetTargetGpus)(gpus)                                               | It will configure the IDs of GPUs that will be used in a local simulation based on the list of IDs or names of GPUs passed. |

<a id="generated.RALocalExecutionSettings.GetMultiGpuSlicingDirection"></a>

#### GetMultiGpuSlicingDirection()

Get “Multi Gpu Slicing Direction” as a string.

* **Returns:**
  The returned value will be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

<a id="generated.RALocalExecutionSettings.GetNumberOfProcessors"></a>

#### GetNumberOfProcessors()

Get the value of “Number of Processors”.

<a id="generated.RALocalExecutionSettings.GetProcessingUnit"></a>

#### GetProcessingUnit()

Get “Processing Unit” as a string.

* **Returns:**
  The returned value will be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

<a id="generated.RALocalExecutionSettings.GetTargetGpu"></a>

#### GetTargetGpu()

Get the value of “Target Gpu”.

<a id="generated.RALocalExecutionSettings.GetTargetGpus"></a>

#### GetTargetGpus()

* **Returns:**
  A list of IDs of the GPUs currently selected for Multi GPU simulation.

<a id="generated.RALocalExecutionSettings.GetValidMultiGpuSlicingDirectionValues"></a>

#### GetValidMultiGpuSlicingDirectionValues()

Get a list of all possible values for “Multi Gpu Slicing Direction”.

* **Returns:**
  The returned list is [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

<a id="generated.RALocalExecutionSettings.GetValidProcessingUnitValues"></a>

#### GetValidProcessingUnitValues()

Get a list of all possible values for “Processing Unit”.

* **Returns:**
  The returned list is [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

<a id="generated.RALocalExecutionSettings.SetMultiGpuSlicingDirection"></a>

#### SetMultiGpuSlicingDirection(value: str)

Set the value of “Multi Gpu Slicing Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Multi Gpu Slicing Direction” option.

<a id="generated.RALocalExecutionSettings.SetNumberOfProcessors"></a>

#### SetNumberOfProcessors(value: str | int)

Set the value of “Number of Processors”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RALocalExecutionSettings.SetProcessingUnit"></a>

#### SetProcessingUnit(value: str)

Set the value of “Processing Unit”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Processing Unit” option.

<a id="generated.RALocalExecutionSettings.SetTargetGpu"></a>

#### SetTargetGpu(value: str | int)

Set the value of “Target Gpu”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RALocalExecutionSettings.SetTargetGpus"></a>

#### SetTargetGpus(gpus: list[int | str])

It will configure the IDs of GPUs that will be used in a local simulation based on the list of IDs or
names of GPUs passed.

* **Parameters:**
  **gpus** – List with IDs or names of GPUs to be used in simulation.
  For example in the name “1 - Geforce GTX 980”, the ID is 1 and the name is “1 - Geforce GTX 980”.
