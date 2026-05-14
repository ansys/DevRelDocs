# `ISolveProcessSettings`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveProcessSettings"></a>

#### *class* Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`AdditionalCommandLineArguments`](#ISolveProcessSettings.AdditionalCommandLineArguments)   | Gets or sets the “Additional Command Line Arguments” field.           |
| [`CustomExecutablePath`](#ISolveProcessSettings.CustomExecutablePath)                       | Gets or sets the “Custom Executable Name (with path)” field.          |
| [`DCSAutoDownloadResults`](#ISolveProcessSettings.DCSAutoDownloadResults)                   | Gets or sets the “DCS Auto Download Results” field.                   |
| [`DistributeSolution`](#ISolveProcessSettings.DistributeSolution)                           | Gets or sets the boolean “Distribute Solution (if possible)” field.   |
| [`GPUAccelerationDevice`](#ISolveProcessSettings.GPUAccelerationDevice)                     | Gets or sets the “GPU Acceleration Device” field.                     |
| [`HybridParallel`](#ISolveProcessSettings.HybridParallel)                                   | Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.   |
| [`LicenseQueuing`](#ISolveProcessSettings.LicenseQueuing)                                   | Gets or sets the “License Queuing: Wait for Available License” field. |
| [`ManualLinuxSettings`](#ISolveProcessSettings.ManualLinuxSettings)                         | Gets the LinuxSettings object for the configuration.                  |
| [`ManualSolverMemorySettings`](#ISolveProcessSettings.ManualSolverMemorySettings)           | Gets the SolverMemorySettings object for the configuration.           |
| [`MaxNumberOfCores`](#ISolveProcessSettings.MaxNumberOfCores)                               | Gets or sets the “Maximum number of utilized cores” field.            |
| [`NumberOfGPUDevices`](#ISolveProcessSettings.NumberOfGPUDevices)                           | Gets or sets the “Number of utilized GPU devices” field.              |
| [`NumberOfProcesses`](#ISolveProcessSettings.NumberOfProcesses)                             | Gets or sets the “Number of processes” field.                         |
| [`SolveInSynchronousMode`](#ISolveProcessSettings.SolveInSynchronousMode)                   | Gets or sets the “Solve in synchronous mode” field.                   |
| [`ThreadsPerProcess`](#ISolveProcessSettings.ThreadsPerProcess)                             | Gets or sets the “Threads per process” field.                         |
| [`UseSharedLicense`](#ISolveProcessSettings.UseSharedLicense)                               | Gets or sets the “Use Shared License, if possible” field.             |
| [`UserString`](#ISolveProcessSettings.UserString)                                           | Gets or sets the User String field.                                   |

<a id="property-detail"></a>

## Property detail

<a id="ISolveProcessSettings.AdditionalCommandLineArguments"></a>

### *property* ISolveProcessSettings.AdditionalCommandLineArguments *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Additional Command Line Arguments” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.CustomExecutablePath"></a>

### *property* ISolveProcessSettings.CustomExecutablePath *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Custom Executable Name (with path)” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.DCSAutoDownloadResults"></a>

### *property* ISolveProcessSettings.DCSAutoDownloadResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “DCS Auto Download Results” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.DistributeSolution"></a>

### *property* ISolveProcessSettings.DistributeSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Distribute Solution (if possible)” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.GPUAccelerationDevice"></a>

### *property* ISolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “GPU Acceleration Device” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.HybridParallel"></a>

### *property* ISolveProcessSettings.HybridParallel *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.LicenseQueuing"></a>

### *property* ISolveProcessSettings.LicenseQueuing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “License Queuing: Wait for Available License” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.ManualLinuxSettings"></a>

### *property* ISolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ILinuxSettings](ILinuxSettings.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ILinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LinuxSettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.ManualSolverMemorySettings"></a>

### *property* ISolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolverMemorySettings](ISolverMemorySettings.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverMemorySettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.MaxNumberOfCores"></a>

### *property* ISolveProcessSettings.MaxNumberOfCores *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Maximum number of utilized cores” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.NumberOfGPUDevices"></a>

### *property* ISolveProcessSettings.NumberOfGPUDevices *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of utilized GPU devices” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.NumberOfProcesses"></a>

### *property* ISolveProcessSettings.NumberOfProcesses *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of processes” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.SolveInSynchronousMode"></a>

### *property* ISolveProcessSettings.SolveInSynchronousMode *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Solve in synchronous mode” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.ThreadsPerProcess"></a>

### *property* ISolveProcessSettings.ThreadsPerProcess *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Threads per process” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.UseSharedLicense"></a>

### *property* ISolveProcessSettings.UseSharedLicense *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Use Shared License, if possible” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.UserString"></a>

### *property* ISolveProcessSettings.UserString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the User String field.

<!-- !! processed by numpydoc !! -->

