<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS"></a>

<a id="the-abaqus-package"></a>

# The `ABAQUS` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ABAQUSCommand`](ABAQUSCommand.md#ABAQUSCommand)                                     | ABAQUSCommand class.                                          |
| [`AbaqusKeyword`](AbaqusKeyword.md#AbaqusKeyword)                                     | Represents an Abaqus keyword (with arguments and data lines). |
| [`AbaqusKeywordArgumentColl`](AbaqusKeywordArgumentColl.md#AbaqusKeywordArgumentColl) | Collection of keyword arguments.                              |
| [`AbaqusKeywordArgument`](AbaqusKeywordArgument.md#AbaqusKeywordArgument)             | Represents a keyword argument (with Key and Value).           |
| [`AbaqusKeywordDataLineColl`](AbaqusKeywordDataLineColl.md#AbaqusKeywordDataLineColl) | Collection of keyword data lines.                             |
| [`AbaqusKeywordDataLine`](AbaqusKeywordDataLine.md#AbaqusKeywordDataLine)             | Represents a keyword data line.                               |

<a id="description"></a>

## Description

ABAQUS subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ABAQUS.ABAQUSCommand"></a>

### *class* ABAQUS.ABAQUSCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ABAQUSCommand class.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------|--------------------------|
| [`Name`](#id0)   | Gets the command name.   |
| [`Index`](#id3)  | Gets the command index.  |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS import ABAQUSCommand
```

<a id="property-detail"></a>

## Property detail

<a id="ABAQUS.Name"></a>

### *property* ABAQUS.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.Index"></a>

### *property* ABAQUS.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.AbaqusKeyword"></a>

### *class* ABAQUS.AbaqusKeyword

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an Abaqus keyword (with arguments and data lines).

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------------------------|-------------------------|
| [`Arguments`](#ABAQUS.Arguments)   | Gets the arguments.     |
| [`DataLines`](#ABAQUS.DataLines)   | Gets the data lines.    |
| [`Name`](#id0)                     | Gets the command name.  |
| [`Index`](#id3)                    | Gets the command index. |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS import AbaqusKeyword
```

<a id="id2"></a>

## Property detail

<a id="ABAQUS.Arguments"></a>

### *property* ABAQUS.Arguments *: [Ansys.ACT.Automation.Mechanical.FE.ABAQUS.AbaqusKeywordArgumentColl](AbaqusKeywordArgumentColl.md#AbaqusKeywordArgumentColl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the arguments.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.DataLines"></a>

### *property* ABAQUS.DataLines *: [Ansys.ACT.Automation.Mechanical.FE.ABAQUS.AbaqusKeywordDataLineColl](AbaqusKeywordDataLineColl.md#AbaqusKeywordDataLineColl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the data lines.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ABAQUS.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### *property* ABAQUS.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.AbaqusKeywordArgumentColl"></a>

### *class* ABAQUS.AbaqusKeywordArgumentColl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Collection of keyword arguments.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|--------------------|-------------------------------|
| [`Items`](#id13)   | Gets the list of arguments.   |

<a id="id4"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS import AbaqusKeywordArgumentColl
```

<a id="id5"></a>

## Property detail

<a id="ABAQUS.Items"></a>

### *property* ABAQUS.Items *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.ABAQUS.AbaqusKeywordArgument](AbaqusKeywordArgument.md#AbaqusKeywordArgument)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of arguments.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.AbaqusKeywordArgument"></a>

### *class* ABAQUS.AbaqusKeywordArgument

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a keyword argument (with Key and Value).

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|--------------------------|-----------------|
| [`Key`](#ABAQUS.Key)     | Gets the Key.   |
| [`Value`](#ABAQUS.Value) | Gets the Value. |

<a id="id6"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS import AbaqusKeywordArgument
```

<a id="id7"></a>

## Property detail

<a id="ABAQUS.Key"></a>

### *property* ABAQUS.Key *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Key.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.Value"></a>

### *property* ABAQUS.Value *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.AbaqusKeywordDataLineColl"></a>

### *class* ABAQUS.AbaqusKeywordDataLineColl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Collection of keyword data lines.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|--------------------|--------------------------------|
| [`Items`](#id13)   | Gets the list of data lines.   |

<a id="id8"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS import AbaqusKeywordDataLineColl
```

<a id="id9"></a>

## Property detail

<a id="id10"></a>

### *property* ABAQUS.Items *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.ABAQUS.AbaqusKeywordDataLine](AbaqusKeywordDataLine.md#AbaqusKeywordDataLine)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of data lines.

<!-- !! processed by numpydoc !! -->

<a id="ABAQUS.AbaqusKeywordDataLine"></a>

### *class* ABAQUS.AbaqusKeywordDataLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a keyword data line.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|--------------------|------------------------------|
| [`Items`](#id13)   | Gets the data line values.   |

<a id="id11"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS import AbaqusKeywordDataLine
```

<a id="id12"></a>

## Property detail

<a id="id13"></a>

### *property* ABAQUS.Items *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the data line values.

<!-- !! processed by numpydoc !! -->
