# `SeclockCommand`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.FE.CDB.SeclockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.SeclockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Holds definitions for the SECLOCK Command from APDL used in External Model. This command defines the DOFs to lock for the MPC184. Refer to APDL command definition for more details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|------------------------------------------------------------|-----------------------------------------------------------------|
| [`Index`](#SeclockCommand.Index)                           | Gets the command index.                                         |
| [`Name`](#SeclockCommand.Name)                             | Gets the command name.                                          |
| [`ToCdbCommandString`](#SeclockCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry.            |
| [`Values`](#SeclockCommand.Values)                         | Gets the values defining the SECLOCK command as list of double. |

<a id="property-detail"></a>

## Property detail

<a id="SeclockCommand.Index"></a>

### *property* SeclockCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="SeclockCommand.Name"></a>

### *property* SeclockCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="SeclockCommand.ToCdbCommandString"></a>

### *property* SeclockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

<a id="SeclockCommand.Values"></a>

### *property* SeclockCommand.Values *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values defining the SECLOCK command as list of double.
The values are defined as: first value is the locked DOF, the 2 values after are the minimum and maximum value of that DOF.
This pattern continues for any number of locked DOFs..

<!-- !! processed by numpydoc !! -->

