# `MappingValidationType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingValidationType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.MappingValidationType(\*args, \*\*kwds)

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
| ------------------------------------------------------------------------- |
| [`DistanceBasedAverage`](#MappingValidationType.DistanceBasedAverage) |
| [`ReverseMapping`](#MappingValidationType.ReverseMapping) |
| [`SourceValue`](#MappingValidationType.SourceValue) |
| [`Undefined`](#MappingValidationType.Undefined) |
| [`UndefinedPoints`](#MappingValidationType.UndefinedPoints) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="MappingValidationType.DistanceBasedAverage"></a>

### MappingValidationType.DistanceBasedAverage *= 2*

<a id="MappingValidationType.ReverseMapping"></a>

### MappingValidationType.ReverseMapping *= 1*

<a id="MappingValidationType.SourceValue"></a>

### MappingValidationType.SourceValue *= 3*

<a id="MappingValidationType.Undefined"></a>

### MappingValidationType.Undefined *= 0*

<a id="MappingValidationType.UndefinedPoints"></a>

### MappingValidationType.UndefinedPoints *= 4*


