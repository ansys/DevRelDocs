# `TriangleReduction`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TriangleReduction"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.TriangleReduction(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Create a collection of name/value pairs.

Example enumeration:

```pycon
>>> class Color(Enum):
...     RED = 1
...     BLUE = 2
...     GREEN = 3
```

Access them by:

- attribute access:
  ```pycon
  >>> Color.RED
  <Color.RED: 1>
  ```
- value lookup:
  ```pycon
  >>> Color(1)
  <Color.RED: 1>
  ```
- name lookup:
  ```pycon
  >>> Color['RED']
  <Color.RED: 1>
  ```

Enumerations can be iterated over, and know how many members they have:

```pycon
>>> len(Color)
3
```

```pycon
>>> list(Color)
[<Color.RED: 1>, <Color.BLUE: 2>, <Color.GREEN: 3>]
```

Methods can be added to enumerations, and members can have their own
attributes – see the documentation for details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| --------------------------------------------------- |
| [`Aggressive`](#TriangleReduction.Aggressive) |
| [`Conservative`](#TriangleReduction.Conservative) |
| [`None_`](#TriangleReduction.None_) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="TriangleReduction.Aggressive"></a>

### TriangleReduction.Aggressive *= 2*

<a id="TriangleReduction.Conservative"></a>

### TriangleReduction.Conservative *= 1*

<a id="TriangleReduction.None_"></a>

### TriangleReduction.None_ *= 0*


