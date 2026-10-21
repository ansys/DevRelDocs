# `SFEBlockCommand`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.SFEBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.SFEBlockCommand(iSFEBlockCommandObj: Ansys.Common.Interop.FEParsePlugin_ANSYS.ISFEBlockCommand)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Represents a SFEBLOCK command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------|
| [`ElementSurfaceLoadCount`](#SFEBlockCommand.ElementSurfaceLoadCount)   | Gets the number of element surface loads.            |
| [`ElementSurfaceLoads`](#SFEBlockCommand.ElementSurfaceLoads)           | Get the element surface loads.                       |
| [`Format`](#SFEBlockCommand.Format)                                     | Gets the Format.                                     |
| [`FullName`](#SFEBlockCommand.FullName)                                 | FullName property.                                   |
| [`Index`](#SFEBlockCommand.Index)                                       | Gets the command index.                              |
| [`IsDefinedFromTable`](#SFEBlockCommand.IsDefinedFromTable)             | Gets whether the values are defined using a table.   |
| [`Lab`](#SFEBlockCommand.Lab)                                           | Gets the surface load label.                         |
| [`Name`](#SFEBlockCommand.Name)                                         | Gets the command name.                               |
| [`ToCdbCommandString`](#SFEBlockCommand.ToCdbCommandString)             | Gets the command text formatted as a CDB file entry. |

<a id="property-detail"></a>

## Property detail

<a id="SFEBlockCommand.ElementSurfaceLoadCount"></a>

### *property* SFEBlockCommand.ElementSurfaceLoadCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.ElementSurfaceLoads"></a>

### *property* SFEBlockCommand.ElementSurfaceLoads *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementSurfaceLoad](CommandElementSurfaceLoad.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementSurfaceLoad)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.Format"></a>

### *property* SFEBlockCommand.Format *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Format.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.FullName"></a>

### *property* SFEBlockCommand.FullName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FullName property.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.Index"></a>

### *property* SFEBlockCommand.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.IsDefinedFromTable"></a>

### *property* SFEBlockCommand.IsDefinedFromTable *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the values are defined using a table.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.Lab"></a>

### *property* SFEBlockCommand.Lab *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the surface load label.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.Name"></a>

### *property* SFEBlockCommand.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="SFEBlockCommand.ToCdbCommandString"></a>

### *property* SFEBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

