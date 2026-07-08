# `SolveProcessSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveProcessSettings"></a>

#### *class* Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The class representing solve process settings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AdditionalCommandLineArguments`](#SolveProcessSettings.AdditionalCommandLineArguments)   | Any additional command line arguments to give to the solver.                      |
| [`CustomExecutablePath`](#SolveProcessSettings.CustomExecutablePath)                       | The custom executable path for user programmable features in the solver.          |
| [`DCSAutoDownloadResults`](#SolveProcessSettings.DCSAutoDownloadResults)                   | Whether results need to be automatically downloaded for DCS job after completion. |
| [`DistributeSolution`](#SolveProcessSettings.DistributeSolution)                           | Whether to run the solution in distributed mode.                                  |
| [`GPUAccelerationDevice`](#SolveProcessSettings.GPUAccelerationDevice)                     | The GPU Acceleration device the solver will use.                                  |
| [`HybridParallel`](#SolveProcessSettings.HybridParallel)                                   | Whether to run the solution in hybrid parallel.                                   |
| [`LicenseQueuing`](#SolveProcessSettings.LicenseQueuing)                                   | Whether license queueing is active.                                               |
| [`ManualLinuxSettings`](#SolveProcessSettings.ManualLinuxSettings)                         | Returns the manual linux settings.                                                |
| [`ManualSolverMemorySettings`](#SolveProcessSettings.ManualSolverMemorySettings)           | Returns the manual solver memory settings.                                        |
| [`MaxNumberOfCores`](#SolveProcessSettings.MaxNumberOfCores)                               | The maximum number of cores the solver will use.                                  |
| [`NumberOfGPUDevices`](#SolveProcessSettings.NumberOfGPUDevices)                           | The number of GPU devices.                                                        |
| [`NumberOfProcesses`](#SolveProcessSettings.NumberOfProcesses)                             | The number of processes the solver will use.                                      |
| [`SolveInSynchronousMode`](#SolveProcessSettings.SolveInSynchronousMode)                   | Whether the solve will be in synchronous mode.                                    |
| [`ThreadsPerProcess`](#SolveProcessSettings.ThreadsPerProcess)                             | The threads per process the solver will use.                                      |
| [`UseSharedLicense`](#SolveProcessSettings.UseSharedLicense)                               | Whether the solver will use a shared license.                                     |

<a id="property-detail"></a>

## Property detail

<a id="SolveProcessSettings.AdditionalCommandLineArguments"></a>

### *property* SolveProcessSettings.AdditionalCommandLineArguments *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Any additional command line arguments to give to the solver.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.CustomExecutablePath"></a>

### *property* SolveProcessSettings.CustomExecutablePath *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The custom executable path for user programmable features in the solver.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.DCSAutoDownloadResults"></a>

### *property* SolveProcessSettings.DCSAutoDownloadResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether results need to be automatically downloaded for DCS job after completion.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.DistributeSolution"></a>

### *property* SolveProcessSettings.DistributeSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to run the solution in distributed mode.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.GPUAccelerationDevice"></a>

### *property* SolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

The GPU Acceleration device the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.HybridParallel"></a>

### *property* SolveProcessSettings.HybridParallel *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to run the solution in hybrid parallel.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.LicenseQueuing"></a>

### *property* SolveProcessSettings.LicenseQueuing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether license queueing is active.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ManualLinuxSettings"></a>

### *property* SolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.LinuxSettings](LinuxSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Application.SolveProcessSettings.LinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the manual linux settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ManualSolverMemorySettings"></a>

### *property* SolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolverMemorySettings](SolverMemorySettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the manual solver memory settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.MaxNumberOfCores"></a>

### *property* SolveProcessSettings.MaxNumberOfCores *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

The maximum number of cores the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.NumberOfGPUDevices"></a>

### *property* SolveProcessSettings.NumberOfGPUDevices *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

The number of GPU devices.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.NumberOfProcesses"></a>

### *property* SolveProcessSettings.NumberOfProcesses *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

The number of processes the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.SolveInSynchronousMode"></a>

### *property* SolveProcessSettings.SolveInSynchronousMode *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solve will be in synchronous mode.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ThreadsPerProcess"></a>

### *property* SolveProcessSettings.ThreadsPerProcess *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

The threads per process the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.UseSharedLicense"></a>

### *property* SolveProcessSettings.UseSharedLicense *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solver will use a shared license.

<!-- !! processed by numpydoc !! -->

