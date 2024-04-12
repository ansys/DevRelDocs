<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN"></a>

<a id="the-nastran-package"></a>

# The `NASTRAN` package

<a id="summary"></a>

## Summary

### Classes

| [`NASTRANCommand`](NASTRANCommand.md#NASTRANCommand)                      | NASTRANCommand class.    |
|---------------------------------------------------------------------------|--------------------------|
| [`GenericCommand`](GenericCommand.md#GenericCommand)                      | Generic command.         |
| [`CaseControlCommand`](CaseControlCommand.md#CaseControlCommand)          | Case control command.    |
| [`NastranOption`](NastranOption.md#NastranOption)                         | Option.                  |
| [`NastranOptionLine`](NastranOptionLine.md#NastranOptionLine)             | Option line.             |
| [`OptionsControlCommand`](OptionsControlCommand.md#OptionsControlCommand) | Options control command. |

<a id="description"></a>

## Description

NASTRAN subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="NASTRAN.NASTRANCommand"></a>

### *class* NASTRAN.NASTRANCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> NASTRANCommand class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Name`](#id13)   | Gets the command name.   |
|-------------------|--------------------------|
| [`Index`](#id14)  | Gets the command index.  |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN import NASTRANCommand
```

<a id="property-detail"></a>

## Property detail

<a id="NASTRAN.Name"></a>

### *property* NASTRAN.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="NASTRAN.Index"></a>

### *property* NASTRAN.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="NASTRAN.GenericCommand"></a>

### *class* NASTRAN.GenericCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Generic command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Arguments`](#id12)   | Gets the arguments.     |
|------------------------|-------------------------|
| [`Name`](#id13)        | Gets the command name.  |
| [`Index`](#id14)       | Gets the command index. |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN import GenericCommand
```

<a id="id2"></a>

## Property detail

<a id="NASTRAN.Arguments"></a>

### *property* NASTRAN.Arguments *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the arguments.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NASTRAN.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### *property* NASTRAN.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="NASTRAN.CaseControlCommand"></a>

### *class* NASTRAN.CaseControlCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Case control command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Text`](#NASTRAN.Text)   | Gets the text.          |
|---------------------------|-------------------------|
| [`Name`](#id13)           | Gets the command name.  |
| [`Index`](#id14)          | Gets the command index. |

<a id="id4"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN import CaseControlCommand
```

<a id="id5"></a>

## Property detail

<a id="NASTRAN.Text"></a>

### *property* NASTRAN.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the text.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* NASTRAN.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* NASTRAN.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="NASTRAN.NastranOption"></a>

### *class* NASTRAN.NastranOption

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Option.

> <!-- !! processed by numpydoc !! -->

<a id="id8"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN import NastranOption
```

<a id="NASTRAN.NastranOptionLine"></a>

### *class* NASTRAN.NastranOptionLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Option line.

> <!-- !! processed by numpydoc !! -->

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN import NastranOptionLine
```

<a id="NASTRAN.OptionsControlCommand"></a>

### *class* NASTRAN.OptionsControlCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Options control command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Arguments`](#id12)                  | Gets the arguments.     |
|---------------------------------------|-------------------------|
| [`OptionLines`](#NASTRAN.OptionLines) | Gets the option lines.  |
| [`Name`](#id13)                       | Gets the command name.  |
| [`Index`](#id14)                      | Gets the command index. |

<a id="id10"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN import OptionsControlCommand
```

<a id="id11"></a>

## Property detail

<a id="id12"></a>

### *property* NASTRAN.Arguments *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the arguments.

<!-- !! processed by numpydoc !! -->

<a id="NASTRAN.OptionLines"></a>

### *property* NASTRAN.OptionLines *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the option lines.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* NASTRAN.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* NASTRAN.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->
