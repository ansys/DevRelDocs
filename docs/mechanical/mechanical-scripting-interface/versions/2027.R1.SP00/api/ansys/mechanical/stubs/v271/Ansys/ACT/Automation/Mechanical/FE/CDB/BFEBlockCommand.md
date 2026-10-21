# `BFEBlockCommand`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.BFEBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.BFEBlockCommand(iBFEBlockCommandObj: Ansys.Common.Interop.FEParsePlugin_ANSYS.IBFEBlockCommand)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Represents a BFEBLOCK command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|---------------------------------------------------------------------|------------------------------------------------------|
| [`ElementBodyForceCount`](#BFEBlockCommand.ElementBodyForceCount)   | Gets the number of element body-force loads.         |
| [`ElementBodyForces`](#BFEBlockCommand.ElementBodyForces)           | Gets the element body-force loads.                   |
| [`Format`](#BFEBlockCommand.Format)                                 | Gets the format.                                     |
| [`FullName`](#BFEBlockCommand.FullName)                             | FullName property.                                   |
| [`Index`](#BFEBlockCommand.Index)                                   | Gets the command index.                              |
| [`IsDefinedFromTable`](#BFEBlockCommand.IsDefinedFromTable)         | Gets whether the values are defined using a table.   |
| [`Lab`](#BFEBlockCommand.Lab)                                       | Gets the label.                                      |
| [`Name`](#BFEBlockCommand.Name)                                     | Gets the command name.                               |
| [`ToCdbCommandString`](#BFEBlockCommand.ToCdbCommandString)         | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="BFEBlockCommand.ElementBodyForceCount"></a>

### *property* BFEBlockCommand.ElementBodyForceCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of element body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.ElementBodyForces"></a>

### *property* BFEBlockCommand.ElementBodyForces *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementBodyForce](CommandElementBodyForce.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementBodyForce)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the element body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.Format"></a>

### *property* BFEBlockCommand.Format *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the format.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.FullName"></a>

### *property* BFEBlockCommand.FullName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FullName property.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.Index"></a>

### *property* BFEBlockCommand.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.IsDefinedFromTable"></a>

### *property* BFEBlockCommand.IsDefinedFromTable *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the values are defined using a table.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.Lab"></a>

### *property* BFEBlockCommand.Lab *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.Name"></a>

### *property* BFEBlockCommand.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="BFEBlockCommand.ToCdbCommandString"></a>

### *property* BFEBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

