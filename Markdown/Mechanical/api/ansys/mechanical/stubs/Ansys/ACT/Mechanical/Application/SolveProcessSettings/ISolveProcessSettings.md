# ISolveProcessSettings

### *class* ISolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ISolveProcessSettings interface.

> <!-- !! processed by numpydoc !! -->

## Overview

### Properties

| [`DistributeSolution`](#ISolveProcessSettings.DistributeSolution)                         | Gets or sets the boolean “Distribute Solution (if possible)” field.   |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`MaxNumberOfCores`](#ISolveProcessSettings.MaxNumberOfCores)                             | Gets or sets the “Maximum number of utilized cores” field.            |
| [`NumberOfGPUDevices`](#ISolveProcessSettings.NumberOfGPUDevices)                         | Gets or sets the “Number of utilized GPU devices” field.              |
| [`AdditionalCommandLineArguments`](#ISolveProcessSettings.AdditionalCommandLineArguments) | Gets or sets the “Additional Command Line Arguments” field.           |
| [`CustomExecutablePath`](#ISolveProcessSettings.CustomExecutablePath)                     | Gets or sets the “Custom Executable Name (with path)” field.          |
| [`UserString`](#ISolveProcessSettings.UserString)                                         | Gets or sets the User String field.                                   |
| [`LicenseQueuing`](#ISolveProcessSettings.LicenseQueuing)                                 | Gets or sets the “License Queuing: Wait for Available License” field. |
| [`UseSharedLicense`](#ISolveProcessSettings.UseSharedLicense)                             | Gets or sets the “Use Shared License, if possible” field.             |
| [`SolveInSynchronousMode`](#ISolveProcessSettings.SolveInSynchronousMode)                 | Gets or sets the “Solve in synchronous mode” field.                   |
| [`ManualSolverMemorySettings`](#ISolveProcessSettings.ManualSolverMemorySettings)         | Gets the SolverMemorySettings object for the configuration.           |
| [`ManualLinuxSettings`](#ISolveProcessSettings.ManualLinuxSettings)                       | Gets the LinuxSettings object for the configuration.                  |
| [`GPUAccelerationDevice`](#ISolveProcessSettings.GPUAccelerationDevice)                   | Gets or sets the “GPU Acceleration Device” field.                     |
| [`HybridParallel`](#ISolveProcessSettings.HybridParallel)                                 | Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.   |
| [`ThreadsPerProcess`](#ISolveProcessSettings.ThreadsPerProcess)                           | Gets or sets the “Threads per process” field.                         |
| [`NumberOfProcesses`](#ISolveProcessSettings.NumberOfProcesses)                           | Gets or sets the “Number of processes” field.                         |
| [`DCSAutoDownloadResults`](#ISolveProcessSettings.DCSAutoDownloadResults)                 | Gets or sets the “DCS Auto Download Results” field.                   |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import ISolveProcessSettings
```

## Property detail

### *property* ISolveProcessSettings.DistributeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Distribute Solution (if possible)” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.MaxNumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Maximum number of utilized cores” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.NumberOfGPUDevices *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of utilized GPU devices” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.AdditionalCommandLineArguments *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Additional Command Line Arguments” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.CustomExecutablePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Custom Executable Name (with path)” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.UserString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the User String field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.LicenseQueuing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “License Queuing: Wait for Available License” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.UseSharedLicense *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Use Shared License, if possible” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.SolveInSynchronousMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Solve in synchronous mode” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolverMemorySettings](ISolverMemorySettings.md#ISolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverMemorySettings object for the configuration.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ILinuxSettings](ILinuxSettings.md#ILinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LinuxSettings object for the configuration.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “GPU Acceleration Device” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.HybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.ThreadsPerProcess *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Threads per process” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.NumberOfProcesses *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of processes” field.

<!-- !! processed by numpydoc !! -->

### *property* ISolveProcessSettings.DCSAutoDownloadResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “DCS Auto Download Results” field.

<!-- !! processed by numpydoc !! -->
