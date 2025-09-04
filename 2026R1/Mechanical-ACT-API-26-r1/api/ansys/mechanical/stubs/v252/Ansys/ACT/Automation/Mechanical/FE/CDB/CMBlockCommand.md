# `CMBlockCommand`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.CMBlockCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.CMBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a CMBLOCK command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|------------------------------------------------------------|------------------------------------------------------|
| [`Cmname`](#CMBlockCommand.Cmname)                         | Gets the component name.                             |
| [`Elements`](#CMBlockCommand.Elements)                     | Gets the type of entities.                           |
| [`Format`](#CMBlockCommand.Format)                         | Gets the Format.                                     |
| [`Index`](#CMBlockCommand.Index)                           | Gets the command index.                              |
| [`Name`](#CMBlockCommand.Name)                             | Gets the command name.                               |
| [`ToCdbCommandString`](#CMBlockCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry. |
| [`Type`](#CMBlockCommand.Type)                             | Gets the type of entities (node or elem).            |

<a id="property-detail"></a>

## Property detail

<a id="CMBlockCommand.Cmname"></a>

### *property* CMBlockCommand.Cmname *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the component name.

<!-- !! processed by numpydoc !! -->

<a id="CMBlockCommand.Elements"></a>

### *property* CMBlockCommand.Elements *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of entities.

<!-- !! processed by numpydoc !! -->

<a id="CMBlockCommand.Format"></a>

### *property* CMBlockCommand.Format *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Format.

<!-- !! processed by numpydoc !! -->

<a id="CMBlockCommand.Index"></a>

### *property* CMBlockCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CMBlockCommand.Name"></a>

### *property* CMBlockCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="CMBlockCommand.ToCdbCommandString"></a>

### *property* CMBlockCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

<a id="CMBlockCommand.Type"></a>

### *property* CMBlockCommand.Type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of entities (node or elem).

<!-- !! processed by numpydoc !! -->

