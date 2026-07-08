# `MPCommand`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FE.CDB.MPCommand"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FE.CDB.MPCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a MP command.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`C0`](#MPCommand.C0)                                 | Gets the temperature-independent term of the property.                                    |
| [`C1`](#MPCommand.C1)                                 | Gets the coefficient of the linear term in the property-versus-temperature polynomial.    |
| [`C2`](#MPCommand.C2)                                 | Gets the coefficient of the quadratic term in the property-versus-temperature polynomial. |
| [`C3`](#MPCommand.C3)                                 | Gets the coefficient of the cubic term in the property-versus-temperature polynomial.     |
| [`C4`](#MPCommand.C4)                                 | Gets the coefficient of the quartic term in the property-versus-temperature polynomial.   |
| [`Index`](#MPCommand.Index)                           | Gets the command index.                                                                   |
| [`Lab`](#MPCommand.Lab)                               | Gets the label.                                                                           |
| [`Mat`](#MPCommand.Mat)                               | Gets the material number.                                                                 |
| [`Name`](#MPCommand.Name)                             | Gets the command name.                                                                    |
| [`ToCdbCommandString`](#MPCommand.ToCdbCommandString) | Gets the command text formatted as a CDB file entry.                                      |

<a id="property-detail"></a>

## Property detail

<a id="MPCommand.C0"></a>

### *property* MPCommand.C0 *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the temperature-independent term of the property.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.C1"></a>

### *property* MPCommand.C1 *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the linear term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.C2"></a>

### *property* MPCommand.C2 *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the quadratic term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.C3"></a>

### *property* MPCommand.C3 *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the cubic term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.C4"></a>

### *property* MPCommand.C4 *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the quartic term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.Index"></a>

### *property* MPCommand.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.Lab"></a>

### *property* MPCommand.Lab *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.Mat"></a>

### *property* MPCommand.Mat *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.Name"></a>

### *property* MPCommand.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="MPCommand.ToCdbCommandString"></a>

### *property* MPCommand.ToCdbCommandString *: Ansys.ACT.Automation.Mechanical.FE.CDB.CdbCommandFormatAndParameter | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command text formatted as a CDB file entry.
Gets the command parameters formatted as a string.

<!-- !! processed by numpydoc !! -->

