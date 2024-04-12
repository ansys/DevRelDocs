<a id="module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings"></a>

<a id="the-solveprocesssettings-package"></a>

# The `SolveProcessSettings` package

<a id="summary"></a>

## Summary

### Interfaces

| [`ILinuxSettings`](ILinuxSettings.md#ILinuxSettings)                      | ILinuxSettings interface.        |
|---------------------------------------------------------------------------|----------------------------------|
| [`IQueueSettings`](IQueueSettings.md#IQueueSettings)                      | IQueueSettings interface.        |
| [`ISolveConfiguration`](ISolveConfiguration.md#ISolveConfiguration)       | ISolveConfiguration interface.   |
| [`ISolveProcessSettings`](ISolveProcessSettings.md#ISolveProcessSettings) | ISolveProcessSettings interface. |
| [`ISolverMemorySettings`](ISolverMemorySettings.md#ISolverMemorySettings) | ISolverMemorySettings interface. |

### Classes

| [`SolveConfigurations`](SolveConfigurations.md#SolveConfigurations)    | The application’s collection of solve configurations.                                    |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`LinuxSettings`](LinuxSettings.md#LinuxSettings)                      | The class representing the linux settings portion of the solve process settings.         |
| [`QueueSettings`](QueueSettings.md#QueueSettings)                      | The class representing queue settings.                                                   |
| [`RSMQueue`](RSMQueue.md#RSMQueue)                                     | The class representing an RSM Queue.                                                     |
| [`SolveConfiguration`](SolveConfiguration.md#SolveConfiguration)       | The class representing a solve configuration.                                            |
| [`SolverMemorySettings`](SolverMemorySettings.md#SolverMemorySettings) | The class representing the solver memory settings portion of the solve process settings. |
| [`SolveProcessSettings`](SolveProcessSettings.md#SolveProcessSettings) | The class representing solve process settings.                                           |

<a id="description"></a>

## Description

SolveProcessSettings subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="SolveProcessSettings.SolveConfigurations"></a>

### *class* SolveProcessSettings.SolveConfigurations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The application’s collection of solve configurations.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Add`](#SolveProcessSettings.Add)       | Adds the given SolveConfiguration object to the collection.   |
|------------------------------------------|---------------------------------------------------------------|
| [`Remove`](#SolveProcessSettings.Remove) | Removes the given SolveConfiguration from the collection.     |

### Properties

| [`Count`](#SolveProcessSettings.Count)   | The number of solve configurations in the collection.   |
|------------------------------------------|---------------------------------------------------------|

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import SolveConfigurations
```

<a id="property-detail"></a>

## Property detail

<a id="SolveProcessSettings.Count"></a>

### *property* SolveProcessSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of solve configurations in the collection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolveProcessSettings.Add"></a>

### SolveProcessSettings.Add(item: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](SolveConfiguration.md#SolveConfiguration))

Adds the given SolveConfiguration object to the collection.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.Remove"></a>

### SolveProcessSettings.Remove(item: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](SolveConfiguration.md#SolveConfiguration))

Removes the given SolveConfiguration from the collection.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.LinuxSettings"></a>

### *class* SolveProcessSettings.LinuxSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing the linux settings portion of the solve process settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Active`](#id54)        | Whether the linux settings are active.   |
|--------------------------|------------------------------------------|
| [`UserName`](#id20)      | The user name.                           |
| [`WorkingFolder`](#id21) | The working folder.                      |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import LinuxSettings
```

<a id="id2"></a>

## Property detail

<a id="SolveProcessSettings.Active"></a>

### *property* SolveProcessSettings.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the linux settings are active.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.UserName"></a>

### *property* SolveProcessSettings.UserName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The user name.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.WorkingFolder"></a>

### *property* SolveProcessSettings.WorkingFolder *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The working folder.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.QueueSettings"></a>

### *class* SolveProcessSettings.QueueSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing queue settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Name`](#id29)    | The name of the queue settings.                                                                           |
|--------------------|-----------------------------------------------------------------------------------------------------------|
| [`JobName`](#id25) | The job name of the queue settings.                                                                       |
| [`License`](#id26) | The license of the queue settings.  The setter will throw an exception if the given license is not valid. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import QueueSettings
```

<a id="id4"></a>

## Property detail

<a id="SolveProcessSettings.Name"></a>

### *property* SolveProcessSettings.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the queue settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.JobName"></a>

### *property* SolveProcessSettings.JobName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The job name of the queue settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.License"></a>

### *property* SolveProcessSettings.License *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The license of the queue settings.  The setter will throw an exception if the given license is not valid.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.RSMQueue"></a>

### *class* SolveProcessSettings.RSMQueue

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing an RSM Queue.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Name`](#id29)                                              | The name of the RSM Queue.              |
|--------------------------------------------------------------|-----------------------------------------|
| [`HPCConfiguration`](#SolveProcessSettings.HPCConfiguration) | The HPC configuration of the RSM Queue. |
| [`HPCQueue`](#SolveProcessSettings.HPCQueue)                 | The HPC Queue of the RSM Queue.         |
| [`HPCType`](#SolveProcessSettings.HPCType)                   | The HPC type of the RSM Queue           |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import RSMQueue
```

<a id="id6"></a>

## Property detail

<a id="id0"></a>

### *property* SolveProcessSettings.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the RSM Queue.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.HPCConfiguration"></a>

### *property* SolveProcessSettings.HPCConfiguration *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The HPC configuration of the RSM Queue.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.HPCQueue"></a>

### *property* SolveProcessSettings.HPCQueue *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The HPC Queue of the RSM Queue.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.HPCType"></a>

### *property* SolveProcessSettings.HPCType *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The HPC type of the RSM Queue

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.SolveConfiguration"></a>

### *class* SolveProcessSettings.SolveConfiguration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing a solve configuration.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SetAsDefault`](#id34)   | Sets this solve configuration as the default.   |
|---------------------------|-------------------------------------------------|

### Properties

| [`Name`](#id29)                                                        | The name of the solve configuration.                            |
|------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`Default`](#id30)                                                     | Whether this solve configuration is the default.                |
| [`Settings`](#id31)                                                    | Returns the queue settings of this solve configuration.         |
| [`SolveProcessSettings`](SolveProcessSettings.md#SolveProcessSettings) | Returns the solve process settings of this solve configuration. |

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import SolveConfiguration
```

<a id="id8"></a>

## Property detail

<a id="id9"></a>

### *property* SolveProcessSettings.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.Default"></a>

### *property* SolveProcessSettings.Default *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether this solve configuration is the default.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.Settings"></a>

### *property* SolveProcessSettings.Settings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.QueueSettings](QueueSettings.md#QueueSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the queue settings of this solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.SolveProcessSettings"></a>

### *property* SolveProcessSettings.SolveProcessSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveProcessSettings](SolveProcessSettings.md#SolveProcessSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the solve process settings of this solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

## Method detail

<a id="SolveProcessSettings.SetAsDefault"></a>

### SolveProcessSettings.SetAsDefault()

Sets this solve configuration as the default.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.SolverMemorySettings"></a>

### *class* SolveProcessSettings.SolverMemorySettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing the solver memory settings portion of the solve process settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Active`](#id54)    | Whether the solver memory settings are active.   |
|----------------------|--------------------------------------------------|
| [`Workspace`](#id55) | Workspace size.                                  |
| [`Database`](#id56)  | Database size.                                   |

<a id="id11"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import SolverMemorySettings
```

<a id="id12"></a>

## Property detail

<a id="id13"></a>

### *property* SolveProcessSettings.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solver memory settings are active.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.Workspace"></a>

### *property* SolveProcessSettings.Workspace *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Workspace size.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.Database"></a>

### *property* SolveProcessSettings.Database *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Database size.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *class* SolveProcessSettings.SolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> The class representing solve process settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`DistributeSolution`](#id37)             | Whether to run the solution in distributed mode.                                  |
|-------------------------------------------|-----------------------------------------------------------------------------------|
| [`MaxNumberOfCores`](#id38)               | The maximum number of cores the solver will use.                                  |
| [`NumberOfGPUDevices`](#id39)             | The number of GPU devices.                                                        |
| [`AdditionalCommandLineArguments`](#id40) | Any additional command line arguments to give to the solver.                      |
| [`CustomExecutablePath`](#id41)           | The custom executable path for user programmable features in the solver.          |
| [`LicenseQueuing`](#id42)                 | Whether license queueing is active.                                               |
| [`UseSharedLicense`](#id43)               | Whether the solver will use a shared license.                                     |
| [`SolveInSynchronousMode`](#id44)         | Whether the solve will be in synchronous mode.                                    |
| [`ManualSolverMemorySettings`](#id45)     | Returns the manual solver memory settings.                                        |
| [`ManualLinuxSettings`](#id46)            | Returns the manual linux settings.                                                |
| [`GPUAccelerationDevice`](#id47)          | The GPU Acceleration device the solver will use.                                  |
| [`HybridParallel`](#id48)                 | Whether to run the solution in hybrid parallel.                                   |
| [`ThreadsPerProcess`](#id49)              | The threads per process the solver will use.                                      |
| [`NumberOfProcesses`](#id50)              | The number of processes the solver will use.                                      |
| [`DCSAutoDownloadResults`](#id51)         | Whether results need to be automatically downloaded for DCS job after completion. |

<a id="id15"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import SolveProcessSettings
```

<a id="id16"></a>

## Property detail

<a id="SolveProcessSettings.DistributeSolution"></a>

### *property* SolveProcessSettings.DistributeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to run the solution in distributed mode.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.MaxNumberOfCores"></a>

### *property* SolveProcessSettings.MaxNumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The maximum number of cores the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.NumberOfGPUDevices"></a>

### *property* SolveProcessSettings.NumberOfGPUDevices *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of GPU devices.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.AdditionalCommandLineArguments"></a>

### *property* SolveProcessSettings.AdditionalCommandLineArguments *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Any additional command line arguments to give to the solver.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.CustomExecutablePath"></a>

### *property* SolveProcessSettings.CustomExecutablePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The custom executable path for user programmable features in the solver.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.LicenseQueuing"></a>

### *property* SolveProcessSettings.LicenseQueuing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether license queueing is active.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.UseSharedLicense"></a>

### *property* SolveProcessSettings.UseSharedLicense *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solver will use a shared license.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.SolveInSynchronousMode"></a>

### *property* SolveProcessSettings.SolveInSynchronousMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the solve will be in synchronous mode.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ManualSolverMemorySettings"></a>

### *property* SolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolverMemorySettings](SolverMemorySettings.md#SolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the manual solver memory settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ManualLinuxSettings"></a>

### *property* SolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.LinuxSettings](LinuxSettings.md#LinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the manual linux settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.GPUAccelerationDevice"></a>

### *property* SolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

The GPU Acceleration device the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.HybridParallel"></a>

### *property* SolveProcessSettings.HybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether to run the solution in hybrid parallel.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ThreadsPerProcess"></a>

### *property* SolveProcessSettings.ThreadsPerProcess *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The threads per process the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.NumberOfProcesses"></a>

### *property* SolveProcessSettings.NumberOfProcesses *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of processes the solver will use.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.DCSAutoDownloadResults"></a>

### *property* SolveProcessSettings.DCSAutoDownloadResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether results need to be automatically downloaded for DCS job after completion.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ILinuxSettings"></a>

### *class* SolveProcessSettings.ILinuxSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ILinuxSettings interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Active`](#id54)        | Gets or sets whether or not manual linux settings are enable for the configuration.   |
|--------------------------|---------------------------------------------------------------------------------------|
| [`UserName`](#id20)      | Gets or sets the user name field for the manual linux settings.                       |
| [`WorkingFolder`](#id21) | Gets or sets the working folder field for the manual linxus settings.                 |

<a id="id17"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import ILinuxSettings
```

<a id="id18"></a>

## Property detail

<a id="id19"></a>

### *property* SolveProcessSettings.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether or not manual linux settings are enable for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* SolveProcessSettings.UserName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the user name field for the manual linux settings.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* SolveProcessSettings.WorkingFolder *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the working folder field for the manual linxus settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.IQueueSettings"></a>

### *class* SolveProcessSettings.IQueueSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IQueueSettings interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Name`](#id29)                                                            | Gets or sets the name of the current queue for the configuration.   |
|----------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`JobName`](#id25)                                                         | Gets or sets the Job Name field for the queue settings.             |
| [`License`](#id26)                                                         | Gets or sets the License field for the queue settings.              |
| [`DCSUrl`](#SolveProcessSettings.DCSUrl)                                   | DCSUrl property.                                                    |
| [`SolutionExecutionTarget`](#SolveProcessSettings.SolutionExecutionTarget) | SolutionExecutionTarget property.                                   |
| [`DCSUsername`](#SolveProcessSettings.DCSUsername)                         | DCSUsername property.                                               |
| [`DCSPassword`](#SolveProcessSettings.DCSPassword)                         | DCSPassword property.                                               |

<a id="id22"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import IQueueSettings
```

<a id="id23"></a>

## Property detail

<a id="id24"></a>

### *property* SolveProcessSettings.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the current queue for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* SolveProcessSettings.JobName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Job Name field for the queue settings.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* SolveProcessSettings.License *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the License field for the queue settings.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.DCSUrl"></a>

### *property* SolveProcessSettings.DCSUrl *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

DCSUrl property.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.SolutionExecutionTarget"></a>

### *property* SolveProcessSettings.SolutionExecutionTarget *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionExecutionTarget property.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.DCSUsername"></a>

### *property* SolveProcessSettings.DCSUsername *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

DCSUsername property.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.DCSPassword"></a>

### *property* SolveProcessSettings.DCSPassword *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

DCSPassword property.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ISolveConfiguration"></a>

### *class* SolveProcessSettings.ISolveConfiguration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ISolveConfiguration interface.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SetAsDefault`](#id34)   | Sets ‘this’ to be the default configuration to solve with.   |
|---------------------------|--------------------------------------------------------------|

### Properties

| [`Name`](#id29)                                                        | Gets or sets the name of the SolveConfiguraiton Object                    |
|------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`Default`](#id30)                                                     | Gets whether or not this SolveConfiguration is the default configuration. |
| [`Settings`](#id31)                                                    | Gets the QueueSettings object for the configuration.                      |
| [`SolveProcessSettings`](SolveProcessSettings.md#SolveProcessSettings) | Gets the SolveProcessSettings for the current object.                     |

<a id="id27"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import ISolveConfiguration
```

<a id="id28"></a>

## Property detail

<a id="id29"></a>

### *property* SolveProcessSettings.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the SolveConfiguraiton Object

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* SolveProcessSettings.Default *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether or not this SolveConfiguration is the default configuration.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* SolveProcessSettings.Settings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.IQueueSettings](IQueueSettings.md#IQueueSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the QueueSettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* SolveProcessSettings.SolveProcessSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveProcessSettings](ISolveProcessSettings.md#ISolveProcessSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolveProcessSettings for the current object.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

## Method detail

<a id="id34"></a>

### SolveProcessSettings.SetAsDefault()

Sets ‘this’ to be the default configuration to solve with.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ISolveProcessSettings"></a>

### *class* SolveProcessSettings.ISolveProcessSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ISolveProcessSettings interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`DistributeSolution`](#id37)                    | Gets or sets the boolean “Distribute Solution (if possible)” field.   |
|--------------------------------------------------|-----------------------------------------------------------------------|
| [`MaxNumberOfCores`](#id38)                      | Gets or sets the “Maximum number of utilized cores” field.            |
| [`NumberOfGPUDevices`](#id39)                    | Gets or sets the “Number of utilized GPU devices” field.              |
| [`AdditionalCommandLineArguments`](#id40)        | Gets or sets the “Additional Command Line Arguments” field.           |
| [`CustomExecutablePath`](#id41)                  | Gets or sets the “Custom Executable Name (with path)” field.          |
| [`UserString`](#SolveProcessSettings.UserString) | Gets or sets the User String field.                                   |
| [`LicenseQueuing`](#id42)                        | Gets or sets the “License Queuing: Wait for Available License” field. |
| [`UseSharedLicense`](#id43)                      | Gets or sets the “Use Shared License, if possible” field.             |
| [`SolveInSynchronousMode`](#id44)                | Gets or sets the “Solve in synchronous mode” field.                   |
| [`ManualSolverMemorySettings`](#id45)            | Gets the SolverMemorySettings object for the configuration.           |
| [`ManualLinuxSettings`](#id46)                   | Gets the LinuxSettings object for the configuration.                  |
| [`GPUAccelerationDevice`](#id47)                 | Gets or sets the “GPU Acceleration Device” field.                     |
| [`HybridParallel`](#id48)                        | Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.   |
| [`ThreadsPerProcess`](#id49)                     | Gets or sets the “Threads per process” field.                         |
| [`NumberOfProcesses`](#id50)                     | Gets or sets the “Number of processes” field.                         |
| [`DCSAutoDownloadResults`](#id51)                | Gets or sets the “DCS Auto Download Results” field.                   |

<a id="id35"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import ISolveProcessSettings
```

<a id="id36"></a>

## Property detail

<a id="id37"></a>

### *property* SolveProcessSettings.DistributeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Distribute Solution (if possible)” field.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* SolveProcessSettings.MaxNumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Maximum number of utilized cores” field.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* SolveProcessSettings.NumberOfGPUDevices *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of utilized GPU devices” field.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* SolveProcessSettings.AdditionalCommandLineArguments *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Additional Command Line Arguments” field.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* SolveProcessSettings.CustomExecutablePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Custom Executable Name (with path)” field.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.UserString"></a>

### *property* SolveProcessSettings.UserString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the User String field.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* SolveProcessSettings.LicenseQueuing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “License Queuing: Wait for Available License” field.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* SolveProcessSettings.UseSharedLicense *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Use Shared License, if possible” field.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* SolveProcessSettings.SolveInSynchronousMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Solve in synchronous mode” field.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* SolveProcessSettings.ManualSolverMemorySettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolverMemorySettings](ISolverMemorySettings.md#ISolverMemorySettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverMemorySettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* SolveProcessSettings.ManualLinuxSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ILinuxSettings](ILinuxSettings.md#ILinuxSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LinuxSettings object for the configuration.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* SolveProcessSettings.GPUAccelerationDevice *: [Ansys.Mechanical.DataModel.Enums.GPUAccelerationDevicesType](../../../../Mechanical/DataModel/Enums/GPUAccelerationDevicesType.md#GPUAccelerationDevicesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “GPU Acceleration Device” field.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* SolveProcessSettings.HybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the boolean “Hybrid Parallel (Mechanical APDL)” field.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* SolveProcessSettings.ThreadsPerProcess *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Threads per process” field.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* SolveProcessSettings.NumberOfProcesses *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “Number of processes” field.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* SolveProcessSettings.DCSAutoDownloadResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the “DCS Auto Download Results” field.

<!-- !! processed by numpydoc !! -->

<a id="SolveProcessSettings.ISolverMemorySettings"></a>

### *class* SolveProcessSettings.ISolverMemorySettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ISolverMemorySettings interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Active`](#id54)    | Gets or sets whether or not manual memory settings are active in the current configuration.   |
|----------------------|-----------------------------------------------------------------------------------------------|
| [`Workspace`](#id55) | Gets or sets the workspace memory amount (megabytes).                                         |
| [`Database`](#id56)  | Gets or sets the database memory amount (MB).                                                 |

<a id="id52"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application.SolveProcessSettings import ISolverMemorySettings
```

<a id="id53"></a>

## Property detail

<a id="id54"></a>

### *property* SolveProcessSettings.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether or not manual memory settings are active in the current configuration.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* SolveProcessSettings.Workspace *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the workspace memory amount (megabytes).

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* SolveProcessSettings.Database *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the database memory amount (MB).

<!-- !! processed by numpydoc !! -->
