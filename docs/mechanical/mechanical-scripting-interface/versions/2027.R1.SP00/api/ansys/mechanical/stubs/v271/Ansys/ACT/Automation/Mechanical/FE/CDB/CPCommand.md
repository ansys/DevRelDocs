# `CPCommand`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.CPCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.CPCommand(iCPCommand: Ansys.Common.Interop.FEParsePlugin_ANSYS.ICPCommand)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Represents a CP command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------|------------------------------------------------------|
| [`Dof`](#CPCommand.Dof)                               | Gets the degree of freedom label.                    |
| [`FullName`](#CPCommand.FullName)                     | FullName property.                                   |
| [`Index`](#CPCommand.Index)                           | Gets the command index.                              |
| [`Name`](#CPCommand.Name)                             | Gets the command name.                               |
| [`Ncp`](#CPCommand.Ncp)                               | Gets the number of coupled nodes.                    |
| [`Nodes`](#CPCommand.Nodes)                           | Gets the nodes.                                      |
| [`ToCdbCommandString`](#CPCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="CPCommand.Dof"></a>

### *property* CPCommand.Dof *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the degree of freedom label.

<!-- !! processed by numpydoc !! -->

<a id="CPCommand.FullName"></a>

### *property* CPCommand.FullName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FullName property.

<!-- !! processed by numpydoc !! -->

<a id="CPCommand.Index"></a>

### *property* CPCommand.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CPCommand.Name"></a>

### *property* CPCommand.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="CPCommand.Ncp"></a>

### *property* CPCommand.Ncp *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of coupled nodes.

<!-- !! processed by numpydoc !! -->

<a id="CPCommand.Nodes"></a>

### *property* CPCommand.Nodes *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the nodes.

<!-- !! processed by numpydoc !! -->

<a id="CPCommand.ToCdbCommandString"></a>

### *property* CPCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

