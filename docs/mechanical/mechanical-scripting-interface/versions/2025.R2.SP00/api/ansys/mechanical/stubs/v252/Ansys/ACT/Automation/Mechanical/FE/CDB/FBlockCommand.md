# `FBlockCommand`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.FBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.FBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a FBlock command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-----------------------------------------------------------|------------------------------------------------------|
| [`Format`](#FBlockCommand.Format)                         | Gets the format.                                     |
| [`Index`](#FBlockCommand.Index)                           | Gets the command index.                              |
| [`Name`](#FBlockCommand.Name)                             | Gets the command name.                               |
| [`NodalLoads`](#FBlockCommand.NodalLoads)                 | Gets the element types.                              |
| [`NodalLoadsCount`](#FBlockCommand.NodalLoadsCount)       | Gets the element type count.                         |
| [`ToCdbCommandString`](#FBlockCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="FBlockCommand.Format"></a>

### *property* FBlockCommand.Format *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the format.

<!-- !! processed by numpydoc !! -->

<a id="FBlockCommand.Index"></a>

### *property* FBlockCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="FBlockCommand.Name"></a>

### *property* FBlockCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="FBlockCommand.NodalLoads"></a>

### *property* FBlockCommand.NodalLoads *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalLoad](CommandNodalLoad.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalLoad)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element types.

<!-- !! processed by numpydoc !! -->

<a id="FBlockCommand.NodalLoadsCount"></a>

### *property* FBlockCommand.NodalLoadsCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element type count.

<!-- !! processed by numpydoc !! -->

<a id="FBlockCommand.ToCdbCommandString"></a>

### *property* FBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

