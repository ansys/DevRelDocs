# `BFBlockCommand`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.BFBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.BFBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a BFBLOCK command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------------------------------------------|------------------------------------------------------|
| [`Format`](#BFBlockCommand.Format)                           | Gets the format.                                     |
| [`Index`](#BFBlockCommand.Index)                             | Gets the command index.                              |
| [`IsDefinedFromTable`](#BFBlockCommand.IsDefinedFromTable)   | Gets whether the values are defined using a table.   |
| [`Lab`](#BFBlockCommand.Lab)                                 | Gets the label.                                      |
| [`Name`](#BFBlockCommand.Name)                               | Gets the command name.                               |
| [`NodalBodyForceCount`](#BFBlockCommand.NodalBodyForceCount) | Gets the number of nodal body-force loads.           |
| [`NodalBodyForces`](#BFBlockCommand.NodalBodyForces)         | Gets the nodal body-force loads.                     |
| [`ToCdbCommandString`](#BFBlockCommand.ToCdbCommandString)   | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="BFBlockCommand.Format"></a>

### *property* BFBlockCommand.Format *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the format.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.Index"></a>

### *property* BFBlockCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.IsDefinedFromTable"></a>

### *property* BFBlockCommand.IsDefinedFromTable *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the values are defined using a table.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.Lab"></a>

### *property* BFBlockCommand.Lab *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.Name"></a>

### *property* BFBlockCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.NodalBodyForceCount"></a>

### *property* BFBlockCommand.NodalBodyForceCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of nodal body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.NodalBodyForces"></a>

### *property* BFBlockCommand.NodalBodyForces *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalBodyForce](CommandNodalBodyForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalBodyForce)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodal body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="BFBlockCommand.ToCdbCommandString"></a>

### *property* BFBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

