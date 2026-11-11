# `NSMassCommand`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CDB.NSMassCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.NSMassCommand(iNSMassCommand: Ansys.Common.Interop.FEParsePlugin_ANSYS.INSMassCommand)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Holds definitions for the NSMASS Command from APDL used in External Model. Refer to APDL command definition for more details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Action`](#NSMassCommand.Action)                         | Gets the action to perform on the elements, ADD, DEL or LIST.                                 |
| [`Distribution`](#NSMassCommand.Distribution)             | Gets the nonstructural mass distribution method to apply. Valid only when Unit is total_mass. |
| [`Elem`](#NSMassCommand.Elem)                             | Gets the name of the component or component group to which is applied the nonstructural mass. |
| [`FullName`](#NSMassCommand.FullName)                     | FullName property.                                                                            |
| [`Index`](#NSMassCommand.Index)                           | Gets the command index.                                                                       |
| [`Name`](#NSMassCommand.Name)                             | Gets the command name.                                                                        |
| [`ToCdbCommandString`](#NSMassCommand.ToCdbCommandString) | ToCdbCommandString property.                                                                  |
| [`Unit`](#NSMassCommand.Unit)                             | Gets the unit of the input value of nonstructural mass.                                       |
| [`Val`](#NSMassCommand.Val)                               | Gets the input value of the nonstructural mass.                                               |

<a id="property-detail"></a>

## Property detail

<a id="NSMassCommand.Action"></a>

### *property* NSMassCommand.Action *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the action to perform on the elements, ADD, DEL or LIST.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.Distribution"></a>

### *property* NSMassCommand.Distribution *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the nonstructural mass distribution method to apply. Valid only when Unit is total_mass.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.Elem"></a>

### *property* NSMassCommand.Elem *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the name of the component or component group to which is applied the nonstructural mass.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.FullName"></a>

### *property* NSMassCommand.FullName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FullName property.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.Index"></a>

### *property* NSMassCommand.Index *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.Name"></a>

### *property* NSMassCommand.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.ToCdbCommandString"></a>

### *property* NSMassCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/builtins/constants.html#None)*

ToCdbCommandString property.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.Unit"></a>

### *property* NSMassCommand.Unit *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the unit of the input value of nonstructural mass.

<!-- !! processed by numpydoc !! -->

<a id="NSMassCommand.Val"></a>

### *property* NSMassCommand.Val *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the input value of the nonstructural mass.

<!-- !! processed by numpydoc !! -->

