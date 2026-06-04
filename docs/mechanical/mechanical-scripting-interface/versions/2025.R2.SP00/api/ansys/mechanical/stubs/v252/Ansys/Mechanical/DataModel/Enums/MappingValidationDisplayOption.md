# `MappingValidationDisplayOption`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption(\*args, \*\*kwds)

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
| ---------------------------------------------------------------------- |
| [`Boxes`](#MappingValidationDisplayOption.Boxes) |
| [`ColoredDiamonds`](#MappingValidationDisplayOption.ColoredDiamonds) |
| [`ColoredPoints`](#MappingValidationDisplayOption.ColoredPoints) |
| [`ColoredSphere`](#MappingValidationDisplayOption.ColoredSphere) |
| [`Contours`](#MappingValidationDisplayOption.Contours) |
| [`Isolines`](#MappingValidationDisplayOption.Isolines) |
| [`ScaledSphere`](#MappingValidationDisplayOption.ScaledSphere) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="MappingValidationDisplayOption.Boxes"></a>

### MappingValidationDisplayOption.Boxes *= 2*

<a id="MappingValidationDisplayOption.ColoredDiamonds"></a>

### MappingValidationDisplayOption.ColoredDiamonds *= 4*

<a id="MappingValidationDisplayOption.ColoredPoints"></a>

### MappingValidationDisplayOption.ColoredPoints *= 3*

<a id="MappingValidationDisplayOption.ColoredSphere"></a>

### MappingValidationDisplayOption.ColoredSphere *= 1*

<a id="MappingValidationDisplayOption.Contours"></a>

### MappingValidationDisplayOption.Contours *= 6*

<a id="MappingValidationDisplayOption.Isolines"></a>

### MappingValidationDisplayOption.Isolines *= 5*

<a id="MappingValidationDisplayOption.ScaledSphere"></a>

### MappingValidationDisplayOption.ScaledSphere *= 0*


