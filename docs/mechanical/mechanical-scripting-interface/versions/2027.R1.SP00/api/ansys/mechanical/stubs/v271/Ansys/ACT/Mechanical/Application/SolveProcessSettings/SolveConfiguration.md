# `SolveConfiguration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration"></a>

#### *class* Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

<a id="SolveConfiguration"></a>

### *class* SolveConfiguration

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

The class representing a solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------|----------------------------------------------------|
| [`CopyTo`](#SolveConfiguration.CopyTo)             | CopyTo method.                                     |
| [`Duplicate`](#SolveConfiguration.Duplicate)       | Creates a copy of the current solve configuration. |
| [`Equals`](#SolveConfiguration.Equals)             | Equals method.                                     |
| [`SetAsDefault`](#SolveConfiguration.SetAsDefault) | Sets this solve configuration as the default.      |

### Properties

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------|
| [`Default`](#SolveConfiguration.Default)                           | Whether this solve configuration is the default.                |
| [`Name`](#SolveConfiguration.Name)                                 | The name of the solve configuration.                            |
| [`Settings`](#SolveConfiguration.Settings)                         | Returns the queue settings of this solve configuration.         |
| [`SolveProcessSettings`](#SolveConfiguration.SolveProcessSettings) | Returns the solve process settings of this solve configuration. |

<a id="property-detail"></a>

## Property detail

<a id="SolveConfiguration.Default"></a>

### *property* SolveConfiguration.Default *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Whether this solve configuration is the default.

<!-- !! processed by numpydoc !! -->

<a id="SolveConfiguration.Name"></a>

### *property* SolveConfiguration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="SolveConfiguration.Settings"></a>

### *property* SolveConfiguration.Settings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.QueueSettings](QueueSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.QueueSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the queue settings of this solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="SolveConfiguration.SolveProcessSettings"></a>

### *property* SolveConfiguration.SolveProcessSettings *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveProcessSettings](SolveProcessSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveProcessSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the solve process settings of this solve configuration.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolveConfiguration.CopyTo"></a>

### SolveConfiguration.CopyTo(other: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveConfiguration](ISolveConfiguration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveConfiguration)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="SolveConfiguration.Duplicate"></a>

### SolveConfiguration.Duplicate() → [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration)

```text
Creates a copy of the current solve configuration.

Returns the duplicated solve configuration.

An exception is thrown if a configuration name is not defined.
```

<!-- !! processed by numpydoc !! -->

<a id="SolveConfiguration.Equals"></a>

### SolveConfiguration.Equals(other: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SolveConfiguration.SetAsDefault"></a>

### SolveConfiguration.SetAsDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets this solve configuration as the default.

<!-- !! processed by numpydoc !! -->

