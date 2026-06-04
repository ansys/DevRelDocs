# `DBlockCommand`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.DBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.DBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a DBlock command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-----------------------------------------------------------|------------------------------------------------------|
| [`Format`](#DBlockCommand.Format)                         | Gets the format.                                     |
| [`Index`](#DBlockCommand.Index)                           | Gets the command index.                              |
| [`Name`](#DBlockCommand.Name)                             | Gets the command name.                               |
| [`NodalLoads`](#DBlockCommand.NodalLoads)                 | Get the element surface loads.                       |
| [`NodalLoadsCount`](#DBlockCommand.NodalLoadsCount)       | Gets the number of element surface loads.            |
| [`ToCdbCommandString`](#DBlockCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="DBlockCommand.Format"></a>

### *property* DBlockCommand.Format *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the format.

<!-- !! processed by numpydoc !! -->

<a id="DBlockCommand.Index"></a>

### *property* DBlockCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="DBlockCommand.Name"></a>

### *property* DBlockCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="DBlockCommand.NodalLoads"></a>

### *property* DBlockCommand.NodalLoads *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalLoad](CommandNodalLoad.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalLoad)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get the element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="DBlockCommand.NodalLoadsCount"></a>

### *property* DBlockCommand.NodalLoadsCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="DBlockCommand.ToCdbCommandString"></a>

### *property* DBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

