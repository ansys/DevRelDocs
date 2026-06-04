# `WeightingType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeightingType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.WeightingType(\*args, \*\*kwds)

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
| --------------------------------------------------------------- |
| [`Assignment`](#WeightingType.Assignment) |
| [`ClosestPoint`](#WeightingType.ClosestPoint) |
| [`KrigingFunction`](#WeightingType.KrigingFunction) |
| [`Quaternion`](#WeightingType.Quaternion) |
| [`RadialBasisFunctions`](#WeightingType.RadialBasisFunctions) |
| [`ShapeFunctions`](#WeightingType.ShapeFunctions) |
| [`Triangulation`](#WeightingType.Triangulation) |
| [`UVMapping`](#WeightingType.UVMapping) |
| [`VolumeFraction`](#WeightingType.VolumeFraction) |
| [`WeightUndefined`](#WeightingType.WeightUndefined) |
| [`WeightedAverage`](#WeightingType.WeightedAverage) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="WeightingType.Assignment"></a>

### WeightingType.Assignment *= 9*

<a id="WeightingType.ClosestPoint"></a>

### WeightingType.ClosestPoint *= 2*

<a id="WeightingType.KrigingFunction"></a>

### WeightingType.KrigingFunction *= 6*

<a id="WeightingType.Quaternion"></a>

### WeightingType.Quaternion *= 10*

<a id="WeightingType.RadialBasisFunctions"></a>

### WeightingType.RadialBasisFunctions *= 1*

<a id="WeightingType.ShapeFunctions"></a>

### WeightingType.ShapeFunctions *= 3*

<a id="WeightingType.Triangulation"></a>

### WeightingType.Triangulation *= 4*

<a id="WeightingType.UVMapping"></a>

### WeightingType.UVMapping *= 7*

<a id="WeightingType.VolumeFraction"></a>

### WeightingType.VolumeFraction *= 8*

<a id="WeightingType.WeightUndefined"></a>

### WeightingType.WeightUndefined *= 0*

<a id="WeightingType.WeightedAverage"></a>

### WeightingType.WeightedAverage *= 5*


