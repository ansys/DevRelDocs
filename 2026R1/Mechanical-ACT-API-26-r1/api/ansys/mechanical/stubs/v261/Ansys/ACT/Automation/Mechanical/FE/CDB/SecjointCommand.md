# `SecjointCommand`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.FE.CDB.SecjointCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.SecjointCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Holds definitions for the SECJOINT Command from APDL used in External Model. This command defines multiple aspects of an MPC (coordinate system, relative DOFs …). Refer to APDL command definition for more details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`DataType`](#SecjointCommand.DataType)                     | Gets the type of data set by the SECJOINT (LSYS, RDOF…).                                      |
| [`Index`](#SecjointCommand.Index)                           | Gets the command index.                                                                       |
| [`Name`](#SecjointCommand.Name)                             | Gets the command name.                                                                        |
| [`ToCdbCommandString`](#SecjointCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry.                                          |
| [`Values`](#SecjointCommand.Values)                         | Gets the values defining the SECJOINT command. The value will either be a double or a string. |

<a id="property-detail"></a>

## Property detail

<a id="SecjointCommand.DataType"></a>

### *property* SecjointCommand.DataType *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of data set by the SECJOINT (LSYS, RDOF…).

<!-- !! processed by numpydoc !! -->

<a id="SecjointCommand.Index"></a>

### *property* SecjointCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="SecjointCommand.Name"></a>

### *property* SecjointCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="SecjointCommand.ToCdbCommandString"></a>

### *property* SecjointCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

<a id="SecjointCommand.Values"></a>

### *property* SecjointCommand.Values *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values defining the SECJOINT command. The value will either be a double or a string.

<!-- !! processed by numpydoc !! -->

