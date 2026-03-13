# `CMCommand`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.FE.CDB.CMCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.CMCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Holds definitions for the CM Command from APDL used in External Model. This command groups geometry items into a component.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------|----------------------------------------------------------------------|
| [`Cname`](#CMCommand.Cname)   | Gets the component name defined in the CM Command.                   |
| [`Index`](#CMCommand.Index)   | Gets the command index.                                              |
| [`Name`](#CMCommand.Name)     | Gets the command name.                                               |
| [`Type`](#CMCommand.Type)     | Gets the label identifying the type of geometry items to be grouped: |

<a id="property-detail"></a>

## Property detail

<a id="CMCommand.Cname"></a>

### *property* CMCommand.Cname *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the component name defined in the CM Command.

<!-- !! processed by numpydoc !! -->

<a id="CMCommand.Index"></a>

### *property* CMCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CMCommand.Name"></a>

### *property* CMCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="CMCommand.Type"></a>

### *property* CMCommand.Type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label identifying the type of geometry items to be grouped:
(NODE, ELEM, VOLU…). Refer to MAPDL documentation for more information about the entity type.

<!-- !! processed by numpydoc !! -->

