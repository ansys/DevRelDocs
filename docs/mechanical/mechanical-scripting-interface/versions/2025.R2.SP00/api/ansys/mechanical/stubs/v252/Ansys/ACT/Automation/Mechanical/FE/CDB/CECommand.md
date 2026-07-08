# `CECommand`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.CECommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.CECommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a CE command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------|------------------------------------------------------|
| [`Constant`](#CECommand.Constant)                     | Gets the constant term of the equation.              |
| [`Index`](#CECommand.Index)                           | Gets the command index.                              |
| [`Name`](#CECommand.Name)                             | Gets the command name.                               |
| [`Nce`](#CECommand.Nce)                               | Gets the constraint equation number.                 |
| [`Terms`](#CECommand.Terms)                           | Gets the equation terms.                             |
| [`ToCdbCommandString`](#CECommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="CECommand.Constant"></a>

### *property* CECommand.Constant *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the constant term of the equation.

<!-- !! processed by numpydoc !! -->

<a id="CECommand.Index"></a>

### *property* CECommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CECommand.Name"></a>

### *property* CECommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="CECommand.Nce"></a>

### *property* CECommand.Nce *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the constraint equation number.

<!-- !! processed by numpydoc !! -->

<a id="CECommand.Terms"></a>

### *property* CECommand.Terms *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandCETerm](CommandCETerm.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandCETerm)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the equation terms.

<!-- !! processed by numpydoc !! -->

<a id="CECommand.ToCdbCommandString"></a>

### *property* CECommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

