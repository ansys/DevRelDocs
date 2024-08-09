# `ISolveProcessSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

ISolveProcessSettings interface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`DistributeSolution`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.DistributeSolution)                         | Gets or sets the boolean “Distribute Solution (if possible)” field.   |
| [`MaxNumberOfCores`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.MaxNumberOfCores)                             | Gets or sets the “Maximum number of utilized cores” field.            |
| [`NumberOfGPUDevices`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.NumberOfGPUDevices)                         | Gets or sets the “Number of utilized GPU devices” field.              |
| [`AdditionalCommandLineArguments`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.AdditionalCommandLineArguments) | Gets or sets the “Additional Command Line Arguments” field.           |
| [`CustomExecutablePath`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.CustomExecutablePath)                     | Gets or sets the “Custom Executable Name (with path)” field.          |
| [`UserString`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.UserString)                                         | Gets or sets the User String field.                                   |
| [`LicenseQueuing`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.LicenseQueuing)                                 | Gets or sets the “License Queuing: Wait for Available License” field. |
| [`UseSharedLicense`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.UseSharedLicense)                             | Gets or sets the “Use Shared License, if possible” field.             |
| [`SolveInSynchronousMode`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.SolveInSynchronousMode)                 | Gets or sets the “Solve in synchronous mode” field.                   |
| [`ManualSolverMemorySettings`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.ManualSolverMemorySettings)         | Gets the SolverMemorySettings object for the configuration.           |
| [`ManualLinuxSettings`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.ManualLinuxSettings)                       | Gets the LinuxSettings object for the configuration.                  |
| [`GPUAccelerationDevice`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.GPUAccelerationDevice)                   | Gets or sets the “GPU Acceleration Device” field.                     |
| [`HybridParallel`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.HybridParallel)                                 | Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.   |
| [`ThreadsPerProcess`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.ThreadsPerProcess)                           | Gets or sets the “Threads per process” field.                         |
| [`NumberOfProcesses`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.NumberOfProcesses)                           | Gets or sets the “Number of processes” field.                         |
| [`DCSAutoDownloadResults`](../../../../../../v242/Ansys/ACT/Mechanical/Application/SolveProcessSettings/ISolveProcessSettings.md#ISolveProcessSettings.DCSAutoDownloadResults)                 | Gets or sets the “DCS Auto Download Results” field.                   |

<a id="property-detail"></a>

## Property detail

<a id="ISolveProcessSettings.DistributeSolution"></a>

### *property* ISolveProcessSettings.DistributeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Distribute Solution (if possible)” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.MaxNumberOfCores"></a>

### *property* ISolveProcessSettings.MaxNumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Maximum number of utilized cores” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.NumberOfGPUDevices"></a>

### *property* ISolveProcessSettings.NumberOfGPUDevices *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of utilized GPU devices” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.AdditionalCommandLineArguments"></a>

### *property* ISolveProcessSettings.AdditionalCommandLineArguments *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Additional Command Line Arguments” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.CustomExecutablePath"></a>

### *property* ISolveProcessSettings.CustomExecutablePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Custom Executable Name (with path)” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.UserString"></a>

### *property* ISolveProcessSettings.UserString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the User String field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.LicenseQueuing"></a>

### *property* ISolveProcessSettings.LicenseQueuing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “License Queuing: Wait for Available License” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.UseSharedLicense"></a>

### *property* ISolveProcessSettings.UseSharedLicense *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Use Shared License, if possible” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.SolveInSynchronousMode"></a>

### *property* ISolveProcessSettings.SolveInSynchronousMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Solve in synchronous mode” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.ManualSolverMemorySettings"></a>

### *property* ISolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolverMemorySettings](ISolverMemorySettings.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverMemorySettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.ManualLinuxSettings"></a>

### *property* ISolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ILinuxSettings](ILinuxSettings.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ILinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LinuxSettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.GPUAccelerationDevice"></a>

### *property* ISolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “GPU Acceleration Device” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.HybridParallel"></a>

### *property* ISolveProcessSettings.HybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.ThreadsPerProcess"></a>

### *property* ISolveProcessSettings.ThreadsPerProcess *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Threads per process” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.NumberOfProcesses"></a>

### *property* ISolveProcessSettings.NumberOfProcesses *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of processes” field.

<!-- !! processed by numpydoc !! -->

<a id="ISolveProcessSettings.DCSAutoDownloadResults"></a>

### *property* ISolveProcessSettings.DCSAutoDownloadResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “DCS Auto Download Results” field.

<!-- !! processed by numpydoc !! -->

