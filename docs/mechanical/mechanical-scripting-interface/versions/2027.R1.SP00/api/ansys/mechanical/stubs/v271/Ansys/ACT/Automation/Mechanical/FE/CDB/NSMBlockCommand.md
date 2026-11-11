# `NSMBlockCommand`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.NSMBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.NSMBlockCommand(iNSMBlockCommand: Ansys.Common.Interop.FEParsePlugin_ANSYS.INSMBlockCommand)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Holds definitions for the NSMBLOCK Command from APDL used in External Model. This command contains the precomputed data of the NSMass Command. Refer to APDL command definition for more details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------------|----------------------------------------------------------|
| [`Format`](#NSMBlockCommand.Format)                         | Gets the format of the block, example: i10,8(20pg.9)).   |
| [`FullName`](#NSMBlockCommand.FullName)                     | FullName property.                                       |
| [`Index`](#NSMBlockCommand.Index)                           | Gets the command index.                                  |
| [`NSMDatas`](#NSMBlockCommand.NSMDatas)                     | Gets the NSMData list.                                   |
| [`Name`](#NSMBlockCommand.Name)                             | Gets the command name.                                   |
| [`ToCdbCommandString`](#NSMBlockCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry.     |

<a id="property-detail"></a>

## Property detail

<a id="NSMBlockCommand.Format"></a>

### *property* NSMBlockCommand.Format *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the format of the block, example: i10,8(20pg.9)).

<!-- !! processed by numpydoc !! -->

<a id="NSMBlockCommand.FullName"></a>

### *property* NSMBlockCommand.FullName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FullName property.

<!-- !! processed by numpydoc !! -->

<a id="NSMBlockCommand.Index"></a>

### *property* NSMBlockCommand.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="NSMBlockCommand.NSMDatas"></a>

### *property* NSMBlockCommand.NSMDatas *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNSMData](CommandNSMData.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNSMData)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NSMData list.

<!-- !! processed by numpydoc !! -->

<a id="NSMBlockCommand.Name"></a>

### *property* NSMBlockCommand.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="NSMBlockCommand.ToCdbCommandString"></a>

### *property* NSMBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

