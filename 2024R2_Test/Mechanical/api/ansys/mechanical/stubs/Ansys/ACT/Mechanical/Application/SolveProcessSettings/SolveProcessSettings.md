# SolveProcessSettings

### *class* SolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing solve process settings.

> <!-- !! processed by numpydoc !! -->

## Overview

### Properties

| [`DistributeSolution`](#SolveProcessSettings.DistributeSolution)                         | Whether to run the solution in distributed mode.                                  |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`MaxNumberOfCores`](#SolveProcessSettings.MaxNumberOfCores)                             | The maximum number of cores the solver will use.                                  |
| [`NumberOfGPUDevices`](#SolveProcessSettings.NumberOfGPUDevices)                         | The number of GPU devices.                                                        |
| [`AdditionalCommandLineArguments`](#SolveProcessSettings.AdditionalCommandLineArguments) | Any additional command line arguments to give to the solver.                      |
| [`CustomExecutablePath`](#SolveProcessSettings.CustomExecutablePath)                     | The custom executable path for user programmable features in the solver.          |
| [`LicenseQueuing`](#SolveProcessSettings.LicenseQueuing)                                 | Whether license queueing is active.                                               |
| [`UseSharedLicense`](#SolveProcessSettings.UseSharedLicense)                             | Whether the solver will use a shared license.                                     |
| [`SolveInSynchronousMode`](#SolveProcessSettings.SolveInSynchronousMode)                 | Whether the solve will be in synchronous mode.                                    |
| [`ManualSolverMemorySettings`](#SolveProcessSettings.ManualSolverMemorySettings)         | Returns the manual solver memory settings.                                        |
| [`ManualLinuxSettings`](#SolveProcessSettings.ManualLinuxSettings)                       | Returns the manual linux settings.                                                |
| [`GPUAccelerationDevice`](#SolveProcessSettings.GPUAccelerationDevice)                   | The GPU Acceleration device the solver will use.                                  |
| [`HybridParallel`](#SolveProcessSettings.HybridParallel)                                 | Whether to run the solution in hybrid parallel.                                   |
| [`ThreadsPerProcess`](#SolveProcessSettings.ThreadsPerProcess)                           | The threads per process the solver will use.                                      |
| [`NumberOfProcesses`](#SolveProcessSettings.NumberOfProcesses)                           | The number of processes the solver will use.                                      |
| [`DCSAutoDownloadResults`](#SolveProcessSettings.DCSAutoDownloadResults)                 | Whether results need to be automatically downloaded for DCS job after completion. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import SolveProcessSettings
```

## Property detail

### *property* SolveProcessSettings.DistributeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to run the solution in distributed mode.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.MaxNumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The maximum number of cores the solver will use.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.NumberOfGPUDevices *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of GPU devices.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.AdditionalCommandLineArguments *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Any additional command line arguments to give to the solver.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.CustomExecutablePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The custom executable path for user programmable features in the solver.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.LicenseQueuing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether license queueing is active.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.UseSharedLicense *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solver will use a shared license.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.SolveInSynchronousMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solve will be in synchronous mode.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolverMemorySettings](SolverMemorySettings.md#SolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the manual solver memory settings.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.LinuxSettings](LinuxSettings.md#LinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the manual linux settings.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

The GPU Acceleration device the solver will use.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.HybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to run the solution in hybrid parallel.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.ThreadsPerProcess *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The threads per process the solver will use.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.NumberOfProcesses *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of processes the solver will use.

<!-- !! processed by numpydoc !! -->

### *property* SolveProcessSettings.DCSAutoDownloadResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether results need to be automatically downloaded for DCS job after completion.

<!-- !! processed by numpydoc !! -->
