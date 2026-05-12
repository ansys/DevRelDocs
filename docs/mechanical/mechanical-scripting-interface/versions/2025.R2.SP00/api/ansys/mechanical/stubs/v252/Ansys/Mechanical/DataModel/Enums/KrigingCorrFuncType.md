# `KrigingCorrFuncType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType(\*args, \*\*kwds)

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
| [`CorrFuncCubic`](#KrigingCorrFuncType.CorrFuncCubic) |
| [`CorrFuncExp`](#KrigingCorrFuncType.CorrFuncExp) |
| [`CorrFuncGauss`](#KrigingCorrFuncType.CorrFuncGauss) |
| [`CorrFuncLin`](#KrigingCorrFuncType.CorrFuncLin) |
| [`CorrFuncMultiQuadratic`](#KrigingCorrFuncType.CorrFuncMultiQuadratic) |
| [`CorrFuncNone`](#KrigingCorrFuncType.CorrFuncNone) |
| [`CorrFuncSpherical`](#KrigingCorrFuncType.CorrFuncSpherical) |
| [`CorrFuncThinPlateSpine`](#KrigingCorrFuncType.CorrFuncThinPlateSpine) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="KrigingCorrFuncType.CorrFuncCubic"></a>

### KrigingCorrFuncType.CorrFuncCubic *= 5*

<a id="KrigingCorrFuncType.CorrFuncExp"></a>

### KrigingCorrFuncType.CorrFuncExp *= 1*

<a id="KrigingCorrFuncType.CorrFuncGauss"></a>

### KrigingCorrFuncType.CorrFuncGauss *= 2*

<a id="KrigingCorrFuncType.CorrFuncLin"></a>

### KrigingCorrFuncType.CorrFuncLin *= 3*

<a id="KrigingCorrFuncType.CorrFuncMultiQuadratic"></a>

### KrigingCorrFuncType.CorrFuncMultiQuadratic *= 6*

<a id="KrigingCorrFuncType.CorrFuncNone"></a>

### KrigingCorrFuncType.CorrFuncNone *= 0*

<a id="KrigingCorrFuncType.CorrFuncSpherical"></a>

### KrigingCorrFuncType.CorrFuncSpherical *= 4*

<a id="KrigingCorrFuncType.CorrFuncThinPlateSpine"></a>

### KrigingCorrFuncType.CorrFuncThinPlateSpine *= 7*


